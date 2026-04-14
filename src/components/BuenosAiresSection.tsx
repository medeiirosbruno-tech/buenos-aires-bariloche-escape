import { motion } from "framer-motion";
import buenosAiresImg from "@/assets/buenos-aires.jpg";
import tangoImg from "@/assets/tango.jpg";
import tigreImg from "@/assets/tigre.jpg";

const experiences = [
  {
    title: "City Tour Premium",
    subtitle: "A alma de Buenos Aires em 5 horas",
    tag: "City Tour",
    image: buenosAiresImg,
    desc: "Um passeio completo pelos principais cartões-postais de Buenos Aires. Da elegância da Recoleta às cores vibrantes de La Boca, passando pela icônica Plaza de Mayo e o sofisticado Puerto Madero.",
    details: ["~5 horas de imersão", "Recoleta, San Telmo, La Boca, Puerto Madero", "Guia em Português"],
  },
  {
    title: "Delta do Tigre",
    subtitle: "O lado sereno de Buenos Aires",
    tag: "Natureza",
    image: tigreImg,
    desc: "Navegue por 1h30 pelos canais encantadores do Delta do Tigre. Uma fuga perfeita do ritmo urbano, entre ilhas verdes e casas flutuantes que revelam uma Argentina completamente diferente.",
    details: ["Manhã inteira (~9h às 14h)", "Delta do Tigre + Puerto de Frutos"],
  },
  {
    title: "Show de Tango Porteño",
    subtitle: "Uma noite que fica na memória",
    tag: "Cultura",
    image: tangoImg,
    desc: "Viva uma noite inesquecível com jantar completo e um dos espetáculos de tango mais aclamados de Buenos Aires. Transporte incluso, com bebidas e menu de 3 etapas.",
    details: ["Jantar completo incluso", "Bebidas inclusas", "Espetáculo profissional"],
  },
];

export default function BuenosAiresSection() {
  return (
    <section id="experiencias" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Fase 01 · 01 a 04/09</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground mb-4"
        >
          A Alma <span className="text-gradient-brand">Portenha</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground max-w-xl mx-auto mb-16"
        >
          O ritmo do tango e o charme europeu de Buenos Aires
        </motion.p>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden glass-card hover:bg-white/[0.08] transition-all duration-500"
            >
              <div className={`relative h-64 md:h-auto min-h-[320px] overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold">
                  {exp.tag}
                </div>
              </div>

              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">{exp.title}</h3>
                <p className="text-sm text-primary font-medium mb-4">{exp.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{exp.desc}</p>

                <div className="space-y-2.5">
                  {exp.details.map((d) => (
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
