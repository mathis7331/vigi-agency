"use client";

import { motion } from "framer-motion";
import { Wrench, Disc, Gauge, Stethoscope, Battery, Wind } from "lucide-react";

const services = [
  {
    title: "Entretien & révision",
    copy: "Vidange, filtres, check sécurité.",
    icon: Wrench,
  },
  {
    title: "Freins",
    copy: "Plaquettes, disques, diagnostic.",
    icon: Disc,
  },
  {
    title: "Pneus",
    copy: "Montage, équilibrage, permutation.",
    icon: Gauge,
  },
  {
    title: "Diagnostic",
    copy: "Voyants, valise, recherche de panne.",
    icon: Stethoscope,
  },
  {
    title: "Batterie & démarrage",
    copy: "Test batterie, alternateur, remplacement.",
    icon: Battery,
  },
  {
    title: "Climatisation",
    copy: "Recharge, contrôle, odeurs.",
    icon: Wind,
  },
];

export function ServicesGrid() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 overflow-x-hidden">
      <div className="mx-auto max-w-6xl w-full min-w-0">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
        >
          Services
        </motion.h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.75)] transition-all md:hover:border-[var(--accent)] md:hover:bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] md:hover:shadow-[0_22px_70px_rgba(0,0,0,0.85)]"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-[var(--accent)] transition-all md:group-hover:bg-[color-mix(in_srgb,var(--accent)_25%,transparent)]">
                <service.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="text-base font-semibold text-[var(--text)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-2)]">
                {service.copy}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
