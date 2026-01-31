"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Calendar, MapPin, Wrench, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const sectionTitleMotion = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
} as const;

export default function DemoGaragePage() {
  return (
    <>
      <div className="noise" aria-hidden />
      <div className="speed-lines" aria-hidden />

      <main className="site-demo relative z-10 min-h-screen bg-slate-950 text-slate-50">
        {/* Simple top bar */}
        <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 to-amber-700 text-xs font-semibold text-slate-950">
                GD
              </div>
              <div className="leading-tight">
                <p className="font-heading text-sm font-semibold tracking-tight text-white">
                  Garage Démo
                </p>
                <p className="text-[11px] text-slate-400">Page de démonstration VIGI AGENCY</p>
              </div>
            </div>
            <a
              href="/"
              className="rounded-lg border border-amber-500/40 bg-black/80 px-3 py-1.5 text-xs font-medium text-slate-100 transition hover:border-amber-400/80 hover:text-amber-200"
            >
              Retour au site agence
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="overflow-hidden border-b border-slate-800 bg-gradient-to-b from-black via-slate-950 to-black px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-amber-200">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_0_4px_rgba(251,191,36,0.45)]" />
                Démonstration · Garage
              </div>
              <div className="space-y-3">
                <h1 className="font-heading text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
                  <span className="block text-sm font-medium uppercase tracking-[0.24em] text-slate-300">
                    Carrosserie & réparation automobile
                  </span>
                  <span className="mt-2 block bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                    Démo garage – version premium
                  </span>
                </h1>
                <p className="max-w-xl text-[15px] leading-relaxed text-slate-300">
                  Démonstration d’un site optimisé pour garages locaux. Pensé pour la prise de
                  rendez-vous, la conversion mobile et la mise en avant de vos travaux.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex cursor-default items-center gap-2 rounded-lg bg-amber-400/95 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(251,191,36,0.55)]"
                  aria-disabled="true"
                >
                  <Phone className="h-4 w-4" />
                  Appeler maintenant (démonstration)
                </button>
                <button
                  type="button"
                  className="inline-flex cursor-default items-center gap-2 rounded-lg border border-slate-600/70 bg-slate-900/70 px-4 py-2.5 text-sm font-medium text-slate-100"
                  aria-disabled="true"
                >
                  <Calendar className="h-4 w-4" />
                  Demande de rendez-vous (exemple)
                </button>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                {["Toutes marques", "Avis clients", "Intervention rapide", "Région démo"].map(
                  (badge) => (
                    <div
                      key={badge}
                      className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-black/80 px-3 py-1"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                      <span>{badge}</span>
                    </div>
                  ),
                )}
              </div>

              <p className="text-xs text-slate-500">
                Ceci est une page de démonstration. Aucun garage réel, aucun numéro réel.
              </p>
            </motion.div>

            {/* Side visual - simple stacked cards */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.25),transparent_60%)] blur-3xl" />
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-[0_22px_60px_rgba(15,23,42,0.9)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-amber-200">
                        Exemple de planning
                      </p>
                      <p className="mt-1 font-heading text-sm font-semibold text-white">
                        Réparations & carrosserie – journée type
                      </p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/15 text-amber-200">
                      <Wrench className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-300">
                    <div className="rounded-lg bg-slate-900/80 p-2">
                      <p className="font-semibold text-amber-200">08:30</p>
                      <p>Réception véhicule</p>
                    </div>
                    <div className="rounded-lg bg-slate-900/80 p-2">
                      <p className="font-semibold text-amber-200">13:00</p>
                      <p>Entretien</p>
                    </div>
                    <div className="rounded-lg bg-slate-900/80 p-2">
                      <p className="font-semibold text-amber-200">17:00</p>
                      <p>Véhicule prêt</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-3 text-[11px] text-slate-300 sm:grid-cols-2">
                  <div className="rounded-2xl border border-amber-500/30 bg-black/80 p-3">
                    <p className="text-xs font-semibold text-amber-200">
                      Fiche atelier claire
                    </p>
                    <p className="mt-1 text-slate-400">
                      Adresse, horaires, services et bouton d’appel visibles en une seconde.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-amber-500/30 bg-black/80 p-3">
                    <p className="text-xs font-semibold text-amber-200">
                      Pensé mobile
                    </p>
                    <p className="mt-1 text-slate-400">
                      Navigation simple, boutons larges, infos essentielles regroupées.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AVANT / APRÈS */}
        <BeforeAfterSection />

        {/* PROCESS GARAGE */}
        <section className="border-t border-white/[0.06] bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              {...sectionTitleMotion}
              className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Un process garage clair, du devis à la restitution
            </motion.h2>
            <div className="mt-8 grid gap-6 md:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Réception & diagnostic",
                  icon: ClipboardIcon,
                  copy: "Accueil, photos, estimation transparente du travail à réaliser.",
                },
                {
                  step: "02",
                  title: "Intervention",
                  icon: Wrench,
                  copy: "Carrosserie, peinture, vitrage ou réparation mécanique selon besoin.",
                },
                {
                  step: "03",
                  title: "Contrôle qualité",
                  icon: ShieldCheck,
                  copy: "Contrôle visuel, ajustements, nettoyage et vérifications finales.",
                },
                {
                  step: "04",
                  title: "Véhicule prêt",
                  icon: CheckCircle2,
                  copy: "Remise des clés, explications claires, facture prête.",
                },
              ].map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-sm"
                >
                  <span className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
                    {item.step}
                  </span>
                  <div className="mt-3 flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-amber-300" />
                    <h3 className="font-heading text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{item.copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="border-t border-white/[0.06] bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              {...sectionTitleMotion}
              className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Services de carrosserie & réparation
            </motion.h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Carrosserie & réparation",
                  copy: "Redressement, remplacement de pièces, peinture complète ou partielle.",
                },
                {
                  title: "Smart repair",
                  copy: "Petits impacts, rayures, jantes : corrections ciblées sans immobiliser trop longtemps.",
                },
                {
                  title: "Vitrage / pare-brise",
                  copy: "Réparation d’impact ou remplacement complet, gestion avec assurances.",
                },
                {
                  title: "Préparation contrôle technique",
                  copy: "Vérifications des points sensibles et mise en conformité avant passage.",
                },
                {
                  title: "Entretien toutes marques",
                  copy: "Vidanges, filtres, freins, climatisation, suivant les préconisations.",
                },
                {
                  title: "Diagnostic & électronique",
                  copy: "Lecture défauts, effacement, recherche de pannes électroniques.",
                },
              ].map((service) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-sm"
                >
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-medium text-amber-200">
                    <Sparkles className="h-3.5 w-3.5" />
                    Service garage – démonstration
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{service.copy}</p>
                  <button
                    type="button"
                    aria-disabled="true"
                    className="mt-4 inline-flex cursor-default items-center gap-2 rounded-lg border border-amber-500/40 bg-black/80 px-3 py-1.5 text-xs font-medium text-slate-100"
                  >
                    <Phone className="h-3.5 w-3.5 text-amber-300" />
                    Appeler (exemple non cliquable)
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* AVIS CLIENTS DEMO */}
        <section className="border-t border-white/[0.06] bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              {...sectionTitleMotion}
              className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Avis clients – exemple de démonstration
            </motion.h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                "Service rapide et professionnel. Véhicule rendu impeccable.",
                "Explications claires, respect des délais annoncés.",
                "Accueil sérieux, suivi transparent, aucun mauvaise surprise.",
              ].map((quote, i) => (
                <motion.figure
                  key={quote}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-200 backdrop-blur-sm"
                >
                  <p>« {quote} »</p>
                  <figcaption className="mt-3 text-xs text-slate-500">
                    Client local – démonstration
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        {/* LOCALISATION FICTIVE */}
        <section className="border-t border-slate-800 bg-black px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              {...sectionTitleMotion}
              className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Localisation – exemple fictif
            </motion.h2>
            <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <div className="space-y-3 text-sm text-slate-300">
                <p>
                  Cette section montre comment présenter clairement l’implantation du garage, sans
                  pour autant communiquer de vraies coordonnées.
                </p>
                <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-4">
                  <p className="font-heading text-sm font-semibold text-white">
                    Adresse fictive
                  </p>
                  <p className="mt-1 text-slate-300">
                    Zone industrielle – Région démo
                    <br />
                    0000 Ville démo
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Exemple de présentation. Aucun lieu réel, aucun itinéraire réel.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-56 overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/80">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_60%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.09)_1px,transparent_1px)] bg-[size:32px_32px]" />
                  <div className="relative flex h-full items-center justify-center">
                    <div className="flex flex-col items-center gap-1 rounded-2xl bg-slate-950/80 px-4 py-3 text-xs text-slate-100 shadow-lg shadow-slate-900/80">
                      <MapPin className="h-4 w-4 text-amber-300" />
                      <p className="font-semibold">Zone industrielle – Région démo</p>
                      <p className="text-[11px] text-slate-400">
                        Exemple d’intégration carte / direction sur une vraie installation.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  aria-disabled="true"
                  className="inline-flex cursor-default items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-xs font-medium text-slate-100"
                >
                  Voir l’itinéraire (exemple)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER DEMO */}
        <footer className="border-t border-white/[0.06] bg-slate-950 px-4 py-10 text-xs text-slate-500 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-heading text-sm font-semibold text-slate-300">
                Garage Démo
              </p>
              <p className="mt-1 text-[11px] text-slate-500">
                Ceci est une démonstration réalisée par VIGI AGENCY. Aucun garage réel, aucune
                donnée de contact réelle.
              </p>
            </div>
            <p className="text-[11px] text-slate-500">
              VIGI AGENCY · Spécialiste sites pour garages & urgences
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

// Avant / Après section, réutilisant les assets BMW
function BeforeAfterSection() {
  const [slider, setSlider] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;

    let direction: 1 | -1 = 1;
    let frame: number;
    let lastTime: number | null = null;

    const duration = 14000; // ms pour un aller (avant -> après ou inverse)

    const animate = (time: number) => {
      if (lastTime === null) {
        lastTime = time;
      }
      const delta = time - lastTime;
      lastTime = time;

      setSlider((current) => {
        const deltaPercent = (delta / duration) * 100 * direction;
        let next = current + deltaPercent;
        if (next >= 100) {
          next = 100;
          direction = -1;
        } else if (next <= 0) {
          next = 0;
          direction = 1;
        }
        return next;
      });

      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [auto]);

  const handleDrag = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSlider(percent);
  };

  return (
    <section className="border-t border-white/[0.06] bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          {...sectionTitleMotion}
          className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Avant / Après – travaux de carrosserie
        </motion.h2>
        <p className="mt-3 text-sm text-slate-300">
          Module de démonstration pour montrer clairement la différence avant / après intervention.
          Photos génériques, aucun véhicule réel identifié.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
          <div>
            <BeforeAfterSlider
              slider={slider}
              onChange={(value) => {
                setSlider(value);
                setAuto(false);
              }}
            />
          </div>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-4">
              <p className="font-heading text-sm font-semibold text-white">
                Comprendre en un coup d’œil
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Le visiteur voit immédiatement le type de dégâts pris en charge et le niveau de
                finition à la restitution.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>• Slider horizontal interactif (desktop + mobile).</li>
              <li>• Label AVANT / APRÈS discrets mais visibles.</li>
              <li>• Aucune marque réelle, aucune plaque reconnaissable.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

type BeforeAfterSliderProps = {
  slider: number;
  onChange: (value: number) => void;
};

function BeforeAfterSlider({ slider, onChange }: BeforeAfterSliderProps) {
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);

    const move = (ev: MouseEvent) => handleMove(ev.clientX, rect);
    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0]?.clientX ?? 0, rect);

    const move = (ev: TouchEvent) => handleMove(ev.touches[0]?.clientX ?? 0, rect);
    const end = () => {
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend", end);
      document.removeEventListener("touchcancel", end);
    };
    document.addEventListener("touchmove", move);
    document.addEventListener("touchend", end);
    document.addEventListener("touchcancel", end);
  };

  const handleMove = (clientX: number, rect: DOMRect) => {
    if (!rect) return;
    const x = clientX - rect.left;
    const next = Math.max(0, Math.min(100, (x / rect.width) * 100));
    onChange(next);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-slate-900/80 shadow-[0_24px_70px_rgba(15,23,42,0.9)]">
      <div className="relative aspect-[16/9] w-full">
        {/* Avant */}
        <Image
          src="/bmwavant.png"
          alt="Carrosserie avant intervention (exemple de démonstration)"
          fill
          className="object-cover"
          priority
        />
        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-100">
          AVANT
        </div>

        {/* Après */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}
        >
          <Image
            src="/bmwapres.png"
            alt="Carrosserie après intervention (exemple de démonstration)"
            fill
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-medium text-amber-200">
            APRÈS
          </div>
        </div>

        {/* Slider handle */}
        <div
          className="absolute inset-y-0 w-0.5 cursor-ew-resize bg-amber-400/80"
          style={{ left: `${slider}%` }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        >
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-slate-950/85 px-2 py-1 text-[10px] font-medium text-slate-50 shadow-lg shadow-slate-900/80">
            <span>⇆</span>
            <span>Glisser</span>
          </div>
        </div>
      </div>
      <p className="px-4 py-3 text-[11px] text-slate-400">
        Exemple d’intégration avant / après. Photos de démonstration uniquement, aucun véhicule réel.
      </p>
    </div>
  );
}

function ClipboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    >
      <rect
        x="7"
        y="3"
        width="10"
        height="18"
        rx="2"
        ry="2"
        className={cn("fill-transparent stroke-current")}
        strokeWidth={1.4}
      />
      <rect
        x="9"
        y="2"
        width="6"
        height="3"
        rx="1"
        ry="1"
        className={cn("fill-transparent stroke-current")}
        strokeWidth={1.4}
      />
      <path
        d="M10 9h4M10 12h4M10 15h2"
        className="stroke-current"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </svg>
  );
}

