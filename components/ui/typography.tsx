import * as React from 'react';

import { cn } from '@/lib/cn';

const Typography = {
  h1: React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
  >(({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className
      )}
      {...props}
    />
  )),
  h2: React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
  >(({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
        className
      )}
      {...props}
    />
  )),
  h3: React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
  >(({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  )),
  h4: React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
  >(({ className, ...props }, ref) => (
    <h4
      ref={ref}
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  )),
  p: React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
  >(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'in-[.font-urdu]:leading-10 leading-7 not-first:mt-6',
        className
      )}
      {...props}
    />
  )),
  blockquote: React.forwardRef<
    HTMLQuoteElement,
    React.BlockquoteHTMLAttributes<HTMLQuoteElement>
  >(({ className, ...props }, ref) => (
    <blockquote
      ref={ref}
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    />
  )),
  ul: React.forwardRef<
    HTMLUListElement,
    React.HTMLAttributes<HTMLUListElement>
  >(({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
      {...props}
    />
  )),
  ol: React.forwardRef<
    HTMLOListElement,
    React.OlHTMLAttributes<HTMLOListElement>
  >(({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn('my-6 ml-6 list-decimal [&>li]:mt-2', className)}
      {...props}
    />
  )),
  li: React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
    ({ className, ...props }, ref) => (
      <li ref={ref} className={cn('', className)} {...props} />
    )
  ),
  code: React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
    ({ className, ...props }, ref) => (
      <code
        ref={ref}
        className={cn(
          'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
          className
        )}
        {...props}
      />
    )
  ),
  pre: React.forwardRef<HTMLPreElement, React.HTMLAttributes<HTMLPreElement>>(
    ({ className, ...props }, ref) => (
      <pre
        ref={ref}
        className={cn(
          'mb-4 mt-6 overflow-x-auto rounded-lg bg-muted p-4',
          className
        )}
        {...props}
      />
    )
  ),
  small: React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
    ({ className, ...props }, ref) => (
      <small
        ref={ref}
        className={cn('text-sm font-medium leading-none', className)}
        {...props}
      />
    )
  ),
  strong: React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
    ({ className, ...props }, ref) => (
      <strong ref={ref} className={cn('font-semibold', className)} {...props} />
    )
  ),
};

Typography.h1.displayName = 'TypographyH1';
Typography.h2.displayName = 'TypographyH2';
Typography.h3.displayName = 'TypographyH3';
Typography.h4.displayName = 'TypographyH4';
Typography.p.displayName = 'TypographyP';
Typography.blockquote.displayName = 'TypographyBlockquote';
Typography.ul.displayName = 'TypographyUL';
Typography.ol.displayName = 'TypographyOL';
Typography.li.displayName = 'TypographyLI';
Typography.code.displayName = 'TypographyCode';
Typography.pre.displayName = 'TypographyPre';
Typography.small.displayName = 'TypographySmall';
Typography.strong.displayName = 'TypographyStrong';

export { Typography };
