"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollRevealVariants, scrollRevealReducedVariants, SCROLL_VIEWPORT, STAGGER_DELAY, getStaggerDelay } from "@/lib/motion";

type PricingPackage = {
  id: string;
  name: string;
  priceLabel: string;
  investmentLabel: string;
  tagline: string;
  sub: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
};

const pricingPackages: PricingPackage[] = [
  {
    id: "foundation",
    name: "Foundation",
    priceLabel: "150\u00A0\u20AC",
    investmentLabel: "Offre de lancement",
    tagline: "Une base premium, rapide à déployer et conçue pour convertir.",
    sub: "Idéale pour structurer votre présence locale et capter plus d’appels qualifiés.",
    features: [
      "Page professionnelle orientée conversion",
      "Appel en un clic + WhatsApp intégré",
      "Présentation claire de vos services",
      "Parcours mobile optimisé pour générer des demandes",
      "Structure SEO locale prête à performer",
      "Formulaire de contact exploitable immédiatement",
    ],
    highlighted: false,
  },
  {
    id: "performance",
    name: "Performance",
    priceLabel: "290\u00A0\u20AC",
    investmentLabel: "Pack optimisé",
    tagline: "Le meilleur équilibre entre image premium et résultats concrets.",
    sub: "Conçu pour augmenter vos leads, vos appels entrants et vos réservations atelier.",
    features: [
      "Tout Foundation + structure renforcée",
      "Mise en page multi-sections ou multi-pages",
      "Parcours de contact optimisé conversion",
      "Mise en avant de vos services à forte intention",
      "SEO local structuré pour générer plus de demandes",
      "Hiérarchie visuelle orientée confiance",
    ],
    highlighted: true,
    badge: "Le plus choisi",
  },
  {
    id: "authority",
    name: "Authority",
    priceLabel: "450\u00A0\u20AC",
    investmentLabel: "Système avancé",
    tagline: "Une vitrine haut de gamme pour accélérer votre autorité locale.",
    sub: "Pensé pour les professionnels qui veulent une image forte et une conversion plus poussée.",
    features: [
      "Tout Performance + exécution avancée",
      "Page stratégique à fort impact commercial",
      "Mise en scène visuelle de vos résultats (avant/après)",
      "Structure de conversion plus fine",
      "Intégration des preuves de confiance (avis, cas)",
      "Finition premium et parcours fluidifié",
    ],
    highlighted: false,
  },
];

const strategicAddOn = {
  label: "Pilotage continu",
  priceLabel: "9\u00A0€/mois",
  tagline: "Optimisation continue du SEO local, de la conversion et de la qualité des leads.",
  sub: "Pour les équipes qui veulent accélérer leurs résultats mois après mois.",
  features: ["Suivi KPI", "Sprints d’optimisation", "Tests de conversion", "Support stratégique"],
};

export function PricingSection() {
  const reduced = useReducedMotion();
  const variants = reduced ? scrollRevealReducedVariants : scrollRevealVariants;

  return (
    <section
      id="offres"
      className="relative border-t border-[var(--border)] bg-[var(--bg)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32 overflow-x-hidden"
      aria-labelledby="offres-heading"
    >
      <div className="mx-auto max-w-6xl w-full min-w-0">
        <p className="section-eyebrow">Offres</p>
        <motion.h2
          id="offres-heading"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={SCROLL_VIEWPORT}
          className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl section-title-industrial"
        >
          Des systèmes web performants, conçus pour convertir
        </motion.h2>
        <div className="brand-signature-line hidden lg:block mt-4" aria-hidden />
        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={SCROLL_VIEWPORT}
          transition={{ delay: reduced ? 0 : STAGGER_DELAY }}
          className="mt-3 text-sm leading-relaxed text-[var(--text-2)] max-w-2xl"
        >
          Une infrastructure déployée rapidement et sans faille, avec un objectif clair&nbsp;: asseoir votre autorité locale et structurer l&apos;acquisition qualifiée.
        </motion.p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {pricingPackages.map((pkg, i) => (
            <motion.article
              key={pkg.id}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={SCROLL_VIEWPORT}
              transition={{ delay: reduced ? 0 : STAGGER_DELAY + getStaggerDelay(i) }}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-[var(--surface)] p-6 md:backdrop-blur-sm transition-all duration-300 will-change-transform",
                "lg:p-8",
                pkg.highlighted
                  ? "border-[var(--accent)] lg:shadow-[0_0_0_1px_var(--accent),0_20px_50px_rgba(0,0,0,0.4)] shadow-none ring-1 ring-[var(--accent)]/20"
                  : "border-[var(--border)] hover:border-[var(--border)] hover:bg-[var(--surface-2)]"
              )}
            >
              {pkg.badge && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full border border-[var(--accent)] bg-[var(--bg)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                  <Sparkles className="h-3 w-3" />
                  {pkg.badge}
                </div>
              )}

              <div className="flex flex-col flex-1">
                <h3 className="font-heading text-lg font-bold tracking-tight text-[var(--text)] sm:text-xl">{pkg.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">{pkg.investmentLabel}</p>

                <p className="mt-3 text-sm font-medium text-[var(--text-2)]">{pkg.tagline}</p>
                <p className="mt-1 text-xs text-[var(--text-2)]">{pkg.sub}</p>

                <p className="mt-4 text-2xl font-bold tabular-nums text-[var(--text)] sm:text-3xl">{pkg.priceLabel}</p>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[var(--text-2)]">
                      <Check className="h-4 w-4 shrink-0 mt-0.5 text-[var(--accent)]" aria-hidden />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={reduced ? undefined : { scale: 1.02 }}
                  whileTap={reduced ? undefined : { scale: 0.98 }}
                  className={cn(
                    "mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]",
                    pkg.highlighted
                      ? "bg-[var(--accent)] text-black hover:bg-[var(--accent-2)]"
                      : "border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)] hover:border-[var(--accent)] hover:bg-[color-mix(in_srgb,var(--accent)_8%,transparent)]"
                  )}
                >
                  Vérifier si ça vaut le coup
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={SCROLL_VIEWPORT}
          transition={{ delay: reduced ? 0 : STAGGER_DELAY * 2 }}
          className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 sm:flex sm:flex-wrap sm:items-start sm:justify-between sm:gap-6 lg:px-8"
        >
          <div className="min-w-0 flex-1">
            <p className="font-heading text-base font-semibold text-[var(--text)]">
              {strategicAddOn.label}&nbsp;: {strategicAddOn.priceLabel}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--text-2)]">{strategicAddOn.tagline}</p>
            <p className="mt-2 text-xs text-[var(--text-2)]/90">{strategicAddOn.sub}</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--text-2)] sm:mt-2">
              {strategicAddOn.features.map((f) => (
                <li key={f} className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[var(--accent)] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}