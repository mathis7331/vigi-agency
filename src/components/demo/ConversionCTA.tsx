"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, FileText } from "lucide-react";

type ConversionCTAProps = {
  phoneE164: string;
  phoneDisplay: string;
  whatsappE164: string;
  whatsappMessage: string;
  /** Override section title (e.g. "Besoin d'un devis carrosserie ?") */
  title?: string;
  /** Override description */
  description?: string;
  /** Primary button label + href (e.g. Demander un devis -> /#contact) */
  primaryLabel?: string;
  primaryHref?: string;
  /** Secondary button label + href (e.g. Appeler -> tel:) */
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function ConversionCTA({
  phoneE164,
  phoneDisplay,
  whatsappE164,
  whatsappMessage,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: ConversionCTAProps) {
  const useCustom =
    primaryLabel != null &&
    primaryHref != null &&
    secondaryLabel != null &&
    secondaryHref != null;

  const sectionTitle = title ?? "Besoin d'un RDV ?";
  const sectionDesc =
    description ??
    "Appelez maintenant, ou envoyez un message WhatsApp. Réponse rapide.";
  const mainLabel = useCustom ? primaryLabel : `Appeler ${phoneDisplay}`;
  const mainHref = useCustom ? primaryHref : `tel:${phoneE164}`;
  const mainIcon = useCustom ? FileText : Phone;
  const subLabel = useCustom ? secondaryLabel : "WhatsApp";
  const subHref = useCustom
    ? secondaryHref
    : `https://wa.me/${whatsappE164}?text=${encodeURIComponent(whatsappMessage)}`;
  const subIsWhatsApp = subHref.startsWith("https://wa.me");
  const subExternal = !useCustom || subIsWhatsApp;
  const SubIcon = useCustom && !subIsWhatsApp ? Phone : MessageCircle;

  const MainIcon = mainIcon;

  return (
    <section className="border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 overflow-x-hidden">
      <div className="mx-auto max-w-3xl w-full min-w-0 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
            {sectionTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">
            {sectionDesc}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={mainHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black shadow-[0_18px_50px_rgba(245,158,11,0.25)] transition hover:translate-y-[-1px] hover:shadow-[0_22px_60px_rgba(245,158,11,0.33)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              <MainIcon className="h-4 w-4" />
              {mainLabel}
            </a>
            <a
              href={subHref}
              {...(subExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              <SubIcon className="h-4 w-4" />
              {subLabel}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
