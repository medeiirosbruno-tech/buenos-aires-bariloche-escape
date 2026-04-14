import { motion } from "framer-motion";
import { Star } from "lucide-react";
import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";
import team4 from "@/assets/team-4.png";

const avatarStack = [team1, team2, team3, team4];

const testimonials = [
  {
    name: "Carla Mendes",
    trip: "Bariloche 2024",
    avatar: "CM",
    text: "Simplesmente perfeito! Cada detalhe foi pensado com muito carinho. O hotel em Bariloche tinha uma vista incrível e os passeios foram todos impecáveis. Já quero voltar!",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    trip: "Buenos Aires 2024",
    avatar: "RS",
    text: "A Extreme Viagens superou todas as expectativas. O show de tango foi emocionante e o city tour por Buenos Aires nos mostrou cantinhos que nunca encontraríamos sozinhos.",
    rating: 5,
  },
  {
    name: "Fernanda & Lucas",
    trip: "Argentina Completa 2023",
    avatar: "FL",
    text: "Viajamos em lua de mel e foi a melhor decisão! O suporte da agência durante toda a viagem nos deu muita tranquilidade. O Circuito Chico é de tirar o fôlego!",
    rating: 5,
  },
  {
    name: "Patrícia Gomes",
    trip: "Bariloche 2023",
    avatar: "PG",
    text: "Terceira viagem com a Extreme e cada vez melhor. Profissionalismo, atenção aos detalhes e roteiros incríveis. Não troco por nenhuma outra agência!",
    rating: 5,
  },
  {
    name: "André Oliveira",
    trip: "Buenos Aires + Bariloche 2024",
    avatar: "AO",
    text: "Levei minha família inteira e todos amaram. As crianças adoraram a neve no Cerro Catedral e nós aproveitamos cada segundo. Atendimento nota 10!",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    trip: "Argentina 2024",
    avatar: "JC",
    text: "A navegação pelo Delta do Tigre foi uma surpresa maravilhosa. A equipe da Extreme cuida de tudo, é só curtir. Recomendo de olhos fechados!",
    rating: 5,
  },
];

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

          {/* Stacked avatars + count */}
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-7 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground text-xs font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.trip}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
