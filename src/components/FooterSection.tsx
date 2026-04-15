import { motion } from "framer-motion";
import { Plane } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="py-12 bg-deep-atlantic border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-electric-azure/20 flex items-center justify-center shadow-[0_4px_16px_-4px_rgba(0,132,237,0.3)]">
              <Plane className="w-5 h-5 text-electric-azure" />
            </div>
            <div>
              <p className="font-display font-bold text-white">Extreme Viagens</p>
              <p className="text-xs text-glacier/40">Colecionando momentos desde 1984</p>
            </div>
          </div>

          <p className="text-sm text-glacier/40">
            © {new Date().getFullYear()} Extreme Viagens. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
