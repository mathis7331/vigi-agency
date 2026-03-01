/**
 * Pillar pages content data — single source of truth for SEO pillar pages.
 * Each pillar targets a specific automotive trade + Belgium.
 */

export interface PillarFaq {
    q: string;
    a: string;
}

export interface PillarSection {
    h2: string;
    h3s?: string[];
    content: string;
}

export interface PillarPage {
    slug: string;
    metier: string;
    h1: string;
    metaTitle: string;
    metaDescription: string;
    ogTitle: string;
    sections: PillarSection[];
    faq: PillarFaq[];
    relatedPillars: string[];
}

export const PILLAR_PAGES: PillarPage[] = [
    {
        slug: "site-web-garage-belgique",
        metier: "garage",
        h1: "Création de site web pour garage en Belgique",
        metaTitle: "Création de site web pour garage en Belgique — VIGI AGENCY",
        metaDescription: "Site web professionnel pour garage automobile en Belgique. Appel en 1 clic, WhatsApp intégré, SEO local et déploiement rapide. Spécialiste auto.",
        ogTitle: "Site web garage Belgique — VIGI AGENCY",
        sections: [
            {
                h2: "Pourquoi un garage a besoin d'un site optimisé localement",
                content: `En Belgique, plus de 80 % des automobilistes passent par Google avant de choisir un garage. Que ce soit pour une révision, un changement de pneus ou une réparation urgente, la première action est une recherche locale : « garage Mons », « réparation auto Charleroi », « entretien voiture Liège ». Si votre garage n'apparaît pas dans ces résultats, vous laissez vos concurrents capter ces clients.

Un site web optimisé pour la recherche locale ne se contente pas d'exister. Il est construit pour répondre aux intentions de recherche précises de votre zone : nom de ville, type de prestation, horaires d'ouverture. Chaque élément — du titre de la page à la structure des contenus — est pensé pour que Google comprenne clairement que vous êtes LE garage de référence dans votre commune.

En Wallonie comme à Bruxelles, la concurrence entre garages indépendants et concessionnaires se joue désormais en ligne. Avoir une page Facebook ne suffit plus. Un site dédié vous donne le contrôle total sur votre image, vos horaires, vos prestations et vos moyens de contact. C'est votre vitrine permanente, accessible 24h/24, même quand votre atelier est fermé.`
            },
            {
                h2: "Les éléments indispensables d'un site performant pour garage",
                h3s: ["Appel en un clic", "WhatsApp structuré", "SEO Google Maps", "Page urgence"],
                content: `Un site de garage performant n'est pas un catalogue de services. C'est un outil de conversion conçu pour transformer chaque visiteur en appel ou en prise de rendez-vous.

**Appel en un clic** — Sur mobile, le client doit pouvoir vous appeler sans chercher votre numéro. Un bouton d'appel fixe, visible en permanence, est la fonctionnalité la plus importante. Chaque seconde de friction en moins augmente vos chances de contact.

**WhatsApp structuré** — De plus en plus de clients préfèrent envoyer un message plutôt qu'appeler. Un lien WhatsApp avec un message pré-rempli (marque, modèle, type de demande) vous envoie des leads qualifiés sans effort supplémentaire de votre part. Vous répondez quand vous êtes disponible.

**SEO Google Maps** — Votre fiche Google Business et votre site doivent travailler ensemble. Un site correctement structuré renforce votre positionnement sur Google Maps. Les informations doivent correspondre exactement : nom, adresse, numéro de téléphone, horaires. Cette cohérence (NAP consistency) est un facteur de classement majeur.

**Page urgence** — Un automobiliste en panne ne va pas lire trois paragraphes. Il a besoin d'un bouton d'appel visible immédiatement. Une page urgence dédiée, rapide à charger et dépouillée de tout contenu superflu, capte les demandes les plus pressantes — celles qui se transforment le plus facilement en intervention réelle.`
            },
            {
                h2: "Exemple concret pour un garage en Wallonie",
                content: `Prenons un garage indépendant situé à Mons. Avant d'avoir un site optimisé, ses clients venaient par le bouche-à-oreille et quelques avis Facebook. En créant un site avec une structure SEO locale ciblant « garage Mons », « réparation auto Mons » et « entretien voiture Hainaut », le garage commence à apparaître dans les résultats Google pour ces requêtes.

Le site intègre un bouton d'appel en un clic, un lien WhatsApp pré-rempli, les horaires à jour et une section urgences. En quelques semaines, le garage reçoit des appels de clients qui ne l'auraient jamais trouvé autrement — des automobilistes de passage, des habitants récemment installés, des personnes en panne dans le quartier.

Ce n'est pas de la magie. C'est de la visibilité structurée : être présent là où le client cherche, au moment où il cherche. En Wallonie, la demande existe. Il suffit d'y répondre avec les bons outils.`
            },
            {
                h2: "Nos tarifs et délais",
                content: `Chez VIGI AGENCY, nous travaillons avec des tarifs clairs et sans surprise. Le déploiement d'un site pour garage se fait en 5 jours ouvrés une fois les contenus fournis (photos, horaires, services). Pas d'abonnement caché, pas de frais de maintenance excessifs.

Chaque site est livré avec le SEO local intégré, les boutons d'appel et WhatsApp configurés, et une structure prête pour évoluer. Vous recevez un site opérationnel, pas un projet à terminer vous-même. Contactez-nous pour un devis adapté à votre situation.`
            },
        ],
        faq: [
            { q: "Combien coûte un site web pour garage en Belgique ?", a: "Le tarif dépend de vos besoins spécifiques. Nous proposons des formules adaptées aux garages indépendants, avec un déploiement rapide et un SEO local intégré. Contactez-nous pour un devis personnalisé." },
            { q: "En combien de temps mon site sera-t-il en ligne ?", a: "Une fois les contenus et visuels fournis, le déploiement se fait en 5 jours ouvrés. Vous avez un site opérationnel rapidement, sans traîner pendant des mois." },
            { q: "Le site apparaîtra-t-il sur Google Maps ?", a: "Le site est conçu pour renforcer votre présence sur Google Maps. Combiné à une fiche Google Business correctement remplie, il améliore significativement votre visibilité locale." },
            { q: "Faut-il gérer le site soi-même ?", a: "Non. Le site est autonome : horaires, services, contact. Pas de blog à tenir ni de catalogue à mettre à jour. Si vous avez besoin d'une modification, nous nous en chargeons." },
            { q: "Pourquoi ne pas utiliser juste Facebook ?", a: "Facebook ne vous garantit pas d'apparaître quand quelqu'un cherche « garage + votre ville » sur Google. Un site dédié est indexé par les moteurs de recherche et vous donne le contrôle total sur votre image." },
        ],
        relatedPillars: ["site-web-depanneur-belgique", "site-web-carrosserie-belgique"],
    },
    {
        slug: "site-web-depanneur-belgique",
        metier: "depannage",
        h1: "Création de site web pour dépanneur en Belgique",
        metaTitle: "Création site web dépanneur Belgique — VIGI AGENCY",
        metaDescription: "Site internet professionnel pour dépanneur automobile en Belgique. Page urgence, appel immédiat, zone d'intervention claire. Déploiement rapide.",
        ogTitle: "Site web dépanneur Belgique — VIGI AGENCY",
        sections: [
            {
                h2: "Pourquoi un dépanneur a besoin d'un site optimisé localement",
                content: `Le dépannage automobile est le métier où la visibilité en ligne est la plus critique. Quand un automobiliste est en panne sur le bord de la route à Charleroi ou sur l'autoroute en Wallonie, il prend son téléphone et cherche « dépanneur » ou « remorquage » suivi de sa localisation. Si vous n'apparaissez pas dans les 3 premiers résultats, il appelle un concurrent.

Contrairement à un garage classique, le dépanneur n'a pas le luxe du temps. Le client est en urgence, stressé, et prend sa décision en moins de 30 secondes. Votre site doit se charger instantanément, afficher votre numéro immédiatement et indiquer clairement votre zone d'intervention.

En Belgique, et notamment en Wallonie, le marché du dépannage reste fragmenté. Beaucoup de dépanneurs n'ont pas de site ou ont un site lent et mal optimisé. C'est une opportunité : un site rapide, clair et bien positionné capte les appels que vos concurrents laissent passer. La demande est là — il faut juste être visible au bon moment.`
            },
            {
                h2: "Les éléments indispensables d'un site performant pour dépanneur",
                h3s: ["Appel en un clic", "WhatsApp structuré", "SEO Google Maps", "Page urgence"],
                content: `**Appel en un clic** — C'est LA fonctionnalité numéro un. L'automobiliste en panne doit pouvoir vous appeler en une seule action. Le bouton d'appel doit être visible immédiatement, sans scroll, en gros et contrasté. Sur mobile, c'est un lien tel: qui déclenche l'appel instantanément.

**WhatsApp structuré** — Certains clients préfèrent envoyer une photo de la situation (accident, panne, localisation). Un lien WhatsApp avec message pré-rempli permet de recevoir ces demandes de manière structurée : type de véhicule, localisation, nature du problème.

**SEO Google Maps** — Pour le dépannage, Google Maps est crucial. Quand quelqu'un cherche « dépanneur près de moi », Google affiche les résultats locaux en premier. Votre site doit être parfaitement synchronisé avec votre fiche Google Business pour apparaître dans ce pack local.

**Page urgence** — Une page dédiée aux urgences, ultra-rapide à charger, avec uniquement votre numéro et votre zone d'intervention. Pas de menus complexes, pas de textes longs. Un fond contrasté, un bouton d'appel, c'est tout. Cette page seule peut générer la majorité de vos appels entrants.`
            },
            {
                h2: "Exemple concret pour un dépanneur en Wallonie",
                content: `Un dépanneur basé à Charleroi couvrant le Hainaut reçoit principalement ses appels via l'annuaire et le bouche-à-oreille. Sans site web, il est invisible pour tous les automobilistes qui cherchent sur Google — ce qui représente la majorité des cas de panne aujourd'hui.

En déployant un site avec une page urgence optimisée, un bouton d'appel fixe et un SEO ciblé sur « dépannage Charleroi », « remorquage Hainaut » et « dépanneur nuit Wallonie », le dépanneur commence à capter des appels qu'il ne recevait pas auparavant. Des automobilistes de passage, des clients d'autres garages fermés le week-end, des personnes en panne sur l'autoroute.

Le retour sur investissement est direct et mesurable : chaque appel supplémentaire est une intervention facturée. Un site bien positionné se rentabilise dès les premières semaines.`
            },
            {
                h2: "Nos tarifs et délais",
                content: `Nous déployons votre site de dépannage en 5 jours ouvrés. La page urgence est prioritaire dans le processus de livraison — elle est mise en ligne en premier pour que vous commenciez à recevoir des appels rapidement
.

Tarifs adaptés aux dépanneurs indépendants, sans abonnement caché. Le SEO local est intégré dès la livraison. Contactez-nous pour un devis.`
            },
        ],
        faq: [
            { q: "Le site fonctionne-t-il 24h/24 ?", a: "Oui. Votre site est en ligne en permanence. La page urgence affiche votre numéro et votre zone d'intervention à toute heure, même quand vous dormez — l'appel arrive directement sur votre téléphone." },
            { q: "Comment indiquer ma zone d'intervention ?", a: "On intègre une section claire avec les communes ou codes postaux couverts. Cela filtre les appels hors zone et rassure le client sur votre disponibilité dans son secteur." },
            { q: "Combien de temps pour avoir mon site en ligne ?", a: "5 jours ouvrés après réception de vos informations. La page urgence peut être prête encore plus rapidement si nécessaire." },
            { q: "Le site m'aidera-t-il à apparaître sur Google Maps ?", a: "Oui. Le site est structuré pour renforcer votre fiche Google Maps. Les deux outils ensemble maximisent votre visibilité locale." },
        ],
        relatedPillars: ["site-web-garage-belgique", "site-web-car-wash-belgique"],
    },
    {
        slug: "site-web-detailing-belgique",
        metier: "detailing",
        h1: "Création de site web pour detailing en Belgique",
        metaTitle: "Création site web detailing Belgique — VIGI AGENCY",
        metaDescription: "Site internet premium pour detailing auto en Belgique. Galerie avant/après, prise de rendez-vous, SEO local. Spécialiste des métiers auto.",
        ogTitle: "Site web detailing Belgique — VIGI AGENCY",
        sections: [
            {
                h2: "Pourquoi un detailer a besoin d'un site optimisé localement",
                content: `Le detailing automobile est un métier visuel par excellence. Vos clients achètent un résultat — un véhicule transformé, une peinture sublimée, un intérieur impeccable. Le problème : sans un site web qui montre ce résultat, vous dépendez uniquement d'Instagram et du bouche-à-oreille.

En Belgique, le marché du detailing est en pleine croissance. De plus en plus de propriétaires recherchent des prestations comme la protection céramique, le polissage correctif ou le nettoyage intérieur professionnel. Ils tapent « detailing Belgique », « polissage auto Wallonie » ou « protection céramique Bruxelles » sur Google. Si vous n'avez pas de site positionné sur ces requêtes, vous passez à côté d'une clientèle qui est prête à payer pour de la qualité.

Le detailing attire une clientèle exigeante — souvent des propriétaires de véhicules haut de gamme. Votre site doit refléter cette exigence : design soigné, chargement rapide, galerie de réalisations professionnelle. Un site bâclé ou inexistant envoie le mauvais signal à cette clientèle premium.`
            },
            {
                h2: "Les éléments indispensables d'un site performant pour detailing",
                h3s: ["Appel en un clic", "WhatsApp structuré", "SEO Google Maps", "Galerie avant/après"],
                content: `**Appel en un clic** — Même dans le detailing, le contact direct reste essentiel. Un client qui hésite entre deux prestataires choisira celui qu'il peut joindre le plus facilement. Le bouton d'appel visible en permanence élimine cette friction.

**WhatsApp structuré** — Le client detailing aime envoyer des photos de son véhicule pour obtenir un devis. Un lien WhatsApp avec message pré-rempli (marque, modèle, prestation souhaitée) vous envoie des demandes qualifiées avec les informations nécessaires pour répondre rapidement.

**SEO Google Maps** — Apparaître sur Google Maps est crucial pour capter les recherches locales. Un site optimisé renforce votre fiche Google Business et vous positionne dans le pack local pour les recherches « detailing + ville ».

**Galerie avant/après** — C'est votre argument de vente principal. Un slider avant/après bien intégré montre la qualité de votre travail mieux que n'importe quel texte. Chaque réalisation publiée devient un argument de conversion pour les visiteurs suivants.`
            },
            {
                h2: "Exemple concret pour un detailer en Wallonie",
                content: `Un centre de detailing basé à Namur propose des prestations de polissage correctif et de protection céramique. Ses clients viennent principalement via Instagram et les recommandations. En ligne, il est invisible pour quiconque ne suit pas son compte.

Avec un site optimisé ciblant « detailing Namur », « protection céramique Wallonie » et « polissage auto Belgique », le centre commence à recevoir des demandes de clients qui ne l'auraient jamais trouvé sur les réseaux sociaux. Le site met en avant une galerie avant/après, les tarifs des prestations et un bouton WhatsApp pour les demandes de devis.

Le résultat : des leads plus qualifiés (clients qui savent ce qu'ils veulent et qui ont vu vos réalisations), un positionnement premium naturel et une réduction de la dépendance aux algorithmes des réseaux sociaux. Votre site vous appartient — contrairement à votre reach Instagram.`
            },
            {
                h2: "Nos tarifs et délais",
                content: `Un site de detailing nécessite un soin particulier sur la partie visuelle. Nous intégrons vos photos en haute qualité, optimisées pour le web, avec une galerie avant/après interactive. Le déploiement se fait en 5 jours ouvrés.

Le SEO local est intégré dès la livraison. Tarifs adaptés, sans abonnement caché. Contactez-nous pour discuter de votre projet.`
            },
        ],
        faq: [
            { q: "Peut-on intégrer un slider avant/après ?", a: "Oui. C'est même recommandé. Nous intégrons une galerie interactive qui met en valeur la qualité de vos réalisations avec un comparatif visuel impactant." },
            { q: "Le site peut-il gérer les prises de rendez-vous ?", a: "Oui. On peut intégrer un bouton de réservation, un lien vers une solution externe (Calendly, etc.) ou un formulaire simple qui vous envoie la demande par email." },
            { q: "Instagram ne suffit pas pour le detailing ?", a: "Instagram est excellent pour montrer votre travail, mais il ne vous positionne pas sur Google. Un site dédié capte les clients qui cherchent activement un detailer — une intention d'achat bien plus forte qu'un scroll passif." },
            { q: "Combien de temps pour être en ligne ?", a: "5 jours ouvrés après réception de vos photos et informations. La qualité des visuels est essentielle pour un site de detailing." },
        ],
        relatedPillars: ["site-web-car-wash-belgique", "site-web-carrosserie-belgique"],
    },
    {
        slug: "site-web-carrosserie-belgique",
        metier: "carrosserie",
        h1: "Création de site web pour carrosserie en Belgique",
        metaTitle: "Création site web carrosserie Belgique — VIGI AGENCY",
        metaDescription: "Site internet professionnel pour carrosserie et pare-brise en Belgique. Devis en ligne, galerie avant/après, SEO local. Déploiement en 5 jours.",
        ogTitle: "Site web carrosserie Belgique — VIGI AGENCY",
        sections: [
            {
                h2: "Pourquoi une carrosserie a besoin d'un site optimisé localement",
                content: `Le secteur de la carrosserie en Belgique est très concurrencé. Entre les réseaux de carrosseries agréées par les assurances et les indépendants, le client a le choix. Son premier réflexe après un accrochage ou un impact de pare-brise ? Chercher sur Google : « carrosserie Mons », « réparation pare-brise Charleroi », « débosselage Wallonie ».

Si votre carrosserie n'apparaît pas dans ces résultats, vous dépendez uniquement des assurances et du bouche-à-oreille. Un site optimisé localement vous ouvre un canal de clients directs — des automobilistes qui choisissent eux-mêmes leur carrossier plutôt que de suivre la recommandation de leur assurance.

En Wallonie, de nombreuses carrosseries indépendantes n'ont pas de site web ou ont un site obsolète. C'est une opportunité : être le premier carrossier bien positionné dans votre zone vous donne un avantage durable. Le SEO local se construit dans le temps, et celui qui commence en premier récolte les bénéfices le plus longtemps.`
            },
            {
                h2: "Les éléments indispensables d'un site performant pour carrosserie",
                h3s: ["Appel en un clic", "WhatsApp structuré", "SEO Google Maps", "Demande de devis simplifiée"],
                content: `**Appel en un clic** — Après un accident, le client veut parler à quelqu'un rapidement. Un bouton d'appel fixe et visible est prioritaire. Il ne doit pas avoir à chercher votre numéro dans un menu.

**WhatsApp structuré** — Le client envoie une photo des dégâts pour obtenir une première estimation. Un lien WhatsApp avec message pré-rempli (type de dommage, marque, modèle) structure ces demandes et vous permet de répondre efficacement.

**SEO Google Maps** — Pour une carrosserie, le positionnement local est déterminant. Le client cherche un professionnel à proximité. Votre site et votre fiche Google Business doivent fonctionner ensemble pour apparaître dans le pack local.

**Demande de devis simplifiée** — Un formulaire court (type de dommage, photo, coordonnées) permet au client de vous contacter facilement. Pas de formulaire à 15 champs — 3 informations suffisent pour initier le contact. Le reste se discute par téléphone ou WhatsApp.`
            },
            {
                h2: "Exemple concret pour une carrosserie en Wallonie",
                content: `Une carrosserie indépendante dans le Hainaut reçoit principalement ses clients via les assurances et les recommandations de garages partenaires. Ces canaux sont fiables mais limités — et dépendants de tiers.

En créant un site optimisé pour « carrosserie Hainaut », « réparation pare-brise Mons » et « débosselage sans peinture Charleroi », la carrosserie ouvre un nouveau canal d'acquisition. Des clients directs, qui paient souvent de leur poche (petits dommages, franchises élevées) et qui choisissent en fonction de la proximité et de la qualité visible en ligne.

Le site intègre une galerie avant/après des réparations, un formulaire de devis en 3 clics et un bouton d'appel permanent. En quelques mois, les demandes directes augmentent sans investissement publicitaire — uniquement grâce au positionnement organique.`
            },
            {
                h2: "Nos tarifs et délais",
                content: `Déploiement en 5 jours ouvrés. Le site intègre la galerie de réalisations, le formulaire de devis, le SEO local et les boutons de contact. Tarifs adaptés aux carrosseries indépendantes, sans engagement longue durée. Contactez-nous pour en discuter.`
            },
        ],
        faq: [
            { q: "Peut-on montrer des photos avant/après des réparations ?", a: "Oui. Une galerie avant/après est intégrée pour mettre en valeur la qualité de vos interventions. C'est un argument de confiance essentiel pour les clients qui cherchent un carrossier." },
            { q: "Le formulaire de devis est-il personnalisable ?", a: "Oui. On l'adapte à votre façon de travailler : type de dommage, marque/modèle, photo. Les demandes vous arrivent par email ou sur votre téléphone." },
            { q: "Mon site sera-t-il visible pour les recherches pare-brise ?", a: "Oui. Le site est optimisé pour les requêtes carrosserie ET pare-brise de votre zone. Chaque prestation est couverte dans la structure SEO." },
            { q: "Combien de temps pour être en ligne ?", a: "5 jours ouvrés après réception de vos contenus. La galerie de réalisations est intégrée dès la livraison." },
        ],
        relatedPillars: ["site-web-garage-belgique", "site-web-detailing-belgique"],
    },
    {
        slug: "site-web-car-wash-belgique",
        metier: "car-wash",
        h1: "Création de site web pour car wash en Belgique",
        metaTitle: "Création site web car wash Belgique — VIGI AGENCY",
        metaDescription: "Site internet professionnel pour station de lavage et car wash en Belgique. Tarifs en ligne, localisation, SEO local. Déploiement rapide.",
        ogTitle: "Site web car wash Belgique — VIGI AGENCY",
        sections: [
            {
                h2: "Pourquoi un car wash a besoin d'un site optimisé localement",
                content: `Le secteur du lavage automobile en Belgique est dominé par les grandes enseignes et les stations-service. Pourtant, de plus en plus d'automobilistes recherchent des car wash indépendants offrant un meilleur rapport qualité-prix ou des services spécialisés (lavage à la main, produits écologiques, services premium).

Ces clients cherchent sur Google : « car wash Bruxelles », « lavage auto Mons », « station de lavage Wallonie ». Sans site web, votre car wash est invisible pour cette demande. Vous dépendez uniquement des clients qui passent devant votre enseigne — et vous ignorez tous ceux qui cherchent activement un car wash dans votre zone depuis leur téléphone.

Un site web pour car wash n'a pas besoin d'être complexe. Il doit répondre à trois questions : où êtes-vous, quels sont vos tarifs et quand êtes-vous ouvert ? Un site simple, rapide et bien positionné localement répond à ces questions et convertit la recherche en visite.`
            },
            {
                h2: "Les éléments indispensables d'un site performant pour car wash",
                h3s: ["Appel en un clic", "WhatsApp structuré", "SEO Google Maps", "Tarifs et formules en ligne"],
                content: `**Appel en un clic** — Le client veut parfois vérifier si vous êtes ouvert ou poser une question rapide. Un bouton d'appel accessible directement depuis la page d'accueil élimine cette friction.

**WhatsApp structuré** — Pour les réservations de créneaux ou les questions sur les formules, WhatsApp est un canal idéal. Un lien pré-rempli avec le type de lavage souhaité facilite le premier contact.

**SEO Google Maps** — Pour un car wash, la proximité est le facteur de décision principal. Apparaître sur Google Maps quand quelqu'un cherche « car wash près de moi » est essentiel. Votre site renforce votre fiche Google Business et améliore votre positionnement local.

**Tarifs et formules en ligne** — Le client veut comparer avant de se déplacer. Afficher clairement vos formules (lavage extérieur, intérieur, complet, premium) avec les tarifs correspondants réduit les hésitations et augmente les visites.`
            },
            {
                h2: "Exemple concret pour un car wash en Wallonie",
                content: `Un car wash à la main situé à Liège propose des prestations de qualité supérieure aux tunnels de lavage automatiques. Ses clients réguliers sont fidèles, mais le flux de nouveaux clients stagne — il dépend de la signalétique physique et du passage.

En créant un site positionné sur « car wash Liège », « lavage auto à la main Wallonie » et « nettoyage voiture Liège », le car wash devient visible pour les automobilistes qui recherchent une alternative aux grandes enseignes. Le site affiche les formules, les tarifs, l'adresse exacte avec un lien Google Maps et un bouton d'appel.

Le résultat : un flux régulier de nouveaux clients qui découvrent le car wash en ligne et qui viennent spécifiquement pour la qualité du service. Le site se rentabilise rapidement — chaque nouveau client régulier représente des dizaines de visites par an.`
            },
            {
                h2: "Nos tarifs et délais",
                content: `Un site pour car wash est rapide à déployer : 5 jours ouvrés. Il intègre vos formules, tarifs, localisation et moyens de contact. SEO local inclus dès la livraison. Contactez-nous pour un devis adapté.`
            },
        ],
        faq: [
            { q: "Peut-on afficher les tarifs de chaque formule sur le site ?", a: "Oui. C'est même recommandé. Des tarifs clairs et visibles réduisent les hésitations et incitent le client à venir directement. On les présente de manière claire et attractive." },
            { q: "Le site peut-il inclure un système de réservation ?", a: "Oui. On peut intégrer un lien vers un outil de réservation en ligne ou un formulaire simple. Pour un car wash, un bouton WhatsApp ou d'appel suffit souvent." },
            { q: "Combien de temps pour avoir mon site en ligne ?", a: "5 jours ouvrés après réception de vos informations (formules, tarifs, photos, horaires). Le site est livré prêt à l'emploi." },
            { q: "Le site m'aidera à me différencier des grandes enseignes ?", a: "Oui. Un site bien positionné localement met en avant vos avantages spécifiques (lavage à la main, produits premium, service personnalisé) face aux tunnels automatiques." },
        ],
        relatedPillars: ["site-web-detailing-belgique", "site-web-depanneur-belgique"],
    },
];

export function getPillarBySlug(slug: string): PillarPage | undefined {
    return PILLAR_PAGES.find((p) => p.slug === slug);
}

export function getPillarLabel(slug: string): string {
    const labels: Record<string, string> = {
        "site-web-garage-belgique": "Site web garage Belgique",
        "site-web-depanneur-belgique": "Site web dépanneur Belgique",
        "site-web-detailing-belgique": "Site web detailing Belgique",
        "site-web-carrosserie-belgique": "Site web carrosserie Belgique",
        "site-web-car-wash-belgique": "Site web car wash Belgique",
    };
    return labels[slug] ?? slug;
}
