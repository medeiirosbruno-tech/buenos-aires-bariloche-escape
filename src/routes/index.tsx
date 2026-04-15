import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/HeroSection";
import IncludedSection from "@/components/IncludedSection";
import BuenosAiresSection from "@/components/BuenosAiresSection";
import BarilocheSection from "@/components/BarilocheSection";
import HotelSection from "@/components/HotelSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ExperienceSection from "@/components/ExperienceSection";
import CtaFinalSection from "@/components/CtaFinalSection";
import FooterSection from "@/components/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bariloche & Buenos Aires — Extreme Viagens" },
      { name: "description", content: "Pacote exclusivo Bariloche + Buenos Aires. 8 dias de experiências inesquecíveis com a Extreme Viagens. A partir de R$ 5.200 no PIX." },
      { property: "og:title", content: "Bariloche & Buenos Aires — Extreme Viagens" },
      { property: "og:description", content: "Pacote exclusivo com aéreo, hospedagem, passeios e muito mais. 01 a 08 de Setembro." },
    ],
  }),
});

function Index() {
  return (
    <main>
      <HeroSection />
      <IncludedSection />
      <BuenosAiresSection />
      <BarilocheSection />
      <HotelSection />
      <PricingSection />
      <section id="depoimentos">
        <TestimonialsSection />
      </section>
      <section id="sobre">
        <AboutSection />
        <TeamSection />
        <ExperienceSection />
      </section>
      <CtaFinalSection />
      <FooterSection />
    </main>
  );
}
