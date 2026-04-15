import { motion } from "framer-motion";
import { Plane, Hotel, Bus, Map, Shield, Headphones } from "lucide-react";

const items = [
  { icon: Plane, title: "Aéreo Ida e Volta", desc: "Bagagem de mão 10kg + 1 mochila" },
  { icon: Hotel, title: "Hospedagem Premium", desc: "7 noites em hotéis selecionados" },
  { icon: Bus, title: "Transfers Completos", desc: "Chegada e saída em ambas cidades" },
  { icon: Map, title: "5 Passeios Inclusos", desc: "Buenos Aires e Bariloche" },
  { icon: Shield, title: "Seguro Viagem", desc: "Cobertura completa inclusa" },
  { icon: Headphones, title: "Suporte 24h", desc: "Assistência durante toda a viagem" },
];

export default function IncludedSection() {
  return (
    <section id="roteiro" className="relative pt-0 pb-20 sm:pb-32 bg-deep-atlantic -mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-electric-azure text-sm font-semibold tracking-[0.2em] uppercase">
            O Pacote Completo
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-white mt-4">
            Tudo o que você precisa.
            <br />
            <span className="text-glacier/40">Nada que você não precise.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-electric-azure/30 transition-all duration-500 hover:bg-white/[0.05]"
            >
              <div className="w-12 h-12 rounded-xl bg-electric-azure/10 flex items-center justify-center mb-5 group-hover:bg-electric-azure/20 transition-colors">
                <item.icon className="w-6 h-6 text-electric-azure" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">{item.title}</h3>
              <p className="text-glacier/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
