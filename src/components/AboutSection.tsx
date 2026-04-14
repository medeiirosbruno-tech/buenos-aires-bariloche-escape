import { motion } from "framer-motion";
import { Globe, Users, Heart, Award } from "lucide-react";

const stats = [
  { icon: Globe, value: "40+", label: "Anos de experiência" },
  { icon: Users, value: "50 mil+", label: "Viajantes satisfeitos" },
  { icon: Heart, value: "100+", label: "Destinos pelo mundo" },
  { icon: Award, value: "98%", label: "Taxa de satisfação" },
];

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">Sobre nós</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight">
              Extreme Viagens: <span className="text-gradient-brand">colecionando momentos</span> há mais de 40 anos
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Desde a nossa fundação, a Extreme Viagens se dedica a transformar sonhos em experiências inesquecíveis. São mais de quatro décadas cuidando de cada detalhe para que você só precise se preocupar em aproveitar.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Com milhares de viagens realizadas e destinos ao redor do mundo, construímos uma reputação baseada em confiança, excelência e paixão por viajar. Cada roteiro é pensado para oferecer o melhor da experiência, com conforto, segurança e aquele toque especial que só quem ama o que faz consegue entregar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center hover:shadow-card-hover transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-display font-bold text-gradient-brand">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
