/**
 * Shared class for a Next.js <Link> styled as a button on the tool pages
 * (progress, daily drill). Structural classes (shape, padding, border) are
 * combined with the theme-token styling so a link reads as a real button.
 */
export const linkButtonClass =
  'inline-flex w-full items-center justify-center rounded-md border border-fd-border px-4 py-2 text-center text-sm text-fd-secondary-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring md:w-auto';
