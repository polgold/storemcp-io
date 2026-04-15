'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Package,
  ShoppingCart,
  BarChart3,
  FileText,
  Users,
  Settings
} from 'lucide-react';
import { Section, SectionHeading } from '@/components/Section';

const FEATURES = [
  {
    icon: Package,
    key: 'products',
    title: 'Products',
    desc: 'Create, update, bulk edit products and variations. Manage categories, tags, attributes and images.'
  },
  {
    icon: ShoppingCart,
    key: 'orders',
    title: 'Orders & Sales',
    desc: 'View orders, update status, add notes, process refunds. Full order lifecycle management.'
  },
  {
    icon: BarChart3,
    key: 'analytics',
    title: 'Analytics',
    desc: 'Sales reports by period, top sellers, revenue trends, stock alerts. Data for decisions.'
  },
  {
    icon: FileText,
    key: 'content',
    title: 'Content',
    desc: 'Pages, posts, media, menus, widgets. Full WordPress content management.'
  },
  {
    icon: Users,
    key: 'customers',
    title: 'Customers',
    desc: 'Browse customers, view purchase history, manage accounts and segments.'
  },
  {
    icon: Settings,
    key: 'settings',
    title: 'Settings',
    desc: 'Shipping zones, tax rates, payment gateways, SEO meta, plugins, themes — everything.'
  }
];

const FEATURES_ES: Record<string, { title: string; desc: string }> = {
  products: {
    title: 'Productos',
    desc: 'Creá, editá y actualizá productos y variaciones en bloque. Gestioná categorías, tags, atributos e imágenes.'
  },
  orders: {
    title: 'Órdenes y ventas',
    desc: 'Mirá órdenes, cambiá estados, agregá notas, procesá reembolsos. Ciclo completo de la orden.'
  },
  analytics: {
    title: 'Analytics',
    desc: 'Reportes de ventas por período, top sellers, tendencias de facturación, alertas de stock.'
  },
  content: {
    title: 'Contenido',
    desc: 'Páginas, posts, media, menús, widgets. Gestión completa de WordPress.'
  },
  customers: {
    title: 'Clientes',
    desc: 'Buscá clientes, ver historial de compras, gestionar cuentas y segmentos.'
  },
  settings: {
    title: 'Configuración',
    desc: 'Zonas de envío, impuestos, pasarelas de pago, SEO, plugins, temas — todo.'
  }
};

export function Features({ locale }: { locale: string }) {
  const t = useTranslations('features');
  const isES = locale === 'es';

  return (
    <Section id="features">
      <SectionHeading
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => {
          const label = isES ? FEATURES_ES[feature.key] : feature;
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-bg-card/40 p-6 transition hover:border-border-strong"
            >
              <div className="absolute inset-0 -z-0 bg-gradient-to-b from-accent/[0.03] to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-bg-elevated text-accent">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-fg">
                  {label.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-fg-muted">
                  {label.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
