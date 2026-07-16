#!/usr/bin/env node
/**
 * Regenerate lib/lesson-pronunciation-map.ts from Pronunciation Focus callouts.
 * Run after editing main-lesson PF boxes: node scripts/generate-pronunciation-lesson-map.mjs
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const notes = path.join(root, 'content/notes');

const PRON_LABELS = {
  '01-vowel-sounds': 'Vowel Sounds',
  '02-consonant-sounds': 'Consonant Sounds',
  '03-word-stress': 'Word Stress',
  '04-intonation-and-rhythm': 'Intonation and Rhythm',
  '05-connected-speech': 'Connected Speech',
  '06-regional-variation': 'Regional Variation',
  'listening-and-register-choice': 'Listening and Register Choice',
};
const PRON_ORDER = Object.keys(PRON_LABELS);

const SKIP = new Set([
  '00-introduction.mdx',
  'cheat-sheet.mdx',
  'review-and-test.mdx',
]);

const pfRe =
  /<Callout title="Pronunciation Focus"[^>]*>\s*([\s\S]*?)\s*<\/Callout>/g;
const linkRe = /\/notes\/pronunciation\/([a-z0-9-]+)/g;

/** @type {Record<string, string[]>} */
const lessonToPron = {};

for (const level of ['a0', 'a1', 'a2', 'b1']) {
  const dir = path.join(notes, level);
  const files = (await readdir(dir)).filter((f) => f.endsWith('.mdx')).sort();
  for (const file of files) {
    if (SKIP.has(file)) continue;
    const lessonId = `${level}/${file.replace(/\.mdx$/, '')}`;
    const text = await readFile(path.join(dir, file), 'utf8');
    const slugs = [];
    for (const m of text.matchAll(pfRe)) {
      for (const slug of m[1].matchAll(linkRe)) {
        if (PRON_LABELS[slug[1]] && !slugs.includes(slug[1]))
          slugs.push(slug[1]);
      }
    }
    if (slugs.length) {
      slugs.sort(
        (a, b) =>
          (PRON_ORDER.indexOf(a) === -1 ? 99 : PRON_ORDER.indexOf(a)) -
          (PRON_ORDER.indexOf(b) === -1 ? 99 : PRON_ORDER.indexOf(b))
      );
      lessonToPron[lessonId] = slugs;
    }
  }
}

const lessonSort = (a, b) => {
  const [la, sa] = a.split('/');
  const [lb, sb] = b.split('/');
  if (la !== lb) return la.localeCompare(lb);
  const na = Number(sa.match(/^(\d+)/)?.[1] ?? 999);
  const nb = Number(sb.match(/^(\d+)/)?.[1] ?? 999);
  return na - nb;
};

const lines = [
  'export type PronunciationLink = {',
  '  href: string;',
  '  label: string;',
  '};',
  '',
  '/** Main lesson slug → pronunciation reference pages (from Pronunciation Focus callouts). */',
  'export const LESSON_PRONUNCIATION_LINKS: Record<string, PronunciationLink[]> = {',
];

for (const lessonId of Object.keys(lessonToPron).sort(lessonSort)) {
  lines.push(`  '${lessonId}': [`);
  for (const slug of lessonToPron[lessonId]) {
    lines.push(
      `    { href: '/notes/pronunciation/${slug}', label: '${PRON_LABELS[slug]}' },`
    );
  }
  lines.push('  ],');
}

lines.push('};', '');

const out = path.join(root, 'lib/lesson-pronunciation-map.ts');
await writeFile(out, lines.join('\n'), 'utf8');
console.log(`Wrote ${out} (${Object.keys(lessonToPron).length} lessons)`);
