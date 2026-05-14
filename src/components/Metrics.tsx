import { motion, animate, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Star, Building2 } from 'lucide-react';

function CountUp({ to, label, suffix = "", delay = 0 }: { to: number, label: string, suffix?: string, delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, to, {
        duration: 2,
        delay,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [to, suffix, isInView, delay]);

  return (
    <div ref={containerRef} className="flex flex-col items-center">
      <span ref={ref} className="text-h1 font-mono font-bold text-gradient mb-2">
        0{suffix}
      </span>
      <span className="text-body text-white/70 font-medium text-center">{label}</span>
    </div>
  );
}

export default function Metrics() {
  const metrics = [
    { value: 85, suffix: "%", label: "Aumento na Visibilidade Local", icon: <TrendingUp size={24}/> },
    { value: 30, suffix: "%", label: "Novos Clientes Mensais", icon: <Users size={24}/> },
    { value: 5, suffix: " Estrelas", label: "Média de Avaliações", icon: <Star size={24}/> },
    { value: 100, suffix: "+", label: "Empresas Otimizadas", icon: <Building2 size={24}/> },
  ];

  return (
    <section id="resultados" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-50">
        <div className="w-full max-w-4xl h-40 bg-gold/5 blur-[100px] rounded-[100%]" />
      </div>

      <div className="custom-container max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 font-display mb-8"
          >
            Resultados Que Você <span className="text-gradient">Pode Ver</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 glass p-8 md:p-12 border-white/10 rounded-3xl relative">
          {/* subtle inside glow */}
          <div className="absolute inset-x-10 bottom-0 h-1/2 bg-gradient-to-t from-gold/5 to-transparent rounded-b-3xl pointer-events-none" />
          
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center relative p-4"
            >
              <div className="text-gold/50 mb-4 bg-white/5 p-3 rounded-2xl glass">
                {metric.icon}
              </div>
              <CountUp to={metric.value} suffix={metric.suffix} label={metric.label} delay={idx * 0.1} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
