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
        className="max-w-6xl mx-auto rounded-[2.5rem] bg-electric-azure p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,132,237,0.3)]"
      >
        {/* Subtle glow effects */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/5 blur-[100px] pointer-events-none" />

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
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
          >
            <img
              src={officeImg}
              alt="Extreme Viagens - Escritório"
              loading="lazy"
              width={1024}
              height={768}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </motion.div>
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
              whileHover={{ y: -4 }}
              className="p-5 sm:p-6 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 text-center hover:bg-white/15 transition-all duration-500 shadow-xl hover:shadow-2xl"
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
