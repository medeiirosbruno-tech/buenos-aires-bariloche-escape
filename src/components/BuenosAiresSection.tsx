import { motion } from "framer-motion";
import buenosAiresImg from "@/assets/buenos-aires.jpg";
import tangoImg from "@/assets/tango.jpg";
import tigreImg from "@/assets/tigre.jpg";
import { Clock, MapPin, Globe, Utensils } from "lucide-react";

const experiences = [
  {
    title: "City Tour Premium",
    emoji: "🏙️",
    image: buenosAiresImg,
    desc: "Conheça os principais pontos turísticos com paradas estratégicas para fotos.",
    details: ["~5 horas de duração", "Saídas diárias", "Busca no hotel", "Guia em português"],
    places: ["Recoleta", "Floralis Genérica", "Plaza de Mayo", "San Telmo", "La Boca", "Puerto Madero"],
    highlight: "Ideal para ter uma visão completa da cidade logo no início da viagem.",
  },
  {
    title: "Tigre + Delta",
    emoji: "🚤",
    image: tigreImg,
    desc: "Explore o famoso Delta do Tigre em uma experiência única fora da cidade.",
    details: ["Saída ~9h", "Navegação 1h30", "Puerto de Frutos", "Retorno ~14h"],
    places: [],
    highlight: "Perfeito para quem quer ver um lado mais tranquilo e diferente de Buenos Aires.",
  },
  {
    title: "Show de Tango + Jantar",
    emoji: "💃",
    image: tangoImg,
    desc: "Uma noite inesquecível com um dos shows mais tradicionais da cidade.",
    details: ["Transporte ida e volta", "Jantar completo", "Bebidas inclusas", "Show profissional"],
    places: [],
    highlight: "Uma experiência clássica que não pode faltar em Buenos Aires.",
  },
];

export default function BuenosAiresSection() {
  return (
    <section id="roteiro" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">Buenos Aires</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold text-foreground">
            Experiência <span className="text-gradient-brand">Completa</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            3 passeios imperdíveis, cuidadosamente selecionados para você viver o melhor da capital argentina.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-card border border-border hover:shadow-card-hover transition-all duration-500"
            >
              <div className={`relative h-64 md:h-auto min-h-[300px] overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm text-sm font-bold">
                  {exp.emoji} {exp.title}
                </div>
              </div>

              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">{exp.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{exp.desc}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {exp.details.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {d}
                    </div>
                  ))}
                </div>

                {exp.places.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.places.map((p) => (
                      <span key={p} className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                        {p}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-sm font-medium text-primary italic">👉 {exp.highlight}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
