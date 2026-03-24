import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

// TODO: Add GA4 — see README for setup instructions
// import { GoogleAnalytics } from '@next/third-parties/google';
// Usage: <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
// Add after </body> closing, inside the html element

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

        {/* TODO: Uncomment when GA4 Measurement ID is ready */}
        {/* <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} /> */}
      </body>
    </html>
  );
}
