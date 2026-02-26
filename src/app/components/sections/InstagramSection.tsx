import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export function InstagramSection() {
    return (
        <section className="relative overflow-hidden bg-[#0B0D12] py-32 flex flex-col items-center justify-center text-center px-4">
            {/* Super subtle top border to separate gracefully without being loud */}
            <div className="absolute inset-x-0 top-0 h-px bg-white/5" />

            <div className="flex flex-col items-center max-w-lg z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center w-full"
                >
                    <div className="mb-8 rounded-2xl bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584] p-3 shadow-lg">
                        <Instagram className="h-8 w-8 text-white stroke-[2]" />
                    </div>

                    <h2 className="font-heading text-2xl font-medium tracking-tight text-white sm:text-3xl">
                        Exécution visible.
                    </h2>

                    <p className="mt-4 text-sm text-[var(--text-2)]">
                        Les coulisses et résultats de nos interventions, sans filtre.
                    </p>
                </motion.div>

                <motion.a
                    href="https://www.instagram.com/vigi.agency/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    className="group mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-all duration-200 ease-out hover:-translate-y-[2px] hover:border-[#F59E0B]/10 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)] active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D12]"
                    aria-label="Accéder au portfolio live sur Instagram"
                >
                    <span className="text-[var(--text-2)] transition-colors group-hover:text-white">@vigi.agency</span>
                    <span className="h-4 w-px bg-white/10" aria-hidden="true" />
                    <span>Accéder au portfolio live</span>
                </motion.a>
            </div>
        </section>
    );
}
