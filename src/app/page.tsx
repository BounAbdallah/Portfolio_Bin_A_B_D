import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import SplineHero from "@/components/sections/SplineHero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import VisitCounter from "@/components/VisitCounter";

export default function Home() {
  return (
    <main className="bg-surface">
      <Navbar />
      <Hero />
      <SplineHero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <VisitCounter />
    </main>
  );
}
