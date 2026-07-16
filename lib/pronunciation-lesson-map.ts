import { LESSON_PRONUNCIATION_LINKS } from '@/lib/lesson-pronunciation-map';

export type MainLessonRef = {
  lessonId: string;
  href: string;
  label: string;
};

const PRONUNCIATION_TO_LESSON_IDS: Record<string, string[]> = {};

for (const [lessonId, links] of Object.entries(LESSON_PRONUNCIATION_LINKS)) {
  for (const link of links) {
    if (!link.href.startsWith('/notes/pronunciation/')) continue;
    const list = PRONUNCIATION_TO_LESSON_IDS[link.href] ?? [];
    if (!list.includes(lessonId)) list.push(lessonId);
    PRONUNCIATION_TO_LESSON_IDS[link.href] = list;
  }
}

function lessonSortKey(lessonId: string): [string, number] {
  const [level, slug] = lessonId.split('/');
  const num = slug?.match(/^(\d+)/)?.[1];
  return [level ?? '', num ? Number(num) : 999];
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

  return title || lessonId;
}

/** Pronunciation reference URL → main course lessons whose Pronunciation Focus links here. */
export function getMainLessonsForPronunciation(
  pronunciationHref: string
): MainLessonRef[] {
  const href = pronunciationHref.startsWith('/notes/')
    ? pronunciationHref
    : `/notes/${pronunciationHref.replace(/^\/+/, '')}`;

  const lessonIds = [...(PRONUNCIATION_TO_LESSON_IDS[href] ?? [])].sort(
    (a, b) => {
      const [la, na] = lessonSortKey(a);
      const [lb, nb] = lessonSortKey(b);
      if (la !== lb) return la.localeCompare(lb);
      return na - nb;
    }
  );

  return lessonIds.map((lessonId) => ({
    lessonId,
    href: `/notes/${lessonId}`,
    label: formatLessonLabel(lessonId),
  }));
}
