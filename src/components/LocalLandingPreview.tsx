"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  getMetierById,
  getZoneById,
  getCityById,
  getIntro,
  getContexte,
  getContactHref,
} from "@/lib/local-landing-data";
import { cn } from "@/lib/utils";

const contentTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
};

interface LocalLandingPreviewProps {
  metierId: string;
  zoneId: string;
  villeId: string;
  /** If provided, "Retour à l'accueil" links here; otherwise scrolls to top. */
  backHref?: string;
  /** Show the "Aperçu de votre page locale (générée)" line above content. */
  showPreviewLabel?: boolean;
  /** Use compact layout (e.g. on homepage). */
  compact?: boolean;
}

export function LocalLandingPreview({
  metierId,
  zoneId,
  villeId,
  backHref = "#",
  showPreviewLabel = true,
  compact = true,
}: LocalLandingPreviewProps) {
  const metier = getMetierById(metierId);
  const zone = getZoneById(zoneId);
  const city = villeId ? getCityById(villeId) : null;

  if (!metier || !zone) {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-sm text-[var(--text-2)]">
        Sélectionnez un métier et une zone pour afficher l’aperçu.
      </div>
    );
  }

  const intro = getIntro(metier, zone, city ?? null);
  const contexte = getContexte(metier, zone, city ?? null);
  const h1Text = city
    ? `Création de site web pour ${metier.label.toLowerCase()} à ${city.label}`
    : `Création de site web pour ${metier.label.toLowerCase()} dans ${zone.label}`;

  return (
    <motion.div
      key={`${metierId}-${zoneId}-${villeId}`}
      initial={contentTransition.initial}
      animate={contentTransition.animate}
      transition={contentTransition.transition}
      className={cn(
        "rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_95%,transparent)] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-sm",
        "md:border-[var(--border)] md:p-6",
        !compact && "md:p-8"
      )}
    >
      <div className="mb-3 h-px w-12 rounded-full bg-[var(--accent)] md:mb-4" aria-hidden />
      {showPreviewLabel && (
        <p className="mb-4 text-[11px] font-medium uppercase tracking-wider text-[var(--text-2)] md:text-xs">
          Aperçu de votre page locale (générée)
        </p>
      )}

      <h2 className="font-heading text-xl font-bold tracking-tight text-[var(--text)] md:text-2xl">
        {h1Text}
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-2)] md:mt-5">
        {intro}
      </p>

      <section className="mt-6">
        <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-[var(--text)]">
          Contexte : {metier.label.toLowerCase()} {city ? `à ${city.label}` : `dans ${zone.label}`}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-2)]">
          {contexte}
        </p>
      </section>

      <section className="mt-6">
        <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-[var(--text)]">
          Ce que vous gagnez
        </h3>
        <ul className="mt-3 space-y-2">
          {metier.benefits.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-2)]">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6" aria-labelledby="faq-heading">
        <h3 id="faq-heading" className="font-heading text-sm font-semibold uppercase tracking-wider text-[var(--text)]">
          Questions fréquentes
        </h3>
        {/* Desktop: plain list */}
        <dl className="mt-3 hidden space-y-4 md:block">
          {metier.faq.map((item, i) => (
            <div key={i}>
              <dt className="font-medium text-[var(--text)]">{item.q}</dt>
              <dd className="mt-1 text-sm text-[var(--text-2)]">{item.a}</dd>
            </div>
          ))}
        </dl>
        {/* Mobile: accordion */}
        <div className="mt-3 space-y-2 md:hidden">
          {metier.faq.map((item, i) => (
            <details key={i} className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)]/50">
              <summary className="cursor-pointer list-none py-2.5 px-3 text-sm font-medium text-[var(--text)]">
                {item.q}
              </summary>
              <p className="border-t border-[var(--border)] px-3 pb-3 pt-2 text-sm text-[var(--text-2)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>



      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href={getContactHref(metierId, zoneId, city?.slug ?? getCityById(villeId)?.slug ?? villeId.toLowerCase())}
          className="inline-flex items-center rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[var(--accent-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
        >
          Parler d’un projet
        </Link>
      </div>

      <p className="mt-6 text-center text-sm text-[var(--text-2)]">
        {backHref === "#" ? (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          >
            ← Retour à l’accueil
          </button>
        ) : (
          <Link href={backHref} className="text-[var(--accent)] hover:underline">
            ← Retour à l’accueil
          </Link>
        )}
      </p>
    </motion.div>
  );
}
