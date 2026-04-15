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
    <section id="roteiro" className="relative z-[5] pt-0 pb-24 sm:pb-36 bg-deep-atlantic rounded-b-[3rem] sm:rounded-b-[5rem] shadow-[0_40px_100px_-20px_rgba(0,20,60,0.7)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 relative">
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
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/[0.08] hover:border-electric-azure/30 transition-all duration-500 hover:bg-white/[0.07] backdrop-blur-sm shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_-12px_rgba(0,132,237,0.15)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-electric-azure/10 flex items-center justify-center mb-5 group-hover:bg-electric-azure/20 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(0,132,237,0.2)]">
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
