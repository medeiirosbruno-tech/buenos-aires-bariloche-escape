import { motion } from "framer-motion";
import { Check, AlertCircle } from "lucide-react";

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

export default function ReservaSection() {
  return (
    <section id="reserva" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Sua Reserva</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground mb-16"
        >
          8 Dias. 2 Destinos.<br />
          <span className="text-gradient-brand">Experiência Completa.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden"
        >
          {/* Glow border */}
          <div className="relative">
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary via-primary/30 to-brand-gold opacity-60" />

            <div className="relative rounded-3xl bg-card overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-primary via-primary to-brand-gold" />

              <div className="p-8 sm:p-12">
                {/* What's included */}
                <h3 className="text-lg font-display font-bold text-foreground mb-6">O que está incluso</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-10">
                  {included.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-border mb-10" />

                {/* Price block */}
                <div className="text-center mb-10">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Bariloche + Buenos Aires · 01 a 08/09
                  </p>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-xl text-muted-foreground">R$</span>
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="text-6xl sm:text-7xl font-display font-black text-gradient-gold leading-none"
                    >
                      6.990
                    </motion.span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    por pessoa · em apto duplo · saída GIG
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/5500000000000?text=Olá! Tenho interesse no pacote Bariloche + Buenos Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-8 py-5 rounded-2xl bg-gradient-gold text-brand-gold-foreground font-bold text-lg hover:scale-[1.02] transition-transform duration-300"
                >
                  Falar com um Consultor
                </a>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  Resposta em até 2 horas · Sem compromisso
                </p>

                {/* Notes */}
                <div className="mt-10 rounded-2xl bg-muted/30 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-4 h-4 text-muted-foreground" />
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Observações importantes</p>
                  </div>
                  <ul className="space-y-1.5">
                    {notes.map((note) => (
                      <li key={note} className="text-xs text-muted-foreground leading-relaxed">• {note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
