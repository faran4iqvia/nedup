import Link from 'next/link';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function NotFound() {
  return (
    <HomeLayout {...baseOptions()}>
      <main className="relative flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center overflow-hidden bg-fd-background px-4">
        {/* Glow */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 rounded-full bg-fd-primary/6 dark:bg-fd-primary/8 blur-[120px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 text-center">
          {/* Large 404 */}
          <div className="relative select-none">
            <span className="text-[9rem] sm:text-[12rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-fd-primary to-fd-primary/30">
              404
            </span>
          </div>

          {/* Divider */}
          <div className="h-px w-32 bg-linear-to-r from-transparent via-fd-primary/40 to-transparent" />

          {/* Text */}
          <div className="space-y-2">
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-fd-foreground">
              Page Not Found
            </h1>
            <p className="max-w-sm text-sm sm:text-base text-fd-muted-foreground leading-relaxed text-center!">
              The page you&apos;re looking for doesn&apos;t exist or may have
              been moved.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-fd-primary hover:bg-fd-primary/90 px-7 py-2.5 text-sm font-semibold text-fd-primary-foreground shadow-lg shadow-fd-primary/15 hover:shadow-fd-primary/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M11.5 7h-9M6 3.5L2.5 7 6 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Go Back Home
            </Link>
          </div>
        </div>
      </main>
    </HomeLayout>
  );
}
