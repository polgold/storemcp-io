import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Section, SectionHeading } from '@/components/Section';

export const metadata: Metadata = {
  title: 'Changelog',
  description:
    'Release notes for StoreMCP — new features, improvements, and fixes.'
};

type Release = {
  version: string;
  date: string;
  badge?: string;
  sections: { title: string; items: string[] }[];
};

const RELEASES: Release[] = [
  {
    version: '1.0.0',
    date: '2026-04-14',
    badge: 'Initial release',
    sections: [
      {
        title: 'Added',
        items: [
          '120+ MCP tools for WordPress and WooCommerce',
          'Free tier: content management, product browsing, basic reports',
          'Pro tier: full WooCommerce CRUD, orders, analytics, bulk operations',
          'Agency tier: unlimited sites, white-label, custom roles, activity log export',
          'Admin panel with dashboard, settings, activity log, modules',
          'API key management with scopes, rate limits, and IP allow-lists',
          'Application Passwords support as alternative authentication',
          'Rate limiting with per-key overrides and 80% alerts',
          'i18n-ready (English + Spanish out of the box)',
          'Shiki-powered code highlighting in the docs',
          'Compatible with HPOS, Yoast SEO, RankMath, Multisite'
        ]
      }
    ]
  }
];

export default function ChangelogPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return (
    <Section>
      <SectionHeading
        eyebrow="Changelog"
        title="What's new in StoreMCP"
        subtitle="Release notes, sorted newest first."
      />
      <div className="mx-auto max-w-3xl space-y-14">
        {RELEASES.map((r) => (
          <article
            key={r.version}
            className="relative border-l-2 border-border pl-8"
          >
            <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-mono text-2xl font-bold text-fg">
                v{r.version}
              </h2>
              <span className="text-sm text-fg-subtle">{r.date}</span>
              {r.badge && (
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-accent">
                  {r.badge}
                </span>
              )}
            </div>
            <div className="mt-6 space-y-5">
              {r.sections.map((s) => (
                <div key={s.title}>
                  <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-fg-subtle">
                    {s.title}
                  </h3>
                  <ul className="space-y-1.5 text-sm text-fg-muted">
                    {s.items.map((i, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-fg-subtle" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
