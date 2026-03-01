"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Laptop, Phone, ShieldCheck } from "lucide-react";
import {
    scrollRevealVariants,
    scrollRevealReducedVariants,
    SCROLL_VIEWPORT,
    STAGGER_DELAY,
    getStaggerDelay,
} from "@/lib/motion";

const conceptFeatures = [
    {
        icon: Phone,
        title: "Interface Mobile-Native",
        copy: "Conçue pour l'urgence et l'action rapide. Aucune friction entre la découverte et la demande d'intervention.",
    },
    {
        icon: ShieldCheck,
        title: "Filtrage Intelligent",
        copy: "Pré-qualification des demandes via des parcours structurés et formulaires précis. Moins de bruit, plus de qualité.",
    },
    {
        icon: Laptop,
        title: "Structure SEO Dominante",
        copy: "Empreinte locale maximisée sur vos zones d'intervention pour capter la demande au moment où elle s'exprime.",
    },
];

export function ConceptSection() {
    const reduced = useReducedMotion();
    const variants = reduced ? scrollRevealReducedVariants : scrollRevealVariants;

    return (
        <section className="relative border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32 overflow-x-hidden">
            <div className="mx-auto max-w-6xl w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                <div className="lg:w-1/3 flex flex-col justify-center">
                    <p className="section-eyebrow">Concept</p>
                    <motion.h2
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={SCROLL_VIEWPORT}
                        className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl section-title-industrial"
                    >
                        L&apos;Architecture Call-First
                    </motion.h2>
                    <div className="brand-signature-line hidden lg:block mt-4" aria-hidden />
                    <motion.p
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={SCROLL_VIEWPORT}
                        transition={{ delay: reduced ? 0 : STAGGER_DELAY }}
                        className="mt-4 text-sm leading-relaxed text-[var(--text-2)]"
                    >
                        Un site classique est une carte de visite numérique. L&apos;Architecture Call-First est un système d&apos;acquisition. Nous éliminons les frictions entre la recherche de votre client et son arrivée dans votre atelier.
                    </motion.p>
                </div>

                <div className="lg:w-2/3 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {conceptFeatures.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={SCROLL_VIEWPORT}
                            transition={{ delay: reduced ? 0 : getStaggerDelay(i) }}
                            className="group flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-6 md:backdrop-blur-sm transition-all duration-300 lg:hover:border-[var(--accent)] lg:hover:bg-[var(--surface)] lg:hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] will-change-transform"
                        >
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-110">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-heading text-lg font-semibold text-[var(--text)]">{feature.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--text-2)]">{feature.copy}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
