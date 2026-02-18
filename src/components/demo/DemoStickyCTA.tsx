"use client";

import { Phone, MessageCircle, FileText } from "lucide-react";
import { motion } from "framer-motion";

type DemoStickyCTAProps = {
  phoneE164: string;
  phoneDisplay: string;
  whatsappE164: string;
  whatsappMessage: string;
  /** Override left button (e.g. "Demander un devis" -> /#contact) */
  primaryLabel?: string;
  primaryHref?: string;
  /** Override right button (default: Appeler or WhatsApp) */
  secondaryLabel?: string;
  secondaryHref?: string;
  /** When true, primary = devis link, secondary = tel (used for carrosserie) */
  variant?: "call-whatsapp" | "devis-call";
};

export function DemoStickyCTA({
  phoneE164,
  phoneDisplay,
  whatsappE164,
  whatsappMessage,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant,
}: DemoStickyCTAProps) {
  const useDevisCall =
    variant === "devis-call" || (primaryHref != null && primaryLabel != null);

  const leftLabel = useDevisCall ? (primaryLabel ?? "Demander un devis") : "Appeler";
  const leftHref = useDevisCall ? (primaryHref ?? "#contact") : `tel:${phoneE164}`;
  const rightLabel = useDevisCall ? (secondaryLabel ?? "Appeler") : "WhatsApp";
  const rightHref = useDevisCall
    ? (secondaryHref ?? `tel:${phoneE164}`)
    : `https://wa.me/${whatsappE164}?text=${encodeURIComponent(whatsappMessage)}`;
  const rightIsWhatsApp = rightHref.startsWith("https://wa.me");
  const rightExternal = !useDevisCall || rightIsWhatsApp;
  const RightIcon = rightIsWhatsApp ? MessageCircle : (useDevisCall ? Phone : MessageCircle);
  const LeftIcon = useDevisCall && primaryLabel !== "Appeler" ? FileText : Phone;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 overflow-x-hidden px-3 pt-3 md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-md w-full min-w-0 flex-nowrap items-center gap-2 rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] px-3 py-2.5 shadow-[0_24px_70px_rgba(0,0,0,0.9)] [backdrop-filter:blur(12px)] [-webkit-backdrop-filter:blur(12px)]">
        <motion.a
          href={leftHref}
          whileTap={{ scale: 0.96 }}
          className="min-w-0 flex-1 shrink rounded-xl bg-[var(--accent)] px-3 py-3 text-center text-sm font-semibold text-black outline-none transition hover:bg-[var(--accent-2)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          aria-label={leftLabel}
        >
          <span className="flex items-center justify-center gap-2 whitespace-nowrap">
            <LeftIcon className="h-4 w-4" />
            <span className="truncate">{leftLabel}</span>
          </span>
        </motion.a>
        <motion.a
          href={rightHref}
          {...(rightExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          whileTap={{ scale: 0.96 }}
          className="shrink-0 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-3 py-3 text-sm font-medium text-[var(--text)] outline-none transition hover:border-[var(--accent)] hover:bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          aria-label={rightLabel}
        >
          <span className="flex items-center gap-2 whitespace-nowrap">
            <RightIcon className="h-4 w-4" />
            <span>{rightLabel}</span>
          </span>
        </motion.a>
      </div>
    </div>
  );
}
