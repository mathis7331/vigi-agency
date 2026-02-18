# AUDIT A→Z — VIGI AGENCY

**Date :** 2025  
**Scope :** Landing principale, démos, fonctionnalités, SEO local, conversion, mobile, qualité code.

---

## 0) EXECUTIVE VERDICT

**Niveau actuel :** Micro-agence (1 personne) en transition vers agence. La base est solide (Next.js 16, design cohérent dark/ambre, démos réalistes), mais des lacunes en confiance, tracking et SEO local freinent la croissance.

**Risques qui tuent la confiance aujourd’hui :**
- Paramètre `?from=` non utilisé : impossible de savoir quelle démo génère les leads.
- Bloc CSS `.liquid-*` (~1400 lignes) mort et chargé sur chaque page.
- Sitemap incomplet : pages SEO local absentes (creation-site, expertise-garage, dynamiques).

**Opportunités rapides pour augmenter les conversions :**
- Utiliser `from=` dans le formulaire pour préremplir le message et transmettre à l’API (tracking).
- Ajouter une phrase « Vous venez de la démo X » dans la section contact pour personnaliser.
- Intégrer les pages creation-site et expertise-garage au sitemap et au maillage interne.

---

## 1) CRITICAL BUGS (must-fix)

### 1.1 Lueur blanche en haut de page (mobile)

| Élément | Détail |
|--------|--------|
| **Où** | `src/app/globals.css` lignes 64–83 |
| **Comportement** | Bande/lueur blanche visible en haut sur mobile (iPhone Safari) |
| **Cause** | `.site-main::before` avec `background: linear-gradient(180deg, rgba(0,0,0,0.12) 0%, transparent 38%)` et `opacity: 0.5` |
| **Correctif** | Déjà en place : `@media (max-width: 767px)` met `opacity: 0`, `background: none`, `filter: none`. Si le problème persiste, vérifier que le breakpoint est bien appliqué et qu’aucun autre élément (cinematic-grain, cinematic-blob-hero, etc.) n’ajoute une superposition claire. |

### 1.2 Paramètre `from=` ignoré dans le formulaire de contact

| Élément | Détail |
|--------|--------|
| **Où** | `src/app/page.tsx` : `ContactFormPrefill` (l.307–326), `src/app/api/contact/route.ts` |
| **Comportement** | Clic sur « Obtenir un site comme celui-ci » depuis une démo → `/#contact?from=demo-garage` mais le formulaire ne préremplit rien et l’API ne reçoit pas la source. |
| **Cause** | `ContactFormPrefill` lit uniquement `metier`, `zone`, `ville`, pas `from`. Le schéma API ne prévoit pas `from`. |
| **Correctif** | 1) Dans `ContactFormPrefill` : ajouter `const from = searchParams.get("from")` ; si présent, faire `setValue("message", `[Source: ${from}]\n\n` + (message existant || ""))`. 2) Dans l’API : accepter `from` dans le body et l’inclure dans le subject ou le corps du mail : `[Source: ${from}]`. |

### 1.3 Liens footer page principale

| Élément | Détail |
|--------|--------|
| **Où** | `src/app/page.tsx` lignes 1972–1977 |
| **État** | Vérifié : `#services` (WhyItWorksSection l.872), `#offres` (PricingSection l.989), `#demo`, `#contact`, `/expertise-garage` — tous valides. Pas de bug. |

---

## 2) BRAND & VISUAL COHERENCE

**Unité globale :** Oui. Toutes les démos utilisent `.site-demo`, palette dark + accent ambre, typo Inter, composants partagés (DemoHeader, DemoFooter, DemoStickyCTA, etc.). Le site principal (`.site-main`) et les démos partagent les mêmes variables CSS (--bg, --accent, --text).

**Écarts mineurs :**
- Page principale : effets visuels « cinéma » (grain, blobs, sheen) ; les démos n’en ont pas → acceptable (séparation landing vs démo).
- `creation-site-garage-mons`, `creation-site-depannage-charleroi`, etc. : header simplifié (pas de nav complète) → cohérent avec un objectif SEO/contenu.

**Action prioritaire :** Garder la cohérence actuelle. Ne pas introduire de nouvelle palette ou police.

---

## 3) DEMO PAGES AUDIT

### 3.1 /demo-garage

| Critère | Verdict |
|---------|---------|
| **Effet « vrai site »** | Bon. Hero clair, TrustInfoCard, ServicesGrid, testimonials, FAQ. |
| **Risques de confiance** | Phrase « Ceci est une page de démonstration » bien visible. CTA « Demande de rendez-vous » pointe vers `/#contact?from=demo-garage` — cohérent. |
| **Prochain pas** | « Obtenir un site comme celui-ci » (footer). CTA principal : appel ou formulaire VIGI. |
| **Pistes d’amélioration** | 1) Renforcer la mention « Démo » dans le header. 2) Mettre un bandeau discret « DÉMO — pas un vrai garage ». 3) S’assurer que DemoFooter reçoit `contactFrom="demo-garage"` (actuellement défaut OK). |

### 3.2 /demo-depannage

| Critère | Verdict |
|---------|---------|
| **Effet « vrai site »** | Bon. Urgence, zone, disponibilité, symptômes, etc. |
| **Risques de confiance** | Même principe que garage. |
| **Prochain pas** | CTA clair vers contact. `contactFrom="demo-depannage"` bien utilisé. |
| **Pistes d’amélioration** | 1) Vérifier que le message WhatsApp prérempli est adapté (« dépannage »). 2) Mettre en avant « 24h/24 » ou « urgence » dans le hero si pertinent. |

### 3.3 /demo-carrosserie

| Critère | Verdict |
|---------|---------|
| **Effet « vrai site »** | Bon. Avant/après, devis, services carrosserie. |
| **Risques de confiance** | Bon. |
| **Prochain pas** | « Demander un devis » → `/#contact?from=demo-carrosserie`. |
| **Pistes d’amélioration** | 1) S’assurer que les images avant/après (bmwavant, bmwapres, etc.) sont correctement optimisées (Next/Image). 2) Vérifier la lisibilité du slider sur mobile. |

### 3.4 /demo-detailing

| Critère | Verdict |
|---------|---------|
| **Effet « vrai site »** | Bon. Galerie, signature cards, process, conversion. |
| **Risques de confiance** | Bon. |
| **Prochain pas** | « Réserver » → `/#contact?from=demo-detailing`. |
| **Pistes d’amélioration** | 1) Vérifier que `brille.png`, `huracanpropre.png`, `huracaninterieur.png` existent et sont légers. 2) Tester la galerie sur Safari mobile. |

---

## 4) CONVERSION FUNNEL AUDIT

**Points d’entrée :** Homepage, démos, pages creation-site-*, expertise-garage, pages dynamiques /creation-site/[metier]/[ville].

**Hiérarchie CTA :**
- Primaire : « Être rappelé » (WhatsApp) — cohérent pour un garage/dépannage.
- Secondaire : formulaire contact, « Parler d’un projet », « Voir une démo ».
- Démos : CTA principal = appel ou demande de devis/rendez-vous ; footer = « Obtenir un site comme celui-ci » vers `/#contact?from=X`.

**Contact :** Section claire, formulaire court, mention « 150–450 € », « Pas de contrat », « 9 €/mois hébergement ». Bonne réduction de friction.

**Handoff démo → contact :**
- Liens : `/#contact?from=demo-garage` (et variants) — correct.
- Problème : `from` non utilisé (voir 1.2).
- Idée : message prérempli type « Je viens de voir la démo Garage. Je souhaite un site similaire pour mon activité. »

**Positionnement prix :** « À partir de 150 € » + 9 €/mois — ancre basse mais lisible. Pour monter sans mentir : ajouter « Sites sur mesure jusqu’à 450 € selon vos besoins » ou « Devis personnalisé gratuit ».

**3 quick wins (48 h) :**
1. Implémenter le support `from=` dans ContactFormPrefill + API (tracking + préremplissage).
2. Ajouter un message contextuel dans la section contact ou préremplir automatiquement si `from` présent.
3. Compléter le sitemap (creation-site, expertise-garage, pages locales).

---

## 5) LOCAL SEO AUDIT (Belgium)

**Pages indexables :**
- `/`, `/demo-garage`, `/demo-depannage`, `/demo-carrosserie`, `/demo-detailing` : metadata OK.
- `/creation-site-garage-mons`, `/creation-site-depannage-charleroi`, `/creation-site-carrosserie-hainaut` : metadata OK, schema LocalBusiness/Service.
- `/creation-site` : page hub avec params metier/zone/ville.
- `/creation-site/[metier]/[ville]` : metadata dynamique via generateMetadata.
- `/expertise-garage` : metadata OK, contenu pertinent.

**Sitemap (`src/app/sitemap.ts`) :**
- Actuellement : `/`, `/demo-garage`, `/demo-depannage`, `/demo-carrosserie`, `/demo-detailing`.
- Manquent : `/creation-site`, `/creation-site-garage-mons`, `/creation-site-depannage-charleroi`, `/creation-site-carrosserie-hainaut`, `/expertise-garage`. Les routes dynamiques nécessitent une génération dynamique (cités depuis local-landing-data).

**Thin content / duplication :** Les pages creation-site-* ont du contenu unique (ville + métier). Les pages dynamiques peuvent créer du contenu similaire — à surveiller. Expertise-garage a du contenu substantiel.

**Maillage interne recommandé :**
```
/ → #demo, #contact, /expertise-garage
/expertise-garage → /, /creation-site, /#contact
/creation-site → /expertise-garage, démos, /#contact
/creation-site-garage-mons → /demo-garage, /#contact, /expertise-garage
(ditto pour depannage, carrosserie)
Démos → /#contact?from=X, /expertise-garage
```

**5 actions SEO concrètes :**
1. Compléter le sitemap avec creation-site, creation-site-*, expertise-garage.
2. Générer dynamiquement les URLs /creation-site/[metier]/[ville] dans le sitemap (via METIERS + CITIES).
3. Ajouter des liens internes depuis expertise-garage vers creation-site et démos.
4. Ajouter un bloc « Pages utiles » ou « Ressources » en footer avec liens vers expertise-garage et creation-site.
5. Vérifier les canonicals (Next.js les gère par défaut).

---

## 6) MOBILE & SAFARI AUDIT

**Zones sensibles :**

| Zone | Risque | État / Correctif |
|------|--------|------------------|
| **FloatingIncomingCall** | fixed z-[70], top | OK. `top-[calc(env(safe-area-inset-top)+8px)]` pour encoche. |
| **Flip card (CaseStudyFlipCard)** | 3D transform, backface-visibility | Fallback iOS : `@supports (-webkit-touch-callout: none)` → 2D opacity switch (l.2460–2506 globals.css). Pas de 3D sur iOS. |
| **iPhone mockup hero** | Transform, overflow | `HERO_IPHONE_MAX_WIDTH` : `max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]` — visible sur mobile. Pas de `hidden` sur petits écrans. |
| **Sticky bar mobile** | fixed bottom | `paddingBottom: max(0.75rem, env(safe-area-inset-bottom))` — OK. |
| **Nav sticky** | top-0, backdrop-blur | Standard, pas de safe-area critique. |
| **overflow scroll** | body, sections | `html, body { overflow-y: auto }`, pas de `overflow-y: hidden` global. |
| **viewport** | viewportFit: cover | Défini dans layout.tsx. |

**Flip card — comportement actuel :**
- Chrome/Desktop : 3D flip avec `rotateY`, `flipBackContent` + `flipBackContentInner` en `scaleX(-1)` pour éviter texte inversé.
- iOS Safari : `@supports (-webkit-touch-callout: none)` désactive 3D, utilise opacity. Pas de miroir.
- Si un artefact apparaît encore : isoler dans un `transform: translateZ(0)` ou `will-change: transform` sur le conteneur, ou forcer `-webkit-backface-visibility: hidden` sur les enfants.

**Recommandations :**
- Garder le fallback 2D sur iOS.
- Tester sur Safari iPhone (Simulator ou device).
- Vérifier que le mockup iPhone n’est pas coupé sur très petits écrans (min-width 280px sur la carte flip).

---

## 7) PERFORMANCE / BUILD HEALTH

**Build :** `npm run build` OK. 15 pages générées, aucune erreur.

**Assets lourds :** Images dans `/public` : appel.png, bmwapres.png, bmwavant.png, huracan*.png, rs3*.png, og-image.png, iphone.png, etc. Next/Image est utilisé pour la plupart. Vérifier les tailles (par ex. og-image, iphone.png).

**Hydration :** Aucun `useEffect` ou `useState` problématique détecté. ContactFormPrefill et useSearchParams sont dans Suspense — correct.

**Bloc CSS liquid (~1400 lignes) :** Classes `.liquid-*` et `.demo-detailing-liquid-page` dans globals.css ne sont plus utilisées (demo-detailing utilise site-demo). **Action :** supprimer ou commenter ce bloc pour alléger le CSS.

**Quick wins sans nouvelle dépendance :**
1. Supprimer le CSS liquid mort.
2. Optimiser les images (WebP si possible, tailles adaptées).
3. Vérifier que les composants lourds (MacBook screen, etc.) sont bien tree-shakés.

---

## 8) PRIORITIZED ROADMAP

| # | Priorité | Temps | Impact | Fichiers |
|---|----------|-------|--------|----------|
| 1 | P0 | S | High | page.tsx (ContactFormPrefill), api/contact/route.ts | Implémenter `from=` dans formulaire + API |
| 2 | P0 | M | High | sitemap.ts | Ajouter creation-site, creation-site-*, expertise-garage |
| 3 | P1 | M | High | sitemap.ts | Générer URLs dynamiques creation-site/[metier]/[ville] |
| 4 | P1 | S | Med | globals.css | Supprimer bloc .liquid-* (~l.266–1670) |
| 5 | P1 | S | Med | expertise-garage, creation-site pages | Ajouter liens internes (expertise → creation-site → contact) |
| 6 | P1 | S | Med | page.tsx (footer) | Bloc « Ressources » : expertise-garage, creation-site |
| 7 | P2 | M | Med | Demo pages | Bandeau « DÉMO » plus visible dans header |
| 8 | P2 | S | Low | layout.tsx | Silencer warning lockfile (turbopack.root) si pertinent |
| 9 | P2 | L | Med | Pricing | Affiner positionnement 150–450 € (texte, contexte) |

**Légende :** S = < 1 h, M = 1–3 h, L = > 3 h

---

## 9) FINAL SCORECARD

| Critère | Note /10 | Commentaire |
|---------|----------|-------------|
| Design | 7.5 | Cohérent, dark/ambre, composants bien structurés. |
| Branding | 8 | VIGI AGENCY clair, démos alignées. |
| Credibility | 6.5 | Bon contenu mais tracking `from` manquant. |
| Conversion | 6 | CTAs corrects mais handoff démo→contact incomplet. |
| SEO | 5.5 | Sitemap incomplet, maillage interne à renforcer. |
| Mobile/Safari | 7 | Fallbacks iOS en place, safe-area utilisés. |
| Scalability | 7 | Structure Next.js solide, data (local-landing-data) centralisée. |

**Réponses YES/NO :**

| Question | Réponse |
|----------|---------|
| **A) Prêt à prospecter activement ?** | **OUI** — avec correctifs P0 (from=). |
| **B) Prêt à lancer des ads payantes ?** | **NON** — tant que le tracking `from=` n’est pas en place, impossible d’optimiser les campagnes par démo. |
| **C) Prêt à augmenter les prix ?** | **PLUTÔT OUI** — le positionnement « 150–450 € » est clair ; il faudrait enrichir le discours valeur avant de monter. |
| **D) Prêt à scaler sur plusieurs villes ?** | **OUI** — la structure creation-site/[metier]/[ville] + local-landing-data le permet ; il faut compléter le sitemap et le maillage. |

---

## ANNEXES — FOCUS EXIGÉS

### A) Lueur blanche en haut

- **Sélecteur :** `.site-main::before` (globals.css l.64–83).
- **Mobile :** `@media (max-width: 767px)` désactive l’effet (opacity: 0, background: none). Si problème persiste : vérifier ordre des media queries et qu’aucun autre pseudo-élément (cinematic-*) n’ajoute de gradient clair en haut.

### B) Call simulation (FloatingIncomingCall)

- **Position :** `fixed z-[70]`, `left-1/2 -translate-x-1/2`, `top-[calc(env(safe-area-inset-top)+8px)] md:top-[14px]`.
- **Contexte :** Rendu au niveau racine de `Home` (l.1190), donc overlay global, pas coincé dans une section.
- **Délai :** 5 s (FLOATING_CALL_DELAY_MS), visible 5 s (FLOATING_CALL_VISIBLE_MS). L’utilisateur demandait 10–15 s — envisager d’augmenter FLOATING_CALL_DELAY_MS à 10000–15000.

### C) Flip card miroir

- **Chrome :** `scaleX(-1)` sur flipBackContent + flipBackContentInner compense le rotateY(180deg) pour garder le texte lisible.
- **iOS :** Fallback 2D via `@supports (-webkit-touch-callout: none)` — pas de 3D, transition par opacity. Pas de miroir.
- **Si problème persiste :** s’assurer qu’aucun parent n’applique un transform conflictuel ; ajouter `isolation: isolate` sur le wrapper si nécessaire.

### D) iPhone mockup — visibilité mobile

- **Breakpoints :** `max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]`.
- **Pas de `hidden` sur mobile** — le mockup est affiché sur tous les écrans. Le conteneur hero utilise `lg:grid-cols-2` ; sur mobile, le mockup est en dessous du texte, centré. Comportement attendu.
