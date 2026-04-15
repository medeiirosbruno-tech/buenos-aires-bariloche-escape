import { motion } from "framer-motion";
import { Star } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

const testimonials = [
  {
    name: "Carla Mendes",
    city: "Rio de Janeiro - RJ",
    text: "Simplesmente perfeito! Cada detalhe foi pensado com muito carinho. O hotel em Bariloche tinha uma vista incrível e os passeios foram todos impecáveis.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    city: "São Paulo - SP",
    text: "A Extreme Viagens superou todas as expectativas. O show de tango foi emocionante e o city tour nos mostrou cantinhos que nunca encontraríamos sozinhos.",
    rating: 5,
  },
  {
    name: "Fernanda & Lucas",
    city: "Belo Horizonte - MG",
    text: "Viajamos em lua de mel e foi a melhor decisão! O suporte da agência durante toda a viagem nos deu muita tranquilidade.",
    rating: 5,
  },
  {
    name: "Patrícia Gomes",
    city: "Curitiba - PR",
    text: "Terceira viagem com a Extreme e cada vez melhor. Profissionalismo, atenção aos detalhes e roteiros incríveis.",
    rating: 5,
  },
  {
    name: "André Oliveira",
    city: "Brasília - DF",
    text: "Levei minha família inteira e todos amaram. As crianças adoraram a neve no Cerro Catedral. Atendimento nota 10!",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    city: "Salvador - BA",
    text: "A navegação pelo Delta do Tigre foi uma surpresa maravilhosa. A equipe da Extreme cuida de tudo, é só curtir.",
    rating: 5,
  },
];

const duplicated = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>(0);
  const scrollPos = useRef(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const speed = 0.5;
    const halfWidth = container.scrollWidth / 2;

    const animate = () => {
      if (!isPaused) {
        scrollPos.current += speed;
        if (scrollPos.current >= halfWidth) {
          scrollPos.current = 0;
        }
        container.scrollLeft = scrollPos.current;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused]);

  return (
    <section className="py-20 sm:py-28 bg-surface-cool overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">Depoimentos</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold text-foreground">
            O que dizem nossos <span className="text-gradient-brand">viajantes</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex -space-x-3">
              {[avatar1, avatar2, avatar3, avatar4].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Viajante"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-md"
                />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">+2.400 viajantes satisfeitos</span>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scrolling carousel */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex gap-5 overflow-x-hidden px-6 py-8"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicated.map((t, i) => (
          <motion.div
            key={`${t.name}-${i}`}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 w-[300px] sm:w-[340px] p-6 rounded-3xl bg-white border border-border/40 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-15px_rgba(0,132,237,0.1)] transition-all duration-500"
          >
            <div className="mb-4">
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.city}</p>
            </div>
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <p className="text-foreground/80 leading-relaxed text-sm">"{t.text}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
