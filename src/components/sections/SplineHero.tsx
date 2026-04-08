'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import { Code2, Smartphone, GraduationCap } from "lucide-react"

const highlights = [
  { icon: Code2, label: "Web & Mobile", desc: "Applications modernes sur mesure" },
  { icon: Smartphone, label: "React Native", desc: "iOS & Android cross-platform" },
  { icon: GraduationCap, label: "Formation", desc: "Bureautique, IA & informatique" },
]

export default function SplineHero() {
  return (
    <section className="bg-surface border-t border-on-surface/8 overflow-hidden">
      <div className="relative w-full h-[520px] md:h-[560px]">
        <Spotlight
          className="-top-40 left-0 md:left-40 md:-top-20"
          fill="white"
        />

        <div className="flex h-full">
          {/* Left — text content */}
          <div className="flex-1 p-8 md:p-14 relative z-10 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] uppercase tracking-[0.25em] text-on-surface/25 mb-5"
            >
              Développeur full-stack
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-on-surface leading-tight mb-4"
            >
              Du concept
              <br />
              <span className="text-on-surface/35">au produit final</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm text-on-surface/40 leading-relaxed max-w-xs mb-8"
            >
              Je transforme vos idées en expériences digitales concrètes —
              interfaces soignées, backends solides, déploiements réussis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3"
            >
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-7 h-7 border border-on-surface/12 flex items-center justify-center flex-shrink-0">
                    <Icon size={12} className="text-on-surface/35" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-on-surface/70">{label}</span>
                    <span className="text-xs text-on-surface/30 ml-2">{desc}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — 3D Spline scene */}
          <div className="flex-1 relative hidden md:block">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
            {/* Edge fade */}
            <div className="absolute inset-y-0 left-0 w-20 bg-surface/50 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
