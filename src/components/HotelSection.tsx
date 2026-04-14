import { motion } from "framer-motion";
import hotelImg from "@/assets/hotel-hospedagem.jpg";
import { MapPin, Coffee, Star } from "lucide-react";

const hotels = [
  {
    city: "Buenos Aires",
    name: "Hotel La Fresque",
    dates: "01 a 04 de Setembro",
    desc: "Localização estratégica no coração de Buenos Aires, próximo às principais atrações e com fácil acesso ao transporte público.",
    breakfast: false,
    breakfastText: "Sem café da manhã",
  },
  {
    city: "Bariloche",
    name: "Hotel La Malinka",
    dates: "04 a 08 de Setembro",
    desc: "Charme e conforto com vista para as montanhas. Café da manhã incluso para começar cada dia de aventura na Patagônia com energia.",
    breakfast: true,
    breakfastText: "Café da manhã incluso",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 mt-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 text-solar-flare fill-solar-flare" />
      ))}
    </div>
  );
}

export default function HotelSection() {
  return (
    <section id="hospedagem" className="relative py-20 sm:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-azure/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-electric-azure text-sm font-semibold tracking-[0.2em] uppercase">
            Hospedagem
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-deep-atlantic mt-4">
            Onde o descanso
            <br />
            <span className="text-deep-atlantic/30">também é experiência</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-12 aspect-[21/9]"
        >
          <img
            src={hotelImg}
            alt="Hospedagem Premium"
            loading="lazy"
            className="w-full h-full object-cover"
            width={1920}
            height={768}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotels.map((hotel, i) => (
            <motion.div
              key={hotel.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-electric-azure/40 transition-all duration-500 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-electric-azure" />
                <span className="text-electric-azure text-sm font-semibold">{hotel.city}</span>
              </div>
              <h3 className="font-display font-bold text-xl text-deep-atlantic mb-1">
                {hotel.name}
              </h3>
              <p className="text-deep-atlantic/40 text-sm mb-4">{hotel.dates}</p>
              <p className="text-deep-atlantic/60 text-sm leading-relaxed mb-4">{hotel.desc}</p>
              <div className="flex items-center gap-2">
                <Coffee className={`w-4 h-4 ${hotel.breakfast ? "text-solar-flare" : "text-deep-atlantic/30"}`} />
                <span className={`text-sm ${hotel.breakfast ? "text-yellow-600 font-medium" : "text-deep-atlantic/40"}`}>
                  {hotel.breakfastText}
                </span>
              </div>
              <Stars />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
