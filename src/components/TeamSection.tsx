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
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">Nossa equipe</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
            Quem cuida da sua <span className="text-gradient-brand">viagem</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center"
            >
              {/* Avatar with ring */}
              <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-primary/30 to-brand-gold/30 group-hover:from-primary group-hover:to-brand-gold transition-all duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                    <img
                      src={member.img}
                      alt={member.name}
                      loading="lazy"
                      width={512}
                      height={512}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-base font-bold text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
