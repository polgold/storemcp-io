'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Download, ExternalLink } from 'lucide-react';
import { Section } from '@/components/Section';
import { LinkButton } from '@/components/ui/Button';

export function PluginBanner() {
  const t = useTranslations('banner');
  return (
    <Section className="border-t border-border/50">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-card/40">
        <div className="relative aspect-[1544/500] w-full">
          <Image
            src="/assets/banner-1544x500.png"
            alt="StoreMCP — AI Control Center for WordPress & WooCommerce"
            fill
            priority
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/10 to-transparent" />
        </div>
        <div className="relative flex flex-col items-start gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {t('eyebrow')}
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-fg sm:text-3xl">
              {t('title')}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-fg-muted">
              {t('subtitle')}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <LinkButton
              href="/downloads/store-mcp-latest.zip"
              download
              size="md"
            >
              <Download size={15} />
              storemcp.zip
            </LinkButton>
            <a
              href="https://wordpress.org/plugins/storemcp/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-bg-elevated px-4 text-sm font-medium text-fg transition hover:border-border-strong"
            >
              <ExternalLink size={14} />
              wordpress.org
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
