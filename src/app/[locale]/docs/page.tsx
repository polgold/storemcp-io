import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { docsNav, getDocTitle } from '@/lib/docs-nav';
import { ArrowRight, Zap, Book, Terminal, Shield, Wrench, Plug } from 'lucide-react';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta.docs' });
  return { title: t('title'), description: t('description') };
}

const ICONS: Record<string, any> = {
  'getting-started': Zap,
  'tools-reference': Book,
  guides: Terminal,
  'admin-panel': Wrench,
  security: Shield,
  api: Plug,
  troubleshooting: Wrench
};

export default async function DocsIndex({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations('docsPage');
  return (
    <div>
      <div className="mb-10">
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {t('eyebrow')}
        </div>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-fg">
          {t('title')}
        </h1>
        <p className="mt-3 max-w-2xl text-fg-muted">
          {t('subtitle')}
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
                      {getDocTitle(section, locale)}
                    </h2>
                    <ArrowRight
                      size={14}
                      className="text-fg-subtle transition group-hover:translate-x-0.5 group-hover:text-fg"
                    />
                  </div>
                  <p className="mt-1 text-sm text-fg-muted">
                    {section.links.length} {t('pages')}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-fg-subtle">
                    {section.links.slice(0, 6).map((l) => (
                      <li key={l.slug}>{getDocTitle(l, locale)}</li>
                    ))}
                    {section.links.length > 6 && <li>{t('more')}</li>}
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
