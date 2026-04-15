import { motion } from "framer-motion";
import { Globe, Users, Heart, Award } from "lucide-react";
import officeImg from "@/assets/about-office.jpg";

const stats = [
  { icon: Globe, value: "40+", label: "Anos de experiência" },
  { icon: Users, value: "50 mil+", label: "Viajantes satisfeitos" },
  { icon: Heart, value: "100+", label: "Destinos pelo mundo" },
  { icon: Award, value: "98%", label: "Taxa de satisfação" },
];

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-3xl bg-electric-azure p-8 sm:p-12 lg:p-16 relative overflow-hidden"
      >
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/10 blur-[120px] pointer-events-none" />

        <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <span className="text-sm font-semibold tracking-widest text-white/60 uppercase">Sobre nós</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-display font-bold text-white leading-tight">
              Extreme Viagens: colecionando momentos há mais de 40 anos
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Desde a nossa fundação, a Extreme Viagens se dedica a transformar sonhos em experiências inesquecíveis. São mais de quatro décadas cuidando de cada detalhe para que você só precise se preocupar em aproveitar.
            </p>
          </div>

          {/* Right - Office image card */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={officeImg}
              alt="Extreme Viagens - Escritório"
              loading="lazy"
              width={1024}
              height={768}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>

        {/* Stats - liquid glass cards */}
        <div className="relative mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              animate={{ y: [0, -4, 0] }}
              // @ts-ignore
              transition={{ delay: i * 0.1, y: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" } }}
              className="p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-center hover:bg-white/15 transition-colors duration-500"
            >
              <stat.icon className="w-6 h-6 text-white/80 mx-auto mb-3" />
              <p className="text-2xl sm:text-3xl font-display font-black text-white">{stat.value}</p>
              <p className="mt-1 text-xs sm:text-sm text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
