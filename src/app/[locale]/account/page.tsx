import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Section } from '@/components/Section';
import { KeyRound, Building2, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Account',
  description: 'Manage your StoreMCP license and sites.'
};

export default function AccountPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const isES = locale === 'es';

  return (
    <Section className="max-w-4xl">
      <div className="rounded-2xl border border-border bg-bg-card/40 p-8">
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Account
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-fg">
          {isES ? 'Gestioná tu licencia' : 'Manage your license'}
        </h1>
        <p className="mt-3 max-w-xl text-fg-muted">
          {isES
            ? 'Ingresá con tu email y clave de licencia para ver sitios activados, fecha de renovación y descargas.'
            : 'Sign in with your email and license key to see activated sites, renewal date, and downloads.'}
        </p>

        <form className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-fg-subtle">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="h-10 w-full rounded-md border border-border bg-bg-subtle px-3 text-sm text-fg placeholder:text-fg-subtle focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-fg-subtle">
              {isES ? 'Clave de licencia' : 'License key'}
            </label>
            <input
              type="text"
              placeholder="sk_live_..."
              className="h-10 w-full rounded-md border border-border bg-bg-subtle px-3 font-mono text-sm text-fg placeholder:text-fg-subtle focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="button"
              disabled
              className="inline-flex h-10 items-center gap-2 rounded-md bg-accent/40 px-5 text-sm font-medium text-black/60"
            >
              {isES ? 'Ingresar' : 'Sign in'}
            </button>
            <span className="ml-3 text-xs text-fg-subtle">
              {isES
                ? 'Portal de licencias próximamente.'
                : 'License portal coming soon.'}
            </span>
          </div>
        </form>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <PlaceholderCard
          icon={<KeyRound size={16} />}
          title={isES ? 'Tu plan' : 'Your plan'}
          body={isES ? 'Pro — 2 de 5 sitios activos' : 'Pro — 2 of 5 sites active'}
        />
        <PlaceholderCard
          icon={<Building2 size={16} />}
          title={isES ? 'Sitios activos' : 'Active sites'}
          body={isES ? 'italmarket.com.ar · artesanias.ar' : 'italmarket.com.ar · artesanias.ar'}
        />
        <PlaceholderCard
          icon={<Clock size={16} />}
          title={isES ? 'Renueva el' : 'Renews on'}
          body="2027-04-14"
        />
      </div>

      <div className="mt-8 rounded-lg border border-border bg-bg-subtle/60 px-5 py-4 text-sm text-fg-muted">
        {isES
          ? 'Para activar tu licencia manualmente contactanos a '
          : 'For manual license activation, contact '}
        <a
          href="mailto:hello@storemcp.io"
          className="text-accent hover:text-accent-hover"
        >
          hello@storemcp.io
        </a>
        .
      </div>
    </Section>
  );
}

function PlaceholderCard({
  icon,
  title,
  body
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-bg-card/30 p-5">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-fg-subtle">
        {icon} {title}
      </div>
      <div className="mt-2 text-sm text-fg">{body}</div>
    </div>
  );
}
