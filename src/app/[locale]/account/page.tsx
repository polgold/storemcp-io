import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Section } from '@/components/Section';
import { AccountForm } from '@/components/AccountForm';

export const metadata: Metadata = {
  title: 'Account',
  description: 'Manage your StoreMCP license and sites.'
};

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
