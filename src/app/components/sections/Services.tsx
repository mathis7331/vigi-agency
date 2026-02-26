"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, MessageCircle, Phone, Shield, Star, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  scrollRevealVariants,
  scrollRevealReducedVariants,
  SCROLL_VIEWPORT,
  STAGGER_DELAY,
} from "@/lib/motion";

const whyCards = [
  {
    icon: Phone,
    title: "Plus d'appels",
    copy: "Bouton d'appel direct sur mobile. Vos clients vous contactent en un tap, sans friction.",
  },
  {
    icon: MessageCircle,
    title: "Réponse plus rapide",
    copy: "WhatsApp intégré avec message pré-rempli. Vos clients vous contactent directement, vous répondez quand vous pouvez.",
  },
  {
    icon: MapPin,
    title: "Visibilité locale sur Google Maps",
    copy: "Optimisé pour « garage Mons », « dépannage Charleroi ». Vous apparaissez quand on vous cherche.",
  },
  {
    icon: Zap,
    title: "Site ultra rapide",
    copy: "Pages qui chargent instantanément. Google vous privilégie, vos clients restent.",
  },
  {
    icon: Star,
    title: "Preuves sociales",
    copy: "Avis clients et photos de travaux. Vos prospects se rassurent avant d'appeler.",
  },
  {
    icon: Shield,
    title: "Toujours accessible",
    copy: "Page de secours en cas de panne. Vos clients vous trouvent toujours, même en urgence.",
  },
];

export function ServicesSection() {
  const reduced = useReducedMotion();
  const variants = reduced ? scrollRevealReducedVariants : scrollRevealVariants;

  return (
    <section
      id="services"
      className="relative border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32 overflow-x-hidden"
    >
      <div className="mx-auto max-w-6xl w-full min-w-0 lg:mx-auto">
        <div className="grid gap-10 lg:grid-cols-1 lg:gap-12">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Services</p>
            <motion.h2
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={SCROLL_VIEWPORT}
              className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:tracking-tight section-title-industrial [transform:translateZ(0)]"
            >
              Pourquoi ça marche
            </motion.h2>
            <motion.p
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={SCROLL_VIEWPORT}
              transition={{ delay: reduced ? 0 : STAGGER_DELAY }}
              className="mt-4 text-sm leading-relaxed text-[var(--text-2)] lg:mt-6 lg:text-base lg:leading-relaxed max-w-2xl"
            >
              6 leviers concrets pour transformer votre trafic en appels, sans usine à gaz ni tunnel compliqué.
            </motion.p>
            <div className="brand-signature-line hidden lg:block mt-4" aria-hidden />
          </div>

          <div className="space-y-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
            {whyCards.map((card, i) => (
              <div
                key={card.title}
                className="relative"
                style={{ perspective: 1200 }}
              >
                <motion.article
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={SCROLL_VIEWPORT}
                  transition={{ delay: reduced ? 0 : Math.min(0.06 + i * STAGGER_DELAY, 0.2) }}
                  whileHover={reduced ? undefined : { y: -4 }}
                  className={cn(
                    "group relative flex gap-5 rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-5 backdrop-blur-sm transition-all duration-500 [transform:translateZ(0)]",
                    "hover:border-[var(--accent)] hover:bg-[var(--surface-2)] hover:shadow-[0_24px_60px_rgba(11,18,32,0.9)]",
                    "lg:flex-col lg:rounded-2xl lg:p-8 lg:card-premium lg:why-card-premium lg:section-depth-card"
                  )}
                >
                  <div className="why-card-corner-highlight hidden lg:block" aria-hidden />
                  <div className="absolute inset-y-4 left-0 w-[3px] rounded-full bg-[var(--surface-2)] group-hover:bg-gradient-to-b group-hover:from-[var(--accent)] group-hover:via-[var(--accent-2)] group-hover:to-[var(--accent)] transition-all duration-300" />

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={SCROLL_VIEWPORT}
                    transition={{ duration: 0.3, delay: reduced ? 0 : 0.08 + i * STAGGER_DELAY }}
                    className="relative shrink-0"
                  >
                    <div className="relative rounded-xl bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] p-3 backdrop-blur-sm lg:rounded-2xl lg:p-4 transition-all duration-500 group-hover:bg-[color-mix(in_srgb,var(--accent)_20%,transparent)] group-hover:shadow-[0_0_30px_rgba(245,165,36,0.4)] icon-hover-glow why-icon-badge">
                      <card.icon className="h-6 w-6 text-[var(--accent)] transition-transform duration-500 lg:h-7 lg:w-7" />
                    </div>
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={SCROLL_VIEWPORT}
                      transition={{ duration: 0.3, delay: reduced ? 0 : 0.1 + i * STAGGER_DELAY }}
                      className="font-heading text-base sm:text-lg font-semibold text-[var(--text)]"
                    >
                      {card.title}
                    </motion.h3>
                    <div className="mt-1.5 h-px overflow-hidden rounded-full bg-[var(--surface-2)]">
                      <div className="h-full origin-left scale-x-0 bg-gradient-to-r from-[var(--accent-2)] via-[var(--accent)] to-[var(--accent-2)] transition-transform duration-500 group-hover:scale-x-100" />
                    </div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={SCROLL_VIEWPORT}
                      transition={{ duration: 0.3, delay: reduced ? 0 : 0.12 + i * STAGGER_DELAY }}
                      className="mt-2 text-sm leading-relaxed text-[var(--text-2)]"
                    >
                      {card.copy}
                    </motion.p>
                  </div>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
