import { Info, AlertTriangle, CheckCircle2, Zap } from 'lucide-react';
import { cn } from '@/lib/cn';

type Type = 'info' | 'warning' | 'success' | 'tip';

const STYLES: Record<Type, { cls: string; Icon: any }> = {
  info: { cls: 'border-link/40 bg-link/5 text-link', Icon: Info },
  warning: {
    cls: 'border-amber-400/40 bg-amber-400/5 text-amber-300',
    Icon: AlertTriangle
  },
  success: {
    cls: 'border-accent/40 bg-accent/5 text-accent',
    Icon: CheckCircle2
  },
  tip: { cls: 'border-fuchsia-400/40 bg-fuchsia-400/5 text-fuchsia-300', Icon: Zap }
};

export function Callout({
  type = 'info',
  title,
  children
}: {
  type?: Type;
  title?: string;
  children: React.ReactNode;
}) {
  const { cls, Icon } = STYLES[type];
  return (
    <div
      className={cn(
        'my-6 flex gap-3 rounded-lg border px-4 py-3 text-sm',
        cls
      )}
    >
      <Icon size={16} className="mt-0.5 shrink-0" />
      <div className="flex-1 text-fg-muted">
        {title && <div className="mb-1 font-medium text-fg">{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  );
}
