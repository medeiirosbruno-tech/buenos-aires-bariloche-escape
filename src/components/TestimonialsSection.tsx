import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";
import team4 from "@/assets/team-4.png";

const avatarStack = [team1, team2, team3, team4];

const testimonials = [
  {
    name: "Carla Mendonça",
    location: "Rio de Janeiro, RJ",
    avatar: team1,
    text: "A viagem superou todas as minhas expectativas. Cada detalhe foi pensado com carinho. A experiência do show de tango foi simplesmente inesquecível.",
    rating: 5,
  },
  {
    name: "Ricardo Almeida",
    location: "São Paulo, SP",
    avatar: team2,
    text: "Já viajei com várias agências, mas a Extreme é incomparável. O suporte durante toda a viagem nos deu uma tranquilidade enorme. Bariloche nos surpreendeu.",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    location: "Belo Horizonte, MG",
    avatar: team3,
    text: "Nossa lua de mel foi perfeita graças à Extreme Viagens. O roteiro Buenos Aires + Bariloche é uma combinação mágica. Voltamos com o coração cheio.",
    rating: 5,
  },
  {
    name: "Mariana Tostes",
    location: "Curitiba, PR",
    avatar: team4,
    text: "O Delta do Tigre foi uma surpresa incrível — tão perto da cidade e tão diferente. A equipe da Extreme cuida de tudo com um profissionalismo raro.",
    rating: 5,
  },
  {
    name: "Paulo Henrique",
    location: "Brasília, DF",
    avatar: team1,
    text: "Terceira viagem com a Extreme e mais uma vez superaram. O Circuito Chico em Bariloche é de tirar o fôlego. Organização impecável do início ao fim.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Depoimentos</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground mb-8"
        >
          Vozes de Quem <span className="text-gradient-brand">Viveu</span>
        </motion.h2>

        {/* Avatar stack */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <div className="flex -space-x-3">
            {avatarStack.map((src, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                style={{ zIndex: avatarStack.length - i }}
              >
                <img src={src} alt="Viajante" loading="lazy" width={40} height={40} className="w-full h-full object-cover object-top" />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center" style={{ zIndex: 0 }}>
              <span className="text-primary-foreground text-[10px] font-bold">+50k</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Mais de 50 mil viajantes satisfeitos</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`p-7 rounded-2xl glass-card ${i === 3 ? 'lg:col-span-2' : ''}`}
            >
              <Quote className="w-5 h-5 text-primary/40 mb-4" />
              <p className="text-foreground/90 leading-relaxed mb-6 text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={t.avatar} alt={t.name} loading="lazy" width={40} height={40} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-brand-gold text-brand-gold" />
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
