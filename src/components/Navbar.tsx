import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plane, Menu, X } from "lucide-react";

const links = [
  { label: "Roteiro", href: "#roteiro" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Sobre nós", href: "#sobre" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-xl shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-brand flex items-center justify-center">
            <Plane className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className={`font-display font-bold text-lg ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
            Extreme Viagens
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5500000000000?text=Olá! Tenho interesse no pacote"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-gradient-gold text-brand-gold-foreground text-sm font-bold hover:scale-105 transition-transform"
          >
            Fale conosco
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? (
            <X className={`w-6 h-6 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
          )}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border"
        >
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-foreground py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-5 py-3 rounded-full bg-gradient-gold text-brand-gold-foreground text-sm font-bold"
            >
              Fale conosco
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
