import { motion } from "framer-motion";
import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";
import team4 from "@/assets/team-4.png";

const team = [
  {
    name: "Ana Paula Ferreira",
    role: "Fundadora & CEO",
    location: "Rio de Janeiro",
    tag: "Fundadora",
    img: team1,
    bio: "40 anos transformando viagens em experiências inesquecíveis ao redor do mundo.",
  },
  {
    name: "Carlos Menezes",
    role: "Diretor Comercial",
    location: "São Paulo",
    tag: "Comercial",
    img: team2,
    bio: "Especialista em roteiros premium na América do Sul e Europa há 18 anos.",
  },
  {
    name: "Juliana Costa",
    role: "Consultora Sênior",
    location: "Curitiba",
    tag: "Consultora",
    img: team3,
    bio: "Patagônia e Argentina são suas paixões. Já percorreu cada canto de Bariloche.",
  },
  {
    name: "Rafael Drummond",
    role: "Suporte & Operações",
    location: "Belo Horizonte",
    tag: "Operações",
    img: team4,
    bio: "Garante que cada detalhe da sua viagem seja executado com perfeição.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Nossa Equipe</span>
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-3xl font-display font-bold text-foreground mb-4"
        >
          Pessoas que vivem o que vendem
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-12 max-w-md mx-auto"
        >
          Cada membro da nossa equipe já pisou nos destinos que recomenda.
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-5 rounded-2xl glass-card text-center"
            >
              <div className="inline-block px-2.5 py-1 rounded-full bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-wider mb-4">
                {member.tag}
              </div>
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors duration-500">
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h4 className="text-sm font-bold text-foreground">{member.name}</h4>
              <p className="text-xs text-primary font-medium mt-0.5">{member.role}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{member.location}</p>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
