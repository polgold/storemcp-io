'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Download, BookOpen } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { Link } from '@/i18n/navigation';
import { TerminalDemo } from '@/components/TerminalDemo';

export function Hero() {
  const t = useTranslations('hero');
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-dot-grid opacity-40 [background-size:18px_18px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-grid-fade" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 text-center sm:px-6 lg:px-8 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-bg-card/60 px-3 py-1 text-xs text-fg-muted backdrop-blur"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          {t('badge')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-6 max-w-4xl text-balance text-5xl font-bold tracking-tight text-fg sm:text-6xl lg:text-7xl"
        >
          {t('title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base text-fg-muted sm:text-lg"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <LinkButton
            href="https://wordpress.org/plugins/"
            target="_blank"
            rel="noreferrer"
            size="lg"
          >
            <Download size={16} />
            {t('ctaPrimary')}
          </LinkButton>
          <Link
            href="/docs"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-bg-card/40 px-6 text-sm font-medium text-fg transition hover:border-border-strong hover:bg-bg-elevated"
          >
            <BookOpen size={16} />
            {t('ctaSecondary')}
            <ArrowRight
              size={14}
              className="translate-x-0 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100"
            />
          </Link>
        </motion.div>

        <div className="mt-16 sm:mt-20">
          <TerminalDemo />
        </div>
      </div>
    </section>
  );
}
