import { motion } from "framer-motion";
import { Check, CircleAlert } from "lucide-react";

const included = [
  "Passagens aéreas ida e volta",
  "7 noites de hospedagem",
  "Transfers em ambas cidades",
  "5 passeios inclusos",
  "Seguro viagem completo",
  "Suporte 24h da agência",
  "Show de tango com jantar",
  "Café da manhã em Bariloche",
];

const notes = [
  "Valores sujeitos à alteração conforme cotação do aéreo",
  "Valor base para saída do GIG",
  "Acomodação em apartamento duplo",
  "Apt. single com valor diferenciado",
  "Hotel sujeito a disponibilidade (mesmo padrão)",
  "Passeios personalizáveis conforme preferência",
];

export default function PricingSection() {
  return (
    <section id="reserva" className="relative py-20 sm:py-32 bg-deep-atlantic overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solar-flare/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric-azure/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-solar-flare text-sm font-semibold tracking-[0.2em] uppercase">
            Sua Reserva
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-white mt-4">
            8 Dias. 2 Destinos.
            <br />
            <span className="text-glacier/40">Experiência Completa.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="relative bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl rounded-3xl p-6 sm:p-10 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Left - included */}
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-6">O que está incluso</h3>
                <div className="space-y-4">
                  {included.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-electric-azure/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-electric-azure" />
                      </div>
                      <span className="text-glacier/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - price */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-6">
                  <span className="text-glacier/40 text-sm">
                    Bariloche + Buenos Aires · 01 a 08/09
                  </span>
                  <div className="flex items-baseline justify-center gap-2 mt-3">
                    <span className="text-glacier/40 text-lg">R$</span>
                    <span className="font-display text-6xl sm:text-7xl text-solar-flare">
                      6.990
                    </span>
                  </div>
                  <p className="text-glacier/50 text-sm mt-2">
                    por pessoa · em apto duplo · saída GIG
                  </p>
                </div>
                <a
                  href="https://wa.me/5500000000000?text=Olá! Tenho interesse no pacote Bariloche + Buenos Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-sm px-8 py-4 bg-solar-flare hover:bg-electric-azure text-deep-atlantic hover:text-white font-display font-bold text-lg rounded-xl transition-all duration-300 shadow-2xl shadow-solar-flare/20 hover:shadow-electric-azure/20 hover:scale-[1.02] text-center block"
                >
                  Falar com um Consultor
                </a>
                <p className="text-glacier/30 text-xs mt-4">
                  Resposta em até 2 horas · Sem compromisso
                </p>
              </div>
            </div>

            {/* Notes */}
            <div className="mt-10 pt-8 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 mb-4">
                <CircleAlert className="w-4 h-4 text-glacier/30" />
                <span className="text-glacier/40 text-xs font-medium">Observações importantes</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {notes.map((note) => (
                  <p key={note} className="text-glacier/30 text-xs leading-relaxed">• {note}</p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
