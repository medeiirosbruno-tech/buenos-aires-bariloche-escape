import { motion } from "framer-motion";
import { Globe, Users, Heart, Infinity } from "lucide-react";
import heroImg from "@/assets/hero-bariloche.jpg";

const stats = [
  { value: "40+", label: "Anos de Experiência", icon: Globe },
  { value: "50k+", label: "Viajantes Felizes", icon: Users },
  { value: "200+", label: "Destinos no Mundo", icon: Heart },
  { value: "∞", label: "Memórias Criadas", icon: Infinity },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Quem Somos</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground mb-16 max-w-4xl mx-auto leading-tight"
        >
          Não vendemos passagens.<br />
          <span className="text-gradient-brand">Arquitetamos memórias</span><br />
          que o tempo não apaga.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Há mais de 40 anos, a <strong className="text-foreground">Extreme Viagens</strong> transforma sonhos em roteiros e roteiros em histórias que duram para sempre. Milhares de viajantes já confiaram em nós para viver experiências que vão muito além do destino.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Somos colecionadores de momentos. Cada viagem é única, cada detalhe é pensado, cada lembrança é para sempre. Porque viajar com a Extreme não é apenas conhecer lugares — é se descobrir em cada horizonte.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={heroImg}
              alt="Extreme Viagens — paisagem"
              loading="lazy"
              className="w-full h-72 sm:h-80 object-cover rounded-2xl"
            />
            <div className="mt-3 text-center">
              <p className="text-sm font-semibold text-foreground">Extreme Viagens</p>
              <p className="text-xs text-muted-foreground">Desde 1984 · Rio de Janeiro</p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl glass-card text-center"
            >
              <p className="text-4xl sm:text-5xl font-display font-black text-gradient-gold mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
