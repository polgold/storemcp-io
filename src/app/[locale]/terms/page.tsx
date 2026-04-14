import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Terms of service for StoreMCP.'
};

export default function TermsPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return (
    <Section className="max-w-3xl">
      <article className="prose-docs">
        <h1>Terms of Service</h1>
        <p className="text-fg-muted">Last updated: April 14, 2026</p>

        <h2>1. Acceptance</h2>
        <p>
          By installing, activating, or using StoreMCP, you agree to these
          terms. If you don't agree, don't use the plugin.
        </p>

        <h2>2. License</h2>
        <p>
          The free tier of StoreMCP is released under the GPL v2 license and
          available at <code>wordpress.org</code>. The Pro and Agency tiers
          require a paid license, valid for the term purchased, and may be
          used on the number of sites specified at purchase.
        </p>

        <h2>3. Acceptable use</h2>
        <p>
          You may not use StoreMCP to:
        </p>
        <ul>
          <li>Attack, probe, or overload third-party WordPress sites</li>
          <li>Bypass authentication on sites you do not own or operate</li>
          <li>Violate any applicable law in your jurisdiction</li>
          <li>Resell or redistribute Pro/Agency builds without an Agency license</li>
        </ul>

        <h2>4. Refunds</h2>
        <p>
          We offer a 14-day money-back guarantee on new Pro or Agency
          purchases. Renewals are not refundable after 14 days of the renewal
          date.
        </p>

        <h2>5. Support</h2>
        <p>
          Free users are supported via the wordpress.org forum and GitHub
          issues. Pro users get priority email. Agency users get a 24-hour SLA.
          We do not guarantee response times on public forums.
        </p>

        <h2>6. Warranty disclaimer</h2>
        <p>
          StoreMCP is provided "as is", without warranty of any kind. We make
          no guarantees of fitness for a particular purpose. You are
          responsible for maintaining backups of your WordPress site.
        </p>

        <h2>7. Limitation of liability</h2>
        <p>
          ExitMedia LLC's liability is limited to the amount you paid for your
          current license term. We are not liable for indirect, consequential,
          or incidental damages.
        </p>

        <h2>8. AI usage</h2>
        <p>
          StoreMCP exposes tools to AI clients you configure. You are
          responsible for the outputs of those AI systems, including any
          writes they perform on your WordPress site. We strongly recommend
          least-privilege API keys and dry-run previews for destructive
          operations.
        </p>

        <h2>9. Changes</h2>
        <p>
          We may update these terms. If changes are material, we'll notify
          license holders by email at least 30 days in advance.
        </p>

        <h2>10. Contact</h2>
        <p>
          ExitMedia LLC · <a href="mailto:hello@storemcp.io">hello@storemcp.io</a>
        </p>
      </article>
    </Section>
  );
}
