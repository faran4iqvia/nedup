import NotesToolPage from '@/components/app-ui/notes-tool-page';
import ProgressDashboard from '@/components/app-ui/progress-dashboard';
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
      <p className="mb-6 text-sm">
        <Link href="/notes" className="text-fd-primary hover:underline">
          ← Back to Welcome
        </Link>
      </p>
      <ProgressDashboard />
    </NotesToolPage>
  );
}
