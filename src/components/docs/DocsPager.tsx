import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { findAdjacent } from '@/lib/docs-nav';

export function DocsPager({ slug }: { slug: string }) {
  const { prev, next } = findAdjacent(slug);
  if (!prev && !next) return null;
  return (
    <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {prev ? (
        <Link
          href={`/docs/${prev.slug}`}
          className="group flex flex-col rounded-lg border border-border bg-bg-card/40 px-4 py-3 transition hover:border-border-strong"
        >
          <span className="flex items-center gap-1 text-xs text-fg-subtle">
            <ArrowLeft size={12} /> Previous
          </span>
          <span className="mt-1 text-sm font-medium text-fg group-hover:text-accent">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/docs/${next.slug}`}
          className="group flex flex-col rounded-lg border border-border bg-bg-card/40 px-4 py-3 text-right transition hover:border-border-strong"
        >
          <span className="flex items-center justify-end gap-1 text-xs text-fg-subtle">
            Next <ArrowRight size={12} />
          </span>
          <span className="mt-1 text-sm font-medium text-fg group-hover:text-accent">
            {next.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
