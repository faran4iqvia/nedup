import * as React from 'react';
import { cn } from '@/lib/cn';

interface FontTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  className?: string;
}

// Sans Font Components (English) - Increased by 2 levels: base → lg, lg → 2xl, xl → 3xl
const SansBase = React.forwardRef<HTMLSpanElement, FontTextProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('font-sans text-lg leading-normal', className)}
      {...props}
    />
  )
);
SansBase.displayName = 'SansBase';

const SansMd = React.forwardRef<HTMLSpanElement, FontTextProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('font-sans text-xl leading-normal', className)}
      {...props}
    />
  )
);
SansMd.displayName = 'SansMd';

const SansLg = React.forwardRef<HTMLSpanElement, FontTextProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('font-sans text-2xl leading-normal', className)}
      {...props}
    />
  )
);
SansLg.displayName = 'SansLg';

// Urdu Font Components
// Container base is 1.75rem (set in .font-urdu CSS class).
// Base = same as container, Md = noticeably larger, Lg = large display/verse size.
const UrduBase = React.forwardRef<HTMLSpanElement, FontTextProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('font-urdu text-[1.75rem] leading-loose', className)}
      {...props}
    />
  )
);
UrduBase.displayName = 'UrduBase';

const UrduMd = React.forwardRef<HTMLSpanElement, FontTextProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('font-urdu text-4xl leading-loose', className)}
      {...props}
    />
  )
);
UrduMd.displayName = 'UrduMd';

const UrduLg = React.forwardRef<HTMLSpanElement, FontTextProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('font-urdu text-5xl leading-loose', className)}
      {...props}
    />
  )
);
UrduLg.displayName = 'UrduLg';

// Arabic Font Components
// Container base is 1.75rem (set in .font-arabic CSS class).
const ArabicBase = React.forwardRef<HTMLSpanElement, FontTextProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('font-arabic text-[1.75rem] leading-loose', className)}
      {...props}
    />
  )
);
ArabicBase.displayName = 'ArabicBase';

const ArabicMd = React.forwardRef<HTMLSpanElement, FontTextProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('font-arabic text-4xl leading-loose', className)}
      {...props}
    />
  )
);
ArabicMd.displayName = 'ArabicMd';

const ArabicLg = React.forwardRef<HTMLSpanElement, FontTextProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('font-arabic text-5xl leading-loose', className)}
      {...props}
    />
  )
);
ArabicLg.displayName = 'ArabicLg';
export {
  SansBase,
  SansMd,
  SansLg,
  UrduBase,
  UrduMd,
  UrduLg,
  ArabicBase,
  ArabicMd,
  ArabicLg,
};
