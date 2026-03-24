import { Metadata } from 'next';

const BASE_URL = 'https://www.discovrly.com';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  ogType?: string;
}

export function generateMetadata({
  title,
  description,
  path = '',
  ogType = 'website',
}: SEOProps): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: ogType as 'website',
      siteName: 'Discovrly',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
