import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { locales } from '@/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isES = params.locale === 'es';
  return {
    title: isES
      ? {
          default: 'StoreMCP — Centro de Control AI para WordPress y WooCommerce',
          template: '%s · StoreMCP'
        }
      : {
          default: 'StoreMCP — AI Control Center for WordPress & WooCommerce',
          template: '%s · StoreMCP'
        },
    description: isES
      ? 'El servidor MCP más completo para WordPress. Controlá productos, órdenes, páginas, analytics y más de 120 operaciones desde Claude, ChatGPT o cualquier asistente AI.'
      : 'The most comprehensive MCP server plugin for WordPress. Control products, orders, pages, analytics and 120+ operations from Claude, ChatGPT, or any AI assistant.',
    alternates: {
      languages: {
        en: '/en',
        es: '/es'
      }
    }
  };
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'StoreMCP',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'WordPress',
  offers: [
    { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Pro', price: '99', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Agency', price: '299', priceCurrency: 'USD' }
  ],
  publisher: {
    '@type': 'Organization',
    name: 'ExitMedia LLC',
    url: 'https://storemcp.io'
  }
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as any)) notFound();
  setRequestLocale(params.locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </NextIntlClientProvider>
  );
}
