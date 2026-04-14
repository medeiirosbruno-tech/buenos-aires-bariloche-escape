import { motion } from "framer-motion";
import heroImg from "@/assets/hero-bariloche.jpg";
import buenosAiresImg from "@/assets/buenos-aires.jpg";
import { MapPin, Calendar, Users, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Split background images */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 relative overflow-hidden">
          <img
            src={buenosAiresImg}
            alt="Buenos Aires cityscape"
            className="absolute inset-0 w-full h-full object-cover scale-110"
            width={960}
            height={1080}
          />
          <div className="absolute bottom-8 left-8 z-10">
            <span className="text-xs font-semibold text-white/60 tracking-widest uppercase">Buenos Aires</span>
          </div>
        </div>
        <div className="w-1/2 relative overflow-hidden">
          <img
            src={heroImg}
            alt="Bariloche mountains and lake"
            className="absolute inset-0 w-full h-full object-cover scale-110"
            width={960}
            height={1080}
          />
          <div className="absolute bottom-8 right-8 z-10">
            <span className="text-xs font-semibold text-white/60 tracking-widest uppercase">Bariloche</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/80 text-sm font-medium">
            <Calendar className="w-4 h-4" />
            01 a 08 de Setembro de 2025
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-[-0.066em]">
            BARILOCHE
          </h1>
          <div className="my-2 sm:my-3">
            <span className="text-brand-gold text-3xl sm:text-4xl md:text-5xl font-display font-black">+</span>
          </div>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-[-0.066em]">
            BUENOS AIRES
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-base sm:text-lg text-white/70 max-w-2xl mx-auto font-body leading-relaxed"
        >
          8 dias de imersão entre o charme europeu da capital argentina e a grandiosidade selvagem da Patagônia.
        </motion.p>

        {/* Info pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: MapPin, label: "2 Destinos" },
            { icon: Calendar, label: "8 Dias" },
            { icon: Users, label: "Tudo Incluso" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
              <item.icon className="w-4 h-4 text-white/60" />
              <span className="text-sm font-medium text-white/80">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Price + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10"
        >
          <p className="text-sm text-white/50 mb-1">A partir de</p>
          <p className="text-5xl sm:text-6xl font-display font-black text-gradient-gold leading-none">
            R$ 6.990
          </p>
          <p className="text-sm text-white/50 mt-1">por pessoa</p>

          <a
            href="https://wa.me/5500000000000?text=Olá! Quero garantir minha vaga no pacote Bariloche + Buenos Aires"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-10 py-4 rounded-full bg-gradient-gold text-brand-gold-foreground font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-premium"
          >
            Garanta Sua Vaga
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </div>
    </section>
  );
}
