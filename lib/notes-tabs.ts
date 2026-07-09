import type { Folder, Root } from 'fumadocs-core/page-tree';
import type { LayoutTab } from 'fumadocs-ui/layouts/shared';
import type { ReactNode } from 'react';

export type NotesTabConfig = {
  title: string;
  description: string;
  url: string;
  icon: ReactNode;
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

function findFolderForTab(
  folders: Folder[],
  tabUrl: string
): Folder | undefined {
  if (tabUrl === '/notes') {
    return folders.find((folder) => folder.index?.url === '/notes');
  }

  const sectionPrefix = tabUrl.replace(/\/[^/]+$/, '');

  return folders.find((folder) => {
    if (folder.index?.url === tabUrl) return true;

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

  return configs.map((config) => {
    const folder = findFolderForTab(rootFolders, config.url);
    const urls = folder ? collectFolderUrls(folder) : new Set([config.url]);

    return {
      ...config,
      urls,
    };
  });
}
