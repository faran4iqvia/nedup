import Link from 'next/link';
import { getGrammarLinks } from '@/lib/lesson-grammar-map';

type GrammarFocusProps = {
  lessonId: string;
};

export default function GrammarFocus({ lessonId }: GrammarFocusProps) {
  const links = getGrammarLinks(lessonId);

  if (links.length === 0) return null;

  return (
    <div className="my-4 rounded-lg border border-fd-border bg-fd-accent/30 p-4 text-base">
      <p className="mb-2 font-semibold">Grammar Focus</p>
      <p className="mb-2 text-fd-muted-foreground">
        The main course is your path. These grammar pages are optional deep
        dives when you want tables and extra examples:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-fd-primary hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

GrammarFocus.displayName = 'GrammarFocus';
