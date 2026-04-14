import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const DOCS_ROOT = path.join(process.cwd(), 'content', 'docs');
const BLOG_ROOT = path.join(process.cwd(), 'content', 'blog');

export type DocFrontmatter = {
  title: string;
  description?: string;
  tier?: 'free' | 'pro' | 'agency';
  order?: number;
  updated?: string;
};

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  category: string;
  author?: string;
};

async function fileExists(p: string) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

export async function getDoc(slug: string): Promise<{
  frontmatter: DocFrontmatter;
  content: string;
} | null> {
  const filePath = path.join(DOCS_ROOT, `${slug}.mdx`);
  if (!(await fileExists(filePath))) return null;
  const raw = await fs.readFile(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { frontmatter: data as DocFrontmatter, content };
}

export async function getAllDocSlugs(): Promise<string[]> {
  async function walk(dir: string): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const out: string[] = [];
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) out.push(...(await walk(full)));
      else if (e.name.endsWith('.mdx')) {
        const rel = path
          .relative(DOCS_ROOT, full)
          .replace(/\.mdx$/, '')
          .replace(/\\/g, '/');
        out.push(rel);
      }
    }
    return out;
  }
  if (!(await fileExists(DOCS_ROOT))) return [];
  return walk(DOCS_ROOT);
}

export async function getAllBlogPosts(): Promise<
  { slug: string; frontmatter: BlogFrontmatter; readingTimeText: string }[]
> {
  if (!(await fileExists(BLOG_ROOT))) return [];
  const files = await fs.readdir(BLOG_ROOT);
  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith('.mdx'))
      .map(async (f) => {
        const raw = await fs.readFile(path.join(BLOG_ROOT, f), 'utf-8');
        const { data, content } = matter(raw);
        return {
          slug: f.replace(/\.mdx$/, ''),
          frontmatter: data as BlogFrontmatter,
          readingTimeText: readingTime(content).text
        };
      })
  );
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export async function getBlogPost(slug: string): Promise<{
  frontmatter: BlogFrontmatter;
  content: string;
  readingTimeText: string;
} | null> {
  const filePath = path.join(BLOG_ROOT, `${slug}.mdx`);
  if (!(await fileExists(filePath))) return null;
  const raw = await fs.readFile(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return {
    frontmatter: data as BlogFrontmatter,
    content,
    readingTimeText: readingTime(content).text
  };
}
