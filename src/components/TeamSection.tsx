import { motion } from "framer-motion";
import { Award } from "lucide-react";

const leaders = [
  {
    name: "Ana Lucia Miranda",
    role: "Co-fundadora",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    bio: "Ao lado de Marcelo Cruz, construiu nossa reputação. Esposa, proprietária e Guia Cadastur, ela é a alma acolhedora que garante que cada viagem tenha o cuidado e a segurança de uma família.",
  },
  {
    name: "Bernardo Miranda",
    role: "CEO & Diretor",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    bio: "Filho de Marcelo, Bernardo une o legado de 35 anos à inovação. Guia Cadastur e líder visionário, ele conduz a Extreme rumo a novos horizontes sem perder nossa essência.",
  },
  {
    name: "Bruno Medeiros",
    role: "Diretor Comercial",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    bio: "A força estratégica do marketing. Com mais de 12 anos de experiência e bagagem de multinacionais e resorts como Aldeia das Águas, Bruno eleva a Extreme a um padrão de excelência global.",
  },
];

const founder = {
  name: "Marcelo Cruz",
  role: "Fundador",
  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  quote:
    "Fundador da Extreme. Sua paixão por conectar pessoas e lugares moldou nossa história. Seu legado vive em cada roteiro que criamos.",
};

export default function TeamSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">
            Quem faz acontecer
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Nossa Liderança
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Uma família unida por um propósito: realizar o seu sonho.
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {leaders.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-muted/50 hover:bg-card p-8 rounded-[2.5rem] border border-border hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative w-28 h-28 mb-6 rounded-full p-1 border-2 border-primary/20 group-hover:border-primary/50 transition-colors mx-auto">
                <img
                  alt={`Foto de ${member.name} - ${member.role}`}
                  className="w-full h-full object-cover rounded-full shadow-md"
                  src={member.img}
                  loading="lazy"
                  width={112}
                  height={112}
                />
                <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-1.5 rounded-full shadow-lg border-2 border-background">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mt-2 mb-4">
                  {member.role}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founder Memorial */}
        <div className="relative flex flex-col items-center justify-center pt-8 pb-16">
          <div className="absolute top-0 w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group rotate-2 hover:rotate-0 transition-all duration-700 ease-out z-20 max-w-md w-full"
          >
            <div className="bg-card p-4 pb-24 rounded-[2rem] shadow-2xl border border-border/50 relative">
              <div className="overflow-hidden rounded-[1.5rem] aspect-square relative grayscale hover:grayscale-0 transition-all duration-1000 bg-muted">
                <img
                  alt={`Memorial ${founder.name} - Fundador`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100"
                  src={founder.img}
                  loading="lazy"
                  width={600}
                  height={600}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
              </div>
              <div className="absolute bottom-6 left-0 right-0 text-center px-6">
                <h3 className="font-display font-black text-3xl md:text-4xl text-foreground opacity-25 uppercase tracking-[0.2em] mb-1 select-none">
                  ETERNAMENTE
                </h3>
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                  <span className="text-foreground font-bold text-xl">
                    {founder.name} - Fundador
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop quote */}
            <div className="absolute -top-24 -left-12 bg-foreground text-background p-6 rounded-3xl shadow-xl max-w-[280px] transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 z-30 border border-border/10 hidden md:block">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Fundador
                </span>
              </div>
              <p className="text-sm font-medium leading-relaxed italic opacity-90">
                "{founder.quote}"
              </p>
            </div>

            {/* Mobile quote */}
            <div className="md:hidden mt-8 bg-foreground text-background p-6 rounded-3xl shadow-xl border border-border/10">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Fundador
                </span>
              </div>
              <p className="text-sm font-medium leading-relaxed italic opacity-90">
                "{founder.quote}"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
