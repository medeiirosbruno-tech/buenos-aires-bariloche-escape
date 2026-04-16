import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    emoji: "🤝",
    title: "Atendimento Humano de Verdade",
    description:
      "Nada de robôs ou respostas automáticas. Na Extreme, você fala com quem entende, se importa e cuida da sua viagem como se fosse a própria.",
    accent: "from-sky-300/30 to-blue-400/10",
  },
  {
    emoji: "🛡️",
    title: "Suporte 24h do Início ao Fim",
    description:
      "Não é só 'boa viagem'. Estamos com você desde o embarque até a volta pra casa — e em cada imprevisto no caminho.",
    accent: "from-emerald-300/25 to-teal-400/10",
  },
  {
    emoji: "💰",
    title: "Melhor Preço, Sem Pegadinha",
    description:
      "Pesquisamos com esforço e inteligência até encontrar a melhor opção real. Preço justo de quem conhece o mercado de verdade.",
    accent: "from-amber-300/25 to-yellow-400/10",
  },
];

export default function CtaFinalSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Hero text block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6"
          >
            Nosso Jeito
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-foreground leading-[1.1] max-w-4xl mx-auto">
            Cuidamos de tudo. ❤️
          </h2>

          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Você só fica com a parte boa:
          </p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary"
          >
            Fazer as malas e ir!
          </motion.p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-[2rem] overflow-hidden cursor-default"
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-card border border-border rounded-[2rem] shadow-lg group-hover:border-primary/20 group-hover:shadow-2xl transition-all duration-500" />

              {/* Accent gradient */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${pillar.accent} rounded-t-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative p-7 sm:p-8">
                {/* Emoji */}
                <span className="text-4xl mb-4 block">{pillar.emoji}</span>

                <h3 className="text-lg font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {pillar.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0066cc 0%, #0084ed 50%, #00a0ff 100%)",
          }}
        >
          {/* Orbs */}
          <div className="absolute top-[-60px] right-[-40px] w-[300px] h-[300px] rounded-full bg-white/10 blur-[100px] pointer-events-none animate-orb-1" />
          <div className="absolute bottom-[-40px] left-[-30px] w-[250px] h-[250px] rounded-full bg-sky-300/10 blur-[80px] pointer-events-none animate-orb-2" />

          <div className="relative px-8 py-12 sm:px-14 sm:py-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                Pronto para viver a experiência?
              </h3>
              <p className="mt-3 text-white/60 text-sm sm:text-base leading-relaxed">
                Fale com um dos nossos consultores e monte a viagem dos seus sonhos — sem compromisso.
              </p>
            </div>

            <motion.a
              href="https://wa.me/5521999999999"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-primary font-bold text-sm sm:text-base shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-500"
            >
              Falar com Consultor
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
