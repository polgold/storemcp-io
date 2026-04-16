import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { getAllDocSlugs, getDoc } from '@/lib/content';
import { MdxContent } from '@/components/docs/MdxContent';
import { DocsPager } from '@/components/docs/DocsPager';
import { ToolBadge } from '@/components/ToolBadge';
import { findDocMeta } from '@/lib/docs-nav';

type Props = { params: { locale: string; slug: string[] } };

export async function generateStaticParams() {
  const slugs = await getAllDocSlugs();
  return slugs.map((s) => ({ slug: s.split('/') }));
}

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const slug = params.slug.join('/');
  const doc = await getDoc(slug);
  if (!doc) return { title: 'Docs' };
  return {
    title: doc.frontmatter.title,
    description: doc.frontmatter.description
  };
}

export default async function DocPage({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations('common');
  const slug = params.slug.join('/');
  const doc = await getDoc(slug, params.locale);
  if (!doc) notFound();

  const meta = findDocMeta(slug);
  const tier = doc.frontmatter.tier ?? meta?.tier ?? 'free';

  return (
    <article className="prose-docs mx-auto max-w-3xl">
      <div className="mb-6 flex items-center gap-2 text-xs text-fg-subtle">
        <span>{t('documentation')}</span>
        <span>/</span>
        <span className="capitalize">{params.slug[0]?.replace(/-/g, ' ')}</span>
      </div>
      <div className="mb-2 flex items-center gap-3">
        <h1>{doc.frontmatter.title}</h1>
        <ToolBadge tier={tier} />
      </div>
      {doc.frontmatter.description && (
        <p className="mt-0 text-lg text-fg-muted">
          {doc.frontmatter.description}
        </p>
      )}

      <div className="mt-8">
        <MdxContent source={doc.content} />
      </div>

      <DocsPager slug={slug} locale={params.locale} />
    </article>
  );
}
