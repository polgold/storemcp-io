'use client';

import { useState, useEffect, useMemo } from 'react';
import { Search, Command, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { flattenDocs } from '@/lib/docs-nav';
import { cn } from '@/lib/cn';

export function DocsSearch() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const all = useMemo(() => flattenDocs(), []);
  const filtered = useMemo(() => {
    if (!q.trim()) return all.slice(0, 12);
    const term = q.toLowerCase();
    return all
      .filter(
        (d) =>
          d.title.toLowerCase().includes(term) ||
          d.slug.toLowerCase().includes(term)
      )
      .slice(0, 12);
  }, [q, all]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex w-full items-center gap-2 rounded-md border border-border bg-bg-card/40 px-3 py-2 text-sm text-fg-subtle transition hover:border-border-strong"
      >
        <Search size={14} />
        <span>Search docs…</span>
        <span className="ml-auto flex items-center gap-0.5 rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-fg-subtle">
          <Command size={10} />K
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-[15vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-xl border border-border bg-bg-card shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b border-border px-4">
              <Search size={15} className="text-fg-subtle" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search documentation…"
                className="h-12 w-full bg-transparent text-sm text-fg placeholder:text-fg-subtle focus:outline-none"
              />
              <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-fg-subtle">
                esc
              </kbd>
            </div>
            <ul className="max-h-[60vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-fg-subtle">
                  No results.
                </li>
              )}
              {filtered.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/docs/${d.slug}`}
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm text-fg-muted transition hover:bg-bg-elevated hover:text-fg"
                  >
                    <span className="flex-1 truncate">{d.title}</span>
                    <span className="text-xs text-fg-subtle">
                      {d.slug}
                    </span>
                    <ArrowRight
                      size={12}
                      className="opacity-0 transition group-hover:opacity-60"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
