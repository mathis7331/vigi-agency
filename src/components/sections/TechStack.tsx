"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Copy, Layers, Server, ShieldCheck, Smartphone } from "lucide-react";
import {
    scrollRevealVariants,
    scrollRevealReducedVariants,
    SCROLL_VIEWPORT,
    STAGGER_DELAY,
    getStaggerDelay,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

const stackItems = [
    {
        icon: Layers,
        title: "Architecture React",
        copy: "Framework Next.js (App Router). Rendu optimisé, navigation instantanée.",
    },
    {
        icon: Server,
        title: "Vercel Edge Network",
        copy: "Déploiement sur infrastructure globale pour des temps de réponse < 50ms.",
    },
    {
        icon: ShieldCheck,
        title: "Sécurité & Validation",
        copy: "Protection anti-spam, validation Zod stricte et sécurité CSRF par défaut.",
    },
    {
        icon: Smartphone,
        title: "Design System Fluide",
        copy: "Interfaces en Tailwind CSS couplées aux animations natives Framer Motion.",
    },
];

export function TechStackSection() {
    const reduced = useReducedMotion();
    const variants = reduced ? scrollRevealReducedVariants : scrollRevealVariants;

    return (
        <section className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32 overflow-x-hidden">
            <div className="mx-auto max-w-6xl w-full">
                <div className="text-center md:text-left">
                    <p className="section-eyebrow">Ingénierie</p>
                    <motion.h2
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={SCROLL_VIEWPORT}
                        className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl section-title-industrial"
                    >
                        Standards Techniques
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEWPORT}
                        transition={{ delay: reduced ? 0 : STAGGER_DELAY }}
                        className="mt-3 max-w-2xl mx-auto md:mx-0 text-sm text-[var(--text-2)]"
                    >
                        Les fondations d&apos;un site web premium ne s&apos;improvisent pas. Nous utilisons les mêmes technologies que les leaders mondiaux de la tech.
                    </motion.p>
                    <div className="brand-signature-line mt-4 mx-auto md:mx-0" aria-hidden />
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stackItems.map((item, i) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={SCROLL_VIEWPORT}
                            transition={{ duration: 0.35, delay: reduced ? 0 : getStaggerDelay(i) }}
                            whileHover={reduced ? undefined : { y: -4 }}
                            className="group rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-6 md:backdrop-blur-sm transition-all duration-300 lg:hover:border-zinc-500/50 lg:hover:shadow-[0_10px_30px_rgba(255,255,255,0.02)] will-change-transform"
                        >
                            <div className="mb-4 inline-flex rounded-xl bg-[var(--surface)] p-2.5 text-[var(--text)] outline outline-1 outline-white/5 transition-colors group-hover:text-[var(--accent)] group-hover:outline-[var(--accent)]/30">
                                <item.icon className="h-5 w-5" />
                            </div>
                            <h3 className="font-heading text-base font-semibold text-[var(--text)]">{item.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-[var(--text-2)]">
                                {item.copy}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
