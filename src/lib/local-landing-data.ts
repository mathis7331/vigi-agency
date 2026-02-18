/**
 * Data model for local landing page generator.
 * Single source of truth for métiers, zones, cities and generated copy.
 */

export type MetierId = "garage" | "depannage" | "carrosserie" | "detailing";
export type ZoneId = "hainaut" | "wallonie" | "bruxelles" | "flandre" | "belgique";

export interface MetierConfig {
  id: MetierId;
  label: string;
  slug: string;
  keywords: string[];
  benefits: string[];
  demoLink: string | null;
  faq: { q: string; a: string }[];
}

export interface ZoneConfig {
  id: ZoneId;
  label: string;
}

export interface CityConfig {
  id: string;
  slug: string;
  label: string;
}

export const METIERS: MetierConfig[] = [
  {
    id: "garage",
    label: "Garage / Atelier",
    slug: "garage",
    keywords: ["garage", "réparation auto", "atelier", "révision"],
    benefits: [
      "Appel en un clic depuis le mobile pour vos clients.",
      "WhatsApp intégré avec message pré-rempli (marque, modèle, demande).",
      "Mise en avant de vos horaires et de votre zone.",
      "Site rapide et lisible sur téléphone, adapté à la recherche locale.",
    ],
    demoLink: "/demo-garage",
    faq: [
      {
        q: "Combien de temps pour mettre le site en ligne ?",
        a: "Une fois les informations et visuels fournis, le déploiement se fait en quelques jours. L’objectif est d’avoir un site opérationnel rapidement.",
      },
      {
        q: "Faut-il gérer le site soi-même au quotidien ?",
        a: "Non. Le site affiche vos horaires, services et moyens de contact. Pas de blog ni de catalogue à mettre à jour en permanence.",
      },
      {
        q: "Le site apparaît-il sur Google pour les recherches locales ?",
        a: "Le site est conçu pour être indexé. Les textes et la structure sont pensés pour des recherches locales. La fiche Google Business reste complémentaire.",
      },
    ],
  },
  {
    id: "depannage",
    label: "Dépannage urgence",
    slug: "depannage",
    keywords: ["dépannage", "remorquage", "urgence", "24h"],
    benefits: [
      "Page urgence accessible à tout moment, avec appel en un tap.",
      "WhatsApp visible pour ceux qui préfèrent écrire (message pré-rempli possible).",
      "Zone d’intervention claire pour filtrer les appels hors zone.",
      "Site rapide sur mobile, adapté à la recherche de dépannage.",
    ],
    demoLink: "/demo-depannage",
    faq: [
      {
        q: "Pourquoi un site plutôt qu’une simple page Facebook ?",
        a: "Facebook ne garantit pas une bonne visibilité quand on cherche un dépanneur sur Google. Un site dédié est fait pour être trouvé et pour mettre l’appel en avant.",
      },
      {
        q: "Comment indiquer ma zone d’intervention ?",
        a: "On intègre une section claire : communes ou codes postaux couverts. Cela limite les appels hors zone et rassure le client.",
      },
      {
        q: "Le site peut-il afficher des infos 24h/24 ?",
        a: "Oui. La page reste en ligne en permanence avec votre numéro et, si vous le souhaitez, un lien WhatsApp.",
      },
    ],
  },
  {
    id: "carrosserie",
    label: "Carrosserie / Pare-brise",
    slug: "carrosserie",
    keywords: ["carrosserie", "pare-brise", "débosselage", "réparation carrosserie"],
    benefits: [
      "Mise en avant de vos réalisations (avant/après) pour rassurer avant le premier contact.",
      "Demande de devis ou prise de rendez-vous simple, sans formulaire à rallonge.",
      "Appel et WhatsApp visibles pour ceux qui préfèrent vous joindre directement.",
      "Site rapide et lisible sur mobile, adapté aux recherches carrosserie et pare-brise.",
    ],
    demoLink: "/demo-carrosserie",
    faq: [
      {
        q: "Peut-on intégrer un slider avant/après ?",
        a: "Oui. Si vous avez des photos de vos réalisations, on les met en avant avec un comparatif avant/après.",
      },
      {
        q: "Devis par formulaire ou par téléphone ?",
        a: "On peut prévoir un formulaire court qui vous envoie la demande par email, ou simplement mettre en avant l’appel et le WhatsApp. On adapte selon votre façon de travailler.",
      },
      {
        q: "Combien de temps pour être en ligne ?",
        a: "Une fois les contenus et visuels fournis, le déploiement se fait en quelques jours.",
      },
    ],
  },
  {
    id: "detailing",
    label: "Detailing / Lavage auto",
    slug: "detailing",
    keywords: ["detailing", "lavage auto", "céramique", "polissage"],
    benefits: [
      "Vitrine visuelle orientée avant/après pour mettre en valeur votre travail.",
      "Prise de rendez-vous fluide et visible sur mobile.",
      "Mise en avant des prestations (protection céramique, polissage, etc.).",
      "Site rapide et soigné, adapté à une clientèle exigeante.",
    ],
    demoLink: "/demo-detailing",
    faq: [
      {
        q: "Comment montrer mes réalisations ?",
        a: "On intègre une galerie ou un slider avant/après pour mettre en valeur la qualité de votre travail.",
      },
      {
        q: "Le site peut-il gérer les prises de rendez-vous ?",
        a: "Oui. On peut prévoir un bouton ou un lien vers une solution de rendez-vous, ou un formulaire simple qui vous envoie la demande.",
      },
      {
        q: "Combien de temps pour être en ligne ?",
        a: "Une fois les photos et textes fournis, le déploiement se fait en quelques jours.",
      },
    ],
  },
];

export const ZONES: ZoneConfig[] = [
  { id: "hainaut", label: "Hainaut" },
  { id: "wallonie", label: "Wallonie" },
  { id: "bruxelles", label: "Bruxelles" },
  { id: "flandre", label: "Flandre" },
  { id: "belgique", label: "Toute la Belgique" },
];

export const CITIES: CityConfig[] = [
  { id: "Mons", slug: "mons", label: "Mons" },
  { id: "Charleroi", slug: "charleroi", label: "Charleroi" },
  { id: "Bruxelles", slug: "bruxelles", label: "Bruxelles" },
  { id: "Anvers", slug: "anvers", label: "Anvers" },
  { id: "Gand", slug: "gand", label: "Gand" },
  { id: "Liege", slug: "liege", label: "Liège" },
  { id: "Namur", slug: "namur", label: "Namur" },
  { id: "Louvain", slug: "louvain", label: "Louvain" },
  { id: "Bruges", slug: "bruges", label: "Bruges" },
];

export function getMetierById(id: string): MetierConfig | undefined {
  return METIERS.find((m) => m.id === id);
}

export function getMetierBySlug(slug: string): MetierConfig | undefined {
  return METIERS.find((m) => m.slug === slug);
}

export function getZoneById(id: string): ZoneConfig | undefined {
  return ZONES.find((z) => z.id === id);
}

export function getCityById(id: string): CityConfig | undefined {
  return CITIES.find((c) => c.id === id);
}

export function getCityBySlug(slug: string): CityConfig | undefined {
  return CITIES.find((c) => c.slug === slug.toLowerCase());
}

const ORDER_BY_ZONE: Record<string, string[]> = {
  hainaut: ["Mons", "Charleroi", "Bruxelles", "Anvers", "Gand", "Liege", "Namur", "Louvain", "Bruges"],
  wallonie: ["Liege", "Namur", "Charleroi", "Mons", "Louvain", "Bruxelles", "Anvers", "Gand", "Bruges"],
  bruxelles: ["Bruxelles", "Louvain", "Anvers", "Gand", "Charleroi", "Liege", "Namur", "Bruges", "Mons"],
  flandre: ["Anvers", "Gand", "Louvain", "Bruges", "Bruxelles", "Charleroi", "Liege", "Namur", "Mons"],
  belgique: ["Bruxelles", "Anvers", "Gand", "Charleroi", "Liege", "Namur", "Louvain", "Bruges", "Mons"],
};

export function getCitiesOrderedByZone(zoneId: string): CityConfig[] {
  const order = ORDER_BY_ZONE[zoneId];
  if (!order) return CITIES;
  const byId = new Map(CITIES.map((c) => [c.id, c]));
  const seen = new Set<string>();
  const out: CityConfig[] = [];
  for (const id of order) {
    const c = byId.get(id);
    if (c && !seen.has(c.id)) {
      seen.add(c.id);
      out.push(c);
    }
  }
  for (const c of CITIES) if (!seen.has(c.id)) out.push(c);
  return out;
}

/** Intro paragraph: 150–220 words, adapts to métier + zone + city. */
export function getIntro(metier: MetierConfig, zone: ZoneConfig, city: CityConfig | null): string {
  const loc = city ? `à ${city.label}` : `dans ${zone.label}`;
  const base = `Un ${metier.label.toLowerCase()} ${loc} a besoin d’une présence en ligne claire : horaires, services, et surtout un moyen de contact immédiat. Les clients cherchent un professionnel de confiance sur leur téléphone. Sans site adapté, vous restez invisible au moment où ils décident d’appeler. VIGI AGENCY conçoit des sites pensés pour les professionnels de l’auto : page qui charge vite, bouton d’appel visible, lien WhatsApp avec message pré-rempli, et mise en avant de vos prestations. Pas de catalogue à gérer, pas de blog à tenir. Un site simple qui fait sonner le téléphone et qui renvoie vers votre activité. Déploiement rapide, sans usine à gaz.`;
  return base;
}

/** Contexte local: 80–140 words. */
export function getContexte(metier: MetierConfig, zone: ZoneConfig, city: CityConfig | null): string {
  const loc = city ? `${city.label} et environs` : zone.label;
  return `Dans ${loc}, les automobilistes cherchent un professionnel de confiance à proximité. Un site bien structuré vous fait apparaître quand ils vous cherchent. Vous montrez vos services, vos horaires et vous donnez un accès direct à l’appel ou au WhatsApp. C’est ce que nous mettons en place : une vitrine qui convertit la recherche en contact, sans fioritures.`;
}

/** Build contact URL with query params. */
export function getContactHref(metier: string, zone: string, ville: string): string {
  return `/?metier=${encodeURIComponent(metier)}&zone=${encodeURIComponent(zone)}&ville=${encodeURIComponent(ville)}#contact`;
}

/** Meta description (max 155 chars) for dynamic pages. */
export function getMetaDescription(metierLabel: string, cityLabel: string): string {
  return `Site web pour ${metierLabel.toLowerCase()} à ${cityLabel} : appel 1 clic, WhatsApp, horaires. VIGI AGENCY, déploiement rapide.`;
}
