import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { Callout } from './Callout';
import { MdxPre } from './MdxPre';

const components = {
  Callout,
  pre: MdxPre
};

export function MdxContent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components as any}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: 'append',
                properties: {
                  className: ['anchor'],
                  'aria-hidden': 'true',
                  tabIndex: -1
                },
                content: { type: 'text', value: '#' }
              }
            ]
          ]
        }
      }}
    />
  );
}
