"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Battery,
  AlertCircle,
  Truck,
  KeyRound,
  CircleAlert,
  Fuel,
} from "lucide-react";
import { DemoHeader } from "@/components/demo/DemoHeader";
import { DemoStickyCTA } from "@/components/demo/DemoStickyCTA";
import { TrustInfoCard } from "@/components/demo/TrustInfoCard";
import { TrustInfoBlockMobile } from "@/components/demo/TrustInfoBlockMobile";
import { ConversionCTA } from "@/components/demo/ConversionCTA";
import { DemoFAQ } from "@/components/demo/DemoFAQ";
import { DemoFooter } from "@/components/demo/DemoFooter";

const DEPANNAGE = {
  name: "Dépannage Martin",
  phoneDisplay: "+32 473 12 34 56",
  phoneE164: "+32473123456",
  whatsappE164: "+32473123456",
  address: "Rue de la Gare 8, 7000 Mons",
  serviceArea: "Mons • Charleroi • La Louvière • Hainaut • Brabant wallon",
  hours: [{ day: "Ouvert", hours: "24h/7" }] as const,
  extraLine: "+ de 300 interventions locales",
} as const;

const WHATSAPP_MESSAGE =
  "Je viens de voir la démo Dépannage, j'aimerais un site comme ça.";

const trustBullets = [
  "Arrivée rapide selon zone",
  "Intervention locale",
  "Paiement simple",
];

const services = [
  { title: "Batterie à plat", icon: Battery, copy: "Démarrage sur place ou remorquage." },
  { title: "Panne moteur", icon: AlertCircle, copy: "Diagnostic rapide, remorquage si besoin." },
  { title: "Remorquage garage", icon: Truck, copy: "Jusqu'au garage de votre choix." },
  { title: "Ouverture véhicule", icon: KeyRound, copy: "Clés à l'intérieur, on ouvre." },
  { title: "Crevaison", icon: CircleAlert, copy: "Dépannage ou remorquage." },
  { title: "Erreur carburant", icon: Fuel, copy: "Mauvais carburant, vidange, remorquage." },
];

const quandOnNousAppelle = [
  {
    title: "Voiture ne démarre pas",
    copy: "On vient sur place, on teste la batterie et le démarreur. Si on peut réparer sur place, on le fait. Sinon on remorque.",
    cta: "Appelez, on vous dit quoi faire.",
  },
  {
    title: "Panne sur la route",
    copy: "Vous êtes en sécurité ? On localise, on vient. Sécurisation du véhicule puis remorquage vers le garage ou chez vous.",
    cta: "Appelez, on vous dit quoi faire.",
  },
  {
    title: "Véhicule bloqué chez vous",
    copy: "Batterie, panne, pas de clés… On intervient à domicile. Démarrage ou remorquage selon la situation.",
    cta: "Appelez, on vous dit quoi faire.",
  },
];

const faqsDepannage = [
  {
    q: "Combien de temps pour intervenir ?",
    a: "Selon la zone et l'heure, en général entre 30 min et 1h. Appelez-nous, on vous donne une fourchette directe.",
  },
  {
    q: "Puis-je payer par carte ?",
    a: "Oui. Carte et cash acceptés.",
  },
  {
    q: "Intervenez-vous la nuit ?",
    a: "Oui. On est joignables 24h/24, 7j/7.",
  },
  {
    q: "Que faire en attendant ?",
    a: "Restez en sécurité (hors voie si possible, feux de détresse). On vous guide au téléphone.",
  },
  {
    q: "Remorquez-vous vers le garage de mon choix ?",
    a: "Oui. On emmène le véhicule où vous voulez (garage, domicile, etc.).",
  },
] as const;

const testimonials = [
  { quote: "Arrivé rapidement, problème réglé en 20 min.", author: "Client – Mons" },
  { quote: "Appel à 2h du matin, quelqu'un est venu. Merci.", author: "Client – Charleroi" },
  { quote: "Prix clair, pas de surprise. Je recommande.", author: "Client – La Louvière" },
];

const sectionTitleMotion = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
} as const;

export default function DemoDepannagePage() {
  return (
    <>
      <div className="noise" aria-hidden />
      <div className="speed-lines" aria-hidden />

      <main className="site-demo relative z-10 min-h-screen bg-[var(--bg)] pb-24 text-[var(--text)] sm:pb-0">
        <DemoHeader
          businessName={DEPANNAGE.name}
          businessInitials="DM"
          demoType="Dépannage"
          subtitle="Dépannage & remorquage — 24h/7"
          primaryCta={{ label: "Appeler maintenant", href: `tel:${DEPANNAGE.phoneE164}` }}
          secondaryCta={{
            label: "WhatsApp",
            href: `https://wa.me/${DEPANNAGE.whatsappE164}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
          }}
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
                24h/24 · 7j/7
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-4xl lg:text-[2.75rem]">
                  Dépannage auto rapide — 24h/7
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-[var(--text-2)]">
                  Besoin d&apos;aide maintenant ? On vous répond directement.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${DEPANNAGE.phoneE164}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black shadow-[0_18px_50px_rgba(245,158,11,0.25)] transition hover:translate-y-[-1px] hover:shadow-[0_22px_60px_rgba(245,158,11,0.33)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  <Phone className="h-4 w-4" />
                  Appeler maintenant
                </a>
                <a
                  href={`https://wa.me/${DEPANNAGE.whatsappE164}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Envoyer un WhatsApp
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
                Ceci est une page de démonstration. Aucun numéro réel, aucun prestataire réel.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <TrustInfoCard
                address={DEPANNAGE.address}
                hours={DEPANNAGE.hours}
                serviceArea={DEPANNAGE.serviceArea}
                phoneDisplay={DEPANNAGE.phoneDisplay}
                phoneE164={DEPANNAGE.phoneE164}
                extraLine={DEPANNAGE.extraLine}
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
              Types d&apos;intervention
            </motion.h2>
            <div className="mt-6 grid gap-4 md:gap-5 md:grid-cols-3">
              {services.map((s, i) => (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.75)] transition duration-300 md:hover:-translate-y-1 md:hover:border-[var(--accent)] md:hover:bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] md:hover:shadow-[0_22px_70px_rgba(0,0,0,0.85)]"
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
              Urgence ? Appelez, on vous dit directement si un déplacement est nécessaire.
            </p>
          </div>
        </section>

        {/* QUAND ON NOUS APPELLE */}
        <section className="border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-6xl w-full min-w-0">
            <motion.h2
              {...sectionTitleMotion}
              className="text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
            >
              Quand on nous appelle
            </motion.h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {quandOnNousAppelle.map((block, i) => (
                <motion.article
                  key={block.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.75)] md:p-6"
                >
                  <h3 className="text-base font-semibold text-[var(--text)]">{block.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">{block.copy}</p>
                  <p className="mt-4 text-xs font-medium text-[var(--accent)]">→ {block.cta}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* INTERVENTIONS RÉCENTES (avant/après + témoignages) */}
        <ProofSection />

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

        <DemoFAQ faqs={faqsDepannage} />

        <ConversionCTA
          phoneE164={DEPANNAGE.phoneE164}
          phoneDisplay={DEPANNAGE.phoneDisplay}
          whatsappE164={DEPANNAGE.whatsappE164}
          whatsappMessage={WHATSAPP_MESSAGE}
        />

        <TrustInfoBlockMobile
          address={DEPANNAGE.address}
          hours={DEPANNAGE.hours}
          serviceArea={DEPANNAGE.serviceArea}
          phoneDisplay={DEPANNAGE.phoneDisplay}
          phoneE164={DEPANNAGE.phoneE164}
        />

        <DemoFooter businessName={DEPANNAGE.name} demoType="Dépannage" contactFrom="demo-depannage" />

        <DemoStickyCTA
          phoneE164={DEPANNAGE.phoneE164}
          phoneDisplay={DEPANNAGE.phoneDisplay}
          whatsappE164={DEPANNAGE.whatsappE164}
          whatsappMessage={WHATSAPP_MESSAGE}
        />
      </main>
    </>
  );
}

function ProofSection() {
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
          Interventions récentes
        </motion.h2>
        <p className="mt-2 text-sm text-[var(--text-2)]">
          Dépannage route, remorquage atelier, batterie remplacée.
        </p>
        <div className="mt-8">
          <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_18px_55px_rgba(0,0,0,0.75)]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/avantdepan.png"
                alt="Véhicule en panne avant dépannage (exemple)"
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
                  src="/apresdepan.png"
                  alt="Véhicule pris en charge (exemple)"
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
          </div>
        </div>
      </div>
    </section>
  );
}

