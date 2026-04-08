"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { ArrowDownRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col bg-surface overflow-hidden">
      {/* Particles — subtle */}
      <div className="w-full absolute inset-0 h-full opacity-60">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.3}
          maxSize={0.9}
          particleDensity={50}
          className="w-full h-full"
          particleColor={mounted && theme === "light" ? "#000000" : "#FFFFFF"}
          speed={1.5}
        />
      </div>

      {/* Top bar */}
      <div className="relative z-10 border-b border-on-surface/8 px-6 md:px-12 h-16 flex items-center justify-between mt-16">
        <motion.span {...fadeUp(0.1)} className="text-[11px] uppercase tracking-[0.2em] text-on-surface/30">
          Portfolio 2026
        </motion.span>
        <motion.div {...fadeUp(0.1)} className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-bg animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.15em] text-on-surface/40">Disponible</span>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 py-16 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-end">
          <div>
            {/* Label */}
            <motion.p {...fadeUp(0.2)} className="text-[11px] uppercase tracking-[0.25em] text-on-surface/30 mb-6">
              Développeur Web & Mobile · Dakar, Sénégal
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[13vw] md:text-[8rem] lg:text-[10rem] font-bold text-on-surface leading-[0.88] tracking-tight"
            >
              Bouna
              <br />
              <span className="text-on-surface/25">Bin Abdallah</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p {...fadeUp(0.5)} className="mt-8 text-base md:text-lg text-on-surface/45 font-light max-w-md leading-relaxed">
              Je conçois et développe des applications web & mobiles modernes pour
              les entreprises — de l'idée à la mise en ligne.
            </motion.p>
          </div>

          {/* Photo + info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col items-center md:items-end gap-6"
          >
            <div className="w-36 h-44 md:w-44 md:h-56 overflow-hidden border border-on-surface/15">
              <img
                src="/photo.jpg"
                alt="Bouna Bin Abdallah Dramé"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://avatars.githubusercontent.com/u/99214329?v=4";
                }}
              />
            </div>
            <div className="flex items-center gap-2 text-on-surface/30 text-xs">
              <MapPin size={12} />
              <span>Dakar, Sénégal</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-14 pt-8 border-t border-on-surface/8 flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-accent-bg text-on-accent text-sm font-medium tracking-wide hover:bg-accent-bg/90 transition-colors duration-200"
            >
              Voir les projets
              <ArrowDownRight size={15} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 border border-on-surface/20 text-on-surface text-sm font-light tracking-wide hover:border-on-surface/50 transition-colors duration-200"
            >
              Me contacter
            </a>
          </div>

          <div className="flex items-center gap-8 text-[11px] text-on-surface/25 uppercase tracking-widest">
            <a
              href="https://github.com/BounAbdallah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-on-surface/60 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://noorwebservices.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-on-surface/60 transition-colors"
            >
              Noor Web Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 pb-6 flex justify-center"
      >
        <div className="w-px h-10 bg-on-surface/15" />
      </motion.div>
    </section>
  );
}
