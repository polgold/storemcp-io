'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

const LINES_EN = [
  { type: 'user', text: '"Show me last week\'s top selling products"' },
  { type: 'tool', text: '→ calling store_mcp_report_top_sellers' },
  { type: 'out', text: '1. Agua Mineral 750ml — 234 units' },
  { type: 'out', text: '2. Tiramisú Dolceria Alba — 189 units' },
  { type: 'out', text: '3. Huevo Pascua Baci — 156 units' },
  { type: 'assistant', text: 'Weekly revenue is up 18% vs last week.' }
];

const LINES_ES = [
  { type: 'user', text: '"Mostrame los productos más vendidos de la semana pasada"' },
  { type: 'tool', text: '→ llamando store_mcp_report_top_sellers' },
  { type: 'out', text: '1. Agua Mineral 750ml — 234 unidades' },
  { type: 'out', text: '2. Tiramisú Dolceria Alba — 189 unidades' },
  { type: 'out', text: '3. Huevo Pascua Baci — 156 unidades' },
  { type: 'assistant', text: 'El revenue semanal subió un 18% vs la semana anterior.' }
];

export function TerminalDemo() {
  const locale = useLocale();
  const LINES = locale === 'es' ? LINES_ES : LINES_EN;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="terminal mx-auto w-full max-w-2xl"
    >
      <div className="terminal-header">
        <span className="terminal-dot bg-red-500/70" />
        <span className="terminal-dot bg-yellow-500/70" />
        <span className="terminal-dot bg-green-500/70" />
        <span className="ml-2 font-mono text-[11px] text-fg-subtle">
          claude.ai — storemcp
        </span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-7">
        {LINES.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -4 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * idx, duration: 0.35 }}
            className="flex gap-3"
          >
            {line.type === 'user' && (
              <>
                <span className="text-fg-subtle">you</span>
                <span className="text-fg">{line.text}</span>
              </>
            )}
            {line.type === 'tool' && (
              <span className="text-accent/80">{line.text}</span>
            )}
            {line.type === 'out' && (
              <span className="pl-10 text-fg-muted">{line.text}</span>
            )}
            {line.type === 'assistant' && (
              <>
                <span className="text-accent">claude</span>
                <span className="text-fg">{line.text}</span>
              </>
            )}
          </motion.div>
        ))}
        <div className="mt-2 flex items-center gap-3">
          <span className="text-fg-subtle">you</span>
          <span className="inline-block h-4 w-2 animate-blink bg-accent" />
        </div>
      </div>
    </motion.div>
  );
}
