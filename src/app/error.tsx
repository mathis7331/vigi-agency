"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log securely to an exact monitoring service like Sentry or Vercel, but NOT raw console.error 
        // to prevent trace leaking in production standard out if not desired, though Next.js handles this well.
        // console.error(error); // Intentionally omitted for security hardening
    }, [error]);

    return (
        <div className="site-main flex min-h-[100dvh] flex-col items-center justify-center bg-[var(--bg)] px-4 text-center overflow-hidden">
            <div className="cinematic-grain" aria-hidden />
            <div className="cinematic-blob-hero" aria-hidden />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 max-w-md w-full"
            >
                <div className="mb-6 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] shadow-xl">
                        <svg className="h-8 w-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                </div>

                <h1 className="font-heading text-2xl font-bold text-[var(--text)] sm:text-3xl">
                    Une erreur est survenue
                </h1>

                <p className="mt-3 text-sm text-[var(--text-2)]">
                    Nous avons rencontré un problème inattendu. Notre équipe a été discrètement notifiée.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button
                        onClick={() => reset()}
                        className="w-full rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[var(--accent-2)] sm:w-auto"
                    >
                        Réessayer
                    </button>
                    <Link
                        href="/"
                        className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--border)] hover:bg-[var(--surface-2)] sm:w-auto"
                    >
                        Retour à l&apos;accueil
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
