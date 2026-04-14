import { motion } from "framer-motion";
import circuitoImg from "@/assets/circuito-chico.jpg";
import cerroImg from "@/assets/cerro-catedral.jpg";

const tours = [
  {
    title: "Circuito Chico",
    subtitle: "O coração paisagístico da Patagônia",
    tag: "Natureza",
    image: circuitoImg,
    desc: "Percorra um dos roteiros mais emblemáticos de Bariloche. Lagos de águas cristalinas, montanhas imponentes e florestas ancestrais se revelam a cada curva. Paradas estratégicas para contemplação e fotografias inesquecíveis.",
    details: ["Paisagens de tirar o fôlego", "Paradas fotográficas em mirantes"],
  },
  {
    title: "Cerro Catedral",
    subtitle: "O gigante da Patagônia",
    tag: "Aventura",
    image: cerroImg,
    desc: "Visite o maior centro de esqui do hemisfério sul. Mesmo fora da temporada de neve, a grandiosidade do Cerro Catedral impressiona com vistas panorâmicas de 360° e uma estrutura que se integra à montanha.",
    details: ["Maior centro de esqui do hemisfério sul", "Vistas panorâmicas incomparáveis"],
  },
];

export default function BarilocheSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Fase 02 · 04 a 08/09</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground mb-4"
        >
          O Despertar da <span className="text-gradient-brand">Patagônia</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground max-w-xl mx-auto mb-16"
        >
          Cumes nevados e o espelho dos lagos de Bariloche
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-2xl overflow-hidden glass-card hover:bg-white/[0.08] transition-all duration-500"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold">
                  {tour.tag}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">{tour.title}</h3>
                <p className="text-sm text-primary font-medium mb-4">{tour.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-5">{tour.desc}</p>
                <div className="space-y-2">
                  {tour.details.map((d) => (
                    <div key={d} className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {d}
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
