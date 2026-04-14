'use client';

import { useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';

export function MdxPre({ children, ...props }: any) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const text = ref.current?.innerText ?? '';
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="group relative my-6">
      <button
        onClick={copy}
        className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-md border border-border bg-bg-card/80 text-fg-muted opacity-0 backdrop-blur transition hover:text-fg group-hover:opacity-100"
        aria-label="Copy"
      >
        {copied ? <Check size={13} className="text-accent" /> : <Copy size={13} />}
      </button>
      <pre ref={ref} {...props}>
        {children}
      </pre>
    </div>
  );
}
