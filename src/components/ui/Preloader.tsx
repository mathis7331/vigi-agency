"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [show, setShow] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Lock scroll
        document.body.style.overflow = "hidden";

        // Counter animation
        const duration = 2000; // 2s
        const steps = 60;
        const intervalTime = duration / steps;

        const counterInterval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(counterInterval);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 5) + 1; // Random increment
            });
        }, intervalTime);

        // Ensure it hits 100 right before finishing
        const finishTimer = setTimeout(() => {
            setCount(100);
        }, 1800);

        // Dismiss timer
        const dismissTimer = setTimeout(() => {
            setShow(false);
            document.body.style.overflow = "auto";
        }, 2400);

        return () => {
            clearInterval(counterInterval);
            clearTimeout(finishTimer);
            clearTimeout(dismissTimer);
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {show && (
                <motion.div
                    key="preloader"
                    className="!fixed !inset-0 !z-[99999] flex flex-col items-center justify-center bg-[#050505] text-white"
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: {
                            duration: 0.9,
                            ease: [0.76, 0, 0.24, 1], // fluid slide up
                        },
                    }}
                >
                    {/* Subtle noise/grain overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.png')] mix-blend-overlay" />

                    {/* Main Content Container */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ y: 200, opacity: 0, transition: { duration: 0.8 } }} // Parallax effect on exit
                        className="relative z-10 flex flex-col items-center"
                    >
                        {/* VIGI AGENCY Text */}
                        <motion.h1
                            initial={{ opacity: 0, filter: "blur(20px)", letterSpacing: "0.5em" }}
                            animate={{
                                opacity: 1,
                                filter: "blur(0px)",
                                letterSpacing: "-0.02em",
                                transition: { duration: 1.4, ease: "easeOut" }
                            }}
                            className="font-heading text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50"
                        >
                            VIGI AGENCY
                        </motion.h1>

                        {/* Subtext with separators */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="mt-6 flex items-center gap-4 text-[10px] sm:text-xs font-medium tracking-[0.2em] text-white/40 uppercase"
                        >
                            <div className="h-[1px] w-8 bg-white/20" />
                            <span>Digital Automotive Experience</span>
                            <div className="h-[1px] w-8 bg-white/20" />
                        </motion.div>

                        {/* Counter & Progress */}
                        <div className="mt-12 flex flex-col items-center gap-2">
                            <span className="font-mono text-4xl font-light text-white tabular-nums tracking-widest">
                                {Math.min(count, 100).toString().padStart(2, '0')}
                            </span>

                            {/* Thin progress line */}
                            <div className="h-[1px] w-24 bg-white/10 overflow-hidden relative">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "0%" }}
                                    transition={{ duration: 1.8, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-[#DC2626]"
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
