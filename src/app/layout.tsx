import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://storemcp.io'),
  title: {
    default: 'StoreMCP — AI Control Center for WordPress & WooCommerce',
    template: '%s · StoreMCP'
  },
  description:
    'The most comprehensive MCP server plugin for WordPress. Control products, orders, pages, analytics and 120+ operations from Claude, ChatGPT, or any AI assistant.',
  openGraph: {
    type: 'website',
    url: 'https://storemcp.io',
    siteName: 'StoreMCP',
    title: 'StoreMCP — AI Control Center for WordPress & WooCommerce',
    description:
      'Control products, orders, pages, analytics and 120+ operations from Claude, ChatGPT, or any AI assistant.',
    images: ['/og.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StoreMCP',
    description:
      'AI Control Center for WordPress & WooCommerce — 120+ operations exposed through MCP.',
    images: ['/og.png']
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export const viewport: Viewport = {
  themeColor: '#09090B',
  colorScheme: 'dark'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-bg font-sans text-fg antialiased">
        {children}
      </body>
    </html>
  );
}
