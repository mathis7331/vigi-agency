"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function ProofSection() {
  const [slider, setSlider] = useState(50);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;

    let direction: 1 | -1 = 1;
    let frame: number;
    let lastTime: number | null = null;

    const duration = 14000;

    const animate = (time: number) => {
      if (lastTime === null) {
        lastTime = time;
      }
      const delta = time - lastTime;
      lastTime = time;

      setSlider((current) => {
        const deltaPercent = (delta / duration) * 100 * direction;
        let next = current + deltaPercent;
        if (next >= 100) {
          next = 100;
          direction = -1;
        } else if (next <= 0) {
          next = 0;
          direction = 1;
        }
        return next;
      });

      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [auto]);

  const handleMove = (clientX: number, rect: DOMRect) => {
    if (!rect || rect.width <= 0) return;
    const x = clientX - rect.left;
    const next = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSlider(next);
  };

  const getContainerRect = (handleElement: HTMLDivElement) =>
    handleElement.parentElement?.getBoundingClientRect() ?? new DOMRect(0, 0, 1, 1);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = getContainerRect(e.currentTarget);
    handleMove(e.clientX, rect);
    setAuto(false);

    const move = (ev: MouseEvent) => handleMove(ev.clientX, rect);
    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = getContainerRect(e.currentTarget);
    handleMove(e.touches[0]?.clientX ?? 0, rect);
    setAuto(false);

    const move = (ev: TouchEvent) => handleMove(ev.touches[0]?.clientX ?? 0, rect);
    const end = () => {
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend", end);
      document.removeEventListener("touchcancel", end);
    };
    document.addEventListener("touchmove", move);
    document.addEventListener("touchend", end);
    document.addEventListener("touchcancel", end);
  };

  return (
    <section className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 overflow-x-hidden">
      <div className="mx-auto max-w-6xl w-full min-w-0">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
        >
          Avant / Après — exemple de résultat
        </motion.h2>
        <p className="mt-3 text-sm text-[var(--text-2)]">
          Photos atelier — accueil, pont, zone pneus (exemples)
        </p>

        <div className="mt-8">
          <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_18px_55px_rgba(0,0,0,0.75)]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/bmwavant.png"
                alt="Avant intervention (exemple de démonstration)"
                fill
                className="object-cover"
                priority
              />
              <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-[var(--bg)] px-3 py-1 text-xs font-medium text-[var(--text)]">
                AVANT
              </div>

              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}
              >
                <Image
                  src="/bmwapres.png"
                  alt="Après intervention (exemple de démonstration)"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-[var(--bg)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
                  APRÈS
                </div>
              </div>

              <div
                className="absolute inset-y-0 w-0.5 cursor-ew-resize bg-[var(--accent)]"
                style={{ left: `${slider}%` }}
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
              >
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-[var(--bg)] px-2 py-1 text-[10px] font-medium text-[var(--text)] shadow-lg">
                  <span>⇆</span>
                  <span>Glisser</span>
                </div>
              </div>
            </div>
            <p className="px-4 py-3 text-xs text-[var(--text-2)]">
              Exemples de retours clients (démonstration).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
