"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#demo", label: "Démonstrations" },
  { href: "#methode", label: "Méthode" },
  { href: "#avis", label: "Avis" },
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
    bullets: ["Fiche atelier", "Services", "Horaires", "Contact rapide"],
    previewTag: "GARAGE",
    previewTitle: "Un garage visible quand on a besoin de vous.",
    previewCopy: "Une page claire, bouton d'appel visible, services lisibles en une seconde.",
    ctaLabel: "Voir ce type de site pour mon garage",
    ctaDescription: "Une page type garage avec fiche atelier, services et bouton d'appel.",
  },
  {
    id: "depannage",
    icon: Truck,
    title: "Dépannage urgence",
    tabLabel: "Dépannage urgence",
    bullets: ["Page urgence 24/7", "Zone d’intervention", "Appel direct", "WhatsApp"],
    previewTag: "DÉPANNAGE",
    previewTitle: "Dépannage 24/7 qui rassure tout de suite.",
    previewCopy: "Un numéro en évidence, la zone d'intervention claire, aucun doute pour appeler.",
    ctaLabel: "Voir une page urgence",
    ctaDescription: "Une page dédiée dépannage 24/7 avec appel direct et zone d'intervention.",
  },
  {
    id: "carrosserie",
    icon: Car,
    title: "Carrosserie / Pare-brise",
    tabLabel: "Carrosserie / Pare-brise",
    bullets: ["Devis en ligne", "Photos avant/après", "Assurance", "Rendez-vous"],
    previewTag: "CARROSSERIE",
    previewTitle: "Carrosserie propre, preuves visibles.",
    previewCopy: "Avant / après, prise de rendez-vous simple, vos travaux parlent pour vous.",
    ctaLabel: "Voir l'avant / après en action",
    ctaDescription: "Un exemple de slider avant/après et prise de rendez-vous.",
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

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
} as const;

const heroItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
} as const;

const heroMockup = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 0.2,
    },
  },
} as const;

const contactSchema = z.object({
  name: z.string().min(2, "Prénom / Nom requis"),
  business: z.string().min(1, "Nom de l’activité requis"),
  email: z.string().email("Email invalide"),
  city: z.string().min(2, "Ville / commune requise"),
  message: z.string().min(10, "Message trop court"),
});

type ContactFormData = z.infer<typeof contactSchema>;

/* Palette écran MacBook (ONLY inside screen, distincte du site principal) */
const screenColors = {
  bg: "#0B0D10",
  surface: "rgba(255,255,255,0.06)",
  cyan: "#20E3FF",
  lime: "#B7FF3C",
  text: "#E8ECF2",
  textMuted: "rgba(232,236,242,0.65)",
} as const;

function BeforeAfterMini() {
  const [position, setPosition] = useState(50);
  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = e.currentTarget.parentElement?.getBoundingClientRect();
    if (!rect) return;
    const move = (moveEvent: MouseEvent) => {
      const x = moveEvent.clientX - rect.left;
      setPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
    };
    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };
  return (
    <div className="space-y-1">
      <p className="text-[7px] hero-screen-muted">Glissez pour voir le résultat</p>
      <div className="relative h-20 rounded-lg overflow-hidden border border-white/10 shadow-lg">
        <div className="absolute inset-0">
          <Image src="/rs3avant.png" alt="Avant" fill className="object-cover" sizes="200px" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
            <span className="text-[9px] font-bold text-white drop-shadow-md">AVANT</span>
          </div>
        </div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
          <Image src="/rs3apres.png" alt="Après" fill className="object-cover" sizes="200px" />
          <div className="absolute inset-0 flex items-center justify-end pr-1">
            <span className="text-[9px] font-bold text-white drop-shadow-md">APRÈS</span>
          </div>
        </div>
        <div
          className="absolute top-0 bottom-0 w-0.5 cursor-ew-resize z-10 hero-slider-handle"
          style={{ left: `${position}%`, background: screenColors.cyan }}
          onMouseDown={handleMouseDown}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white/80 hero-slider-knob" style={{ background: screenColors.cyan }} />
        </div>
      </div>
    </div>
  );
}

function ScreenGaragePreview() {
  const services = [
    { icon: Wrench, label: "Débosselage" },
    { icon: Shield, label: "Pare-brise" },
    { icon: Zap, label: "Polissage" },
  ];
  return (
    <div className="hero-screen-content relative w-full h-full overflow-hidden hero-screen-root" style={{ background: screenColors.bg }}>
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-30 pointer-events-none hero-screen-glow" aria-hidden />
      <div className="hero-screen-grain pointer-events-none" aria-hidden />
      <div className="flex items-center gap-2 border-b border-white/10 px-2 py-1.5 hero-screen-bar" style={{ background: screenColors.surface }}>
        <div className="flex gap-0.5">
          <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
          <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <span className="text-[8px] hero-screen-muted">atelier-demo.be</span>
        </div>
        <span className="text-[7px] font-medium px-1.5 py-0.5 rounded hero-screen-badge" style={{ background: screenColors.lime, color: "#0B0D10" }}>DISPONIBLE 7J/7</span>
      </div>
      <div className="h-[calc(100%-2rem)] overflow-hidden overflow-x-hidden">
        <div className="px-2.5 py-2 space-y-2 hero-screen-body hero-screen-autoscroll" style={{ color: screenColors.text }}>
          <div>
            <h2 className="text-[11px] font-bold tracking-tight hero-screen-title">Carrosserie & Pare-brise</h2>
            <p className="text-[8px] mt-0.5 hero-screen-muted">Devis en 2 min · RDV rapide · Assurance OK</p>
          </div>
          <div className="space-y-0.5">
            <div className="flex gap-1.5">
              <div className="flex-1 flex items-center justify-center gap-1 rounded-md py-1.5 text-[9px] font-bold text-[#0B0D10] hero-screen-cta-primary">
                <FileText className="h-2.5 w-2.5" />
                Demander un devis
              </div>
              <div className="flex-1 flex items-center justify-center gap-1 rounded-md py-1.5 text-[9px] font-medium border hero-screen-cta-secondary">
                <MessageCircle className="h-2.5 w-2.5" />
                WhatsApp
              </div>
            </div>
            <p className="text-[7px] hero-screen-muted">Réponse en &lt; 30 min aux heures d&apos;ouverture</p>
          </div>
          <div className="flex flex-wrap gap-1">
            {["Avant/Après", "RDV 48h", "Assurance"].map((chip) => (
              <span key={chip} className="px-2 py-0.5 rounded-full text-[7px] font-medium border border-white/10 hero-screen-chip" style={{ background: screenColors.surface }}>{chip}</span>
            ))}
          </div>
          <div>
            <p className="text-[8px] font-semibold mb-1 hero-screen-title">Avant / Après</p>
            <BeforeAfterMini />
          </div>
          <div>
            <p className="text-[8px] font-semibold mb-1 hero-screen-title">Services express</p>
            <div className="grid grid-cols-3 gap-1">
              {services.map(({ icon: Icon, label }) => (
                <div key={label} className="hero-screen-card flex flex-col items-center justify-center p-1.5 rounded-md border border-white/10 text-center" style={{ background: screenColors.surface }}>
                  <Icon className="h-3 w-3 mb-0.5 hero-screen-icon" style={{ color: screenColors.cyan }} />
                  <span className="text-[7px] hero-screen-muted">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-white/10 p-2 hero-screen-card" style={{ background: screenColors.surface }}>
            <p className="text-[7px] font-semibold mb-1 hero-screen-title">Horaires</p>
            <p className="text-[7px] leading-relaxed hero-screen-muted">Lun–Ven 8:00–18:00</p>
            <p className="text-[7px] leading-relaxed hero-screen-muted">Sam 9:00–13:00</p>
            <p className="text-[7px] mt-1.5 hero-screen-muted">Zone : Hainaut & alentours</p>
            <span className="inline-block mt-1 text-[6px] font-medium px-1.5 py-0.5 rounded hero-screen-badge-cyan" style={{ background: `${screenColors.cyan}30`, color: screenColors.cyan }}>Appel 1 clic sur mobile</span>
          </div>
        </div>
      </div>
      <div className="hero-screen-glare pointer-events-none" aria-hidden />
    </div>
  );
}

// WhyItWorksSection - Premium animated section
function WhyItWorksSection() {
  return (
    <section
      id="services"
      className="relative border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-6xl lg:mx-auto">
        <div className="grid gap-10 lg:grid-cols-1 lg:gap-12">
          {/* Title + intro (full width on desktop) */}
          <div className="max-w-md">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:tracking-tight"
            >
              Pourquoi ça marche
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 text-sm leading-relaxed text-[var(--text-2)] lg:mt-6 lg:text-base lg:leading-relaxed"
            >
              6 leviers concrets pour transformer votre trafic en appels, sans usine à gaz ni tunnel compliqué.
            </motion.p>
          </div>

          {/* Cards: 3 columns on desktop */}
          <div className="space-y-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
            {whyCards.map((card, i) => (
              <div
                key={card.title}
                className="relative"
                style={{ perspective: 1200 }}
              >
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -4 }}
                  className={cn(
                    "group relative flex gap-5 rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-5 backdrop-blur-sm transition-all duration-500 will-change-transform",
                    "hover:border-[var(--accent)] hover:bg-[var(--surface-2)] hover:shadow-[0_24px_60px_rgba(11,18,32,0.9)]",
                    "lg:flex-col lg:rounded-2xl lg:p-8 lg:card-premium"
                  )}
                >
                  {/* Left accent line */}
                  <div className="absolute inset-y-4 left-0 w-[3px] rounded-full bg-[var(--surface-2)] group-hover:bg-gradient-to-b group-hover:from-[var(--accent)] group-hover:via-[var(--accent-2)] group-hover:to-[var(--accent)] transition-all duration-300" />

                  {/* Icon container */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.18 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative shrink-0"
                  >
                    <div className="relative rounded-xl bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] p-3 backdrop-blur-sm transition-all duration-500 group-hover:bg-[color-mix(in_srgb,var(--accent)_20%,transparent)] group-hover:shadow-[0_0_30px_rgba(245,165,36,0.4)] icon-hover-glow">
                      <card.icon className="h-6 w-6 text-[var(--accent)] transition-transform duration-500" />
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

export default function Home() {
  const [activeDemo, setActiveDemo] = useState<"garage" | "depannage" | "carrosserie">("garage");

  const activeDemoData = demos.find((d) => d.id === activeDemo) ?? demos[0];

  const demoHref: Record<typeof activeDemo, string> = {
    garage: "/demo-garage",
    depannage: "/demo-depannage",
    carrosserie: "/demo-carrosserie",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string>("");

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
    <div className="site-main min-h-screen">
      <div className="noise" aria-hidden />
      <div className="speed-lines" aria-hidden />

      <nav className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_80%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:max-w-7xl lg:px-10">
          <a href="#" className="font-heading text-lg font-semibold tracking-tight text-[var(--text)]">
            VIGI AGENCY
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-2)] transition hover:text-[var(--accent)] lg:tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-black transition hover:bg-[var(--accent-2)] hover:shadow-lg hover:shadow-[0_0_30px_rgba(245,183,3,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          >
            Être rappelé
          </a>
        </div>
      </nav>

      <main className="relative z-10 pb-28 sm:pb-0">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pt-16 pb-24 sm:px-6 sm:pt-24 sm:pb-32 lg:px-10 lg:pt-28 lg:pb-36">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-[var(--bg)] to-[var(--bg)]" />
            <div className="hero-spotlight" aria-hidden />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_100%,rgba(0,0,0,0.5),transparent_70%)]" />
          </div>

          <div className="mx-auto grid max-w-6xl gap-12 lg:max-w-7xl lg:grid-cols-2 lg:items-center lg:gap-14 lg:pt-8">
            <div className="flex flex-col justify-center lg:max-w-[560px]">
              <motion.div
                variants={heroContainer}
                initial="hidden"
                animate="visible"
                className="space-y-7 sm:space-y-8"
              >
                <motion.span
                  variants={heroItem}
                  className="inline-flex items-center gap-2 rounded-full border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--accent)] lg:tracking-[0.2em]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.35)]" />
                  Spécialiste garages & urgences — Hainaut
                </motion.span>
                <div className="space-y-4">
                  <motion.h1
                    variants={heroItem}
                    className="font-heading text-3xl font-bold leading-[1.05] tracking-tight text-[var(--text)] sm:text-4xl lg:text-[clamp(2.5rem,4.4vw,4.875rem)] lg:leading-[0.95]"
                  >
                    <span className="block">Des sites qui font</span>
                    <span className="block text-[var(--accent)]">sonner le téléphone.</span>
                  </motion.h1>
                  <motion.p
                    variants={heroItem}
                    className="max-w-lg text-[15px] sm:text-base font-medium leading-relaxed text-[var(--text-2)] lg:max-w-[52ch] lg:text-[18px] lg:leading-relaxed"
                  >
                    Pages d’urgence, SEO local, WhatsApp, appel 1 clic. Pensé pour la route et pour les garages du
                    Hainaut.
                  </motion.p>
                </div>
                <motion.div
                  variants={heroItem}
                  className="flex flex-wrap gap-3 lg:flex-row lg:gap-4"
                >
                  <motion.a
                    href="#demo"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="group relative inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-2.75 text-sm font-semibold text-black shadow-[0_0_40px_rgba(245,165,36,0.35)] outline-none transition hover:bg-[var(--accent-2)] hover:shadow-[0_0_48px_rgba(255,183,3,0.4)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                    aria-label="Voir la démo"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Voir une démo
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className="pointer-events-none absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.32),transparent_55%)] opacity-0 transition group-hover:opacity-100" />
                  </motion.a>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 rounded-lg border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--text)] outline-none transition hover:bg-[var(--surface-2)] hover:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                    aria-label="Parler d'un projet"
                  >
                    Parler d’un projet
                  </motion.a>
                </motion.div>
                <p className="text-xs text-[var(--text-2)] lg:mt-2">
                  Aucune obligation – juste un aperçu concret.
                </p>
                <motion.div
                  variants={heroItem}
                  className="space-y-1.5 text-xs sm:text-sm text-[var(--text-2)] lg:mt-6 lg:space-y-2 lg:hidden"
                >
                  <p className="font-medium text-[var(--text)] lg:leading-relaxed">
                    Réponse rapide • Déploiement en 72h
                  </p>
                  <p className="text-[var(--text-2)]">
                    On s'occupe du site, vous vous occupez des véhicules.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              variants={heroMockup}
              initial="hidden"
              animate="visible"
              className="relative flex items-center justify-center lg:justify-end"
            >
              {/* Radial glow behind mockup - desktop only */}
              <div 
                aria-hidden 
                className="pointer-events-none absolute inset-0 hidden lg:block" 
                style={{ 
                  background: "radial-gradient(ellipse 90% 70% at 60% 50%, rgba(245,165,36,0.12), transparent 60%)",
                  filter: "blur(40px)",
                }} 
              />
              <div 
                aria-hidden 
                className="pointer-events-none absolute inset-0 hidden lg:block" 
                style={{ 
                  background: "radial-gradient(circle at 50% 80%, rgba(245,165,36,0.06), transparent 50%)",
                }} 
              />
              <div className="relative w-full max-w-[900px] mx-auto overflow-hidden lg:scale-[1.08] mockup-cinematic">
                {/* SCREEN MASK - dimensions verrouillées */}
                <div
                  className="hero-mockup-screen absolute z-10 overflow-hidden rounded-[8px]"
                  style={{
                    top: "12%",
                    left: "10.4%",
                    width: "79.2%",
                    height: "81.4%",
                  }}
                >
                  <ScreenGaragePreview />
                </div>

                {/* MACBOOK FRAME */}
                <Image
                  src="/apple-macbookpro14-front.png"
                  alt="MacBook Pro"
                  width={3944}
                  height={2564}
                  className="relative z-20 w-full h-auto drop-shadow-[0_40px_120px_rgba(0,0,0,0.8)] lg:drop-shadow-[0_40px_120px_rgba(0,0,0,0.75)]"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why it works - Premium Animated */}
        <WhyItWorksSection />

        {/* Ce qu'un garage perd sans site optimisé */}
        <section id="pertes" className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl lg:text-4xl lg:max-w-2xl">
              Ce qu&apos;un garage perd sans site optimisé
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)] lg:mt-4 lg:max-w-2xl">
              Sans site adapté à la recherche locale, les clients potentiels passent à côté de votre atelier.
            </p>

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

        {/* Demonstrations - tabs + preview */}
        <section id="demo" className="border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl lg:max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:tracking-tight lg:text-5xl"
            >
              Démonstrations
            </motion.h2>

            <div className="mt-8 lg:mt-10">
              {/* Tabs + bullets */}
              <div>
                <div className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-2)] p-1 text-xs">
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

                <motion.div
                  key={activeDemo}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 backdrop-blur-sm lg:mt-10 lg:p-10 lg:rounded-3xl demo-card-hover"
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="inline-flex rounded-lg bg-[var(--accent)]/10 p-2 text-[var(--accent)] lg:p-3">
                      <activeDemoData.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base sm:text-lg lg:text-xl font-semibold text-[var(--text)]">
                        {activeDemoData.title}
                      </h3>
                      <p className="text-xs lg:text-sm text-[var(--text-2)] lg:mt-1">
                        Structure pensée pour générer des appels qualifiés, pas juste “un joli site”.
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

                  <div className="mt-5 lg:mt-7 space-y-2">
                    <motion.a
                      href={demoHref[activeDemo]}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 rounded-lg border border-[var(--accent)] bg-[var(--accent)]/10 px-4 py-2 text-sm lg:text-base font-medium text-[var(--accent)] outline-none transition hover:bg-[var(--accent)]/20 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                      aria-label="Voir la démo"
                    >
                      Voir démo
                      <ChevronRight className="h-4 w-4" />
                    </motion.a>
                    <p className="text-xs lg:text-sm text-[var(--text-2)]">
                      {activeDemoData.ctaDescription}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="methode" className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl"
            >
              Méthode
            </motion.h2>
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

        {/* Proofs instead of testimonials */}
        <section id="avis" className="border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl"
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

        {/* Contact */}
        <section id="contact" className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl"
            >
              Contact
            </motion.h2>
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
              Pas de contrat. Pas d&apos;abonnement forcé.
            </p>
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
                        Nom de l’activité
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
        <footer className="border-t border-[var(--border)] px-4 py-12 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="font-heading text-sm font-medium text-[var(--text-2)]">
              VIGI AGENCY · Garages & urgences · Hainaut
            </span>
            <div className="flex gap-6 text-sm text-[var(--text-2)]">
              <a href="#contact" className="transition hover:text-[var(--accent)]">Contact</a>
              <a href="#demo" className="transition hover:text-[var(--accent)]">Démonstrations</a>
            </div>
          </div>
        </footer>
      </main>

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-3 z-40 px-4 sm:px-6 lg:hidden">
        <div className="mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_90%,transparent)] px-3 py-2 shadow-[0_18px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="flex-1 rounded-xl bg-[var(--accent)] px-3 py-2 text-center text-xs font-semibold text-black outline-none transition hover:bg-[var(--accent-2)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            aria-label="Être rappelé par VIGI AGENCY"
          >
            Être rappelé
          </motion.a>
          <motion.a
            href="https://wa.me/32468367226?text=Bonjour%2C%20je%20souhaite%20parler%20d%27un%20site%20web%20pour%20mon%20garage%20%2F%20service%20de%20depannage."
            whileTap={{ scale: 0.96 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-2 text-[11px] font-medium text-[var(--text)] outline-none transition hover:border-[var(--border)] hover:bg-[var(--surface-2)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            aria-label="Contacter VIGI AGENCY sur WhatsApp"
          >
            WhatsApp
          </motion.a>
        </div>
      </div>
    </div>
  );
}
