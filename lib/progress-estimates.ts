import { COURSE_LEVELS } from '@/lib/course-catalog';
import { getStudyMinutes } from '@/lib/lesson-study-minutes';

const SCENARIO_PREFIX = 'scenarios/';

/** All trackable lesson + review ids for time estimates. */
export function allTrackableLessonIds(): string[] {
  return COURSE_LEVELS.flatMap((level) => [...level.lessonIds, level.reviewId]);
}

export function estimateRemainingMinutes(completedLessons: string[]): number {
  const done = new Set(completedLessons);
  let total = 0;

  for (const id of allTrackableLessonIds()) {
    if (!done.has(id)) total += getStudyMinutes(id);
  }

  return total;
}

export function countCompletedScenarios(completedLessons: string[]): number {
  return completedLessons.filter((id) => id.startsWith(SCENARIO_PREFIX)).length;
}

/** Known scenario slugs from meta — keep in sync with scenarios/meta.json */
export const SCENARIO_IDS = [
  'scenarios/a1-airport-immigration',
  'scenarios/a1-pharmacy-apotheek',
  'scenarios/a1-huisarts-gp',
  'scenarios/a1-supermarket-checkout',
  'scenarios/a1-train-ticket',
  'scenarios/a1-asking-directions',
  'scenarios/a2-hotel-check-in',
  'scenarios/a2-phone-reschedule',
  'scenarios/a2-explaining-a-problem',
  'scenarios/a2-past-trip-story',
  'scenarios/b1-gemeente-registration',
  'scenarios/b1-customer-service-call',
  'scenarios/b1-landlord-conversation',
];
