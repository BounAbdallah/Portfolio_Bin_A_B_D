"use client";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import {
  Building2,
  Users,
  ShoppingCart,
  GraduationCap,
  Globe,
  BarChart2,
  Briefcase,
  Layers,
} from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Noor Immo",
    date: "Noor Web Services",
    content: "Application complète de gestion immobilière — gestion des biens, locataires, contrats de bail, paiements de loyers et suivi des interventions. Interface admin React et API Laravel.",
    category: "Entreprise",
    icon: Building2,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 98,
  },
  {
    id: 2,
    title: "Noor CRM",
    date: "Noor Web Services",
    content: "CRM interne développé pour Noor Web Services. Gestion des clients, du pipeline commercial, des devis, des projets et du suivi des paiements. Stack React + Node.js.",
    category: "Entreprise",
    icon: Users,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "MySchool221",
    date: "myschool221.com",
    content: "Plateforme SaaS de gestion scolaire en production. Gestion des élèves, notes, absences, bulletins, communication école-parents et paiements des frais scolaires.",
    category: "SaaS",
    icon: GraduationCap,
    relatedIds: [1, 4],
    status: "in-progress" as const,
    energy: 92,
  },
  {
    id: 4,
    title: "Banabana.sn",
    date: "banabana.sn",
    content: "Marketplace sénégalaise mettant en relation acheteurs et vendeurs locaux. Catalogue produits, gestion des commandes, paiements intégrés et tableau de bord vendeurs.",
    category: "E-commerce",
    icon: ShoppingCart,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 5,
    title: "YakiMall",
    date: "yakimall.com",
    content: "Plateforme e-commerce multi-vendeurs en production. Gestion de catalogue, panier, paiements en ligne, livraison et espace vendeur avec analytics.",
    category: "E-commerce",
    icon: Globe,
    relatedIds: [4, 6],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 6,
    title: "Simplon Insertion Pro",
    date: "Simplon Sénégal",
    content: "Plateforme de suivi d'insertion professionnelle pour les apprenants. Facilite le suivi des parcours, le partage d'opportunités (emplois/stages) et la mise en relation candidats-entreprises.",
    category: "Plateforme",
    icon: Briefcase,
    relatedIds: [5, 7],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 7,
    title: "Noor WorkOS",
    date: "Noor Web Services",
    content: "Plateforme de gestion d'entreprise (ERP) centralisée, conçue pour optimiser les opérations internes, la gestion de projets et le suivi des ressources humaines. Stack React et Laravel.",
    category: "ERP",
    icon: BarChart2,
    relatedIds: [6, 8],
    status: "completed" as const,
    energy: 82,
  },
  {
    id: 8,
    title: "Tontines App",
    date: "Projet personnel",
    content: "Application de gestion de tontines traditionnelles. Gestion des membres, cotisations, cycles de paiement et historique des transactions. Stack TypeScript + Vue.js.",
    category: "Web",
    icon: Layers,
    relatedIds: [7, 1],
    status: "completed" as const,
    energy: 78,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-surface border-t border-on-surface/8">
      <div className="pt-20 pb-2 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[11px] text-on-surface/25 uppercase tracking-[0.25em]">02</span>
          <div className="h-px w-12 bg-on-surface/8" />
          <span className="text-[11px] text-on-surface/25 uppercase tracking-[0.25em]">Projets</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface leading-tight">Mes Projets</h2>
          <p className="text-on-surface/35 text-sm max-w-xs leading-relaxed">
            Cliquez sur un nœud pour explorer les détails
          </p>
        </div>
      </div>
      <RadialOrbitalTimeline timelineData={projectsData} />
    </section>
  );
}
