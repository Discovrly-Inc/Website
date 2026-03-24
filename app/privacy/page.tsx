import type { Metadata } from 'next';
import { generateMetadata } from '@/components/SEO';

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy — Discovrly',
  description: "Discovrly's privacy policy covering data collection, analytics, and user rights.",
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="bg-white pt-32 pb-28">
      <article className="max-w-3xl mx-auto px-6">
        <h1 className="text-[40px] font-bold text-[#0f172a] tracking-tight mb-3 leading-[1.15]">
          Privacy Policy
        </h1>
        <p className="text-[15px] text-[#64748b] mb-12">Last updated: March 23, 2026</p>

        <div className="prose-custom space-y-10 text-[17px] text-[#0f172a] leading-[1.8]">

          <Section title="1. Introduction">
            <p>
              Discovrly (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the
              website located at www.discovrly.com (the &ldquo;Site&rdquo;). This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you
              visit our Site or join our waitlist.
            </p>
            <p>
              By using the Site, you agree to the collection and use of information in accordance
              with this policy. If you have questions, contact us at{' '}
              <a href="mailto:hello@discovrly.com" className="text-indigo-600 hover:underline">
                hello@discovrly.com
              </a>
              .
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect the following categories of information:</p>
            <SubSection title="Information You Provide">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Waitlist submissions:</strong> Your email address when you join our
                  early access waitlist.
                </li>
                <li>
                  <strong>Contact form submissions:</strong> Your name, email address, and
                  message when you contact us through the Site.
                </li>
              </ul>
            </SubSection>
            <SubSection title="Information Collected Automatically">
              <p>
                When you visit our Site, we may automatically collect certain information about
                your device, including information about your web browser, IP address, time zone,
                and cookies installed on your device. We also collect information about the
                individual web pages or products that you view, what websites or search terms
                referred you to the Site, and information about how you interact with the Site.
              </p>
            </SubSection>
          </Section>

          <Section title="3. Cookies">
            <p>
              We use cookies and similar tracking technologies to track activity on our Site and
              hold certain information. Cookies are files with a small amount of data which may
              include an anonymous unique identifier.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is
              being sent. However, if you do not accept cookies, you may not be able to use some
              portions of our Site.
            </p>
          </Section>

          <Section title="4. Analytics (GA4 and PostHog)">
            <p>
              We intend to use Google Analytics 4 (GA4) and PostHog to understand how visitors
              interact with our Site. These services may collect information such as how often
              users visit the Site, which pages they visit, and what other sites they used prior
              to visiting.
            </p>
            <p>
              <strong>Current status:</strong> As of the date of this policy, these analytics
              tools have been configured but are not yet active. We will update this policy when
              these services are activated.
            </p>
            <p>
              When active, GA4 and PostHog will set cookies and collect usage data. Both services
              offer opt-out mechanisms. For Google Analytics, you may install the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-indigo-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              . For PostHog, users may opt out via PostHog&rsquo;s opt-out mechanism.
            </p>
          </Section>

          <Section title="5. How We Use Your Information">
            <ul className="list-disc pl-6 space-y-2">
              <li>To operate and maintain the Site</li>
              <li>To notify you about early access when Discovrly launches</li>
              <li>To respond to your inquiries and contact form submissions</li>
              <li>To understand how visitors use the Site and improve the user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain personal data only as long as necessary for the purposes described in
              this policy:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Waitlist emails:</strong> Retained until the waitlist program ends or
                you request removal.
              </li>
              <li>
                <strong>Contact form data:</strong> Retained for up to 24 months for support and
                communication purposes.
              </li>
              <li>
                <strong>Analytics data:</strong> Aggregated analytics data is retained for up to
                90 days.
              </li>
            </ul>
          </Section>

          <Section title="7. Sharing of Information">
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may
              share information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service providers:</strong> Third-party companies that help us operate
                the Site (e.g., hosting, email delivery, analytics).
              </li>
              <li>
                <strong>Legal requirements:</strong> Where required by law, court order, or
                governmental authority.
              </li>
            </ul>
          </Section>

          <Section title="8. Your Rights">
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate data</li>
              <li>The right to request deletion of your personal data</li>
              <li>The right to withdraw consent at any time</li>
              <li>
                The right to lodge a complaint with a supervisory authority (for EEA residents)
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:hello@discovrly.com" className="text-indigo-600 hover:underline">
                hello@discovrly.com
              </a>
              .
            </p>
          </Section>

          <Section title="9. Data Security">
            <p>
              We implement reasonable security measures to protect your information from
              unauthorized access, alteration, disclosure, or destruction. However, no method of
              transmission over the internet or method of electronic storage is 100% secure.
            </p>
          </Section>

          <Section title="10. Children's Privacy">
            <p>
              Our Site is not directed to individuals under the age of 16. We do not knowingly
              collect personal information from children under 16. If you become aware that a
              child has provided us with personal information, please contact us.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new policy on this page with an updated date. Your continued
              use of the Site after any changes constitutes your acceptance of the new policy.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>
              If you have questions about this Privacy Policy, please contact us at:{' '}
              <a href="mailto:hello@discovrly.com" className="text-indigo-600 hover:underline">
                hello@discovrly.com
              </a>
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
      <div className="space-y-3 text-[#374151]">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="text-[17px] font-semibold text-[#0f172a] mb-2">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
