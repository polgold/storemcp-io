'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';

export type FAQItem = { q: string; a: React.ReactNode };

export function FAQ({
  items,
  className,
  defaultOpen
}: {
  items: FAQItem[];
  className?: string;
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen ?? null);
  return (
    <div
      className={cn(
        'divide-y divide-border rounded-lg border border-border bg-bg-card/40',
        className
      )}
    >
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={idx}>
            <button
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium text-fg">{item.q}</span>
              <ChevronDown
                size={16}
                className={cn(
                  'shrink-0 text-fg-subtle transition-transform',
                  isOpen && 'rotate-180 text-fg'
                )}
              />
            </button>
            <div
              className={cn(
                'grid px-4 pb-0 text-sm text-fg-muted transition-all duration-200',
                isOpen ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
