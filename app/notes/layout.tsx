import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { buildNotesTabs } from '@/lib/notes-tabs';
import { source } from '@/lib/source';
import {
  Megaphone,
  Tally3,
  BrickWall,
  Lightbulb,
  GitFork,
  Shell,
  Hand,
  HatGlasses,
} from 'lucide-react';

const tree = source.getPageTree();

const tabs = buildNotesTabs(tree, [
  {
    title: 'Welcome',
    description: 'Start Here',
    url: '/notes',
    icon: <Hand className="h-5 w-5 text-orange-500" />,
  },
  {
    title: 'A0',
    description: 'The Absolute Basics',
    url: '/notes/a0/00-introduction',
    icon: <GitFork className="h-5 w-5 text-amber-500" />,
  },
  {
    title: 'A1',
    description: 'Everyday Dutch',
    url: '/notes/a1/00-introduction',
    icon: <BrickWall className="h-5 w-5 text-fuchsia-500" />,
  },
  {
    title: 'A2',
    description: 'Expanding Your Range',
    url: '/notes/a2/00-introduction',
    icon: <Tally3 className="h-5 w-5 text-teal-500" />,
  },
  {
    title: 'B1',
    description: 'Towards Independence',
    url: '/notes/b1/00-introduction',
    icon: <Shell className="h-5 w-5 text-sky-500" />,
  },
  {
    title: 'Scenarios',
    description: 'Real-Life Conversations',
    url: '/notes/scenarios/00-introduction',
    icon: <HatGlasses className="h-5 w-5 text-violet-500" />,
  },
  {
    title: 'Pronunciation',
    description: 'Dutch Sounds',
    url: '/notes/pronunciation/00-introduction',
    icon: <Megaphone className="h-5 w-5 text-red-500" />,
  },
  {
    title: 'Grammar',
    description: 'Dutch Grammar',
    url: '/notes/grammar/00-introduction',
    icon: <Lightbulb className="h-5 w-5 text-indigo-500" />,
  },
]);

// @ts-ignore
export default function Layout({ children }: LayoutProps<'/notes'>) {
  return (
    <DocsLayout {...baseOptions()} tree={tree} tabMode="sidebar" tabs={tabs}>
      {children}
    </DocsLayout>
  );
}
