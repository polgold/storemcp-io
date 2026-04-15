import Image from 'next/image';
import { cn } from '@/lib/cn';

export function Logo({
  className,
  withText = true,
  size = 28
}: {
  className?: string;
  withText?: boolean;
  size?: number;
}) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <span
        className="relative inline-flex items-center justify-center rounded-md bg-accent/10 ring-1 ring-accent/40 shadow-[inset_0_0_14px_rgba(132,204,22,0.35)]"
        style={{ width: size, height: size }}
      >
        <Image
          src="/assets/icon-256x256.png"
          alt="StoreMCP"
          width={size}
          height={size}
          className="rounded-md"
          priority
        />
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
