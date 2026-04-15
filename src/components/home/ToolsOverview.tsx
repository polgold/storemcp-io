'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section } from '@/components/Section';

const MODULE_KEYS = [
  'products',
  'variations',
  'categories',
  'tags',
  'attributes',
  'orders',
  'customers',
  'coupons',
  'reports',
  'shipping',
  'tax',
  'settings',
  'pages',
  'posts',
  'media',
  'menus',
  'users',
  'reviews',
  'seo',
  'plugins',
  'themes',
  'webhooks',
  'refunds',
  'system'
] as const;

export function ToolsOverview() {
  const t = useTranslations('woocommerce');
  return (
    <Section className="relative overflow-hidden">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {t('eyebrow')}
          </div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-fg sm:text-5xl">
            {t('title')}
          </h2>
          <div className="mt-6 flex items-baseline gap-3">
            <span className="bg-gradient-to-br from-accent to-accent/40 bg-clip-text font-mono text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
              {t('tools')}
            </span>
          </div>
          <p className="mt-5 max-w-md text-fg-muted">{t('desc')}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {MODULE_KEYS.map((key, i) => (
            <motion.span
              key={key}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: i * 0.02 }}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-bg-card/60 px-3 py-1.5 text-sm text-fg-muted transition hover:border-accent/40 hover:text-fg"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
              {t(`modules.${key}`)}
            </motion.span>
          ))}
        </div>
      </div>
    </Section>
  );
}
