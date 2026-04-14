export type DocLink = {
  slug: string;
  title: string;
  tier?: 'free' | 'pro' | 'agency';
  badge?: 'new';
};

export type DocSection = {
  title: string;
  slug: string;
  links: DocLink[];
};

export const docsNav: DocSection[] = [
  {
    title: 'Getting started',
    slug: 'getting-started',
    links: [
      { slug: 'getting-started/installation', title: 'Installation' },
      { slug: 'getting-started/configuration', title: 'Configuration' },
      { slug: 'getting-started/connecting-claude', title: 'Connecting Claude' },
      { slug: 'getting-started/connecting-chatgpt', title: 'Connecting ChatGPT' },
      { slug: 'getting-started/connecting-cursor', title: 'Connecting Cursor / VS Code' },
      { slug: 'getting-started/first-commands', title: 'First commands' }
    ]
  },
  {
    title: 'Tools reference',
    slug: 'tools-reference',
    links: [
      { slug: 'tools-reference/products', title: 'Products' },
      { slug: 'tools-reference/variations', title: 'Variations', tier: 'pro' },
      { slug: 'tools-reference/categories', title: 'Categories' },
      { slug: 'tools-reference/tags', title: 'Tags' },
      { slug: 'tools-reference/attributes', title: 'Attributes', tier: 'pro' },
      { slug: 'tools-reference/orders', title: 'Orders', tier: 'pro' },
      { slug: 'tools-reference/customers', title: 'Customers', tier: 'pro' },
      { slug: 'tools-reference/coupons', title: 'Coupons', tier: 'pro' },
      { slug: 'tools-reference/reports', title: 'Reports' },
      { slug: 'tools-reference/shipping', title: 'Shipping', tier: 'pro' },
      { slug: 'tools-reference/tax', title: 'Tax', tier: 'pro' },
      { slug: 'tools-reference/settings', title: 'Settings', tier: 'pro' },
      { slug: 'tools-reference/pages', title: 'Pages' },
      { slug: 'tools-reference/posts', title: 'Posts' },
      { slug: 'tools-reference/media', title: 'Media' },
      { slug: 'tools-reference/menus', title: 'Menus' },
      { slug: 'tools-reference/widgets', title: 'Widgets' },
      { slug: 'tools-reference/users', title: 'Users' },
      { slug: 'tools-reference/reviews', title: 'Reviews' },
      { slug: 'tools-reference/seo', title: 'SEO', tier: 'pro' },
      { slug: 'tools-reference/plugins', title: 'Plugins', tier: 'pro' },
      { slug: 'tools-reference/site', title: 'Site info' },
      { slug: 'tools-reference/webhooks', title: 'Webhooks', tier: 'pro' },
      { slug: 'tools-reference/refunds', title: 'Refunds', tier: 'pro' },
      { slug: 'tools-reference/system', title: 'System', tier: 'pro' }
    ]
  },
  {
    title: 'Guides',
    slug: 'guides',
    links: [
      { slug: 'guides/managing-products', title: 'Managing products' },
      { slug: 'guides/processing-orders', title: 'Processing orders' },
      { slug: 'guides/sales-reports', title: 'Sales reports' },
      { slug: 'guides/bulk-operations', title: 'Bulk operations' },
      { slug: 'guides/seo-optimization', title: 'SEO optimization' },
      { slug: 'guides/multi-site', title: 'Multi-site setup' },
      { slug: 'guides/white-label', title: 'White-label', tier: 'agency' }
    ]
  },
  {
    title: 'Admin panel',
    slug: 'admin-panel',
    links: [
      { slug: 'admin-panel/dashboard', title: 'Dashboard' },
      { slug: 'admin-panel/api-keys', title: 'API keys' },
      { slug: 'admin-panel/modules', title: 'Modules' },
      { slug: 'admin-panel/activity-log', title: 'Activity log' },
      { slug: 'admin-panel/rate-limiting', title: 'Rate limiting' },
      { slug: 'admin-panel/license', title: 'License' }
    ]
  },
  {
    title: 'Security',
    slug: 'security',
    links: [
      { slug: 'security/authentication', title: 'Authentication' },
      { slug: 'security/permissions', title: 'Permissions' },
      { slug: 'security/rate-limiting', title: 'Rate limiting' },
      { slug: 'security/best-practices', title: 'Best practices' }
    ]
  },
  {
    title: 'API',
    slug: 'api',
    links: [
      { slug: 'api/mcp-protocol', title: 'MCP protocol' },
      { slug: 'api/endpoints', title: 'Endpoints' },
      { slug: 'api/error-codes', title: 'Error codes' },
      { slug: 'api/response-format', title: 'Response format' }
    ]
  },
  {
    title: 'Troubleshooting',
    slug: 'troubleshooting',
    links: [
      { slug: 'troubleshooting/common-issues', title: 'Common issues' },
      { slug: 'troubleshooting/connection-errors', title: 'Connection errors' },
      { slug: 'troubleshooting/woocommerce-issues', title: 'WooCommerce issues' },
      { slug: 'troubleshooting/debug-mode', title: 'Debug mode' }
    ]
  }
];

export function flattenDocs(): DocLink[] {
  return docsNav.flatMap((s) => s.links);
}

export function findAdjacent(slug: string) {
  const flat = flattenDocs();
  const idx = flat.findIndex((l) => l.slug === slug);
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx !== -1 && idx < flat.length - 1 ? flat[idx + 1] : null
  };
}

export function findDocMeta(slug: string): DocLink | null {
  return flattenDocs().find((l) => l.slug === slug) ?? null;
}
