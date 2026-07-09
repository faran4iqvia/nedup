import { LESSON_GRAMMAR_LINKS } from '@/lib/lesson-grammar-map';

export type MainLessonRef = {
  lessonId: string;
  href: string;
  label: string;
};

const GRAMMAR_TO_LESSON_IDS: Record<string, string[]> = {};

for (const [lessonId, links] of Object.entries(LESSON_GRAMMAR_LINKS)) {
  for (const link of links) {
    if (!link.href.startsWith('/notes/grammar/')) continue;
    const list = GRAMMAR_TO_LESSON_IDS[link.href] ?? [];
    if (!list.includes(lessonId)) list.push(lessonId);
    GRAMMAR_TO_LESSON_IDS[link.href] = list;
  }
}

function formatLessonLabel(lessonId: string): string {
  const [level, slug] = lessonId.split('/');
  const num = slug?.match(/^(\d+)/)?.[1];
  const title = (slug ?? '')
    .replace(/^\d+-/, '')
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  if (num && level) {
    return `${level.toUpperCase()} Lesson ${Number(num)}: ${title}`;
  }

  if (level === 'scenarios') {
    return `Scenario: ${title}`;
  }

  return title || lessonId;
}

/** Grammar reference URL → main course lessons that link here. */
export function getMainLessonsForGrammar(grammarHref: string): MainLessonRef[] {
  const href = grammarHref.startsWith('/notes/')
    ? grammarHref
    : `/notes/${grammarHref.replace(/^\/+/, '')}`;

  const lessonIds = GRAMMAR_TO_LESSON_IDS[href] ?? [];

  return lessonIds.map((lessonId) => ({
    lessonId,
    href: `/notes/${lessonId}`,
    label: formatLessonLabel(lessonId),
  }));
}
