import { motion } from "framer-motion";
import { Check, CircleAlert } from "lucide-react";

const included = [
  { text: "Passagens aéreas ida e volta", emoji: "✈️" },
  { text: "7 noites de hospedagem", emoji: "🏨" },
  { text: "Transfers em ambas cidades", emoji: "🚐" },
  { text: "Passeios inclusos", emoji: "🗺️" },
  { text: "Seguro viagem completo", emoji: "🛡️" },
  { text: "Suporte 24h da agência", emoji: "📞" },
  { text: "Show de tango com jantar", emoji: "💃" },
  { text: "Café da manhã em Bariloche", emoji: "☕" },
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
    <section id="reserva" className="relative py-20 sm:py-32 bg-deep-atlantic overflow-hidden rounded-t-[3rem] sm:rounded-t-[5rem]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solar-flare/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric-azure/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-solar-flare/5 blur-[120px] pointer-events-none" />

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
          <h2 className="font-display text-3xl sm:text-5xl text-white mt-4 font-black">
            8 Dias. 2 Destinos.
            <br />
            <span className="text-glacier/40">Experiência Completa.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl rounded-[2rem] p-6 sm:p-10 lg:p-14 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-6">O que está incluso</h3>
                <div className="space-y-4">
                  {included.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-7 h-7 rounded-xl bg-electric-azure/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Check className="w-3.5 h-3.5 text-electric-azure" />
                      </div>
                      <span className="text-glacier/70 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-8">
                  <span className="text-glacier/40 text-xs tracking-widest uppercase">
                    Bariloche + Buenos Aires · Setembro
                  </span>

                  {/* PIX price */}
                  <div className="mt-4 mb-1">
                    <span className="text-electric-azure/60 text-[0.65rem] font-semibold tracking-widest uppercase">No PIX</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-glacier/40 text-xl font-display font-bold">R$</span>
                    <motion.span
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="font-display font-black text-6xl sm:text-7xl text-solar-flare"
                    >
                      5.200
                    </motion.span>
                  </div>
                  <p className="text-glacier/50 text-sm mt-1">
                    por pessoa · apto duplo · saída GIG
                  </p>

                  {/* Cartão micro card */}
                  <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.08]">
                    <span className="text-glacier/50 text-sm">ou</span>
                    <span className="text-glacier/90 font-display font-bold text-sm bg-electric-azure/15 px-2.5 py-1 rounded-lg">12x R$ 650</span>
                    <span className="text-glacier/50 text-sm">no cartão</span>
                  </div>
                </div>

                <motion.a
                  href="https://wa.me/5500000000000?text=Olá! Tenho interesse no pacote Bariloche + Buenos Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full max-w-sm px-8 py-4 bg-solar-flare hover:bg-electric-azure text-deep-atlantic hover:text-white font-display font-bold text-lg rounded-2xl transition-all duration-300 shadow-[0_20px_50px_-12px_rgba(255,214,0,0.3)] hover:shadow-[0_20px_50px_-12px_rgba(0,132,237,0.3)] text-center block"
                >
                  Quero garantir minha vaga 🔥
                </motion.a>
                <p className="text-glacier/30 text-xs mt-4">
                  Resposta em até 2 horas · Sem compromisso
                </p>
              </div>
            </div>

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
