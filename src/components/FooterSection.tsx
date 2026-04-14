import { Plane, Mail, Phone, Instagram, Facebook } from "lucide-react";

const navLinks = [
  { label: "O Roteiro", href: "#roteiro" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Hospedagem", href: "#hospedagem" },
  { label: "Quem Somos", href: "#sobre" },
  { label: "Reservar", href: "#reserva" },
];

export default function FooterSection() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Plane className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-sm text-foreground tracking-tight">EXTREME</span>
                <span className="text-[10px] font-semibold text-primary tracking-[0.2em]">VIAGENS</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mais de 40 anos transformando sonhos em experiências inesquecíveis. Colecionadores de momentos desde 1984.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Navegação</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Contato</h4>
            <div className="space-y-2">
              <a href="mailto:contato@extremeviagens.com.br" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                contato@extremeviagens.com.br
              </a>
              <a href="tel:+550000000000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                (00) 00000-0000
              </a>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Extreme Viagens. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            CNPJ: 00.000.000/0001-00 · Cadastur: 00.000000.00.0000-0
          </p>
        </div>
      </div>
    </footer>
  );
}
