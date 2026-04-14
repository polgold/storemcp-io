'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section, SectionHeading } from '@/components/Section';

export function HowItWorks() {
  const t = useTranslations('howItWorks');
  const steps = [
    { n: '01', title: t('step1Title'), desc: t('step1Desc') },
    { n: '02', title: t('step2Title'), desc: t('step2Desc') },
    { n: '03', title: t('step3Title'), desc: t('step3Desc') }
  ];

  return (
    <Section id="how-it-works" className="border-y border-border/50 bg-bg-subtle/30">
      <SectionHeading eyebrow="Workflow" title={t('title')} subtitle={t('subtitle')} />
      <div className="relative grid grid-cols-1 gap-0 md:grid-cols-3">
        <div className="pointer-events-none absolute left-0 top-16 hidden h-px w-full bg-gradient-to-r from-transparent via-border to-transparent md:block" />
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative px-6 py-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border bg-bg-card font-mono text-sm text-accent">
              {s.n}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-fg">{s.title}</h3>
            <p className="mt-2 text-sm leading-6 text-fg-muted">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
