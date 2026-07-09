const NOTES_PREFIX = '/notes/';

/** Map a notes page URL to a progress lesson id, e.g. /notes/a1/03-negation → a1/03-negation */
export function urlToLessonId(url: string): string | null {
  if (!url.startsWith(NOTES_PREFIX)) return null;

  const path = url.slice(NOTES_PREFIX.length);
  if (!path || path.includes('/progress') || path.includes('/daily-drill')) {
    return null;
  }

  const segments = path.split('/').filter(Boolean);
  if (segments.length < 2) return null;

  const track = segments[0];
  const allowed = new Set(['a0', 'a1', 'a2', 'b1', 'scenarios']);
  if (!allowed.has(track)) return null;

  return `${track}/${segments.slice(1).join('/')}`;
}
