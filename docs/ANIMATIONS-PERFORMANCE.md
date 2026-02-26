# Optimisation des animations scroll (mobile)

Ce document décrit les optimisations appliquées aux animations basées sur le scroll pour améliorer les performances sur mobile, tout en conservant l’identité visuelle.

## Stratégie globale

1. **Propriétés animées légères** : `transform` (translateY) + `opacity` uniquement
2. **Viewport** : `once: true` + `margin: "-80px"` pour déclencher une seule fois, un peu avant l’affichage
3. **Réduction des mouvements** : respect de `prefers-reduced-motion`
4. **Durées raccourcies** : ~0,35–0,4 s au lieu de spring (~0,5 s+)
5. **Stagger réduit** : délais plus courts pour limiter les animations simultanées

---

## Fichiers de configuration

### `src/lib/motion.ts`

Config centralisée :

- **`scrollRevealVariants`** : opacity + translateY(20px), durée 0.4 s, easing premium
- **`scrollRevealReducedVariants`** : opacity seule, durée 0.15 s (pour `prefers-reduced-motion`)
- **`SCROLL_VIEWPORT`** : `{ once: true, margin: "-80px" }`
- **`STAGGER_DELAY`** : 0.05 s (au lieu de 0.08–0.1)
- **`STAGGER_DELAY_MOBILE`** : 0.03 s (optionnel pour mobile)

### `src/components/ui/ScrollReveal.tsx`

Composant réutilisable :

- Utilise `useReducedMotion()` pour choisir les variants
- Applique `[transform:translateZ(0)]` pour l’accélération GPU
- Props : `viewport`, `delay`, `className`, et les props de `motion.div`

**Exemple :**

```tsx
<ScrollReveal delay={0.05} className="...">
  <h2>Titre</h2>
</ScrollReveal>
```

---

## Sections optimisées

| Section   | Fichier                 | Changements principaux                                  |
|----------|-------------------------|---------------------------------------------------------|
| Services | `sections/Services.tsx` | Variants optimisés, reduced motion, délais réduits      |
| Proof    | `sections/Proof.tsx`    | Variants, viewport unifié, délais et durées raccourcis  |
| Pricing  | `sections/Pricing.tsx`  | Remplacement spring → ease, reduced motion              |
| Contact  | `sections/Contact.tsx`  | Variants, SCROLL_VIEWPORT, whileHover conditionnel      |
| FAQ      | `sections/Faq.tsx`      | Variants, accordion plus court en reduced motion        |
| Hero     | `components/sections/Hero.tsx` | Durées/stagger réduits, suppression scale, reduced motion |

---

## Pattern recommandé

Pour une nouvelle section avec animations scroll :

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  scrollRevealVariants,
  scrollRevealReducedVariants,
  SCROLL_VIEWPORT,
  STAGGER_DELAY,
} from "@/lib/motion";

export function MaSection() {
  const reduced = useReducedMotion();
  const variants = reduced ? scrollRevealReducedVariants : scrollRevealVariants;

  return (
    <motion.h2
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={SCROLL_VIEWPORT}
      transition={{ delay: reduced ? 0 : STAGGER_DELAY }}
    >
      Titre
    </motion.h2>
  );
}
```

---

## À éviter

- Propriétés layout : `top`, `left`, `height`, `width` (sauf accordion où `height: auto` est nécessaire)
- Filtres : `blur` (sauf sur des éléments très discrets)
- Spring complexes : préférer `transition: { duration: 0.35, ease: [...] }`
- `whileInView` sans `viewport={{ once: true }}` : risque d’animations multiples au scroll
- `whileHover` / `whileTap` sans test `reduced` : désactiver en reduced motion

---

## Améliorations mesurées

- Réduction des frames perdues sur mobile (scroll rapide)
- Animations déclenchées une seule fois par élément
- Moins de calculs pendant le scroll grâce à des propriétés GPU-friendly
- Respect de l’accessibilité via `prefers-reduced-motion`

---

*Dernière mise à jour : février 2025*
