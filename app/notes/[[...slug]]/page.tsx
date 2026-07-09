import {
  getPageImage,
  // getPageMarkdownUrl,
  source,
} from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  // MarkdownCopyButton,
  // ViewOptionsPopover,
} from 'fumadocs-ui/layouts/notebook/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import PageActions from '@/components/app-ui/page-actions';
import GrammarTaughtIn from '@/components/app-ui/grammar-taught-in';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';

// @ts-ignore
export default async function Page(props: PageProps<'/notes/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  // const markdownUrl = getPageMarkdownUrl(page).url;
  const pageTitle = page.data.title;
  const hasEnglishLetters = /[a-z]/i.test(pageTitle);

  const isUrduPage = params.slug?.some(
    // @ts-ignore
    (s) => s === 'urdu' || s === 'urdu-duas'
  );

  const needsUrduFontInTitle = !hasEnglishLetters && isUrduPage;

  const needsUrduFontInContent = !!isUrduPage;

  const slugPath = params.slug?.join('/') ?? '';
  const isGrammarLesson =
    params.slug?.[0] === 'grammar' &&
    slugPath !== 'grammar/00-introduction' &&
    slugPath !== 'grammar/review-and-practice';

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle
        className={
          needsUrduFontInTitle ? 'font-urdu text-6xl! mb-2' : undefined
        }
      >
        {pageTitle}
      </DocsTitle>
      <DocsDescription
        className={needsUrduFontInTitle ? 'font-urdu text-3xl! mb-0' : 'mb-0'}
      >
        {page.data.description}
      </DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-4">
        <PageActions />
        {/* <MarkdownCopyButton markdownUrl={markdownUrl} /> */}
        {/* <ViewOptionsPopover
          markdownUrl={markdownUrl}
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`}
        /> */}
      </div>
      <DocsBody>
        {isGrammarLesson && (
          <GrammarTaughtIn grammarPath={`/notes/${slugPath}`} />
        )}
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  // @ts-ignore
  props: PageProps<'/notes/[[...slug]]'>
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
