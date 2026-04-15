import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import { AccountForm } from '@/components/AccountForm';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta.account' });
  return { title: t('title'), description: t('description') };
}

export default function AccountPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const isES = locale === 'es';

  return (
    <Section className="max-w-4xl">
      <AccountForm isES={isES} />
    </Section>
  );
}
