# VIGI AGENCY — Section "Projets Livrés" (L'Art Auto)

## Placement Recommandé
**Au sommet de la section "Preuves" (#preuves).**
*Justification :* Placer un cas visuel, réel et vérifiable juste avant les avis textuels ancre immédiatement votre autorité. Cela transforme les promesses abstraites en résultats tangibles, maximisant la confiance avant même la lecture.

---

## 1. Copywriting (Français)

### Section
- **Titre de la section :** Projets livrés
- **Introduction (1 ligne) :** Des systèmes web conçus pour dominer leur marché local et générer des appels téléphoniques qualifiés.

### Carte (Aperçu)
- **Titre :** L'Art Auto
- **Sous-titre :** Centre de detailing automobile premium
- **Tags :** `Acquisition Locale` `UX Mobile`
- **Témoignage (extrait nettoyé) :** *"C’est du très beau boulot, je te félicite. Je suis vraiment très content."*
- **Signature :** L’Art Auto — Detailing premium — Beauraing
- **Mention subtile (en bas de carte) :** Pensé & réalisé par VIGI AGENCY

### Modale (Détail du projet)
- **Titre principal :** L'Art Auto — Detailing Premium
- **Ce que nous avons mis en place (4 max) :**
  - Architecture mobile-first orientée exclusivement sur la conversion
  - Simulateur de devis instantané et réservation directe via WhatsApp
  - Optimisation technique et sémantique pour le SEO local automobile
  - Identité visuelle sombre et minimaliste reflétant un positionnement très haut de gamme
- **Pourquoi ça convertit (2 max) :**
  - Fluidité extrême sur smartphone et appels à l'action toujours accessibles au pouce.
  - Suppression totale des formulaires complexes au profit d'un contact conversationnel instantané.
- **Boutons (CTA) :**
  - Primaire : `Parler de mon projet`
  - Les autres : `Visiter le site` (externe) • `Voir une démo similaire` (interne)

---

## 2. UI Layout & Specifications

**Couleurs :** Fond principal `#0B0D12`, Surfaces (cartes, modale) `#111111`, Accent `#F59E0B`.
**Typographie :** Inter (clair, lisible, premium).

### Structure de la carte (Desktop & Mobile)
- **Background :** `#111111` (Anthracite unifié).
- **Bordure :** 1px solide, très discrète (ex: `border-white/5`), pas de glassmorphism.
- **Padding :** `p-5` ou `p-6`.
- **Image :** Mockup iPhone (et non desktop lourd) prenant le tiers supérieur ou la moitié gauche (sur desktop). Image en `object-cover`.
- **Hiérarchie texte :** Titre en `text-lg font-semibold`, tags en `text-xs uppercase tracking-wider`, témoignage en `text-sm text-neutral-400 italic`.

### Micro-interactions
- **Hover Desktop (Carte) :** Légère élévation (`-translate-y-1`), transition fluide (`duration-300`), et lueur ultra-subtile sur la bordure en utilisant l'accent à 10 ou 15% (`hover:border-[#F59E0B]/15 hover:shadow-[0_4px_20px_rgba(245,158,11,0.05)]`).
- **Tap Mobile :** Légère réduction (`active:scale-[0.98]`) pour un retour tactile instantané, sans opacité clignotante.
- **Modale (Ouverture) :** Apparition en fondu (`opacity-0` vers `opacity-100`) et léger zoom (`scale-95` vers `scale-100`) très rapide (`duration-200 ease-out`). Fond de la modale en `bg-black/80` (assombrissement classique, pas de blur intensif).

---

## 3. Tailwind Markup (Structure Sémantique)

```html
<!-- === SECTION: PROJETS LIVRÉS === -->
<section id="projets" class="w-full bg-[#0B0D12] py-20 px-4 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-5xl">
    
    <!-- Header de section -->
    <div class="mb-12">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Projets livrés</h2>
      <p class="mt-3 text-base text-neutral-400">Des systèmes web conçus pour dominer leur marché local et générer des appels téléphoniques qualifiés.</p>
    </div>

    <!-- Grille de cartes -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <!-- CARTE: L'Art Auto -->
      <article 
        role="button"
        tabindex="0"
        aria-haspopup="dialog"
        class="group relative flex flex-col overflow-hidden rounded-xl bg-[#111111] border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#F59E0B]/15 hover:shadow-[0_8px_30px_rgba(245,158,11,0.05)] active:scale-[0.98] text-left"
      >
        <!-- Thumbnail (Phone Mockup) -->
        <div class="relative h-60 w-full overflow-hidden bg-neutral-900 border-b border-white/5">
          <!-- TODO: Remplacer par src="/lartauto-mobile.png" -->
          <img 
            src="/placeholder-mobile.jpg" 
            alt="Aperçu mobile du site L'Art Auto" 
            class="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <!-- Contenu de la carte -->
        <div class="flex flex-1 flex-col justify-between p-6">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <span class="rounded bg-white/[0.03] px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-neutral-300 border border-white/5">Acquisition Locale</span>
              <span class="rounded bg-white/[0.03] px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-neutral-300 border border-white/5">UX Mobile</span>
            </div>
            <h3 class="text-xl font-semibold text-white">L'Art Auto</h3>
            <p class="mt-1 text-sm text-neutral-400">Centre de detailing premium</p>

            <blockquote class="mt-5 border-l-2 border-[#F59E0B]/30 pl-4">
              <p class="text-sm font-medium text-neutral-300 italic">"C’est du très beau boulot, je te félicite. Je suis vraiment très content."</p>
              <footer class="mt-2 text-xs text-neutral-500">— Base à Beauraing</footer>
            </blockquote>
          </div>

          <div class="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            <span class="text-[10px] uppercase tracking-wider text-neutral-500">Site pensé & réalisé par VIGI AGENCY</span>
            <span class="text-xs font-medium text-[#F59E0B] group-hover:underline underline-offset-4">Voir les détails &rarr;</span>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>

<!-- === MODALE (DIALOG) === -->
<!-- Implémentez ceci avec un état React (ex: isOpen) ou la balise native <dialog> -->
<!-- <dialog open class="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop:bg-black/80 m-0 p-4 h-full w-full"> -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6 opacity-0 pointer-events-none transition-opacity duration-200" id="modal-lartauto">
  
  <div class="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#111111] border border-white/10 shadow-2xl scale-95 transition-transform duration-200" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    
    <!-- Bouton de fermeture -->
    <button class="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-neutral-400 hover:text-white transition-colors" aria-label="Fermer">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-0">
      
      <!-- Colonne Visuel (2/5) -->
      <div class="lg:col-span-2 bg-neutral-900 border-b lg:border-b-0 lg:border-r border-white/5 relative p-8 flex items-center justify-center min-h-[300px]">
        <!-- TODO: src="/lartauto-desktop.png" ou composition desktop+mobile -->
        <img src="/placeholder-desktop.jpg" alt="Vue complète du site L'Art Auto" class="max-w-full h-auto rounded shadow-lg ring-1 ring-white/10" />
      </div>

      <!-- Colonne Contenu (3/5) -->
      <div class="lg:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col">
        <h2 id="modal-title" class="text-2xl font-bold text-white mb-2">L'Art Auto — Detailing Premium</h2>
        <p class="text-sm text-neutral-400 mb-8">Refonte complète du système d'acquisition web pour un centre de detailing haut de gamme à Beauraing.</p>
        
        <div class="space-y-8 flex-1">
          <!-- Block 1 -->
          <section>
            <h3 class="text-xs font-semibold uppercase tracking-wider text-[#F59E0B] mb-4">Ce que nous avons mis en place</h3>
            <ul class="space-y-3 text-sm text-neutral-300">
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-neutral-500">▶</span>
                <span>Architecture mobile-first orientée exclusivement sur la conversion.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-neutral-500">▶</span>
                <span>Simulateur de devis instantané et réservation directe via WhatsApp.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-neutral-500">▶</span>
                <span>Optimisation technique et sémantique pour le SEO local automobile.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-neutral-500">▶</span>
                <span>Identité visuelle sombre et minimaliste reflétant un positionnement très haut de gamme.</span>
              </li>
            </ul>
          </section>

          <!-- Block 2 -->
          <section>
            <h3 class="text-xs font-semibold uppercase tracking-wider text-[#F59E0B] mb-4">Pourquoi ça convertit</h3>
            <ul class="space-y-3 text-sm text-neutral-300">
              <li class="flex items-start gap-3">
                <svg class="h-5 w-5 shrink-0 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                <span>Fluidité extrême sur smartphone et appels à l'action toujours accessibles au pouce.</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="h-5 w-5 shrink-0 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                <span>Suppression totale des formulaires complexes au profit d'un contact conversationnel instantané.</span>
              </li>
            </ul>
          </section>
        </div>

        <!-- Call to actions -->
        <div class="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button class="flex-1 bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-black font-semibold py-3 px-4 rounded-lg transition-colors text-sm text-center">
            Parler d'un projet similaire
          </button>
          <div class="flex flex-col sm:flex-row gap-2 flex-1">
            <a href="https://lartauto.com" target="_blank" rel="noopener noreferrer" class="flex-1 bg-white/5 hover:bg-white/10 text-white font-medium py-3 px-4 rounded-lg transition-colors border border-white/5 text-sm text-center">
              Visiter le site
            </a>
            <button class="flex-1 bg-transparent hover:bg-white/5 text-neutral-400 hover:text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm text-center">
              Voir une démo
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
```
