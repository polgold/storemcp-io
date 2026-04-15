import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { ShieldCheck } from 'lucide-react';
import { PricingCard } from '@/components/PricingCard';
import { Section, SectionHeading } from '@/components/Section';
import { FAQ } from '@/components/FAQ';
import { LEMONSQUEEZY_CHECKOUT } from '@/lib/lemonsqueezy';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta.pricing' });
  return { title: t('title'), description: t('description') };
}

const FREE_FEATURES_EN = [
  'WordPress content management (pages, posts, media, menus)',
  'Product browsing (list & view products, categories, tags)',
  'Basic reports (order totals, product totals)',
  'Site info & health check',
  '30 requests/minute',
  '1 site',
  'Community support (wordpress.org forum)'
];
const PRO_FEATURES_EN = [
  'Full WooCommerce CRUD (products, variations, edit, delete)',
  'Complete order management (status, notes, refunds)',
  'Customer management with purchase history',
  'Coupons (create, edit, all restrictions)',
  'Advanced analytics (sales by period, top sellers, stock)',
  'Shipping zones & methods',
  'Tax rates & classes',
  'Payment gateway configuration',
  'Bulk operations (mass price/stock/category updates)',
  'SEO meta fields (Yoast & RankMath compatible)',
  'Plugin & theme management',
  'Webhooks',
  'System tools (cache, search & replace, status)',
  '120 requests/minute · up to 5 sites',
  'Priority email support',
  'Automatic updates'
];
const AGENCY_FEATURES_EN = [
  'Unlimited sites',
  'White-label (custom plugin name & logo)',
  'Custom MCP roles (tool access per user role)',
  'Activity log export (CSV / JSON)',
  'Priority support with 24h SLA',
  'Early access to new features'
];

const FREE_FEATURES_ES = [
  'Gestión de contenido WordPress (páginas, posts, media, menús)',
  'Navegación de productos (listar y ver productos, categorías, tags)',
  'Reportes básicos (totales de órdenes y productos)',
  'Info del sitio y health check',
  '30 requests/minuto',
  '1 sitio',
  'Soporte comunitario (foro wordpress.org)'
];
const PRO_FEATURES_ES = [
  'CRUD completo de WooCommerce (productos, variaciones, editar, borrar)',
  'Gestión completa de órdenes (estados, notas, reembolsos)',
  'Gestión de clientes con historial de compras',
  'Cupones (crear, editar, todas las restricciones)',
  'Analítica avanzada (ventas por período, top sellers, stock)',
  'Zonas y métodos de envío',
  'Tasas e clases de impuestos',
  'Configuración de pasarelas de pago',
  'Operaciones masivas (precio/stock/categoría)',
  'Campos SEO meta (compatible Yoast y RankMath)',
  'Gestión de plugins y temas',
  'Webhooks',
  'Herramientas de sistema (cache, search & replace, status)',
  '120 requests/minuto · hasta 5 sitios',
  'Soporte prioritario por email',
  'Actualizaciones automáticas'
];
const AGENCY_FEATURES_ES = [
  'Sitios ilimitados',
  'White-label (nombre y logo custom del plugin)',
  'Roles MCP custom (acceso a tools por rol de usuario)',
  'Exportación de activity log (CSV / JSON)',
  'Soporte prioritario con SLA de 24h',
  'Acceso anticipado a nuevas features'
];

export default async function PricingPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations('pricing');
  const isES = locale === 'es';

  const faqs = isES
    ? [
        {
          q: '¿Puedo probar Pro antes de comprar?',
          a: 'La versión free te da control completo sobre WordPress. Pro agrega la potencia de WooCommerce. Además tenés 14 días para pedir reembolso si no te convence.'
        },
        {
          q: '¿Qué pasa cuando vence mi licencia?',
          a: 'Las features Pro se desactivan. Las features free siguen funcionando. Tus datos nunca se tocan.'
        },
        {
          q: '¿Ofrecen reembolsos?',
          a: 'Sí, garantía de devolución por 14 días, sin preguntas.'
        },
        {
          q: '¿Puedo pasar de Pro a Agency?',
          a: 'Sí, solo pagás la diferencia prorrateada hasta el final del período.'
        },
        {
          q: '¿Necesito una licencia por sitio?',
          a: 'Pro cubre hasta 5 sitios con una sola licencia. Agency es ilimitado.'
        },
        {
          q: '¿Hay deal lifetime?',
          a: 'No por ahora. El pricing anual nos permite seguir desarrollando el producto.'
        }
      ]
    : [
        {
          q: 'Can I try Pro before buying?',
          a: 'The free version gives you full WordPress control. Pro adds WooCommerce power. You also have 14 days to refund if it isn\'t the right fit.'
        },
        {
          q: 'What happens when my license expires?',
          a: 'Pro features deactivate. Free features keep working. Your data is never affected.'
        },
        {
          q: 'Do you offer refunds?',
          a: 'Yes, 14-day money-back guarantee, no questions asked.'
        },
        {
          q: 'Can I upgrade from Pro to Agency?',
          a: 'Yes — you only pay the prorated difference to the end of your period.'
        },
        {
          q: 'Do I need a license per site?',
          a: 'Pro covers up to 5 sites with a single license. Agency is unlimited.'
        },
        {
          q: 'Is there a lifetime deal?',
          a: 'Not currently. Annual pricing keeps development sustainable.'
        }
      ];

  return (
    <>
      <Section className="pb-10 pt-16">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
          <PricingCard
            tier="free"
            name={t('free.name')}
            price={t('free.price')}
            tag={t('free.tag')}
            desc={t('free.desc')}
            features={isES ? FREE_FEATURES_ES : FREE_FEATURES_EN}
            cta={t('free.cta')}
            ctaHref="/docs/getting-started/installation"
          />
          <PricingCard
            tier="pro"
            name={t('pro.name')}
            price={t('pro.price')}
            tag={t('pro.tag')}
            desc={t('pro.desc')}
            features={isES ? PRO_FEATURES_ES : PRO_FEATURES_EN}
            cta={t('pro.cta')}
            ctaHref={LEMONSQUEEZY_CHECKOUT.pro}
            popular
            popularLabel={t('mostPopular')}
          />
          <PricingCard
            tier="agency"
            name={t('agency.name')}
            price={t('agency.price')}
            tag={t('agency.tag')}
            desc={t('agency.desc')}
            features={isES ? AGENCY_FEATURES_ES : AGENCY_FEATURES_EN}
            cta={t('agency.cta')}
            ctaHref={LEMONSQUEEZY_CHECKOUT.agency}
          />
        </div>

        <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-2 rounded-md border border-accent/30 bg-accent/[0.04] px-4 py-3 text-sm text-fg-muted">
          <ShieldCheck size={16} className="text-accent" />
          <span>{t('moneyBack')}</span>
        </div>
      </Section>

      <Section className="pt-0" id="pricing-faq">
        <SectionHeading title={t('faqTitle')} />
        <div className="mx-auto max-w-3xl">
          <FAQ items={faqs} />
        </div>
      </Section>
    </>
  );
}
