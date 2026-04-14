'use client';

import { Check, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section, SectionHeading } from '@/components/Section';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/cn';

const ROWS: {
  label: string;
  free: boolean | string;
  pro: boolean | string;
  agency: boolean | string;
}[] = [
  { label: 'WordPress content management', free: true, pro: true, agency: true },
  { label: 'Product browsing (read)', free: true, pro: true, agency: true },
  { label: 'Full WooCommerce CRUD', free: false, pro: true, agency: true },
  { label: 'Order management + refunds', free: false, pro: true, agency: true },
  { label: 'Advanced sales analytics', free: false, pro: true, agency: true },
  { label: 'Rate limit', free: '30 req/min', pro: '120 req/min', agency: '120 req/min' },
  { label: 'Sites', free: '1', pro: 'Up to 5', agency: 'Unlimited' },
  { label: 'White-label', free: false, pro: false, agency: true },
  { label: 'Priority support', free: false, pro: true, agency: true }
];

function Cell({ v }: { v: boolean | string }) {
  if (typeof v === 'string')
    return <span className="text-sm text-fg-muted">{v}</span>;
  return v ? (
    <Check size={16} className="text-accent" />
  ) : (
    <X size={16} className="text-fg-subtle/50" />
  );
}

export function PricingPreview() {
  const t = useTranslations('pricing');
  return (
    <Section className="border-t border-border/50 bg-bg-subtle/30">
      <SectionHeading
        eyebrow="Pricing"
        title={t('title')}
        subtitle={t('subtitle')}
      />
      <div className="overflow-hidden rounded-xl border border-border bg-bg-card/40">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border text-xs uppercase tracking-wider text-fg-subtle">
              <th className="px-4 py-3 font-medium"> </th>
              <th className="px-4 py-3 font-medium">Free</th>
              <th className="px-4 py-3 font-medium text-accent">Pro</th>
              <th className="px-4 py-3 font-medium">Agency</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr
                key={row.label}
                className={cn(
                  'border-b border-border/60 last:border-b-0 text-sm'
                )}
              >
                <td className="px-4 py-3 text-fg">{row.label}</td>
                <td className="px-4 py-3"><Cell v={row.free} /></td>
                <td className="bg-accent/[0.04] px-4 py-3"><Cell v={row.pro} /></td>
                <td className="px-4 py-3"><Cell v={row.agency} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
        >
          {t('viewAll')} →
        </Link>
      </div>
    </Section>
  );
}
