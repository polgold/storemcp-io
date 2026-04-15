import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Section, SectionHeading } from '@/components/Section';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta.changelog' });
  return { title: t('title'), description: t('description') };
}

type Release = {
  version: string;
  date: string;
  badgeKey?: 'latest' | 'initialRelease';
  sections: { titleKey: 'added' | 'changed'; items: { en: string; es: string }[] }[];
};

const RELEASES: Release[] = [
  {
    version: '1.1.1',
    date: '2026-04-15',
    badgeKey: 'latest',
    sections: [
      {
        titleKey: 'added',
        items: [
          {
            en: 'Full Spanish (es_ES) translation bundled with the plugin — admin UI, tool descriptions and example prompts.',
            es: 'Traducción completa al español (es_ES) incluida en el plugin — UI del admin, descripciones de tools y ejemplos de prompts.'
          },
          {
            en: 'Plain-language explainer on the Tools admin page: every module now shows what it does plus two example prompts you can send to Claude, ChatGPT or any MCP client.',
            es: 'Explicación en lenguaje claro en la página de Tools del admin: cada módulo ahora muestra qué hace y dos ejemplos de prompts que podés enviar a Claude, ChatGPT o cualquier cliente MCP.'
          },
          {
            en: 'Per-tool explainer in the Registered tools catalogue — each store_mcp_* tool now has a one-line description of what it does and why you would call it.',
            es: 'Descripción por tool en el catálogo de Registered tools — cada tool store_mcp_* tiene ahora una línea explicando qué hace y por qué la llamarías.'
          }
        ]
      },
      {
        titleKey: 'changed',
        items: [
          {
            en: 'Official website moved from storemcp.com to storemcp.io — plugin URI, author URI, license API, OAuth docs, pricing links and admin copy all updated.',
            es: 'El sitio oficial pasó de storemcp.com a storemcp.io — plugin URI, author URI, API de licencias, docs de OAuth, links de pricing y textos del admin actualizados.'
          }
        ]
      }
    ]
  },
  {
    version: '1.0.0',
    date: '2026-04-14',
    badgeKey: 'initialRelease',
    sections: [
      {
        titleKey: 'added',
        items: [
          {
            en: '120+ MCP tools for WordPress and WooCommerce',
            es: '+120 tools MCP para WordPress y WooCommerce'
          },
          {
            en: 'Free tier: content management, product browsing, basic reports',
            es: 'Tier Free: gestión de contenido, navegación de productos, reportes básicos'
          },
          {
            en: 'Pro tier: full WooCommerce CRUD, orders, analytics, bulk operations',
            es: 'Tier Pro: CRUD completo de WooCommerce, órdenes, analytics, operaciones masivas'
          },
          {
            en: 'Agency tier: unlimited sites, white-label, custom roles, activity log export',
            es: 'Tier Agency: sitios ilimitados, white-label, roles custom, exportación de activity log'
          },
          {
            en: 'Admin panel with dashboard, settings, activity log, modules',
            es: 'Panel de admin con dashboard, settings, activity log, módulos'
          },
          {
            en: 'API key management with scopes, rate limits, and IP allow-lists',
            es: 'Gestión de API keys con scopes, rate limits e IP allow-lists'
          },
          {
            en: 'Application Passwords support as alternative authentication',
            es: 'Soporte de Application Passwords como autenticación alternativa'
          },
          {
            en: 'Rate limiting with per-key overrides and 80% alerts',
            es: 'Rate limiting con overrides por key y alertas al 80%'
          },
          {
            en: 'i18n-ready (English + Spanish out of the box)',
            es: 'Listo para i18n (inglés + español de base)'
          },
          {
            en: 'Shiki-powered code highlighting in the docs',
            es: 'Highlight de código con Shiki en las docs'
          },
          {
            en: 'Compatible with HPOS, Yoast SEO, RankMath, Multisite',
            es: 'Compatible con HPOS, Yoast SEO, RankMath, Multisite'
          }
        ]
      }
    ]
  }
];

export default async function ChangelogPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations('changelogPage');
  const isES = locale === 'es';
  const dateLocale = isES ? 'es-AR' : 'en-US';

  return (
    <Section>
      <SectionHeading
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />
      <div className="mx-auto max-w-3xl space-y-14">
        {RELEASES.map((r) => {
          const formattedDate = new Date(r.date).toLocaleDateString(dateLocale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
          return (
            <article
              key={r.version}
              className="relative border-l-2 border-border pl-8"
            >
              <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
              <div className="flex flex-wrap items-baseline gap-3">
                <h2 className="font-mono text-2xl font-bold text-fg">
                  v{r.version}
                </h2>
                <span className="text-sm text-fg-subtle">{formattedDate}</span>
                {r.badgeKey && (
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-accent">
                    {t(r.badgeKey)}
                  </span>
                )}
              </div>
              <div className="mt-6 space-y-5">
                {r.sections.map((s) => (
                  <div key={s.titleKey}>
                    <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-fg-subtle">
                      {t(s.titleKey)}
                    </h3>
                    <ul className="space-y-1.5 text-sm text-fg-muted">
                      {s.items.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-fg-subtle" />
                          <span>{isES ? item.es : item.en}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
