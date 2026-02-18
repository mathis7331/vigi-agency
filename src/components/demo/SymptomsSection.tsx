"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, MessageCircle } from "lucide-react";

const symptoms = [
  {
    title: "Bruit suspect / voyant moteur",
    copy: "On fait un diagnostic rapide et on vous dit si c'est urgent.",
    cta: "Appelez, on vous guide.",
    icon: Phone,
  },
  {
    title: "Révision / entretien",
    copy: "On planifie un créneau simple, sans perte de temps.",
    cta: "Demander un RDV.",
    icon: Calendar,
  },
  {
    title: "Pneus / freins",
    copy: "Sécurité d'abord : contrôle + devis clair.",
    cta: "WhatsApp possible.",
    icon: MessageCircle,
  },
];

type SymptomsSectionProps = {
  phoneE164: string;
  whatsappE164: string;
  whatsappMessage: string;
};

export function SymptomsSection({
  phoneE164,
  whatsappE164,
  whatsappMessage,
}: SymptomsSectionProps) {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
        >
          Pourquoi on nous appelle
        </motion.h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {symptoms.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.75)] transition-all md:hover:border-[var(--accent)] md:hover:bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] md:hover:shadow-[0_22px_70px_rgba(0,0,0,0.85)]"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-[var(--accent)] transition-all md:group-hover:bg-[color-mix(in_srgb,var(--accent)_25%,transparent)]">
                <item.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="text-base font-semibold text-[var(--text)]">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-2)]">
                {item.copy}
              </p>
              <p className="mt-4 text-xs font-medium text-[var(--accent)]">
                → {item.cta}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
