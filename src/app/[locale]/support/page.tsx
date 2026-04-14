import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Mail, Github, MessageSquare, LifeBuoy } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Section, SectionHeading } from '@/components/Section';
import { FAQ } from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Support',
  description:
    'Get help with StoreMCP — FAQ, community forum, GitHub issues, and email support.'
};

export default function SupportPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const isES = locale === 'es';

  const sections = isES
    ? [
        {
          title: 'General',
          items: [
            {
              q: '¿Qué es StoreMCP?',
              a: 'Un plugin de WordPress que convierte tu sitio en un servidor MCP, permitiendo a Claude, ChatGPT, Cursor y otros asistentes de IA controlar productos, órdenes, páginas y más desde lenguaje natural.'
            },
            {
              q: '¿Qué es MCP?',
              a: 'Model Context Protocol — un estándar abierto que permite a asistentes de IA descubrir y llamar tools en servidores remotos. Soportado por Claude, ChatGPT, Cursor, VS Code, Windsurf y más.'
            },
            {
              q: '¿Qué necesito para usarlo?',
              a: 'WordPress 6.2+, PHP 7.4+, HTTPS, y un cliente compatible con MCP (Claude, ChatGPT, Cursor, etc.).'
            },
            {
              q: '¿Es seguro?',
              a: 'Sí. StoreMCP usa API keys scoped y revokables, rate limits por key, HTTPS obligatorio, y un activity log completo de cada tool invocada.'
            }
          ]
        },
        {
          title: 'Instalación',
          items: [
            {
              q: '¿Cuáles son los requisitos?',
              a: 'WordPress 6.2+, PHP 7.4+ (8.1+ recomendado), WooCommerce 7.0+ (opcional), HTTPS.'
            },
            {
              q: '¿Cómo instalo?',
              a: 'Desde tu admin de WordPress: Plugins → Add New → buscá "StoreMCP" → Install → Activate.'
            },
            {
              q: '¿Cómo actualizo?',
              a: 'En Pro/Agency las updates son automáticas. En Free, WordPress te avisa cuando hay una nueva versión disponible.'
            }
          ]
        },
        {
          title: 'Conexión',
          items: [
            {
              q: '¿Cómo conecto Claude?',
              a: 'Ver la guía completa en docs/getting-started/connecting-claude.'
            },
            {
              q: '¿Qué pasa si no conecta?',
              a: 'Confirmá que tu sitio sea HTTPS público, que el bearer token coincida con la key que generaste, y que el módulo correspondiente esté activo. Ver troubleshooting/connection-errors.'
            }
          ]
        },
        {
          title: 'WooCommerce',
          items: [
            {
              q: '¿Qué versión de Woo necesito?',
              a: 'WooCommerce 7.0 o superior. WooCommerce es opcional si solo usás las tools de contenido.'
            },
            {
              q: '¿Funciona con HPOS?',
              a: 'Sí, totalmente compatible con High-Performance Order Storage.'
            },
            {
              q: '¿Qué plugins son compatibles?',
              a: 'StoreMCP funciona con Yoast SEO, RankMath, WPML, Polylang, Multisite, Action Scheduler, y los gateways más populares (Stripe, Mercado Pago, PayPal, etc.).'
            }
          ]
        },
        {
          title: 'Precios',
          items: [
            {
              q: '¿Cuál es la diferencia entre planes?',
              a: 'Free cubre WordPress + lectura de productos. Pro agrega CRUD completo de WooCommerce, órdenes, analytics, bulk ops. Agency agrega sitios ilimitados, white-label, y roles custom. Detalle en /pricing.'
            },
            {
              q: '¿Cómo funciona la licencia?',
              a: 'Activás la key desde StoreMCP → License. Podés desactivar en un sitio para moverla a otro. Pro cubre hasta 5 sitios, Agency ilimitados.'
            },
            {
              q: '¿Ofrecen reembolsos?',
              a: 'Sí, garantía de 14 días sin preguntas.'
            }
          ]
        },
        {
          title: 'Troubleshooting',
          items: [
            {
              q: 'No conecta con mi AI client',
              a: 'Verificá HTTPS, la key, y los módulos activos. Ver docs/troubleshooting/connection-errors.'
            },
            {
              q: 'Las tools no aparecen en el cliente',
              a: 'Activá el módulo correspondiente en StoreMCP → Modules y reiniciá el cliente de IA.'
            },
            {
              q: 'Errores de permisos',
              a: 'Verificá que el usuario asociado a la key tenga las capabilities necesarias. Ver docs/security/permissions.'
            }
          ]
        }
      ]
    : [
        {
          title: 'General',
          items: [
            {
              q: 'What is StoreMCP?',
              a: 'A WordPress plugin that turns your site into an MCP server, letting Claude, ChatGPT, Cursor, and other AI assistants control products, orders, pages, and more via natural language.'
            },
            {
              q: 'What is MCP?',
              a: 'Model Context Protocol — an open standard for AI assistants to discover and call tools on remote servers. Supported by Claude, ChatGPT, Cursor, VS Code, Windsurf, and more.'
            },
            {
              q: 'What do I need to use it?',
              a: 'WordPress 6.2+, PHP 7.4+, HTTPS, and any MCP-compatible client (Claude, ChatGPT, Cursor, etc.).'
            },
            {
              q: 'Is it secure?',
              a: 'Yes. StoreMCP uses scoped, revokable API keys, per-key rate limiting, mandatory HTTPS, and a full activity log of every tool invocation.'
            }
          ]
        },
        {
          title: 'Installation',
          items: [
            {
              q: 'What are the requirements?',
              a: 'WordPress 6.2+, PHP 7.4+ (8.1+ recommended), WooCommerce 7.0+ (optional), HTTPS.'
            },
            {
              q: 'How do I install?',
              a: 'From your WordPress admin: Plugins → Add New → search "StoreMCP" → Install → Activate.'
            },
            {
              q: 'How do I update?',
              a: 'On Pro/Agency, updates are automatic. On Free, WordPress notifies you when a new version is available.'
            }
          ]
        },
        {
          title: 'Connection',
          items: [
            {
              q: 'How do I connect Claude?',
              a: 'See the full guide in docs/getting-started/connecting-claude.'
            },
            {
              q: 'What if it doesn\'t connect?',
              a: 'Confirm your site is HTTPS and public, the bearer token matches the key you generated, and the relevant module is enabled. See troubleshooting/connection-errors.'
            }
          ]
        },
        {
          title: 'WooCommerce',
          items: [
            {
              q: 'Which Woo version do I need?',
              a: 'WooCommerce 7.0 or newer. Woo is optional if you only use the content tools.'
            },
            {
              q: 'Does it work with HPOS?',
              a: 'Yes — fully compatible with High-Performance Order Storage.'
            },
            {
              q: 'Which plugins are compatible?',
              a: 'StoreMCP works with Yoast SEO, RankMath, WPML, Polylang, Multisite, Action Scheduler, and the most popular gateways (Stripe, Mercado Pago, PayPal, etc.).'
            }
          ]
        },
        {
          title: 'Pricing',
          items: [
            {
              q: 'What\'s the difference between plans?',
              a: 'Free covers WordPress + product reads. Pro adds full WooCommerce CRUD, orders, analytics, bulk ops. Agency adds unlimited sites, white-label, and custom roles. Full matrix at /pricing.'
            },
            {
              q: 'How does the license work?',
              a: 'Activate the key at StoreMCP → License. You can deactivate on one site to move to another. Pro covers up to 5 sites, Agency is unlimited.'
            },
            {
              q: 'Do you offer refunds?',
              a: 'Yes — 14-day money-back guarantee, no questions.'
            }
          ]
        },
        {
          title: 'Troubleshooting',
          items: [
            {
              q: 'My AI client can\'t connect',
              a: 'Verify HTTPS, the key, and enabled modules. See docs/troubleshooting/connection-errors.'
            },
            {
              q: 'Tools don\'t show up in my client',
              a: 'Enable the relevant module in StoreMCP → Modules and restart the AI client.'
            },
            {
              q: 'Permission errors',
              a: 'Verify the user bound to the key has the required capabilities. See docs/security/permissions.'
            }
          ]
        }
      ];

  const channels = [
    {
      icon: MessageSquare,
      title: isES ? 'Comunidad (Free)' : 'Community (Free)',
      desc: isES
        ? 'Foro de soporte en wordpress.org para el tier gratuito.'
        : 'Support forum on wordpress.org for the free tier.',
      cta: isES ? 'Abrir foro' : 'Open forum',
      href: 'https://wordpress.org/support/plugin/storemcp/'
    },
    {
      icon: Github,
      title: 'GitHub',
      desc: isES
        ? 'Reportá bugs y solicitá features en el repo público.'
        : 'Report bugs and request features on the public repo.',
      cta: isES ? 'Abrir issue' : 'Open issue',
      href: 'https://github.com/exitmediacontent/storemcp/issues'
    },
    {
      icon: Mail,
      title: isES ? 'Email (Pro / Agency)' : 'Email (Pro / Agency)',
      desc: isES
        ? 'Soporte prioritario por email con SLA.'
        : 'Priority email support with SLA.',
      cta: 'hello@storemcp.io',
      href: 'mailto:hello@storemcp.io'
    },
    {
      icon: LifeBuoy,
      title: isES ? 'Docs' : 'Documentation',
      desc: isES
        ? 'Guías paso a paso y referencia de tools.'
        : 'Step-by-step guides and tool reference.',
      cta: isES ? 'Ver docs' : 'View docs',
      href: '/docs'
    }
  ];

  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Support"
          title={isES ? 'Cómo te ayudamos' : 'How we help'}
          subtitle={
            isES
              ? 'Elegí el canal que mejor encaje con tu situación.'
              : 'Pick the channel that fits your situation.'
          }
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => {
            const Icon = c.icon;
            const isInternal = c.href.startsWith('/');
            const body = (
              <div className="flex h-full flex-col rounded-xl border border-border bg-bg-card/40 p-5 transition hover:border-border-strong">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-bg-elevated text-accent">
                  <Icon size={17} />
                </div>
                <div className="mt-4 text-base font-semibold text-fg">
                  {c.title}
                </div>
                <p className="mt-1 flex-1 text-sm text-fg-muted">{c.desc}</p>
                <div className="mt-4 text-sm font-medium text-accent">
                  {c.cta} →
                </div>
              </div>
            );
            return isInternal ? (
              <Link key={c.title} href={c.href}>
                {body}
              </Link>
            ) : (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
              >
                {body}
              </a>
            );
          })}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title={isES ? 'Preguntas frecuentes' : 'Frequently asked questions'}
        />
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-fg-subtle">
                {s.title}
              </h3>
              <FAQ items={s.items} />
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-2xl rounded-xl border border-border bg-bg-card/40 p-8 text-center">
          <h3 className="text-lg font-semibold text-fg">
            {isES ? 'No encontraste lo que buscabas?' : 'Didn\'t find what you need?'}
          </h3>
          <p className="mt-2 text-sm text-fg-muted">
            {isES
              ? 'Escribinos a hello@storemcp.io y te respondemos en menos de 24 horas.'
              : 'Email us at hello@storemcp.io and we\'ll reply within 24 hours.'}
          </p>
          <a
            href="mailto:hello@storemcp.io"
            className="mt-5 inline-flex h-10 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-black hover:bg-accent-hover"
          >
            <Mail size={15} /> hello@storemcp.io
          </a>
        </div>
      </Section>
    </>
  );
}
