import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Заявки по ЧС',
  description: 'Пострадавшим в результате ЧС',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <Navbar />
        <main className='max-w-screen-xl mx-auto'>{children}</main>
      </body>
    </html>
  );
}
