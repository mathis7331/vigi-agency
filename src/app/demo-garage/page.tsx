"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, CheckCircle2 } from "lucide-react";
import { DemoHeader } from "@/components/demo/DemoHeader";
import { DemoStickyCTA } from "@/components/demo/DemoStickyCTA";
import { TrustInfoCard } from "@/components/demo/TrustInfoCard";
import { ServicesGrid } from "@/components/demo/ServicesGrid";
import { SymptomsSection } from "@/components/demo/SymptomsSection";
import { ProofSection } from "@/components/demo/ProofSection";
import { Testimonials } from "@/components/demo/Testimonials";
import { DemoFAQ } from "@/components/demo/DemoFAQ";
import { ConversionCTA } from "@/components/demo/ConversionCTA";
import { TrustInfoBlockMobile } from "@/components/demo/TrustInfoBlockMobile";
import { DemoFooter } from "@/components/demo/DemoFooter";

const GARAGE = {
  name: "Garage Martin",
  city: "Mons",
  phoneDisplay: "+32 473 12 34 56",
  phoneE164: "+32473123456",
  whatsappE164: "+32473123456",
  address: "Rue de l'Atelier 12, 7000 Mons",
  hours: [
    { day: "Lun–Ven", hours: "08:00–18:00" },
    { day: "Sam", hours: "09:00–13:00" },
    { day: "Dim", hours: "Fermé" },
  ],
  serviceArea: "Mons • Jemappes • Cuesmes • Nimy • Saint-Symphorien",
} as const;

const WHATSAPP_MESSAGE =
  "Je viens de voir la démo Garage. J'aimerais un site comme ça pour mon activité. Pouvez-vous me rappeler ?";

const trustBullets = [
  "RDV rapide selon dispo",
  "Devis clair avant intervention",
  "Appel / WhatsApp en 1 clic",
];

export default function DemoGaragePage() {
  return (
    <>
      <div className="noise" aria-hidden />
      <div className="speed-lines" aria-hidden />

      <main className="site-demo relative z-10 min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <DemoHeader
          businessName={GARAGE.name}
          businessInitials="GM"
          demoType="Garage"
        />

        {/* HERO */}
        <section className="overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-black via-[var(--bg)] to-[var(--bg)] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-6xl w-full min-w-0 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 text-xs font-medium text-[var(--text-2)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                {GARAGE.city}
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-4xl lg:text-[2.75rem]">
                  Garage à Mons — entretien, pneus, freins
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-[var(--text-2)]">
                  Un bruit suspect ? Un voyant moteur ? Appelez-nous : on vous dit tout de suite si vous pouvez rouler.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${GARAGE.phoneE164}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black shadow-[0_18px_50px_rgba(245,158,11,0.25)] transition hover:translate-y-[-1px] hover:shadow-[0_22px_60px_rgba(245,158,11,0.33)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  <Phone className="h-4 w-4" />
                  Appeler maintenant
                </a>
                <a
                  href="/#contact?from=demo-garage"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  <Calendar className="h-4 w-4" />
                  Demande de rendez-vous
                </a>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-[var(--text-2)]">
                {trustBullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent)]" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[var(--text-2)]">
                Ceci est une page de démonstration. Aucun garage réel, aucun numéro réel.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <TrustInfoCard
                address={GARAGE.address}
                hours={GARAGE.hours}
                serviceArea={GARAGE.serviceArea}
                phoneDisplay={GARAGE.phoneDisplay}
                phoneE164={GARAGE.phoneE164}
              />
            </motion.div>
          </div>
        </section>

        <ServicesGrid />

        <SymptomsSection
          phoneE164={GARAGE.phoneE164}
          whatsappE164={GARAGE.whatsappE164}
          whatsappMessage={WHATSAPP_MESSAGE}
        />

        <ProofSection />

        <Testimonials />

        <DemoFAQ />

        <ConversionCTA
          phoneE164={GARAGE.phoneE164}
          phoneDisplay={GARAGE.phoneDisplay}
          whatsappE164={GARAGE.whatsappE164}
          whatsappMessage={WHATSAPP_MESSAGE}
        />

        <TrustInfoBlockMobile
          address={GARAGE.address}
          hours={GARAGE.hours}
          serviceArea={GARAGE.serviceArea}
          phoneDisplay={GARAGE.phoneDisplay}
          phoneE164={GARAGE.phoneE164}
        />

        <DemoFooter businessName={GARAGE.name} demoType="Garage" />

        <DemoStickyCTA
          phoneE164={GARAGE.phoneE164}
          phoneDisplay={GARAGE.phoneDisplay}
          whatsappE164={GARAGE.whatsappE164}
          whatsappMessage={WHATSAPP_MESSAGE}
        />
      </main>
    </>
  );
}
