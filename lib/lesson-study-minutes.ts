/** Default study time per page type (minutes). Used for progress estimates. */
export const DEFAULT_LESSON_MINUTES = 25;
export const DEFAULT_REVIEW_MINUTES = 45;
export const DEFAULT_SCENARIO_MINUTES = 15;
export const DEFAULT_CHEAT_SHEET_MINUTES = 10;

export const LESSON_STUDY_MINUTES: Record<string, number> = {
  // A0 — shorter foundation lessons
  'a0/01-greetings-and-introductions': 20,
  'a0/02-alphabet-and-spelling': 20,
  'a0/12-de-het-primer': 20,
  'a0/review-and-test': 35,
  // Reviews
  'a1/review-and-test': 45,
  'a2/review-and-test': 45,
  'b1/review-and-test': 50,
  // B1 capstone + bureaucracy
  'b1/27-practical-netherlands': 35,
  'b1/28-bringing-it-together': 30,
};

export function getStudyMinutes(lessonId: string): number {
  if (LESSON_STUDY_MINUTES[lessonId]) return LESSON_STUDY_MINUTES[lessonId];
  if (lessonId.endsWith('/review-and-test')) return DEFAULT_REVIEW_MINUTES;
  if (lessonId.startsWith('scenarios/')) return DEFAULT_SCENARIO_MINUTES;
  if (lessonId.endsWith('/cheat-sheet')) return DEFAULT_CHEAT_SHEET_MINUTES;
  return DEFAULT_LESSON_MINUTES;
}

export function formatStudyMinutes(minutes: number): string {
  if (minutes < 60) return `~${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `~${h}h ${m}m` : `~${h}h`;
}
