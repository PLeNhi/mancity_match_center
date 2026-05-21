import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MCFC Match Center',
  description: 'Luxury Manchester City match center dashboard built with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
