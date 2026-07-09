'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';

type FlashCardProps = {
  front: string;
  back: string;
  example?: string;
  className?: string;
};

export default function FlashCard({
  front,
  back,
  example,
  className = '',
}: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((value) => !value)}
      className={cn(
        'flex min-h-32 w-full flex-col items-center justify-center rounded-lg border border-fd-border bg-fd-card p-4 text-center shadow-sm transition-colors hover:border-fd-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring',
        className
      )}
      aria-pressed={flipped}
      aria-label={flipped ? `Answer: ${back}` : `Prompt: ${front}`}
    >
      <span className="text-xs uppercase tracking-wide text-fd-muted-foreground">
        {flipped ? 'Answer' : 'Tap to reveal'}
      </span>
      <span className="mt-2 text-lg font-semibold">
        {flipped ? back : front}
      </span>
      {example && (
        <span className="mt-2 text-sm text-fd-muted-foreground">{example}</span>
      )}
    </button>
  );
}

FlashCard.displayName = 'FlashCard';
