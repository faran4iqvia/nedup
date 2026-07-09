'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  countKnownVocabForLesson,
  readProgress,
  setVocabKnown,
  vocabKey,
} from '@/lib/progress-storage';

export type VocabWord = {
  dutch: string;
  english: string;
};

type VocabularyToolProps = {
  lessonId: string;
  previousCount?: number;
  newCount?: number;
  totalCount?: number;
  words?: VocabWord[];
};

export default function VocabularyTool({
  lessonId,
  previousCount,
  newCount,
  totalCount,
  words = [],
}: VocabularyToolProps) {
  const [knownCount, setKnownCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [markedAll, setMarkedAll] = useState(false);

  useEffect(() => {
    setKnownCount(countKnownVocabForLesson(lessonId));
  }, [lessonId]);

  const handleCopy = useCallback(async () => {
    if (words.length === 0) return;

    const text = words.map((w) => `${w.dutch}\t${w.english}`).join('\n');

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }, [words]);

  const handleMarkAllKnown = useCallback(() => {
    words.forEach((word) => {
      setVocabKnown(vocabKey(lessonId, word.dutch), true);
    });
    setKnownCount(words.length);
    setMarkedAll(true);
    window.setTimeout(() => setMarkedAll(false), 2000);
  }, [lessonId, words]);

  const handleResetKnown = useCallback(() => {
    words.forEach((word) => {
      setVocabKnown(vocabKey(lessonId, word.dutch), false);
    });
    setKnownCount(0);
  }, [lessonId, words]);

  const hasCounts =
    previousCount !== undefined &&
    newCount !== undefined &&
    totalCount !== undefined;

  return (
    <div className="my-4 rounded-lg border border-fd-border bg-fd-card p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">Vocabulary tool</p>
          {hasCounts && (
            <p className="text-sm text-fd-muted-foreground">
              Previously learned: <strong>{previousCount}</strong> · New:{' '}
              <strong>{newCount}</strong> · Total: <strong>{totalCount}</strong>
              {words.length > 0 && (
                <>
                  {' '}
                  · Marked known: <strong>{knownCount}</strong> / {words.length}
                </>
              )}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {words.length > 0 && (
            <>
              <button
                type="button"
                onClick={handleCopy}
                className="rounded-lg border border-fd-border px-3 py-1.5 text-sm hover:bg-fd-accent"
              >
                {copied ? 'Copied!' : 'Copy word list'}
              </button>
              <button
                type="button"
                onClick={handleMarkAllKnown}
                className="rounded-lg border border-fd-border px-3 py-1.5 text-sm hover:bg-fd-accent"
              >
                {markedAll ? 'Marked!' : 'Mark all known'}
              </button>
              {knownCount > 0 && (
                <button
                  type="button"
                  onClick={handleResetKnown}
                  className="rounded-lg border border-fd-border px-3 py-1.5 text-sm hover:bg-fd-accent"
                >
                  Reset known
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

VocabularyTool.displayName = 'VocabularyTool';

/** Hook-friendly export for dashboard (client only). */
export function getLessonProgressSnapshot(lessonId: string) {
  const progress = readProgress();
  return {
    complete: progress.completedLessons.includes(lessonId),
    knownVocab: countKnownVocabForLesson(lessonId),
  };
}
