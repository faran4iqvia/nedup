import NotesToolPage from '@/components/app-ui/notes-tool-page';
import ProgressDashboard from '@/components/app-ui/progress-dashboard';
import { linkButtonClass } from '@/lib/link-button';
import Link from 'next/link';

export const metadata = {
  title: 'Your Progress',
  description: 'Track completed lessons, scenarios, and export a local backup',
};

export default function ProgressPage() {
  return (
    <NotesToolPage
      title="Your Progress"
      description="Local storage only — export a backup before switching devices."
    >
      <div className="mb-6 flex flex-col gap-2 sm:flex-row">
        <Link href="/notes" className={linkButtonClass}>
          ← Back to Welcome
        </Link>
        <Link href="/notes/daily-drill" className={linkButtonClass}>
          Daily Drill →
        </Link>
      </div>
      <ProgressDashboard />
    </NotesToolPage>
  );
}
