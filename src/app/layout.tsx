import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Aleo } from 'next/font/google';
import './globals.css';
import React from 'react';
import I18nProvider from '@/components/I18nProvider';

const aleo = Aleo({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Filip Král | Portfolio',
  description: 'portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${aleo.className} antialiased`}>
        <I18nProvider>{children}</I18nProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
