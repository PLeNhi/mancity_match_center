import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import QueryProvider from '../components/query-provider';
import Navigation from '../components/navigation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Manchester City Match Center',
  description: 'Luxury Manchester City match center dashboard built with Next.js and Tailwind CSS.',
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/favicon.svg',
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Manchester City Match Center',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8CD7F6' },
    { media: '(prefers-color-scheme: dark)', color: '#1C2C5B' },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-TileColor" content="#8CD7F6" />
        <meta name="theme-color" content="#8CD7F6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1C2C5B" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider>
          <QueryProvider>
            <Navigation />
            <div className="px-4 py-8">{children}</div>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
