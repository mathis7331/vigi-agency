import Link from "next/link";
import { getPillarBySlug, getPillarLabel } from "@/lib/pillar-pages-data";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const BASE_URL = "https://www.vigi-agency.be";

interface PillarPageTemplateProps {
    slug: string;
}

export function PillarPageTemplate({ slug }: PillarPageTemplateProps) {
    const pillar = getPillarBySlug(slug);
    if (!pillar) return null;

    const breadcrumbItems = [
        { name: "Accueil", url: BASE_URL },
        { name: pillar.h1, url: `${BASE_URL}/${pillar.slug}` },
    ];

    return (
        <div className="site-main min-h-screen">
            {/* Structured Data */}
            <FaqSchema faq={pillar.faq} />
            <BreadcrumbSchema items={breadcrumbItems} />

            {/* Header */}
            <header className="border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_90%,transparent)] backdrop-blur-xl">
                <div className="mx-auto flex h-14 max-w-6xl w-full min-w-0 items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-10">
                    <Link href="/" className="font-heading text-lg font-semibold tracking-tight text-[var(--text)]">
                        VIGI AGENCY
                    </Link>
                    <Link
                        href="/#contact"
                        className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-black transition hover:bg-[var(--accent-2)]"
                    >
                        Contact
                    </Link>
                </div>
            </header>

            {/* Breadcrumb Nav */}
            <nav className="mx-auto max-w-3xl w-full px-4 pt-6 sm:px-6 lg:px-10" aria-label="Fil d'Ariane">
                <ol className="flex items-center gap-2 text-xs text-[var(--text-2)]">
                    <li>
                        <Link href="/" className="hover:text-[var(--accent)] transition-colors">Accueil</Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li className="text-[var(--text)] font-medium truncate">{pillar.h1}</li>
                </ol>
            </nav>

            {/* Main Content */}
            <main className="mx-auto max-w-3xl w-full min-w-0 px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
                <h1 className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                    {pillar.h1}
                </h1>

                {/* Content Sections */}
                {pillar.sections.map((section, idx) => (
                    <section key={idx} className="mt-10 sm:mt-14">
                        <h2 className="font-heading text-xl font-bold text-[var(--text)] sm:text-2xl">
                            {section.h2}
                        </h2>

                        {section.h3s && section.h3s.length > 0 && (
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {section.h3s.map((h3) => (
                                    <li key={h3} className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--text-2)]">
                                        {h3}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <div className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--text-2)] sm:text-base sm:leading-relaxed">
                            {section.content.split("\n\n").map((p, pIdx) => {
                                // Handle bold **text** inline
                                const parts = p.split(/(\*\*[^*]+\*\*)/g);
                                return (
                                    <p key={pIdx}>
                                        {parts.map((part, partIdx) => {
                                            if (part.startsWith("**") && part.endsWith("**")) {
                                                return (
                                                    <strong key={partIdx} className="font-semibold text-[var(--text)]">
                                                        {part.slice(2, -2)}
                                                    </strong>
                                                );
                                            }
                                            return <span key={partIdx}>{part}</span>;
                                        })}
                                    </p>
                                );
                            })}
                        </div>

                        {/* CTA after second section */}
                        {idx === 1 && (
                            <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                                <p className="text-sm font-medium text-[var(--text)]">
                                    Prêt à rendre votre activité visible en ligne ?
                                </p>
                                <p className="mt-1 text-xs text-[var(--text-2)]">
                                    Discutons de votre projet — devis gratuit et sans engagement.
                                </p>
                                <Link
                                    href="/#contact"
                                    className="mt-4 inline-flex items-center rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[var(--accent-2)]"
                                >
                                    Demander un devis
                                </Link>
                            </div>
                        )}
                    </section>
                ))}

                {/* FAQ Section */}
                <section className="mt-14 sm:mt-20">
                    <h2 className="font-heading text-xl font-bold text-[var(--text)] sm:text-2xl">
                        Questions fréquentes
                    </h2>
                    <div className="mt-6 space-y-4">
                        {pillar.faq.map((item, idx) => (
                            <details key={idx} className="group rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors [&::-webkit-details-marker]:hidden">
                                    <span>{item.q}</span>
                                    <svg className="h-4 w-4 shrink-0 text-[var(--text-2)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="px-5 pb-4 text-sm leading-relaxed text-[var(--text-2)]">
                                    {item.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="mt-14 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 text-center">
                    <h2 className="font-heading text-xl font-bold text-[var(--text)]">
                        Lancez votre projet maintenant
                    </h2>
                    <p className="mt-2 text-sm text-[var(--text-2)]">
                        Déploiement en 5 jours. SEO local inclus. Sans engagement.
                    </p>
                    <Link
                        href="/#contact"
                        className="mt-6 inline-flex items-center rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[var(--accent-2)]"
                    >
                        Discuter de votre projet
                    </Link>
                </section>

                {/* Internal Links — "Voir aussi" */}
                <nav className="mt-14 border-t border-[var(--border)] pt-8" aria-label="Pages associées">
                    <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-2)] mb-3">Voir aussi</p>
                    <ul className="space-y-2">
                        {pillar.relatedPillars.map((relSlug) => (
                            <li key={relSlug}>
                                <Link href={`/${relSlug}`} className="text-sm text-[var(--accent)] hover:underline">
                                    {getPillarLabel(relSlug)}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/" className="text-sm text-[var(--accent)] hover:underline">
                                ← Accueil VIGI AGENCY
                            </Link>
                        </li>
                    </ul>
                </nav>
            </main>
        </div>
    );
}
