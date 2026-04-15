import { motion } from "framer-motion";
import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";
import team4 from "@/assets/team-4.png";

const team = [
  { name: "Ana Paula", role: "Diretora de Viagens", img: team1 },
  { name: "Rafael Santos", role: "Consultor de Destinos", img: team2 },
  { name: "Mariana Lima", role: "Atendimento Premium", img: team3 },
  { name: "Carlos Eduardo", role: "Fundador & CEO", img: team4 },
];

export default function TeamSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">Nossa equipe</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
            Quem cuida da sua viagem
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="text-center group"
            >
              <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 mb-4">
                <div className="w-full h-full rounded-3xl overflow-hidden ring-2 ring-border/30 ring-offset-2 ring-offset-background shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] group-hover:shadow-[0_16px_40px_-12px_rgba(0,132,237,0.15)] transition-all duration-500 group-hover:ring-electric-azure/30">
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-sm font-bold text-foreground">{member.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
