"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  PhoneOff,
  Zap,
  Shield,
  ChevronRight,
  X,
  Star,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

/** Durée totale de l'intro avant le slide up (ms) */
const INTRO_DURATION_MS = 3000;
/** Courbe fluide pour le rideau (slide up) */
const EASE_REVEAL = [0.76, 0, 0.24, 1] as const;

// Hero motion variants (premium entrance)
// Premium easing curve (no bounce, fluid)
const EASE_PREMIUM = [0.25, 0.1, 0.25, 1.0] as const;

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: EASE_PREMIUM,
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
} as const;

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE_PREMIUM,
    },
  },
} as const;

const heroMockup = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: EASE_PREMIUM,
      delay: 0.4,
    },
  },
} as const;

/** Zone écran dans le mockup iphone.png — plus grande = appel.png occupe plus de place */
const IPHONE_SCREEN_INSET = {
  top: "2.8%",
  left: "3.2%",
  width: "93%",
  height: "94%",
} as const;

/** Hero iPhone mockup: responsive max-widths (easy to tune). Mobile centered, lg+ aligned right. */
const HERO_IPHONE_MAX_WIDTH =
  "max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]";

const FLOATING_CALL_DELAY_MS = 5000;
const FLOATING_CALL_VISIBLE_MS = 5000;

/** Preloader d'introduction cinématique : écran noir, blur reveal "VIGI AGENCY", sous-titre, puis slide up. */
function CinematicPreloader({
  onRevealComplete,
}: {
  onRevealComplete: () => void;
}) {
  const [show, setShow] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, INTRO_DURATION_MS);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait" onExitComplete={onRevealComplete}>
      {show && (
        <motion.div
          key="cinematic-preloader"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505]"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: reducedMotion ? 0.3 : 0.9,
              ease: EASE_REVEAL,
            },
          }}
        >
          {/* Titre — Blur Reveal */}
          <motion.h1
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: reducedMotion ? 0.3 : 1.2,
              ease: "easeOut",
            }}
            className="text-center text-4xl font-semibold tracking-tight text-[#F9FAFB] sm:text-5xl md:text-7xl lg:text-8xl"
          >
            VIGI AGENCY
          </motion.h1>

          {/* Sous-titre minimaliste — palette VIGI AGENCY */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: reducedMotion ? 0.1 : 0.9,
              ease: "easeOut",
            }}
            className="mt-4 text-[10px] font-medium uppercase tracking-[0.35em] text-[#F59E0B]/90 sm:text-xs sm:tracking-[0.4em]"
          >
            SITES WEB POUR GARAGES & DETAILING
          </motion.p>

          {/* Petite ligne de chargement — accent ambre */}
          <div className="mt-8 h-[1px] w-40 overflow-hidden rounded-full bg-white/10 sm:w-52">
            <motion.div
              className="h-full bg-[#F59E0B]"
              style={{ boxShadow: "0 0 18px rgba(245,158,11,0.65)" }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: reducedMotion ? 0.5 : 2.2,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FloatingIncomingCall() {
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<"hidden" | "visible" | "dismissing">("hidden");
  const triggeredRef = useRef(false);

  const dismiss = () => {
    if (phase === "hidden") return;
    setPhase("dismissing");
  };

  useEffect(() => {
    if (triggeredRef.current) return;
    const timeouts: number[] = [];

    const t1 = window.setTimeout(() => {
      triggeredRef.current = true;
      setPhase("visible");

      timeouts.push(
        window.setTimeout(() => {
          setPhase("dismissing");
        }, FLOATING_CALL_VISIBLE_MS)
      );
    }, FLOATING_CALL_DELAY_MS);
    timeouts.push(t1);

    return () => timeouts.forEach(clearTimeout);
  }, []);

  if (phase === "hidden") return null;

  const exitY = reducedMotion ? 0 : -12;
  const exitOpacity = 0;

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Notification appel entrant — Client potentiel"
      initial={reducedMotion ? false : { y: -20, opacity: 0, scale: 0.97 }}
      animate={
        phase === "dismissing"
          ? { y: exitY, opacity: exitOpacity, transition: { duration: reducedMotion ? 0 : 0.4, ease: "easeOut" } }
          : reducedMotion
            ? { opacity: 1 }
            : { y: 0, opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
      }
      onAnimationComplete={() => {
        if (phase === "dismissing") setPhase("hidden");
      }}
      className="fixed z-[70] left-1/2 -translate-x-1/2 w-[280px] max-w-[92vw] rounded-xl border border-white/10 bg-[#0A0A0A]/95 shadow-[0_12px_40px_rgba(0,0,0,0.6)] [backdrop-filter:blur(12px)] [-webkit-backdrop-filter:blur(12px)] top-[calc(env(safe-area-inset-top)+8px)] md:top-[14px] md:w-[280px] md:max-w-[280px]"
    >
      <div className="relative flex items-start gap-3 p-3 pr-9">
        <motion.div
          className="flex shrink-0 items-center justify-center"
          animate={reducedMotion ? {} : { scale: [1, 1.06, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        >
          <Phone className="h-5 w-5 text-[#34C759]" strokeWidth={2.2} />
        </motion.div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Appel entrant</p>
          <p className="mt-0.5 text-[13px] font-semibold tracking-tight text-white">Client potentiel</p>
          <p className="mt-0.5 text-[11px] text-slate-500">Depuis votre site web</p>
          <div className="mt-2 flex items-center justify-end gap-2 text-slate-500">
            <PhoneOff className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            <Phone className="h-3.5 w-3.5 text-[#34C759]" strokeWidth={2} aria-hidden />
          </div>
        </div>
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-slate-400 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          aria-label="Fermer la notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}

function IPhoneCallMockup() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "relative w-full mx-auto lg:ml-auto lg:mr-0",
        HERO_IPHONE_MAX_WIDTH
      )}
      animate={
        prefersReducedMotion
          ? undefined
          : {
            x: [0, -0.6, 0.6, -0.4, 0],
            y: [0, 0.2, -0.2, 0],
            transition: {
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }
      }
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
            rotateZ: [-0.4, 0.4, -0.2, 0.2, 0],
            y: -8,
            x: 0,
            transition: {
              duration: 0.9,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }
      }
    >
      {/* Halo ambre autour du téléphone — desktop uniquement */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 hidden md:block"
        style={{
          background:
            "radial-gradient(circle at 50% 10%, rgba(245,165,36,0.32), transparent 60%)",
          filter: "blur(30px)",
        }}
      />

      {/* Badge contextuel */}
      <div className="pointer-events-none absolute -top-6 right-2 hidden md:inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] px-3 py-1 text-[11px] font-medium text-[var(--text-2)] shadow-[0_8px_30px_rgba(0,0,0,0.8)] backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
        <span>Simulation d&apos;appel</span>
      </div>

      <div className="relative">
        {/* Écran : appel.png en premier (sous le cadre), blur + brightness */}
        <div
          className="absolute z-10 overflow-hidden rounded-[26px] border border-white/10 bg-black/20"
          style={{
            top: IPHONE_SCREEN_INSET.top,
            left: IPHONE_SCREEN_INSET.left,
            width: IPHONE_SCREEN_INSET.width,
            height: IPHONE_SCREEN_INSET.height,
          }}
        >
          <div
            className="absolute inset-0"
            style={{ filter: "blur(0.4px) brightness(0.95)" }}
          >
            <Image
              src="/appel.png"
              alt="Écran d&apos;appel entrant — simulation"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
            />
          </div>
        </div>

        {/* Cadre iPhone au-dessus de l’écran — wrapper pour netteté iOS Safari */}
        <div className="hero-iphone-frame relative z-20">
          <Image
            src="/iphone.png"
            alt="Simulation d&apos;appel entrant sur iPhone"
            width={900}
            height={1800}
            priority
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
            className="h-auto w-full select-none drop-shadow-[0_32px_80px_rgba(0,0,0,0.85)]"
          />
        </div>
      </div>
    </motion.div>
  );
}



function HeroStatus({ visible }: { visible: boolean }) {
  return (
    <></>
  );
}

export function Hero() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <CinematicPreloader onRevealComplete={() => setIntroDone(true)} />
      <FloatingIncomingCall />

      <section className="relative overflow-x-hidden overflow-y-visible px-4 pt-16 pb-24 sm:px-6 sm:pt-24 sm:pb-32 lg:px-10 lg:pt-28 lg:pb-36">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-[var(--bg)] to-[#05080c]" />
          <div className="hero-spotlight" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_100%,rgba(0,0,0,0.6),transparent_65%)]" />
        </div>

        <div className="mx-auto grid max-w-6xl w-full min-w-0 gap-12 lg:max-w-7xl lg:grid-cols-2 lg:items-center lg:gap-14 lg:pt-8">
          <div className="flex flex-col justify-center lg:max-w-[560px]">
            <motion.div
              variants={heroContainer}
              initial="hidden"
              animate={introDone ? "visible" : "hidden"}
              className="space-y-8 sm:space-y-10 hero-glass-panel"
            >
              <div className="space-y-6">
                <motion.h1
                  variants={heroItem}
                  className="font-heading text-3xl font-semibold leading-[1.05] tracking-tight text-white/90 sm:text-4xl lg:text-[clamp(2.5rem,4.4vw,4.875rem)] lg:leading-[0.95] hero-title-industrial"
                >
                  <span className="block">Des sites qui font</span>
                  <span className="block text-[var(--accent)]">sonner le téléphone.</span>
                </motion.h1>
                <motion.p
                  variants={heroItem}
                  className="max-w-lg text-[15px] sm:text-base font-medium leading-relaxed text-[var(--text-2)] lg:max-w-[52ch] lg:text-[18px] lg:leading-relaxed"
                >
                  Pages d&apos;urgence, SEO local, WhatsApp, appel 1 clic. Pensé pour la route et pour les garages du
                  Hainaut.
                </motion.p>
              </div>
              <motion.div
                variants={heroItem}
                className="flex flex-wrap gap-3 lg:flex-row lg:gap-4"
              >
                <motion.a
                  href="#demo"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(245,165,36,0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(245,165,36,0.4)] outline-none transition-all duration-300 hover:bg-[var(--accent-2)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] cta-primary-premium"
                  aria-label="Voir la démo"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Voir une démo
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-lg border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--text)] outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] cta-secondary-premium"
                  aria-label="Parler d&apos;un projet"
                >
                  Parler d&apos;un projet
                </motion.a>
              </motion.div>
              <motion.p
                variants={heroItem}
                className="text-xs text-[var(--text-2)] lg:mt-2"
              >
                Aucune obligation – juste un aperçu concret.
              </motion.p>

              {/* Mobile: stacked micro-text */}
              <motion.div
                variants={heroItem}
                className="space-y-1.5 text-xs sm:text-sm text-[var(--text-2)] lg:hidden"
              >
                <p className="font-medium text-[var(--text)]">
                  Réponse rapide • Déploiement en 72h
                </p>
                <p className="text-[var(--text-2)]">
                  On s&apos;occupe du site, vous vous occupez des véhicules.
                </p>
              </motion.div>

              {/* Desktop: premium chips */}
              <motion.div
                variants={heroItem}
                className="hidden lg:flex hero-proof-chips"
              >
                <span className="hero-proof-chip">
                  <Zap className="h-3.5 w-3.5 text-[var(--accent)]" />
                  Réponse rapide
                </span>
                <div className="hero-proof-separator" />
                <span className="hero-proof-chip">
                  <Shield className="h-3.5 w-3.5 text-[var(--accent)]" />
                  Déploiement en 72h
                </span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={heroMockup}
            initial="hidden"
            animate={introDone ? "visible" : "hidden"}
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
            <div className="relative w-full min-w-0 flex items-center justify-center lg:justify-end overflow-hidden md:overflow-visible">
              <IPhoneCallMockup />
            </div>
          </motion.div>
        </div>

        <HeroStatus visible={introDone} />
      </section>
    </>
  );
}
