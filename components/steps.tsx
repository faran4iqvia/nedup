import type { ReactNode } from 'react';

interface StepsProps {
  children: ReactNode;
  className?: string;
}

interface StepProps {
  children: ReactNode;
  className?: string;
}

export function Steps({ children, className = '' }: StepsProps) {
  return (
    <div className={`fd-steps ${className}`} role="list" aria-label="Steps">
      {children}
    </div>
  );
}

export function Step({ children, className = '' }: StepProps) {
  return (
    <div className={`fd-step ${className}`} role="listitem">
      {children}
    </div>
  );
}
