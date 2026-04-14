import { Check } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/cn';

export function PricingCard({
  tier,
  name,
  price,
  tag,
  desc,
  features,
  cta,
  ctaHref,
  popular,
  popularLabel
}: {
  tier: 'free' | 'pro' | 'agency';
  name: string;
  price: string;
  tag: string;
  desc: string;
  features: string[];
  cta: string;
  ctaHref: string;
  popular?: boolean;
  popularLabel?: string;
}) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-xl border p-6',
        popular
          ? 'border-accent/40 bg-gradient-to-b from-accent/5 to-transparent shadow-glow'
          : 'border-border bg-bg-card/40'
      )}
    >
      {popular && popularLabel && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-accent/50 bg-bg px-3 py-0.5 text-xs font-medium uppercase tracking-wider text-accent">
          {popularLabel}
        </div>
      )}
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-semibold text-fg">{name}</h3>
        <span
          className={cn(
            'rounded-full border px-2 py-0.5 text-2xs font-medium uppercase tracking-wider',
            tier === 'free' && 'border-accent/30 bg-accent/10 text-accent',
            tier === 'pro' && 'border-amber-400/30 bg-amber-400/10 text-amber-300',
            tier === 'agency' &&
              'border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-300'
          )}
        >
          {tier}
        </span>
      </div>
      <p className="mt-1 text-sm text-fg-muted">{desc}</p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-bold tracking-tight text-fg">
          {price}
        </span>
        <span className="text-sm text-fg-subtle">{tag}</span>
      </div>

      <Link
        href={ctaHref}
        className={cn(
          'mt-6 inline-flex h-10 items-center justify-center rounded-md text-sm font-medium transition',
          popular
            ? 'bg-accent text-black hover:bg-accent-hover shadow-glow'
            : 'border border-border text-fg hover:border-border-strong hover:bg-bg-elevated'
        )}
      >
        {cta}
      </Link>

      <ul className="mt-6 space-y-2.5 border-t border-border pt-5 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-fg-muted">
            <Check
              size={15}
              className={cn(
                'mt-0.5 shrink-0',
                popular ? 'text-accent' : 'text-fg-subtle'
              )}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
