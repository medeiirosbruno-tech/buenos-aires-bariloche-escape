import { motion } from "framer-motion";
import heroImg from "@/assets/hero-bariloche.jpg";
import buenosAiresImg from "@/assets/buenos-aires.jpg";
import { Calendar, MapPin, Users, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-deep-atlantic z-10 pb-32 sm:pb-40">
      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-b from-transparent to-deep-atlantic z-20 pointer-events-none" />
      {/* Split background images */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 flex w-full h-full">
          <div className="w-1/2 relative overflow-hidden hidden md:block">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
              src={buenosAiresImg}
              alt="Buenos Aires"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'center center' }}
              width={960}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-atlantic/70 via-deep-atlantic/50 to-deep-atlantic/85" />
          </div>
          <div className="w-full md:w-1/2 relative overflow-hidden">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
              src={heroImg}
              alt="Bariloche"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'center center' }}
              width={960}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-deep-atlantic/70 via-deep-atlantic/50 to-deep-atlantic/85" />
          </div>
        </div>
        <div className="absolute inset-0 bg-deep-atlantic/40" />
      </div>

      {/* Center divider line */}
      <div className="absolute inset-0 hidden md:block pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-electric-azure/20 to-transparent"
        />
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-electric-azure/10 border border-electric-azure/20 text-electric-azure text-sm font-medium backdrop-blur-md shadow-[0_8px_32px_-8px_rgba(0,132,237,0.2)]"
          >
            <Calendar className="w-4 h-4" />
            Viaje em Setembro
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl lg:text-8xl text-white leading-[0.95]"
        >
          <span className="block">Bariloche <span className="text-solar-flare">&</span></span>
          <span className="block">Buenos Aires</span>
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
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)] hover:bg-white/[0.1] transition-all duration-500"
            >
              <item.icon className="w-4 h-4 text-electric-azure" />
              <span className="text-sm font-medium text-glacier/90">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 sm:mt-12 flex flex-col items-center"
        >
          <div className="text-glacier/50 text-sm mb-1">A partir de</div>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            className="font-display text-5xl sm:text-6xl text-solar-flare font-black"
          >
            R$ 6.990
          </motion.div>
          <div className="text-glacier/50 text-sm mt-1">por pessoa</div>
          <motion.a
            href="#reserva"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 px-8 sm:px-10 py-4 bg-electric-azure hover:bg-solar-flare text-white hover:text-deep-atlantic font-display font-bold text-base sm:text-lg rounded-2xl transition-all duration-300 shadow-[0_20px_50px_-12px_rgba(0,132,237,0.4)] hover:shadow-[0_20px_50px_-12px_rgba(255,214,0,0.4)]"
          >
            Garanta Sua Vaga
          </motion.a>
        </motion.div>

        <div className="absolute bottom-40 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-glacier/30 py-0 px-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
