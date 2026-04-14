import { motion } from "framer-motion";
import { Plane, Hotel, Car, Map, Shield, Headphones } from "lucide-react";

const items = [
  { icon: Plane, title: "Aéreo Ida e Volta", desc: "Bagagem de mão 10kg + 1 mochila" },
  { icon: Hotel, title: "Hospedagem Premium", desc: "7 noites em hotéis selecionados" },
  { icon: Car, title: "Transfers Completos", desc: "Chegada e saída em ambas cidades" },
  { icon: Map, title: "5 Passeios Inclusos", desc: "Buenos Aires e Bariloche" },
  { icon: Shield, title: "Seguro Viagem", desc: "Cobertura completa inclusa" },
  { icon: Headphones, title: "Suporte 24h", desc: "Assistência durante toda a viagem" },
];

export default function IncludedSection() {
  return (
    <section id="roteiro" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">O Pacote Completo</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground mb-16"
        >
          Tudo o que você precisa.<br />
          <span className="text-gradient-brand">Nada que você não precise.</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-7 rounded-2xl glass-card hover:bg-white/[0.08] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors duration-500">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-1.5">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
