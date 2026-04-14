import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getAllBlogPosts } from '@/lib/content';
import { Section, SectionHeading } from '@/components/Section';
import { Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Announcements, guides, and thinking on AI + WordPress + commerce.'
};

export default async function BlogIndex({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const posts = await getAllBlogPosts();

  return (
    <Section>
      <SectionHeading
        eyebrow="Blog"
        title="Writing & announcements"
        subtitle="What we're building, how to use it, and where AI commerce is going."
      />
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-bg-card/40 transition hover:border-border-strong"
          >
            <div className="aspect-[16/9] w-full overflow-hidden border-b border-border bg-gradient-to-br from-accent/10 via-bg-card to-bg-elevated">
              <div className="flex h-full w-full items-center justify-center">
                <div className="font-mono text-xs text-fg-subtle">
                  /blog/{post.slug}
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-2 text-xs text-fg-subtle">
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
                  {post.frontmatter.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={11} />
                  {new Date(post.frontmatter.date).toLocaleDateString(
                    'en-US',
                    { year: 'numeric', month: 'short', day: 'numeric' }
                  )}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {post.readingTimeText}
                </span>
              </div>
              <h2 className="mt-3 text-xl font-semibold text-fg transition group-hover:text-accent">
                {post.frontmatter.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-fg-muted">
                {post.frontmatter.description}
              </p>
              {post.frontmatter.author && (
                <div className="mt-4 text-xs text-fg-subtle">
                  by {post.frontmatter.author}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
