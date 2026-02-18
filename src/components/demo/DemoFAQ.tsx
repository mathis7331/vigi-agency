"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const defaultFaqs = [
  {
    q: "En combien de temps puis-je avoir un RDV ?",
    a: "Selon la période, on trouve souvent un créneau rapide. Appelez-nous et on vous propose la meilleure option.",
  },
  {
    q: "Faites-vous un devis avant d'intervenir ?",
    a: "Oui. On explique, on chiffre, puis on intervient seulement après accord.",
  },
  {
    q: "Puis-je vous envoyer une photo / vidéo du problème ?",
    a: "Oui, via WhatsApp. Pratique pour un premier avis.",
  },
  {
    q: "Quels moyens de paiement acceptez-vous ?",
    a: "Carte et cash.",
  },
  {
    q: "Proposez-vous un véhicule de remplacement ?",
    a: "Selon disponibilité.",
  },
];

type DemoFAQProps = {
  /** Override default garage FAQs with custom q/a list */
  faqs?: ReadonlyArray<{ readonly q: string; readonly a: string }>;
};

export function DemoFAQ({ faqs: customFaqs }: DemoFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = customFaqs ?? defaultFaqs;

  return (
    <section className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 overflow-x-hidden">
      <div className="mx-auto max-w-3xl w-full min-w-0">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
        >
          Questions fréquentes
        </motion.h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_18px_55px_rgba(0,0,0,0.75)]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-semibold text-[var(--text)] transition hover:bg-[color-mix(in_srgb,var(--accent)_5%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-[var(--text-2)] transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="border-t border-[var(--border)] px-5 py-4 text-sm leading-relaxed text-[var(--text-2)]">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
