import { Metadata } from "next";
import GarageLandingClient from "./client";

export const metadata: Metadata = {
    title: "Création de site web pour Garage Auto",
    description: "Agence spécialisée dans la création de sites web performants pour les garages automobiles en Belgique.",
    alternates: {
        canonical: "https://www.vigi-agency.be/garage",
    },
};

export default function GaragePage() {
    return <GarageLandingClient />;
}
