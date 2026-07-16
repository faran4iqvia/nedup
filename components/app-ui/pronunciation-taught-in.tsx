import Link from 'next/link';
import { getMainLessonsForPronunciation } from '@/lib/pronunciation-lesson-map';

type PronunciationTaughtInProps = {
  /** Full path, e.g. /notes/pronunciation/05-connected-speech */
  pronunciationPath: string;
};

export default function PronunciationTaughtIn({
  pronunciationPath,
}: PronunciationTaughtInProps) {
  const lessons = getMainLessonsForPronunciation(pronunciationPath);

  if (lessons.length === 0) return null;

  return (
    <div className="not-prose mb-6 rounded-lg border border-fd-border bg-fd-accent/25 px-4 py-3 text-sm">
      <p className="mb-2 font-semibold text-fd-foreground">
        Reference · also taught in the main course
      </p>
      <ul className="space-y-1">
        {lessons.map((lesson) => (
          <li key={lesson.lessonId}>
            <Link
              href={lesson.href}
              className="text-fd-primary hover:underline"
            >
              {lesson.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

PronunciationTaughtIn.displayName = 'PronunciationTaughtIn';
