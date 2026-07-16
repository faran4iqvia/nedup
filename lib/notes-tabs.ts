import type { Folder, Root } from 'fumadocs-core/page-tree';
import type { LayoutTab } from 'fumadocs-ui/layouts/shared';
import type { ReactNode } from 'react';

export type NotesTabConfig = {
  title: string;
  description: string;
  url: string;
  icon: ReactNode;
  /** Extra URLs that should also mark this tab active (e.g. sibling routes). */
  matchUrls?: string[];
};

function collectFolderUrls(node: Folder | Root): Set<string> {
  const urls = new Set<string>();

  function walk(folder: Folder | Root) {
    if ('index' in folder && folder.index) urls.add(folder.index.url);
    for (const child of folder.children) {
      if (child.type === 'page' && !child.external) urls.add(child.url);
      if (child.type === 'folder') walk(child);
    }
  }

  walk(node);
  return urls;
}

function findRootFolders(node: Root | Folder): Folder[] {
  const folders: Folder[] = [];

  function walk(current: Root | Folder) {
    if (current.type === 'folder' && current.root) folders.push(current);
    for (const child of current.children) {
      if (child.type === 'folder') walk(child);
    }
  }

  walk(node);
  if ('fallback' in node && node.fallback) walk(node.fallback);

  return folders;
}

/** Top-level Welcome pages (siblings of index) that belong on the Welcome tab. */
const WELCOME_PAGE_URLS = [
  '/notes/inburgering-a2-plan',
  '/notes/inburgering-b1-plan',
] as const;

function isWelcomeFolder(folder: Folder): boolean {
  if (folder.index?.url === '/notes') return true;
  return folder.children.some(
    (child) =>
      child.type === 'page' &&
      WELCOME_PAGE_URLS.includes(
        child.url as (typeof WELCOME_PAGE_URLS)[number]
      )
  );
}

function findFolderForTab(
  folders: Folder[],
  tabUrl: string
): Folder | undefined {
  if (tabUrl === '/notes') {
    return folders.find(isWelcomeFolder);
  }

  const sectionPrefix = tabUrl.replace(/\/[^/]+$/, '');

  return folders.find((folder) => {
    if (folder.index?.url === tabUrl) return true;

    // A tab URL like `/notes/daily-drill` collapses to the base `/notes`, which
    // is not a real section folder. Don't let it greedily match the first
    // folder in the tree — fall back to the tab's own URL instead.
    if (sectionPrefix === '/notes') return false;

    return folder.children.some(
      (child) =>
        child.type === 'page' && child.url.startsWith(`${sectionPrefix}/`)
    );
  });
}

export function buildNotesTabs(
  tree: Root,
  configs: NotesTabConfig[]
): LayoutTab[] {
  const rootFolders = findRootFolders(tree);

  return configs.map(({ matchUrls, ...config }) => {
    const folder = findFolderForTab(rootFolders, config.url);
    const urls = folder ? collectFolderUrls(folder) : new Set([config.url]);
    for (const extra of matchUrls ?? []) urls.add(extra);
    if (config.url === '/notes') {
      for (const welcomeUrl of WELCOME_PAGE_URLS) urls.add(welcomeUrl);
    }

    return {
      ...config,
      urls,
    };
  });
}
