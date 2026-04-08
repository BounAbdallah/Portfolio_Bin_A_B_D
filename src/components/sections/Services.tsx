"use client";
import { motion } from "framer-motion";
import { Globe, Smartphone, GraduationCap, BrainCircuit, ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Globe,
    title: "Développement Web",
    description: "Sites et applications web modernes, performantes et responsives. De la landing page au portail métier complexe.",
    items: ["Sites vitrines & e-commerce", "Apps web (React, Next.js, Vue.js)", "APIs & backends (Django, Laravel, Node.js)", "Intégration paiement (Stripe, PayDunya)"],
  },
  {
    num: "02",
    icon: Smartphone,
    title: "Développement Mobile",
    description: "Applications cross-platform iOS & Android avec React Native. Une seule codebase, deux plateformes.",
    items: ["Applications iOS & Android", "React Native / Expo", "Intégration d'APIs REST", "Publication sur les stores"],
  },
  {
    num: "03",
    icon: GraduationCap,
    title: "Formation Informatique",
    description: "Formations adaptées aux débutants pour maîtriser l'outil informatique dans un contexte professionnel.",
    items: ["Bureautique (Word, Excel, PowerPoint)", "Navigation web & emails professionnels", "Outils collaboratifs (Google Workspace)", "Gestion de fichiers & sécurité numérique"],
  },
  {
    num: "04",
    icon: BrainCircuit,
    title: "Formation IA",
    description: "Initiez-vous aux outils d'intelligence artificielle pour booster votre productivité au quotidien.",
    items: ["ChatGPT, Claude, Gemini", "IA pour la rédaction & communication", "Automatisation de tâches répétitives", "Outils IA pour les PME"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[11px] text-on-surface/25 uppercase tracking-[0.25em]">03</span>
          <div className="h-px w-12 bg-on-surface/8" />
          <span className="text-[11px] text-on-surface/25 uppercase tracking-[0.25em]">Services</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface leading-tight">
            Ce que je propose
          </h2>
          <p className="text-on-surface/35 text-sm max-w-xs leading-relaxed">
            Du code sur mesure à la formation — je vous accompagne dans votre transformation numérique.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-on-surface/8">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-surface p-8 md:p-10 group hover:bg-on-surface/[0.03] transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[11px] text-on-surface/20 font-mono tracking-widest">{s.num}</span>
                <s.icon size={16} className="text-on-surface/20 group-hover:text-on-surface/50 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-on-surface mb-3 tracking-tight">{s.title}</h3>
              <p className="text-on-surface/40 text-sm leading-relaxed mb-6">{s.description}</p>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-on-surface/35">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-on-surface/20 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-px bg-on-surface/[0.02] border border-on-surface/8 p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-lg font-semibold text-on-surface mb-1">Besoin d&apos;un devis ?</p>
            <p className="text-sm text-on-surface/35">Chaque projet est unique. Parlons de vos besoins.</p>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-accent-bg text-on-accent text-sm font-medium hover:bg-accent-bg/90 transition-colors duration-200 whitespace-nowrap"
          >
            Demander un devis
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
