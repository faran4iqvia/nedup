import Image from 'next/image';
import Link from 'next/link';
import { instagramFollowUrl, instagramHandle } from '@/lib/shared';
/* ─────────────────────────────────────────────
   Icon set: 20×20, currentColor, theme-safe
───────────────────────────────────────────── */

type IconProps = { className?: string };

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-fd-background">
      {/* ── Footer ───────────────────────────────── */}
      <footer className="relative z-10 border-t border-fd-border bg-fd-card/40">
        {/* Footer content */}
      </footer>
    </main>
  );
}
