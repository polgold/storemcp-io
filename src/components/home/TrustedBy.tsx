'use client';

import { Section } from '@/components/Section';

export function TrustedBy({ locale }: { locale: string }) {
  const title = locale === 'es'
    ? 'Sitios usando StoreMCP'
    : 'Sites running StoreMCP';
  const sub = locale === 'es'
    ? 'Sumate a las tiendas que ya gestionan todo con IA.'
    : 'Join the stores already managing everything through AI.';

  return (
    <Section className="text-center">
      <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {locale === 'es' ? 'Comunidad' : 'Community'}
      </div>
      <h2 className="mx-auto mt-3 max-w-xl text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-fg-muted">{sub}</p>
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
