import { motion } from "framer-motion";
import { Headphones, Compass, UserCheck, BookOpen, Plane, Heart } from "lucide-react";

const steps = [
  {
    icon: Headphones,
    title: "1º Atendimento",
    description:
      "Tudo começa com uma escuta atenta. Nosso time entende seus desejos, preferências e expectativas para que cada detalhe da sua viagem reflita exatamente o que você sonha viver.",
  },
  {
    icon: Compass,
    title: "Consultoria Personalizada",
    description:
      "Com base no seu perfil, nossos consultores elaboram o roteiro ideal, equilibrando conforto, experiências culturais e o ritmo que faz sentido para você — com conhecimento profundo de cada destino.",
  },
  {
    icon: UserCheck,
    title: "Sucesso do Viajante",
    description:
      "Após a escolha do pacote, nossa equipe acompanha cada etapa da preparação, garantindo clareza em informações, documentação e suporte constante. Sua tranquilidade é nossa prioridade.",
  },
  {
    icon: BookOpen,
    title: "Treinamento Pré-Viagem",
    description:
      "Antes do embarque, realizamos um encontro especial com orientações sobre destino, clima, moeda, o que levar e dicas valiosas para que você viaje seguro e preparado para cada momento.",
  },
  {
    icon: Plane,
    title: "Sua Viagem",
    description:
      "É hora de viver! Com guias experientes, suporte 24h e logística impecável, você se entrega à experiência: paisagens deslumbrantes, momentos autênticos e memórias que ficam para sempre.",
  },
  {
    icon: Heart,
    title: "Pós-Viagem",
    description:
      "Ao retornar, continuamos ao seu lado. Queremos ouvir suas histórias e celebrar suas conquistas. É também o momento de planejar juntos os próximos destinos — quem vive a Experiência Extreme, sempre quer repetir.",
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
          className="text-center mb-14"
        >
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">
            Nossa Metodologia
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground">
            A Experiência
            <br />
            <span className="text-primary">Extreme Viagens</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base leading-relaxed">
            Acreditamos que cada viagem transforma. Por isso, criamos uma abordagem exclusiva que une conforto, cultura e cuidado em cada detalhe para tornar sua jornada verdadeiramente inesquecível.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative md:grid md:grid-cols-2 md:gap-10 md:py-6"
                >
                  {/* Circle on timeline - desktop */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground items-center justify-center shadow-lg border-4 border-background">
                    <span className="text-xs font-bold">{i + 1}</span>
                  </div>

                  {/* Content card */}
                  <div
                    className={`${isLeft ? "md:text-right md:pr-14" : "md:col-start-2 md:pl-14"}`}
                  >
                    <div className="bg-muted/50 hover:bg-card p-5 rounded-2xl border border-border hover:border-primary/20 shadow-sm hover:shadow-lg transition-all duration-300 group">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <step.icon className="w-4.5 h-4.5 text-primary" />
                        </div>
                        <h3 className="text-base font-bold text-foreground uppercase tracking-wide">
                          {step.title}
                        </h3>
                        {/* Mobile step number */}
                        <span className="md:hidden ml-auto flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                      </div>
                      <p className={`text-muted-foreground text-sm leading-relaxed ${isLeft ? "md:text-right" : ""}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty column for alternating layout */}
                  {isLeft && <div className="hidden md:block" />}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
