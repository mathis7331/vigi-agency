"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ContactSection } from "@/app/components/sections/Contact";
import { HeroGarage } from "./components/HeroGarage";

function GarageLanding() {
    const [navScrolled, setNavScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setNavScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
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
                        <a
                            href="#contact"
                            className="text-sm transition duration-200 lg:tracking-wide text-[var(--text-2)] hover:text-[var(--accent)]"
                        >
                            Contact
                        </a>
                    </div>
                    <a
                        href="https://wa.me/32468367226?text=Bonjour%2C%20je%20souhaite%20parler%20d%27un%20site%20web%20pour%20mon%20garage."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-black transition hover:bg-[var(--accent-2)] hover:shadow-lg hover:shadow-[0_0_30px_rgba(245,183,3,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                    >
                        Être rappelé
                    </a>
                </div>
            </nav>

            <main className="relative z-10 overflow-x-hidden overflow-y-visible pb-28 sm:pb-0">
                <HeroGarage />
                <ContactSection />

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
                            <Link href="/" className="text-sm text-[var(--text-2)] transition duration-200 hover:text-[var(--accent)]">Accueil</Link>
                            <a href="#contact" className="text-sm text-[var(--text-2)] transition duration-200 hover:text-[var(--accent)]">Contact</a>
                        </nav>
                    </div>
                </footer>
            </main>

            <div className="hidden" aria-hidden="true" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
                <div className="mx-auto flex max-w-md w-full min-w-0 flex-nowrap items-center gap-2 rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] px-3 py-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.9)] [backdrop-filter:blur(12px)] [-webkit-backdrop-filter:blur(12px)]">
                    <motion.a
                        href="https://wa.me/32468367226?text=Bonjour%2C%20je%20souhaite%20parler%20d%27un%20site%20web%20pour%20mon%20garage."
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.96 }}
                        className="min-w-0 flex-1 shrink rounded-xl bg-[var(--accent)] px-3 py-2.5 text-center text-xs font-semibold text-black outline-none transition hover:bg-[var(--accent-2)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                    >
                        <span className="block truncate whitespace-nowrap">Être rappelé</span>
                    </motion.a>
                </div>
            </div>
        </div>
    );
}

export default function GarageLandingClient() {
    return (
        <Suspense fallback={<div className="site-main min-h-screen" />}>
            <GarageLanding />
        </Suspense>
    );
}
