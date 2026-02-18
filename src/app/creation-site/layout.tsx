import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création de site web | VIGI AGENCY",
  description:
    "Générateur de pages locales : choisissez métier, zone et ville pour un aperçu de votre site. Garages, dépannage, carrosserie, detailing — Belgique.",
};

export default function CreationSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
