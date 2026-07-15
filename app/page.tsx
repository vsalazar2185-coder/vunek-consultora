import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MethodSection } from "@/components/MethodSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SectorsSection } from "@/components/SectorsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ValueProposition } from "@/components/ValueProposition";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <ProblemSection />
        <ValueProposition />
        <MethodSection />
        <AboutSection />
        <ServicesSection />
        <SolutionsSection />
        <SectorsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
