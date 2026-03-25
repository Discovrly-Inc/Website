'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';

if (typeof window !== 'undefined') {
  posthog.init('phc_aUIPUmmzZtbLyI4RNmKPmwC6jo1JjU4JZ85p61kGjL3', {
    api_host: 'https://us.i.posthog.com',
    capture_pageview: true,
    capture_pageleave: true,
  });
}

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  return <PHProvider client={posthog}>{children}</PHProvider>;
}
