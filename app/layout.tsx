import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/navbar/Navbar';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KP Blogs',
  description: 'Blogs made by Kristers Pulle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
