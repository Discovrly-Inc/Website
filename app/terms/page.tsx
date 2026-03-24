import type { Metadata } from 'next';
import { generateMetadata } from '@/components/SEO';

export const metadata: Metadata = generateMetadata({
  title: 'Terms of Service — Discovrly',
  description: "Discovrly's terms of service.",
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="bg-white pt-32 pb-28">
      <article className="max-w-3xl mx-auto px-6">
        <h1 className="text-[40px] font-bold text-[#0f172a] tracking-tight mb-3 leading-[1.15]">
          Terms of Service
        </h1>
        <p className="text-[15px] text-[#64748b] mb-12">Last updated: March 23, 2026</p>

        <div className="space-y-10 text-[17px] text-[#374151] leading-[1.8]">

          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the Discovrly website located at www.discovrly.com (the
              &ldquo;Site&rdquo;), you agree to be bound by these Terms of Service
              (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the Site.
            </p>
            <p>
              Discovrly (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) reserves the
              right to update these Terms at any time. We will notify users of material changes
              by posting the new Terms on this page. Continued use of the Site after such changes
              constitutes acceptance of the new Terms.
            </p>
          </Section>

          <Section title="2. Description of Service">
            <p>
              Discovrly is currently in pre-launch and offers an early access waitlist. The Site
              provides information about Discovrly&rsquo;s planned product management platform and
              allows visitors to join the waitlist for early access.
            </p>
          </Section>

          <Section title="3. Use of the Site">
            <p>You agree to use the Site only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe the rights of any third party</li>
              <li>Transmit any harmful, offensive, or disruptive content</li>
              <li>Attempt to gain unauthorized access to any part of the Site</li>
              <li>
                Interfere with or disrupt the Site&rsquo;s infrastructure or servers
              </li>
              <li>Use automated tools to scrape, crawl, or extract data from the Site</li>
            </ul>
          </Section>

          <Section title="4. Intellectual Property">
            <p>
              All content on the Site — including but not limited to text, graphics, logos, icons,
              images, and software — is the property of Discovrly and is protected by applicable
              intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly
              display, or otherwise exploit any content from the Site without our prior written
              permission.
            </p>
          </Section>

          <Section title="5. Waitlist and Early Access">
            <p>
              By submitting your email address to join our waitlist, you consent to receive
              communications from Discovrly regarding the product launch and early access. You
              may unsubscribe at any time by contacting us at hello@discovrly.com.
            </p>
            <p>
              Joining the waitlist does not guarantee early access, a specific launch date, or
              any particular product features. Discovrly reserves the right to modify, delay, or
              discontinue any planned product or feature.
            </p>
          </Section>

          <Section title="6. Disclaimers">
            <p>
              THE SITE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
              BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT
              LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
              NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that the Site will be uninterrupted, error-free, or free of
              viruses or other harmful components. We make no warranties about the accuracy,
              reliability, completeness, or timeliness of the information on the Site.
            </p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, DISCOVRLY SHALL NOT BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT
              NOT LIMITED TO LOSS OF PROFITS, LOSS OF DATA, LOSS OF GOODWILL, OR OTHER
              INTANGIBLE LOSSES, ARISING FROM OR RELATED TO YOUR USE OF THE SITE.
            </p>
            <p>
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED
              TO USE OF THE SITE EXCEED ONE HUNDRED DOLLARS (USD $100).
            </p>
          </Section>

          <Section title="8. Third-Party Links">
            <p>
              The Site may contain links to third-party websites. These links are provided for
              your convenience only. We have no control over the content of those sites and accept
              no responsibility for them or for any loss or damage that may arise from your use
              of them.
            </p>
          </Section>

          <Section title="9. Privacy">
            <p>
              Your use of the Site is also governed by our{' '}
              <a href="/privacy" className="text-indigo-600 hover:underline">
                Privacy Policy
              </a>
              , which is incorporated into these Terms by reference.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              United States, without regard to its conflict of law provisions. Any disputes
              arising under these Terms shall be subject to the exclusive jurisdiction of the
              courts located in the United States.
            </p>
          </Section>

          <Section title="11. Severability">
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that
              provision will be limited or eliminated to the minimum extent necessary so that
              the remaining Terms will otherwise remain in full force and effect.
            </p>
          </Section>

          <Section title="12. Contact">
            <p>
              If you have questions about these Terms, please contact us at:{' '}
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
      <div className="space-y-3">{children}</div>
    </section>
  );
}
