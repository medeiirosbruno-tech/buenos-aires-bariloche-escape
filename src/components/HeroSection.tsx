import { motion } from "framer-motion";
import heroImg from "@/assets/hero-bariloche.jpg";
import buenosAiresImg from "@/assets/buenos-aires.jpg";
import { Calendar, MapPin, Users, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-deep-atlantic rounded-b-[3rem] sm:rounded-b-[4rem] z-10 pb-24">
      {/* Split background images */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 relative overflow-hidden hidden md:block">
            <img
              src={buenosAiresImg}
              alt="Buenos Aires"
              className="absolute inset-0 w-full h-full object-cover scale-110"
              width={960}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-atlantic/60 via-deep-atlantic/40 to-deep-atlantic/80" />
          </div>
          <div className="w-full md:w-1/2 relative overflow-hidden">
            <img
              src={heroImg}
              alt="Bariloche"
              className="absolute inset-0 w-full h-full object-cover scale-110"
              width={960}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-deep-atlantic/60 via-deep-atlantic/40 to-deep-atlantic/80" />
          </div>
        </div>
        <div className="absolute inset-0 bg-deep-atlantic/50" />
        {/* Fill rounded corners */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-deep-atlantic" />
      </div>

      {/* Center divider line */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-electric-azure/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 mt-24"
        >
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-azure/10 border border-electric-azure/20 text-electric-azure text-sm font-medium backdrop-blur-sm"
          >
            <Calendar className="w-4 h-4" />
            Viaje em Setembro
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-6xl lg:text-8xl text-white leading-none"
        >
          <span className="block">BARILOCHE</span>
          <span className="block text-solar-flare text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.3em] my-2 sm:my-4">&</span>
          <span className="block">BUENOS AIRES</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 sm:mt-8 text-glacier/70 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-light"
        >
          8 dias de imersão entre o charme europeu da capital argentina e a grandiosidade selvagem da Patagônia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10"
        >
          {[
            { icon: MapPin, label: "2 Destinos" },
            { icon: Calendar, label: "8 Dias" },
            { icon: Users, label: "Tudo Incluso" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <item.icon className="w-4 h-4 text-electric-azure" />
              <span className="text-sm font-medium text-glacier/90">{item.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 sm:mt-12 flex flex-col items-center"
        >
          <div className="text-glacier/50 text-sm mb-1">A partir de</div>
          <div className="font-display text-5xl sm:text-6xl text-solar-flare font-black">R$ 6.990</div>
          <div className="text-glacier/50 text-sm mt-1">por pessoa</div>
          <a
            href="#reserva"
            className="mt-6 px-8 sm:px-10 py-4 bg-electric-azure hover:bg-solar-flare text-white hover:text-deep-atlantic font-display font-bold text-base sm:text-lg rounded-xl transition-all duration-300 shadow-2xl shadow-electric-azure/30 hover:shadow-solar-flare/30 hover:scale-105"
          >
            Garanta Sua Vaga
          </a>
        </motion.div>

        <div className="absolute bottom-32 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-glacier/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
