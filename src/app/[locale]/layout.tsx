import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
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
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'meta.home'
  });
  const title = t('title');
  const description = t('description');
  const ogLocale = isES ? 'es_ES' : 'en_US';
  const altLocale = isES ? 'en_US' : 'es_ES';
  const path = `/${params.locale}`;

  return {
    title: { default: title, template: '%s · StoreMCP' },
    description,
    alternates: {
      canonical: path,
      languages: {
        en: '/en',
        es: '/es'
      }
    },
    openGraph: {
      type: 'website',
      siteName: 'StoreMCP',
      url: path,
      title,
      description,
      locale: ogLocale,
      alternateLocale: [altLocale]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
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
