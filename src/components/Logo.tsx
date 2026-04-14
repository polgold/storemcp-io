import { cn } from '@/lib/cn';

export function Logo({
  className,
  withText = true
}: {
  className?: string;
  withText?: boolean;
}) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 ring-1 ring-accent/40 shadow-[inset_0_0_14px_rgba(132,204,22,0.35)]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-accent"
          aria-hidden
        >
          <path
            d="M3 4h10v2H3V4zm0 3h7v2H3V7zm0 3h10v2H3v-2z"
            fill="currentColor"
          />
          <circle cx="13" cy="8" r="1.25" fill="currentColor" opacity=".7" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(132,204,22,0.8)] animate-pulse" />
      </span>
      {withText && (
        <span className="font-semibold tracking-tight text-fg">
          StoreMCP
        </span>
      )}
    </span>
  );
}
