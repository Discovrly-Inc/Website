import type { Metadata } from 'next';
import { generateMetadata } from '@/components/SEO';

export const metadata: Metadata = generateMetadata({
  title: 'Terms of Service — Discovrly',
  description: "Discovrly's terms of service governing access to and use of the platform.",
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="bg-white pt-32 pb-28">
      <article className="max-w-3xl mx-auto px-6">
        <h1 className="text-[40px] font-bold text-[#0f172a] tracking-tight mb-3 leading-[1.15]">
          Terms of Service
        </h1>
        <p className="text-[15px] text-[#64748b] mb-12">Last updated: April 13, 2026</p>

        <div className="space-y-10 text-[17px] text-[#374151] leading-[1.8]">

          <Section title="1. Introduction and Acceptance">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the
              Discovrly website, platform, services, and features (collectively, the
              &ldquo;Service&rdquo;) provided by Discovrly Inc. (&ldquo;Discovrly,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a Delaware corporation.
            </p>
            <p>
              By accessing or using the Service, or entering into an annual contract with us, you
              agree to these Terms. If you are acting on behalf of a company, you represent you
              have authority to bind that entity.
            </p>
            <p>
              We may update these Terms. Continued use after changes means acceptance. Material
              changes will be notified via email or in-app notice.
            </p>
          </Section>

          <Section title="2. Description of the Service">
            <p>
              Discovrly is an operating system for product teams. It centralizes research,
              insights, feedback, and signals to help generate decisions, PRDs, user stories,
              tickets, and more. The Service includes integrations with your internal tech stack
              (e.g., Jira, Slack, etc.) to accelerate research. Access is via annual
              contracts&mdash;no freemium model.
            </p>
          </Section>

          <Section title="3. Eligibility, Accounts, and Contracts">
            <p>
              You must be at least 18 (or the age of majority) and have legal capacity. Accounts
              require accurate information. You are responsible for account security.
            </p>
            <p>
              Annual contracts are governed by a separate Order Form or agreement incorporating
              these Terms. Subscriptions auto-renew annually unless canceled per the contract. We
              may suspend access for non-payment.
            </p>
          </Section>

          <Section title="4. User Content, Research Data, and Licenses">
            <p>
              You retain ownership of all research data, interview notes, feedback, uploads, and
              other materials you provide (&ldquo;User Content&rdquo;).
            </p>
            <p>
              You grant Discovrly a worldwide, non-exclusive, royalty-free, sublicensable license
              to host, store, reproduce, modify, analyze, and use your User Content solely to
              provide, maintain, improve, and deliver the Service (including AI-powered generation
              of outputs and training/improving our models where permitted).
            </p>
            <p>
              For AI-generated outputs (e.g., PRDs, tickets): As between you and us, you own the
              outputs, subject to our underlying IP. You receive a limited license to use outputs
              for your internal business purposes. We do not guarantee their accuracy or
              completeness.
            </p>
            <p>
              You represent that your User Content does not infringe third-party rights and
              complies with laws. We may remove violating content.
            </p>
          </Section>

          <Section title="5. Acceptable Use">
            <p>
              Use the Service only for lawful business purposes. Prohibited: violating laws,
              uploading harmful code, scraping without permission, interfering with the Service,
              or using it to compete with us. We may monitor and terminate for violations.
            </p>
          </Section>

          <Section title="6. Intellectual Property">
            <p>
              The Service, our technology, and branding are our exclusive property. You get a
              limited license for permitted use during your contract term. Reverse engineering is
              prohibited. Outputs may incorporate our IP.
            </p>
          </Section>

          <Section title="7. Subscriptions, Payments, and Billing">
            <p>
              Fees are set in your annual contract/Order Form. Payments are due as specified;
              late payments may incur fees. Subscriptions auto-renew. You are responsible for
              taxes. We may change pricing with notice for renewals. No refunds except as required
              by law or specified in your contract. On termination, access ends, but you may
              request data export (subject to fees/timelines in your contract).
            </p>
          </Section>

          <Section title="8. Termination and Data Export">
            <p>
              We may terminate or suspend for breach, non-payment, or other reasons. You may
              terminate per your contract. Surviving sections include IP, liability, indemnity,
              and governing law.
            </p>
            <p>
              Upon termination, we will provide reasonable assistance for data export where
              feasible, per your contract.
            </p>
          </Section>

          <Section title="9. Disclaimers (Including AI-Specific)">
            <p>
              The Service is provided &ldquo;AS IS.&rdquo; We disclaim all warranties, including
              accuracy of AI outputs, uninterrupted service, or fitness for your needs.
            </p>
            <p>
              <strong>AI Outputs:</strong> Generated content may contain errors, hallucinations,
              or inaccuracies. It is not legal, financial, or professional advice. You must
              independently review, validate, and take responsibility for all decisions based on
              outputs or research insights.
            </p>
            <p>
              Integrations with third-party tools are at your risk; we are not responsible for
              those services.
            </p>
          </Section>

          <Section title="10. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, we are not liable for indirect,
              consequential, or punitive damages (including lost profits or data). Our total
              liability shall not exceed the total fees you paid in the 12 months before the
              claim (or $100 if none).
            </p>
          </Section>

          <Section title="11. Indemnity">
            <p>
              You agree to indemnify us against claims arising from your User Content, breach of
              these Terms, or misuse of the Service or outputs.
            </p>
          </Section>

          <Section title="12. Third-Party Services">
            <p>
              Integrations (e.g., with your tech stack) are subject to those providers&rsquo;
              terms. We are not liable for them.
            </p>
          </Section>

          <Section title="13. Privacy">
            <p>
              Our{' '}
              <a href="/privacy" className="text-emerald-600 hover:underline">
                Privacy Policy
              </a>{' '}
              is incorporated here. It describes how we handle research data and personal
              information.
            </p>
          </Section>

          <Section title="14. Governing Law and Dispute Resolution">
            <p>
              These Terms are governed by Delaware law, without regard to conflicts principles.
            </p>
            <p>
              Disputes shall be resolved by binding arbitration in Wilmington, Delaware, under
              American Arbitration Association rules (single arbitrator). You waive class actions,
              representative actions, or jury trials. Small claims court is allowed if eligible.
              This applies to the fullest extent permitted by law.
            </p>
          </Section>

          <Section title="15. Miscellaneous">
            <ul className="list-disc pl-6 space-y-2">
              <li>Severability, no waiver, entire agreement.</li>
              <li>Export controls compliance.</li>
              <li>DMCA notices: Contact us below.</li>
            </ul>
          </Section>

          <Section title="16. Contact Us">
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
