'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { instagramFollowUrl } from '@/lib/shared';

interface PageAction {
  label: string;
  icon?: string;
  href?: string;
  onClick?: () => Promise<void> | void;
}

interface PageActionsProps {
  dir?: 'ltr' | 'rtl';
  feedbackUrl?: string;
  showShareLink?: boolean;
  successMessage?: string;
  snackbarDuration?: number;
  actions?: PageAction[];
}

const PageActions: React.FC<PageActionsProps> = ({
  dir = 'ltr',
  feedbackUrl = instagramFollowUrl('page_feedback'),
  showShareLink = true,
  successMessage = 'Page URL copied successfully',
  snackbarDuration = 3000,
  actions,
}) => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dirClass = dir === 'rtl' ? 'justify-start' : 'justify-end';

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // useCallback keeps this stable so the React compiler doesn't see
  // timeoutRef captured inside render-time data structures.
  const handleCopyLink = useCallback(async () => {
    if (!navigator.clipboard) {
      console.warn('Clipboard API not available');
      return;
    }
    try {
      await navigator.clipboard.writeText(window.location.href);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setShowSnackbar(true);
      timeoutRef.current = setTimeout(
        () => setShowSnackbar(false),
        snackbarDuration
      );
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  }, [snackbarDuration]);

  // No handlers stored in data — buttons fall back to handleCopyLink at render.
  const defaultActions: PageAction[] = [
    { label: 'Like If You Loved It', icon: '👍', href: feedbackUrl },
    ...(showShareLink ? [{ label: 'Share Link', icon: '' }] : []),
  ];

  const finalActions = actions ?? defaultActions;

  return (
    <>
      <div
        className={`flex flex-row w-full gap-2 my-2 ${dirClass}`}
        role="group"
        aria-label="Page actions"
        dir={dir}
      >
        {finalActions.map((action, index) => {
          const isLink = Boolean(action.href && !action.onClick);

          if (isLink) {
            return (
              <a
                key={index}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-lg border border-fd-border bg-fd-secondary px-4 py-2 text-center text-sm text-fd-secondary-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring md:w-auto"
                aria-label={`${action.label}, opens in a new tab`}
              >
                {action.icon && (
                  <span aria-hidden="true" className="mr-1">
                    {action.icon}
                  </span>
                )}
                {action.label}
              </a>
            );
          }

          return (
            <button
              key={index}
              type="button"
              onClick={action.onClick ?? handleCopyLink}
              className="w-full rounded-lg px-4 py-2 text-center text-sm border border-fd-border text-fd-primary-foreground transition-colors  bg-fd-primary/80  hover:bg-fd-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring md:w-auto"
              aria-label={action.label}
            >
              {action.icon && (
                <span aria-hidden="true" className="mr-1">
                  {action.icon}
                </span>
              )}
              {action.label}
            </button>
          );
        })}
      </div>

      {/* Snackbar */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={`fixed w-3xs top-14 left-1/2 z-50 -translate-x-1/2 rounded-md bg-fd-primary p-2 text-base text-center text-fd-primary-foreground shadow-sm transition-all duration-300 ease-in-out ${
          showSnackbar
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        {successMessage}
      </div>
    </>
  );
};

PageActions.displayName = 'PageActions';

export default PageActions;
