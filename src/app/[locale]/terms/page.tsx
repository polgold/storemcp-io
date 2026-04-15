import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta.terms' });
  return { title: t('title'), description: t('description') };
}

export default function TermsPage({
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
          <h1>Términos de Servicio</h1>
          <p className="text-fg-muted">Última actualización: 14 de abril de 2026</p>

          <h2>1. Aceptación</h2>
          <p>
            Al instalar, activar o usar StoreMCP, aceptás estos términos. Si no
            estás de acuerdo, no uses el plugin.
          </p>

          <h2>2. Licencia</h2>
          <p>
            La versión free de StoreMCP se distribuye bajo la licencia GPL v2 y
            está disponible en <code>wordpress.org</code>. Las versiones Pro y
            Agency requieren una licencia paga, válida por el período
            contratado, y pueden usarse en la cantidad de sitios especificada
            al momento de la compra.
          </p>

          <h2>3. Uso aceptable</h2>
          <p>No podés usar StoreMCP para:</p>
          <ul>
            <li>Atacar, sondear o sobrecargar sitios WordPress de terceros</li>
            <li>Evadir autenticación en sitios que no te pertenecen</li>
            <li>Violar cualquier ley aplicable en tu jurisdicción</li>
            <li>Revender o redistribuir builds Pro/Agency sin licencia Agency</li>
          </ul>

          <h2>4. Reembolsos</h2>
          <p>
            Ofrecemos garantía de devolución por 14 días en compras nuevas de
            Pro o Agency. Las renovaciones no son reembolsables después de 14
            días de la fecha de renovación.
          </p>

          <h2>5. Soporte</h2>
          <p>
            Usuarios free reciben soporte a través del foro de wordpress.org e
            issues en GitHub. Usuarios Pro obtienen soporte prioritario por
            email. Usuarios Agency obtienen un SLA de 24 horas. No garantizamos
            tiempos de respuesta en foros públicos.
          </p>

          <h2>6. Descargo de garantía</h2>
          <p>
            StoreMCP se entrega "tal cual", sin garantía de ningún tipo. No
            garantizamos su idoneidad para un propósito particular. Sos
            responsable de mantener backups de tu sitio WordPress.
          </p>

          <h2>7. Limitación de responsabilidad</h2>
          <p>
            La responsabilidad de ExitMedia LLC se limita al monto pagado por
            el período de licencia vigente. No somos responsables por daños
            indirectos, consecuentes o incidentales.
          </p>

          <h2>8. Uso de IA</h2>
          <p>
            StoreMCP expone tools a los clientes de IA que configures. Sos
            responsable de las salidas de esos sistemas de IA, incluyendo
            cualquier escritura que ejecuten sobre tu sitio WordPress.
            Recomendamos fuertemente usar API keys con mínimo privilegio y
            previews dry-run para operaciones destructivas.
          </p>

          <h2>9. Cambios</h2>
          <p>
            Podemos actualizar estos términos. Si los cambios son materiales,
            avisaremos a los titulares de licencia por email con al menos 30
            días de anticipación.
          </p>

          <h2>10. Contacto</h2>
          <p>
            ExitMedia LLC · <a href="mailto:hello@storemcp.io">hello@storemcp.io</a>
          </p>
        </article>
      </Section>
    );
  }

  return (
    <Section className="max-w-3xl">
      <article className="prose-docs">
        <h1>Terms of Service</h1>
        <p className="text-fg-muted">Last updated: April 14, 2026</p>

        <h2>1. Acceptance</h2>
        <p>
          By installing, activating, or using StoreMCP, you agree to these
          terms. If you don't agree, don't use the plugin.
        </p>

        <h2>2. License</h2>
        <p>
          The free tier of StoreMCP is released under the GPL v2 license and
          available at <code>wordpress.org</code>. The Pro and Agency tiers
          require a paid license, valid for the term purchased, and may be
          used on the number of sites specified at purchase.
        </p>

        <h2>3. Acceptable use</h2>
        <p>
          You may not use StoreMCP to:
        </p>
        <ul>
          <li>Attack, probe, or overload third-party WordPress sites</li>
          <li>Bypass authentication on sites you do not own or operate</li>
          <li>Violate any applicable law in your jurisdiction</li>
          <li>Resell or redistribute Pro/Agency builds without an Agency license</li>
        </ul>

        <h2>4. Refunds</h2>
        <p>
          We offer a 14-day money-back guarantee on new Pro or Agency
          purchases. Renewals are not refundable after 14 days of the renewal
          date.
        </p>

        <h2>5. Support</h2>
        <p>
          Free users are supported via the wordpress.org forum and GitHub
          issues. Pro users get priority email. Agency users get a 24-hour SLA.
          We do not guarantee response times on public forums.
        </p>

        <h2>6. Warranty disclaimer</h2>
        <p>
          StoreMCP is provided "as is", without warranty of any kind. We make
          no guarantees of fitness for a particular purpose. You are
          responsible for maintaining backups of your WordPress site.
        </p>

        <h2>7. Limitation of liability</h2>
        <p>
          ExitMedia LLC's liability is limited to the amount you paid for your
          current license term. We are not liable for indirect, consequential,
          or incidental damages.
        </p>

        <h2>8. AI usage</h2>
        <p>
          StoreMCP exposes tools to AI clients you configure. You are
          responsible for the outputs of those AI systems, including any
          writes they perform on your WordPress site. We strongly recommend
          least-privilege API keys and dry-run previews for destructive
          operations.
        </p>

        <h2>9. Changes</h2>
        <p>
          We may update these terms. If changes are material, we'll notify
          license holders by email at least 30 days in advance.
        </p>

        <h2>10. Contact</h2>
        <p>
          ExitMedia LLC · <a href="mailto:hello@storemcp.io">hello@storemcp.io</a>
        </p>
      </article>
    </Section>
  );
}
