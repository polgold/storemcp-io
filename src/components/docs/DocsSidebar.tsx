'use client';

import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { docsNav } from '@/lib/docs-nav';
import { ToolBadge } from '@/components/ToolBadge';
import { cn } from '@/lib/cn';

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-6">
      {docsNav.map((section) => (
        <div key={section.slug}>
          <div className="mb-1.5 px-2 text-xs font-semibold uppercase tracking-wider text-fg-subtle">
            {section.title}
          </div>
          <ul className="space-y-0.5">
            {section.links.map((link) => {
              const isActive = pathname?.endsWith(`/docs/${link.slug}`);
              return (
                <li key={link.slug}>
                  <Link
                    href={`/docs/${link.slug}`}
                    className={cn(
                      'flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-sm transition',
                      isActive
                        ? 'bg-accent/10 text-accent'
                        : 'text-fg-muted hover:bg-bg-card hover:text-fg'
                    )}
                  >
                    <span className="truncate">{link.title}</span>
                    {link.tier && link.tier !== 'free' && (
                      <ToolBadge tier={link.tier} />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
