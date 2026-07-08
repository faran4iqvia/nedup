import { getPageImage, source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';
import { generate as DefaultImage } from 'fumadocs-ui/og';
import { appName } from '@/lib/shared';

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: RouteContext<'/og/notes/[...slug]'>
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  // Satori doesn't support some OpenType substitution tables used by Arabic/Urdu fonts.
  // Check both title and description — a page can have a Latin title but Urdu description.
  const nonLatinRe = /[^ -ɏ]/;
  const hasNonLatin =
    nonLatinRe.test(page.data.title ?? '') ||
    nonLatinRe.test(page.data.description ?? '');
  const safeTitle = hasNonLatin ? (appName ?? 'Note') : page.data.title;
  const safeDescription = hasNonLatin ? '' : page.data.description;

  return new ImageResponse(
    <DefaultImage
      title={safeTitle}
      description={safeDescription}
      site={appName}
    />,
    {
      width: 1200,
      height: 630,
    }
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}
