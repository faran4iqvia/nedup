export const PROGRESS_STORAGE_KEY = 'dutchyy-progress-v1';
export const PROGRESS_UPDATED_EVENT = 'dutchyy-progress-updated';

function notifyProgressUpdated(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(PROGRESS_UPDATED_EVENT));
}

export type DrillHistoryEntry = {
  date: string;
  questionIds: string[];
};

export type ProgressState = {
  completedLessons: string[];
  testScores: Record<string, number>;
  knownVocab: Record<string, boolean>;
  drillHistory: DrillHistoryEntry[];
};

export const EMPTY_PROGRESS: ProgressState = {
  completedLessons: [],
  testScores: {},
  knownVocab: {},
  drillHistory: [],
};

function isProgressState(value: unknown): value is ProgressState {
  if (!value || typeof value !== 'object') return false;
  const state = value as ProgressState;
  return (
    Array.isArray(state.completedLessons) &&
    typeof state.testScores === 'object' &&
    typeof state.knownVocab === 'object' &&
    Array.isArray(state.drillHistory)
  );
}

export function readProgress(): ProgressState {
  if (typeof window === 'undefined') return { ...EMPTY_PROGRESS };

  try {
    const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return { ...EMPTY_PROGRESS };
    const parsed: unknown = JSON.parse(raw);
    return isProgressState(parsed) ? parsed : { ...EMPTY_PROGRESS };
  } catch {
    return { ...EMPTY_PROGRESS };
  }
}

export function writeProgress(state: ProgressState): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(state));
  notifyProgressUpdated();
}

export function isLessonComplete(lessonId: string): boolean {
  return readProgress().completedLessons.includes(lessonId);
}

export function setLessonComplete(lessonId: string, complete: boolean): void {
  const state = readProgress();
  const set = new Set(state.completedLessons);

  if (complete) set.add(lessonId);
  else set.delete(lessonId);

  writeProgress({ ...state, completedLessons: [...set] });
}

export function setTestScore(testId: string, score: number): void {
  const state = readProgress();
  writeProgress({
    ...state,
    testScores: { ...state.testScores, [testId]: score },
  });
}

export function setVocabKnown(key: string, known: boolean): void {
  const state = readProgress();
  writeProgress({
    ...state,
    knownVocab: { ...state.knownVocab, [key]: known },
  });
}

export function vocabKey(lessonId: string, dutch: string): string {
  return `${lessonId}:${dutch.toLowerCase()}`;
}

export function countKnownVocabForLesson(lessonId: string): number {
  const prefix = `${lessonId}:`;
  return Object.entries(readProgress().knownVocab).filter(
    ([key, known]) => known && key.startsWith(prefix)
  ).length;
}

export function exportProgressJson(): string {
  return JSON.stringify(readProgress(), null, 2);
}

export function importProgressJson(raw: string): boolean {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!isProgressState(parsed)) return false;
    writeProgress(parsed);
    return true;
  } catch {
    return false;
  }
}

export function clearProgress(): void {
  writeProgress({ ...EMPTY_PROGRESS });
}
