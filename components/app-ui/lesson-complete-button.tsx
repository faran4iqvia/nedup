'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  isLessonComplete,
  setLessonComplete,
  PROGRESS_UPDATED_EVENT,
} from '@/lib/progress-storage';

type LessonCompleteButtonProps = {
  lessonId: string;
  label?: string;
};

export default function LessonCompleteButton({
  lessonId,
  label = 'Mark lesson complete',
}: LessonCompleteButtonProps) {
  const [complete, setComplete] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const refresh = () => setComplete(isLessonComplete(lessonId));
    refresh();
    window.addEventListener(PROGRESS_UPDATED_EVENT, refresh);
    return () => window.removeEventListener(PROGRESS_UPDATED_EVENT, refresh);
  }, [lessonId]);

  const toggle = useCallback(() => {
    const next = !complete;
    setLessonComplete(lessonId, next);
    setComplete(next);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2000);
  }, [complete, lessonId]);

  return (
    <div className="my-6 flex flex-col items-start gap-2 rounded-lg border border-dashed border-fd-border p-4">
      <p className="text-sm text-fd-muted-foreground">
        Finished the exercises? Track progress on this device (no account
        needed).
      </p>
      <button
        type="button"
        onClick={toggle}
        className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring ${
          complete
            ? 'bg-fd-primary text-fd-primary-foreground'
            : 'border border-fd-border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent'
        }`}
        aria-pressed={complete}
      >
        {saved
          ? 'Saved!'
          : complete
            ? '✓ Lesson complete (click to undo)'
            : label}
      </button>
    </div>
  );
}

LessonCompleteButton.displayName = 'LessonCompleteButton';
