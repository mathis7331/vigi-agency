"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { SCROLL_VIEWPORT, scrollRevealVariants } from "@/lib/motion";

export function ProjectionSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Focus trap and scroll lock
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);

    const staggerVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut" as const
            }
        })
    };

    return (
        <>
            <section id="projection" className="relative w-full border-t border-[var(--border)] bg-[#0B0D12] py-24 px-4 sm:px-6 lg:px-10 overflow-x-hidden">
                <div className="mx-auto max-w-6xl w-full min-w-0">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={SCROLL_VIEWPORT}
                        variants={scrollRevealVariants}
                        className="mb-12 sm:mb-16 text-center sm:text-left"
                    >
                        <p className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">Projection</p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Ce que nous pouvons créer pour votre activité.
                        </h2>
                        <p className="mt-4 text-base text-neutral-400 max-w-2xl mx-auto sm:mx-0">
                            Plutôt que des exemples fictifs, voici le niveau d'exécution que nous livrons réellement.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                        {/* Côté Gauche : Preuve Visuelle */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={SCROLL_VIEWPORT}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="lg:col-span-7 relative group rounded-2xl bg-[#111111] border border-white/10 overflow-hidden cursor-pointer shadow-2xl"
                            onClick={() => setIsModalOpen(true)}
                            role="button"
                            tabIndex={0}
                            aria-label="Ouvrir les détails du projet L'Art Auto"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setIsModalOpen(true);
                                }
                            }}
                        >
                            <div className="absolute top-4 left-4 z-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
                                <span className="text-xs font-medium text-white uppercase tracking-wider">Projet livré : L'Art Auto</span>
                            </div>
                            <div className="relative aspect-[16/10] lg:aspect-[1912/935] w-full overflow-hidden bg-black/50">
                                <img
                                    src="/proofs/lartautopc.png"
                                    alt="L'Art Auto - Vue Desktop"
                                    className="w-full h-full object-cover object-top opacity-90 transition-transform duration-700 ease-out scale-[1.02] translate-x-[1%] group-hover:scale-[1.05] group-hover:translate-x-[1.5%]"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxYTFhMWEiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM1NTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5QbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4=';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] border border-[#F59E0B]/50 px-5 py-2.5 text-sm font-bold text-black shadow-[0_0_30px_rgba(245,158,11,0.5)] translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                                        Voir l'étude de cas
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Côté Droit : Projection */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <motion.h3
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={SCROLL_VIEWPORT}
                                transition={{ duration: 0.5 }}
                                className="text-xl font-semibold text-white mb-8 leading-snug"
                            >
                                Voici ce que nous avons fait pour eux.<br className="hidden lg:block" />
                                <span className="text-neutral-400">Voici ce que cela pourrait devenir pour votre atelier.</span>
                            </motion.h3>

                            <ul className="space-y-6 mb-10">
                                {[
                                    ["Une vitrine qui reflète enfin votre expertise", "Fini le site qui dégrade votre image réelle."],
                                    ["Un parcours pensé exclusivement pour le téléphone", "Chaque visiteur devient un contact potentiel fluide."],
                                    ["Une autorité immédiate sur votre zone", "Passez du statut de \"garage du coin\" à \"référence locale\"."],
                                    ["Une gestion des demandes filtrée et qualifiée", "Moins de questions inutiles, plus d'appels pour réserver."]
                                ].map(([boldText, lightText], i) => (
                                    <motion.li
                                        key={i}
                                        custom={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={SCROLL_VIEWPORT}
                                        variants={staggerVariants}
                                        className="flex items-start gap-4"
                                    >
                                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span>
                                        <p className="text-sm text-neutral-300 leading-relaxed">
                                            <strong className="text-white font-semibold block sm:inline">{boldText}</strong> <span className="hidden sm:inline">—</span> <span className="block sm:inline mt-1 sm:mt-0">{lightText}</span>
                                        </p>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={SCROLL_VIEWPORT}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4 w-full"
                            >
                                <a
                                    href="#contact"
                                    className="inline-flex justify-center items-center gap-2 bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-black font-bold py-3.5 px-6 rounded-lg transition-all duration-200 text-sm shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_4px_25px_rgba(245,158,11,0.35)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                                >
                                    Construire le vôtre
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex justify-center items-center bg-transparent border border-white/20 hover:bg-white/5 hover:border-white/30 text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-200 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                >
                                    Discuter de votre projet
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MODAL OVERLAY (Repris et adapté du ProjectProof précédent) */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 bg-[#0B0D12]/95 backdrop-blur-md"
                            onClick={() => setIsModalOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] flex flex-col lg:flex-row overflow-hidden rounded-2xl bg-[#111111] border border-white/10 shadow-2xl z-10"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                aria-label="Fermer la modale"
                                className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-neutral-400 hover:text-white hover:bg-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            {/* Visual Column / Mobile Preview (Desktop only) */}
                            <div className="relative flex-shrink-0 lg:w-[35%] bg-black border-b lg:border-b-0 lg:border-r border-white/5 hidden sm:block overflow-hidden p-6 sm:p-0 flex items-center justify-center">
                                <img
                                    src="/proofs/lartautomobile.png"
                                    alt="Aperçu mobile complet du projet L'Art Auto"
                                    className="h-full w-full object-cover object-top opacity-90 transition-transform duration-700 hover:scale-[1.03]"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxYTFhMWEiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM1NTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Nb2JpbGU8L3RleHQ+PC9zdmc+';
                                    }}
                                />
                            </div>

                            {/* Content Column */}
                            <div className="flex-1 overflow-y-auto p-6 sm:p-10 flex flex-col">
                                <div>
                                    <h2 id="modal-title" className="font-heading text-2xl font-bold text-white tracking-tight">L'Art Auto</h2>
                                    <p className="mt-1 text-sm text-neutral-500">Detailing premium — Beauraing</p>
                                </div>

                                <div className="mt-8 sm:mt-10 space-y-8 flex-1">
                                    <blockquote className="border-l-[3px] border-[#F59E0B]/50 pl-4 py-1 bg-gradient-to-r from-[#F59E0B]/5 to-transparent">
                                        <p className="text-sm font-medium text-neutral-300 italic leading-relaxed">
                                            "C’est du très beau boulot, je te félicite. Je suis vraiment très content."
                                        </p>
                                    </blockquote>

                                    {/* Features */}
                                    <section>
                                        <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-4 sm:mb-5">Impact direct</h3>
                                        <ul className="space-y-4 text-sm font-medium text-neutral-300">
                                            <li className="flex items-start gap-4">
                                                <span className="text-[#F59E0B] mt-0.5">&rarr;</span>
                                                <span>Parcours utilisateur pensé 100% mobile et conversion rapide</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <span className="text-[#F59E0B] mt-0.5">&rarr;</span>
                                                <span>Intégration d'un simulateur de devis fluide se terminant sur WhatsApp</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <span className="text-[#F59E0B] mt-0.5">&rarr;</span>
                                                <span>Direction artistique sombre, minimaliste, rompant avec les codes de la région</span>
                                            </li>
                                        </ul>
                                    </section>
                                </div>

                                {/* Call To Actions */}
                                <div className="mt-10 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <a
                                        href="#contact"
                                        onClick={() => setIsModalOpen(false)}
                                        className="flex-1 bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-black font-bold py-3.5 sm:py-4 px-6 rounded-lg transition-colors text-sm text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                                    >
                                        Discuter de mon projet
                                    </a>
                                    <a
                                        href="https://lartauto.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="sm:flex-none flex items-center justify-center bg-transparent border border-white/20 hover:bg-white/5 text-white font-semibold py-3.5 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                    >
                                        Voir le site
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

