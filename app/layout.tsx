import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { Metadata } from 'next';
import { appName } from '@/lib/shared';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  ),
  title: {
    default: appName,
    template: `%s | ${appName}`,
  },
  description: 'Quran notes and documentation.',
  openGraph: {
    siteName: appName,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },

  // 1. Explicitly point to your web application icons
  icons: {
    icon: '/icons/favicon.ico', // Points to public/favicon.ico if placed in public folder
    shortcut: '/icons/icon-96x96.png',
    apple: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },

  // 2. Enable standalone capabilities for iOS PWA behavior
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: appName,
  },
};

// @ts-ignore
export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{
            defaultTheme: 'light',
          }}
          search={{
            enabled: true,
            options: { delayMs: 300 },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
