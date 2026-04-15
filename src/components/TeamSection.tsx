import { motion } from "framer-motion";
import anaLuciaImg from "@/assets/ana-lucia.png";
import bernardoImg from "@/assets/bernardo.png";
import brunoImg from "@/assets/bruno.jpeg";

const leaders = [
  {
    name: "Ana Lucia Miranda",
    role: "Co-fundadora",
    img: anaLuciaImg,
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

export default function TeamSection() {
  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">
            Quem faz acontecer
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground">
            Nossa Liderança
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-base">
            Uma família unida por um propósito: realizar o seu sonho.
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {leaders.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-muted/50 hover:bg-card p-5 rounded-2xl border border-border hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-20 h-20 mb-4 rounded-full p-0.5 border-2 border-primary/20 group-hover:border-primary/50 transition-colors mx-auto">
                <img
                  alt={`Foto de ${member.name} - ${member.role}`}
                  className="w-full h-full object-cover rounded-full shadow-md"
                  src={member.img}
                  loading="lazy"
                  width={80}
                  height={80}
                />
                <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-1 rounded-full shadow-lg border-2 border-background">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold mt-1.5 mb-3">
                  {member.role}
                </span>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
