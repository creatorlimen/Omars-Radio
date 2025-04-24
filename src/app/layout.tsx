import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cursor-Built Apps Directory',
  description: 'A showcase of applications built using the Cursor IDE',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto min-h-screen px-4 py-8 mt-16">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
