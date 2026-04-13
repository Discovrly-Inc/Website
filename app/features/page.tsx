import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { generateMetadata } from '@/components/SEO';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CalendlyButton from '@/components/CalendlyButton';

export const metadata: Metadata = generateMetadata({
  title: 'Features — Discovrly | Increase Decision Velocity',
  description:
    "Explore Discovrly's full feature set: unified research hub, AI insight synthesis, automatic PRD and ticket generation, and post-implementation tracking.",
  path: '/features',
});

const features = [
  {
    number: '01',
    tag: 'Research Hub',
    headline: 'Stop Hunting. Start Building.',
    body: 'Your research is scattered across many tools. Discovrly pulls in interviews, surveys, customer calls, support tickets, and product signals from every source and organizes everything into one structured, searchable hub. So decisions always start with complete context instead of delays and guesswork.',
    bullets: [
      'Connect any data source',
      'Tag by theme, product area, or customer segment',
      'Full-text search across all research',
      'Never lose context when teammates leave',
    ],
    accent: '#d1fae5',
    accentText: '#065f46',
  },
  {
    number: '02',
    tag: 'Insight Engine',
    headline: 'Turn Research into Clear Decisions.',
    body: "Raw research is noise. Discovrly's insight engine automatically synthesizes data into clear themes, surfaces gaps and conflicting signals, and delivers actionable recommendations. This helps your team make higher-quality decisions much faster.",
    bullets: [
      'Auto-cluster themes from unstructured data',
      'Surface gaps between user needs and current roadmap',
      'Link insights directly to product goals',
      'Ask questions about your research in plain English',
    ],
    accent: '#a7f3d0',
    accentText: '#065f46',
  },
  {
    number: '03',
    tag: 'Auto-Generate PRDs & Tickets',
    headline: 'From Insight to Ticket in Seconds.',
    body: 'Stop spending days translating insights into documentation. Discovrly auto-generates PRDs, user stories, and engineering tickets with full research context. So confident decisions turn into action without losing momentum.',
    bullets: [
      'One-click PRD generation',
      'Jira and Linear-ready tickets',
      'Consistent documentation format across your team',
      'Edit and customize before publishing',
    ],
    accent: '#6ee7b7',
    accentText: '#064e3b',
  },
  {
    number: '04',
    tag: 'Post-Implementation Tracking',
    headline: 'Close the Loop on Every Decision.',
    body: 'Most teams ship and forget. Discovrly links every shipped feature back to the original research and decision, then tracks real outcomes. This builds a living decision history so future decisions get faster and smarter over time.',
    bullets: [
      'Link shipped features to original research',
      'Track outcomes against initial hypotheses',
      'Build a searchable decision history',
      'Onboard new PMs in days, not months',
    ],
    accent: '#34d399',
    accentText: '#064e3b',
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <h1 className="text-[44px] md:text-[56px] font-bold text-[#0f172a] tracking-[-0.02em] mb-5 leading-[1.1]">
              Everything Your Team Needs to Increase Decision Velocity
            </h1>
            <p className="text-[18px] md:text-[20px] text-[#64748b] leading-[1.7] max-w-2xl mx-auto">
              One platform connecting research, insights, decisions, and outcomes.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Features list */}
      <section className="bg-[#f8f9fb] py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
          {features.map((feature, i) => (
            <AnimateOnScroll key={feature.number} delay={i * 80}>
              <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 md:p-12 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:gap-16">
                  {/* Left: number + tag */}
                  <div className="md:w-64 flex-shrink-0 mb-6 md:mb-0">
                    <span
                      className="text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full whitespace-nowrap inline-block"
                      style={{ backgroundColor: feature.accent, color: feature.accentText }}
                    >
                      {feature.tag}
                    </span>
                    <p className="text-[48px] font-bold mt-4 leading-none" style={{ color: feature.accent }}>
                      {feature.number}
                    </p>
                  </div>

                  {/* Right: content */}
                  <div className="flex-1">
                    <h2 className="text-[26px] md:text-[32px] font-semibold text-[#0f172a] mb-4 tracking-tight">
                      {feature.headline}
                    </h2>
                    <p className="text-[17px] text-[#64748b] leading-[1.75] mb-7">{feature.body}</p>
                    <ul className="flex flex-col gap-3">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span
                            className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: feature.accent }}
                          >
                            <Check size={11} style={{ color: feature.accentText }} strokeWidth={3} />
                          </span>
                          <span className="text-[16px] text-[#0f172a]">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#0f172a] mb-5 tracking-tight">
              Ready to Increase Your Decision Velocity?
            </h2>
            <p className="text-[18px] text-[#64748b] mb-8 max-w-xl mx-auto leading-[1.7]">
              See how Discovrly helps product teams make better decisions faster.
            </p>
            <CalendlyButton className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold rounded-lg px-8 py-4 text-[16px] hover:bg-emerald-700 transition-colors">
              Book a Demo
              <ArrowRight size={17} />
            </CalendlyButton>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
