// TODO: PostHog Analytics — scaffold only, not yet initialized
//
// To activate PostHog:
// 1. Run: npm install posthog-js
// 2. Replace the placeholder below with your actual PostHog key from:
//    https://app.posthog.com/settings → Project API Key
// 3. Uncomment and implement the initialization code
// 4. Add the PostHogProvider to app/layout.tsx
// 5. Set NEXT_PUBLIC_POSTHOG_KEY and NEXT_PUBLIC_POSTHOG_HOST in .env.local
//
// Example implementation:
// import posthog from 'posthog-js';
//
// export function initPostHog() {
//   if (typeof window !== 'undefined') {
//     posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
//       api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
//       capture_pageview: false, // Disable automatic pageview capture
//     });
//   }
// }
//
// export { posthog };

export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY ?? 'phc_TODO_ADD_YOUR_KEY';
