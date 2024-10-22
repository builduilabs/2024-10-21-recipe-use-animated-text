import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Recursive filetree',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-gray-800">
      <body
        className={`${inter.className} flex h-full flex-col text-gray-900 antialiased relative`}
      >
        {children}
      </body>
    </html>
  );
}