'use client';

import { Check, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section, SectionHeading } from '@/components/Section';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/cn';

type Row = {
  labelKey: string;
  free: boolean | string;
  pro: boolean | string;
  agency: boolean | string;
};

const ROWS: Row[] = [
  { labelKey: 'wpContent', free: true, pro: true, agency: true },
  { labelKey: 'productsRead', free: true, pro: true, agency: true },
  { labelKey: 'wooCrud', free: false, pro: true, agency: true },
  { labelKey: 'orders', free: false, pro: true, agency: true },
  { labelKey: 'analytics', free: false, pro: true, agency: true },
  { labelKey: 'rateLimit', free: 'rateFree', pro: 'ratePro', agency: 'ratePro' },
  { labelKey: 'sites', free: 'sitesFree', pro: 'sitesPro', agency: 'sitesAgency' },
  { labelKey: 'whiteLabel', free: false, pro: false, agency: true },
  { labelKey: 'support', free: false, pro: true, agency: true }
];

function Cell({ v, t }: { v: boolean | string; t: (k: string) => string }) {
  if (typeof v === 'string')
    return <span className="text-sm text-fg-muted">{t(v)}</span>;
  return v ? (
    <Check size={16} className="text-accent" />
  ) : (
    <X size={16} className="text-fg-subtle/50" />
  );
}

export function PricingPreview() {
  const t = useTranslations('pricing');
  const tc = useTranslations('pricing.compare');
  return (
    <Section className="border-t border-border/50 bg-bg-subtle/30">
      <SectionHeading
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />
      <div className="overflow-hidden rounded-xl border border-border bg-bg-card/40">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border text-xs uppercase tracking-wider text-fg-subtle">
              <th className="px-4 py-3 font-medium"> </th>
              <th className="px-4 py-3 font-medium">{t('free.name')}</th>
              <th className="px-4 py-3 font-medium text-accent">{t('pro.name')}</th>
              <th className="px-4 py-3 font-medium">{t('agency.name')}</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr
                key={row.labelKey}
                className={cn(
                  'border-b border-border/60 last:border-b-0 text-sm'
                )}
              >
                <td className="px-4 py-3 text-fg">{tc(row.labelKey)}</td>
                <td className="px-4 py-3"><Cell v={row.free} t={tc} /></td>
                <td className="bg-accent/[0.04] px-4 py-3"><Cell v={row.pro} t={tc} /></td>
                <td className="px-4 py-3"><Cell v={row.agency} t={tc} /></td>
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
