import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { docsNav } from '@/lib/docs-nav';
import { ArrowRight, Zap, Book, Terminal, Shield, Wrench, Plug } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Complete documentation for StoreMCP — installation, configuration, tool reference, guides, and security.'
};

const ICONS: Record<string, any> = {
  'getting-started': Zap,
  'tools-reference': Book,
  guides: Terminal,
  'admin-panel': Wrench,
  security: Shield,
  api: Plug,
  troubleshooting: Wrench
};

export default function DocsIndex({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return (
    <div>
      <div className="mb-10">
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Documentation
        </div>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-fg">
          StoreMCP docs
        </h1>
        <p className="mt-3 max-w-2xl text-fg-muted">
          Everything you need to install, configure, and use StoreMCP. Read
          top-to-bottom, or jump straight to the tool reference.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {docsNav.map((section) => {
          const Icon = ICONS[section.slug] ?? Book;
          return (
            <Link
              key={section.slug}
              href={`/docs/${section.links[0].slug}`}
              className="group rounded-xl border border-border bg-bg-card/40 p-5 transition hover:border-border-strong"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-bg-elevated text-accent">
                  <Icon size={16} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-semibold text-fg">
                      {section.title}
                    </h2>
                    <ArrowRight
                      size={14}
                      className="text-fg-subtle transition group-hover:translate-x-0.5 group-hover:text-fg"
                    />
                  </div>
                  <p className="mt-1 text-sm text-fg-muted">
                    {section.links.length} pages
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-fg-subtle">
                    {section.links.slice(0, 6).map((l) => (
                      <li key={l.slug}>{l.title}</li>
                    ))}
                    {section.links.length > 6 && <li>+ more</li>}
                  </ul>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
