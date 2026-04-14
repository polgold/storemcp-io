'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight, Check } from 'lucide-react';

export function Newsletter() {
  const t = useTranslations('newsletter');
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <div>
      <div className="mb-1 text-xs font-medium uppercase tracking-wider text-fg-subtle">
        {t('title')}
      </div>
      <p className="mb-3 text-sm text-fg-muted">{t('subtitle')}</p>
      {done ? (
        <div className="flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-3 py-2 text-sm text-accent">
          <Check size={14} />
          {t('success')}
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setDone(true);
          }}
          className="flex items-center gap-2"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('placeholder')}
            className="h-9 flex-1 rounded-md border border-border bg-bg-card px-3 text-sm text-fg placeholder:text-fg-subtle focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
          <button
            type="submit"
            className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-black transition hover:bg-accent-hover"
            aria-label={t('submit')}
          >
            <ArrowRight size={14} />
          </button>
        </form>
      )}
    </div>
  );
}
