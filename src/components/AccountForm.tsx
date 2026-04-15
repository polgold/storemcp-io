'use client';

import { useState } from 'react';
import { KeyRound, Building2, Clock, X, CheckCircle2, AlertCircle } from 'lucide-react';
import type { LicenseValidation } from '@/lib/lemonsqueezy';

type Props = { isES: boolean };

export function AccountForm({ isES }: Props) {
  const [licenseKey, setLicenseKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<LicenseValidation | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch('/api/license/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ license_key: licenseKey })
      });
      const json: LicenseValidation = await res.json();
      if (!json.valid) {
        setError(
          json.error ||
            (isES ? 'Licencia no válida.' : 'License not valid.')
        );
      } else {
        setData(json);
      }
    } catch {
      setError(isES ? 'Error de red. Intentá de nuevo.' : 'Network error. Try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleDeactivate(instanceId: string) {
    if (!data?.license_key) return;
    const confirmed = confirm(
      isES
        ? '¿Seguro que querés desactivar este sitio? Vas a liberar un slot.'
        : 'Deactivate this site? This will free up a slot.'
    );
    if (!confirmed) return;

    const res = await fetch('/api/license/deactivate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        license_key: data.license_key.key,
        instance_id: instanceId
      })
    });
    const json = await res.json();
    if (json.deactivated) {
      const refresh = await fetch('/api/license/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ license_key: data.license_key.key })
      });
      setData(await refresh.json());
    } else {
      alert(json.error || (isES ? 'No se pudo desactivar.' : 'Could not deactivate.'));
    }
  }

  if (data?.valid && data.license_key && data.meta) {
    return (
      <LicenseDetails
        isES={isES}
        data={data}
        onDeactivate={handleDeactivate}
        onSignOut={() => {
          setData(null);
          setLicenseKey('');
        }}
      />
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-bg-card/40 p-8">
      <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        Account
      </div>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-fg">
        {isES ? 'Gestioná tu licencia' : 'Manage your license'}
      </h1>
      <p className="mt-3 max-w-xl text-fg-muted">
        {isES
          ? 'Pegá la clave de licencia que te enviamos por email después de tu compra.'
          : 'Paste the license key we sent you by email after your purchase.'}
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-fg-subtle">
            {isES ? 'Clave de licencia' : 'License key'}
          </label>
          <input
            type="text"
            required
            value={licenseKey}
            onChange={(e) => setLicenseKey(e.target.value)}
            placeholder="XXXX-XXXX-XXXX-XXXX"
            className="h-10 w-full rounded-md border border-border bg-bg-subtle px-3 font-mono text-sm text-fg placeholder:text-fg-subtle focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading || licenseKey.length < 8}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-black shadow-glow transition hover:bg-accent-hover disabled:bg-accent/40 disabled:text-black/60 disabled:shadow-none"
          >
            {loading
              ? isES
                ? 'Validando…'
                : 'Validating…'
              : isES
              ? 'Ingresar'
              : 'Sign in'}
          </button>
          {error && (
            <div className="flex items-center gap-1.5 text-sm text-red-400">
              <AlertCircle size={14} /> {error}
            </div>
          )}
        </div>
      </form>

      <div className="mt-8 rounded-lg border border-border bg-bg-subtle/60 px-5 py-4 text-sm text-fg-muted">
        {isES
          ? '¿No tenés licencia todavía? '
          : "Don't have a license yet? "}
        <a href="/pricing" className="text-accent hover:text-accent-hover">
          {isES ? 'Ver planes' : 'See pricing'}
        </a>
        . {isES ? '¿Problemas? ' : 'Problems? '}
        <a
          href="mailto:hello@storemcp.io"
          className="text-accent hover:text-accent-hover"
        >
          hello@storemcp.io
        </a>
      </div>
    </div>
  );
}

function LicenseDetails({
  isES,
  data,
  onDeactivate,
  onSignOut
}: {
  isES: boolean;
  data: LicenseValidation;
  onDeactivate: (instanceId: string) => void;
  onSignOut: () => void;
}) {
  const lk = data.license_key!;
  const meta = data.meta!;
  const instances = data.instances || [];
  const used = lk.activation_usage;
  const limit = lk.activation_limit;
  const limitLabel = limit === null ? '∞' : String(limit);

  const expiresLabel = lk.expires_at
    ? new Date(lk.expires_at).toLocaleDateString(isES ? 'es-AR' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : isES
    ? 'Sin vencimiento'
    : 'No expiration';

  const statusColor =
    lk.status === 'active'
      ? 'text-green-400'
      : lk.status === 'expired'
      ? 'text-amber-400'
      : 'text-red-400';

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-border bg-bg-card/40 p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {meta.product_name}
            </div>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-fg">
              {meta.variant_name}
            </h1>
            <p className="mt-2 text-sm text-fg-muted">{meta.customer_email}</p>
          </div>
          <button
            onClick={onSignOut}
            className="text-xs text-fg-subtle hover:text-fg"
          >
            {isES ? 'Salir' : 'Sign out'}
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <StatCard
            icon={<KeyRound size={16} />}
            title={isES ? 'Estado' : 'Status'}
          >
            <span className={`flex items-center gap-1.5 ${statusColor}`}>
              <CheckCircle2 size={14} /> {lk.status.toUpperCase()}
            </span>
          </StatCard>
          <StatCard
            icon={<Building2 size={16} />}
            title={isES ? 'Sitios activados' : 'Activated sites'}
          >
            <span className="text-fg">
              {used} / {limitLabel}
            </span>
          </StatCard>
          <StatCard
            icon={<Clock size={16} />}
            title={isES ? 'Vence' : 'Expires'}
          >
            <span className="text-fg">{expiresLabel}</span>
          </StatCard>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-bg-card/40 p-8">
        <h2 className="text-lg font-semibold text-fg">
          {isES ? 'Sitios activos' : 'Active sites'}
        </h2>
        <p className="mt-1 text-sm text-fg-muted">
          {isES
            ? 'Cada activación corresponde a una instalación del plugin StoreMCP.'
            : 'Each activation is one StoreMCP plugin installation.'}
        </p>

        {instances.length === 0 ? (
          <div className="mt-6 rounded-md border border-dashed border-border bg-bg-subtle/40 px-4 py-6 text-center text-sm text-fg-muted">
            {isES
              ? 'Todavía no tenés sitios activados. Instalá el plugin en WordPress y pegá esta licencia.'
              : 'No sites activated yet. Install the plugin in WordPress and paste this license.'}
          </div>
        ) : (
          <ul className="mt-5 divide-y divide-border rounded-md border border-border">
            {instances.map((inst) => (
              <li
                key={inst.id}
                className="flex items-center justify-between px-4 py-3 text-sm"
              >
                <div className="min-w-0">
                  <div className="truncate font-medium text-fg">{inst.name}</div>
                  <div className="mt-0.5 text-xs text-fg-subtle">
                    {isES ? 'Activado' : 'Activated'}{' '}
                    {new Date(inst.created_at).toLocaleDateString(
                      isES ? 'es-AR' : 'en-US'
                    )}
                  </div>
                </div>
                <button
                  onClick={() => onDeactivate(inst.id)}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs text-fg-muted hover:border-red-400/40 hover:text-red-400"
                >
                  <X size={12} />
                  {isES ? 'Desactivar' : 'Deactivate'}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="rounded-lg border border-border bg-bg-subtle/60 px-5 py-4 text-sm text-fg-muted">
        {isES
          ? 'Para cambiar tarjeta, facturación o cancelar, usá el portal de Lemon Squeezy enviado por email. ¿Dudas? '
          : 'To change card, billing, or cancel, use the Lemon Squeezy portal link sent by email. Questions? '}
        <a
          href="mailto:hello@storemcp.io"
          className="text-accent hover:text-accent-hover"
        >
          hello@storemcp.io
        </a>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  title,
  children
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-bg-card/30 p-5">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-fg-subtle">
        {icon} {title}
      </div>
      <div className="mt-2 text-sm font-medium">{children}</div>
    </div>
  );
}
