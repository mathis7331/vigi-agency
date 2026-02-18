# 🔥 AUDIT VIGI AGENCY — Post 6 phases

**Périmètre :** Fichiers locaux uniquement. Aucune recherche externe.  
**Objectif :** Scaling Belgique, hausse des prix, positionnement premium.  
**Ton :** Direct et sans filtre.

---

## ⚠️ CRITICAL FOCUS — DÉMOS vs BRAND

### Les démos reflètent-elles l’identité principale ?

**Réponse courte : non.** Seule la démo Garage est alignée. Les trois autres se sentent comme des templates ou des expériences à part.

| Démo | Couleur dominante | Alignement brand | Sentiment |
|------|-------------------|------------------|-----------|
| **Garage** | Amber / jaune (slate-950 + amber-400/500) | ✅ Oui | Même univers que la landing : dark + amber, "Page de démonstration VIGI AGENCY". |
| **Dépannage** | **Rouge** (red-600, red-300, red-900, emerald WhatsApp) | ❌ Non | Urgence = rouge est logique, mais ce n’est plus la marque VIGI. On dirait un autre studio. |
| **Carrosserie** | **Bleu / sky** (sky-400, sky-500, slate) | ❌ Non | Accent bleu partout. Aucun amber. "Carrosserie Démo" + VIGI en sous-texte seulement. |
| **Detailing** | **Cyan** (#38E8FF) + design "liquid" | ❌❌ Non | Classe `demo-detailing-liquid-page`, effets liquid, header "DETAILING" + "← Retour". VIGI n’apparaît qu’en footer. **C’est une autre identité visuelle.** |

**Conclusion :**  
- Les démos **ne forment pas un écosystème visuel cohérent** avec la landing.  
- Un prospect qui enchaîne Garage → Dépannage → Carrosserie → Detailing a l’impression de changer de site à chaque fois.  
- **La démo Detailing casse clairement la cohérence** (cyan, courbes, liquid vs dark industriel amber).  
- Elles ne renforcent pas une "signature VIGI" unique ; elles ressemblent à **quatre maquettes différentes** plutôt qu’à "quatre déclinaisons du même produit agence".

**Recommandation stratégique :**  
Unifier les démos sous **dark + amber** (avec variations légères par métier si besoin : ex. dépannage = amber plus chaud ou bordure plus forte), et repenser la démo Detailing pour qu’elle reste "premium" sans devenir un second brand (pas de cyan ni de liquid full-page).

---

## 1️⃣ POSITIONING CLARITY

**Ça ressemble à une vraie agence ou à un freelance renforcé ?**  
Plutôt **freelance / micro-agence bien structurée**. Les signaux "agence" sont là (offres nommées, process en 3 étapes, section "Qui est derrière", zone Belgique), mais tout repose sur **un seul nom** (Mathis — Fondateur), pas sur une équipe ou des cas clients nommés. Le wording reste très "je" / "on" léger.

**Perception de prix aujourd’hui (fourchette €) :**  
**150 € – 450 €** (Foundation / Performance / Authority). Le site communique clairement cette gamme. Un visiteur perçoit du "premium accessible", pas du "premium cher".

**Niche assez forte pour dominer en local ?**  
Oui sur le **positionnement** (garages + dépannage + carrosserie + detailing, Belgique). Le message "plus d’appels, pas un joli site" est clair. Ce qui manque pour "dominer" : **preuves massives** (nombre de projets, villes, témoignages avec noms), et une **autorité éditoriale** (ex. expertise-garage) plus visible et liée aux pages locales.

**Ce qui bloque encore la perception "premium" :**  
- Un seul visage, pas d’équipe.  
- Aucun témoignage avec nom, photo, garage réel.  
- Étude de cas sans nom de client ("Garage local" = générique).  
- Offres à 150 € en premier plan = ancrage bas.  
- Démos qui ne ressemblent pas à une seule marque.

**Où la confiance casse :**  
- Pas d’avis clients (Google, ou citations).  
- Pas de "X garages accompagnés" ou "présents à Mons, Charleroi…".  
- "Qui est derrière" = une carte avec bullets, pas une vraie story ni une preuve sociale tierce.

---

## 2️⃣ BRAND & VISUAL COHERENCE

**Dark + amber cohérent partout ?**  
Sur la **landing** : oui. Variables CSS `--accent`, `--bg`, etc., signature line, section eyebrows, blobs amber/bleu discrets.  
Sur les **démos** : non. Garage = amber. Dépannage = rouge. Carrosserie = bleu. Detailing = cyan + liquid. Donc **incohérent**.

**La démo Detailing casse-t-elle la cohérence ?**  
Oui. Design liquide, cyan, courbes, header minimal "DETAILING" + "← Retour". Aucune réutilisation des composants ou de la palette de la landing. On pourrait la prendre pour un autre produit.

**Les démos ressemblent-elles à des sites clients ou à des expériences à part ?**  
Plutôt à des **maquettes / expériences** :  
- Headers "Garage Démo", "Dépannage Démo", etc. + "Page de démonstration VIGI AGENCY" en petit.  
- Boutons "Appeler maintenant (démonstration)", "Demander un devis (exemple)".  
Donc on comprend que c’est une démo, mais le style change trop entre les quatre pour dire "c’est le même type de site, façon VIGI".

**Signature visuelle reconnaissable ?**  
Sur la landing : oui (dark, amber, lignes de signature, typo industrielle).  
Sur l’ensemble site + démos : non, à cause des couleurs et du design Detailing.

**Typo : intentionnelle ou générique ?**  
Sur la landing : Inter partout, titres en section-title-industrial (font-weight 800 lg). Ça donne un côté "industriel / sérieux". Sur les démos : même Inter mais couleurs et mise en page différentes, donc moins une "intention globale".

**Où ça reste template :**  
- Blocs "Pourquoi cette page fonctionne" répétitifs (structure identique, seul le contenu change).  
- Sections AVANT/APRÈS dupliquées (slider) avec le même pattern.  
- Footers démo très similaires (une ligne "VIGI AGENCY · …").  
- Pas de composant partagé "Header démo" avec même logo / même lien "Retour" / même style (couleur, typo).

---

## 3️⃣ DEMO STRATEGY — ANALYSE PAR DÉMO

### Garage
- **Justifie 450 € ?** Oui en potentiel (services, process, avant/après, CTA clairs). Le niveau de détail et la structure sont bons.  
- **Un garage dirait "je veux ça" ?** Oui, si le propriétaire cherche du sobre et pro.  
- **Custom ou template ?** Entre les deux : contenu démo générique mais mise en page soignée.  
- **Reflète l’autorité VIGI ?** Oui (amber, "VIGI AGENCY" visible).  
- **Aligné à la landing ?** Oui.

### Dépannage
- **Justifie 450 € ?** Oui (urgence 24/7, appel 1 clic, zone, WhatsApp).  
- **Custom ou template ?** Sentiment "template urgence" à cause du rouge systématique.  
- **Autorité VIGI ?** Non : la couleur rouge prime sur la marque.  
- **Aligné ?** Non (rupture rouge vs amber).

### Carrosserie
- **Justifie 450 € ?** Oui (avant/après visuel, devis, RDV).  
- **Custom ou template ?** Plutôt template (sky/slate, pas de personnalité VIGI).  
- **Autorité VIGI ?** Faible (bleu = autre identité).  
- **Aligné ?** Non.

### Detailing
- **Justifie 450 € ?** Possible (effet "wow" liquid), mais le positionnement est flou par rapport à VIGI.  
- **Custom ou template ?** Très custom mais **hors système** (liquid, cyan).  
- **Autorité VIGI ?** Non. On pense à une autre offre.  
- **Aligné ?** Non.

### Décision recommandée

**C) Unifier visuellement**  
- Une seule direction : **dark + amber** sur les 4 démos.  
- Garder les spécificités métier (urgence, avant/après, rendez-vous) **sans changer la palette principale**.  
- Dépannage : garder l’urgence par la hiérarchie et les libellés, pas par le rouge.  
- Carrosserie : remplacer sky par amber pour liens/accents.  
- Detailing : refondre pour rester "premium" mais dans la charte (dark + amber, éventuellement reflets ou effets discrets, pas une page liquid cyan).

**B) Simplifier** peut être une option si tu veux moins de maintenance : moins de sections par démo, mais alors il faut que chaque démo soit **très clairement VIGI** (même header, même footer, même accent).

---

## 4️⃣ CONVERSION PATH

**Hiérarchie des CTA :**  
Sur la landing : Nav (Contact), Hero CTA, cartes démo → lien vers chaque démo, bloc "Parlons du vôtre" → #contact + WhatsApp, Offres → #contact, formulaire Contact. La hiérarchie est **correcte** (Contact et démos bien mis en avant).

**Après une démo, la prochaine action est-elle évidente ?**  
**Non.** Sur chaque démo il n’y a que **"Retour au site agence"**. Aucun CTA du type "Un site comme celui-ci ? Discuter de mon projet" ou "Demander un devis" pointant vers `/#contact`. Le prospect doit revenir puis retrouver Contact ou scroll. **Friction inutile.**

**Frictions restantes :**  
- Démos sans CTA conversion (lien direct vers contact ou WhatsApp).  
- Formulaire contact sans rappel du contexte (ex. "Vous venez de voir la démo Garage" si referrer = demo-garage).  
- Pas de sticky CTA sur les démos (mobile/desktop) du type "Discuter de mon projet".

**Positionnement pricing :**  
Foundation 150 € en premier peut ancrer bas. Pour monter les prix plus tard, envisager de mettre **Performance (290 €)** ou une offre "recommandée" en premier, et Foundation en "entrée de gamme" secondaire.

**Zone d’intervention :**  
Le bloc "Présent partout en Belgique" (métier / zone / ville + aperçu) est **fort** : clair, interactif, liens vers `#contact` avec paramètres. Ça renforce la crédibilité locale.

**Logique ville/métier adaptative :**  
Stratégique (SEO + UX) : URLs du type `/?metier=garage&zone=hainaut&ville=Mons#contact`, pages `/creation-site/[metier]/[ville]`, prefill du formulaire. Ce n’est **pas** gimmick, à condition que les pages générées aient assez de contenu (voir §6).

**Suggestions UX concrètes :**  
1. Sur **chaque démo** : barre ou bloc fixe (ou en bas de page) avec un seul CTA "Un site comme celui-ci ? Discuter de mon projet" → `/#contact` ou WhatsApp.  
2. Lien "Retour au site agence" **gardé**, mais pas comme seule sortie.  
3. Sur la landing : après le bloc démos, renforcer le bloc "Parlons du vôtre" (ex. sous-titre du type "Même principe que la démo, adapté à votre garage").  
4. Formulaire : préremplir ou afficher un champ caché "Contexte : démo Garage" si `document.referrer` contient `demo-garage`, etc. (optionnel mais utile).

---

## 5️⃣ CREDIBILITY & TRUST

**"Qui est derrière" suffisant ?**  
Pour un premier niveau oui (nom, rôle, 3 bullets, phrase de positionnement). Pour une agence qui veut monter à 1000 €+ : **non**. Il manque : photo (ou visage), courte story (pourquoi les garages, pourquoi la Belgique), et surtout **preuves tierces**.

**Résultats de l’étude de cas crédibles ?**  
Les chiffres (+28 % appels, 12 WhatsApp, +28 % RDV) sont **croyables** mais **anonymes**. "Garage local" sans nom ni ville = on ne peut pas vérifier. Pour renforcer : soit un cas avec prénom + ville (avec accord), soit "Plusieurs garages en Hainaut" sans détail, mais avec un ton plus factuel.

**Témoignages :**  
**Aucun** sur la landing. Pas de citation, pas de nom, pas d’avis. C’est le **trou le plus visible** pour la confiance.

**Un garage sérieux ferait-il confiance pour 150–450 € ?**  
Oui pour 150–290 € si le besoin est clair (site simple, appels). Pour 450 €, beaucoup voudront une preuve de plus (témoignage, cas nommé, ou au moins "X sites livrés").

**Pour viser 1000 €+ plus tard :**  
- Témoignages avec prénom + type d’activité (au minimum).  
- Un ou deux cas "avant/après" avec nom ou ville.  
- "Qui est derrière" enrichi (photo, parcours, pourquoi ce créneau).  
- Optionnel : chiffres ("XX garages accompagnés", "Mons, Charleroi, Liège…").  
- Démos perçues comme **produit agence cohérent**, pas quatre templates différents.

---

## 6️⃣ LOCAL SEO & STRUCTURE

**Structure des pages locales :**  
- Données centralisées dans `local-landing-data.ts` (métiers, zones, villes, FAQs, meta).  
- Pages statiques : `/creation-site-garage-mons`, `creation-site-depannage-charleroi`, `creation-site-carrosserie-hainaut`.  
- Page dynamique : `/creation-site/[metier]/[ville]` avec metadata (title, description).  
Structure **propre** et maintenable.

**Maillage interne :**  
- Landing linke vers les 4 démos, création-site, expertise-garage, et les 3 exemples de pages locales (Mons, Charleroi, Hainaut).  
- Les pages `/creation-site/[metier]/[ville]` ont un header avec lien vers `/` et "Contact".  
- **Manque :** liens depuis les démos vers les pages locales ou vers "Création site pour [ville]".  
- **Sitemap :** `sitemap.ts` n’inclut **pas** les URLs creation-site (ni la page générique `/creation-site`, ni les 3 statiques, ni les dynamiques). **À corriger** pour l’indexation.

**Le site devient-il une autorité ou reste-t-il un portfolio ?**  
Pour l’instant plutôt **portfolio orienté conversion** : une landing forte, des démos, des offres, peu de contenu "éditorial" et peu de pages indexables dédiées (ex. "Garage Mons" en SEO). Les pages dynamiques `/creation-site/[metier]/[ville]` peuvent aider si elles ont **assez de contenu unique** (intro, contexte, bénéfices, FAQ). Si chaque page est un simple bloc LocalLandingPreview avec peu de texte, risque de **thin content**. À vérifier dans `LocalLandingPreview` / `local-landing-data` : longueur des textes, variation par ville/métier.

**Résumé :**  
- Générer et exposer dans le sitemap : `/creation-site`, les 3 statiques, et les dynamiques (via `generateStaticParams` ou liste connue).  
- Enrichir le contenu des pages dynamiques pour éviter le thin content (texte unique par combinaison métier/ville ou au moins par métier).  
- Ajouter des liens internes depuis les démos vers la landing et, si pertinent, vers une page "création site [ville]".

---

## 7️⃣ CE QU’UNE AGENCY 10K CHANGERAIT EN PRIORITÉ (max 10)

1. **Unifier les 4 démos en dark + amber** (supprimer rouge, bleu, cyan/liquid comme identité principale).  
2. **Ajouter sur chaque démo un CTA conversion** ("Discuter de mon projet" → `/#contact` ou WhatsApp), en plus de "Retour au site agence".  
3. **Introduire au moins 1–2 témoignages** (prénom + type d’activité + citation), même courts.  
4. **Renforcer "Qui est derrière"** : photo ou visage, 2–3 phrases story, et si possible un chiffre ("X projets" ou "X villes").  
5. **Compléter le sitemap** avec toutes les URLs creation-site (générique + statiques + dynamiques).  
6. **Ancrer l’étude de cas** : soit "Garage [Ville]" (avec accord), soit "Plusieurs garages, Hainaut" pour éviter le côté 100 % anonyme.  
7. **Mettre Performance (290 €) en avant** plutôt que Foundation en premier, pour préparer une montée des prix.  
8. **Refondre la démo Detailing** dans la charte dark + amber (sans refaire tout le liquid : garder l’idée "premium" avec la palette VIGI).  
9. **Prévoir un champ "Contexte" ou referrer** dans le formulaire contact (quelle démo vue) pour qualifier les leads.  
10. **Header/footer démo commun** : même composant sur les 4 démos (logo, "Retour", CTA "Discuter"), même style (couleurs, typo).

---

## 8️⃣ VERDICT FINAL

### Notes / 10

| Critère | Note | Commentaire |
|---------|------|-------------|
| **Design** | 7,5 | Landing soignée, dark + amber cohérent sur la home. Démos en retard (couleurs, Detailing). |
| **Branding** | 5,5 | Fort sur la landing, faible sur 3/4 démos. Pas de signature unique site + démos. |
| **Conversion** | 6,5 | Bonne hiérarchie CTA sur la landing. Démos sans CTA conversion = grosse marge de progression. |
| **Credibility** | 5 | Positionnement et offre clairs. Manque témoignages, cas nommé, renforcement "Qui est derrière". |
| **Scalability** | 7 | Structure données, pages dynamiques, zone Belgique bien posée. Sitemap et contenu local à finaliser. |

### Prêt pour… ?

| Objectif | Prêt ? | Condition |
|----------|--------|-----------|
| **A) Prospection agressive** | Oui, avec réserves | OK pour démarcher si tu assumes "freelance / micro-agence". Pour parler "agence" il faut au moins 1–2 témoignages et démos unifiées. |
| **B) Pub (ads)** | Partiel | Landing et offres sont prêtes. Démos en rouge/bleu/cyan diluent la marque ; mieux vaut unifier avant de payer du trafic. |
| **C) Monter les prix** | Partiel | 290–450 € passent. Au-delà, il faudra preuves (témoignages, cas), et démos qui justifient clairement le premium. |
| **D) Scale multi-villes** | Oui, à condition de | Compléter le sitemap, enrichir les pages locales pour éviter thin content, et garder un maillage interne (démos → landing → pages création-site). |

**En une phrase :**  
La landing et l’offre sont solides pour prospecter et scaler en Belgique, mais les démos ne portent pas encore la marque VIGI, et la confiance reste limitée par l’absence de témoignages et de cas nommés. En unifiant les démos (dark + amber) et en ajoutant des preuves sociales ciblées, le site devient prêt pour de la prospection agressive et une hausse progressive des prix.
