'use client';

import { useCallback, useEffect, useState } from 'react';
import ExerciseAccordion from '@/components/app-ui/exercise-accordion';
import { Button } from '@/components/ui/button';
import { pickDailyQuestions, recordDrillSession } from '@/lib/drill-logic';
import type { DrillQuestion } from '@/lib/drill-questions';
import { readProgress } from '@/lib/progress-storage';

export default function DailyDrill() {
  const [questions, setQuestions] = useState<DrillQuestion[]>([]);
  const [doneToday, setDoneToday] = useState(false);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const load = useCallback(() => {
    setQuestions(pickDailyQuestions(5));
    setChecked({});
    const today = new Date().toISOString().slice(0, 10);
    const history = readProgress().drillHistory;
    const todayEntry = history.find((e) => e.date === today);
    setDoneToday(Boolean(todayEntry && todayEntry.questionIds.length >= 5));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const markGotIt = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: true }));
  };

  const finishSession = () => {
    recordDrillSession(questions.map((q) => q.id));
    setDoneToday(true);
  };

  const allChecked =
    questions.length > 0 && questions.every((q) => checked[q.id]);

  if (questions.length === 0) {
    return <p className="text-fd-muted-foreground">Loading drill questions…</p>;
  }

  return (
    <div className="space-y-6">
      <p className="text-fd-muted-foreground">
        Five recycled questions from levels you have started. Struggle first,
        then reveal the answer. Mark each item before finishing the session.
      </p>

      {doneToday && (
        <p className="rounded-lg border border-fd-border bg-fd-accent/40 px-4 py-3 text-sm">
          You already completed a drill today. You can still practise, or come
          back tomorrow for a fresh set.
        </p>
      )}

      {questions.map((q, index) => (
        <div
          key={q.id}
          className="rounded-lg border border-fd-border p-4 space-y-3"
        >
          <p className="text-xs uppercase tracking-wide text-fd-muted-foreground">
            {index + 1} / {questions.length} · {q.level} · {q.lessonId}
          </p>
          <p className="font-medium">{q.prompt}</p>

          <ExerciseAccordion title="Show answer">
            <p>{q.answer}</p>
          </ExerciseAccordion>

          <Button
            type="button"
            variant={checked[q.id] ? 'default' : 'outline'}
            size="sm"
            onClick={() => markGotIt(q.id)}
          >
            {checked[q.id] ? '✓ Got it' : 'Mark got it'}
          </Button>
        </div>
      ))}

      <div className="flex flex-wrap gap-3">
        <Button type="button" disabled={!allChecked} onClick={finishSession}>
          Finish today&apos;s drill
        </Button>
        <Button type="button" variant="outline" onClick={load}>
          New random set
        </Button>
      </div>
    </div>
  );
}

DailyDrill.displayName = 'DailyDrill';
