'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Menu, X, Github } from 'lucide-react';
import { Logo } from './Logo';
import { LanguageToggle } from './LanguageToggle';
import { LinkButton } from './ui/Button';
import { cn } from '@/lib/cn';

export function Header() {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/pricing', label: t('pricing') },
    { href: '/docs', label: t('docs') },
    { href: '/blog', label: t('blog') },
    { href: '/changelog', label: t('changelog') },
    { href: '/support', label: t('support') }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="StoreMCP home">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <a
            href="https://github.com/exitmediacontent/storemcp"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-md text-fg-muted transition hover:bg-bg-card hover:text-fg"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <Link href="/account" className="text-sm text-fg-muted hover:text-fg">
            {t('account')}
          </Link>
          <LinkButton
            href="https://wordpress.org/plugins/"
            target="_blank"
            rel="noreferrer"
            size="sm"
          >
            {t('download')}
          </LinkButton>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md text-fg-muted md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          'border-t border-border bg-bg md:hidden',
          open ? 'block' : 'hidden'
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-2 text-sm text-fg-muted hover:bg-bg-card hover:text-fg"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/account"
            className="rounded-md px-2 py-2 text-sm text-fg-muted hover:bg-bg-card hover:text-fg"
            onClick={() => setOpen(false)}
          >
            {t('account')}
          </Link>
          <div className="mt-2 flex items-center gap-3 px-2">
            <LanguageToggle />
            <a
              href="https://github.com/exitmediacontent/storemcp"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md text-fg-muted transition hover:bg-bg-card hover:text-fg"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          </div>
          <LinkButton
            href="https://wordpress.org/plugins/"
            target="_blank"
            rel="noreferrer"
            size="md"
            className="mt-2"
          >
            {t('download')}
          </LinkButton>
        </nav>
      </div>
    </header>
  );
}
