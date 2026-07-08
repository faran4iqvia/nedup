import type {
  StructureOptions,
  StructuredData,
} from 'fumadocs-core/mdx-plugins';

/**
 * Components whose meaningful text lives in JSX *attributes* (props) rather than
 * in their children. We index those attributes and deliberately skip the
 * children — e.g. RefCard's drawer body is long contextual prose that would
 * otherwise drown the index in noise and produce irrelevant matches.
 */
const ATTRIBUTE_ONLY_COMPONENTS = new Set(['RefCard']);

/**
 * JSX attributes that carry human-readable, indexable text. Anything else
 * (className, type, drawerTrigger, minColOnMobile, …) is ignored.
 */
const INDEXABLE_ATTRIBUTES = new Set([
  'cardTitle',
  'cardContent',
  'title',
  'description',
]);

/**
 * English stop words + single letters. Orama's default tokenizer ships with an
 * EMPTY stop-word list and stemming disabled, so common words ("the", "is",
 * "as", "and") and even single letters ("a") were being indexed and matched —
 * which is why long, natural-language queries returned noisy, irrelevant hits
 * with single-character highlights. Removing them makes matching focus on the
 * meaningful terms.
 */
const STOP_WORDS = [
  'a',
  'about',
  'above',
  'after',
  'again',
  'all',
  'also',
  'am',
  'an',
  'and',
  'any',
  'are',
  'as',
  'at',
  'be',
  'because',
  'been',
  'before',
  'being',
  'below',
  'between',
  'both',
  'but',
  'by',
  'can',
  'could',
  'did',
  'do',
  'does',
  'doing',
  'down',
  'during',
  'each',
  'few',
  'for',
  'from',
  'further',
  'had',
  'has',
  'have',
  'having',
  'he',
  'her',
  'here',
  'hers',
  'herself',
  'him',
  'himself',
  'his',
  'how',
  'i',
  'if',
  'in',
  'into',
  'is',
  'it',
  'its',
  'itself',
  'just',
  'me',
  'more',
  'most',
  'my',
  'myself',
  'no',
  'nor',
  'not',
  'now',
  'of',
  'off',
  'on',
  'once',
  'only',
  'or',
  'other',
  'our',
  'ours',
  'ourselves',
  'out',
  'over',
  'own',
  'same',
  'she',
  'should',
  'so',
  'some',
  'such',
  'than',
  'that',
  'the',
  'their',
  'theirs',
  'them',
  'themselves',
  'then',
  'there',
  'these',
  'they',
  'this',
  'those',
  'through',
  'to',
  'too',
  'under',
  'until',
  'up',
  'very',
  'was',
  'we',
  'were',
  'what',
  'when',
  'where',
  'which',
  'while',
  'who',
  'whom',
  'why',
  'will',
  'with',
  'would',
  'you',
  'your',
  'yours',
  'yourself',
  'yourselves',
  // remaining single letters, so no lone alphabet ever matches
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'm',
  'n',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

/**
 * Tokenizer config shared by the search index and queries. Enables English
 * stemming (so "recognised" / "recognises" / "recognise" all match) and strips
 * the stop words above.
 */
export const searchTokenizer = {
  language: 'english',
  stemming: true,
  stopWords: STOP_WORDS,
};

/** Decode the HTML entities MDX leaves in attribute/text values (e.g. the
 * `&#x22;` used to escape quotes inside JSX props) so the index stores clean,
 * tokenizable words instead of junk like `x22concerning`. */
function decodeEntities(input: string): string {
  return input
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) =>
      String.fromCodePoint(parseInt(hex, 16))
    )
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

/**
 * Structure-extraction options for Fumadocs' build-time `remarkStructure`.
 *
 * Configured globally in [source.config.ts] so the JSON-aware structured data
 * is computed **at build** and embedded in the bundle — the search route then
 * reads it without touching the filesystem (no `getText('raw')`) or re-parsing
 * MDX, which keeps serverless cold starts fast and avoids the Vercel
 * missing-file issue.
 *
 * Fumadocs compiles MDX to a real MDAST, so unlike the standalone `structure()`
 * helper this *does* see JSX components. We tune it to index:
 *  - RefCard → its `cardTitle` / `cardContent` props (the verse + quote), with
 *    the drawer children skipped (see `mdxTypes`).
 *  - ShadCnCard / CardHeader / CardContent → their child text.
 *  - Callout / Card → included with children.
 *  - Headings, paragraphs, blockquotes, tables → as usual.
 */
export const searchStructureOptions: StructureOptions = {
  /**
   * Treat attribute-only components (RefCard) as a single leaf content block.
   * This makes structure extraction stringify their props and then SKIP their
   * children (the drawer body) — without mutating the rendered tree, so the
   * visible drawer content is unaffected.
   */
  mdxTypes(node) {
    if (node.name && ATTRIBUTE_ONLY_COMPONENTS.has(node.name)) return true;
    return !node.children || node.children.length === 0;
  },
  stringify: {
    // Render attribute-only components (RefCard) as clean plain text built from
    // their indexable props, instead of the literal `<RefCard … />` markup.
    stringify(node) {
      if (
        node.type === 'mdxJsxFlowElement' ||
        node.type === 'mdxJsxTextElement'
      ) {
        if (node.name && ATTRIBUTE_ONLY_COMPONENTS.has(node.name)) {
          const parts: string[] = [];
          for (const attr of node.attributes ?? []) {
            if (
              attr.type === 'mdxJsxAttribute' &&
              INDEXABLE_ATTRIBUTES.has(attr.name) &&
              typeof attr.value === 'string'
            ) {
              parts.push(attr.value);
            }
          }
          return parts.length > 0 ? decodeEntities(parts.join('. ')) : '';
        }
      }
      return undefined;
    },
    filterElement(node) {
      if (
        node.type === 'mdxJsxFlowElement' ||
        node.type === 'mdxJsxTextElement'
      ) {
        switch (node.name) {
          // Include the element itself so its attributes get stringified.
          case 'RefCard':
          case 'Card':
          case 'Callout':
          case 'File':
          case 'TypeTable':
            return true;
        }
        // Other JSX wrappers (GridContainer, ShadCnCard, CardHeader, …): drop
        // the wrapper element but keep its child text.
        return 'children-only';
      }
      return true;
    },
    filterMdxAttributes(_node, attribute) {
      return (
        attribute.type === 'mdxJsxAttribute' &&
        INDEXABLE_ATTRIBUTES.has(attribute.name) &&
        typeof attribute.value === 'string'
      );
    },
  },
};

/**
 * Decode leftover HTML entities in already-computed structured data (e.g.
 * `&#x2A;` from escaped markdown emphasis) so the search index tokenizes clean
 * words. Returns a new object; the input is not mutated.
 */
export function decodeStructuredData(data: StructuredData): StructuredData {
  return {
    headings: data.headings.map((heading) => ({
      ...heading,
      content: decodeEntities(heading.content),
    })),
    contents: data.contents.map((content) => ({
      ...content,
      content: decodeEntities(content.content),
    })),
  };
}
