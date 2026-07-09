import DailyDrill from '@/components/app-ui/daily-drill';
import NotesToolPage from '@/components/app-ui/notes-tool-page';
import Link from 'next/link';

export const metadata = {
  title: 'Daily Drill',
  description:
    'Five recycled Dutch practice questions from your completed levels',
};

export default function DailyDrillPage() {
  return (
    <NotesToolPage
      title="Daily Drill"
      description="Five minutes. No streak pressure. Just recall."
    >
      <p className="mb-6 text-sm">
        <Link
          href="/notes/progress"
          className="text-fd-primary hover:underline"
        >
          ← Your progress
        </Link>
        {' · '}
        <Link href="/notes" className="text-fd-primary hover:underline">
          Welcome
        </Link>
      </p>
      <DailyDrill />
    </NotesToolPage>
  );
}
