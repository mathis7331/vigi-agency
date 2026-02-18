"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Shield,
  Clock,
  ImageIcon,
  Eye,
  Droplets,
  Car,
} from "lucide-react";
import { DemoHeader } from "@/components/demo/DemoHeader";
import { DemoStickyCTA } from "@/components/demo/DemoStickyCTA";
import { TrustInfoCard } from "@/components/demo/TrustInfoCard";
import { TrustInfoBlockMobile } from "@/components/demo/TrustInfoBlockMobile";
import { ConversionCTA } from "@/components/demo/ConversionCTA";
import { DemoFooter } from "@/components/demo/DemoFooter";

const DETAILING = {
  name: "Detailing Martin",
  phoneDisplay: "+32 473 12 34 56",
  phoneE164: "+32473123456",
  whatsappE164: "+32473123456",
  address: "Rue du Brillant 6, 1000 Bruxelles",
  hours: [
    { day: "Lun–Ven", hours: "09:00–18:00" },
    { day: "Sam", hours: "09:00–14:00" },
    { day: "Dim", hours: "Fermé" },
  ] as const,
  serviceArea: "Bruxelles • Brabant wallon • Hal-Vilvorde",
  extraLine: "Plus de 500 véhicules traités",
} as const;

const WHATSAPP_MESSAGE =
  "Je viens de voir la démo Detailing, j'aimerais un site comme ça.";

const trustBullets = [
  "Protection céramique",
  "Brillance longue durée",
  "Résultat visible immédiatement",
];

const signatureCards = [
  { phase: "AVANT", caption: "Correction micro-rayures", label: "État initial" },
  { phase: "POLISH", caption: "Lavage premium", label: "Traitement" },
  { phase: "APRÈS", caption: "Protection céramique", label: "Résultat" },
];

const galleryItems = [
  { src: "/huracanpropre.png", label: "Avant / Après", alt: "Transformation avant après" },
  { src: "/huracaninterieur.png", label: "Intérieur complet", alt: "Intérieur soigné" },
  { src: "/brille.png", label: "Finition brillante", alt: "Finition miroir" },
];

const whyColumns = [
  {
    title: "Brillance durable",
    copy: "Votre voiture garde son éclat plus longtemps. Finition soignée, protection réelle.",
    icon: Sparkles,
  },
  {
    title: "Protection réelle",
    copy: "Céramique ou traitement longue durée. La carrosserie est protégée contre les agressions.",
    icon: Shield,
  },
  {
    title: "Gain de temps",
    copy: "Un detailing bien fait, c'est moins de lavages répétés. Vous gagnez du temps.",
    icon: Clock,
  },
];

const processSteps = [
  { step: "1", title: "Vous prenez rendez-vous", copy: "Par téléphone ou en ligne. On vous propose un créneau.", icon: Calendar },
  { step: "2", title: "Inspection du véhicule", copy: "On regarde l'état de la carrosserie et on vous explique le plan.", icon: Eye },
  { step: "3", title: "Traitement detailing", copy: "Lavage, correction, protection. Travail soigné de A à Z.", icon: Droplets },
  { step: "4", title: "Récupération véhicule", copy: "Véhicule rendu propre, brillant, prêt à repartir.", icon: Car },
];

const testimonials = [
  { quote: "Résultat bluffant, voiture comme neuve.", author: "Client — Bruxelles" },
  { quote: "Brillance miroir, je recommande les yeux fermés.", author: "Client — Brabant" },
  { quote: "Protection céramique au top, ça tient.", author: "Client — Bruxelles" },
];

const sectionMotion = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
} as const;

export default function DemoDetailingPage() {
  return (
    <>
      <div className="noise" aria-hidden />
      <div className="speed-lines" aria-hidden />

      <main className="site-demo relative z-10 min-h-screen bg-[var(--bg)] pb-24 text-[var(--text)] sm:pb-0">
        <DemoHeader
          businessName={DETAILING.name}
          businessInitials="DM"
          demoType="Detailing"
          subtitle="Detailing & Lavage Premium"
          primaryCta={{ label: "Réserver", href: "/#contact?from=demo-detailing" }}
          secondaryCta={{
            label: "WhatsApp",
            href: `https://wa.me/${DETAILING.whatsappE164}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
          }}
        />

        {/* HERO — cinematic */}
        <section className="overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-black via-[var(--bg)] to-[var(--bg)] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-10">
          <div className="mx-auto grid max-w-6xl w-full min-w-0 gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 text-xs font-medium text-[var(--text-2)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                Detailing automobile
              </div>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-4xl lg:text-[2.75rem]">
                Detailing automobile — brillance et protection durable
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[var(--text-2)]">
                Un lavage ne change pas une voiture. Un detailing oui.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#resultat"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black shadow-[0_18px_50px_rgba(245,158,11,0.25)] transition hover:translate-y-[-1px] hover:shadow-[0_22px_60px_rgba(245,158,11,0.33)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  <ImageIcon className="h-4 w-4" />
                  Voir les résultats
                </a>
                <a
                  href="/#contact?from=demo-detailing"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  <Calendar className="h-4 w-4" />
                  Réserver un créneau
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
                Ceci est une page de démonstration. Aucun établissement réel.
              </p>
            </motion.div>
            {/* Right: visual block + trust card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden space-y-6 md:block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
                <div className="aspect-[4/3] w-full bg-gradient-to-br from-[var(--bg-2)] via-[var(--surface)] to-[var(--bg-2)]">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(245,158,11,0.06)_70%,transparent_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,transparent_50%,rgba(0,0,0,0.15)_100%)]" />
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,rgba(245,158,11,0.2),transparent)]" />
                </div>
                <p className="absolute bottom-4 left-4 right-4 text-center text-xs font-medium text-[var(--text-2)]">
                  Brillance · Protection · Résultat
                </p>
              </div>
              <TrustInfoCard
                address={DETAILING.address}
                hours={DETAILING.hours}
                serviceArea={DETAILING.serviceArea}
                phoneDisplay={DETAILING.phoneDisplay}
                phoneE164={DETAILING.phoneE164}
                extraLine={DETAILING.extraLine}
              />
            </motion.div>
          </div>
        </section>

        {/* Signature: Le résultat parle de lui-même — 3 cards + slider */}
        <section id="resultat" className="border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 overflow-x-hidden">
          <div className="mx-auto max-w-6xl w-full min-w-0">
            <motion.h2
              {...sectionMotion}
              className="text-center text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
            >
              Le résultat parle de lui-même
            </motion.h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {signatureCards.map((card, i) => (
                <motion.article
                  key={card.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition duration-500 hover:scale-[1.02] hover:border-[var(--accent)] hover:shadow-[0_24px_70px_rgba(0,0,0,0.85)] md:p-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                      {card.label}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-[var(--text)]">
                      {card.phase}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--text-2)]">{card.caption}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Before/After slider — same as other demos, amber style */}
            <div className="mt-14">
              <BeforeAfterSlider />
            </div>
          </div>
        </section>

        {/* Gallery — Quelques réalisations */}
        <section className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 overflow-x-hidden">
          <div className="mx-auto max-w-6xl w-full min-w-0">
            <motion.h2
              {...sectionMotion}
              className="text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
            >
              Quelques réalisations
            </motion.h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {galleryItems.map((item, i) => (
                <motion.article
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_18px_55px_rgba(0,0,0,0.75)] transition duration-500 hover:scale-[1.02] hover:border-[var(--accent)] hover:shadow-[0_22px_70px_rgba(0,0,0,0.85)]"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <p className="absolute bottom-3 left-3 right-3 text-center text-sm font-medium text-white">
                      {item.label}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi nos clients reviennent */}
        <section className="border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 overflow-x-hidden">
          <div className="mx-auto max-w-6xl w-full min-w-0">
            <motion.h2
              {...sectionMotion}
              className="text-center text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
            >
              Pourquoi nos clients reviennent
            </motion.h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {whyColumns.map((col, i) => (
                <motion.article
                  key={col.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.75)]"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-[var(--accent)]">
                    <col.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">{col.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">{col.copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Comment ça se passe */}
        <section className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 overflow-x-hidden">
          <div className="mx-auto max-w-6xl w-full min-w-0">
            <motion.h2
              {...sectionMotion}
              className="text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
            >
              Comment ça se passe
            </motion.h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((s, i) => (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.75)]"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-2)]">
                    Étape {s.step}
                  </span>
                  <div className="mt-3 flex items-center gap-2 text-[var(--accent)]">
                    <s.icon className="h-5 w-5" strokeWidth={2} />
                    <h3 className="text-base font-semibold text-[var(--text)]">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-[var(--text-2)]">{s.copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 overflow-x-hidden">
          <div className="mx-auto max-w-6xl w-full min-w-0">
            <motion.h2
              {...sectionMotion}
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
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
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

        <ConversionCTA
          phoneE164={DETAILING.phoneE164}
          phoneDisplay={DETAILING.phoneDisplay}
          whatsappE164={DETAILING.whatsappE164}
          whatsappMessage={WHATSAPP_MESSAGE}
          title="Envie du même résultat ?"
          description="Réservez un créneau ou contactez-nous par WhatsApp."
          primaryLabel="Réserver"
          primaryHref="/#contact?from=demo-detailing"
          secondaryLabel="WhatsApp"
          secondaryHref={`https://wa.me/${DETAILING.whatsappE164}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        />

        <TrustInfoBlockMobile
          address={DETAILING.address}
          hours={DETAILING.hours}
          serviceArea={DETAILING.serviceArea}
          phoneDisplay={DETAILING.phoneDisplay}
          phoneE164={DETAILING.phoneE164}
        />

        <DemoFooter
          businessName={DETAILING.name}
          demoType="Detailing"
          contactFrom="demo-detailing"
        />

        <DemoStickyCTA
          phoneE164={DETAILING.phoneE164}
          phoneDisplay={DETAILING.phoneDisplay}
          whatsappE164={DETAILING.whatsappE164}
          whatsappMessage={WHATSAPP_MESSAGE}
          primaryLabel="Réserver"
          primaryHref="/#contact?from=demo-detailing"
          secondaryLabel="WhatsApp"
          secondaryHref={`https://wa.me/${DETAILING.whatsappE164}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        />
      </main>
    </>
  );
}

function BeforeAfterSlider() {
  const [slider, setSlider] = useState(50);
  const [auto, setAuto] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<1 | -1>(1);

  useEffect(() => {
    if (!auto) return;
    let frame: number;
    let lastTime: number | null = null;
    const duration = 14000;

    const animate = (time: number) => {
      if (lastTime === null) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;
      setSlider((current) => {
        const dir = directionRef.current;
        const deltaPercent = (delta / duration) * 100 * dir;
        let next = current + deltaPercent;
        if (next >= 100) {
          next = 100;
          directionRef.current = -1;
        } else if (next <= 0) {
          next = 0;
          directionRef.current = 1;
        }
        return next;
      });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [auto]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width <= 0) return;
    const x = clientX - rect.left;
    setSlider(Math.max(0, Math.min(100, (x / rect.width) * 100)));
    setAuto(false);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleMove(e.clientX);
    const move = (ev: MouseEvent) => handleMove(ev.clientX);
    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const move = (ev: TouchEvent) => {
      if (ev.touches[0]) {
        const x = ev.touches[0].clientX - rect.left;
        setSlider(Math.max(0, Math.min(100, (x / rect.width) * 100)));
        setAuto(false);
      }
    };
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
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_60px_rgba(0,0,0,0.75)]"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/huracansale.png"
          alt="Avant detailing"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 1200px"
          priority
        />
        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-[var(--bg)]/90 px-3 py-1 text-xs font-medium text-[var(--text)]">
          AVANT
        </div>
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}
        >
          <Image
            src="/huracanpropre.png"
            alt="Après detailing"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
          <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-[var(--bg)]/90 px-3 py-1 text-xs font-medium text-[var(--accent)]">
            APRÈS
          </div>
        </div>
        <div
          className="absolute inset-y-0 w-1 cursor-ew-resize bg-[var(--accent)]"
          style={{ left: `${slider}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-[var(--bg)] px-2 py-1.5 text-[10px] font-medium text-[var(--text)] shadow-lg">
            <span>⇆</span> Glisser
          </div>
        </div>
      </div>
      <p className="px-4 py-3 text-xs text-[var(--text-2)]">
        Glissez pour révéler la transformation.
      </p>
    </motion.div>
  );
}
