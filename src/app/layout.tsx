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
        <main className='max-w-screen-xl mx-auto py-12'>{children}</main>
      </body>
    </html>
  );
}
