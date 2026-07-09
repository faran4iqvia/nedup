import { getLessonFlashcards } from '@/lib/lesson-flashcards';
import FlashCard from '@/components/app-ui/flash-card';
import FlashCardDeck from '@/components/app-ui/flash-card-deck';

type LessonFlashcardsProps = {
  lessonId: string;
  title?: string;
};

export default function LessonFlashcards({
  lessonId,
  title,
}: LessonFlashcardsProps) {
  const cards = getLessonFlashcards(lessonId);

  if (cards.length === 0) return null;

  return (
    <FlashCardDeck title={title ?? 'Flashcard drill'}>
      {cards.map((card) => (
        <FlashCard
          key={`${lessonId}-${card.front}`}
          front={card.front}
          back={card.back}
          example={card.example}
        />
      ))}
    </FlashCardDeck>
  );
}

LessonFlashcards.displayName = 'LessonFlashcards';
