import { getLessonFlashcards } from '@/lib/lesson-flashcards';
import { LESSON_VOCAB_META } from '@/lib/lesson-vocabulary-meta';
import VocabularyTool from '@/components/app-ui/vocabulary-tool';

type LessonVocabularyToolProps = {
  lessonId: string;
};

export default function LessonVocabularyTool({
  lessonId,
}: LessonVocabularyToolProps) {
  const meta = LESSON_VOCAB_META[lessonId];
  const words = getLessonFlashcards(lessonId).map((card) => ({
    dutch: card.front,
    english: card.back,
  }));

  if (!meta) {
    return <VocabularyTool lessonId={lessonId} words={words} />;
  }

  return (
    <VocabularyTool
      lessonId={lessonId}
      previousCount={meta.previousCount}
      newCount={meta.newCount}
      totalCount={meta.totalCount}
      words={words}
    />
  );
}

LessonVocabularyTool.displayName = 'LessonVocabularyTool';
