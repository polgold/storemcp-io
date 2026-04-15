'use client';

import { useTranslations } from 'next-intl';
import { Section } from '@/components/Section';

export function TrustedBy({ locale: _locale }: { locale: string }) {
  const t = useTranslations('trustedBy');

  return (
    <Section className="text-center">
      <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {t('eyebrow')}
      </div>
      <h2 className="mx-auto mt-3 max-w-xl text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        {t('title')}
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-fg-muted">{t('subtitle')}</p>
      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 opacity-80 sm:grid-cols-4">
        {['italmarket', 'artesanía.ar', 'dolceria', 'modaviva'].map((n) => (
          <div
            key={n}
            className="rounded-md border border-dashed border-border px-4 py-6 text-sm font-medium text-fg-subtle"
          >
            {n}
          </div>
        ))}
      </div>
    </Section>
  );
}
