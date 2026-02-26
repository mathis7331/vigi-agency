"use client";

import { useEffect, useRef, useState, useCallback, memo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SCROLL_VIEWPORT } from "@/lib/motion";

const OVERLAY_FALLBACK_MS = 5000;
const EASE_CINE = [0.25, 0.1, 0.25, 1] as const;

function ScanLine() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div
        className="absolute left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.35) 30%, rgba(245,158,11,0.5) 50%, rgba(245,158,11,0.35) 70%, transparent 100%)",
          animation: "cinematic-scan 3.5s ease-in-out infinite",
        }}
      />
    </div>
  );
}

export const CinematicVideoSection = memo(function CinematicVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const pausedByViewport = useRef(false);
  const reduced = useReducedMotion();

  const hideOverlay = useCallback(() => setShowOverlay(false), []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      pausedByViewport.current = false;
      video.play().catch(() => {});
    } else {
      pausedByViewport.current = true;
      video.pause();
    }
  }, [isVisible]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlaying = () => setShowOverlay(false);
    const onWaiting = () => {
      if (!pausedByViewport.current) setShowOverlay(true);
    };

    video.addEventListener("playing", onPlaying);
    video.addEventListener("waiting", onWaiting);

    return () => {
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("waiting", onWaiting);
    };
  }, []);

  useEffect(() => {
    if (!showOverlay) return;
    const timer = setTimeout(hideOverlay, OVERLAY_FALLBACK_MS);
    return () => clearTimeout(timer);
  }, [showOverlay, hideOverlay]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-[var(--border)]"
      style={{ background: "linear-gradient(180deg, var(--bg) 0%, #0B0D12 8%, #0B0D12 92%, var(--bg) 100%)" }}
      aria-label="Vidéo de présentation VIGI AGENCY"
    >
      <style>{`
        @keyframes cinematic-scan {
          0% { top: 15%; opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { top: 85%; opacity: 0; }
        }
        @keyframes cinematic-ring {
          0% { stroke-dashoffset: 44; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>

      <div className="mx-auto max-w-6xl w-full min-w-0 px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-10 lg:py-28">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: reduced ? 0.5 : 0.4 }}
          viewport={SCROLL_VIEWPORT}
          transition={{ duration: reduced ? 0.15 : 0.5 }}
          className="mb-8 text-center text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--text-2)] sm:mb-10 sm:text-xs lg:mb-12"
        >
          VIGI AGENCY — Exécution orientée résultats
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={SCROLL_VIEWPORT}
          transition={{ duration: reduced ? 0.2 : 0.7, ease: EASE_CINE }}
          className="cinematic-video-wrapper group/video relative mx-auto overflow-hidden rounded-2xl lg:rounded-3xl"
          style={{
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px -20px rgba(0,0,0,0.7), 0 0 60px -10px rgba(245,158,11,0.08)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-video w-full [transform:translateZ(0)]">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              className="h-full w-full object-cover"
            >
              <source src="/videoagency.mp4" type="video/mp4" />
            </video>

            {/* Vignette */}
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 50%, rgba(11,13,18,0.4) 100%)",
              }}
            />

            {/* "Lecture en cours" overlay */}
            <AnimatePresence>
              {showOverlay && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    filter: reduced ? undefined : "blur(4px)",
                    transition: { duration: reduced ? 0.12 : 0.45, ease: EASE_CINE },
                  }}
                  transition={{ duration: 0.3, ease: EASE_CINE }}
                  className="pointer-events-none absolute inset-0 z-10"
                >
                  <ScanLine />

                  <div className="absolute bottom-4 left-4 flex items-center gap-2.5 sm:bottom-5 sm:left-5 lg:bottom-6 lg:left-6">
                    <div
                      className="flex items-center gap-2 rounded-full px-3 py-1.5"
                      style={{
                        background: "rgba(11,13,18,0.55)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {/* Ring loader */}
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                        <circle
                          cx="8"
                          cy="8"
                          r="7"
                          stroke="#F59E0B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeDasharray="44"
                          strokeDashoffset="44"
                          style={{
                            animation: "cinematic-ring 2.5s ease-in-out infinite",
                            transformOrigin: "center",
                          }}
                        />
                      </svg>

                      <span className="text-[10px] font-medium tracking-wider text-white/50 sm:text-[11px]">
                        Séquence en cours…
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop hover affordance */}
            <AnimatePresence>
              {isHovered && !showOverlay && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE_CINE }}
                  className="pointer-events-none absolute bottom-4 right-4 z-10 hidden lg:block sm:bottom-5 sm:right-5 lg:bottom-6 lg:right-6"
                >
                  <span
                    className="rounded-full px-3 py-1.5 text-[10px] font-medium tracking-wider text-white/40"
                    style={{
                      background: "rgba(11,13,18,0.45)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    Aperçu vidéo
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
