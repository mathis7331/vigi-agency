import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expertise sites web pour garages",
  description:
    "Pourquoi les sites de garages échouent, pourquoi Facebook ne suffit pas, vitesse, WhatsApp et visibilité locale. Hainaut.",
};

export default function ExpertiseGaragePage() {
  return (
    <div className="site-main min-h-screen">
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
          Expertise : sites web pour garages et professionnels de l’auto
        </h1>

        <p className="mt-6 text-[var(--text-2)] leading-relaxed">
          Voici pourquoi beaucoup de sites de garages ne donnent pas de résultats, et ce qui change la donne : un site
          pensé pour les appels, la vitesse et la recherche locale.
        </p>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">
            Pourquoi les sites de garages échouent souvent
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">
            Beaucoup de sites sont conçus comme des catalogues : liste de services, onglets, textes longs. Le client
            cherche un numéro ou un moyen de vous joindre et doit chercher, scroller, ou remplir un formulaire. Sur
            mobile, chaque clic en plus fait perdre des contacts. Les sites qui marchent pour un garage mettent l’appel
            et le contact (WhatsApp, formulaire court) au centre. Pas de menu à tiroirs, pas de page « Qui sommes-nous »
            avant d’arriver au contact. Une page claire avec horaires, services en résumé et bouton d’appel visible
            convertit mieux.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">
            Pourquoi Facebook ne suffit pas
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">
            Une page Facebook peut aider pour la notoriété, mais elle n’est pas faite pour être trouvée quand quelqu’un
            tape « garage Mons » ou « dépannage Charleroi » sur Google. Les algorithmes changent, la visibilité varie.
            Un site dédié est indexé par les moteurs de recherche et peut être optimisé pour les requêtes locales. Il
            reste sous votre contrôle : vous décidez du contenu, des horaires, du numéro affiché. Facebook complète
            le site ; il ne le remplace pas pour capter les gens qui cherchent un garagiste ou un dépanneur à l’instant T.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">
            Pourquoi la vitesse du site compte
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">
            Un site lent sur mobile fait partir le visiteur avant qu’il n’ait le temps d’appeler. Google prend aussi en
            compte la rapidité pour le classement. Un site léger, sans scripts inutiles et sans images lourdes,
            charge en quelques secondes. Le client voit tout de suite vos coordonnées et le bouton d’appel. C’est pour
            ça que nous privilégions des pages simples : moins de contenu superflu, plus de réactivité et une meilleure
            expérience pour celui qui vous cherche en urgence ou entre deux rendez-vous.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">
            Pourquoi WhatsApp compte
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">
            Beaucoup de clients préfèrent écrire avant d’appeler : envoyer une photo de la panne, décrire le problème,
            demander un devis ou un créneau. Un lien WhatsApp avec un message pré-rempli (marque, modèle, type de
            demande) facilite le premier contact. Vous recevez la demande, vous répondez quand vous pouvez. Le site
            doit mettre ce lien en évidence, au même titre que le numéro de téléphone, pour ne pas perdre ceux qui
            n’osent pas appeler directement.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">
            Pourquoi la visibilité locale compte
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-2)]">
            Les automobilistes cherchent « garage à Mons », « dépanneur Charleroi », « carrossier Hainaut ». Un site
            avec des textes et une structure adaptés à ces recherches a plus de chances d’apparaître au bon moment. Ça
            va de pair avec une fiche Google Business à jour (adresse, horaires, numéro). Ensemble, le site et la fiche
            renvoient une image cohérente et rassurante. Nous concevons des pages pour les garages, dépanneurs et
            carrossiers du Hainaut en gardant en tête ces requêtes locales.
          </p>
        </section>

        <section className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="font-heading text-xl font-bold text-[var(--text)]">En savoir plus et nous contacter</h2>
          <p className="mt-3 text-sm text-[var(--text-2)]">
            Vous êtes garage, dépanneur ou carrossier dans le Hainaut ? Découvrez nos démos et nos pages par zone.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--text-2)]">
            <li>
              <Link href="/" className="text-[var(--accent)] hover:underline">
                Accueil — Services et démos
              </Link>
            </li>
            <li>
              <Link href="/creation-site-garage-mons" className="text-[var(--accent)] hover:underline">
                Création site garage à Mons
              </Link>
            </li>
            <li>
              <Link href="/creation-site-depannage-charleroi" className="text-[var(--accent)] hover:underline">
                Création site dépannage à Charleroi
              </Link>
            </li>
            <li>
              <Link href="/creation-site-carrosserie-hainaut" className="text-[var(--accent)] hover:underline">
                Création site carrosserie dans le Hainaut
              </Link>
            </li>
          </ul>
          <p className="mt-6">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[var(--accent-2)]"
            >
              Nous contacter
            </Link>
          </p>
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
