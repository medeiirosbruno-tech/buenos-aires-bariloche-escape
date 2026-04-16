import { motion } from "framer-motion";
import buenosAiresImg from "@/assets/buenos-aires.jpg";
import tangoImg from "@/assets/tango.jpg";
import tigreImg from "@/assets/tigre.jpg";
import { Clock, MapPin, Languages, Utensils, Wine, Music } from "lucide-react";

const experiences = [
  {
    title: "City Tour Premium",
    subtitle: "A alma de Buenos Aires em 5 horas",
    badge: "City Tour",
    image: buenosAiresImg,
    desc: "Um passeio completo pelos principais cartões-postais de Buenos Aires. Da elegância da Recoleta às cores vibrantes de La Boca, passando pela icônica Plaza de Mayo e o sofisticado Puerto Madero.",
    details: [
      { icon: Clock, text: "~5 horas de imersão" },
      { icon: MapPin, text: "Recoleta, San Telmo, La Boca, Puerto Madero" },
      { icon: Languages, text: "Guia em Português" },
    ],
    reverse: false,
  },
  {
    title: "Delta do Tigre",
    subtitle: "O lado sereno de Buenos Aires",
    badge: "Natureza",
    image: tigreImg,
    desc: "Navegue por 1h30 pelos canais encantadores do Delta do Tigre. Uma fuga perfeita do ritmo urbano, entre ilhas verdes e casas flutuantes que revelam uma Argentina completamente diferente.",
    details: [
      { icon: Clock, text: "Manhã inteira (~9h às 14h)" },
      { icon: MapPin, text: "Delta do Tigre + Puerto de Frutos" },
    ],
    reverse: true,
  },
  {
    title: "Show de Tango Porteño",
    subtitle: "Uma noite que fica na memória",
    badge: "Cultura",
    image: tangoImg,
    desc: "Viva uma noite inesquecível com jantar completo e um dos espetáculos de tango mais aclamados de Buenos Aires. Transporte incluso, com bebidas e menu de 3 etapas.",
    details: [
      { icon: Utensils, text: "Jantar completo incluso" },
      { icon: Wine, text: "Bebidas inclusas" },
      { icon: Music, text: "Espetáculo profissional" },
    ],
    reverse: false,
  },
];

export default function BuenosAiresSection() {
  return (
    <section id="experiencias" className="relative pt-44 sm:pt-56 pb-20 sm:pb-32 bg-white overflow-hidden z-0 -mt-[15%]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solar-flare/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-solar-flare/40 to-transparent" />
            <span className="text-solar-flare text-xs font-semibold tracking-[0.25em] uppercase whitespace-nowrap">
              Fase 01 · 01 a 04/09
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-solar-flare/40 to-transparent" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-deep-atlantic text-center">
            A Alma Portenha
          </h2>
          <p className="text-deep-atlantic/40 text-center mt-3 text-lg">
            O ritmo do tango e o charme europeu de Buenos Aires
          </p>

          {/* Floating gift balloon */}
          <div className="mx-auto mt-6 w-fit px-5 py-2.5 rounded-2xl bg-secondary/20 border border-secondary/30 backdrop-blur-sm shadow-lg animate-float-y">
            <span className="text-sm font-bold text-foreground">🎁 Escolha um passeio por nossa conta!</span>
          </div>
        </motion.div>

        <div className="space-y-16 sm:space-y-24">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col ${exp.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-[2rem] aspect-[4/3] shadow-xl hover:shadow-2xl transition-shadow duration-500"
                >
                  <img
                    src={exp.image}
                    alt={exp.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-4 py-2 bg-electric-azure/90 text-white text-xs font-semibold rounded-xl backdrop-blur-md shadow-lg">
                    {exp.badge}
                  </span>
                </motion.div>
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="font-display text-2xl sm:text-3xl text-deep-atlantic mb-2">
                  {exp.title}
                </h3>
                <p className="text-electric-azure font-medium text-sm mb-4">{exp.subtitle}</p>
                <p className="text-deep-atlantic/60 leading-relaxed mb-6">{exp.desc}</p>
                <div className="space-y-3">
                  {exp.details.map((d) => (
                    <div key={d.text} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-electric-azure/10 flex items-center justify-center flex-shrink-0 shadow-md">
                        <d.icon className="w-4 h-4 text-electric-azure" />
                      </div>
                      <span className="text-deep-atlantic/70 text-sm">{d.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
