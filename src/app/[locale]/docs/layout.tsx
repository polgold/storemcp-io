import { setRequestLocale } from 'next-intl/server';
import { DocsSidebar } from '@/components/docs/DocsSidebar';
import { DocsSearch } from '@/components/docs/DocsSearch';

export default function DocsLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
        <aside className="hidden border-r border-border/60 py-10 pr-6 lg:block">
          <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
            <DocsSearch />
            <div className="mt-6">
              <DocsSidebar />
            </div>
          </div>
        </aside>
        <div className="py-10">
          <div className="lg:hidden">
            <DocsSearch />
          </div>
          <div className="mt-6 lg:mt-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
