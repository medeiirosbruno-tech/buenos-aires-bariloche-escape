import { motion } from "framer-motion";
import { Check, AlertCircle, Sparkles, Shield, Clock } from "lucide-react";

const included = [
  "Passagens aéreas ida e volta",
  "Hospedagem 7 noites (2 hotéis)",
  "Transfers em ambas as cidades",
  "5 passeios completos",
  "Seguro viagem incluso",
  "Suporte 24h da agência",
];

const notes = [
  "Valores sujeitos à alteração conforme cotação do aéreo",
  "Valor base considerando saída do aeroporto GIG",
  "Valor para acomodação em apartamento duplo",
  "Apartamento single com variação conforme disponibilidade",
  "Hotel poderá ser substituído por outro de mesmo padrão",
  "Passeios podem ser personalizados",
];

const highlights = [
  { icon: Shield, label: "Pagamento seguro" },
  { icon: Clock, label: "Parcele em até 12x" },
  { icon: Sparkles, label: "Vagas limitadas" },
];

export default function PricingSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">Investimento</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold text-foreground">
            Sua aventura <span className="text-gradient-brand">começa aqui</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glowing border effect */}
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-primary via-primary/50 to-brand-gold opacity-20 blur-xl" />
          <div className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-br from-primary via-primary/40 to-brand-gold" />

          <div className="relative rounded-[calc(2rem-2px)] bg-card overflow-hidden">
            {/* Top accent strip */}
            <div className="h-1.5 bg-gradient-to-r from-primary via-primary to-brand-gold" />

            <div className="p-8 sm:p-12">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20"
                >
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Oferta exclusiva • Setembro 2025</span>
                </motion.div>
              </div>

              {/* Price block */}
              <div className="text-center mb-8">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Por pessoa em apto duplo • Saída GIG
                </p>
                <div className="mt-5 flex items-baseline justify-center gap-1">
                  <span className="text-xl text-muted-foreground font-medium">R$</span>
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="text-7xl sm:text-8xl font-display font-bold text-gradient-brand leading-none"
                  >
                    6.990
                  </motion.span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  01 a 08 de Setembro de 2025
                </p>
              </div>

              {/* Highlight badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground"
                  >
                    <h.icon className="w-4 h-4 text-primary" />
                    {h.label}
                  </div>
                ))}
              </div>

              {/* Included items */}
              <div className="border-t border-border pt-8 mb-8">
                <p className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wider">
                  Tudo incluso no pacote:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {included.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-6 h-6 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary-foreground" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://wa.me/5500000000000?text=Olá! Quero garantir minha vaga no pacote Bariloche + Buenos Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group relative inline-flex items-center justify-center gap-2 px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-gold transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-brand-gold to-primary/80" />
                  <span className="relative text-brand-gold-foreground">🔥 Reservar agora</span>
                </a>
                <a
                  href="https://wa.me/5500000000000?text=Olá! Gostaria de tirar dúvidas sobre o pacote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-5 rounded-2xl border-2 border-primary text-primary font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  Tirar dúvidas
                </a>
              </div>

              {/* Notes */}
              <div className="rounded-2xl bg-muted/60 p-6">
                <div className="flex items-start gap-2 mb-3">
                  <AlertCircle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Observações</p>
                </div>
                <ul className="space-y-1.5">
                  {notes.map((note) => (
                    <li key={note} className="text-xs text-muted-foreground leading-relaxed">• {note}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
