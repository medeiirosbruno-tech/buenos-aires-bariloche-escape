import { motion } from "framer-motion";
import logoExtreme from "@/assets/logo-extreme.png";

export default function FooterSection() {
  return (
    <footer className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <img
            src={logoExtreme}
            alt="Extreme Viagens"
            className="h-16 sm:h-20 w-auto"
          />

          <div className="space-y-1 text-sm text-gray-500">
            <p>Av. Barão do Rio Branco, 1871 - Centro, Juiz de Fora - MG, 36013-020</p>
            <p>
              <a href="mailto:comercial@extremeviagens.com.br" className="hover:text-electric-azure transition-colors">
                comercial@extremeviagens.com.br
              </a>
            </p>
          </div>

          <p className="text-xs text-gray-400">
            CNPJ: 29.058.132/0001-56
          </p>

          <p className="text-xs text-gray-300">
            © {new Date().getFullYear()} Extreme Viagens. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
