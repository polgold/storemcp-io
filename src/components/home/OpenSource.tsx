'use client';

import { useTranslations } from 'next-intl';
import { Github, ExternalLink } from 'lucide-react';
import { Section } from '@/components/Section';

export function OpenSource() {
  const t = useTranslations('opensource');
  return (
    <Section className="border-t border-border/50">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-card/40 px-8 py-12 sm:px-12">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" />
        <div className="relative mx-auto max-w-2xl text-center">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Open core
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-fg-muted">{t('desc')}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/exitmediacontent/storemcp"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-bg-elevated px-4 text-sm font-medium text-fg transition hover:border-border-strong"
            >
              <Github size={15} />
              {t('github')}
            </a>
            <a
              href="https://wordpress.org/plugins/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-bg-elevated px-4 text-sm font-medium text-fg transition hover:border-border-strong"
            >
              <ExternalLink size={14} />
              {t('wporg')}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
