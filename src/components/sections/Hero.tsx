"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const INTRO_DURATION_MS = 3000;
const EASE_REVEAL = [0.76, 0, 0.24, 1] as const;
const EASE_PREMIUM = [0.25, 0.1, 0.25, 1.0] as const;

const heroContainer = (reduced: boolean) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: reduced ? 0.25 : 0.5,
      ease: EASE_PREMIUM,
      staggerChildren: reduced ? 0.04 : 0.07,
      delayChildren: reduced ? 0.04 : 0.1,
    },
  },
});

const heroItem = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduced ? 0.2 : 0.4,
      ease: EASE_PREMIUM,
    },
  },
});

/** GPU-friendly: opacity + translateY only, no scale */
const heroMockup = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduced ? 0.25 : 0.5,
      ease: EASE_PREMIUM,
      delay: reduced ? 0.05 : 0.15,
    },
  },
});

const IPHONE_SCREEN_INSET = {
  top: "2.8%",
  left: "3.2%",
  width: "93%",
  height: "94%",
} as const;

const HERO_IPHONE_MAX_WIDTH = "max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]";

function CinematicPreloader({ onRevealComplete }: { onRevealComplete: () => void }) {
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
          <motion.h1
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: reducedMotion ? 0.3 : 1.2, ease: "easeOut" }}
            className="text-center text-4xl font-semibold tracking-tight text-[#F9FAFB] sm:text-5xl md:text-7xl lg:text-8xl"
          >
            VIGI AGENCY
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: reducedMotion ? 0.1 : 0.9, ease: "easeOut" }}
            className="mt-4 text-[10px] font-medium uppercase tracking-[0.35em] text-[#F59E0B]/90 sm:text-xs sm:tracking-[0.4em]"
          >
            SITES WEB POUR GARAGES & DETAILING
          </motion.p>

          <div className="mt-8 h-[1px] w-40 overflow-hidden rounded-full bg-white/10 sm:w-52">
            <motion.div
              className="h-full bg-[#F59E0B]"
              style={{ boxShadow: "0 0 18px rgba(245,158,11,0.65)" }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: reducedMotion ? 0.5 : 2.2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function IPhoneCallMockup() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("relative w-full mx-auto lg:ml-auto lg:mr-0 lg:hover:-translate-y-2 lg:transition-transform lg:duration-700", HERO_IPHONE_MAX_WIDTH)}
      animate={
        prefersReducedMotion
          ? undefined
          : {
            x: [0, -0.6, 0.6, -0.4, 0],
            y: [0, 0.2, -0.2, 0],
            transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
          }
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 hidden md:block"
        style={{
          background: "radial-gradient(circle at 50% 10%, rgba(245,165,36,0.32), transparent 60%)",
          filter: "blur(30px)",
        }}
      />

      <div className="pointer-events-none absolute -top-6 right-2 hidden md:inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] px-3 py-1 text-[11px] font-medium text-[var(--text-2)] shadow-[0_8px_30px_rgba(0,0,0,0.8)] backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
        <span>Simulation d&apos;appel</span>
      </div>

      <div className="relative">
        <div
          className="absolute z-10 overflow-hidden rounded-[26px] border border-white/10 bg-black/20"
          style={{
            top: IPHONE_SCREEN_INSET.top,
            left: IPHONE_SCREEN_INSET.left,
            width: IPHONE_SCREEN_INSET.width,
            height: IPHONE_SCREEN_INSET.height,
          }}
        >
          <div className="absolute inset-0" style={{ filter: "blur(0.4px) brightness(0.95)" }}>
            <Image
              src="/appel.png"
              alt="Écran d’appel entrant — simulation"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
            />
          </div>
        </div>

        <div className="hero-iphone-frame relative z-20">
          <Image
            src="/iphone.png"
            alt="Simulation d’appel entrant sur iPhone"
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

export function Hero() {
  const [introDone, setIntroDone] = useState(false);
  const reduced = useReducedMotion();
  const containerVariants = heroContainer(!!reduced);
  const itemVariants = heroItem(!!reduced);
  const mockupVariants = heroMockup(!!reduced);

  return (
    <>
      <CinematicPreloader onRevealComplete={() => setIntroDone(true)} />

      <section className="relative overflow-x-hidden overflow-y-visible px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-10 lg:pt-28 lg:pb-36">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-[var(--bg)] to-[#05080c]" />
          <div className="hero-spotlight" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_100%,rgba(0,0,0,0.6),transparent_65%)]" />
        </div>

        <div className="mx-auto grid max-w-6xl w-full min-w-0 gap-10 sm:gap-12 lg:max-w-7xl lg:grid-cols-2 lg:items-center lg:gap-14 lg:pt-8">
          <div className="flex flex-col justify-center lg:max-w-[560px]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={introDone ? "visible" : "hidden"}
              className="space-y-6 rounded-2xl border border-white/8 bg-[color-mix(in_srgb,var(--bg)_86%,transparent)] p-4 shadow-none md:shadow-[0_20px_45px_rgba(0,0,0,0.45)] md:backdrop-blur-[2px] sm:space-y-7 sm:p-6 lg:space-y-10 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none hero-glass-panel"
            >
              <div className="space-y-4 sm:space-y-5">
                <motion.h1
                  variants={itemVariants}
                  className="font-heading text-[clamp(1.95rem,8.6vw,2.7rem)] font-semibold leading-[1.02] tracking-tight text-white/92 [text-wrap:balance] sm:text-4xl lg:text-[clamp(2.5rem,4.4vw,4.875rem)] lg:leading-[0.95] hero-title-industrial"
                >
                  <span className="block">Un site qui transforme</span>
                  <span className="block text-[var(--accent)]">vos visites en rendez-vous.</span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="max-w-lg text-[15px] font-medium leading-relaxed text-[var(--text-2)] [text-wrap:balance] sm:text-base lg:max-w-[52ch] lg:text-[18px]"
                >
                  Des systèmes web conçus pour structurer votre présence locale et transformer la demande en activité réelle. Filtrage intelligent, parcours structuré et acquisition qualifiée pour garages, carrosseries et centres de detailing.
                </motion.p>
              </div>

              <motion.div variants={itemVariants} className="grid gap-2.5 sm:flex sm:flex-wrap sm:gap-3 lg:gap-4">
                <motion.a
                  href="#contact"
                  whileHover={reduced ? undefined : { scale: 1.01 }}
                  whileTap={reduced ? undefined : { scale: 0.98 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-black shadow-[0_0_30px_rgba(245,165,36,0.28)] transition-all duration-300 hover:bg-[var(--accent-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] sm:h-11 sm:w-auto sm:rounded-lg"
                  aria-label="Parler d’un projet"
                >
                  Auditer mon acquisition locale
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </motion.a>

                <motion.a
                  href="#demo"
                  whileHover={reduced ? undefined : { scale: 1.01 }}
                  whileTap={reduced ? undefined : { scale: 0.98 }}
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 text-sm font-medium text-[var(--text)] transition-all duration-300 hover:bg-[var(--surface-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] sm:h-11 sm:w-auto sm:rounded-lg"
                  aria-label="Voir une démo"
                >
                  Voir une démo
                </motion.a>
              </motion.div>

              <motion.p variants={itemVariants} className="text-xs leading-relaxed text-[var(--text-2)] sm:text-[13px]">
                Positionnement premium. Exécution orientée résultats.
              </motion.p>

              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-2.5 lg:hidden">
                <div className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[11px] font-medium text-[var(--text-2)]">
                  <Zap className="h-3.5 w-3.5 text-[var(--accent)]" />
                  <span className="truncate">Architecture technique</span>
                </div>
                <div className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[11px] font-medium text-[var(--text-2)]">
                  <Shield className="h-3.5 w-3.5 text-[var(--accent)]" />
                  <span className="truncate">Présence dominante</span>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="hidden lg:flex hero-proof-chips">
                <span className="hero-proof-chip">
                  <Zap className="h-3.5 w-3.5 text-[var(--accent)]" />
                  Architecture technique
                </span>
                <div className="hero-proof-separator" />
                <span className="hero-proof-chip">
                  <Shield className="h-3.5 w-3.5 text-[var(--accent)]" />
                  Présence dominante
                </span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={mockupVariants}
            initial="hidden"
            animate={introDone ? "visible" : "hidden"}
            className="relative flex items-center justify-center lg:justify-end"
          >
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

      </section>
    </>
  );
}