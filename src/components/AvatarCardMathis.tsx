"use client";

import { motion } from "framer-motion";

/**
 * Avatar Card "VIGI Agency - Mathis"
 * Carte minimaliste : nom animé + tag agence (sans image).
 */
export function AvatarCardMathis() {
  return (
    <div
      className="card-mathis w-full max-w-[300px]"
      style={{
        backgroundColor: "#111111",
        border: "1px solid #1A1A1A",
        borderRadius: "16px",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <motion.p
        className="name-mathis font-heading text-3xl font-extrabold capitalize sm:text-4xl"
        style={{
          color: "#F59E0B",
          textShadow: "0 0 24px rgba(245, 158, 11, 0.35)",
        }}
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        Mathis
      </motion.p>
      <motion.p
        className="agency-tag mt-2 text-xs font-medium uppercase tracking-[0.2em]"
        style={{ color: "#A0A0A0" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        VIGI AGENCY
      </motion.p>
    </div>
  );
}
