import React from 'react';

type GridColumns = 1 | 2 | 3 | 4;

interface GridContainerProps {
  children: React.ReactNode;
  minColOnMobile?: GridColumns;
  maxCols?: GridColumns;
  gap?: 'gap-2' | 'gap-3' | 'gap-4' | 'gap-6' | 'gap-8';
  className?: string;
  'aria-label'?: string;
}

const gridColumnMap: Record<GridColumns, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
};

const GridContainer: React.FC<GridContainerProps> = ({
  children,
  minColOnMobile = 1,
  maxCols = 2,
  gap = 'gap-4',
  className = '',
  'aria-label': ariaLabel,
}) => {
  const minColClass = gridColumnMap[minColOnMobile] || gridColumnMap[1];
  const maxColClass = gridColumnMap[maxCols] || gridColumnMap[2];

  return (
    <div
      className={`my-4 grid ${minColClass} md:${maxColClass} ${gap} items-stretch ${className}`}
      {...(ariaLabel ? { role: 'region', 'aria-label': ariaLabel } : {})}
    >
      {children}
    </div>
  );
};

GridContainer.displayName = 'GridContainer';

export default GridContainer;
