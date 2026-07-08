'use client';

import { Drawer } from 'vaul';
import { type ReactNode } from 'react';

interface DrawerFromVaulProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
  closeLabel?: string;
  titleIcon?: string;
  'aria-label'?: string;
}

const DrawerFromVaul = ({
  trigger = 'Open Drawer',
  title,
  description,
  children,
  closeLabel = 'Close',
  titleIcon = '✍️',
  'aria-label': ariaLabel,
}: DrawerFromVaulProps) => {
  return (
    <Drawer.Root handleOnly>
      <div>
        <Drawer.Trigger
          className="w-full float-end text-sm rounded-lg border border-fd-border px-2 py-1 text-fd-primary-foreground transition-colors  bg-fd-primary/80 hover:bg-fd-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
          aria-label={ariaLabel ?? (title ? `Open: ${title}` : undefined)}
        >
          {trigger}
        </Drawer.Trigger>
      </div>
      <Drawer.Portal>
        <Drawer.Overlay
          className="fixed inset-0 z-50 bg-black/60"
          aria-hidden="true"
        />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 mt-24 flex max-h-[85dvh] flex-col rounded-t-xl border-t border-fd-border bg-fd-card shadow-2xl outline-none">
          <Drawer.Handle className="mx-auto mt-4 h-1.5 w-12 shrink-0 rounded-full bg-fd-muted" />
          <div className="overflow-y-auto p-4 md:p-6 text-base text-fd-foreground">
            {title ? (
              <Drawer.Title className="mb-4 flex items-center gap-2 text-lg font-semibold">
                {titleIcon && (
                  <span aria-hidden="true" className="text-xl">
                    {titleIcon}
                  </span>
                )}
                {title}
              </Drawer.Title>
            ) : (
              <Drawer.Title className="sr-only">Drawer content</Drawer.Title>
            )}
            {description ? (
              <Drawer.Description className="mb-4 text-base font-medium text-fd-muted-foreground">
                {description}
              </Drawer.Description>
            ) : (
              <Drawer.Description className="sr-only">
                Drawer content
              </Drawer.Description>
            )}
            {children}
            <div className="mt-6 flex w-full justify-end">
              <Drawer.Close className="rounded-lg border border-fd-border bg-fd-secondary px-4 py-2 text-fd-secondary-foreground transition-colors hover:bg-fd-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring">
                {closeLabel}
              </Drawer.Close>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

DrawerFromVaul.displayName = 'DrawerFromVaul';

export default DrawerFromVaul;
