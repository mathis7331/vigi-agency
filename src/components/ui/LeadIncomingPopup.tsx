"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Phone, X } from "lucide-react";

const DISMISS_KEY = "lead_popup_dismissed";
const SHOW_DELAY_MS = 8000;
const AUTO_HIDE_MS = 7000;

export function LeadIncomingPopup() {
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    try {
      return window.sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [isPaused, setIsPaused] = useState(false);

  const showTimerRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);
  const hideDeadlineRef = useRef<number | null>(null);
  const remainingRef = useRef<number>(AUTO_HIDE_MS);

  useEffect(() => {
    if (typeof window === "undefined" || isDismissed) return;

    showTimerRef.current = window.setTimeout(() => {
      setIsVisible(true);
    }, SHOW_DELAY_MS);

    return () => {
      if (showTimerRef.current) window.clearTimeout(showTimerRef.current);
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
    };
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed || !isVisible || isPaused) return;

    const remaining = remainingRef.current;
    hideDeadlineRef.current = Date.now() + remaining;
    hideTimerRef.current = window.setTimeout(() => {
      setIsVisible(false);
      remainingRef.current = AUTO_HIDE_MS;
    }, remaining);

    return () => {
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
    };
  }, [isDismissed, isVisible, isPaused]);

  const pauseAutoHide = () => {
    setIsPaused(true);
    if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);

    if (hideDeadlineRef.current) {
      remainingRef.current = Math.max(0, hideDeadlineRef.current - Date.now());
    }
  };

  const resumeAutoHide = () => {
    setIsPaused(false);
    if (remainingRef.current <= 0) {
      setIsVisible(false);
      remainingRef.current = AUTO_HIDE_MS;
    }
  };

  const dismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);

    try {
      window.sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Ignore storage errors.
    }
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          role="status"
          aria-live="polite"
          aria-atomic="true"
          aria-label="Notification appel entrant — Client potentiel"
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: reducedMotion ? 0.12 : 0.28, ease: "easeOut" }}
          onMouseEnter={pauseAutoHide}
          onMouseLeave={resumeAutoHide}
          onFocusCapture={pauseAutoHide}
          onBlurCapture={resumeAutoHide}
          onTouchStart={pauseAutoHide}
          onTouchEnd={resumeAutoHide}
          className="fixed top-[calc(env(safe-area-inset-top)+4rem+12px)] left-1/2 -translate-x-1/2 z-[70] w-[min(90vw,320px)]"
        >
          <div className="relative overflow-hidden rounded-2xl border border-amber-400/20 bg-[#0B0F14]/95 p-3.5 pr-11 shadow-[0_16px_48px_rgba(0,0,0,0.55)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_45%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),transparent_40%)]" />

            <div className="relative flex items-start gap-3">
              <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-400/10 text-emerald-300">
                <Phone className="h-4 w-4" strokeWidth={2.2} />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-300">Appel entrant</p>
                <p className="mt-0.5 text-sm font-semibold leading-tight text-white">Client potentiel</p>
                <p className="mt-0.5 text-xs text-slate-400">Depuis votre site web</p>
              </div>
            </div>

            <button
              type="button"
              onClick={dismiss}
              className="absolute right-2.5 top-2.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              aria-label="Fermer la notification"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
