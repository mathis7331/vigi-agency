import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Création site dépannage à Charleroi",
  description:
    "Site web pour dépannage auto à Charleroi et Hainaut : appel 24/7, WhatsApp, zone d'intervention. VIGI AGENCY.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VIGI AGENCY",
  description: "Création de sites web pour dépanneurs et garages dans le Hainaut.",
  url: "https://vigidevis.be",
  areaServed: [
    { "@type": "City", name: "Charleroi", containedInPlace: { "@type": "AdministrativeArea", name: "Hainaut" } },
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
  serviceType: "Création de sites web pour dépannage auto",
  name: "Site web dépannage à Charleroi",
  description: "Création de sites web orientés urgence et prise d'appel pour dépanneurs à Charleroi et dans le Hainaut.",
  provider: { "@type": "LocalBusiness", name: "VIGI AGENCY" },
  areaServed: { "@type": "City", name: "Charleroi", containedInPlace: { "@type": "AdministrativeArea", name: "Hainaut" } },
  url: "https://vigidevis.be/creation-site-depannage-charleroi",
};

export default function CreationSiteDepannageCharleroiPage() {
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
          Création de site web pour dépannage à Charleroi
        </h1>

        <p className="mt-6 text-[var(--text-2)] leading-relaxed">
          Un service de dépannage à Charleroi ou dans le Hainaut doit être joignable en un clic, 24h sur 24. Les
          automobilistes en panne cherchent « dépannage Charleroi », « dépanneur 6000 » ou « remorquage Hainaut » sur
          leur téléphone. Une page Facebook ne suffit pas : elle n’apparaît pas toujours en tête de recherche et ne
          met pas l’appel en avant. VIGI AGENCY conçoit des sites dédiés au dépannage : page urgence, bouton d’appel
          et WhatsApp visibles en permanence, zone d’intervention claire pour limiter les appels hors périmètre. Le
          site charge vite sur mobile et donne toutes les infos utiles avant que le client ne décroche. Pas de
          formulaire compliqué, pas de tunnel. Juste un numéro et un lien direct pour qu’ils vous appellent.
        </p>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">Contexte : dépannage à Charleroi</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">
            Charleroi et les communes alentour concentrent un trafic important. Pannes, accidents, batteries à plat :
            les demandes de dépannage sont fréquentes. Les gens cherchent un dépanneur réactif et une intervention
            rapide. Un site qui affiche clairement votre zone, vos tarifs de base et un bouton d’appel rassure et
            augmente les contacts qualifiés. C’est ce type de page que nous mettons en place pour les dépanneurs du
            Hainaut.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">Ce que vous gagnez</h2>
          <ul className="mt-4 space-y-2 text-sm text-[var(--text-2)]">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              Page urgence accessible à tout moment, avec appel en un tap.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              WhatsApp visible pour ceux qui préfèrent écrire (message pré-rempli possible).
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              Zone d’intervention claire (Charleroi, 6000, communes) pour filtrer les appels hors zone.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              Site rapide sur mobile, adapté à la recherche « dépannage Charleroi ».
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">Voir une démo</h2>
          <p className="mt-3 text-sm text-[var(--text-2)]">
            Nous avons une démo pensée pour un dépanneur : urgence, appel, WhatsApp, zone.
          </p>
          <p className="mt-3">
            <Link href="/demo-depannage" className="text-[var(--accent)] hover:underline">
              Voir la démo dépannage →
            </Link>
          </p>
        </section>

        <section className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">Parler de votre projet</h2>
          <p className="mt-3 text-sm text-[var(--text-2)]">
            On discute de votre zone, de vos besoins en prise d’appel et on voit si un site dédié dépannage vous
            convient.
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

        <section className="mt-12" aria-labelledby="faq-depannage-charleroi">
          <h2 id="faq-depannage-charleroi" className="font-heading text-xl font-bold text-[var(--text)]">
            Questions fréquentes
          </h2>
          <dl className="mt-6 space-y-6">
            <div>
              <dt className="font-medium text-[var(--text)]">Pourquoi un site plutôt qu’une simple page Facebook ?</dt>
              <dd className="mt-1 text-sm text-[var(--text-2)]">
                Facebook ne garantit pas une bonne visibilité quand on cherche « dépannage Charleroi » sur Google. Un
                site dédié est fait pour être trouvé via la recherche et pour mettre l’appel (et le WhatsApp) en
                avant, sans dépendre des algorithmes d’un réseau social.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">Comment indiquer ma zone d’intervention ?</dt>
              <dd className="mt-1 text-sm text-[var(--text-2)]">
                On intègre sur le site une section claire : communes ou codes postaux couverts (Charleroi, 6000, etc.).
                Cela limite les appels hors zone et rassure le client sur votre capacité à intervenir chez lui.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">Le site peut-il afficher des infos 24h/24 ?</dt>
              <dd className="mt-1 text-sm text-[var(--text-2)]">
                Oui. La page reste en ligne en permanence avec votre numéro et, si vous le souhaitez, un lien WhatsApp.
                Le client peut vous joindre même la nuit ; vous gérez ensuite la réponse selon votre disponibilité.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">Combien de temps pour être en ligne ?</dt>
              <dd className="mt-1 text-sm text-[var(--text-2)]">
                Une fois les informations fournies (zone, tarifs de base, coordonnées), le déploiement se fait en
                quelques jours. L’objectif est d’avoir une page opérationnelle rapidement.
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
