import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import QueryProvider from './QueryProvider';
import Navigation from '../components/Navigation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Manchester City Match Center',
  description: 'Luxury Manchester City match center dashboard built with Next.js and Tailwind CSS.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider>
          <QueryProvider>
            <Navigation />
            {children}
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
