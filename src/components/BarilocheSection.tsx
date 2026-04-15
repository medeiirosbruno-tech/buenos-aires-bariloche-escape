import { motion } from "framer-motion";
import circuitoImg from "@/assets/circuito-chico.jpg";
import cerroImg from "@/assets/cerro-catedral.jpg";
import { Mountain, Camera, Snowflake } from "lucide-react";

const tours = [
  {
    title: "Circuito Chico",
    subtitle: "O coração paisagístico da Patagônia",
    badge: "Natureza",
    image: circuitoImg,
    desc: "Percorra um dos roteiros mais emblemáticos de Bariloche. Lagos de águas cristalinas, montanhas imponentes e florestas ancestrais se revelam a cada curva. Paradas estratégicas para contemplação e fotografias inesquecíveis.",
    details: [
      { icon: Mountain, text: "Paisagens de tirar o fôlego" },
      { icon: Camera, text: "Paradas fotográficas em mirantes" },
    ],
    reverse: false,
  },
  {
    title: "Cerro Catedral",
    subtitle: "O gigante da Patagônia",
    badge: "Aventura",
    image: cerroImg,
    desc: "Visite o maior centro de esqui do hemisfério sul. Mesmo fora da temporada de neve, a grandiosidade do Cerro Catedral impressiona com vistas panorâmicas de 360° e uma estrutura que se integra à montanha.",
    details: [
      { icon: Snowflake, text: "Maior centro de esqui do hemisfério sul" },
      { icon: Mountain, text: "Vistas panorâmicas incomparáveis" },
    ],
    reverse: true,
  },
];

export default function BarilocheSection() {
  return (
    <section className="relative py-20 sm:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-azure/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-electric-azure/40 to-transparent" />
            <span className="text-electric-azure text-xs font-semibold tracking-[0.25em] uppercase whitespace-nowrap">
              Fase 02 · 04 a 08/09
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-electric-azure/40 to-transparent" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-deep-atlantic text-center">
            O Despertar da Patagônia
          </h2>
          <p className="text-deep-atlantic/40 text-center mt-3 text-lg">
            Cumes nevados e o espelho dos lagos de Bariloche
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-24">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col ${tour.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-3xl aspect-[4/3] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.2)] transition-shadow duration-500"
                >
                  <img
                    src={tour.image}
                    alt={tour.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-4 py-2 bg-electric-azure/90 text-white text-xs font-semibold rounded-xl backdrop-blur-md shadow-lg">
                    {tour.badge}
                  </span>
                </motion.div>
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="font-display text-2xl sm:text-3xl text-deep-atlantic mb-2">
                  {tour.title}
                </h3>
                <p className="text-electric-azure font-medium text-sm mb-4">{tour.subtitle}</p>
                <p className="text-deep-atlantic/60 leading-relaxed mb-6">{tour.desc}</p>
                <div className="space-y-3">
                  {tour.details.map((d) => (
                    <div key={d.text} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-electric-azure/10 flex items-center justify-center flex-shrink-0 shadow-sm">
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
