import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.discovrly.com'),
  title: {
    default: 'Discovrly — OS for Product Teams',
    template: '%s | Discovrly',
  },
  description:
    'Discovrly centralizes research, synthesizes insights with AI, and auto-generates PRDs and Jira tickets. The full-vertical operating system for product management teams.',
  openGraph: {
    siteName: 'Discovrly',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans">
        <Nav />
        <main>{children}</main>
        <Footer />

        <GoogleAnalytics gaId="G-XT9652XEXE" />
      </body>
    </html>
  );
}
