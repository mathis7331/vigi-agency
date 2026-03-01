"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ContactSection } from "./components/sections/Contact";
import { FaqSection } from "./components/sections/Faq";
import { HeroSection } from "./components/sections/Hero";
import { ConceptSection } from "@/components/sections/Concept";
import { PricingSection } from "./components/sections/Pricing";
import { ProofSection } from "./components/sections/Proof";
import { ServicesSection } from "./components/sections/Services";
import { TechStackSection } from "@/components/sections/TechStack";
import { CinematicVideoSection } from "./components/sections/CinematicVideo";
import { InstagramSection } from "./components/sections/InstagramSection";


const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#projection", label: "Cas Client" },
  { href: "#methode", label: "Méthode" },
  { href: "#deroulement", label: "Déroulement" },
  { href: "#preuves", label: "Preuves" },
  { href: "#offres", label: "Offres" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

function Home() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("services");

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["services", "pertes", "projection", "parlons-projet", "resultats", "methode", "deroulement", "preuves", "qui", "offres", "faq", "contact"];
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

  return (
    <div className="site-main min-h-screen min-h-[100dvh]">
      <div className="cinematic-grain" aria-hidden />
      <div className="cinematic-blob-hero" aria-hidden />
      <div className="cinematic-blob-macbook" aria-hidden />
      <div className="cinematic-blob-mid" aria-hidden />
      <div className="cinematic-sheen" aria-hidden />

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
        <HeroSection />
        <CinematicVideoSection />
        <ConceptSection />
        <ServicesSection />
        <ProofSection />
        <TechStackSection />
        <PricingSection />

        <FaqSection />
        <ContactSection />
        <InstagramSection />

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
              <a href="#projection" className="text-sm text-[var(--text-2)] transition duration-200 hover:text-[var(--accent)]">Cas Client</a>
              <a href="#offres" className="text-sm text-[var(--text-2)] transition duration-200 hover:text-[var(--accent)]">Offres</a>
              <a href="#faq" className="text-sm text-[var(--text-2)] transition duration-200 hover:text-[var(--accent)]">FAQ</a>
              <Link href="/expertise-garage" className="text-sm text-[var(--text-2)] transition duration-200 hover:text-[var(--accent)]">Expertise garages</Link>
              <a href="#contact" className="text-sm text-[var(--text-2)] transition duration-200 hover:text-[var(--accent)]">Contact</a>
            </nav>
          </div>
        </footer>
      </main>

      <div className="hidden" aria-hidden="true" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
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
