import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { decodeStructuredData, searchTokenizer } from '@/lib/search-index';

/**
 * Max number of result entries returned per query. Keeps the search dialog
 * focused on the most relevant pages instead of every page that merely shares a
 * common word ("jesus", "prophet" appear across dozens of pages on this site).
 * Clients can override with `?limit=`.
 */
const DEFAULT_LIMIT = 20;

const STOP_WORDS = new Set(searchTokenizer.stopWords);

// Orama-backed advanced search. We override the index per page with our own
// structured data so the text inside custom JSX components (RefCard verses,
// ShadCnCard content, …) is actually searchable — Fumadocs' default extraction
// can't see JSX, which is what made results feel random.
const server = createFromSource(source, {
  // Enable English stemming + stop-word removal. Orama's default tokenizer has
  // neither, so common words and single letters polluted results.
  components: {
    tokenizer: searchTokenizer,
  },
  search: {
    // Require results to match the query terms instead of Orama's default
    // match-any behaviour, which flooded results with weakly-related pages.
    threshold: 0,
    // Cap how many snippets a single page contributes so the limited result
    // set spans a few distinct pages rather than one page's many matches.
    groupBy: {
      properties: ['page_id'],
      maxResult: 4,
    },
  },
  buildIndex(page) {
    // structuredData is computed at build time (see source.config.ts) and
    // embedded in the bundle — no filesystem read or MDX parsing at runtime.
    return {
      id: page.url,
      url: page.url,
      title: page.data.title,
      description: page.data.description,
      structuredData: decodeStructuredData(page.data.structuredData),
    };
  },
});

type Result = Awaited<ReturnType<typeof server.search>>[number];

const stripMarks = (text: string) => text.replace(/<\/?mark>/g, '');

/** Lowercase word tokens, dropping stop words and single letters. */
function meaningfulWords(text: string): string[] {
  return (text.toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? []).filter(
    (word) => word.length > 1 && !STOP_WORDS.has(word)
  );
}

/**
 * Score how well a page title matches the query (higher = better):
 *  - 2   → title contains the full query phrase
 *  - 1   → title contains every meaningful query word
 *  - <1  → fraction of meaningful query words present
 *  - 0   → no overlap
 */
function titleRelevance(
  title: string,
  query: string,
  queryWords: string[]
): number {
  const normalizedTitle = title.toLowerCase();
  if (query.trim() && normalizedTitle.includes(query.toLowerCase().trim())) {
    return 2;
  }
  if (queryWords.length === 0) return 0;

  const titleWords = new Set(meaningfulWords(title));
  const present = queryWords.filter((word) => titleWords.has(word)).length;
  if (present === queryWords.length) return 1;
  return (present / queryWords.length) * 0.5;
}

/**
 * Re-order result groups so pages whose *title* matches the query rank first —
 * e.g. searching "Jesus as a prophet" surfaces the page titled "Jesus as a
 * Prophet" ahead of pages that merely mention those words. Fumadocs returns a
 * flat list where each page entry is followed by its heading/text snippets, so
 * we regroup, score by title, stable-sort (ties keep Orama's relevance order),
 * then flatten back.
 */
function rankByTitle(results: Result[], query: string): Result[] {
  const queryWords = meaningfulWords(query);

  const groups: { page: Result; items: Result[] }[] = [];
  for (const result of results) {
    if (result.type === 'page' || groups.length === 0) {
      groups.push({ page: result, items: [] });
    } else {
      groups[groups.length - 1].items.push(result);
    }
  }

  return groups
    .map((group, index) => ({
      group,
      index,
      score: titleRelevance(
        stripMarks(group.page.content ?? ''),
        query,
        queryWords
      ),
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .flatMap(({ group }) => [group.page, ...group.items]);
}

// Thin GET wrapper: Fumadocs' default endpoint always passes `limit: undefined`,
// which overrides any `search.limit` we configure — so an unbounded query like
// "jesus as a prophet" returned 200+ entries. We apply an explicit default and
// promote title matches to the top.
export async function GET(request: Request): Promise<Response> {
  const params = new URL(request.url).searchParams;
  const query = params.get('query');
  if (!query) return Response.json([]);

  const rawLimit = Number(params.get('limit'));
  const limit =
    Number.isInteger(rawLimit) && rawLimit > 0 ? rawLimit : DEFAULT_LIMIT;

  // Fetch a wider pool so a strong title match ranked just outside the limit
  // can still be promoted, then trim back to the requested size.
  const results = await server.search(query, {
    limit: Math.min(60, limit * 3),
    tag: params.get('tag')?.split(','),
    locale: params.get('locale'),
  });

  return Response.json(rankByTitle(results, query).slice(0, limit));
}
