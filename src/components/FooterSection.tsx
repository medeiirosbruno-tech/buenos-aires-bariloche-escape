import { Plane } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center">
              <Plane className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="font-display font-bold text-foreground">Extreme Viagens</p>
              <p className="text-xs text-muted-foreground">Colecionando momentos desde 1984</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Extreme Viagens. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
