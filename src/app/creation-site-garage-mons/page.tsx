import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Création site web garage à Mons",
  description:
    "Site web pour garages à Mons et environs : appel 1 clic, WhatsApp, horaires, déploiement rapide. VIGI AGENCY, Hainaut.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VIGI AGENCY",
  description: "Création de sites web pour garages et professionnels de l'automobile dans le Hainaut.",
  url: "https://vigidevis.be",
  areaServed: [
    { "@type": "City", name: "Mons", containedInPlace: { "@type": "AdministrativeArea", name: "Hainaut" } },
    { "@type": "AdministrativeArea", name: "Hainaut" },
    { "@type": "Country", name: "Belgium" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Hainaut",
    addressCountry: "BE",
  },
};

const webDesignServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Création de sites web pour garages",
  name: "Site web garage à Mons",
  description: "Création de sites web orientés appels et prise de contact pour garages à Mons et dans le Hainaut.",
  provider: { "@type": "LocalBusiness", name: "VIGI AGENCY" },
  areaServed: { "@type": "City", name: "Mons", containedInPlace: { "@type": "AdministrativeArea", name: "Hainaut" } },
  url: "https://vigidevis.be/creation-site-garage-mons",
};

export default function CreationSiteGarageMonsPage() {
  return (
    <div className="site-main min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDesignServiceSchema) }}
      />

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

      <main className="mx-auto max-w-3xl w-full min-w-0 px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20 overflow-x-hidden">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
          Création de site web pour garage à Mons
        </h1>

        <p className="mt-6 text-[var(--text-2)] leading-relaxed">
          Un garage à Mons ou dans les environs a besoin d’une présence en ligne claire : horaires, services, et surtout
          un moyen de contact immédiat. Les clients cherchent « garage Mons » ou « réparation auto 7000 » sur leur
          téléphone. Sans site adapté, vous restez invisible au moment où ils décident d’appeler. VIGI AGENCY conçoit
          des sites pensés pour les garages du Hainaut : page qui charge vite, bouton d’appel visible, lien WhatsApp
          avec message pré-rempli, et mise en avant de vos prestations. Pas de catalogue à gérer, pas de blog à tenir.
          Un site simple qui fait sonner le téléphone et qui renvoie vers votre atelier. Déploiement rapide, sans
          usine à gaz.
        </p>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">Pourquoi un site pour votre garage à Mons</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">
            À Mons et en borinage, les automobilistes cherchent un garagiste de confiance à proximité. Un site bien
            structuré vous fait apparaître sur Google quand ils tapent « garage Mons », « révision auto 7000 » ou
            « garagiste Hyon ». Vous montrez vos services, vos horaires et vous donnez un accès direct à l’appel ou
            au WhatsApp. C’est ce que nous mettons en place : une vitrine qui convertit la recherche en contact.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">Ce que vous gagnez</h2>
          <ul className="mt-4 space-y-2 text-sm text-[var(--text-2)]">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              Appel en un clic depuis le mobile pour vos clients.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              WhatsApp intégré avec message pré-rempli (marque, modèle, demande).
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              Mise en avant de vos horaires et de votre zone (Mons et environs).
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              Site rapide et lisible sur téléphone, adapté à la recherche locale.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">Voir une démo</h2>
          <p className="mt-3 text-sm text-[var(--text-2)]">
            Nous avons une démo pensée pour un garage classique : fiche atelier, services, bouton d’appel, horaires.
          </p>
          <p className="mt-3">
            <Link href="/demo-garage" className="text-[var(--accent)] hover:underline">
              Voir la démo garage →
            </Link>
          </p>
        </section>

        <section className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">Parler de votre projet</h2>
          <p className="mt-3 text-sm text-[var(--text-2)]">
            Quelques minutes suffisent pour voir si un site adapté à Mons peut vous aider à capter plus d’appels.
          </p>
          <p className="mt-4">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[var(--accent-2)]"
            >
              Discuter de mon projet
            </Link>
          </p>
        </section>

        <section className="mt-12" aria-labelledby="faq-garage-mons">
          <h2 id="faq-garage-mons" className="font-heading text-xl font-bold text-[var(--text)]">
            Questions fréquentes
          </h2>
          <dl className="mt-6 space-y-6">
            <div>
              <dt className="font-medium text-[var(--text)]">Combien de temps pour mettre le site en ligne ?</dt>
              <dd className="mt-1 text-sm text-[var(--text-2)]">
                Une fois les informations et visuels fournis, le déploiement se fait en quelques jours. L’objectif est
                d’avoir un site opérationnel rapidement, sans délai inutile.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">Faut-il gérer le site soi-même au quotidien ?</dt>
              <dd className="mt-1 text-sm text-[var(--text-2)]">
                Non. Le site affiche vos horaires, services et moyens de contact. Pas de blog ni de catalogue à mettre
                à jour en permanence. Vous gérez les véhicules, le site fait le reste.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">Le site apparaît-il sur Google pour « garage Mons » ?</dt>
              <dd className="mt-1 text-sm text-[var(--text-2)]">
                Le site est conçu pour être indexé et lisible par les moteurs de recherche. Les textes et la structure
                sont pensés pour des recherches locales (Mons, 7000, Hainaut). La fiche Google Business reste
                complémentaire et importante.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">Que se passe-t-il si je n’ai pas de photos professionnelles ?</dt>
              <dd className="mt-1 text-sm text-[var(--text-2)]">
                On part de ce que vous avez : photos de l’atelier, des véhicules en réparation ou de vos équipements.
                L’essentiel est d’avoir une page claire avec vos coordonnées et un appel à l’action visible.
              </dd>
            </div>
          </dl>
        </section>

        <p className="mt-12 text-center text-sm text-[var(--text-2)]">
          <Link href="/" className="text-[var(--accent)] hover:underline">
            ← Retour à l’accueil
          </Link>
        </p>
      </main>
    </div>
  );
}
