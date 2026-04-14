import { motion } from "framer-motion";
import heroImg from "@/assets/hero-bariloche.jpg";
import { Plane, Calendar, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Vista aérea de Bariloche com lago cristalino e montanhas nevadas"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold text-brand-gold-foreground text-sm font-semibold tracking-wide mb-6">
            <Plane className="w-4 h-4" />
            EXTREME VIAGENS — ROTEIRO EXCLUSIVO
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.05] tracking-tight"
        >
          Bariloche <span className="italic font-medium">&</span>
          <br />
          Buenos Aires
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-body leading-relaxed"
        >
          Uma jornada inesquecível pela Patagônia argentina e a vibrante capital portenha. 8 dias de experiências únicas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/5500000000000?text=Olá! Tenho interesse no pacote Bariloche + Buenos Aires"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-brand-gold-foreground font-bold text-lg shadow-premium hover:scale-105 transition-transform duration-300"
          >
            Garanta sua vaga
          </a>
          <a
            href="#roteiro"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            Ver roteiro completo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { icon: Calendar, label: "01 a 08 de Setembro" },
            { icon: MapPin, label: "Buenos Aires + Bariloche" },
            { icon: Plane, label: "Aéreo ida e volta incluso" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-primary-foreground/70">
              <item.icon className="w-5 h-5 text-brand-gold" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60" />
        </motion.div>
      </div>
    </section>
  );
}
