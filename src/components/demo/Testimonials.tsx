"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "RDV rapide, explications claires. Je recommande.",
    author: "Client — Mons",
  },
  {
    quote: "On m'a dit direct si je pouvais rouler. Super pro.",
    author: "Client — Région",
  },
  {
    quote: "Devis clair, pas de surprise. Travail propre.",
    author: "Client — Mons",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 overflow-x-hidden">
      <div className="mx-auto max-w-6xl w-full min-w-0">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
        >
          Avis clients
        </motion.h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.figure
              key={item.quote}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.75)]"
            >
              <blockquote className="text-sm leading-relaxed text-[var(--text)]">
                « {item.quote} »
              </blockquote>
              <figcaption className="mt-3 text-xs text-[var(--text-2)]">
                {item.author}
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <p className="mt-4 text-xs text-[var(--text-2)]">
          Exemples de retours clients (démonstration).
        </p>
      </div>
    </section>
  );
}
