import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/40 border-t border-white/5">
      <div className="custom-container max-w-7xl">
        <div className="text-center mb-12">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-white/90">Aberto agora</span>
            <span className="text-xs font-mono text-white/70 ml-2 border-l border-white/20 pl-3">Fecha às 18h</span>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 font-display mb-8"
          >
            Onde Estamos <span className="text-gradient">Localizados</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body text-white/70 max-w-2xl mx-auto flex items-center justify-center gap-2"
          >
            <MapPin size={20} className="text-gold shrink-0" />
            <span>Venha tomar um café conosco ou fale online para todo o Brasil.</span>
          </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="relative max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden border border-white/10 p-2 shadow-[0_0_30px_rgba(218,165,32,0.1)]"
        >
          <div className="w-full aspect-square md:aspect-video lg:aspect-[21/9] rounded-2xl overflow-hidden relative bg-white/5">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.426280186347!2d-55.7132969254635!3d-22.52569892436112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94626fc36a5e31cf%3A0x84d4297281a87a15!2sStart%20Mkt%20Local%20-%20Ag%C3%AAncia%20de%20marketing!5e0!3m2!1spt-BR!2sbr!4v1762298523594!5m2!1spt-BR!2sbr" 
                className="w-full h-full border-0 absolute top-0 left-0 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Start Mkt Local"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
