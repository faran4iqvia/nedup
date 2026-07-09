import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/notebook/page';
import type { ReactNode } from 'react';

type NotesToolPageProps = {
  title: string;
  description: string;
  children: ReactNode;
};

/** Wraps custom /notes/* tool pages in the same layout shell as MDX lessons. */
export default function NotesToolPage({
  title,
  description,
  children,
}: NotesToolPageProps) {
  return (
    <DocsPage
      breadcrumb={{ enabled: false }}
      tableOfContent={{ enabled: false }}
      tableOfContentPopover={{ enabled: false }}
      footer={{ enabled: false }}
    >
      <DocsTitle>{title}</DocsTitle>
      <DocsDescription>{description}</DocsDescription>
      <DocsBody className="not-prose">{children}</DocsBody>
    </DocsPage>
  );
}
