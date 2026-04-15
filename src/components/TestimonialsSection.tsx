import { motion } from "framer-motion";
import { Star } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6.jpg";

const testimonials = [
  {
    name: "Carla Mendes",
    trip: "Bariloche 2024",
    avatar: avatar1,
    text: "Simplesmente perfeito! Cada detalhe foi pensado com muito carinho. O hotel em Bariloche tinha uma vista incrível e os passeios foram todos impecáveis.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    trip: "Buenos Aires 2024",
    avatar: avatar2,
    text: "A Extreme Viagens superou todas as expectativas. O show de tango foi emocionante e o city tour nos mostrou cantinhos que nunca encontraríamos sozinhos.",
    rating: 5,
  },
  {
    name: "Fernanda & Lucas",
    trip: "Argentina Completa 2023",
    avatar: avatar3,
    text: "Viajamos em lua de mel e foi a melhor decisão! O suporte da agência durante toda a viagem nos deu muita tranquilidade.",
    rating: 5,
  },
  {
    name: "Patrícia Gomes",
    trip: "Bariloche 2023",
    avatar: avatar4,
    text: "Terceira viagem com a Extreme e cada vez melhor. Profissionalismo, atenção aos detalhes e roteiros incríveis.",
    rating: 5,
  },
  {
    name: "André Oliveira",
    trip: "Buenos Aires + Bariloche 2024",
    avatar: avatar5,
    text: "Levei minha família inteira e todos amaram. As crianças adoraram a neve no Cerro Catedral. Atendimento nota 10!",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    trip: "Argentina 2024",
    avatar: avatar6,
    text: "A navegação pelo Delta do Tigre foi uma surpresa maravilhosa. A equipe da Extreme cuida de tudo, é só curtir.",
    rating: 5,
  },
];

const avatarStack = [avatar1, avatar2, avatar3, avatar4];

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-surface-cool overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">Depoimentos</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold text-foreground">
            O que dizem nossos <span className="text-gradient-brand">viajantes</span>
          </h2>

          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex -space-x-3">
              {avatarStack.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-surface-cool overflow-hidden shadow-md"
                  style={{ zIndex: avatarStack.length - i }}
                >
                  <img
                    src={src}
                    alt="Viajante satisfeito"
                    loading="lazy"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[3px] border-surface-cool bg-gradient-brand flex items-center justify-center shadow-md"
                style={{ zIndex: 0 }}
              >
                <span className="text-primary-foreground text-xs font-bold">+50k</span>
              </motion.div>
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              Viajantes satisfeitos
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-white border border-border/60 hover:shadow-lg transition-all duration-400"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover object-top"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.trip}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed text-sm">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
