import DailyDrill from '@/components/app-ui/daily-drill';
import NotesToolPage from '@/components/app-ui/notes-tool-page';
import { linkButtonClass } from '@/lib/link-button';
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
      <div className="mb-6 flex flex-col gap-2 sm:flex-row">
        <Link href="/notes/progress" className={linkButtonClass}>
          ← Your progress
        </Link>
        <Link href="/notes" className={linkButtonClass}>
          Welcome →
        </Link>
      </div>
      <DailyDrill />
    </NotesToolPage>
  );
}
