'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/cn';

export function CodeBlock({
  code,
  language,
  filename,
  className
}: {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-lg border border-border bg-bg-subtle',
        className
      )}
    >
      {(filename || language) && (
        <div className="flex items-center justify-between border-b border-border bg-bg-card px-3 py-2 text-xs">
          <span className="font-mono text-fg-subtle">
            {filename ?? language}
          </span>
          {language && filename && (
            <span className="text-fg-subtle">{language}</span>
          )}
        </div>
      )}
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-6 text-fg-muted">
        <code>{code}</code>
      </pre>
      <button
        onClick={copy}
        className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-md border border-border bg-bg-card/80 text-fg-muted opacity-0 backdrop-blur transition hover:text-fg group-hover:opacity-100"
        aria-label="Copy"
      >
        {copied ? <Check size={13} className="text-accent" /> : <Copy size={13} />}
      </button>
    </div>
  );
}
