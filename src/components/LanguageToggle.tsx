'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTransition } from 'react';
import { locales } from '@/i18n/config';
import { cn } from '@/lib/cn';

export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={cn(
        'inline-flex items-center gap-0.5 rounded-md border border-border bg-bg-card p-0.5',
        isPending && 'opacity-60',
        className
      )}
    >
      {locales.map((l) => (
        <button
          key={l}
          onClick={() =>
            startTransition(() =>
              router.replace(pathname, { locale: l })
            )
          }
          className={cn(
            'rounded px-2 py-0.5 text-xs font-medium uppercase tracking-wider transition',
            l === locale
              ? 'bg-bg-elevated text-fg'
              : 'text-fg-subtle hover:text-fg'
          )}
          aria-pressed={l === locale}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
