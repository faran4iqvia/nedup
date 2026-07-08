import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import {
  Megaphone,
  Tally3,
  Shell,
  Scale,
  BrickWall,
  Lightbulb,
  Split,
  GitFork,
  GitMergeConflict,
} from 'lucide-react';

// @ts-ignore
export default function Layout({ children }: LayoutProps<'/notes'>) {
  return (
    <DocsLayout
      {...baseOptions()}
      tree={source.getPageTree()}
      tabMode="sidebar"
      tabs={[
        {
          title: 'A0 - A1',
          description: 'Phase 1',
          url: '/notes',
          icon: <GitFork className="h-5 w-5 text-amber-500" />,
        },
        {
          title: 'A1 - A2',
          description: 'Phase 2',
          url: '/notes/phase-2-a1-a2',
          icon: <BrickWall className="h-5 w-5 text-fuchsia-500" />,
        },
        {
          title: 'A2 - B1',
          description: 'Phase 3',
          url: '/notes/phase-3-a2-b1',
          icon: <Tally3 className="h-5 w-5 text-teal-500" />,
        },
        {
          title: 'Pronunciation',
          description: 'Dutch Sounds',
          url: '/notes/pronunciation',
          icon: <Megaphone className="h-5 w-5 text-red-500" />,
        },
        {
          title: 'Grammar',
          description: 'Dutch Grammar',
          url: '/notes/grammar',
          icon: <Lightbulb className="h-5 w-5 text-indigo-500" />,
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
