"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SCROLL_VIEWPORT, scrollRevealVariants } from "@/lib/motion";

export function ProjectProofSection() {
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

    return (
        <>
            {/* SECTION: PROJETS LIVRÉS */}
            <section id="resultats" className="relative w-full border-t border-white/5 bg-[#0B0D12] py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                <div className="mx-auto max-w-5xl w-full min-w-0">

                    {/* Header */}
                    <motion.div
                        className="mb-14 sm:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={SCROLL_VIEWPORT}
                        variants={scrollRevealVariants}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-left">
                            Projets livrés
                        </h2>
                        <p className="mt-4 max-w-2xl text-base text-neutral-400 text-left">
                            Des systèmes web conçus pour dominer leur marché local et générer des appels téléphoniques qualifiés.
                        </p>
                    </motion.div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* CARD: L'Art Auto */}
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={SCROLL_VIEWPORT}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="flex flex-col overflow-hidden rounded-xl bg-[#111111] border border-white/5 transition-colors duration-300 hover:border-white/10 text-left"
                        >
                            {/* Desktop Preview */}
                            <div className="relative h-56 w-full overflow-hidden bg-black border-b border-white/5">
                                <img
                                    src="/proofs/lartautopc.png"
                                    alt="Vue web de L'Art Auto"
                                    className="h-full w-full object-cover object-left-top opacity-90 transition-transform duration-700 hover:scale-105"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxYTFhMWEiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM1NTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5QbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4=';
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-6 sm:p-8">
                                <h3 className="font-heading text-xl font-bold text-white tracking-tight">L'Art Auto</h3>
                                <p className="mt-1 text-sm font-medium text-neutral-500">Centre de detailing premium — Beauraing</p>

                                <ul className="mt-6 space-y-2.5">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#F59E0B]">✓</span>
                                        <span className="text-sm text-neutral-300">Réservation immédiate via WhatsApp</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#F59E0B]">✓</span>
                                        <span className="text-sm text-neutral-300">Parcours utilisateur pensé 100% mobile</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#F59E0B]">✓</span>
                                        <span className="text-sm text-neutral-300">Positionnement premium assumé</span>
                                    </li>
                                </ul>

                                <blockquote className="mt-8 border-l-[3px] border-neutral-800 pl-4">
                                    <p className="text-sm font-medium text-neutral-400 italic leading-relaxed">
                                        "C’est du très beau boulot, je te félicite. Je suis vraiment très content."
                                    </p>
                                </blockquote>

                                <div className="mt-8 pt-6 border-t border-white/5 mt-auto">
                                    {/* Action pour ouvrir la modale */}
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="group/btn w-full flex justify-between items-center bg-[#111111] border border-white/10 text-neutral-300 font-semibold py-3.5 px-5 rounded-lg text-sm shadow-sm
                                                   transition-all duration-250 ease-out 
                                                   lg:hover:-translate-y-[2px] lg:hover:border-[#F59E0B]/20 lg:hover:text-white lg:hover:bg-white/[0.02] lg:hover:shadow-[0_4px_20px_rgba(245,158,11,0.06)]
                                                   active:scale-[0.98] active:bg-black/20 lg:active:translate-y-0
                                                   focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F59E0B]/50"
                                        aria-label="Voir les détails du projet L'Art Auto"
                                    >
                                        <span>Détails du projet</span>
                                        <span aria-hidden="true" className="text-neutral-500 transition-transform duration-300 ease-out group-hover/btn:translate-x-1 lg:group-hover/btn:text-[#F59E0B]">&rarr;</span>
                                    </button>
                                </div>
                            </div>
                        </motion.article>

                    </div>
                </div>
            </section>

            {/* MODAL OVERLAY */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-title">

                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 bg-[#0B0D12]/95 backdrop-blur-sm"
                            onClick={() => setIsModalOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] flex flex-col lg:flex-row overflow-hidden rounded-xl bg-[#111111] border border-white/10 shadow-2xl z-10"
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
                            <div className="relative flex-shrink-0 lg:w-[35%] bg-black border-b lg:border-b-0 lg:border-r border-white/5 hidden sm:block overflow-hidden">
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

                                <div className="mt-8 sm:mt-10 space-y-8 sm:space-y-10 flex-1">

                                    {/* Features */}
                                    <section>
                                        <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4 sm:mb-5">Ce que nous avons mis en place</h3>
                                        <ul className="space-y-4 text-sm font-medium text-neutral-300">
                                            <li className="flex items-start gap-4">
                                                <span className="text-neutral-600 mt-0.5">&bull;</span>
                                                <span>Architecture technique orientée exclusivement vers l'initiation d'appels et de messages.</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <span className="text-neutral-600 mt-0.5">&bull;</span>
                                                <span>Intégration d'un simulateur de devis fluide se terminant sur WhatsApp.</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <span className="text-neutral-600 mt-0.5">&bull;</span>
                                                <span>Optimisation sémantique stricte pour capter les recherches locales "detailing auto".</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <span className="text-neutral-600 mt-0.5">&bull;</span>
                                                <span>Direction artistique sombre, minimaliste, rompant avec les codes standards.</span>
                                            </li>
                                        </ul>
                                    </section>

                                    {/* Why it converts */}
                                    <section>
                                        <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-4 sm:mb-5">Pourquoi ça convertit</h3>
                                        <ul className="space-y-4 text-sm font-medium text-neutral-300">
                                            <li className="flex items-start gap-4">
                                                <span className="text-[#F59E0B] mt-0.5">&rarr;</span>
                                                <span>L'appel à l'action principal (WhatsApp) reste fixé à portée de pouce durant toute la navigation.</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <span className="text-[#F59E0B] mt-0.5">&rarr;</span>
                                                <span>La suppression totale des formulaires complexes annule la friction de contact et favorise l'échange direct.</span>
                                            </li>
                                        </ul>
                                    </section>

                                </div>

                                {/* Call To Actions */}
                                <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <a
                                        href="#contact"
                                        onClick={() => setIsModalOpen(false)}
                                        className="flex-1 bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-black font-bold py-3.5 sm:py-4 px-6 rounded-lg transition-colors text-sm text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
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
