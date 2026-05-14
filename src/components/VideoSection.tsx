import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/50">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-gold/10 blur-[150px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6"
          >
            Veja Como <span className="text-gradient">Transformamos</span> Negócios
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Confira como nossa metodologia de otimização de perfil no Google funciona na prática.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Glass Decorator */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-gold/30 to-gold-light/30 rounded-3xl blur opacity-30" />
          
          <div className="relative glass-card overflow-hidden rounded-3xl border-white/20 shadow-[0_0_50px_rgba(218,165,32,0.15)] pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/UFQy0UxNwIw?autoplay=0&rel=0&modestbranding=1"
              title="Start Mkt Local - Google Meu Negócio"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
