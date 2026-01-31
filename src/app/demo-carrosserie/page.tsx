"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  Sparkles,
  Star,
  Camera,
  Brush,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const sectionTitle = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
} as const;

export default function DemoCarrosseriePage() {
  return (
    <>
      <div className="noise" aria-hidden />
      <div className="speed-lines" aria-hidden />

      <main className="site-demo relative z-10 min-h-screen bg-slate-950 pb-24 text-slate-50 sm:pb-0">
        {/* Top bar */}
        <header className="border-b border-slate-800 bg-gradient-to-r from-black via-slate-950 to-black/90 backdrop-blur-xl">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-400 text-xs font-semibold text-slate-950">
                CD
              </div>
              <div className="leading-tight">
                <p className="font-heading text-sm font-semibold tracking-tight text-white">
                  Carrosserie Démo
                </p>
                <p className="text-[11px] text-slate-400">Page de démonstration · VIGI AGENCY</p>
              </div>
            </div>
            <a
              href="/"
              className="rounded-lg border border-slate-600/80 bg-black/80 px-3 py-1.5 text-[11px] font-medium text-slate-100 transition hover:border-slate-200 hover:text-white"
            >
              Retour au site agence
            </a>
          </div>
        </header>

        {/* HERO VISUEL */}
        <section className="overflow-hidden border-b border-slate-800 bg-gradient-to-b from-black via-slate-950 to-black px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.3),transparent_60%)] opacity-70" />
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-500/50 bg-slate-900/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_0_4px_rgba(56,189,248,0.45)]" />
                Démonstration · Carrosserie & vitrage
              </div>

              <div className="space-y-3">
                <h1 className="font-heading text-3xl font-semibold leading-[1.06] tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
                  <span className="block text-sm font-medium uppercase tracking-[0.24em] text-slate-300">
                    Carrosserie & vitrage — démo
                  </span>
                  <span className="mt-2 block text-slate-50">
                    Réparations, pare-brise, vitres teintées & finitions orientées résultat visuel.
                  </span>
                </h1>
                <p className="max-w-xl text-[15px] leading-relaxed text-slate-300">
                  Page de démonstration pensée pour montrer le avant / après, rassurer sur la
                  qualité du travail et générer des demandes de devis.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex cursor-default items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.75 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(56,189,248,0.6)]"
                  aria-disabled="true"
                >
                  <Sparkles className="h-4 w-4" />
                  Demander un devis (exemple)
                </button>
                <button
                  type="button"
                  className="inline-flex cursor-default items-center gap-2 rounded-lg border border-slate-500/80 bg-slate-950/80 px-4 py-2.5 text-sm font-medium text-slate-100"
                  aria-disabled="true"
                >
                  <Calendar className="h-4 w-4" />
                  Prendre rendez-vous (démonstration)
                </button>
              </div>

              <div className="flex flex-wrap gap-2 text-[11px] text-slate-200">
                {["Travail soigné", "Avant / Après visuel", "Sur rendez-vous"].map((badge) => (
                  <div
                    key={badge}
                    className="inline-flex items-center gap-1 rounded-full border border-slate-600/80 bg-black/80 px-3 py-1"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-500">
                Page de démonstration. Aucun garage réel, aucun numéro ou email réel.
              </p>
            </motion.div>

            {/* Side visual — focus sur le résultat visuel */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_60%)] blur-3xl" />
              <div className="rounded-[30px] border border-slate-700/80 bg-gradient-to-b from-slate-900 via-black to-slate-950 p-4 shadow-[0_26px_80px_rgba(0,0,0,0.95)]">
                <div className="mb-3 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="inline-flex items-center gap-1">
                    <Camera className="h-3.5 w-3.5 text-sky-400" />
                    Focus sur le résultat
                  </span>
                  <span className="text-[10px] text-slate-400">Vue avant / après simulée</span>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900">
                  <Image
                    src="/rs3avant.png"
                    alt="Exemple de véhicule avant amélioration (démonstration)"
                    width={800}
                    height={450}
                    className="h-full w-full object-cover opacity-70"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-4 pb-3 pt-10 text-[11px] text-slate-100">
                    <p className="font-heading text-sm font-semibold">
                      Exemple de mise en valeur d’une réalisation
                    </p>
                    <p className="mt-1 text-[11px] text-slate-300">
                      La page met en avant les résultats visuels, pas seulement la liste des
                      services.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AVANT / APRÈS RS3 */}
        <BeforeAfterSection />

        {/* POURQUOI ÇA MARCHE — version esthétique */}
        <section className="border-t border-slate-800 bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              {...sectionTitle}
              className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Pourquoi cette page fonctionne pour la carrosserie
            </motion.h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Camera,
                  title: "Avant / après visuel",
                  copy: "Le client voit le résultat avant même de demander un devis.",
                },
                {
                  icon: Brush,
                  title: "Travail de précision",
                  copy: "Mise en avant du soin apporté aux finitions et aux alignements.",
                },
                {
                  icon: Star,
                  title: "Mise en valeur des réalisations",
                  copy: "Photos claires, sans flou, sur fonds propres et lisibles.",
                },
                {
                  icon: Phone,
                  title: "Mobile-friendly",
                  copy: "Demande de devis et prise de rendez-vous possibles directement depuis le téléphone.",
                },
                {
                  icon: ShieldCheck,
                  title: "Preuves clients",
                  copy: "Avis et réalisations visibles pour rassurer avant de confier le véhicule.",
                },
                {
                  icon: Calendar,
                  title: "Sur rendez-vous",
                  copy: "Process simple et clair pour organiser les travaux.",
                },
              ].map((card) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 backdrop-blur-sm"
                >
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-sky-300">
                    <card.icon className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading text-sm font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-300">{card.copy}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES CARROSSERIE */}
        <section className="border-t border-slate-800 bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              {...sectionTitle}
              className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Services proposés
            </motion.h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Carrosserie & peinture",
                  copy: "Réparations de chocs, redressement, peinture partielle ou complète.",
                },
                {
                  title: "Pare-brise / vitrage",
                  copy: "Réparation d’impact ou remplacement complet, gestion avec les assurances.",
                },
                {
                  title: "Vitres teintées",
                  copy: "Pose de films teintés de qualité, avec rendu propre et régulier.",
                },
                {
                  title: "Rénovation optiques",
                  copy: "Polissage et protection pour retrouver une visibilité optimale.",
                },
                {
                  title: "Personnalisation esthétique",
                  copy: "Détails, jantes, éléments contrastés, touches de couleur.",
                },
                {
                  title: "Devis sur demande",
                  copy: "Chaque projet est différent : devis personnalisé sur base de photos.",
                },
              ].map((service) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col rounded-2xl border border-slate-700/80 bg-slate-900/80 p-5 backdrop-blur-sm"
                >
                  <div className="mb-2 inline-flex items-center gap-2 text-[11px] text-slate-300">
                    <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                    Service carrosserie — démonstration
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{service.copy}</p>
                  <button
                    type="button"
                    aria-disabled="true"
                    className="mt-4 inline-flex cursor-default items-center gap-2 rounded-lg border border-slate-600/80 bg-black/80 px-3 py-1.5 text-xs font-medium text-slate-100"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    Demander un devis (exemple)
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS CLIENT */}
        <section className="border-t border-slate-800 bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              {...sectionTitle}
              className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Comment ça se passe pour le client
            </motion.h2>
            <div className="mt-8 grid gap-6 md:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Consulte les réalisations",
                  copy: "Le client voit des exemples de travaux avant / après.",
                },
                {
                  step: "02",
                  title: "Demande un devis ou un rendez-vous",
                  copy: "Un bouton clair lui permet d’envoyer sa demande.",
                },
                {
                  step: "03",
                  title: "Prise en charge du véhicule",
                  copy: "Les travaux sont réalisés selon le devis validé.",
                },
                {
                  step: "04",
                  title: "Résultat final livré",
                  copy: "Le véhicule est rendu propre, avec une finition soignée.",
                },
              ].map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-4 backdrop-blur-sm"
                >
                  <span className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
                    {item.step}
                  </span>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-sky-400" />
                    <h3 className="font-heading font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{item.copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* AVIS CLIENTS DEMO */}
        <section className="border-t border-slate-800 bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              {...sectionTitle}
              className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Avis clients — démonstration
            </motion.h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                "Rendu impeccable, travail propre.",
                "Vitres teintées parfaites, je recommande.",
                "Finitions soignées, le véhicule est comme neuf.",
              ].map((quote, i) => (
                <motion.figure
                  key={quote}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-sm text-slate-200 backdrop-blur-sm"
                >
                  <p>« {quote} »</p>
                  <figcaption className="mt-3 text-xs text-slate-500">
                    Client — exemple de démonstration
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
              {...sectionTitle}
              className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Localisation de l’atelier — exemple fictif
            </motion.h2>
            <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
              <div className="space-y-3 text-sm text-slate-300">
                <p>
                  Exemple de présentation pour un atelier de carrosserie et vitrage, sans afficher
                  de coordonnées réelles.
                </p>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                  <p className="font-heading text-sm font-semibold text-white">
                    Atelier — Région démo
                  </p>
                  <p className="mt-1 text-slate-300">
                    Zone artisanale, zones résidentielles et zones d’activités de la région démo.
                  </p>
                  <p className="mt-2 text-[11px] text-slate-500">
                    Aucune adresse réelle. À adapter avec vos informations lors d’un vrai projet.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-56 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.35),transparent_60%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.09)_1px,transparent_1px)] bg-[size:32px_32px]" />
                  <div className="relative flex h-full items-center justify-center">
                    <div className="flex flex-col items-center gap-1 rounded-2xl bg-black/85 px-4 py-3 text-xs text-slate-100 shadow-lg shadow-black/80">
                      <Camera className="h-4 w-4 text-sky-300" />
                      <p className="font-semibold">Localisation de l’atelier — Région démo</p>
                      <p className="text-[11px] text-slate-400">
                        Illustration de zone. À remplacer par une vraie carte dans un projet réel.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  aria-disabled="true"
                  className="inline-flex cursor-default items-center gap-2 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs font-medium text-slate-100"
                >
                  Voir l’itinéraire (exemple)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER DEMO */}
        <footer className="border-t border-slate-800 bg-black px-4 py-10 text-xs text-slate-500 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-heading text-sm font-semibold text-slate-200">
                Carrosserie Démo
              </p>
              <p className="mt-1 text-[11px] text-slate-500">
                Page de démonstration réalisée par VIGI AGENCY. Aucun numéro réel, aucun email
                réel, aucun garage réel.
              </p>
            </div>
            <p className="text-[11px] text-slate-500">
              VIGI AGENCY · Pages premium pour carrosserie, vitrage & modifications
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

// Avant / Après RS3
function BeforeAfterSection() {
  const [slider, setSlider] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;

    let direction: 1 | -1 = 1;
    let frame: number;
    let lastTime: number | null = null;
    const duration = 14000; // aller simple avant -> après (ou inverse)

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

  return (
    <section className="border-t border-slate-800 bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          {...sectionTitle}
          className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Avant / Après — mise en valeur du résultat
        </motion.h2>
        <p className="mt-3 text-sm text-slate-300">
          Exemple d’avant / après sur une RS3. Photos de démonstration uniquement, aucun véhicule
          réel identifié.
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
          <div className="space-y-3 text-sm text-slate-300">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="font-heading text-sm font-semibold text-white">
                Le client voit tout de suite la différence
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Le module avant / après montre clairement le gain visuel, sans long discours. C’est
                ce que les garages orientés résultat apprécient.
              </p>
            </div>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>• RS3 AVANT affichée par défaut, APRÈS révélé au glisser.</li>
              <li>• Curseur propre, parfaitement aligné.</li>
              <li>• Labels “AVANT” et “APRÈS” discrets, sans texte au centre.</li>
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
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 shadow-[0_24px_70px_rgba(15,23,42,0.9)]">
      <div className="relative aspect-[16/9] w-full">
        {/* Avant */}
        <Image
          src="/rs3avant.png"
          alt="Véhicule avant travaux (exemple de démonstration)"
          fill
          className="object-cover"
          priority
        />
        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-slate-100">
          AVANT
        </div>

        {/* Après */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}
        >
          <Image
            src="/rs3apres.png"
            alt="Véhicule après travaux (exemple de démonstration)"
            fill
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/85 px-3 py-1 text-xs font-medium text-sky-200">
            APRÈS
          </div>
        </div>

        {/* Slider handle */}
        <div
          className="absolute inset-y-0 w-0.5 cursor-ew-resize bg-sky-400/80"
          style={{ left: `${slider}%` }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        >
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-black/85 px-2 py-1 text-[10px] font-medium text-slate-50 shadow-lg shadow-black/80">
            <span>⇆</span>
            <span>Glisser</span>
          </div>
        </div>
      </div>
    </div>
  );
}

