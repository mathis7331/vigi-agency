"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  scrollRevealVariants,
  scrollRevealReducedVariants,
  SCROLL_VIEWPORT,
  STAGGER_DELAY,
  type ScrollRevealViewport,
} from "@/lib/motion";

type ScrollRevealProps = React.ComponentProps<typeof motion.div> & {
  viewport?: ScrollRevealViewport;
  delay?: number;
  className?: string;
};

/** GPU-friendly scroll reveal. Uses opacity + translateY only. Respects reduced-motion. */
export const ScrollReveal = memo(function ScrollReveal({
  children,
  viewport = SCROLL_VIEWPORT,
  delay = 0,
  className,
  ...props
}: ScrollRevealProps) {
  const reduced = useReducedMotion();
  const variants = reduced ? scrollRevealReducedVariants : scrollRevealVariants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      transition={
        delay > 0 ? { delay: reduced ? 0 : Math.min(delay, STAGGER_DELAY * 3) } : undefined
      }
      className={cn("[transform:translateZ(0)]", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
});
