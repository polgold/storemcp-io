'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section, SectionHeading } from '@/components/Section';

const CLIENTS = [
  { name: 'Claude', sub: 'claude.ai · Desktop · Code' },
  { name: 'ChatGPT', sub: 'OpenAI' },
  { name: 'Cursor', sub: 'IDE · chat' },
  { name: 'VS Code', sub: 'Copilot · Chat' },
  { name: 'Windsurf', sub: 'Codeium' }
];

export function Compatible() {
  const t = useTranslations('compatible');
  return (
    <Section className="border-t border-border/50">
      <SectionHeading
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {CLIENTS.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="group flex flex-col items-center justify-center gap-1 rounded-lg border border-border bg-bg-card/40 px-4 py-6 text-center transition hover:border-border-strong"
          >
            <span className="text-sm font-semibold text-fg">{c.name}</span>
            <span className="text-xs text-fg-subtle">{c.sub}</span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.24 }}
          className="flex flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-border px-4 py-6 text-center"
        >
          <span className="text-sm font-semibold text-accent">{t('more')}</span>
          <span className="text-xs text-fg-subtle">{t('any')}</span>
        </motion.div>
      </div>
    </Section>
  );
}
