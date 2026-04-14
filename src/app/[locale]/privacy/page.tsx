import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy policy for storemcp.io and the StoreMCP plugin.'
};

export default function PrivacyPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return (
    <Section className="max-w-3xl">
      <article className="prose-docs">
        <h1>Privacy Policy</h1>
        <p className="text-fg-muted">Last updated: April 14, 2026</p>

        <blockquote>
          The StoreMCP plugin does not send any data to external servers. All
          operations happen between your WordPress site and your AI client —
          no proxy, no phone-home.
        </blockquote>

        <h2>Who we are</h2>
        <p>
          StoreMCP is operated by <strong>ExitMedia LLC</strong>. This policy
          covers the website <code>storemcp.io</code> and the StoreMCP WordPress
          plugin.
        </p>

        <h2>What the plugin collects</h2>
        <p>
          The StoreMCP plugin runs entirely on your WordPress site. It does not
          transmit product data, customer data, or order data to any
          storemcp.io server. The only outbound request the plugin makes is to
          validate your Pro/Agency license key (email + license key only,
          during activation and periodic re-check).
        </p>

        <h2>What the website collects</h2>
        <p>When you browse <code>storemcp.io</code>, we may collect:</p>
        <ul>
          <li>Basic analytics (anonymized page views, no cross-site tracking)</li>
          <li>Cookies necessary for language preference and theme</li>
          <li>Form submissions (support, newsletter) — only if you submit them</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          We use strictly-necessary cookies for session state. We do not use
          advertising cookies. We do not share any information with third-party
          ad networks.
        </p>

        <h2>Third parties</h2>
        <p>Where applicable, we use:</p>
        <ul>
          <li>Vercel — hosting</li>
          <li>Stripe or Mercado Pago — payment processing (Pro/Agency purchases)</li>
          <li>Resend — transactional email</li>
        </ul>
        <p>
          None of these providers see the data inside your WordPress site — they
          only process what you submit on <code>storemcp.io</code>.
        </p>

        <h2>Your rights</h2>
        <p>
          You have the right to access, correct, export, or delete any
          personal data we hold about you. Email{' '}
          <a href="mailto:privacy@storemcp.io">privacy@storemcp.io</a> and we
          will respond within 30 days.
        </p>

        <h2>Data retention</h2>
        <p>
          Purchase records are retained for 7 years (tax compliance). Support
          emails are retained for 2 years. Newsletter subscribers can
          unsubscribe at any time from the footer of any email.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy. Material changes will be announced on the
          changelog page and, if appropriate, emailed to license holders.
        </p>

        <h2>Contact</h2>
        <p>
          ExitMedia LLC · <a href="mailto:privacy@storemcp.io">privacy@storemcp.io</a>
        </p>
      </article>
    </Section>
  );
}
