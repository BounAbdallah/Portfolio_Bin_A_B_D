"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-surface/95 backdrop-blur-md border-b border-on-surface/8" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-7 h-7 border border-on-surface/40 flex items-center justify-center group-hover:border-on-surface transition-colors duration-200">
            <span className="text-[10px] font-bold text-on-surface leading-none">B</span>
          </div>
          <span className="text-on-surface/70 font-light text-sm tracking-[0.2em] uppercase group-hover:text-on-surface transition-colors duration-200">
            BounAbdallah
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.15em] text-on-surface/40 hover:text-on-surface transition-colors duration-200 link-underline"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-7 h-7 border border-on-surface/20 flex items-center justify-center hover:border-on-surface/50 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun size={13} className="text-on-surface/60" /> : <Moon size={13} className="text-on-surface/60" />)}
          </button>
          <a
            href="#contact"
            className="text-[11px] uppercase tracking-[0.15em] text-on-accent bg-accent-bg px-4 py-1.5 hover:bg-accent-bg/90 transition-colors duration-200"
          >
            Recruter
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-7 h-7 border border-on-surface/20 flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun size={13} className="text-on-surface/60" /> : <Moon size={13} className="text-on-surface/60" />)}
          </button>
          <button
            className="text-on-surface/60 hover:text-on-surface transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-on-surface/8 px-6 py-6 flex flex-col gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-on-surface/50 hover:text-on-surface transition-colors tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
