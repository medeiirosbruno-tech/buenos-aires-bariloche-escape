import { motion } from "framer-motion";
import hotelImg from "@/assets/hotel-premium.jpg";
import { MapPin, Coffee, X as XIcon } from "lucide-react";

const hotels = [
  {
    city: "Buenos Aires",
    name: "Hotel La Fresque",
    dates: "01 a 04 de Setembro",
    desc: "Localização estratégica no coração de Buenos Aires, próximo às principais atrações e com fácil acesso ao transporte público.",
    breakfast: false,
  },
  {
    city: "Bariloche",
    name: "Hotel La Malinka",
    dates: "04 a 08 de Setembro",
    desc: "Charme e conforto com vista para as montanhas. Café da manhã incluso para começar cada dia de aventura na Patagônia com energia.",
    breakfast: true,
  },
];

export default function HospedagemSection() {
  return (
    <section id="hospedagem" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Hospedagem</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground mb-16"
        >
          Onde o descanso<br />
          <span className="text-gradient-brand">também é experiência</span>
        </motion.h2>

        <div className="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
          {/* Hotel image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={hotelImg}
              alt="Hospedagem premium com vista para montanhas"
              loading="lazy"
              width={1280}
              height={720}
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          {/* Hotel cards */}
          <div className="space-y-5">
            {hotels.map((hotel, i) => (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-6 rounded-2xl glass-card"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{hotel.city}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-1">{hotel.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{hotel.dates}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{hotel.desc}</p>
                <div className="flex items-center gap-2">
                  {hotel.breakfast ? (
                    <>
                      <Coffee className="w-4 h-4 text-brand-gold" />
                      <span className="text-sm font-medium text-brand-gold">Café da manhã incluso</span>
                    </>
                  ) : (
                    <>
                      <XIcon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Sem café da manhã</span>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
