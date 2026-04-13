import type { Metadata } from 'next';
import { generateMetadata } from '@/components/SEO';

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy — Discovrly',
  description: "Discovrly's privacy policy covering data collection, use, and your rights.",
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="bg-white pt-32 pb-28">
      <article className="max-w-3xl mx-auto px-6">
        <h1 className="text-[40px] font-bold text-[#0f172a] tracking-tight mb-3 leading-[1.15]">
          Privacy Policy
        </h1>
        <p className="text-[15px] text-[#64748b] mb-12">Last updated: April 13, 2026</p>

        <div className="space-y-10 text-[17px] text-[#374151] leading-[1.8]">

          <Section title="Introduction">
            <p>
              Discovrly Inc. (&ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy. This
              Policy explains how we collect, use, disclose, and protect information when you use
              our Service.
            </p>
          </Section>

          <Section title="Information We Collect">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account &amp; Contact:</strong> Name, email, company details, billing info.
              </li>
              <li>
                <strong>Research &amp; User Content:</strong> Uploaded research data, notes,
                transcripts, feedback, signals, and any materials you provide or generate.
              </li>
              <li>
                <strong>Usage &amp; Technical:</strong> IP address, device info, usage logs,
                analytics.
              </li>
              <li>
                <strong>Integrations:</strong> Data from connected tools (e.g., Jira, Slack) as
                authorized by you.
              </li>
              <li>
                <strong>Payment:</strong> Processed via third-party providers.
              </li>
            </ul>
          </Section>

          <Section title="How We Use Information">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Provide, personalize, and improve the Service (including AI analysis and
                generation).
              </li>
              <li>Process payments and contracts.</li>
              <li>Communicate with you (support, updates, billing).</li>
              <li>Analyze usage and research patterns (aggregated/de-identified).</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p>We do not sell personal data.</p>
          </Section>

          <Section title="Sharing Information">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                With service providers (hosting, AI processors, payment processors) under strict
                agreements.
              </li>
              <li>For integrations you enable.</li>
              <li>In business transfers or for legal compliance.</li>
            </ul>
          </Section>

          <Section title="Data Security">
            <p>
              We use reasonable measures (encryption, access controls) but cannot guarantee
              absolute security.
            </p>
          </Section>

          <Section title="Your Rights &amp; Choices">
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, correct, or delete your data (subject to contract terms).</li>
              <li>Data export requests per your contract.</li>
              <li>
                For California/EU users: Additional rights under CCPA/GDPR may apply&mdash;contact
                us.
              </li>
            </ul>
            <p>
              We retain data as needed for the contract or legal obligations.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              We do not knowingly collect data from children under 13.
            </p>
          </Section>

          <Section title="International Transfers">
            <p>
              Data may be processed in the US or other countries.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this Policy and will post the new version with a new date. Continued
              use means acceptance.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>Discovrly Inc.<br />
            Universal Registered Agents, Inc.<br />
            300 Creek View Road, Suite 209<br />
            Newark, New Castle County, DE 19711</p>
            <p>
              Email:{' '}
              <a href="mailto:hello@discovrly.com" className="text-emerald-600 hover:underline">
                hello@discovrly.com
              </a>{' '}
              (general inquiries)
            </p>
            <p>
              <a href="mailto:privacy@discovrly.com" className="text-emerald-600 hover:underline">
                privacy@discovrly.com
              </a>{' '}
              (privacy and data requests)
            </p>
          </Section>

        </div>
      </article>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[22px] font-semibold text-[#0f172a] mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
