import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Création site carrosserie Hainaut",
  description:
    "Site web pour carrossiers dans le Hainaut : devis, avant/après, prise de rendez-vous. VIGI AGENCY, Belgique.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VIGI AGENCY",
  description: "Création de sites web pour carrossiers et professionnels de l'automobile dans le Hainaut.",
  url: "https://vigidevis.be",
  areaServed: [
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
  serviceType: "Création de sites web pour carrosserie",
  name: "Site web carrosserie dans le Hainaut",
  description: "Création de sites web orientés devis et rendez-vous pour carrossiers et pare-brise dans le Hainaut.",
  provider: { "@type": "LocalBusiness", name: "VIGI AGENCY" },
  areaServed: { "@type": "AdministrativeArea", name: "Hainaut" },
  url: "https://vigidevis.be/creation-site-carrosserie-hainaut",
};

export default function CreationSiteCarrosserieHainautPage() {
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
          Création de site web pour carrosserie dans le Hainaut
        </h1>

        <p className="mt-6 text-[var(--text-2)] leading-relaxed">
          Un carrossier ou un spécialiste pare-brise dans le Hainaut a besoin d’une vitrine qui montre la qualité du
          travail et qui facilite la demande de devis ou la prise de rendez-vous. Les clients cherchent « carrosserie
          Hainaut », « pare-brise Mons » ou « débosselage Charleroi ». Un site bien structuré vous fait apparaître
          au bon moment et rassure : avant/après, services, moyen de contact direct. VIGI AGENCY conçoit des sites
          pour carrossiers et pare-brise : page claire, mise en avant du travail (slider avant/après si vous avez les
          photos), bouton ou lien pour demander un devis ou prendre rendez-vous. Pas de catalogue complexe. Un site
          qui présente votre savoir-faire et qui génère des demandes qualifiées. Déploiement rapide, adapté à la
          recherche locale.
        </p>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">Contexte : carrosserie dans le Hainaut</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">
            Le Hainaut compte de nombreux carrossiers et spécialistes vitrage. Pour vous démarquer, il faut être
            visible quand on vous cherche et donner envie de vous contacter. Un site avec des réalisations
            (avant/après), vos services et un appel à l’action clair (devis, rendez-vous) augmente les demandes
            entrantes. On met en place une structure simple : présentation, preuves visuelles, contact et prise de
            rendez-vous ou formulaire devis selon votre préférence.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">Ce que vous gagnez</h2>
          <ul className="mt-4 space-y-2 text-sm text-[var(--text-2)]">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              Mise en avant de vos réalisations (avant/après) pour rassurer avant le premier contact.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              Demande de devis ou prise de rendez-vous simple, sans formulaire à rallonge.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              Appel et WhatsApp visibles pour ceux qui préfèrent vous joindre directement.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              Site rapide et lisible sur mobile, adapté aux recherches « carrosserie Hainaut », « pare-brise ».
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">Voir une démo</h2>
          <p className="mt-3 text-sm text-[var(--text-2)]">
            Nous avons une démo pensée pour la carrosserie : avant/après, devis, rendez-vous.
          </p>
          <p className="mt-3">
            <Link href="/demo-carrosserie" className="text-[var(--accent)] hover:underline">
              Voir la démo carrosserie →
            </Link>
          </p>
        </section>

        <section className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">Parler de votre projet</h2>
          <p className="mt-3 text-sm text-[var(--text-2)]">
            On regarde ensemble ce dont vous avez besoin : vitrine, devis, rendez-vous, et on adapte la structure du
            site.
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

        <section className="mt-12" aria-labelledby="faq-carrosserie-hainaut">
          <h2 id="faq-carrosserie-hainaut" className="font-heading text-xl font-bold text-[var(--text)]">
            Questions fréquentes
          </h2>
          <dl className="mt-6 space-y-6">
            <div>
              <dt className="font-medium text-[var(--text)]">Peut-on intégrer un slider avant/après ?</dt>
              <dd className="mt-1 text-sm text-[var(--text-2)]">
                Oui. Si vous avez des photos de vos réalisations, on les met en avant avec un comparatif avant/après.
                C’est un atout pour rassurer le client avant qu’il ne vous contacte.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">Devis par formulaire ou par téléphone ?</dt>
              <dd className="mt-1 text-sm text-[var(--text-2)]">
                On peut prévoir un formulaire court (marque, modèle, type de prestation) qui vous envoie la demande
                par email, ou simplement mettre en avant l’appel et le WhatsApp. On adapte selon votre façon de
                travailler.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">Le site peut-il aider pour « pare-brise Hainaut » ?</dt>
              <dd className="mt-1 text-sm text-[var(--text-2)]">
                Oui. La structure et les textes sont pensés pour des recherches locales (carrosserie, pare-brise,
                débosselage, Hainaut). On met en avant vos services et votre zone pour que le site soit trouvé quand
                on vous cherche.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--text)]">Combien de temps pour être en ligne ?</dt>
              <dd className="mt-1 text-sm text-[var(--text-2)]">
                Une fois les contenus et visuels fournis, le déploiement se fait en quelques jours. L’objectif est
                d’avoir un site opérationnel sans traîner.
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
