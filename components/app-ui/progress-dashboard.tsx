'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { COURSE_LEVELS } from '@/lib/course-catalog';
import { formatStudyMinutes } from '@/lib/lesson-study-minutes';
import {
  countCompletedScenarios,
  estimateRemainingMinutes,
  SCENARIO_IDS,
} from '@/lib/progress-estimates';
import {
  clearProgress,
  exportProgressJson,
  importProgressJson,
  PROGRESS_UPDATED_EVENT,
  readProgress,
  type ProgressState,
} from '@/lib/progress-storage';

function countKnownVocab(state: ProgressState): number {
  return Object.values(state.knownVocab).filter(Boolean).length;
}

export default function ProgressDashboard() {
  const [state, setState] = useState<ProgressState | null>(null);
  const [importError, setImportError] = useState<string | null>(null);
  const [importOk, setImportOk] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const refresh = useCallback(() => {
    setState(readProgress());
  }, []);

  useEffect(() => {
    refresh();
    window.addEventListener(PROGRESS_UPDATED_EVENT, refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(PROGRESS_UPDATED_EVENT, refresh);
      window.removeEventListener('storage', refresh);
    };
  }, [refresh]);

  const handleExport = () => {
    const blob = new Blob([exportProgressJson()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dutchyy-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = async (file: File) => {
    setImportError(null);
    setImportOk(false);
    try {
      const text = await file.text();
      if (!importProgressJson(text)) {
        setImportError('Invalid progress file. Check the JSON format.');
        return;
      }
      refresh();
      setImportOk(true);
      window.setTimeout(() => setImportOk(false), 3000);
    } catch {
      setImportError('Could not read that file.');
    }
  };

  const handleReset = () => {
    if (
      !window.confirm(
        'Clear all progress on this device? This cannot be undone unless you exported a backup.'
      )
    ) {
      return;
    }
    clearProgress();
    refresh();
  };

  if (!state) {
    return <p className="text-fd-muted-foreground">Loading progress…</p>;
  }

  const completedSet = new Set(state.completedLessons);
  const totalLessons = COURSE_LEVELS.reduce(
    (sum, l) => sum + l.lessonIds.length + 1,
    0
  );
  const totalCompleted = state.completedLessons.filter(
    (id) => !id.startsWith('scenarios/')
  ).length;
  const scenariosDone = countCompletedScenarios(state.completedLessons);
  const remainingMin = estimateRemainingMinutes(state.completedLessons);

  return (
    <div className="space-y-8">
      <p className="text-fd-muted-foreground">
        Progress is saved on this device only. Export a backup before switching
        browsers or clearing site data.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-fd-border p-4">
          <p className="text-2xl font-bold">{totalCompleted}</p>
          <p className="text-sm text-fd-muted-foreground">
            lessons complete (of {totalLessons})
          </p>
        </div>
        <div className="rounded-lg border border-fd-border p-4">
          <p className="text-2xl font-bold">
            {scenariosDone}/{SCENARIO_IDS.length}
          </p>
          <p className="text-sm text-fd-muted-foreground">
            scenarios rehearsed
          </p>
        </div>
        <div className="rounded-lg border border-fd-border p-4">
          <p className="text-2xl font-bold">{countKnownVocab(state)}</p>
          <p className="text-sm text-fd-muted-foreground">words marked known</p>
        </div>
        <div className="rounded-lg border border-fd-border p-4">
          <p className="text-2xl font-bold">
            {formatStudyMinutes(remainingMin)}
          </p>
          <p className="text-sm text-fd-muted-foreground">
            est. left in course
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleExport}
        >
          Export backup
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => fileRef.current?.click()}
        >
          Import backup
        </Button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) void handleImportFile(file);
            e.target.value = '';
          }}
        />
        <Button type="button" variant="outline" size="sm" onClick={handleReset}>
          Reset progress
        </Button>
      </div>

      {importError && (
        <p className="text-sm text-red-600 dark:text-red-400">{importError}</p>
      )}
      {importOk && (
        <p className="text-sm text-emerald-600 dark:text-emerald-400">
          Progress imported successfully.
        </p>
      )}

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">By level</h2>
        {COURSE_LEVELS.map((level) => {
          const done = level.lessonIds.filter((id) =>
            completedSet.has(id)
          ).length;
          const reviewDone = completedSet.has(level.reviewId);
          const total = level.lessonIds.length + 1;
          const pct = Math.round(((done + (reviewDone ? 1 : 0)) / total) * 100);

          return (
            <div key={level.id} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{level.label}</span>
                <span className="text-fd-muted-foreground">
                  {done}/{level.lessonIds.length} lessons
                  {reviewDone ? ' · review ✓' : ''} · {pct}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-fd-muted overflow-hidden">
                <div
                  className="h-full bg-fd-primary transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
              {level.cheatSheetPath && (
                <Link
                  href={level.cheatSheetPath}
                  className="text-xs text-fd-primary hover:underline"
                >
                  Open {level.label} cheat sheet
                </Link>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-sm">
        <Link
          href="/notes/daily-drill"
          className="text-fd-primary hover:underline"
        >
          → Daily drill (5 questions)
        </Link>
        {' · '}
        <Link
          href="/notes/scenarios/00-introduction"
          className="text-fd-primary hover:underline"
        >
          Scenarios track
        </Link>
      </p>
    </div>
  );
}

ProgressDashboard.displayName = 'ProgressDashboard';
