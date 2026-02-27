"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, Car, ChevronRight, Droplets, MapPin, Phone, Rocket, Truck, Wrench, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  scrollRevealVariants,
  scrollRevealReducedVariants,
  SCROLL_VIEWPORT,
  STAGGER_DELAY,
} from "@/lib/motion";
import { ProjectionSection } from "./ProjectionSection";



const processSteps = [
  {
    step: 1,
    title: "On structure",
    copy: "Offre, zone, services. On définit ce qui doit générer des appels.",
  },
  {
    step: 2,
    title: "On construit",
    copy: "Design premium, vitesse, SEO. Un site qui convertit.",
  },
  {
    step: 3,
    title: "On déploie",
    copy: "Vercel, domaine, suivi. Vous pilotez, on reste dispo.",
  },
];

const deroulementSteps = [
  {
    day: "Jour 1",
    subtitle: "Discussion rapide (10 min)",
    copy: "On comprend votre activité et votre zone.",
    icon: CalendarCheck,
  },
  {
    day: "Jour 2–4",
    subtitle: "Construction",
    copy: "On prépare votre site et vous envoyons un aperçu.",
    icon: Wrench,
  },
  {
    day: "Jour 5",
    subtitle: "Mise en ligne",
    copy: "Votre site commence à capter des appels.",
    icon: Rocket,
  },
] as const;



export function ProofSection() {
  const reduced = useReducedMotion();
  const variants = reduced ? scrollRevealReducedVariants : scrollRevealVariants;

  return (
    <>
      <section id="pertes" className="relative border-t border-[var(--border)] bg-[var(--bg)] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-32 overflow-x-hidden">
        <div className="mx-auto max-w-6xl w-full min-w-0 relative z-10">
          <p className="section-eyebrow">Constat</p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl lg:text-4xl section-title-industrial max-w-2xl">Ce qu&apos;un garage perd sans site optimisé</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)] lg:mt-4 max-w-2xl">Sans site adapté à la recherche locale, les clients potentiels passent à côté de votre atelier.</p>
          <div className="brand-signature-line hidden lg:block mt-4" aria-hidden />

          <div className="mt-8 space-y-6 sm:mt-10 lg:mt-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-5 lg:rounded-2xl lg:p-6"><span className="text-sm font-semibold text-[var(--accent)]">1. Visibilité</span><p className="mt-2 text-sm leading-relaxed text-[var(--text-2)]">Quand quelqu&apos;un cherche « garage Mons » ou « dépannage Charleroi », les premiers résultats s&apos;affichent. Sans site adapté, votre atelier reste invisible au moment où on vous cherche.</p></div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-5 lg:rounded-2xl lg:p-6"><span className="text-sm font-semibold text-[var(--accent)]">2. Confiance</span><p className="mt-2 text-sm leading-relaxed text-[var(--text-2)]">Horaires, services, moyen de contact : ces infos rassurent. Sans elles en ligne, le client hésite et passe son chemin.</p></div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-5 lg:rounded-2xl lg:p-6"><span className="text-sm font-semibold text-[var(--accent)]">3. Opportunités</span><p className="mt-2 text-sm leading-relaxed text-[var(--text-2)]">Chaque recherche non aboutie est un appel qui ne sonne pas. Les clients trouvent ailleurs ce qu&apos;ils cherchent.</p></div>
          </div>

          <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-5 py-4 sm:mt-10 lg:mt-12 lg:rounded-2xl lg:px-6 lg:py-5 lg:max-w-3xl">
            <p className="text-sm font-medium leading-relaxed text-[var(--text)]">Un site simple et bien structuré suffit. Pas besoin de complexité.</p>
          </div>
        </div>
      </section>

      <ProjectionSection />

      <section id="parlons-projet" className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 overflow-x-hidden" style={{ background: "linear-gradient(180deg, var(--bg-2) 0%, var(--bg) 100%)" }}>
        <div className="mx-auto max-w-3xl w-full min-w-0 text-center">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_VIEWPORT} className="font-heading text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">Vous avez vu un exemple. Parlons du vôtre.</motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_VIEWPORT} transition={{ delay: reduced ? 0 : STAGGER_DELAY }} className="mt-3 text-sm text-[var(--text-2)]">Une courte discussion suffit pour voir si votre activité peut en profiter.</motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_VIEWPORT} transition={{ delay: reduced ? 0 : STAGGER_DELAY }} className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[var(--accent-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]">Discuter de mon projet</Link>
            <a href="https://wa.me/32468367226?text=Bonjour%2C%20je%20souhaite%20parler%20d%27un%20site%20web%20pour%20mon%20garage%20%2F%20service%20de%20depannage." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--surface-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]">Être rappelé</a>
          </motion.div>
        </div>
      </section>



      <section id="methode" className="border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32 overflow-x-hidden">
        <div className="mx-auto max-w-6xl w-full min-w-0">
          <p className="section-eyebrow">Process</p>
          <motion.h2 variants={variants} initial="hidden" whileInView="visible" viewport={SCROLL_VIEWPORT} className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl section-title-industrial">Méthode</motion.h2>
          <div className="brand-signature-line hidden lg:block mt-4" aria-hidden />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {processSteps.map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_VIEWPORT} transition={{ delay: reduced ? 0 : i * STAGGER_DELAY }} className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-sm transition-all duration-500 lg:hover:border-[var(--accent)] lg:hover:-translate-y-1 lg:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <span className="text-3xl font-bold tabular-nums text-[var(--accent)]">{item.step}</span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-[var(--text)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-2)]">{item.copy}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_VIEWPORT} className="mt-10 rounded-2xl border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_5%,transparent)] px-6 py-4"><p className="font-heading font-medium text-[var(--accent-2)]">Objectif : plus d’appels, pas un « joli site ».</p></motion.div>
        </div>
      </section>

      <section id="deroulement" className="relative border-t border-[var(--border)] overflow-x-hidden bg-[var(--bg)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(245,158,11,0.06),transparent_60%)]" />
        </div>
        <div className="mx-auto max-w-6xl w-full min-w-0 relative z-10">
          <p className="section-eyebrow">Déroulement</p>
          <motion.h2 variants={variants} initial="hidden" whileInView="visible" viewport={SCROLL_VIEWPORT} className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl section-title-industrial">
            Comment ça se passe concrètement ?
          </motion.h2>
          <motion.p variants={variants} initial="hidden" whileInView="visible" viewport={SCROLL_VIEWPORT} transition={{ delay: reduced ? 0 : STAGGER_DELAY }} className="mt-3 text-sm text-[var(--text-2)] max-w-2xl">
            En 5 jours, votre site est en ligne. Aucune compétence technique requise.
          </motion.p>
          <div className="brand-signature-line hidden lg:block mt-4" aria-hidden />

          <div className="mt-12 lg:mt-16">
            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" aria-hidden />
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-6">
                {deroulementSteps.map((step, i) => (
                  <motion.div
                    key={step.day}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={SCROLL_VIEWPORT}
                    transition={{ duration: 0.35, delay: reduced ? 0 : i * STAGGER_DELAY }}
                    className="relative group"
                  >
                    <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-sm transition-all duration-500 lg:hover:border-[var(--accent)]/50 lg:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_0_1px_rgba(245,158,11,0.1)]">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <div className="relative flex flex-col">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] transition-all duration-300 group-hover:bg-[var(--accent)]/25 group-hover:shadow-[0_0_24px_rgba(245,158,11,0.25)]">
                            <step.icon className="h-6 w-6" strokeWidth={2} />
                          </div>
                          <div>
                            <p className="font-heading text-lg font-bold text-[var(--text)]">{step.day}</p>
                            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">{step.subtitle}</p>
                          </div>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-[var(--text-2)]">{step.copy}</p>
                      </div>
                    </div>
                    {i < deroulementSteps.length - 1 && (
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:hidden">
                        <ChevronRight className="h-5 w-5 rotate-[-90deg] text-[var(--accent)]/50" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={SCROLL_VIEWPORT}
              transition={{ delay: reduced ? 0 : 0.15 }}
              className="mt-12 lg:mt-16 rounded-2xl border border-[var(--accent)]/30 bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] px-6 py-5 text-center"
            >
              <p className="font-heading text-base font-semibold text-[var(--text)] sm:text-lg">
                Aucune compétence technique requise.
              </p>
              <p className="mt-1 text-sm text-[var(--text-2)]">
                On s&apos;occupe de tout.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="preuves" className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32 overflow-x-hidden">
        <div className="mx-auto max-w-6xl w-full min-w-0">
          <p className="section-eyebrow">Preuves</p>
          <motion.h2 variants={variants} initial="hidden" whileInView="visible" viewport={SCROLL_VIEWPORT} className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl section-title-industrial">Preuves</motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_VIEWPORT} className="mt-3 max-w-2xl text-sm text-[var(--text-2)]">Des éléments concrets que l’on met en place sur chaque projet pour rassurer vos futurs clients.</motion.p>
          <div className="brand-signature-line hidden lg:block mt-4" aria-hidden />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={SCROLL_VIEWPORT}
            transition={{ duration: 0.35, delay: reduced ? 0 : 0.06 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 rounded-2xl border border-[var(--accent)]/20 bg-[color-mix(in_srgb,var(--accent)_6%,transparent)] px-6 py-4 sm:px-8 sm:py-5"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-xl font-bold text-[var(--accent)] sm:text-2xl">+45</span>
              <span className="text-sm font-medium text-[var(--text-2)]">appels générés pour nos clients</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-[var(--border)]" />
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-xl font-bold text-[var(--accent)] sm:text-2xl">5 jours</span>
              <span className="text-sm font-medium text-[var(--text-2)]">pour livrer votre site</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-[var(--border)]" />
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-xl font-bold text-[var(--accent)] sm:text-2xl">24h</span>
              <span className="text-sm font-medium text-[var(--text-2)]">pour vous répondre</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-[var(--border)]" />
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-xl font-bold text-[var(--accent)] sm:text-2xl">100%</span>
              <span className="text-sm font-medium text-[var(--text-2)]">spécialisé garages & auto</span>
            </div>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <motion.article initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_VIEWPORT} transition={{ duration: 0.35 }} whileHover={reduced ? undefined : { y: -4 }} className="group rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-5 backdrop-blur-sm transition-all duration-500 lg:hover:border-[var(--accent)] lg:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div className="mb-3 inline-flex rounded-lg bg-[var(--accent)]/10 p-2.5 text-[var(--accent)] transition-all duration-500 lg:group-hover:shadow-[0_0_25px_rgba(245,165,36,0.3)]"><Phone className="h-5 w-5" /></div>
              <h3 className="font-heading text-lg font-semibold text-[var(--text)]">Pages urgence</h3>
              <p className="mt-2 text-sm text-[var(--text-2)]">Une page dédiée “appel d’urgence” avec bouton fixe et informations essentielles visibles immédiatement.</p>
            </motion.article>

            <motion.article initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_VIEWPORT} transition={{ duration: 0.35, delay: reduced ? 0 : STAGGER_DELAY }} whileHover={reduced ? undefined : { y: -4 }} className="group rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-5 backdrop-blur-sm transition-all duration-500 lg:hover:border-sky-400/30 lg:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div className="mb-3 inline-flex rounded-lg bg-sky-500/10 p-2.5 text-sky-400 transition-all duration-500 lg:group-hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]"><MapPin className="h-5 w-5" /></div>
              <h3 className="font-heading text-lg font-semibold text-[var(--text)]">SEO local</h3>
              <p className="mt-2 text-sm text-[var(--text-2)]">Textes et structure pensés pour “garage Mons”, “dépannage Charleroi”, “pare-brise Hainaut”.</p>
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-xs text-[var(--text-2)]"><span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--surface-2)]"><MapPin className="h-3.5 w-3.5" /></span><span>Mots-clés + fiche Google Maps alignés avec votre zone.</span></div>
            </motion.article>

            <motion.article initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_VIEWPORT} transition={{ duration: 0.35, delay: reduced ? 0 : STAGGER_DELAY * 2 }} whileHover={reduced ? undefined : { y: -4 }} className="group rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-5 backdrop-blur-sm transition-all duration-500 lg:hover:border-[var(--accent)] lg:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div className="mb-3 inline-flex rounded-lg bg-[var(--accent)]/10 p-2.5 text-[var(--accent)] transition-all duration-500 lg:group-hover:shadow-[0_0_25px_rgba(245,165,36,0.3)]"><Zap className="h-5 w-5" /></div>
              <h3 className="font-heading text-lg font-semibold text-[var(--text)]">Avant / Après</h3>
              <p className="mt-2 text-sm text-[var(--text-2)]">Intégration d’un slider avant/après pour montrer vos réparations, comme dans la démo.</p>
            </motion.article>
          </div>
        </div>
      </section>

      <section id="qui" className="border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32 overflow-x-hidden">
        <div className="mx-auto max-w-5xl lg:max-w-6xl w-full min-w-0">
          <p className="section-eyebrow">L&apos;équipe</p>
          <div className="brand-signature-line hidden lg:block mt-2 mb-6" aria-hidden />
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_VIEWPORT} transition={{ duration: 0.4, ease: "easeOut" }} className="mt-10 lg:mt-0 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 lg:p-10">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">Qui est derrière VIGI AGENCY</h2>
              <p className="font-heading text-lg font-semibold sm:text-xl" style={{ color: "#F59E0B", textShadow: "0 0 20px rgba(245, 158, 11, 0.35)" }}>Mathis — Fondateur</p>
              <p className="text-sm font-medium text-[var(--text-2)]">Basé dans le Hainaut. Disponible directement par WhatsApp.</p>
              <ul className="space-y-2 text-sm text-[var(--text-2)]">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />Spécialisé exclusivement garages & métiers auto</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />Approche orientée appels et résultats concrets</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />Déploiement rapide, sans complexité technique</li>
              </ul>
              <p className="text-sm leading-relaxed text-[var(--text-2)] pt-1">Je me concentre sur les garages et artisans de l&apos;auto parce que c&apos;est un secteur où un site simple et bien pensé change vraiment le volume d&apos;appels — sans avoir besoin de grosses plateformes ni de jargon.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
