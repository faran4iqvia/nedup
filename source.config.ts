import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { searchStructureOptions } from './lib/search-index';

// You can customize Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: 'content/notes',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  // Compute search structured data at build time with our JSX-aware extraction
  // (indexes RefCard props, skips drawer noise). The result is embedded in the
  // bundle, so the search route needs no filesystem access at request time.
  mdxOptions: {
    remarkStructureOptions: searchStructureOptions,
  },
});
