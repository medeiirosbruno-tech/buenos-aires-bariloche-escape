import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "1º Atendimento",
    description:
      "Tudo começa com uma escuta atenta. Nosso time entende seus desejos, preferências e expectativas para que cada detalhe reflita o que você sonha viver.",
  },
  {
    num: "02",
    title: "Consultoria Personalizada",
    description:
      "Nossos consultores elaboram o roteiro ideal, equilibrando conforto, experiências culturais e o ritmo que faz sentido para você.",
  },
  {
    num: "03",
    title: "Sucesso do Viajante",
    description:
      "Acompanhamos cada etapa da preparação, garantindo clareza em informações, documentação e suporte constante.",
  },
  {
    num: "04",
    title: "Treinamento Pré-Viagem",
    description:
      "Orientações práticas sobre destino, clima, moeda, o que levar e dicas valiosas para que você viaje seguro e confiante.",
  },
  {
    num: "05",
    title: "Sua Viagem",
    description:
      "Guias experientes, suporte 24h e logística impecável. Paisagens deslumbrantes, momentos autênticos e memórias eternas.",
  },
  {
    num: "06",
    title: "Pós-Viagem",
    description:
      "Continuamos ao seu lado. Ouvimos suas histórias, celebramos conquistas e planejamos juntos os próximos destinos.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-[2.5rem] bg-primary p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,132,237,0.35)]"
      >
        {/* Liquid glass background effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/8 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-white/3 blur-[100px] pointer-events-none" />

        {/* Header */}
        <div className="relative text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-display font-bold text-white"
          >
            A Experiência
            <br />
            Extreme Viagens
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            Uma abordagem exclusiva que une conforto, cultura e cuidado em cada detalhe para tornar sua jornada verdadeiramente inesquecível.
          </motion.p>
        </div>

        {/* Desktop: Horizontal timeline */}
        <div className="relative hidden md:block">
          {/* Timeline line */}
          <div className="absolute left-8 right-8 top-[2.35rem] h-px bg-white/20" />

          {/* Circles row */}
          <div className="flex justify-between px-8 mb-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                className="relative z-10 w-[1.2rem] h-[1.2rem] rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)] border-[3px] border-primary"
              />
            ))}
          </div>

          {/* Vertical connector lines */}
          <div className="flex justify-between px-8 mb-4">
            {steps.map((step) => (
              <div key={step.num} className="flex justify-center" style={{ width: "1.2rem" }}>
                <div className="w-px h-8 bg-white/20" />
              </div>
            ))}
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-6 gap-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.2)] hover:bg-white/15 hover:border-white/30 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 cursor-default"
              >
                {/* Glass sheen */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

                <div className="relative">
                  <span className="text-[10px] font-bold text-white/40 tracking-widest">
                    {step.num}
                  </span>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mt-1 mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-white/55 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative flex gap-4"
            >
              {/* Line + dot */}
              <div className="flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.4)] border-[2.5px] border-primary flex-shrink-0 z-10" />
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-white/15" />
                )}
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ x: 4 }}
                className="mb-4 flex-1 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.15)] relative overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none" />
                <div className="relative">
                  <span className="text-[10px] font-bold text-white/40 tracking-widest">
                    {step.num}
                  </span>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mt-0.5 mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-white/55 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
