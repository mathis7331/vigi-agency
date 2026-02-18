"use client";

import React, { useState, useEffect, Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Phone,

  MessageCircle,
  MapPin,
  Zap,
  Star,
  Shield,
  ChevronRight,
  Wrench,
  Truck,
  Car,
  FileText,
  Droplets,
  Check,
  Sparkles,
} from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#demo", label: "Démonstrations" },
  { href: "#methode", label: "Méthode" },
  { href: "#preuves", label: "Preuves" },
  { href: "#offres", label: "Offres" },
  { href: "#contact", label: "Contact" },
];

const whyCards = [
  {
    icon: Phone,
    title: "Plus d'appels",
    copy: "Bouton d'appel direct sur mobile. Vos clients vous contactent en un tap, sans friction.",
  },
  {
    icon: MessageCircle,
    title: "Réponse plus rapide",
    copy: "WhatsApp intégré avec message pré-rempli. Vos clients vous contactent directement, vous répondez quand vous pouvez.",
  },
  {
    icon: MapPin,
    title: "Visibilité locale sur Google Maps",
    copy: "Optimisé pour « garage Mons », « dépannage Charleroi ». Vous apparaissez quand on vous cherche.",
  },
  {
    icon: Zap,
    title: "Site ultra rapide",
    copy: "Pages qui chargent instantanément. Google vous privilégie, vos clients restent.",
  },
  {
    icon: Star,
    title: "Preuves sociales",
    copy: "Avis clients et photos de travaux. Vos prospects se rassurent avant d'appeler.",
  },
  {
    icon: Shield,
    title: "Toujours accessible",
    copy: "Page de secours en cas de panne. Vos clients vous trouvent toujours, même en urgence.",
  },
];

const demos = [
  {
    id: "garage",
    icon: Wrench,
    title: "Garage",
    tabLabel: "Garage",
    bullets: [
      "Fiche atelier claire pour rassurer dès l'arrivée",
      "Services visibles immédiatement sur mobile",
      "Bouton d'appel accessible en 1 tap",
    ],
    previewTag: "GARAGE",
    previewTitle: "Pensé pour les garages qui veulent plus d'appels, pas plus de gestion.",
    previewCopy: "Une page simple et efficace, comme votre façon de travailler.",
    ctaLabel: "Voir la démo",
  },
  {
    id: "depannage",
    icon: Truck,
    title: "Dépannage urgence",
    tabLabel: "Dépannage urgence",
    bullets: [
      "Page urgence accessible 24/7",
      "Appel direct et WhatsApp visibles en permanence",
      "Zone d'intervention claire pour éviter les appels inutiles",
    ],
    previewTag: "DÉPANNAGE",
    previewTitle: "Quand un client est en panne, il doit pouvoir vous appeler sans réfléchir.",
    previewCopy: "Moins de questions, plus d'interventions.",
    ctaLabel: "Voir la démo",
  },
  {
    id: "carrosserie",
    icon: Car,
    title: "Carrosserie / Pare-brise",
    tabLabel: "Carrosserie / Pare-brise",
    bullets: [
      "Avant / après pour montrer le travail réel",
      "Demande de devis simple et rapide",
      "Prise de rendez-vous sans échange inutile",
    ],
    previewTag: "CARROSSERIE",
    previewTitle: "Ici, ce sont les résultats qui font la différence.",
    previewCopy: "Le visuel rassure avant même le premier contact.",
    ctaLabel: "Voir la démo",
  },
  {
    id: "detailing",
    icon: Droplets,
    title: "Detailing / Lavage auto",
    tabLabel: "Detailing / Lavage auto",
    bullets: [
      "Image premium orientée avant / après",
      "Mise en valeur du détail et de la finition",
      "Prise de rendez-vous fluide et rapide",
    ],
    previewTag: "DETAILING",
    previewTitle: "Un métier visuel mérite une vitrine qui donne envie.",
    previewCopy: "Une page pensée pour ceux qui veulent se démarquer.",
    ctaLabel: "Ouvrir la démo",
  },
];

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

const pricingPackages = [
  {
    id: "foundation",
    name: "Foundation",
    price: 150,
    tagline: "Solution structurée pour une présence claire et efficace.",
    sub: "Conçu pour générer des appels, sans superflu.",
    features: [
      "Site une page professionnel",
      "Bouton d'appel 1 clic",
      "Intégration WhatsApp",
      "Section services claire",
      "Adresse et horaires",
      "Livraison rapide (72h)",
      "Design mobile-first",
      "Structure SEO de base",
      "Formulaire de contact",
    ],
    highlighted: false,
  },
  {
    id: "performance",
    name: "Performance",
    price: 290,
    tagline: "Structure complète, conversion au centre.",
    sub: "L'offre la plus choisie pour une présence solide et des résultats mesurables.",
    features: [
      "Mise en page multi-sections ou multi-pages",
      "Détail des services structuré",
      "Parcours de contact optimisé conversion",
      "Mise en page orientée conversion",
      "UX mobile renforcée",
      "Optimisation SEO locale de base",
      "Intégration Google Maps",
      "Ordre des sections stratégique",
      "Structure orientée confiance",
    ],
    highlighted: true,
    badge: "Le plus choisi",
  },
  {
    id: "authority",
    name: "Authority",
    price: 450,
    tagline: "Système complet, outil business.",
    sub: "Tout le Performance, plus une vitrine à fort impact et une architecture pensée pour la conversion.",
    features: [
      "Tout inclus dans Performance",
      "Page dédiée à fort impact (conversion)",
      "Vitrine visuelle (système avant/après)",
      "Optimisation conversion avancée",
      "Intégration avis clients",
      "Parcours d'appel structuré",
      "Finition design soignée",
      "Architecture de pages stratégique",
      "UX affinée pour la performance",
    ],
    highlighted: false,
  },
];

const monthlyAddOn = {
  price: 9,
  label: "Option sérénité",
  tagline: "Hébergement, maintenance et suivi. Stabilité et tranquillité d'esprit.",
  features: ["Hébergement", "Maintenance", "Mises à jour mineures", "Support technique", "Surveillance sécurité"],
};

const ZONE_VILLES_ALL: { id: string; label: string }[] = [
  { id: "Bruxelles", label: "Bruxelles" },
  { id: "Anvers", label: "Anvers" },
  { id: "Gand", label: "Gand" },
  { id: "Charleroi", label: "Charleroi" },
  { id: "Liege", label: "Liège" },
  { id: "Namur", label: "Namur" },
  { id: "Louvain", label: "Louvain" },
  { id: "Bruges", label: "Bruges" },
  { id: "Mons", label: "Mons" },
];



/* Scroll reveal : inertie (monte et se stabilise) */
const scrollRevealInertia = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 280, damping: 26 },
  },
} as const;

const contactSchema = z.object({
  name: z.string().min(2, "Prénom / Nom requis"),
  business: z.string().min(1, "Nom de l'activité requis"),
  email: z.string().email("Email invalide"),
  city: z.string().min(2, "Ville / commune requise"),
  message: z.string().min(10, "Message trop court"),
});

type ContactFormData = z.infer<typeof contactSchema>;

function ContactFormPrefill({
  setValue,
}: {
  setValue: (name: "city" | "message", value: string) => void;
}) {
  const searchParams = useSearchParams();
  useEffect(() => {
    const metier = searchParams.get("metier");
    const zone = searchParams.get("zone");
    const ville = searchParams.get("ville");
    if (metier || zone || ville) {
      if (ville) {
        const cityLabel = ZONE_VILLES_ALL.find((c) => c.id === ville)?.label ?? ville;
        setValue("city", cityLabel);
      }
      const line = `[Métier: ${metier ?? "-"} | Zone: ${zone ?? "-"} | Ville: ${ville ?? "-"}]\n\n`;
      setValue("message", line);
    }
  }, [searchParams, setValue]);
  return null;
}

const AUTO_FLIP_INTERVAL_MS = 8000;

function CaseStudyFlipCard() {
  const prefersReducedMotion = useReducedMotion();
  const [flipped, setFlipped] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [autoFlipDisabled, setAutoFlipDisabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || autoFlipDisabled) return;
    const id = setInterval(() => setFlipped((prev) => !prev), AUTO_FLIP_INTERVAL_MS);
    return () => clearInterval(id);
  }, [prefersReducedMotion, autoFlipDisabled]);

  const handleToggle = () => {
    setAutoFlipDisabled(true);
    setFlipped((prev) => !prev);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!isDesktop) handleToggle();
    }
  };

  const onWrapperInteraction = () => {
    if (!isDesktop) {
      setAutoFlipDisabled(true);
      handleToggle();
    }
  };

  const cardContent = (
    <div className="flex h-full flex-col">
      <div className="flex shrink-0 items-start justify-between gap-2">
        <h3 className="font-heading text-lg font-semibold uppercase tracking-wider text-[var(--text-2)]">
          Avant
        </h3>
        <span className="md:hidden text-xs text-[var(--text-2)] opacity-70">↻ APRÈS</span>
      </div>
      <ul className="mt-3 min-h-0 flex-1 space-y-1.5 overflow-y-auto pr-1 text-xs text-[var(--text-2)]">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-2)]" />
          Pas de site web
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-2)]" />
          Dépendance totale à Facebook
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-2)]" />
          Peu d&apos;appels entrants
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-2)]" />
          Aucune visibilité sur Google quand on tape &quot;garage + ville&quot;
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-2)]" />
          Horaires introuvables en dehors de Facebook
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-2)]" />
          Clients qui appellent hors zone ou pour des services non proposés
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-2)]" />
          Pas de bouton WhatsApp, donc perte des clients mobiles
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-2)]" />
          Impossible de montrer les réalisations ou avis clients
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-2)]" />
          Image peu professionnelle face aux concurrents
        </li>
      </ul>
      <p className="mt-3 shrink-0 border-t border-[var(--border)] pt-3 text-[11px] font-medium text-[var(--text-2)]">
        → Impact réel : Perte d&apos;opportunités chaque semaine sans même le savoir.
      </p>
    </div>
  );

  const cardContentApres = (
    <div className="flex h-full flex-col">
      <div className="flex shrink-0 items-start justify-between gap-2">
        <h3 className="font-heading text-lg font-semibold uppercase tracking-wider text-[var(--accent)]">
          Après 30 jours
        </h3>
        <span className="md:hidden text-xs text-[var(--text-2)] opacity-70">AVANT ↻</span>
      </div>
      <ul className="mt-3 min-h-0 flex-1 space-y-1.5 overflow-y-auto pr-1 text-xs text-[var(--text)]">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
          +28&nbsp;% d&apos;appels
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
          12 demandes WhatsApp qualifiées
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
          +28&nbsp;% de rendez-vous
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
          Apparition dans les recherches locales &quot;garage + ville&quot;
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
          Appel en 1 clic directement depuis mobile
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
          WhatsApp actif 7j/7 pour les urgences
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
          Moins d&apos;appels hors zone grâce à une zone clairement affichée
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
          Demandes structurées (plus de &quot;vous faites quoi ?&quot;)
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
          Image professionnelle et rassurante
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
          Moins de dépendance à Facebook
        </li>
      </ul>
      <p className="mt-3 shrink-0 border-t border-[var(--border)] pt-3 text-[11px] font-medium text-[var(--accent)]">
        → Impact réel : Des demandes plus qualifiées, moins de perte de temps, plus de rendez-vous.
      </p>
    </div>
  );

  if (prefersReducedMotion) {
    return (
      <div className="w-full max-w-xl min-w-[280px]" aria-live="polite">
        <div className="relative min-h-[380px]">
          <motion.div
            className="absolute inset-0 flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-6 lg:px-8 lg:py-8"
            initial={{ opacity: 1 }}
            animate={{ opacity: flipped ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {cardContent}
          </motion.div>
          <motion.div
            className="absolute inset-0 flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] px-6 py-6 lg:px-8 lg:py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: flipped ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {cardContentApres}
          </motion.div>
        </div>
        <button
          type="button"
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          aria-pressed={flipped}
          className="mt-3 w-full rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-4 py-1.5 text-center text-[11px] font-medium text-[var(--text-2)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
        >
          {flipped ? "Voir AVANT" : "Voir APRÈS"}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl min-w-[280px]">
      <span className="sr-only">Carte recto-verso : Avant et Après 30 jours.</span>
      <div
        className={cn("flipWrap relative min-h-[380px] w-full rounded-2xl border border-[var(--border)] outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] md:focus-within:ring-2 md:focus-within:ring-[var(--accent)] md:focus-within:ring-offset-2 md:focus-within:ring-offset-[var(--bg)]", flipped && "isFlipped")}
        tabIndex={0}
        role="region"
        aria-label="Étude de cas Avant / Après 30 jours"
        onMouseEnter={() => isDesktop && setFlipped(true)}
        onMouseLeave={() => isDesktop && setFlipped(false)}
        onFocus={() => isDesktop && setFlipped(true)}
        onBlur={(e) => {
          if (isDesktop && !e.currentTarget.contains(e.relatedTarget as Node)) setFlipped(false);
        }}
        onClick={onWrapperInteraction}
        onKeyDown={handleKeyDown}
      >
        {/* Do NOT add Tailwind transform/rotate/scale/translate to flipInner, flipFace, flipBack, flipBackContent — controlled by globals.css; iOS uses 2D opacity fallback. */}
        <div className="flipInner relative h-full min-h-[380px] w-full">
          <div className="flipFace absolute inset-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <div className="flex h-full w-full flex-col px-6 py-6 lg:px-8 lg:py-8">
              {cardContent}
            </div>
          </div>
          <div className="flipBack absolute inset-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-2)]">
            <div className="flipBackContent flex h-full w-full flex-col">
              <div className="flipBackContentInner flex h-full w-full flex-col px-6 py-6 lg:px-8 lg:py-8">
                {cardContentApres}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-pressed={flipped}
        className="mt-3 w-full rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-4 py-1.5 text-center text-[11px] font-medium text-[var(--text-2)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
      >
        {flipped ? "Voir AVANT" : "Voir APRÈS"}
      </button>
    </div>
  );
}

// WhyItWorksSection - Premium animated section
function WhyItWorksSection() {
  return (
    <section
      id="services"
      className="relative border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32 overflow-x-hidden"
    >
      <div className="mx-auto max-w-6xl w-full min-w-0 lg:mx-auto">
        <div className="grid gap-10 lg:grid-cols-1 lg:gap-12">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Services</p>
            <motion.h2
              variants={scrollRevealInertia}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:tracking-tight section-title-industrial"
            >
              Pourquoi ça marche
            </motion.h2>
            <motion.p
              variants={scrollRevealInertia}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 280, damping: 26, delay: 0.06 }}
              className="mt-4 text-sm leading-relaxed text-[var(--text-2)] lg:mt-6 lg:text-base lg:leading-relaxed max-w-2xl"
            >
              6 leviers concrets pour transformer votre trafic en appels, sans usine à gaz ni tunnel compliqué.
            </motion.p>
            <div className="brand-signature-line hidden lg:block mt-4" aria-hidden />
          </div>

          {/* Cards: 3 columns on desktop — Phase 3: premium cards + corner highlight + icon motion */}
          <div className="space-y-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
            {whyCards.map((card, i) => (
              <div
                key={card.title}
                className="relative"
                style={{ perspective: 1200 }}
              >
                <motion.article
                  variants={scrollRevealInertia}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 280, damping: 26, delay: 0.08 + i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className={cn(
                    "group relative flex gap-5 rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-5 backdrop-blur-sm transition-all duration-500 will-change-transform",
                    "hover:border-[var(--accent)] hover:bg-[var(--surface-2)] hover:shadow-[0_24px_60px_rgba(11,18,32,0.9)]",
                    "lg:flex-col lg:rounded-2xl lg:p-8 lg:card-premium lg:why-card-premium lg:section-depth-card"
                  )}
                >
                  {/* Phase 3: corner highlight (desktop only) */}
                  <div className="why-card-corner-highlight hidden lg:block" aria-hidden />
                  {/* Left accent line */}
                  <div className="absolute inset-y-4 left-0 w-[3px] rounded-full bg-[var(--surface-2)] group-hover:bg-gradient-to-b group-hover:from-[var(--accent)] group-hover:via-[var(--accent-2)] group-hover:to-[var(--accent)] transition-all duration-300" />

                  {/* Icon container — Phase 3: why-icon-badge for desktop hover */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative shrink-0"
                  >
                    <div className="relative rounded-xl bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] p-3 backdrop-blur-sm lg:rounded-2xl lg:p-4 transition-all duration-500 group-hover:bg-[color-mix(in_srgb,var(--accent)_20%,transparent)] group-hover:shadow-[0_0_30px_rgba(245,165,36,0.4)] icon-hover-glow why-icon-badge">
                      <card.icon className="h-6 w-6 text-[var(--accent)] transition-transform duration-500 lg:h-7 lg:w-7" />
                    </div>
                  </motion.div>

                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 0.4,
                        delay: 0.23 + i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="font-heading text-base sm:text-lg font-semibold text-[var(--text)]"
                    >
                      {card.title}
                    </motion.h3>
                    <div className="mt-1.5 h-px overflow-hidden rounded-full bg-[var(--surface-2)]">
                      <div className="h-full origin-left scale-x-0 bg-gradient-to-r from-[var(--accent-2)] via-[var(--accent)] to-[var(--accent-2)] transition-transform duration-500 group-hover:scale-x-100" />
                    </div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="mt-2 text-sm leading-relaxed text-[var(--text-2)]"
                    >
                      {card.copy}
                    </motion.p>
                  </div>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section
      id="offres"
      className="relative border-t border-[var(--border)] bg-[var(--bg)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32 overflow-x-hidden"
      aria-labelledby="offres-heading"
    >
      <div className="mx-auto max-w-6xl w-full min-w-0">
        <p className="section-eyebrow">Offres</p>
        <motion.h2
          id="offres-heading"
          variants={scrollRevealInertia}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl section-title-industrial"
        >
          Une structure claire, pensée pour la conversion
        </motion.h2>
        <div className="brand-signature-line hidden lg:block mt-4" aria-hidden />
        <motion.p
          variants={scrollRevealInertia}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 280, damping: 26, delay: 0.05 }}
          className="mt-3 text-sm leading-relaxed text-[var(--text-2)] max-w-2xl"
        >
          Trois niveaux, un objectif : des sites conçus pour générer des appels et des contacts. Pas d&apos;usine à gaz — une progression logique selon vos besoins.
        </motion.p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {pricingPackages.map((pkg, i) => (
            <motion.article
              key={pkg.id}
              variants={scrollRevealInertia}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 280, damping: 26, delay: 0.06 + i * 0.05 }}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-[var(--surface)] p-6 backdrop-blur-sm transition-all duration-300",
                "lg:p-8",
                pkg.highlighted
                  ? "border-[var(--accent)] shadow-[0_0_0_1px_var(--accent),0_20px_50px_rgba(0,0,0,0.4)] ring-1 ring-[var(--accent)]/20"
                  : "border-[var(--border)] hover:border-[var(--border)] hover:bg-[var(--surface-2)]"
              )}
            >
              {pkg.badge && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full border border-[var(--accent)] bg-[var(--bg)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                  <Sparkles className="h-3 w-3" />
                  {pkg.badge}
                </div>
              )}
              <div className="flex flex-col flex-1">
                <h3 className="font-heading text-lg font-bold tracking-tight text-[var(--text)] sm:text-xl">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-2xl font-bold tabular-nums text-[var(--text)] sm:text-3xl">
                  {pkg.price}&nbsp;€
                </p>
                <p className="mt-2 text-sm font-medium text-[var(--text-2)]">
                  {pkg.tagline}
                </p>
                <p className="mt-1 text-xs text-[var(--text-2)]">
                  {pkg.sub}
                </p>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[var(--text-2)]">
                      <Check className="h-4 w-4 shrink-0 mt-0.5 text-[var(--accent)]" aria-hidden />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]",
                    pkg.highlighted
                      ? "bg-[var(--accent)] text-black hover:bg-[var(--accent-2)]"
                      : "border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)] hover:border-[var(--accent)] hover:bg-[color-mix(in_srgb,var(--accent)_8%,transparent)]"
                  )}
                >
                  Choisir {pkg.name}
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={scrollRevealInertia}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring", stiffness: 280, damping: 26, delay: 0.15 }}
          className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 sm:flex sm:items-center sm:justify-between sm:gap-6 lg:px-8"
        >
          <div>
            <p className="font-heading text-base font-semibold text-[var(--text)]">
              {monthlyAddOn.label} — {monthlyAddOn.price}&nbsp;€/mois
            </p>
            <p className="mt-0.5 text-sm text-[var(--text-2)]">
              {monthlyAddOn.tagline}
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--text-2)] sm:mt-2">
              {monthlyAddOn.features.map((f) => (
                <li key={f} className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[var(--accent)] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs text-[var(--text-2)] sm:mt-0 sm:text-right">
            Optionnelle. Compatible avec chaque offre.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Home() {
  const [activeDemo, setActiveDemo] = useState<"garage" | "depannage" | "carrosserie" | "detailing">("garage");

  const activeDemoData = demos.find((d) => d.id === activeDemo) ?? demos[0];

  const demoHref: Record<typeof activeDemo, string> = {
    garage: "/demo-garage",
    depannage: "/demo-depannage",
    carrosserie: "/demo-carrosserie",
    detailing: "/demo-detailing",
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string>("");
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("services");

  const searchParams = useSearchParams();

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["services", "pertes", "demo", "parlons-projet", "resultats", "methode", "preuves", "qui", "offres", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("idle");
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitStatus("error");
        setSubmitError(json.error ?? "Une erreur est survenue.");
        return;
      }
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
      setSubmitError("Une erreur est survenue. Réessayez.");
    }
  };

  return (
    <div className="site-main min-h-screen min-h-[100dvh]">
      {/* Phase 1: Cinematic Art Direction Layer (desktop only) */}
      <div className="cinematic-grain" aria-hidden />
      <div className="cinematic-blob-hero" aria-hidden />
      <div className="cinematic-blob-macbook" aria-hidden />
      <div className="cinematic-blob-mid" aria-hidden />
      <div className="cinematic-sheen" aria-hidden />

      {/* Base textures */}
      <div className="noise" aria-hidden />
      <div className="speed-lines" aria-hidden />

      <nav
        className={cn(
          "nav-bar sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_85%,transparent)] backdrop-blur-xl transition-colors duration-300",
          navScrolled && "nav-bar-scrolled"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl w-full min-w-0 items-center justify-between gap-6 px-4 sm:px-6 lg:max-w-7xl lg:px-10">
          <Link href="/" className="font-heading text-lg font-semibold tracking-tight text-[var(--text)]">
            VIGI AGENCY
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-active={isActive}
                  className={cn(
                    "text-sm transition duration-200 lg:tracking-wide",
                    isActive ? "text-[var(--accent)]" : "text-[var(--text-2)] hover:text-[var(--accent)]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <a
            href="https://wa.me/32468367226?text=Bonjour%2C%20je%20souhaite%20parler%20d%27un%20site%20web%20pour%20mon%20garage%20%2F%20service%20de%20depannage."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-black transition hover:bg-[var(--accent-2)] hover:shadow-lg hover:shadow-[0_0_30px_rgba(245,183,3,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          >
            Être rappelé
          </a>
        </div>
      </nav>

      <main className="relative z-10 overflow-x-hidden overflow-y-visible pb-28 sm:pb-0">
        {/* Hero */}
        <Hero />

        {/* Why it works - Premium Animated */}
        <WhyItWorksSection />

        {/* Ce qu'un garage perd sans site optimisé */}
        <section id="pertes" className="relative border-t border-[var(--border)] bg-[var(--bg)] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-32 overflow-x-hidden">
          <div className="mx-auto max-w-6xl w-full min-w-0 relative z-10">
            <p className="section-eyebrow">Constat</p>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl lg:text-4xl section-title-industrial max-w-2xl">
              Ce qu&apos;un garage perd sans site optimisé
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)] lg:mt-4 max-w-2xl">
              Sans site adapté à la recherche locale, les clients potentiels passent à côté de votre atelier.
            </p>
            <div className="brand-signature-line hidden lg:block mt-4" aria-hidden />

            <div className="mt-8 space-y-6 sm:mt-10 lg:mt-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-5 lg:rounded-2xl lg:p-6">
                <span className="text-sm font-semibold text-[var(--accent)]">1. Visibilité</span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-2)]">
                  Quand quelqu&apos;un cherche « garage Mons » ou « dépannage Charleroi », les premiers résultats s&apos;affichent. Sans site adapté, votre atelier reste invisible au moment où on vous cherche.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-5 lg:rounded-2xl lg:p-6">
                <span className="text-sm font-semibold text-[var(--accent)]">2. Confiance</span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-2)]">
                  Horaires, services, moyen de contact : ces infos rassurent. Sans elles en ligne, le client hésite et passe son chemin.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-5 lg:rounded-2xl lg:p-6">
                <span className="text-sm font-semibold text-[var(--accent)]">3. Opportunités</span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-2)]">
                  Chaque recherche non aboutie est un appel qui ne sonne pas. Les clients trouvent ailleurs ce qu&apos;ils cherchent.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-5 py-4 sm:mt-10 lg:mt-12 lg:rounded-2xl lg:px-6 lg:py-5 lg:max-w-3xl">
              <p className="text-sm font-medium leading-relaxed text-[var(--text)]">
                Un site simple et bien structuré suffit. Pas besoin de complexité.
              </p>
            </div>
          </div>
        </section>

        {/* Demonstrations */}
        <section id="demo" className="relative section-radial-highlight border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32 overflow-x-hidden">
          <div className="mx-auto max-w-6xl w-full min-w-0 relative z-10">
            <p className="section-eyebrow">Démos</p>
            <motion.h2
              variants={scrollRevealInertia}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:tracking-tight lg:text-5xl section-title-industrial"
            >
              Démonstrations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-3 text-sm text-[var(--text-2)] max-w-2xl"
            >
              Chaque démo est adaptée à un métier précis. Le contenu, le rythme et les appels à l&apos;action changent selon votre activité.
            </motion.p>
            <div className="brand-signature-line hidden lg:block mt-4" aria-hidden />

            <div className="mt-8 lg:mt-10 w-full min-w-0">
              {/* Tabs */}
              <div className="w-full min-w-0">
                <div className="inline-flex flex-wrap gap-1 rounded-full border border-[var(--border)] bg-[var(--surface-2)] p-1 text-xs max-w-full">
                  {demos.map((demo) => (
                    <button
                      key={demo.id}
                      type="button"
                      onClick={() => setActiveDemo(demo.id as typeof activeDemo)}
                      className={cn(
                        "flex items-center gap-1.5 rounded-full px-3 py-1.5 transition text-[11px] sm:text-xs",
                        activeDemo === demo.id
                          ? "bg-[var(--text)] text-[var(--bg)] shadow-sm"
                          : "text-[var(--text-2)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]"
                      )}
                      aria-label={`Voir la démo ${demo.title}`}
                    >
                      <demo.icon className="h-3.5 w-3.5" />
                      <span>{demo.tabLabel}</span>
                    </button>
                  ))}
                </div>

                {/* Card: entire card clickable on desktop (motion.a) + sheen + microtext */}
                <motion.a
                  key={activeDemo}
                  href={demoHref[activeDemo]}
                  variants={scrollRevealInertia}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 280, damping: 26, delay: 0.1 }}
                  className={cn(
                    "group/card block mt-6 w-full min-w-0 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 backdrop-blur-sm lg:mt-10 lg:p-10 lg:rounded-3xl demo-card-hover demo-card-product lg:section-depth-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] overflow-hidden",
                    activeDemo === "depannage" && "demo-card-depannage"
                  )}
                  aria-label={`${activeDemoData.ctaLabel} — ${activeDemoData.title}`}
                >
                  {/* Phase 3: sheen overlay (desktop) */}
                  <div className="demo-card-sheen hidden lg:block" aria-hidden />
                  <div className="relative">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="demo-card-icon-wrap inline-flex rounded-lg bg-[var(--accent)]/10 p-2 text-[var(--accent)] lg:p-3 transition-shadow duration-300">
                        <activeDemoData.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                      </div>
                      <div>
                        <h3 className="font-heading text-base sm:text-lg lg:text-xl font-semibold text-[var(--text)]">
                          {activeDemoData.title}
                        </h3>
                        <p className="text-xs lg:text-sm text-[var(--text-2)] lg:mt-1">
                          {activeDemoData.previewTitle}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-4 lg:mt-6 space-y-1.5 lg:space-y-2 text-sm lg:text-base text-[var(--text)]">
                      {activeDemoData.bullets.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 lg:h-2 lg:w-2 rounded-full bg-[var(--accent)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 lg:mt-6 text-sm lg:text-base text-[var(--text-2)] lg:hidden">
                      {activeDemoData.previewCopy}
                    </p>

                    <div className="mt-5 lg:mt-7">
                      <span className="inline-flex items-center gap-2 rounded-lg border border-[var(--accent)] bg-[var(--accent)]/10 px-4 py-2 text-sm lg:text-base font-medium text-[var(--accent)] transition group-hover/card:bg-[var(--accent)]/20">
                        {activeDemoData.ctaLabel}
                        <ChevronRight className="h-4 w-4" />
                      </span>
                      {/* Phase 3: micro-line under CTA (desktop only) */}
                      <p className="demo-microtext hidden lg:block">
                        {activeDemoData.previewCopy}
                      </p>
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* Post-demo CTA — conversion block */}
        <section id="parlons-projet" className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 overflow-x-hidden" style={{ background: "linear-gradient(180deg, var(--bg-2) 0%, var(--bg) 100%)" }}>
          <div className="mx-auto max-w-3xl w-full min-w-0 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl"
            >
              Vous avez vu un exemple. Parlons du vôtre.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-3 text-sm text-[var(--text-2)]"
            >
              Une courte discussion suffit pour voir si votre activité peut en profiter.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[var(--accent-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                Discuter de mon projet
              </Link>
              <a
                href="https://wa.me/32468367226?text=Bonjour%2C%20je%20souhaite%20parler%20d%27un%20site%20web%20pour%20mon%20garage%20%2F%20service%20de%20depannage."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--surface-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                Être rappelé
              </a>
            </motion.div>
          </div>
        </section>

        {/* Étude de cas */}
        <section id="resultats" className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32 overflow-x-hidden">
          <div className="mx-auto max-w-6xl w-full min-w-0">
            <p className="section-eyebrow">Résultats</p>
            <motion.h2
              variants={scrollRevealInertia}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl section-title-industrial"
            >
              Étude de cas — Garage local
            </motion.h2>
            <div className="brand-signature-line hidden lg:block mt-4" aria-hidden />
            <div className="mt-10 grid grid-cols-1 justify-items-center">
              <motion.div
                className="w-full max-w-xl min-w-0"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <CaseStudyFlipCard />
              </motion.div>
            </div>
            <p className="mt-6 text-xs text-[var(--text-2)]">
              Exemple représentatif d&apos;un garage indépendant.
            </p>
          </div>
        </section>

        {/* Process */}
        <section id="methode" className="border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32 overflow-x-hidden">
          <div className="mx-auto max-w-6xl w-full min-w-0">
            <p className="section-eyebrow">Process</p>
            <motion.h2
              variants={scrollRevealInertia}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl section-title-industrial"
            >
              Méthode
            </motion.h2>
            <div className="brand-signature-line hidden lg:block mt-4" aria-hidden />
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {processSteps.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-sm transition-all duration-500 lg:hover:border-[var(--accent)] lg:hover:-translate-y-1 lg:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                >
                  <span className="text-3xl font-bold tabular-nums text-[var(--accent)]">
                    {item.step}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-[var(--text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-2)]">{item.copy}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 rounded-2xl border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_5%,transparent)] px-6 py-4"
            >
              <p className="font-heading font-medium text-[var(--accent-2)]">
                Objectif : plus d’appels, pas un « joli site ».
              </p>
            </motion.div>
          </div>
        </section>

        {/* Preuves — ce qu'on met en place sur chaque projet */}
        <section id="preuves" className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32 overflow-x-hidden">
          <div className="mx-auto max-w-6xl w-full min-w-0">
            <p className="section-eyebrow">Preuves</p>
            <motion.h2
              variants={scrollRevealInertia}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl section-title-industrial"
            >
              Preuves
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-3 max-w-2xl text-sm text-[var(--text-2)]"
            >
              Des éléments concrets que l’on met en place sur chaque projet pour rassurer vos futurs clients.
            </motion.p>
            <div className="brand-signature-line hidden lg:block mt-4" aria-hidden />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-5 backdrop-blur-sm transition-all duration-500 lg:hover:border-[var(--accent)] lg:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              >
                <div className="mb-3 inline-flex rounded-lg bg-[var(--accent)]/10 p-2.5 text-[var(--accent)] transition-all duration-500 lg:group-hover:shadow-[0_0_25px_rgba(245,165,36,0.3)]">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[var(--text)]">
                  Pages urgence
                </h3>
                <p className="mt-2 text-sm text-[var(--text-2)]">
                  Une page dédiée “appel d’urgence” avec bouton fixe et informations essentielles visibles immédiatement.
                </p>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-5 backdrop-blur-sm transition-all duration-500 lg:hover:border-sky-400/30 lg:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              >
                <div className="mb-3 inline-flex rounded-lg bg-sky-500/10 p-2.5 text-sky-400 transition-all duration-500 lg:group-hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[var(--text)]">
                  SEO local
                </h3>
                <p className="mt-2 text-sm text-[var(--text-2)]">
                  Textes et structure pensés pour “garage Mons”, “dépannage Charleroi”, “pare-brise Hainaut”.
                </p>
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-xs text-[var(--text-2)]">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--surface-2)]">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  <span>Mots-clés + fiche Google Maps alignés avec votre zone.</span>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-5 backdrop-blur-sm transition-all duration-500 lg:hover:border-[var(--accent)] lg:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              >
                <div className="mb-3 inline-flex rounded-lg bg-[var(--accent)]/10 p-2.5 text-[var(--accent)] transition-all duration-500 lg:group-hover:shadow-[0_0_25px_rgba(245,165,36,0.3)]">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[var(--text)]">
                  Avant / Après
                </h3>
                <p className="mt-2 text-sm text-[var(--text-2)]">
                  Intégration d’un slider avant/après pour montrer vos réparations, comme dans la démo.
                </p>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Qui est derrière */}
        <section id="qui" className="border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32 overflow-x-hidden">
          <div className="mx-auto max-w-5xl lg:max-w-6xl w-full min-w-0">
            <p className="section-eyebrow">L&apos;équipe</p>
            <div className="brand-signature-line hidden lg:block mt-2 mb-6" aria-hidden />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-10 lg:mt-0 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 lg:p-10"
            >
              <div className="space-y-4">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">
                  Qui est derrière VIGI AGENCY
                </h2>
                <p
                  className="font-heading text-lg font-semibold sm:text-xl"
                  style={{
                    color: "#F59E0B",
                    textShadow: "0 0 20px rgba(245, 158, 11, 0.35)",
                  }}
                >
                  Mathis — Fondateur
                </p>
                <ul className="space-y-2 text-sm text-[var(--text-2)]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    Spécialisé exclusivement garages & métiers auto
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    Approche orientée appels et résultats concrets
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    Déploiement rapide, sans complexité technique
                  </li>
                </ul>
                <p className="text-sm leading-relaxed text-[var(--text-2)] pt-1">
                  Je me concentre sur les garages et artisans de l&apos;auto parce que c&apos;est un secteur où un site simple et bien pensé change vraiment le volume d&apos;appels — sans avoir besoin de grosses plateformes ni de jargon.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <PricingSection />

        {/* Contact */}
        <section id="contact" className="relative section-radial-highlight border-t border-[var(--border)] bg-[var(--bg)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32 overflow-x-hidden">
          <div className="mx-auto max-w-6xl w-full min-w-0 relative z-10">
            <p className="section-eyebrow">Contact</p>
            <motion.h2
              variants={scrollRevealInertia}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl section-title-industrial"
            >
              Contact
            </motion.h2>
            <div className="brand-signature-line hidden lg:block mt-4" aria-hidden />
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-3 text-lg font-medium text-[var(--accent)]"
            >
              Voyons si ça vaut le coup
            </motion.p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)] max-w-xl">
              10 minutes suffisent pour savoir si votre site vous fait perdre des appels.
            </p>
            <p className="mt-1 text-sm text-[var(--text-2)]">
              Aucun engagement. Aucun jargon. Juste un avis honnête.
            </p>
            <p className="mt-4 font-medium text-[var(--text)]">
              Pas de contrat. Option hébergement et maintenance 9&nbsp;€/mois si vous le souhaitez.
            </p>
            <p className="mt-2 text-xs text-[var(--text-2)]">
              Offres à partir de 150&nbsp;€ — Foundation, Performance ou Authority.
            </p>
            <Suspense fallback={null}>
              <ContactFormPrefill setValue={setValue} />
            </Suspense>
            <div className="mt-10 grid gap-12 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--text-2)]">
                        Prénom / Nom
                      </label>
                      <input
                        id="name"
                        {...register("name")}
                        className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-[var(--text)] placeholder-[var(--text-2)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                        placeholder="Jean Dupont"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-[var(--accent)]">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="business" className="mb-1.5 block text-sm font-medium text-[var(--text-2)]">
                        Nom de l&apos;activité
                      </label>
                      <input
                        id="business"
                        {...register("business")}
                        className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-[var(--text)] placeholder-[var(--text-2)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                        placeholder="Garage Dupont"
                      />
                      {errors.business && (
                        <p className="mt-1 text-sm text-[var(--accent)]">{errors.business.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--text-2)]">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-[var(--text)] placeholder-[var(--text-2)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                        placeholder="vous@exemple.be"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-[var(--accent)]">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-[var(--text-2)]">
                        Ville / Commune
                      </label>
                      <input
                        id="city"
                        {...register("city")}
                        className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-[var(--text)] placeholder-[var(--text-2)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                        placeholder="Mons, Charleroi…"
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-[var(--accent)]">{errors.city.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--text-2)]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message")}
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-[var(--text)] placeholder-[var(--text-2)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                      placeholder="Décrivez votre projet…"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-[var(--accent)]">{errors.message.message}</p>
                    )}
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[var(--accent-2)] disabled:opacity-60 sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                  >
                    {isSubmitting ? "Envoi…" : "Voir si ça vaut le coup"}
                  </motion.button>
                  {submitStatus === "success" && (
                    <p className="text-sm text-emerald-400">
                      Message envoyé. Nous vous recontacterons rapidement.
                    </p>
                  )}
                  {submitStatus === "error" && submitError && (
                    <p className="text-sm text-red-400">{submitError}</p>
                  )}
                </form>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-sm">
                  <p className="font-heading text-lg font-semibold text-[var(--text)]">
                    Contact rapide
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <motion.a
                      href="https://wa.me/32468367226?text=Bonjour%2C%20je%20souhaite%20parler%20d%27un%20site%20web%20pour%20mon%20garage%20%2F%20service%20de%20depannage."
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-sm font-medium text-[var(--text)] transition hover:border-[var(--border)] hover:bg-[var(--surface-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </motion.a>
                  </div>
                  <p className="mt-4 text-sm text-[var(--text-2)]">
                    Réponse sous 24 h.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mx-auto max-w-6xl w-full min-w-0 px-4 sm:px-6 lg:px-10">
          <div className="footer-divider hidden lg:block" aria-hidden />
        </div>
        <footer className="px-4 py-12 sm:px-6 lg:py-14 lg:px-10">
          <div className="mx-auto flex max-w-6xl w-full min-w-0 flex-col items-center justify-between gap-8 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-heading text-base font-semibold text-[var(--text)]">VIGI AGENCY</p>
              <p className="mt-0.5 text-sm text-[var(--text-2)]">Garages & urgences</p>
              <p className="text-xs text-[var(--text-2)]">Hainaut — Belgique</p>
            </div>
            <nav className="flex flex-col items-center gap-3 sm:items-end sm:gap-4" aria-label="Footer">
              <a href="#services" className="text-sm text-[var(--text-2)] transition duration-200 hover:text-[var(--accent)]">Services</a>
              <a href="#demo" className="text-sm text-[var(--text-2)] transition duration-200 hover:text-[var(--accent)]">Démonstrations</a>
              <a href="#offres" className="text-sm text-[var(--text-2)] transition duration-200 hover:text-[var(--accent)]">Offres</a>
              <Link href="/expertise-garage" className="text-sm text-[var(--text-2)] transition duration-200 hover:text-[var(--accent)]">Expertise garages</Link>
              <a href="#contact" className="text-sm text-[var(--text-2)] transition duration-200 hover:text-[var(--accent)]">Contact</a>
            </nav>
          </div>
        </footer>
      </main>

      {/* Mobile sticky bar — safe area iOS + flex stable */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 overflow-x-hidden px-4 pt-3 lg:hidden"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-md w-full min-w-0 flex-nowrap items-center gap-2 rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] px-3 py-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.9)] [backdrop-filter:blur(12px)] [-webkit-backdrop-filter:blur(12px)]">
          <motion.a
            href="https://wa.me/32468367226?text=Bonjour%2C%20je%20souhaite%20parler%20d%27un%20site%20web%20pour%20mon%20garage%20%2F%20service%20de%20depannage."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="min-w-0 flex-1 shrink rounded-xl bg-[var(--accent)] px-3 py-2.5 text-center text-xs font-semibold text-black outline-none transition hover:bg-[var(--accent-2)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            aria-label="Contacter VIGI AGENCY sur WhatsApp pour être rappelé"
          >
            <span className="block truncate whitespace-nowrap">Être rappelé</span>
          </motion.a>
          <motion.a
            href="https://wa.me/32468367226?text=Bonjour%2C%20je%20souhaite%20parler%20d%27un%20site%20web%20pour%20mon%20garage%20%2F%20service%20de%20depannage."
            whileTap={{ scale: 0.96 }}
            className="shrink-0 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2.5 text-xs font-medium text-[var(--text)] outline-none transition hover:border-[var(--border)] hover:bg-[var(--surface-2)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            aria-label="Contacter VIGI AGENCY sur WhatsApp"
          >
            <span className="whitespace-nowrap">WhatsApp</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="site-main min-h-screen" />}>
      <Home />
    </Suspense>
  );
}
