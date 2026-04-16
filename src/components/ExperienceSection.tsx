import { motion } from "framer-motion";
import { Headphones, Compass, UserCheck, BookOpen, Plane, Heart } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Headphones,
    title: "1º Atendimento",
    description:
      "Tudo começa com uma escuta atenta. Nosso time entende seus desejos para que cada detalhe reflita o que você sonha viver.",
  },
  {
    num: "02",
    icon: Compass,
    title: "Consultoria Personalizada",
    description:
      "Nossos consultores elaboram o roteiro ideal, equilibrando conforto, experiências culturais e o ritmo certo para você.",
  },
  {
    num: "03",
    icon: UserCheck,
    title: "Sucesso do Viajante",
    description:
      "Acompanhamos cada etapa da preparação com clareza, documentação e suporte constante do início ao fim.",
  },
  {
    num: "04",
    icon: BookOpen,
    title: "Treinamento Pré-Viagem",
    description:
      "Orientações sobre destino, clima, moeda e dicas valiosas para que você viaje seguro e preparado.",
  },
  {
    num: "05",
    icon: Plane,
    title: "Sua Viagem",
    description:
      "Guias experientes, suporte 24h e logística impecável. Paisagens deslumbrantes e memórias eternas.",
  },
  {
    num: "06",
    icon: Heart,
    title: "Pós-Viagem",
    description:
      "Continuamos ao seu lado. Ouvimos suas histórias e planejamos juntos os próximos destinos.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-[2.5rem] relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,80,200,0.4)]"
        style={{
          background: "linear-gradient(135deg, #0066cc 0%, #0084ed 40%, #00a0ff 70%, #0066cc 100%)",
        }}
      >
        {/* Animated orbs */}
        <div className="absolute top-[-100px] right-[-50px] w-[500px] h-[500px] rounded-full bg-white/10 blur-[120px] pointer-events-none animate-orb-1" />
        <div className="absolute bottom-[-80px] left-[-60px] w-[400px] h-[400px] rounded-full bg-sky-300/15 blur-[100px] pointer-events-none animate-orb-2" />
        <div className="absolute top-1/3 left-1/2 w-[250px] h-[250px] rounded-full bg-white/5 blur-[80px] pointer-events-none animate-orb-3" />

        <div className="relative p-8 sm:p-12 lg:p-16">
          {/* Header */}
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold tracking-widest uppercase mb-4"
            >
              ✦ Nossa Metodologia
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold text-white leading-tight"
            >
              A Experiência
              <br />
              <span className="inline-block px-3 py-1 rounded-lg bg-[#001a4d] text-white">
                Extreme Viagens
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            >
              Cada viagem transforma. Por isso, criamos uma abordagem exclusiva que une conforto, cultura e cuidado em cada detalhe.
            </motion.p>
          </div>

          {/* Desktop: Horizontal timeline */}
          <div className="hidden lg:block">
            {/* Timeline bar */}
            <div className="relative flex items-center justify-between mx-6 mb-2">
              <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full overflow-hidden">
                <div className="w-full h-full bg-white/20" />
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-white/60 via-sky-200/40 to-white/60 origin-left"
                />
              </div>

              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 400, damping: 15 }}
                  className="relative z-10"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-gold shadow-[0_0_24px_rgba(255,200,0,0.5)] border-[3px] border-brand-gold/50" />
                  <div className="absolute inset-0 rounded-full bg-brand-gold/40 animate-pulse-dot" style={{ animationDelay: `${i * 0.3}s` }} />
                </motion.div>
              ))}
            </div>

            {/* Vertical lines */}
            <div className="flex justify-between mx-6 mb-5">
              {steps.map((step) => (
                <div key={step.num} className="flex justify-center" style={{ width: "1.25rem" }}>
                  <div className="w-px h-10 bg-gradient-to-b from-white/40 to-white/10" />
                </div>
              ))}
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-6 gap-3">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.04 }}
                  className="group relative rounded-2xl overflow-hidden cursor-default transition-all duration-500"
                >
                  {/* Card bg with glass */}
                  <div className="absolute inset-0 bg-white/[0.12] backdrop-blur-2xl border border-white/25 rounded-2xl group-hover:bg-white/[0.18] group-hover:border-white/40 transition-all duration-500" />
                  {/* Gradient sheen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  {/* Glow on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-sky-300/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />

                  <div className="relative p-4 sm:p-5">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-3 group-hover:bg-white/25 group-hover:scale-110 transition-all duration-500 shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
                      <step.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>

                    <span className="text-[10px] font-bold text-white/35 tracking-[0.2em]">
                      ETAPA {step.num}
                    </span>
                    <h4 className="text-[13px] font-bold text-white uppercase tracking-wide mt-1 mb-2 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical timeline */}
          <div className="lg:hidden space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-4"
              >
                {/* Line + dot */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-brand-gold shadow-[0_0_20px_rgba(255,200,0,0.5)] border-[2.5px] border-brand-gold/40 flex-shrink-0 z-10" />
                    <div className="absolute inset-0 rounded-full bg-brand-gold/30 animate-pulse-dot" style={{ animationDelay: `${i * 0.3}s` }} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-white/30 to-white/5" />
                  )}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="mb-4 flex-1 rounded-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/[0.12] backdrop-blur-2xl border border-white/25 rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
                  <div className="relative p-4 flex gap-3 items-start">
                    <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                      <step.icon className="w-4 h-4 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-white/35 tracking-[0.15em]">
                        ETAPA {step.num}
                      </span>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mt-0.5 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs text-white/50 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
