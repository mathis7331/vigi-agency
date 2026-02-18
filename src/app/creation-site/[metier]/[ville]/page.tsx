import type { Metadata } from "next";
import Link from "next/link";
import {
  getMetierBySlug,
  getCityBySlug,
  getMetaDescription,
} from "@/lib/local-landing-data";
import { LocalLandingPreviewClient } from "./LocalLandingPreviewClient";

type Props = {
  params: Promise<{ metier: string; ville: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { metier: metierSlug, ville: villeSlug } = await params;
  const metier = getMetierBySlug(metierSlug);
  const city = getCityBySlug(villeSlug);
  const metierLabel = metier?.label ?? metierSlug;
  const cityLabel = city?.label ?? villeSlug;
  const title = `Création site web ${metierLabel.toLowerCase()} à ${cityLabel}`;
  const description = getMetaDescription(metierLabel, cityLabel);
  return {
    title,
    description: description.slice(0, 155),
  };
}

export default async function CreationSiteMetierVillePage({ params }: Props) {
  const { metier: metierSlug, ville: villeSlug } = await params;
  const metier = getMetierBySlug(metierSlug);
  const city = getCityBySlug(villeSlug);
  const metierId = metier?.id ?? "garage";
  const zoneId = "belgique";
  const villeId = city?.id ?? "Mons";

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
        <LocalLandingPreviewClient
          metierId={metierId}
          zoneId={zoneId}
          villeId={villeId}
          backHref="/"
          showPreviewLabel={false}
          compact={false}
        />
      </main>
    </div>
  );
}
