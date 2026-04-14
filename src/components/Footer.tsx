import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Logo } from './Logo';
import { Newsletter } from './Newsletter';
import { Github, Instagram } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');

  const cols = [
    {
      title: t('product'),
      links: [
        { href: '/#features', label: t('features') },
        { href: '/pricing', label: t('pricing') },
        { href: '/docs', label: t('docs') },
        { href: '/changelog', label: t('changelog') }
      ]
    },
    {
      title: t('resources'),
      links: [
        { href: '/blog', label: t('blog') },
        { href: '/support', label: t('support') },
        { href: '/docs/troubleshooting/common-issues', label: t('faq') },
        {
          href: 'https://github.com/exitmediacontent/storemcp',
          label: 'GitHub',
          external: true
        }
      ]
    },
    {
      title: t('company'),
      links: [
        {
          href: 'https://instagram.com/exitmediacontent',
          label: t('about'),
          external: true
        },
        { href: 'mailto:hello@storemcp.io', label: t('contact'), external: true },
        {
          href: 'https://instagram.com/exitmediacontent',
          label: t('twitter'),
          external: true
        }
      ]
    },
    {
      title: t('legal'),
      links: [
        { href: '/privacy', label: t('privacy') },
        { href: '/terms', label: t('terms') }
      ]
    }
  ];

  return (
    <footer className="border-t border-border bg-bg-subtle">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-fg-muted">
              {t('tagline')}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://github.com/exitmediacontent/storemcp"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg-muted transition hover:border-border-strong hover:text-fg"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href="https://instagram.com/exitmediacontent"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg-muted transition hover:border-border-strong hover:text-fg"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((col) => (
              <div key={col.title}>
                <div className="mb-3 text-xs font-medium uppercase tracking-wider text-fg-subtle">
                  {col.title}
                </div>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {'external' in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-fg-muted transition hover:text-fg"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-fg-muted transition hover:text-fg"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <Newsletter />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-fg-subtle sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} ExitMedia LLC. {t('rights')}
          </div>
          <div className="flex items-center gap-1">
            <span>{t('madeBy')}</span>
            <a
              href="https://instagram.com/exitmediacontent"
              target="_blank"
              rel="noreferrer"
              className="text-fg-muted transition hover:text-fg"
            >
              ExitMedia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
