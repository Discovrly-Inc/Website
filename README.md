# Discovrly Website

Marketing website for [Discovrly](https://www.discovrly.com) — the operating system for product management teams.

Built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

---

## Project Overview

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, problem, solution, features overview, waitlist |
| Features | `/features` | Full feature breakdown (Research Hub, Insight Engine, Auto-Generate, Tracking) |
| Contact | `/contact` | Contact form |
| Privacy Policy | `/privacy` | GDPR-compliant privacy policy |
| Terms of Service | `/terms` | Standard SaaS terms |

Static export configured for Namecheap Apache hosting (`output: 'export'` in `next.config.js`).

---

## Local Development

### Prerequisites
- Node.js 18+
- npm 9+

### Setup

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values before building:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (format: `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog Project API Key |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog host URL (default: `https://app.posthog.com`) |

> **Note:** Analytics are scaffolded but not activated. See setup instructions below.

---

## Build & Deploy

### Build

```bash
npm run build
```

This generates a `/out` directory with the fully static site.

### Note on API Routes (Waitlist & Contact Forms)

The `/api/waitlist` and `/api/contact` routes are included as stubs for development and for potential deployment to a Node.js host (Vercel, Railway, etc.). With `output: 'export'` (static mode), **these routes are not included in the `/out` build** — form submissions will return an error in production on Namecheap.

**For static hosting, replace the `fetch('/api/...')` calls in form components with a third-party service:**
- [Formspree](https://formspree.io) — drop-in form handling, free tier available
- [EmailJS](https://emailjs.com) — send emails directly from the browser
- [Loops](https://loops.so) — purpose-built for waitlists and email capture

When you're ready to go live, update `WaitlistForm.tsx` and `ContactForm.tsx` to point to your chosen service.

### Deploy to Namecheap (cPanel)

1. Run `npm run build` to generate `/out`
2. Log into Namecheap cPanel → **File Manager**
3. Navigate to `public_html`
4. Delete or back up any existing files
5. Upload the **contents** of the `/out` directory (not the folder itself) into `public_html`
6. The `.htaccess` file in `/out` (copied from `/public/.htaccess`) handles HTTPS redirect, www redirect, and clean URLs

**Via FTP:**
```bash
# Using lftp (example)
lftp -u USERNAME,PASSWORD ftp.yourdomain.com -e "mirror -R ./out/ /public_html/; quit"
```

> **Important:** Make sure hidden files (`.htaccess`) are uploaded. In cPanel File Manager, enable "Show Hidden Files" before uploading.

---

## GA4 Setup Instructions

1. Go to [Google Analytics](https://analytics.google.com) → Create Property
2. Set up a **Web** data stream for `www.discovrly.com`
3. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)
4. Add it to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
5. Open `app/layout.tsx` and uncomment the GA4 lines:
   ```tsx
   // Before (commented out):
   // import { GoogleAnalytics } from '@next/third-parties/google';
   // <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />

   // After (active):
   import { GoogleAnalytics } from '@next/third-parties/google';
   // ... in JSX:
   <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
   ```
6. Rebuild: `npm run build`
7. Redeploy `/out` to Namecheap

---

## PostHog Setup Instructions

1. Create an account at [PostHog](https://app.posthog.com)
2. Create a project and copy your **Project API Key**
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_POSTHOG_KEY=phc_XXXXXXXXX
   NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
   ```
4. Run: `npm install posthog-js`
5. Update `lib/posthog.ts` with initialization code (see comments in that file)
6. Add a PostHog provider component to `app/layout.tsx`
7. Rebuild and redeploy

---

## Adding Logo & Favicon

When brand assets are ready:

1. **Favicon:** Replace `public/favicon.ico` (also add `favicon-32x32.png`, `apple-touch-icon.png`)
2. **Logo image:** Add `public/logo.svg` or `public/logo.png`
3. **Nav:** In `components/Nav.tsx`, replace the text wordmark with `<Image src="/logo.svg" ... />`
4. **Footer:** Same in `components/Footer.tsx`
5. **OG Image:** Add `public/og-image.png` (1200×630px) and reference it in `components/SEO.tsx` under `openGraph.images`

---

## GitHub Repository

Repo name: `discovrly-website`

```bash
git init
git add .
git commit -m "Initial commit: Discovrly marketing website"
git remote add origin https://github.com/YOUR_ORG/discovrly-website.git
git push -u origin main
```

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Geist Sans (via `geist` package)
- **Forms:** react-hook-form + zod
- **Icons:** lucide-react
- **Analytics (scaffolded):** GA4 via @next/third-parties, PostHog
- **Hosting:** Namecheap shared hosting (static export)
