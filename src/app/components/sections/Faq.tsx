"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollRevealVariants, scrollRevealReducedVariants, SCROLL_VIEWPORT, STAGGER_DELAY } from "@/lib/motion";

const faqs = [
  {
    question: "Ça prend combien de temps ?",
    answer: "Environ 5 jours. Discussion rapide (10 min), puis construction de votre site. Vous recevez un aperçu avant la mise en ligne. Pas de surprise.",
  },
  {
    question: "Je dois écrire les textes ?",
    answer: "Non. On rédige tout à partir de votre activité, vos services et votre zone. Vous validez, on met en forme. Aucune compétence rédactionnelle requise.",
  },
  {
    question: "Si je veux changer quelque chose après ?",
    answer: "Tout à fait. On peut modifier les textes, les photos ou les infos. L’option sérénité (9 €/mois) inclut des mises à jour mineures. Sinon, on s’adapte au besoin.",
  },
  {
    question: "Je possède le site ?",
    answer: "Oui. Le site est à vous. Le code, le contenu, le domaine si vous en avez un — tout vous appartient. Pas de blocage ni de dépendance.",
  },
  {
    question: "Abonnement obligatoire ?",
    answer: "Non. Les offres sont en paiement unique. L’hébergement et la maintenance (9 €/mois) sont optionnels — pour ceux qui veulent la tranquillité d’esprit sans s’en occuper.",
  },
] as const;

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  reduced,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  reduced?: boolean | null;
}) {
  return (
    <div className="border-b border-[var(--border)] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-base font-semibold text-[var(--text)] sm:text-lg">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-[var(--text-2)] transition-transform duration-200",
            isOpen && "rotate-180 text-[var(--accent)]"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0.12 : 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-sm leading-relaxed text-[var(--text-2)]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduced = useReducedMotion();
  const variants = reduced ? scrollRevealReducedVariants : scrollRevealVariants;

  return (
    <section
      id="faq"
      className="border-t border-[var(--border)] bg-[var(--bg-2)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32 overflow-x-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl w-full min-w-0">
        <p className="section-eyebrow">Questions fréquentes</p>
        <motion.h2
          id="faq-heading"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={SCROLL_VIEWPORT}
          className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl section-title-industrial"
        >
          Les réponses aux questions des artisans
        </motion.h2>
        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={SCROLL_VIEWPORT}
          transition={{ delay: reduced ? 0 : STAGGER_DELAY }}
          className="mt-3 text-sm text-[var(--text-2)]"
        >
          Ce que les garages et artisans nous demandent le plus souvent.
        </motion.p>
        <div className="brand-signature-line hidden lg:block mt-4" aria-hidden />

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={SCROLL_VIEWPORT}
          transition={{ delay: reduced ? 0 : STAGGER_DELAY }}
          className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 sm:px-6"
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              reduced={reduced}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
