"use client";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { Code2, Globe, Smartphone, Database } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  "React / Next.js", "TypeScript", "Python / Django",
  "Laravel / PHP", "Vue.js", "React Native",
  "PostgreSQL", "Node.js", "Docker",
];

const techStack = [
  { icon: Globe, label: "Web Frontend", items: "React, Next.js, Vue.js, TypeScript, Tailwind CSS" },
  { icon: Smartphone, label: "Mobile", items: "React Native, Expo" },
  { icon: Database, label: "Backend", items: "Python/Django, Laravel/PHP, Node.js, REST API" },
  { icon: Code2, label: "Outils", items: "Git, Docker, VS Code, Figma" },
];

function AboutContent() {
  return (
    <div className="max-w-6xl mx-auto w-full">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-10">
        <span className="text-[11px] text-on-surface/25 uppercase tracking-[0.25em]">01</span>
        <div className="h-px w-12 bg-on-surface/8" />
        <span className="text-[11px] text-on-surface/25 uppercase tracking-[0.25em]">À propos</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left — intro text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface leading-tight mb-6">
            Développeur passionné,<br />
            <span className="text-on-surface/30">basé à Dakar</span>
          </h2>
          <p className="text-on-surface/45 text-sm leading-relaxed mb-6">
            Je suis Bouna Bin Abdallah Dramé, développeur web et mobile full-stack
            chez Noor Web Services. Je conçois et développe des applications modernes —
            du frontend réactif aux backends robustes, en passant par les apps mobiles
            cross-platform.
          </p>
          <p className="text-on-surface/35 text-sm leading-relaxed">
            Avec plus de 100 projets au compteur et une expérience sur des produits
            en production (MySchool221, Banabana.sn, YakiMall…), je transforme les
            idées en expériences digitales concrètes.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 text-center border-t border-on-surface/8 pt-8">
            {[
              { val: "100+", label: "Projets" },
              { val: "3+", label: "Années" },
              { val: "∞", label: "Passion" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-on-surface">{s.val}</p>
                <p className="text-[10px] text-on-surface/25 mt-1 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — skills + stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-8"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface/25 mb-4">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 border border-on-surface/12 text-xs text-on-surface/60 hover:border-on-surface/35 hover:text-on-surface/90 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface/25 mb-4">Stack</p>
            <div className="space-y-3">
              {techStack.map((tech) => (
                <div key={tech.label} className="flex gap-3 items-start">
                  <div className="w-7 h-7 border border-on-surface/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <tech.icon size={12} className="text-on-surface/35" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-on-surface/80">{tech.label}</p>
                    <p className="text-[11px] text-on-surface/35 mt-0.5 leading-relaxed">{tech.items}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-surface border-t border-on-surface/8">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/about-video.mp4"
        posterSrc="/photo.jpg"
        bgImageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80&auto=format&fit=crop"
        title="À propos"
        scrollToExpand="Défiler pour découvrir"
        textBlend={false}
      >
        <AboutContent />
      </ScrollExpandMedia>
    </section>
  );
}
