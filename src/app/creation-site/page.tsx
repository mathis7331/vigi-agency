"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { METIERS, ZONES, getCitiesOrderedByZone, getCityBySlug, getCityById } from "@/lib/local-landing-data";
import { LocalLandingPreview } from "@/components/LocalLandingPreview";
import { cn } from "@/lib/utils";

function CreationSiteContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [metier, setMetier] = useState<string>("garage");
  const [zone, setZone] = useState<string>("hainaut");
  const [ville, setVille] = useState<string>("Mons");

  useEffect(() => {
    const m = searchParams.get("metier") || "garage";
    const z = searchParams.get("zone") || "hainaut";
    const v = searchParams.get("ville");
    const city = v ? getCityBySlug(v) : null;
    setMetier(m);
    setZone(z);
    setVille(city?.id ?? "Mons");
  }, [searchParams]);

  useEffect(() => {
    const slug = getCityById(ville)?.slug ?? ville.toLowerCase();
    const params = new URLSearchParams();
    params.set("metier", metier);
    params.set("zone", zone);
    params.set("ville", slug);
    const next = `?${params.toString()}`;
    if (typeof window !== "undefined" && window.location.search !== next) {
      router.replace(`${pathname}${next}`, { scroll: false });
    }
  }, [metier, zone, ville, pathname, router]);

  return (
    <div className="site-main min-h-screen">
      <header className="border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_90%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl w-full min-w-0 items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-10">
          <Link href="/" className="font-heading text-lg font-semibold tracking-tight text-[var(--text)]">
            VIGI AGENCY
          </Link>
          <Link
            href="/#contact"
            className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-black transition hover:bg-[var(--accent-2)]"
          >
            Contact
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl w-full min-w-0 px-4 py-10 sm:px-6 lg:px-10 lg:py-16 overflow-x-hidden">
        <h1 className="font-heading text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">
          Création de site web — générateur
        </h1>
        <p className="mt-2 text-sm text-[var(--text-2)]">
          Choisissez votre métier, zone et ville pour voir un aperçu de votre page locale.
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--text-2)]" id="cs-metier-label">
              Métier
            </p>
            <div className="flex flex-wrap gap-2" role="group" aria-labelledby="cs-metier-label">
              {METIERS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMetier(m.id)}
                  aria-pressed={metier === m.id}
                  className={cn(
                    "inline-flex items-center rounded-full border px-4 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-2)]",
                    metier === m.id
                      ? "border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] text-[var(--text)]"
                      : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-2)] hover:border-[var(--accent)]/60 hover:bg-[var(--surface-2)] hover:text-[var(--text)]"
                  )}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--text-2)]" id="cs-zone-label">
              Zone
            </p>
            <div className="flex flex-wrap gap-2" role="group" aria-labelledby="cs-zone-label">
              {ZONES.map((z) => (
                <button
                  key={z.id}
                  type="button"
                  onClick={() => setZone(z.id)}
                  aria-pressed={zone === z.id}
                  className={cn(
                    "inline-flex items-center rounded-full border px-3.5 py-2 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-2)]",
                    zone === z.id
                      ? "border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-[var(--text)]"
                      : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-2)] hover:border-[var(--accent)]/50 hover:bg-[var(--surface-2)] hover:text-[var(--text)]"
                  )}
                >
                  {z.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--text-2)]" id="cs-ville-label">
              Ville
            </p>
            <div className="flex flex-wrap gap-2" role="group" aria-labelledby="cs-ville-label">
              {getCitiesOrderedByZone(zone).map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setVille(c.id)}
                  aria-pressed={ville === c.id}
                  className={cn(
                    "inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-2)]",
                    ville === c.id
                      ? "border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-[var(--text)]"
                      : "border-[var(--border)] bg-[var(--surface-2)]/80 text-[var(--text-2)] hover:border-[var(--accent)]/50 hover:text-[var(--text)]"
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <LocalLandingPreview
            metierId={metier}
            zoneId={zone}
            villeId={ville}
            backHref="/"
            showPreviewLabel={true}
            compact={false}
          />
        </div>
      </main>
    </div>
  );
}

export default function CreationSitePage() {
  return (
    <Suspense fallback={<div className="site-main min-h-screen" />}>
      <CreationSiteContent />
    </Suspense>
  );
}
