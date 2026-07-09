'use client';

import {
  SidebarItem as BaseSidebarItem,
  useFolderDepth,
} from 'fumadocs-ui/components/sidebar/base';
import { usePathname } from 'fumadocs-core/framework';
import { ExternalLink, Check } from 'lucide-react';
import type * as PageTree from 'fumadocs-core/page-tree';
import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/cn';
import {
  isLessonComplete,
  PROGRESS_UPDATED_EVENT,
} from '@/lib/progress-storage';
import { urlToLessonId } from '@/lib/url-to-lesson-id';

function normalizePath(url: string): string {
  return url.length > 1 && url.endsWith('/') ? url.slice(0, -1) : url;
}

function isActive(href: string, pathname: string): boolean {
  const h = normalizePath(href);
  const p = normalizePath(pathname);
  return h === p || p.startsWith(`${h}/`);
}

function getItemOffset(depth: number): string {
  return `calc(${2 + 3 * depth} * var(--spacing))`;
}

const linkItemClass =
  'relative flex flex-row items-center gap-2 rounded-lg p-2 text-start text-fd-muted-foreground wrap-anywhere [&_svg]:size-4 [&_svg]:shrink-0 transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none data-[active=true]:bg-fd-primary/10 data-[active=true]:text-fd-primary data-[active=true]:hover:transition-colors';

const nestedHighlightClass =
  "data-[active=true]:before:content-[''] data-[active=true]:before:bg-fd-primary data-[active=true]:before:absolute data-[active=true]:before:w-px data-[active=true]:before:inset-y-2.5 data-[active=true]:before:inset-s-2.5";

type ProgressSidebarItemProps = {
  item: PageTree.Item;
};

export default function ProgressSidebarItem({
  item,
}: ProgressSidebarItemProps) {
  const pathname = usePathname();
  const active = isActive(item.url, pathname);
  const depth = useFolderDepth();
  const lessonId = urlToLessonId(item.url);
  const [complete, setComplete] = useState(false);

  const refresh = useCallback(() => {
    if (!lessonId) {
      setComplete(false);
      return;
    }
    setComplete(isLessonComplete(lessonId));
  }, [lessonId]);

  useEffect(() => {
    refresh();
    window.addEventListener(PROGRESS_UPDATED_EVENT, refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(PROGRESS_UPDATED_EVENT, refresh);
      window.removeEventListener('storage', refresh);
    };
  }, [refresh]);

  return (
    <BaseSidebarItem
      href={item.url}
      external={item.external}
      active={active}
      icon={
        item.icon ??
        (item.external ? (
          <ExternalLink className="size-4 shrink-0" />
        ) : undefined)
      }
      className={cn(linkItemClass, depth >= 1 && nestedHighlightClass)}
      style={{ paddingInlineStart: getItemOffset(depth) }}
    >
      <span className="flex min-w-0 flex-1 items-center gap-2">
        <span className="min-w-0 flex-1 truncate">{item.name}</span>
        {complete && (
          <Check
            aria-label="Completed"
            className="size-3.5 shrink-0 text-emerald-600 opacity-80 dark:text-emerald-400"
          />
        )}
      </span>
    </BaseSidebarItem>
  );
}

ProgressSidebarItem.displayName = 'ProgressSidebarItem';
