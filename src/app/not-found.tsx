import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg">
      <div className="text-center">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          404
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-fg">
          Page not found
        </h1>
        <p className="mt-3 text-fg-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          <br />
          <span className="text-fg-subtle">
            La página que buscás no existe o fue movida.
          </span>
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/en"
            className="inline-flex h-10 items-center rounded-md bg-accent px-5 text-sm font-medium text-black hover:bg-accent-hover"
          >
            Go home
          </Link>
          <Link
            href="/es"
            className="inline-flex h-10 items-center rounded-md border border-border bg-bg-card/40 px-5 text-sm font-medium text-fg hover:border-border-strong"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
