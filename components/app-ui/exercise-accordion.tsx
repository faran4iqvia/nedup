'use client';

import type { ReactNode } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type ExerciseAccordionProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function ExerciseAccordion({
  title = 'Show answer key',
  children,
  className = '',
}: ExerciseAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className={`my-4 rounded-lg border border-fd-border px-4 ${className}`}
    >
      <AccordionItem value="answers" className="border-none">
        <AccordionTrigger className="text-base font-semibold text-fd-primary">
          {title}
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

ExerciseAccordion.displayName = 'ExerciseAccordion';
