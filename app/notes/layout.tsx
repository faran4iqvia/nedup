import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import {
  Megaphone,
  Tally3,
  BrickWall,
  Lightbulb,
  GitFork,
  Shell,
  Hand,
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
          title: 'Welcome',
          description: 'Start Here',
          url: '/notes',
          icon: <Hand className="h-5 w-5 text-orange-500" />,
        },
        {
          title: 'A0',
          description: 'The Absolute Basics',
          url: '/notes/a0',
          icon: <GitFork className="h-5 w-5 text-amber-500" />,
        },
        {
          title: 'A1',
          description: 'Everyday Dutch',
          url: '/notes/a1',
          icon: <BrickWall className="h-5 w-5 text-fuchsia-500" />,
        },
        {
          title: 'A2',
          description: 'Expanding Your Range',
          url: '/notes/a2',
          icon: <Tally3 className="h-5 w-5 text-teal-500" />,
        },
        {
          title: 'B1',
          description: 'Towards Independence',
          url: '/notes/b1',
          icon: <Shell className="h-5 w-5 text-sky-500" />,
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
