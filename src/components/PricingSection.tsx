import { motion } from "framer-motion";
import { Check, AlertCircle } from "lucide-react";

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

export default function PricingSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
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
          className="relative rounded-3xl overflow-hidden bg-gradient-brand p-[2px]"
        >
          <div className="rounded-3xl bg-card p-8 sm:p-12">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Por pessoa em apto duplo • Saída GIG</p>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-lg text-muted-foreground">R$</span>
                <span className="text-6xl sm:text-7xl font-display font-bold text-gradient-brand">6.990</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">01 a 08 de Setembro de 2025</p>
            </div>

            <div className="border-t border-border pt-8 mb-8">
              <p className="text-sm font-semibold text-foreground mb-4">Incluso no pacote:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://wa.me/5500000000000?text=Olá! Quero garantir minha vaga no pacote Bariloche + Buenos Aires"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-brand-gold-foreground font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-premium"
              >
                Reservar agora
              </a>
              <a
                href="https://wa.me/5500000000000?text=Olá! Gostaria de tirar dúvidas sobre o pacote"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                Tirar dúvidas
              </a>
            </div>

            <div className="rounded-xl bg-muted p-5">
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
        </motion.div>
      </div>
    </section>
  );
}
