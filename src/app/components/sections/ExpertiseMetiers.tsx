"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import {
    scrollRevealVariants,
    scrollRevealReducedVariants,
    SCROLL_VIEWPORT,
    STAGGER_DELAY,
} from "@/lib/motion";
import { useReducedMotion } from "framer-motion";

const EXPERTISES = [
    {
        label: "Garage & Atelier",
        description: "Sites pour garages indépendants et ateliers mécaniques.",
        href: "/site-web-garage-belgique",
    },
    {
        label: "Dépannage & Remorquage",
        description: "Pages urgence et visibilité 24h pour dépanneurs.",
        href: "/site-web-depanneur-belgique",
    },
    {
        label: "Detailing & Polissage",
        description: "Vitrines visuelles premium pour centres de detailing.",
        href: "/site-web-detailing-belgique",
    },
    {
        label: "Carrosserie & Pare-brise",
        description: "Sites orientés devis et galerie avant/après.",
        href: "/site-web-carrosserie-belgique",
    },
    {
        label: "Car Wash & Lavage",
        description: "Présence locale pour stations de lavage auto.",
        href: "/site-web-car-wash-belgique",
    },
];

export function ExpertiseMetiersSection() {
    const reduced = useReducedMotion();
    const variants = reduced ? scrollRevealReducedVariants : scrollRevealVariants;

    return (
        <section className="relative border-t border-[var(--border)] bg-[var(--bg)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-6xl w-full">
                <p className="section-eyebrow">Expertises</p>
                <motion.h2
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={SCROLL_VIEWPORT}
                    className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl"
                >
                    Nos expertises métiers
                </motion.h2>
                <motion.p
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={SCROLL_VIEWPORT}
                    transition={{ delay: STAGGER_DELAY }}
                    className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-2)] lg:text-lg"
                >
                    Chaque métier de l'auto a ses spécificités. Nous concevons des sites adaptés à chaque activité, optimisés pour la recherche locale en Belgique.
                </motion.p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {EXPERTISES.map((item, idx) => (
                        <motion.div
                            key={item.href}
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={SCROLL_VIEWPORT}
                            transition={{ delay: STAGGER_DELAY * (idx + 1) }}
                        >
                            <Link
                                href={item.href}
                                className="group flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-300 hover:border-[var(--accent)]/40 hover:bg-[var(--surface-2)] sm:p-6 h-full"
                            >
                                <div>
                                    <h3 className="font-heading text-base font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                                        {item.label}
                                    </h3>
                                    <p className="mt-1.5 text-sm text-[var(--text-2)] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="mt-4 flex items-center text-xs font-medium text-[var(--accent)]">
                                    En savoir plus
                                    <ChevronRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
