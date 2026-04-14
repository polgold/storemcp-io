import * as React from 'react';
import { cn } from '@/lib/cn';

type Variant = 'default' | 'accent' | 'pro' | 'free' | 'agency' | 'outline';

const variants: Record<Variant, string> = {
  default:
    'bg-bg-card text-fg-muted border border-border',
  accent: 'bg-accent/10 text-accent border border-accent/30',
  free: 'bg-accent/10 text-accent border border-accent/30',
  pro: 'bg-amber-400/10 text-amber-300 border border-amber-400/30',
  agency: 'bg-fuchsia-400/10 text-fuchsia-300 border border-fuchsia-400/30',
  outline: 'text-fg-muted border border-border'
};

export function Badge({
  variant = 'default',
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: Variant }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium tracking-wide uppercase',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
