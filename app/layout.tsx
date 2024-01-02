import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import { Navbar } from '@/app/components/Navbar/Navbar';
import { Provider } from '@components/Provider';
import './globals.css';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KP Blogs',
  description: 'Blogs made by Kristers Pulle',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={quicksand.className}>
          <Navbar />
          {children}
        </body>
      </Provider>
    </html>
  );
}

