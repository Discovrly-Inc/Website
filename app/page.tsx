import type { Metadata } from 'next';
import Link from 'next/link';
import { Database, Lightbulb, FileText, ArrowRight } from 'lucide-react';
import { generateMetadata } from '@/components/SEO';
import WaitlistForm from '@/components/WaitlistForm';
import FeatureCard from '@/components/FeatureCard';
import FlowDiagram from '@/components/FlowDiagram';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CalendlyButton from '@/components/CalendlyButton';

export const metadata: Metadata = generateMetadata({
  title: 'Discovrly — OS for Product Teams | Research to Execution',
  description:
    'Discovrly centralizes research, synthesizes insights with AI, and auto-generates PRDs and Jira tickets. The full-vertical operating system for product management teams.',
  path: '/',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Discovrly',
  applicationCategory: 'BusinessApplication',
  description:
    'The operating system for product management teams. Centralize research, synthesize insights, auto-generate PRDs and tickets, and track post-implementation progress.',
  url: 'https://www.discovrly.com',
  offers: { '@type': 'Offer', availability: 'PreOrder' },
};

const painCards = [
  {
    title: 'Research is scattered across tools, teams, and systems',
    body: 'Customer calls, feedback, docs, analytics, and product data all live in different places',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Multiple floating app windows scattered */}
        <rect x="2" y="6" width="16" height="12" rx="3" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1.2"/>
        <rect x="2" y="6" width="16" height="3.5" rx="3" fill="#fca5a5"/>
        <line x1="5" y1="13" x2="15" y2="13" stroke="#fca5a5" strokeWidth="1" strokeLinecap="round"/>
        <line x1="5" y1="15.5" x2="12" y2="15.5" stroke="#fca5a5" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>

        <rect x="20" y="2" width="16" height="12" rx="3" fill="#fef3c7" stroke="#fcd34d" strokeWidth="1.2"/>
        <rect x="20" y="2" width="16" height="3.5" rx="3" fill="#fcd34d"/>
        <line x1="23" y1="9" x2="33" y2="9" stroke="#fcd34d" strokeWidth="1" strokeLinecap="round"/>
        <line x1="23" y1="11.5" x2="29" y2="11.5" stroke="#fcd34d" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>

        <rect x="30" y="18" width="16" height="12" rx="3" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.2"/>
        <rect x="30" y="18" width="16" height="3.5" rx="3" fill="#93c5fd"/>
        <line x1="33" y1="25" x2="43" y2="25" stroke="#93c5fd" strokeWidth="1" strokeLinecap="round"/>
        <line x1="33" y1="27.5" x2="40" y2="27.5" stroke="#93c5fd" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>

        <rect x="6" y="24" width="16" height="12" rx="3" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="1.2"/>
        <rect x="6" y="24" width="16" height="3.5" rx="3" fill="#c4b5fd"/>
        <line x1="9" y1="31" x2="19" y2="31" stroke="#c4b5fd" strokeWidth="1" strokeLinecap="round"/>
        <line x1="9" y1="33.5" x2="16" y2="33.5" stroke="#c4b5fd" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>

        {/* Disconnected dashed lines between windows */}
        <line x1="18" y1="12" x2="20" y2="8" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2"/>
        <line x1="22" y1="14" x2="30" y2="22" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2"/>
        <line x1="14" y1="18" x2="10" y2="24" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2"/>

        {/* Question mark indicating confusion */}
        <text x="26" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f87171" fontFamily="system-ui">?</text>
      </svg>
    ),
  },
  {
    title: 'You forget why you made past decisions',
    body: 'Context gets lost, and teams revisit the same questions again',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Brain outline */}
        <path d="M24 8c-4 0-7 2-8.5 4.5C14 11 12 10 10 11c-3 1.5-4 5-2.5 8C6 20.5 5 23 5.5 26c.5 3 3 5.5 6 6 1 2.5 3.5 4 6.5 4h1" stroke="#fca5a5" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M24 8c4 0 7 2 8.5 4.5C34 11 36 10 38 11c3 1.5 4 5 2.5 8C42 20.5 43 23 42.5 26c-.5 3-3 5.5-6 6-1 2.5-3.5 4-6.5 4h-1" stroke="#fca5a5" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <line x1="24" y1="12" x2="24" y2="36" stroke="#fca5a5" strokeWidth="1" strokeDasharray="2 2"/>

        {/* Fading connection nodes — knowledge disappearing */}
        <circle cx="16" cy="18" r="2.5" fill="#fca5a5" opacity="0.9"/>
        <circle cx="32" cy="20" r="2.5" fill="#fca5a5" opacity="0.7"/>
        <circle cx="18" cy="28" r="2.5" fill="#fca5a5" opacity="0.5"/>
        <circle cx="30" cy="30" r="2.5" fill="#fca5a5" opacity="0.3"/>
        <circle cx="14" cy="23" r="1.5" fill="#fca5a5" opacity="0.2"/>
        <circle cx="34" cy="25" r="1.5" fill="#fca5a5" opacity="0.15"/>

        {/* Fading dotted connections */}
        <line x1="16" y1="18" x2="32" y2="20" stroke="#fca5a5" strokeWidth="1" strokeDasharray="2 2" opacity="0.4"/>
        <line x1="18" y1="28" x2="30" y2="30" stroke="#fca5a5" strokeWidth="1" strokeDasharray="2 2" opacity="0.25"/>
        <line x1="16" y1="18" x2="18" y2="28" stroke="#fca5a5" strokeWidth="1" strokeDasharray="2 2" opacity="0.3"/>

        {/* Evaporating arrow going up */}
        <path d="M36 14l3-5m0 0l-2 .5m2-.5l-.5 2" stroke="#f87171" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
        <path d="M10 16l-3-5m0 0l2 .5m-2-.5l.5 2" stroke="#f87171" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: 'Writing PRDs and tickets takes your whole day',
    body: 'Turning insights into execution is slow and manual',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stack of documents */}
        <rect x="10" y="4" width="22" height="28" rx="3" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1.2"/>
        <rect x="10" y="4" width="22" height="5" rx="3" fill="#fca5a5" opacity="0.4"/>
        <line x1="14" y1="14" x2="28" y2="14" stroke="#fca5a5" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="14" y1="18" x2="28" y2="18" stroke="#fca5a5" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="14" y1="22" x2="24" y2="22" stroke="#fca5a5" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="14" y1="26" x2="20" y2="26" stroke="#fca5a5" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>

        {/* Shadow documents behind */}
        <rect x="13" y="6" width="22" height="28" rx="3" fill="none" stroke="#fca5a5" strokeWidth="0.8" opacity="0.3"/>
        <rect x="16" y="8" width="22" height="28" rx="3" fill="none" stroke="#fca5a5" strokeWidth="0.8" opacity="0.15"/>

        {/* Clock overlay — time drain */}
        <circle cx="36" cy="36" r="10" fill="white" stroke="#f87171" strokeWidth="1.5"/>
        <circle cx="36" cy="36" r="8" fill="#fef2f2"/>
        <line x1="36" y1="31" x2="36" y2="36" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="36" y1="36" x2="40" y2="38" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="36" cy="36" r="1.2" fill="#ef4444"/>

        {/* Small tick marks on clock */}
        <line x1="36" y1="28.5" x2="36" y2="30" stroke="#fca5a5" strokeWidth="1" strokeLinecap="round"/>
        <line x1="43.5" y1="36" x2="42" y2="36" stroke="#fca5a5" strokeWidth="1" strokeLinecap="round"/>
        <line x1="36" y1="43.5" x2="36" y2="42" stroke="#fca5a5" strokeWidth="1" strokeLinecap="round"/>
        <line x1="28.5" y1="36" x2="30" y2="36" stroke="#fca5a5" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-32 pb-28">
        {/* Subtle grid background */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(circle at 60% 20%, rgba(79,70,229,0.06) 0%, transparent 60%), radial-gradient(circle at 10% 80%, rgba(79,70,229,0.04) 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-[48px] md:text-[64px] font-bold text-[#0f172a] leading-[1.08] tracking-[-0.02em] mb-6"
            >
              Your Research Is Everywhere.{' '}
              <span className="text-indigo-600">Your Roadmap Shouldn&apos;t Be.</span>
            </h1>
            <p className="text-[18px] md:text-[20px] text-[#64748b] leading-[1.7] mb-10 max-w-2xl mx-auto">
              Discovrly turns scattered research, feedback, and product signals into clear
              decisions, PRDs, and tickets so your team ships the right things with context.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyButton className="bg-indigo-600 text-white font-semibold rounded-lg px-7 py-4 text-[16px] hover:bg-indigo-700 transition-colors inline-flex items-center justify-center gap-2">
                Book a Demo <ArrowRight size={17} />
              </CalendlyButton>
              <Link
                href="#features"
                className="border border-[#e2e8f0] text-[#0f172a] font-semibold rounded-lg px-7 py-4 text-[16px] hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-colors inline-flex items-center justify-center"
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Hero SVG illustration */}
          <AnimateOnScroll className="mt-20" delay={200}>
            <div className="max-w-4xl mx-auto">
              <svg viewBox="0 0 1040 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <defs>
                  <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity="0"/>
                  </radialGradient>
                  <linearGradient id="hubGrad" x1="400" y1="150" x2="580" y2="310">
                    <stop offset="0%" stopColor="#6366f1"/>
                    <stop offset="100%" stopColor="#4338ca"/>
                  </linearGradient>
                  <linearGradient id="pathIn" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e2e8f0"/>
                    <stop offset="100%" stopColor="#a5b4fc"/>
                  </linearGradient>
                  <linearGradient id="pathOut" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a5b4fc"/>
                    <stop offset="100%" stopColor="#c7d2fe"/>
                  </linearGradient>
                  <filter id="cardShadow" x="-6%" y="-10%" width="112%" height="128%">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.06"/>
                  </filter>
                  <filter id="hubShadow" x="-10%" y="-10%" width="120%" height="130%">
                    <feDropShadow dx="0" dy="4" stdDeviation="14" floodColor="#4f46e5" floodOpacity="0.25"/>
                  </filter>
                </defs>

                {/* Background */}
                <rect width="1040" height="460" rx="24" fill="#fafbfc"/>
                <rect x="1" y="1" width="1038" height="458" rx="23" fill="none" stroke="#e2e8f0" strokeWidth="1"/>

                {/* Central glow */}
                <circle cx="490" cy="230" r="190" fill="url(#hubGlow)"/>

                {/* ── LABEL: "Your tools" ──────────────────────── */}

                {/* ── SOURCE CARDS (left) ─────────────────────── */}
                {/* Slack — card 1: y=46 */}
                <g filter="url(#cardShadow)">
                  <rect x="24" y="46" width="192" height="62" rx="14" fill="white"/>
                  <rect x="24" y="46" width="192" height="62" rx="14" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                  <image href="/integrations/slack-new-logo.svg" x="44" y="64" width="26" height="26"/>
                  <text x="88" y="73" fontSize="13" fontWeight="600" fill="#0f172a" fontFamily="system-ui">Slack</text>
                  <text x="88" y="90" fontSize="10" fill="#475569" fontFamily="system-ui">Messages &amp; threads</text>
                </g>

                {/* Notion — card 2: y=126 */}
                <g filter="url(#cardShadow)">
                  <rect x="24" y="126" width="192" height="62" rx="14" fill="white"/>
                  <rect x="24" y="126" width="192" height="62" rx="14" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                  <image href="/integrations/notion-icon.svg" x="44" y="144" width="26" height="26"/>
                  <text x="88" y="153" fontSize="13" fontWeight="600" fill="#0f172a" fontFamily="system-ui">Notion</text>
                  <text x="88" y="170" fontSize="10" fill="#475569" fontFamily="system-ui">Docs &amp; wikis</text>
                </g>

                {/* Zoom — card 3: y=206 */}
                <g filter="url(#cardShadow)">
                  <rect x="24" y="206" width="192" height="62" rx="14" fill="white"/>
                  <rect x="24" y="206" width="192" height="62" rx="14" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                  <image href="/integrations/zoom-communications-logo.svg" x="44" y="224" width="26" height="26"/>
                  <text x="88" y="233" fontSize="13" fontWeight="600" fill="#0f172a" fontFamily="system-ui">Zoom</text>
                  <text x="88" y="250" fontSize="10" fill="#475569" fontFamily="system-ui">Call recordings</text>
                </g>

                {/* Jira — card 4: y=286 */}
                <g filter="url(#cardShadow)">
                  <rect x="24" y="286" width="192" height="62" rx="14" fill="white"/>
                  <rect x="24" y="286" width="192" height="62" rx="14" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                  <image href="/integrations/jira-icon.svg" x="44" y="304" width="26" height="26"/>
                  <text x="88" y="313" fontSize="13" fontWeight="600" fill="#0f172a" fontFamily="system-ui">Jira</text>
                  <text x="88" y="330" fontSize="10" fill="#475569" fontFamily="system-ui">Issues &amp; boards</text>
                </g>

                {/* Salesforce — card 5: y=366 */}
                <g filter="url(#cardShadow)">
                  <rect x="24" y="366" width="192" height="62" rx="14" fill="white"/>
                  <rect x="24" y="366" width="192" height="62" rx="14" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                  <image href="/integrations/salesforce-2.svg" x="44" y="384" width="26" height="26"/>
                  <text x="88" y="393" fontSize="13" fontWeight="600" fill="#0f172a" fontFamily="system-ui">Salesforce</text>
                  <text x="88" y="410" fontSize="10" fill="#475569" fontFamily="system-ui">Customer data</text>
                </g>

                {/* ── INPUT FLOW PATHS (curved) ──────────────── */}
                <path d="M216 77 C300 77, 340 190, 410 195" stroke="url(#pathIn)" strokeWidth="1.5" strokeDasharray="6 4" fill="none"/>
                <path d="M216 157 C300 157, 350 200, 410 210" stroke="url(#pathIn)" strokeWidth="1.5" strokeDasharray="6 4" fill="none"/>
                <path d="M216 237 C300 237, 350 225, 410 228" stroke="url(#pathIn)" strokeWidth="1.5" strokeDasharray="6 4" fill="none"/>
                <path d="M216 317 C300 317, 350 255, 410 248" stroke="url(#pathIn)" strokeWidth="1.5" strokeDasharray="6 4" fill="none"/>
                <path d="M216 397 C300 397, 340 270, 410 260" stroke="url(#pathIn)" strokeWidth="1.5" strokeDasharray="6 4" fill="none"/>

                {/* ── DISCOVRLY HUB (center) ──────────────────── */}
                <g filter="url(#hubShadow)">
                  <rect x="410" y="155" width="170" height="150" rx="22" fill="url(#hubGrad)"/>
                </g>
                <circle cx="495" cy="200" r="18" fill="white" opacity="0.15"/>
                <text x="495" y="206" textAnchor="middle" fontSize="20" fill="white" fontFamily="system-ui">⚡</text>
                <text x="495" y="244" textAnchor="middle" fontSize="19" fontWeight="700" fill="white" fontFamily="system-ui" letterSpacing="-0.02em">Discovrly</text>
                <rect x="422" y="167" width="146" height="126" rx="14" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2"/>

                {/* ── OUTPUT FLOW PATHS ──────────────────────── */}
                <path d="M580 195 C640 195, 660 115, 740 115" stroke="#a5b4fc" strokeWidth="2" fill="none"/>
                <path d="M580 230 C650 230, 670 230, 740 230" stroke="#a5b4fc" strokeWidth="2" fill="none"/>
                <path d="M580 265 C640 265, 660 345, 740 345" stroke="#a5b4fc" strokeWidth="2" fill="none"/>
                {/* Arrow heads */}
                <path d="M738 111l6 4-6 4" stroke="#a5b4fc" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M738 226l6 4-6 4" stroke="#a5b4fc" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M738 341l6 4-6 4" stroke="#a5b4fc" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

                {/* ── LABEL: "Outputs" ──────────────────────────── */}

                {/* ── OUTPUT CARDS (right) ────────────────────── */}
                {/* Insights */}
                <g filter="url(#cardShadow)">
                  <rect x="750" y="80" width="260" height="70" rx="16" fill="white"/>
                  <rect x="750" y="80" width="260" height="70" rx="16" fill="none" stroke="#c7d2fe" strokeWidth="1"/>
                  <rect x="770" y="96" width="38" height="38" rx="10" fill="#e0e7ff"/>
                  {/* Lightbulb icon */}
                  <path d="M789 106c-3.3 0-6 2.7-6 6 0 2.1 1.1 4 2.8 5.1v2.4c0 .6.5 1 1 1h4.4c.6 0 1-.4 1-1v-2.4c1.7-1.1 2.8-3 2.8-5.1 0-3.3-2.7-6-6-6zm-1.2 13.5h2.4v-1h-2.4v1zm2.8-3.2l-.4.3v1.4h-2.4v-1.4l-.4-.3c-1.3-.9-2-2.3-2-3.8 0-2.6 2.2-4.8 4.8-4.8s4.8 2.2 4.8 4.8c0 1.5-.8 2.9-2 3.8z" fill="#4338ca"/>
                  <text x="824" y="110" fontSize="14" fontWeight="600" fill="#0f172a" fontFamily="system-ui">Insights</text>
                  <text x="824" y="128" fontSize="10" fill="#475569" fontFamily="system-ui">Auto-synthesized from research</text>
                </g>

                {/* PRDs */}
                <g filter="url(#cardShadow)">
                  <rect x="750" y="195" width="260" height="70" rx="16" fill="white"/>
                  <rect x="750" y="195" width="260" height="70" rx="16" fill="none" stroke="#c7d2fe" strokeWidth="1"/>
                  <rect x="770" y="211" width="38" height="38" rx="10" fill="#ddd6fe"/>
                  {/* Document icon */}
                  <rect x="781" y="218" width="16" height="20" rx="2" fill="none" stroke="#5b21b6" strokeWidth="1.5"/>
                  <path d="M787 218v-2c0-.6.4-1 1-1h4l4 4v1" fill="none" stroke="#5b21b6" strokeWidth="1.2" strokeLinejoin="round"/>
                  <line x1="784" y1="226" x2="794" y2="226" stroke="#5b21b6" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="784" y1="230" x2="794" y2="230" stroke="#5b21b6" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="784" y1="234" x2="790" y2="234" stroke="#5b21b6" strokeWidth="1.2" strokeLinecap="round"/>
                  <text x="824" y="225" fontSize="14" fontWeight="600" fill="#0f172a" fontFamily="system-ui">PRDs &amp; Stories</text>
                  <text x="824" y="243" fontSize="10" fill="#475569" fontFamily="system-ui">Generated with full context</text>
                </g>

                {/* Tickets */}
                <g filter="url(#cardShadow)">
                  <rect x="750" y="310" width="260" height="70" rx="16" fill="white"/>
                  <rect x="750" y="310" width="260" height="70" rx="16" fill="none" stroke="#c7d2fe" strokeWidth="1"/>
                  <rect x="770" y="326" width="38" height="38" rx="10" fill="#c7d2fe"/>
                  {/* Ticket icon */}
                  <rect x="779" y="336" width="20" height="14" rx="2.5" fill="none" stroke="#3730a3" strokeWidth="1.5"/>
                  <line x1="779" y1="340" x2="799" y2="340" stroke="#3730a3" strokeWidth="1.2"/>
                  <line x1="783" y1="344" x2="791" y2="344" stroke="#3730a3" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
                  <line x1="783" y1="347" x2="788" y2="347" stroke="#3730a3" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
                  <text x="824" y="340" fontSize="14" fontWeight="600" fill="#0f172a" fontFamily="system-ui">Jira &amp; Linear Tickets</text>
                  <text x="824" y="358" fontSize="10" fill="#475569" fontFamily="system-ui">Ready to assign &amp; ship</text>
                </g>
              </svg>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────── */}
      <section className="bg-[#f8f9fb] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll>
            <h2 className="text-[36px] md:text-[44px] font-semibold text-[#0f172a] text-center mb-16 tracking-tight">
              Sound Familiar?
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painCards.map((card, i) => (
              <AnimateOnScroll key={card.title} delay={i * 100}>
                <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 hover:shadow-md transition-shadow h-full">
                  <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#0f172a] mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[15px] text-[#64748b] leading-relaxed">{card.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ─────────────────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="max-w-2xl mx-auto text-center mb-4">
              <h2 className="text-[36px] md:text-[44px] font-semibold text-[#0f172a] mb-5 tracking-tight">
                Connect Your Existing Tools
              </h2>
              <p className="text-[18px] text-[#64748b] leading-[1.7]">
                Discovrly integrates seamlessly with the tools you already use, ensuring no feedback is lost.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={80}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-14">
              {[
                { name: 'Salesforce', file: 'salesforce-2.svg' },
                { name: 'Zoom', file: 'zoom-communications-logo.svg' },
                { name: 'Avoma', file: 'avoma-icon.jpeg' },
                { name: 'Slack', file: 'slack-new-logo.svg' },
                { name: 'Google Meet', file: 'google-meet-icon-2020-.svg' },
                { name: 'Zendesk', file: 'zendesk-icon-svgrepo-com.svg' },
                { name: 'Jira', file: 'jira-icon.svg' },
                { name: 'Linear', file: 'linear-icon.svg' },
                { name: 'Amplitude', file: 'AMPLITUDE_[MARK-CIRCLE]_BLUE-icon.svg' },
                { name: 'Mixpanel', file: 'mixpanel.svg' },
                { name: 'Notion', file: 'notion-icon.svg' },
                { name: 'Confluence', file: 'confluence.svg' },
              ].map((tool) => (
                <div key={tool.name} className="bg-white border border-[#e2e8f0] rounded-2xl p-5 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
                  <img src={`/integrations/${tool.file}`} alt={`${tool.name} logo`} width={40} height={40} className="w-10 h-10 object-contain" />
                  <span className="text-[13px] font-medium text-[#0f172a] text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

        </div>
      </section>

      {/* ── SOLUTION ─────────────────────────────────────────────────── */}
      <section className="bg-[#f8f9fb] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="max-w-2xl mx-auto text-center mb-14">
              <h2 className="text-[36px] md:text-[44px] font-semibold text-[#0f172a] mb-5 tracking-tight">
                Turn research into decisions and shipped product
              </h2>
              <p className="text-[18px] text-[#64748b] leading-[1.7]">
                From research to shipped features, Discovrly connects discovery, decisions, and
                execution in one place.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="bg-white rounded-2xl p-8 md:p-12 mb-12">
              <FlowDiagram />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <p className="text-[17px] text-[#64748b] leading-[1.8] text-center max-w-2xl mx-auto">
              Discovrly connects your data across tools and turns it into decisions and execution
              in one place. Every insight, decision, and outcome is captured so your product
              knowledge compounds over time.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── FEATURES OVERVIEW ────────────────────────────────────────── */}
      <section id="features" className="bg-[#f8f9fb] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-[36px] md:text-[44px] font-semibold text-[#0f172a] mb-5 tracking-tight">
                Everything you need to ship smarter
              </h2>
              <p className="text-[18px] text-[#64748b] leading-[1.7]">
                One platform connecting research to roadmap to reality.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              delay={0}
              icon={<Database size={22} />}
              title="Research Hub"
              description="Centralize interviews, surveys, docs, and product signals from every tool your team uses."
            />
            <FeatureCard
              delay={100}
              icon={<Lightbulb size={22} />}
              title="Insight Engine"
              description="Turn research and signals into clear insights, themes, and gaps so you know what to build and why."
            />
            <FeatureCard
              delay={200}
              icon={<FileText size={22} />}
              title="Auto-Generate"
              description="Generate PRDs, user stories, and Jira-ready tickets with full context from your research."
            />
          </div>

          <AnimateOnScroll delay={100} className="mt-10 text-center">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 border border-indigo-600 text-indigo-600 font-semibold rounded-lg px-6 py-3 hover:bg-indigo-50 transition-colors text-[16px]"
            >
              See all features
              <ArrowRight size={16} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── BOOK A DEMO ──────────────────────────────────────────────── */}
      <section id="demo" className="bg-indigo-600 py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-[36px] md:text-[44px] font-semibold text-white mb-5 tracking-tight">
                See Discovrly in Action
              </h2>
              <p className="text-[18px] text-indigo-200 leading-[1.7] mb-10">
                Book a 30-minute demo and see how Discovrly connects your research, decisions, and execution in one place.
              </p>
              <CalendlyButton className="inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold rounded-lg px-8 py-4 text-[17px] hover:bg-indigo-50 transition-colors">
                Book a Demo
                <ArrowRight size={18} />
              </CalendlyButton>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
