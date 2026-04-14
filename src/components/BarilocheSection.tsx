import { motion } from "framer-motion";
import circuitoImg from "@/assets/circuito-chico.jpg";
import cerroImg from "@/assets/cerro-catedral.jpg";

const tours = [
  {
    title: "Circuito Chico",
    image: circuitoImg,
    desc: "Explore um dos passeios mais encantadores de Bariloche. Paisagens deslumbrantes, montanhas imponentes e lagos de águas cristalinas. A cada parada, um novo cenário de tirar o fôlego — perfeito para fotos e momentos inesquecíveis.",
    badge: "🌄 Natureza",
  },
  {
    title: "Cerro Catedral",
    image: cerroImg,
    desc: "Conheça o maior centro de esqui do hemisfério sul. Mesmo fora da temporada de neve, o local impressiona pela grandiosidade, vistas panorâmicas e estrutura completa. Um destino imperdível para quem ama montanhas e aventura.",
    badge: "❄️ Aventura",
  },
];

export default function BarilocheSection() {
  return (
    <section className="py-20 sm:py-28 bg-surface-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">Bariloche</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold text-foreground">
            A magia da <span className="text-gradient-brand">Patagônia</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            De 04 a 08/09 — Hotel La Malinka com café da manhã incluso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-card-hover transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-gold text-brand-gold-foreground text-xs font-bold mb-2">
                    {tour.badge}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-primary-foreground">{tour.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-muted-foreground leading-relaxed">{tour.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
