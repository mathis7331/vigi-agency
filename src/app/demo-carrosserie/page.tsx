"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  FileText,
  CheckCircle2,
  Brush,
  Wind,
  Scissors,
  Gauge,
  ImageIcon,
  Send,
  Wrench,
  CheckCircle,
} from "lucide-react";
import { DemoHeader } from "@/components/demo/DemoHeader";
import { DemoStickyCTA } from "@/components/demo/DemoStickyCTA";
import { TrustInfoCard } from "@/components/demo/TrustInfoCard";
import { TrustInfoBlockMobile } from "@/components/demo/TrustInfoBlockMobile";
import { ConversionCTA } from "@/components/demo/ConversionCTA";
import { DemoFAQ } from "@/components/demo/DemoFAQ";
import { DemoFooter } from "@/components/demo/DemoFooter";

const CARROSSERIE = {
  name: "Carrosserie Dupont",
  phoneDisplay: "+32 473 12 34 56",
  phoneE164: "+32473123456",
  whatsappE164: "+32473123456",
  address: "Rue de l'Industrie 14, 7000 Mons",
  hours: [
    { day: "Lun–Ven", hours: "08:00–18:00" },
    { day: "Sam", hours: "09:00–13:00" },
    { day: "Dim", hours: "Fermé" },
  ] as const,
  serviceArea: "Mons • Charleroi • La Louvière • Hainaut",
  extraLine: "Plus de 200 véhicules réparés",
  badge: "Assurance acceptée",
} as const;

const WHATSAPP_MESSAGE =
  "Je viens de voir la démo Carrosserie, j'aimerais un site comme ça.";

const trustBullets = [
  "Devis clair avant intervention",
  "Photos avant/après disponibles",
  "RDV rapide",
];

const services = [
  { title: "Réparation carrosserie", icon: Wrench, copy: "Chocs, redressement, remplacement de pièces." },
  { title: "Pare-brise & vitrage", icon: Wind, copy: "Réparation d'impact ou remplacement, gestion assurance." },
  { title: "Débosselage", icon: Brush, copy: "Sans peinture quand c'est possible." },
  { title: "Peinture complète", icon: Brush, copy: "Finition soignée, couleur d'origine." },
  { title: "Rayures & impacts", icon: Scissors, copy: "Smart repair, corrections ciblées." },
  { title: "Préparation contrôle technique", icon: Gauge, copy: "Vérifications avant passage." },
];

const commentCaSePasse = [
  {
    step: "1",
    title: "Envoyez une photo",
    copy: "Impact, rayure ou pare-brise : envoyez une ou deux photos. On vous dit si c'est réparable et à quel ordre de prix.",
    icon: ImageIcon,
  },
  {
    step: "2",
    title: "Estimation rapide",
    copy: "Devis clair par téléphone ou par écrit. Pas de surprise. On planifie le créneau ensemble.",
    icon: Send,
  },
  {
    step: "3",
    title: "Réparation + remise du véhicule",
    copy: "Travail soigné, contrôle avant remise. Vous récupérez votre véhicule propre.",
    icon: CheckCircle,
  },
];

const faqsCarrosserie = [
  {
    q: "Peut-on avoir un devis sans se déplacer ?",
    a: "Oui. Envoyez des photos par WhatsApp ou par mail, on vous donne une estimation rapide.",
  },
  {
    q: "Travaillez-vous avec les assurances ?",
    a: "Oui. On gère les dossiers assurance (pare-brise, dégâts, etc.) et on vous guide.",
  },
  {
    q: "Combien de temps prend une réparation ?",
    a: "Ça dépend du type de travail. On vous donne un délai réaliste dès le devis.",
  },
  {
    q: "Peut-on rouler avec un impact ?",
    a: "Selon la taille et la place (pare-brise, portière…). En cas de doute, appelez-nous, on vous dit tout de suite.",
  },
  {
    q: "Proposez-vous un véhicule de remplacement ?",
    a: "Selon disponibilité. À demander au moment du devis.",
  },
] as const;

const testimonials = [
  { quote: "Travail propre et communication claire.", author: "Client — Mons" },
  { quote: "Devis tenu, véhicule rendu nickel.", author: "Client — Charleroi" },
  { quote: "Pare-brise changé rapidement, rien à redire.", author: "Client — La Louvière" },
];

const sectionTitleMotion = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
} as const;

export default function DemoCarrosseriePage() {
  return (
    <>
      <div className="noise" aria-hidden />
      <div className="speed-lines" aria-hidden />

      <main className="site-demo relative z-10 min-h-screen bg-[var(--bg)] pb-24 text-[var(--text)] sm:pb-0">
        <DemoHeader
          businessName={CARROSSERIE.name}
          businessInitials="CD"
          demoType="Carrosserie"
          subtitle="Carrosserie & Pare-brise"
          primaryCta={{ label: "Demander un devis", href: "/#contact?from=demo-carrosserie" }}
          secondaryCta={{ label: "Appeler", href: `tel:${CARROSSERIE.phoneE164}` }}
        />

        {/* HERO */}
        <section className="overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-black via-[var(--bg)] to-[var(--bg)] px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-10">
          <div className="mx-auto grid max-w-6xl w-full min-w-0 gap-8 md:gap-12 md:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 text-xs font-medium text-[var(--text-2)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                Carrosserie & pare-brise
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-4xl lg:text-[2.75rem]">
                  Carrosserie et pare-brise — réparations soignées
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-[var(--text-2)]">
                  Un impact ? Envoyez une photo, on vous guide.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/#contact?from=demo-carrosserie"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black shadow-[0_18px_50px_rgba(245,158,11,0.25)] transition hover:translate-y-[-1px] hover:shadow-[0_22px_60px_rgba(245,158,11,0.33)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  <FileText className="h-4 w-4" />
                  Demander un devis
                </a>
                <a
                  href={`tel:${CARROSSERIE.phoneE164}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  <Phone className="h-4 w-4" />
                  Appeler
                </a>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-[var(--text-2)]">
                {trustBullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent)]" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--text-2)]">
                Ceci est une page de démonstration. Aucun numéro réel, aucun atelier réel.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <TrustInfoCard
                address={CARROSSERIE.address}
                hours={CARROSSERIE.hours}
                serviceArea={CARROSSERIE.serviceArea}
                phoneDisplay={CARROSSERIE.phoneDisplay}
                phoneE164={CARROSSERIE.phoneE164}
                extraLine={CARROSSERIE.extraLine}
                badge={CARROSSERIE.badge}
              />
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-6xl w-full min-w-0">
            <motion.h2
              {...sectionTitleMotion}
              className="text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
            >
              Services
            </motion.h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {services.map((s, i) => (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.75)] transition duration-300 hover:-translate-y-1 md:hover:border-[var(--accent)] md:hover:bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] md:hover:shadow-[0_22px_70px_rgba(0,0,0,0.85)]"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-[var(--accent)]">
                    <s.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--text)]">{s.title}</h3>
                  <p className="mt-1 text-sm text-[var(--text-2)]">{s.copy}</p>
                </motion.article>
              ))}
            </div>
            <p className="mt-5 text-sm text-[var(--text-2)]">
              Vous ne savez pas si c'est réparable ? Appelez, on vous dit directement.
            </p>
          </div>
        </section>

        {/* AVANT / APRÈS — star section */}
        <BeforeAfterSection />

        {/* COMMENT ÇA SE PASSE */}
        <section className="border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-6xl w-full min-w-0">
            <motion.h2
              {...sectionTitleMotion}
              className="text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
            >
              Comment ça se passe
            </motion.h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {commentCaSePasse.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.75)] md:p-6"
                >
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-[var(--accent)]">
                    <item.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-2)]">
                    Étape {item.step}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-[var(--text)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">{item.copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-6xl w-full min-w-0">
            <motion.h2
              {...sectionTitleMotion}
              className="text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
            >
              Avis clients
            </motion.h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <motion.figure
                  key={t.quote}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.75)]"
                >
                  <blockquote className="text-sm leading-relaxed text-[var(--text)]">
                    « {t.quote} »
                  </blockquote>
                  <figcaption className="mt-3 text-xs text-[var(--text-2)]">{t.author}</figcaption>
                </motion.figure>
              ))}
            </div>
            <p className="mt-4 text-xs text-[var(--text-2)]">
              Exemples de retours clients (démonstration).
            </p>
          </div>
        </section>

        <DemoFAQ faqs={faqsCarrosserie} />

        <ConversionCTA
          phoneE164={CARROSSERIE.phoneE164}
          phoneDisplay={CARROSSERIE.phoneDisplay}
          whatsappE164={CARROSSERIE.whatsappE164}
          whatsappMessage={WHATSAPP_MESSAGE}
          title="Besoin d'un devis carrosserie ?"
          description="Demandez un devis ou appelez-nous. On vous répond rapidement."
          primaryLabel="Demander un devis"
          primaryHref="/#contact?from=demo-carrosserie"
          secondaryLabel="Appeler"
          secondaryHref={`tel:${CARROSSERIE.phoneE164}`}
        />

        <TrustInfoBlockMobile
          address={CARROSSERIE.address}
          hours={CARROSSERIE.hours}
          serviceArea={CARROSSERIE.serviceArea}
          phoneDisplay={CARROSSERIE.phoneDisplay}
          phoneE164={CARROSSERIE.phoneE164}
        />

        <DemoFooter
          businessName={CARROSSERIE.name}
          demoType="Carrosserie"
          contactFrom="demo-carrosserie"
        />

        <DemoStickyCTA
          phoneE164={CARROSSERIE.phoneE164}
          phoneDisplay={CARROSSERIE.phoneDisplay}
          whatsappE164={CARROSSERIE.whatsappE164}
          whatsappMessage={WHATSAPP_MESSAGE}
          variant="devis-call"
          primaryLabel="Demander un devis"
          primaryHref="/#contact?from=demo-carrosserie"
          secondaryLabel="Appeler"
          secondaryHref={`tel:${CARROSSERIE.phoneE164}`}
        />
      </main>
    </>
  );
}

function BeforeAfterSection() {
  const [slider, setSlider] = useState(50);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    let direction: 1 | -1 = 1;
    let frame: number;
    let lastTime: number | null = null;
    const duration = 14000;

    const animate = (time: number) => {
      if (lastTime === null) lastTime = time;
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

  const getContainerRect = (handleEl: HTMLDivElement) =>
    handleEl.parentElement?.getBoundingClientRect() ?? new DOMRect(0, 0, 1, 1);

  const handleMove = (clientX: number, rect: DOMRect) => {
    if (!rect || rect.width <= 0) return;
    const x = clientX - rect.left;
    setSlider(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = getContainerRect(e.currentTarget);
    handleMove(e.clientX, rect);
    setAuto(false);
    const move = (ev: MouseEvent) => handleMove(ev.clientX, rect);
    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = getContainerRect(e.currentTarget);
    handleMove(e.touches[0]?.clientX ?? 0, rect);
    setAuto(false);
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

  return (
    <section className="border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl w-full min-w-0">
        <motion.h2
          {...sectionTitleMotion}
          className="text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
        >
          Avant / Après
        </motion.h2>
        <p className="mt-2 text-sm text-[var(--text-2)]">
          Réparation aile + peinture. Résultat visible immédiatement.
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_18px_55px_rgba(0,0,0,0.75)]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/rs3avant.png"
                alt="Véhicule avant réparation (exemple)"
                fill
                className="object-cover"
                priority
              />
              <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-[var(--bg)] px-3 py-1 text-xs font-medium text-[var(--text)]">
                AVANT
              </div>
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}
              >
                <Image
                  src="/rs3apres.png"
                  alt="Véhicule après réparation (exemple)"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-[var(--bg)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
                  APRÈS
                </div>
              </div>
              <div
                className="absolute inset-y-0 w-0.5 cursor-ew-resize bg-[var(--accent)]"
                style={{ left: `${slider}%` }}
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
              >
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-[var(--bg)] px-2 py-1 text-[10px] font-medium text-[var(--text)] shadow-lg">
                  <span>⇆</span> Glisser
                </div>
              </div>
            </div>
            <p className="px-4 py-3 text-xs text-[var(--text-2)]">
              Réparation aile + peinture — exemple de démonstration.
            </p>
          </div>
          <div className="space-y-3 text-sm text-[var(--text-2)]">
            <p className="font-medium text-[var(--text)]">
              Résultat visible immédiatement.
            </p>
            <p>
              Le client voit la différence avant / après. Travail soigné, finition propre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
