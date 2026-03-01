"use client";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="fr" className={inter.variable}>
            <body className="font-sans antialiased bg-black text-white flex min-h-screen flex-col items-center justify-center p-4">
                <div className="max-w-md text-center">
                    <h1 className="text-2xl font-bold mb-4">Erreur système critique</h1>
                    <p className="text-zinc-400 text-sm mb-6">
                        L&apos;application a rencontré une erreur fatale.
                    </p>
                    <button
                        onClick={() => reset()}
                        className="rounded-lg bg-zinc-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
                    >
                        Recharger l&apos;application
                    </button>
                </div>
            </body>
        </html>
    );
}
