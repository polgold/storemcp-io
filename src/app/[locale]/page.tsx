import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { HowItWorks } from '@/components/home/HowItWorks';
import { ToolsOverview } from '@/components/home/ToolsOverview';
import { Compatible } from '@/components/home/Compatible';
import { PricingPreview } from '@/components/home/PricingPreview';
import { TrustedBy } from '@/components/home/TrustedBy';
import { OpenSource } from '@/components/home/OpenSource';
import { PluginBanner } from '@/components/home/PluginBanner';

export default function HomePage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <PluginBanner />
      <Features locale={locale} />
      <HowItWorks />
      <ToolsOverview />
      <Compatible />
      <PricingPreview />
      <TrustedBy locale={locale} />
      <OpenSource />
    </>
  );
}
