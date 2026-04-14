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
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          href="/en"
          className="mt-8 inline-flex h-10 items-center rounded-md bg-accent px-5 text-sm font-medium text-black hover:bg-accent-hover"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
