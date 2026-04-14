import type { MetadataRoute } from 'next';
import { getAllBlogPosts, getAllDocSlugs } from '@/lib/content';
import { locales } from '@/i18n/config';

const BASE = 'https://storemcp.io';

const staticPaths = [
  '',
  'pricing',
  'docs',
  'blog',
  'changelog',
  'support',
  'account',
  'privacy',
  'terms'
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllBlogPosts();
  const docs = await getAllDocSlugs();
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const p of staticPaths) {
      entries.push({
        url: `${BASE}/${locale}${p ? `/${p}` : ''}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: p === '' ? 1 : 0.7
      });
    }
    for (const d of docs) {
      entries.push({
        url: `${BASE}/${locale}/docs/${d}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6
      });
    }
    for (const post of posts) {
      entries.push({
        url: `${BASE}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.frontmatter.date),
        changeFrequency: 'monthly',
        priority: 0.5
      });
    }
  }
  return entries;
}
