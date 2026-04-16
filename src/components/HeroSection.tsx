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
            <div className="absolute inset-0 bg-gradient-to-r from-deep-atlantic/50 via-deep-atlantic/30 to-deep-atlantic/60" />
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
            <div className="absolute inset-0 bg-gradient-to-l from-deep-atlantic/50 via-deep-atlantic/30 to-deep-atlantic/60" />
          </div>
        </div>
        <div className="absolute inset-0 bg-deep-atlantic/20" />
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
          className="mb-4 sm:mb-6 mt-24"
        >
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-2xl bg-electric-azure/10 border border-electric-azure/20 text-electric-azure text-xs sm:text-sm font-medium backdrop-blur-md shadow-[0_8px_32px_-8px_rgba(0,132,237,0.2)] animate-badge-pulse"
          >
            <Calendar className="w-4 h-4" />
            Viaje em Setembro
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-[3.2rem] sm:text-6xl lg:text-8xl text-white leading-[0.93]"
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
              className="flex items-center gap-2 px-5 py-3 rounded-[1.5rem] bg-white/[0.06] border border-white/[0.1] backdrop-blur-md shadow-lg hover:shadow-xl hover:bg-white/[0.1] transition-all duration-500"
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
          {/* Pricing glass card */}
          <div className="relative px-10 sm:px-14 py-8 rounded-[2rem] bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
            {/* Subtle glow behind price */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-solar-flare/[0.04] to-transparent pointer-events-none" />
            
            <div className="relative flex flex-col items-center">
              <span className="text-glacier/40 text-[0.65rem] tracking-[0.3em] uppercase font-medium">A partir de</span>
              
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="relative flex items-baseline justify-center mt-3"
              >
                <span className="font-display text-lg sm:text-xl text-solar-flare/50 font-bold absolute right-full mr-1.5 top-3">R$</span>
                <span className="font-display text-6xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-solar-flare via-solar-flare to-solar-flare/70 font-black drop-shadow-[0_0_30px_rgba(255,214,0,0.15)]">5.200</span>
              </motion.div>
              
              <div className="flex items-center gap-2 mt-2">
                <div className="w-6 h-px bg-gradient-to-r from-transparent to-glacier/20" />
                <span className="text-glacier/50 text-xs tracking-wider font-medium uppercase">no pix · por pessoa</span>
                <div className="w-6 h-px bg-gradient-to-l from-transparent to-glacier/20" />
              </div>

              <div className="mt-4 px-4 py-1.5 rounded-xl bg-electric-azure/[0.08] border border-electric-azure/[0.12]">
                <span className="text-glacier/45 text-xs">ou <span className="text-electric-azure/90 font-bold bg-electric-azure/15 px-2 py-0.5 rounded-md">12× R$ 650</span> no cartão</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href="#reserva"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group relative mt-8 px-10 sm:px-14 py-4.5 overflow-hidden font-display font-bold text-base sm:text-lg rounded-2xl transition-all duration-500 text-deep-atlantic bg-gradient-to-r from-solar-flare via-solar-flare to-[oklch(0.90_0.18_85)] shadow-[0_20px_50px_-12px_rgba(255,214,0,0.35),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_25px_60px_-10px_rgba(255,214,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-electric-azure to-[oklch(0.65_0.22_240)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-500">
              Garanta Sua Vaga
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </span>
          </motion.a>
          <p className="text-glacier/30 text-[0.65rem] tracking-wider mt-3 uppercase">Vagas limitadas · Resposta imediata · *Valor pode variar conforme aeroporto de origem e tarifa aérea</p>
        </motion.div>
      </div>
    </section>
  );
}
