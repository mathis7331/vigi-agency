/**
 * Mobile-optimized scroll-reveal animation config.
 * Uses transform + opacity only for 60fps on mobile.
 */

export const SCROLL_VIEWPORT = {
  once: true,
  margin: "-80px",
} as const;

export const SCROLL_VIEWPORT_TIGHT = {
  once: true,
  margin: "-60px",
} as const;

/** Lightweight variants: opacity + translateY only (GPU-friendly) */
export const scrollRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} as const;

/** For reduced motion: opacity only, instant */
export const scrollRevealReducedVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.15 },
  },
} as const;

/** Stagger config: smaller values to limit simultaneous animations */
export const STAGGER_DELAY = 0.05;
export const STAGGER_DELAY_MOBILE = 0.03;

export type ScrollRevealViewport = {
  once?: boolean;
  margin?: string;
};
