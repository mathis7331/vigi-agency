"use client";

import { Suspense, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const ZONE_VILLES_ALL: { id: string; label: string }[] = [
  { id: "Bruxelles", label: "Bruxelles" },
  { id: "Anvers", label: "Anvers" },
  { id: "Gand", label: "Gand" },
  { id: "Charleroi", label: "Charleroi" },
  { id: "Liege", label: "Liège" },
  { id: "Namur", label: "Namur" },
  { id: "Louvain", label: "Louvain" },
  { id: "Bruges", label: "Bruges" },
  { id: "Mons", label: "Mons" },
];

import { scrollRevealVariants, scrollRevealReducedVariants, SCROLL_VIEWPORT } from "@/lib/motion";

const contactSchema = z.object({
  name: z.string().min(2, "Prénom / Nom requis"),
  business: z.string().min(1, "Nom de l’activité requis"),
  email: z.string().email("Email invalide"),
  city: z.string().min(2, "Ville / commune requise"),
  message: z.string().min(10, "Message trop court"),
});

type ContactFormData = z.infer<typeof contactSchema>;

function ContactFormPrefill({
  setValue,
}: {
  setValue: (name: "city" | "message", value: string) => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const metier = searchParams.get("metier");
    const zone = searchParams.get("zone");
    const ville = searchParams.get("ville");

    if (metier || zone || ville) {
      if (ville) {
        const cityLabel = ZONE_VILLES_ALL.find((c) => c.id === ville)?.label ?? ville;
        setValue("city", cityLabel);
      }
      const line = `[Métier\u00A0: ${metier ?? "-"} | Zone\u00A0: ${zone ?? "-"} | Ville\u00A0: ${ville ?? "-"}]\n\n`;
      setValue("message", line);
    }
  }, [searchParams, setValue]);

  return null;
}

export function ContactSection() {
  const reduced = useReducedMotion();
  const variants = reduced ? scrollRevealReducedVariants : scrollRevealVariants;
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string>("");

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("idle");
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmitStatus("error");
        setSubmitError(json.error ?? "Une erreur est survenue.");
        return;
      }

      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
      setSubmitError("Une erreur est survenue. Réessayez.");
    }
  };

  return (
    <section id="contact" className="relative section-radial-highlight border-t border-[var(--border)] bg-[var(--bg)] px-4 py-20 sm:px-6 lg:px-10 lg:py-32 overflow-x-hidden">
      <div className="mx-auto max-w-6xl w-full min-w-0 relative z-10">
        <p className="section-eyebrow">Contact</p>
        <motion.h2
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={SCROLL_VIEWPORT}
          className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl section-title-industrial"
        >
          Contact
        </motion.h2>
        <div className="brand-signature-line hidden lg:block mt-4" aria-hidden />
        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={SCROLL_VIEWPORT}
          className="mt-3 text-lg font-medium text-[var(--accent)]"
        >
          Audit rapide pour votre acquisition locale
        </motion.p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)] max-w-xl">
          En 10 minutes, on identifie les gains les plus rapides sur vos appels, vos leads et vos réservations.
        </p>
        <p className="mt-1 text-sm text-[var(--text-2)]">
          Diagnostic stratégique, priorités concrètes, exécution claire.
        </p>
        <p className="mt-4 font-medium text-[var(--text)]">
          Chaque recommandation est pensée pour renforcer votre performance commerciale locale.
        </p>
        <p className="mt-2 text-xs text-[var(--text-2)]">
          Réponse rapide, méthode éprouvée, accompagnement orienté résultats.
        </p>

        <Suspense fallback={null}>
          <ContactFormPrefill setValue={setValue} />
        </Suspense>

        <div className="mt-10 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--text-2)]">
                    Prénom / Nom
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-[var(--text)] placeholder-[var(--text-2)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                    placeholder="Jean Dupont"
                  />
                  {errors.name && <p className="mt-1 text-sm text-[var(--accent)]">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="business" className="mb-1.5 block text-sm font-medium text-[var(--text-2)]">
                    Nom de l’activité
                  </label>
                  <input
                    id="business"
                    {...register("business")}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-[var(--text)] placeholder-[var(--text-2)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                    placeholder="Garage Dupont"
                  />
                  {errors.business && <p className="mt-1 text-sm text-[var(--accent)]">{errors.business.message}</p>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--text-2)]">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-[var(--text)] placeholder-[var(--text-2)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                    placeholder="vous@exemple.be"
                  />
                  {errors.email && <p className="mt-1 text-sm text-[var(--accent)]">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-[var(--text-2)]">
                    Ville / Commune
                  </label>
                  <input
                    id="city"
                    {...register("city")}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-[var(--text)] placeholder-[var(--text-2)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                    placeholder="Mons, Charleroi…"
                  />
                  {errors.city && <p className="mt-1 text-sm text-[var(--accent)]">{errors.city.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--text-2)]">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-[var(--text)] placeholder-[var(--text-2)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                  placeholder="Décrivez votre projet…"
                />
                {errors.message && <p className="mt-1 text-sm text-[var(--accent)]">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={reduced ? undefined : { scale: 1.02 }}
                whileTap={reduced ? undefined : { scale: 0.98 }}
                className="w-full rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[var(--accent-2)] disabled:opacity-60 sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
              >
                {isSubmitting ? "Envoi…" : "Vérifier si ça vaut le coup"}
              </motion.button>

              {submitStatus === "success" && (
                <p className="text-sm text-emerald-400">
                  Message envoyé. Nous vous recontacterons rapidement.
                </p>
              )}
              {submitStatus === "error" && submitError && (
                <p className="text-sm text-red-400">{submitError}</p>
              )}
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-sm">
              <p className="font-heading text-lg font-semibold text-[var(--text)]">Contact rapide</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <motion.a
                  href="https://wa.me/32468367226?text=Bonjour%2C%20je%20souhaite%20parler%20d%27un%20site%20web%20pour%20mon%20garage%20%2F%20service%20de%20depannage."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={reduced ? undefined : { scale: 1.03 }}
                  whileTap={reduced ? undefined : { scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-sm font-medium text-[var(--text)] transition hover:border-[var(--border)] hover:bg-[var(--surface-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </motion.a>
              </div>
              <p className="mt-4 text-sm text-[var(--text-2)]">Réponse sous 24 h.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}