import { cn } from '@/lib/cn';

export function Section({
  children,
  className,
  id
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn('mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8', className)}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center'
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div
      className={cn(
        'mx-auto mb-14 max-w-2xl',
        align === 'center' ? 'text-center' : 'text-left mx-0'
      )}
    >
      {eyebrow && (
        <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-fg-muted sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
