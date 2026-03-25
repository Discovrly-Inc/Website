import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PostHogProvider from '@/components/PostHogProvider';

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
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
      </head>
      <body className="font-sans">
        <PostHogProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </PostHogProvider>
        <GoogleAnalytics gaId="G-XT9652XEXE" />
        <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </body>
    </html>
  );
}
