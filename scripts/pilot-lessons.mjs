#!/usr/bin/env node
/**
 * Batch-update lesson MDX files for the interactive pilot:
 * - Wrap Answer Key in ExerciseAccordion
 * - Insert LessonVocabularyTool, LessonFlashcards, GrammarFocus, LessonCompleteButton
 *
 * Usage: node scripts/pilot-lessons.mjs a1
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const level = process.argv[2];
if (!level || !/^a[012]|b1$/.test(level)) {
  console.error('Usage: node scripts/pilot-lessons.mjs <a0|a1|a2|b1>');
  process.exit(1);
}

const LEVEL_DIR = path.join(__dirname, `../content/notes/${level}`);

function lessonIdFromFile(filename) {
  const slug = filename.replace(/\.mdx$/, '');
  return `${level}/${slug}`;
}

function wrapAnswerKey(content) {
  if (content.includes('<ExerciseAccordion')) return content;

  const answerKeyRegex =
    /## Answer Key\n\n(<ShadCnCard[\s\S]*?<\/ShadCnCard>)(\n\n## )/;
  const multiPartRegex =
    /## Answer Key\n\n([\s\S]*?)(\n\n## Level Progress Note|\n\n## What )/;

  if (answerKeyRegex.test(content)) {
    return content.replace(
      answerKeyRegex,
      '## Answer Key\n\n<ExerciseAccordion title="Show answer key">\n\n$1\n\n</ExerciseAccordion>\n\n## '
    );
  }

  if (multiPartRegex.test(content) && content.includes('## Answer Key')) {
    return content.replace(
      multiPartRegex,
      '## Answer Key\n\n<ExerciseAccordion title="Show answer key">\n\n$1\n\n</ExerciseAccordion>\n\n## '
    );
  }

  return content;
}

function insertBeforeLevelProgress(content, block) {
  if (content.includes(block.trim().slice(0, 30))) return content;

  const markers = [
    '\n\n## Level Progress Note',
    '\n\n## What to study next',
    '\n\n## What you can do now',
  ];

  for (const marker of markers) {
    if (content.includes(marker)) {
      return content.replace(marker, `\n\n${block}${marker}`);
    }
  }

  return content;
}

function insertAfterCoreVocabulary(content, lessonId) {
  const flashBlock = `<LessonFlashcards lessonId="${lessonId}" />\n\n`;
  if (content.includes('<LessonFlashcards')) return content;

  const exampleIdx = content.indexOf('\n\n## Example Conversation');
  const practiceIdx = content.indexOf('\n\n## Practice Exercises');
  const insertBefore = exampleIdx !== -1 ? exampleIdx : practiceIdx;

  if (insertBefore === -1) return content;

  return (
    content.slice(0, insertBefore) +
    '\n\n' +
    flashBlock +
    content.slice(insertBefore)
  );
}

function insertVocabularyTool(content, lessonId) {
  if (content.includes('<LessonVocabularyTool')) return content;

  const vocabHeader = '\n\n## Core Vocabulary\n\n';
  if (!content.includes('## Core Vocabulary')) return content;

  const toolBlock = `<LessonVocabularyTool lessonId="${lessonId}" />\n\n`;

  return content.replace(vocabHeader, `${vocabHeader}${toolBlock}`);
}

function hasGrammarFocus(content) {
  return (
    content.includes('<GrammarFocus') ||
    content.includes('<Callout title="Grammar Focus"')
  );
}

function insertGrammarFocus(content, lessonId) {
  if (hasGrammarFocus(content)) return content;

  const block = `\n\n<GrammarFocus lessonId="${lessonId}" />\n`;
  const markers = [
    '\n\n## Common Mistakes for English Speakers',
    '\n\n## Common mistakes',
    '\n\n## Learning Tips',
  ];

  for (const marker of markers) {
    if (content.includes(marker)) {
      return content.replace(marker, `${block}${marker}`);
    }
  }

  return content;
}

function insertLessonComplete(content, lessonId) {
  const block = `<LessonCompleteButton lessonId="${lessonId}" />\n\n`;
  if (content.includes('<LessonCompleteButton')) return content;

  const afterAccordion = content.indexOf('</ExerciseAccordion>');
  if (afterAccordion !== -1) {
    const insertAt = afterAccordion + '</ExerciseAccordion>'.length;
    return (
      content.slice(0, insertAt) + '\n\n' + block + content.slice(insertAt)
    );
  }

  return insertBeforeLevelProgress(content, block);
}

function processFile(filename) {
  if (filename === '00-introduction.mdx' || filename === 'cheat-sheet.mdx') {
    return;
  }

  const filePath = path.join(LEVEL_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.warn('Skip missing:', filename);
    return;
  }

  const lessonId = lessonIdFromFile(filename);
  let content = fs.readFileSync(filePath, 'utf8');

  content = insertGrammarFocus(content, lessonId);
  content = insertVocabularyTool(content, lessonId);
  content = insertAfterCoreVocabulary(content, lessonId);
  content = wrapAnswerKey(content);
  content = insertLessonComplete(content, lessonId);

  fs.writeFileSync(filePath, content);
  console.log('Updated:', filename);
}

const files = fs
  .readdirSync(LEVEL_DIR)
  .filter((f) => f.endsWith('.mdx'))
  .sort();

for (const file of files) {
  processFile(file);
}

console.log(`Done: ${level}.`);
