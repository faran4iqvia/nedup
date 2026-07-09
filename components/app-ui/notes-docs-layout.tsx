'use client';

import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { Root } from 'fumadocs-core/page-tree';
import type { LayoutTab } from 'fumadocs-ui/layouts/shared';
import type { ReactNode } from 'react';
import { baseOptions } from '@/lib/layout.shared';
import ProgressSidebarItem from '@/components/app-ui/progress-sidebar-item';

type NotesDocsLayoutProps = {
  tree: Root;
  tabs: LayoutTab[];
  children: ReactNode;
};

export default function NotesDocsLayout({
  tree,
  tabs,
  children,
}: NotesDocsLayoutProps) {
  return (
    <DocsLayout
      {...baseOptions()}
      tree={tree}
      tabMode="sidebar"
      tabs={tabs}
      sidebar={{
        components: {
          Item: ProgressSidebarItem,
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}

NotesDocsLayout.displayName = 'NotesDocsLayout';
