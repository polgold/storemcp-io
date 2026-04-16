import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { getBlogPost, getAllBlogPosts } from '@/lib/content';
import { MdxContent } from '@/components/docs/MdxContent';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

type Props = { params: { locale: string; slug: string } };

export async function generateStaticParams({
  params
}: {
  params: { locale: string };
}) {
  const posts = await getAllBlogPosts(params.locale);
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  if (!post) return { title: 'Blog' };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article'
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations('blogPage');
  const post = await getBlogPost(params.slug, params.locale);
  if (!post) notFound();

  const dateLocale = params.locale === 'es' ? 'es-AR' : 'en-US';

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-fg-muted transition hover:text-accent"
      >
        <ArrowLeft size={13} /> {t('backToBlog')}
      </Link>

      <article className="prose-docs mt-8">
        <div className="flex items-center gap-3 text-xs text-fg-subtle">
          <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-medium uppercase tracking-wider text-accent">
            {post.frontmatter.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {new Date(post.frontmatter.date).toLocaleDateString(dateLocale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {post.readingTimeText}
          </span>
        </div>

        <h1>{post.frontmatter.title}</h1>
        <p className="text-lg text-fg-muted">{post.frontmatter.description}</p>

        {post.frontmatter.author && (
          <div className="mb-8 mt-4 flex items-center gap-2 border-y border-border py-3 text-sm">
            <span className="text-fg-subtle">{t('writtenBy')}</span>
            <span className="font-medium text-fg">
              {post.frontmatter.author}
            </span>
          </div>
        )}

        <MdxContent source={post.content} />
      </article>
    </div>
  );
}
