"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, GitBranch, CheckCircle, AlertCircle, ArrowUpRight, Phone } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("https://formspree.io/f/xgopqbyg", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _replyto: form.email }),
      });
      if (res.ok) { setFormState("success"); setForm({ name: "", email: "", subject: "", message: "" }); }
      else setFormState("error");
    } catch { setFormState("error"); }
  };

  return (
    <section id="contact" className="bg-surface pt-24 pb-0 px-6 md:px-12 border-t border-on-surface/8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[11px] text-on-surface/25 uppercase tracking-[0.25em]">04</span>
          <div className="h-px w-12 bg-on-surface/8" />
          <span className="text-[11px] text-on-surface/25 uppercase tracking-[0.25em]">Contact</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface leading-tight">
            Travaillons<br />ensemble
          </h2>
          <p className="text-on-surface/35 text-sm max-w-xs leading-relaxed">
            Un projet, une formation, une question ? Écrivez-moi directement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-px bg-on-surface/8">

          {/* Info */}
          <div className="bg-surface py-10 pr-0 md:pr-10 flex flex-col justify-between gap-10">
            <div className="space-y-6">
              {[
                {
                  icon: Mail, label: "Email",
                  value: "bounabinabdallahdrame@gmail.com",
                  href: "mailto:bounabinabdallahdrame@gmail.com",
                },
                {
                  icon: Phone, label: "Téléphone",
                  value: "+221 78 186 02 90",
                  href: "tel:+221781860290",
                },
                { icon: MapPin, label: "Localisation", value: "Dakar, Sénégal", href: null },
                {
                  icon: GitBranch, label: "GitHub",
                  value: "github.com/BounAbdallah",
                  href: "https://github.com/BounAbdallah",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-3 items-start">
                  <div className="w-7 h-7 border border-on-surface/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={12} className="text-on-surface/30" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-on-surface/25 mb-1">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="text-xs text-on-surface/60 hover:text-on-surface transition-colors break-all">
                        {value}
                      </a>
                    ) : (
                      <p className="text-xs text-on-surface/60">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-bg animate-pulse" />
              <p className="text-xs text-on-surface/35 uppercase tracking-[0.15em]">Disponible</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface py-10 pl-0 md:pl-10">
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[300px] flex flex-col items-center justify-center text-center gap-4"
              >
                <CheckCircle size={32} className="text-on-surface/60" />
                <h3 className="text-lg font-semibold text-on-surface">Message envoyé !</h3>
                <p className="text-on-surface/40 text-sm max-w-xs">Je vous répondrai dans les plus brefs délais.</p>
                <button onClick={() => setFormState("idle")}
                  className="mt-2 text-xs text-on-surface/25 hover:text-on-surface/50 transition-colors underline underline-offset-4">
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Nom", type: "text", placeholder: "Votre nom" },
                    { name: "email", label: "Email", type: "email", placeholder: "votre@email.com" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-[10px] uppercase tracking-[0.18em] text-on-surface/25 mb-2">{f.label}</label>
                      <input
                        type={f.type} name={f.name}
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange} required placeholder={f.placeholder}
                        className="w-full bg-transparent border-b border-on-surface/12 pb-2.5 text-sm text-on-surface placeholder-on-surface/20 focus:outline-none focus:border-on-surface/40 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-on-surface/25 mb-2">Sujet</label>
                  <input
                    type="text" name="subject" value={form.subject}
                    onChange={handleChange} required placeholder="Objet de votre demande"
                    className="w-full bg-transparent border-b border-on-surface/12 pb-2.5 text-sm text-on-surface placeholder-on-surface/20 focus:outline-none focus:border-on-surface/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-on-surface/25 mb-2">Message</label>
                  <textarea
                    name="message" value={form.message}
                    onChange={handleChange} required rows={6}
                    placeholder="Décrivez votre projet ou votre demande..."
                    className="w-full bg-transparent border-b border-on-surface/12 pb-2.5 text-sm text-on-surface placeholder-on-surface/20 focus:outline-none focus:border-on-surface/40 transition-colors resize-none"
                  />
                </div>

                {formState === "error" && (
                  <div className="flex items-center gap-2 text-xs text-on-surface/40">
                    <AlertCircle size={12} />
                    Erreur. Écrivez directement à bounabinabdallahdrame@gmail.com
                  </div>
                )}

                <button type="submit" disabled={formState === "loading"}
                  className="self-start flex items-center gap-2.5 px-7 py-3 bg-accent-bg text-on-accent text-sm font-medium hover:bg-accent-bg/90 transition-colors duration-200 disabled:opacity-40">
                  {formState === "loading" ? (
                    <><div className="w-3.5 h-3.5 border-2 border-on-accent/30 border-t-on-accent rounded-full animate-spin" />Envoi...</>
                  ) : (
                    <>Envoyer<Send size={13} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-px bg-on-surface/[0.015] border-t border-on-surface/8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-on-surface/20 uppercase tracking-[0.15em]">
          <span>© {new Date().getFullYear()} Bouna Bin Abdallah Dramé</span>
          <div className="flex items-center gap-6">
            <a href="https://github.com/BounAbdallah" target="_blank" rel="noopener noreferrer"
              className="hover:text-on-surface/50 transition-colors flex items-center gap-1">
              GitHub <ArrowUpRight size={10} />
            </a>
            <a href="https://noorwebservices.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-on-surface/50 transition-colors flex items-center gap-1">
              Noor Web Services <ArrowUpRight size={10} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
