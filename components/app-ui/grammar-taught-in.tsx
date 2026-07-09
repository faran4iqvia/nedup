import Link from 'next/link';
import { getMainLessonsForGrammar } from '@/lib/grammar-lesson-map';

type GrammarTaughtInProps = {
  /** Full path, e.g. /notes/grammar/07-word-order-svo */
  grammarPath: string;
};

export default function GrammarTaughtIn({ grammarPath }: GrammarTaughtInProps) {
  const lessons = getMainLessonsForGrammar(grammarPath);

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

GrammarTaughtIn.displayName = 'GrammarTaughtIn';
