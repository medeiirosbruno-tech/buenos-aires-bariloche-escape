import { motion } from "framer-motion";
import { Plane, Hotel, Car, Map, Shield, Headphones } from "lucide-react";

const items = [
  { icon: Plane, title: "Passagens Aéreas", desc: "Ida e volta + bagagem de mão 10kg + 1 mochila" },
  { icon: Hotel, title: "Hospedagem Completa", desc: "Hotel La Fresque (BA) + Hotel La Malinka (Bariloche)" },
  { icon: Car, title: "Transfers Privativos", desc: "Chegada e saída em ambas as cidades" },
  { icon: Map, title: "5 Passeios Inclusos", desc: "City Tour, Tigre, Tango, Circuito Chico e Cerro Catedral" },
  { icon: Shield, title: "Seguro Viagem", desc: "Cobertura completa durante toda a viagem" },
  { icon: Headphones, title: "Suporte 24h", desc: "Assistência da agência durante toda a viagem" },
];

export default function IncludedSection() {
  return (
    <section className="py-20 sm:py-28 bg-surface-cool">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">Tudo incluso</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold text-foreground">
            O que está no <span className="text-gradient-brand">pacote</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gradient-brand group-hover:text-primary-foreground transition-colors duration-500">
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
