import { DRILL_QUESTIONS, type DrillQuestion } from '@/lib/drill-questions';
import { readProgress, writeProgress } from '@/lib/progress-storage';

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function recentQuestionIds(): Set<string> {
  const { drillHistory } = readProgress();
  const ids = new Set<string>();
  for (const entry of drillHistory.slice(-7)) {
    for (const id of entry.questionIds) ids.add(id);
  }
  return ids;
}

function poolForCompletedLessons(completedLessons: string[]): DrillQuestion[] {
  if (completedLessons.length === 0) return DRILL_QUESTIONS;

  const prefixes = new Set(
    completedLessons.map((id) => id.split('/')[0]).filter(Boolean)
  );

  const fromCompleted = DRILL_QUESTIONS.filter((q) =>
    completedLessons.includes(q.lessonId)
  );

  const fromLevels = DRILL_QUESTIONS.filter((q) =>
    prefixes.has(q.lessonId.split('/')[0] ?? '')
  );

  const pool = fromCompleted.length > 0 ? fromCompleted : fromLevels;
  return pool.length > 0 ? pool : DRILL_QUESTIONS;
}

export function pickDailyQuestions(count = 5): DrillQuestion[] {
  const { completedLessons } = readProgress();
  const recent = recentQuestionIds();
  const pool = poolForCompletedLessons(completedLessons);

  const fresh = pool.filter((q) => !recent.has(q.id));
  const source = fresh.length >= count ? fresh : pool;

  return shuffle(source).slice(0, count);
}

export function recordDrillSession(questionIds: string[]): void {
  const state = readProgress();
  const today = new Date().toISOString().slice(0, 10);
  const last = state.drillHistory[state.drillHistory.length - 1];

  if (last?.date === today) {
    const merged = [...new Set([...last.questionIds, ...questionIds])];
    const nextHistory = [
      ...state.drillHistory.slice(0, -1),
      { date: today, questionIds: merged },
    ];
    writeProgress({ ...state, drillHistory: nextHistory });
    return;
  }

  writeProgress({
    ...state,
    drillHistory: [...state.drillHistory, { date: today, questionIds }].slice(
      -30
    ),
  });
}
