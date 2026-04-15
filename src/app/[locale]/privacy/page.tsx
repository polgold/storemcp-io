import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta.privacy' });
  return { title: t('title'), description: t('description') };
}

export default function PrivacyPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const isES = locale === 'es';

  if (isES) {
    return (
      <Section className="max-w-3xl">
        <article className="prose-docs">
          <h1>Política de Privacidad</h1>
          <p className="text-fg-muted">Última actualización: 14 de abril de 2026</p>

          <blockquote>
            El plugin StoreMCP no envía datos a servidores externos. Todas las
            operaciones ocurren entre tu sitio WordPress y tu cliente de IA —
            sin proxy, sin phone-home.
          </blockquote>

          <h2>Quiénes somos</h2>
          <p>
            StoreMCP es operado por <strong>ExitMedia LLC</strong>. Esta
            política cubre el sitio <code>storemcp.io</code> y el plugin
            StoreMCP para WordPress.
          </p>

          <h2>Qué recolecta el plugin</h2>
          <p>
            El plugin StoreMCP se ejecuta totalmente dentro de tu sitio
            WordPress. No transmite datos de productos, clientes ni órdenes a
            ningún servidor de storemcp.io. La única request saliente que hace
            el plugin es para validar tu licencia Pro/Agency (solo email + key
            de licencia, durante la activación y en revisiones periódicas).
          </p>

          <h2>Qué recolecta el sitio web</h2>
          <p>Cuando navegás <code>storemcp.io</code>, podemos recolectar:</p>
          <ul>
            <li>Analytics básicos (page views anónimos, sin tracking cross-site)</li>
            <li>Cookies necesarias para preferencia de idioma y tema</li>
            <li>Envíos de formularios (soporte, newsletter) — solo si los enviás</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            Usamos solo cookies estrictamente necesarias para el estado de
            sesión. No usamos cookies publicitarias. No compartimos información
            con redes publicitarias de terceros.
          </p>

          <h2>Terceros</h2>
          <p>En lo que corresponda, usamos:</p>
          <ul>
            <li>Vercel — hosting</li>
            <li>Stripe o Mercado Pago — procesamiento de pagos (compras Pro/Agency)</li>
            <li>Resend — emails transaccionales</li>
          </ul>
          <p>
            Ninguno de estos proveedores accede a los datos de tu sitio
            WordPress — solo procesan lo que enviás desde{' '}
            <code>storemcp.io</code>.
          </p>

          <h2>Tus derechos</h2>
          <p>
            Tenés derecho a acceder, corregir, exportar o borrar cualquier dato
            personal que tengamos sobre vos. Escribinos a{' '}
            <a href="mailto:privacy@storemcp.io">privacy@storemcp.io</a> y
            respondemos dentro de 30 días.
          </p>

          <h2>Retención de datos</h2>
          <p>
            Los registros de compra se conservan por 7 años (cumplimiento
            fiscal). Los emails de soporte se guardan por 2 años. Los
            suscriptores de newsletter pueden cancelar suscripción en cualquier
            momento desde el pie de cada email.
          </p>

          <h2>Cambios</h2>
          <p>
            Podemos actualizar esta política. Los cambios materiales se
            anunciarán en el changelog y, si corresponde, se enviarán por email
            a los titulares de licencia.
          </p>

          <h2>Contacto</h2>
          <p>
            ExitMedia LLC ·{' '}
            <a href="mailto:privacy@storemcp.io">privacy@storemcp.io</a>
          </p>
        </article>
      </Section>
    );
  }

  return (
    <Section className="max-w-3xl">
      <article className="prose-docs">
        <h1>Privacy Policy</h1>
        <p className="text-fg-muted">Last updated: April 14, 2026</p>

        <blockquote>
          The StoreMCP plugin does not send any data to external servers. All
          operations happen between your WordPress site and your AI client —
          no proxy, no phone-home.
        </blockquote>

        <h2>Who we are</h2>
        <p>
          StoreMCP is operated by <strong>ExitMedia LLC</strong>. This policy
          covers the website <code>storemcp.io</code> and the StoreMCP WordPress
          plugin.
        </p>

        <h2>What the plugin collects</h2>
        <p>
          The StoreMCP plugin runs entirely on your WordPress site. It does not
          transmit product data, customer data, or order data to any
          storemcp.io server. The only outbound request the plugin makes is to
          validate your Pro/Agency license key (email + license key only,
          during activation and periodic re-check).
        </p>

        <h2>What the website collects</h2>
        <p>When you browse <code>storemcp.io</code>, we may collect:</p>
        <ul>
          <li>Basic analytics (anonymized page views, no cross-site tracking)</li>
          <li>Cookies necessary for language preference and theme</li>
          <li>Form submissions (support, newsletter) — only if you submit them</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          We use strictly-necessary cookies for session state. We do not use
          advertising cookies. We do not share any information with third-party
          ad networks.
        </p>

        <h2>Third parties</h2>
        <p>Where applicable, we use:</p>
        <ul>
          <li>Vercel — hosting</li>
          <li>Stripe or Mercado Pago — payment processing (Pro/Agency purchases)</li>
          <li>Resend — transactional email</li>
        </ul>
        <p>
          None of these providers see the data inside your WordPress site — they
          only process what you submit on <code>storemcp.io</code>.
        </p>

        <h2>Your rights</h2>
        <p>
          You have the right to access, correct, export, or delete any
          personal data we hold about you. Email{' '}
          <a href="mailto:privacy@storemcp.io">privacy@storemcp.io</a> and we
          will respond within 30 days.
        </p>

        <h2>Data retention</h2>
        <p>
          Purchase records are retained for 7 years (tax compliance). Support
          emails are retained for 2 years. Newsletter subscribers can
          unsubscribe at any time from the footer of any email.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy. Material changes will be announced on the
          changelog page and, if appropriate, emailed to license holders.
        </p>

        <h2>Contact</h2>
        <p>
          ExitMedia LLC · <a href="mailto:privacy@storemcp.io">privacy@storemcp.io</a>
        </p>
      </article>
    </Section>
  );
}
