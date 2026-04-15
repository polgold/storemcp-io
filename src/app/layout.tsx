import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

const SITE_URL = 'https://storemcp.io';
const DEFAULT_TITLE =
  'StoreMCP — AI Control Center for WordPress & WooCommerce';
const DEFAULT_DESCRIPTION =
  'The most comprehensive MCP server plugin for WordPress. Control products, orders, pages, analytics and 120+ operations from Claude, ChatGPT, or any AI assistant.';
const DEFAULT_OG_IMAGE = {
  url: '/og.png',
  width: 1200,
  height: 630,
  alt: DEFAULT_TITLE,
  type: 'image/png'
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s · StoreMCP'
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: 'StoreMCP',
  keywords: [
    'WordPress',
    'WooCommerce',
    'MCP',
    'Model Context Protocol',
    'Claude',
    'ChatGPT',
    'AI',
    'AI agents',
    'headless commerce'
  ],
  authors: [{ name: 'ExitMedia LLC', url: SITE_URL }],
  creator: 'ExitMedia LLC',
  publisher: 'ExitMedia LLC',
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      es: '/es'
    }
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'StoreMCP',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: 'en_US',
    alternateLocale: ['es_ES', 'es_AR'],
    images: [DEFAULT_OG_IMAGE]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@storemcp',
    creator: '@storemcp',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE]
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/icon-256x256.png', sizes: '256x256', type: 'image/png' }
    ],
    apple: '/assets/icon-256x256.png'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
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
