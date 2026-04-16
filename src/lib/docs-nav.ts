export type DocLink = {
  slug: string;
  title: string;
  titleEs?: string;
  tier?: 'free' | 'pro' | 'agency';
  badge?: 'new';
};

export type DocSection = {
  title: string;
  titleEs?: string;
  slug: string;
  links: DocLink[];
};

export const docsNav: DocSection[] = [
  {
    title: 'Getting started',
    titleEs: 'Primeros pasos',
    slug: 'getting-started',
    links: [
      { slug: 'getting-started/installation', title: 'Installation', titleEs: 'Instalación' },
      { slug: 'getting-started/configuration', title: 'Configuration', titleEs: 'Configuración' },
      { slug: 'getting-started/connecting-claude', title: 'Connecting Claude', titleEs: 'Conectar Claude' },
      { slug: 'getting-started/connecting-chatgpt', title: 'Connecting ChatGPT', titleEs: 'Conectar ChatGPT' },
      { slug: 'getting-started/connecting-cursor', title: 'Connecting Cursor / VS Code', titleEs: 'Conectar Cursor / VS Code' },
      { slug: 'getting-started/first-commands', title: 'First commands', titleEs: 'Primeros comandos' }
    ]
  },
  {
    title: 'Tools reference',
    titleEs: 'Referencia de tools',
    slug: 'tools-reference',
    links: [
      { slug: 'tools-reference/products', title: 'Products', titleEs: 'Productos' },
      { slug: 'tools-reference/variations', title: 'Variations', titleEs: 'Variaciones', tier: 'pro' },
      { slug: 'tools-reference/categories', title: 'Categories', titleEs: 'Categorías' },
      { slug: 'tools-reference/tags', title: 'Tags', titleEs: 'Tags' },
      { slug: 'tools-reference/attributes', title: 'Attributes', titleEs: 'Atributos', tier: 'pro' },
      { slug: 'tools-reference/orders', title: 'Orders', titleEs: 'Órdenes', tier: 'pro' },
      { slug: 'tools-reference/customers', title: 'Customers', titleEs: 'Clientes', tier: 'pro' },
      { slug: 'tools-reference/coupons', title: 'Coupons', titleEs: 'Cupones', tier: 'pro' },
      { slug: 'tools-reference/reports', title: 'Reports', titleEs: 'Reportes' },
      { slug: 'tools-reference/shipping', title: 'Shipping', titleEs: 'Envíos', tier: 'pro' },
      { slug: 'tools-reference/tax', title: 'Tax', titleEs: 'Impuestos', tier: 'pro' },
      { slug: 'tools-reference/settings', title: 'Settings', titleEs: 'Configuración', tier: 'pro' },
      { slug: 'tools-reference/pages', title: 'Pages', titleEs: 'Páginas' },
      { slug: 'tools-reference/posts', title: 'Posts', titleEs: 'Posts' },
      { slug: 'tools-reference/media', title: 'Media', titleEs: 'Media' },
      { slug: 'tools-reference/menus', title: 'Menus', titleEs: 'Menús' },
      { slug: 'tools-reference/widgets', title: 'Widgets', titleEs: 'Widgets' },
      { slug: 'tools-reference/users', title: 'Users', titleEs: 'Usuarios' },
      { slug: 'tools-reference/reviews', title: 'Reviews', titleEs: 'Reseñas' },
      { slug: 'tools-reference/seo', title: 'SEO', titleEs: 'SEO', tier: 'pro' },
      { slug: 'tools-reference/plugins', title: 'Plugins', titleEs: 'Plugins', tier: 'pro' },
      { slug: 'tools-reference/site', title: 'Site info', titleEs: 'Info del sitio' },
      { slug: 'tools-reference/webhooks', title: 'Webhooks', titleEs: 'Webhooks', tier: 'pro' },
      { slug: 'tools-reference/refunds', title: 'Refunds', titleEs: 'Reembolsos', tier: 'pro' },
      { slug: 'tools-reference/system', title: 'System', titleEs: 'Sistema', tier: 'pro' }
    ]
  },
  {
    title: 'Guides',
    titleEs: 'Guías',
    slug: 'guides',
    links: [
      { slug: 'guides/managing-products', title: 'Managing products', titleEs: 'Gestión de productos' },
      { slug: 'guides/processing-orders', title: 'Processing orders', titleEs: 'Procesar órdenes' },
      { slug: 'guides/sales-reports', title: 'Sales reports', titleEs: 'Reportes de ventas' },
      { slug: 'guides/bulk-operations', title: 'Bulk operations', titleEs: 'Operaciones masivas' },
      { slug: 'guides/seo-optimization', title: 'SEO optimization', titleEs: 'Optimización SEO' },
      { slug: 'guides/multi-site', title: 'Multi-site setup', titleEs: 'Configuración multi-sitio' },
      { slug: 'guides/white-label', title: 'White-label', titleEs: 'White-label', tier: 'agency' }
    ]
  },
  {
    title: 'Admin panel',
    titleEs: 'Panel de admin',
    slug: 'admin-panel',
    links: [
      { slug: 'admin-panel/dashboard', title: 'Dashboard', titleEs: 'Dashboard' },
      { slug: 'admin-panel/api-keys', title: 'API keys', titleEs: 'API keys' },
      { slug: 'admin-panel/modules', title: 'Modules', titleEs: 'Módulos' },
      { slug: 'admin-panel/activity-log', title: 'Activity log', titleEs: 'Log de actividad' },
      { slug: 'admin-panel/rate-limiting', title: 'Rate limiting', titleEs: 'Rate limiting' },
      { slug: 'admin-panel/license', title: 'License', titleEs: 'Licencia' }
    ]
  },
  {
    title: 'Security',
    titleEs: 'Seguridad',
    slug: 'security',
    links: [
      { slug: 'security/authentication', title: 'Authentication', titleEs: 'Autenticación' },
      { slug: 'security/permissions', title: 'Permissions', titleEs: 'Permisos' },
      { slug: 'security/rate-limiting', title: 'Rate limiting', titleEs: 'Rate limiting' },
      { slug: 'security/best-practices', title: 'Best practices', titleEs: 'Buenas prácticas' }
    ]
  },
  {
    title: 'API',
    titleEs: 'API',
    slug: 'api',
    links: [
      { slug: 'api/mcp-protocol', title: 'MCP protocol', titleEs: 'Protocolo MCP' },
      { slug: 'api/endpoints', title: 'Endpoints', titleEs: 'Endpoints' },
      { slug: 'api/error-codes', title: 'Error codes', titleEs: 'Códigos de error' },
      { slug: 'api/response-format', title: 'Response format', titleEs: 'Formato de respuesta' }
    ]
  },
  {
    title: 'Troubleshooting',
    titleEs: 'Solución de problemas',
    slug: 'troubleshooting',
    links: [
      { slug: 'troubleshooting/common-issues', title: 'Common issues', titleEs: 'Problemas comunes' },
      { slug: 'troubleshooting/connection-errors', title: 'Connection errors', titleEs: 'Errores de conexión' },
      { slug: 'troubleshooting/woocommerce-issues', title: 'WooCommerce issues', titleEs: 'Problemas de WooCommerce' },
      { slug: 'troubleshooting/debug-mode', title: 'Debug mode', titleEs: 'Modo debug' }
    ]
  }
];

export function getDocTitle(item: DocLink | DocSection, locale: string): string {
  return locale === 'es' && item.titleEs ? item.titleEs : item.title;
}

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
