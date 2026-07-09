'use client';

import type { ReactNode } from 'react';
import GridContainer from '@/components/app-ui/grid-container';

type FlashCardDeckProps = {
  title?: string;
  children: ReactNode;
};

export default function FlashCardDeck({
  title = 'Flashcard drill',
  children,
}: FlashCardDeckProps) {
  return (
    <div className="my-4">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="mb-3 text-sm text-fd-muted-foreground">
        Tap each card to flip. Say the Dutch side out loud before you reveal the
        English.
      </p>
      <GridContainer minColOnMobile={1} maxCols={3}>
        {children}
      </GridContainer>
    </div>
  );
}

FlashCardDeck.displayName = 'FlashCardDeck';
