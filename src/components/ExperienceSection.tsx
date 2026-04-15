import { motion } from "framer-motion";

const steps = [
  {
    title: "1º Atendimento",
    description:
      "Tudo começa com uma escuta atenta. Nosso time entende seus desejos, preferências e expectativas para que cada detalhe da sua viagem reflita exatamente o que você sonha viver.",
  },
  {
    title: "Consultoria Personalizada",
    description:
      "Com base no seu perfil, nossos consultores elaboram o roteiro ideal, equilibrando conforto, experiências culturais e o ritmo que faz sentido para você. Cada sugestão é feita com propósito, cuidado e conhecimento profundo da América do Sul.",
  },
  {
    title: "Sucesso do Viajante",
    description:
      "Após a escolha do pacote, nossa equipe acompanha cada etapa da preparação, garantindo clareza em informações, documentação e suporte constante. Seu conforto e tranquilidade são nossa prioridade desde o primeiro contato.",
  },
  {
    title: "Treinamento Pré-Viagem",
    description:
      "Antes do embarque, realizamos um encontro especial com orientações práticas sobre o destino, roteiro, clima, moeda, o que levar, cultura local e dicas valiosas para que você viaje seguro e confiante, preparado para aproveitar cada momento ao máximo.",
  },
  {
    title: "Sua Viagem",
    description:
      "É hora de viver o que foi planejado com tanto carinho! Com guias experientes, suporte 24h e uma logística impecável, você se entrega à experiência: paisagens deslumbrantes, momentos autênticos e memórias que ficarão para sempre.",
  },
  {
    title: "Pós-Viagem",
    description:
      "Ao retornar, continuamos ao seu lado. Queremos ouvir suas histórias e celebrar suas conquistas. É também o momento de planejar juntos os próximos destinos, porque quem vive a Experiência Extreme, sempre quer repetir.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground">
            A Experiência
            <br />
            <span className="text-primary">Extreme Viagens</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center max-w-3xl mx-auto text-sm sm:text-base leading-relaxed mb-14"
        >
          Nós acreditamos que cada viagem transforma, por isso, criamos a metodologia Experiência Extreme, uma abordagem exclusiva que une conforto, cultura e cuidado em cada detalhe para tornar sua jornada verdadeiramente inesquecível.
        </motion.p>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block">
          {/* Circles + horizontal line */}
          <div className="relative flex items-center justify-between mx-8">
            {/* Horizontal line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-border -translate-y-1/2" />

            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-md"
              />
            ))}
          </div>

          {/* Vertical lines from circles */}
          <div className="relative flex justify-between mx-8 h-12">
            {steps.map((step, i) => (
              <div key={step.title} className="flex justify-center" style={{ width: 0 }}>
                <div className="w-px h-full bg-border" />
              </div>
            ))}
          </div>

          {/* Titles row */}
          <div className="grid grid-cols-6 gap-4 mb-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">
                  {step.title}
                </h4>
              </motion.div>
            ))}
          </div>

          {/* Descriptions row */}
          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative flex gap-4"
            >
              {/* Line + circle */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md flex-shrink-0 z-10" />
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">
                  {step.title}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
