import { motion } from "framer-motion";
import logoExtreme from "@/assets/logo-extreme.png";
import logoCadastur from "@/assets/cadastur.png";
import logoAbav from "@/assets/abav.webp";
import logoMinisterio from "@/assets/ministerio-turismo.png";

export default function FooterSection() {
  return (
    <footer className="py-14 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* Top: Logo left + Address right */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
            {/* Left - Logo + info */}
            <div className="flex flex-col gap-3">
              <img
                src={logoExtreme}
                alt="Extreme Viagens"
                className="h-14 w-auto"
              />
              <div className="space-y-0.5 text-xs text-gray-400">
                <p>Av. Barão do Rio Branco, 1871 - Centro, Juiz de Fora - MG, 36013-020</p>
                <p>
                  <a href="mailto:comercial@extremeviagens.com.br" className="hover:text-electric-azure transition-colors">
                    comercial@extremeviagens.com.br
                  </a>
                </p>
                <p>CNPJ: 29.058.132/0001-56</p>
              </div>
            </div>

            {/* Right - Copyright */}
            <p className="text-xs text-gray-300 sm:text-right sm:self-end">
              © {new Date().getFullYear()} Extreme Viagens. Todos os direitos reservados.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100" />

          {/* Bottom: Certifications */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Segurança e Certificação
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <img src={logoCadastur} alt="Cadastur" className="h-10 w-auto opacity-70" />
              <img src={logoAbav} alt="ABAV" className="h-12 w-auto opacity-70" />
              <img src={logoMinisterio} alt="Ministério do Turismo" className="h-10 w-auto opacity-70" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
