import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ ville: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { ville } = await params;
    return {
        title: `Site web detailing à ${ville.charAt(0).toUpperCase() + ville.slice(1)} — VIGI AGENCY`,
        description: `Création de site web pour detailing automobile à ${ville}. Galerie avant/après, SEO local, déploiement rapide.`,
    };
}

export default async function DetailingVillePage({ params }: Props) {
    // Phase 2 — City pages not yet implemented
    notFound();
}
