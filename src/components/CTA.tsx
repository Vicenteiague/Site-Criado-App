import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass border border-gold/30 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-[0_0_50px_rgba(218,165,32,0.1)]"
        >
          {/* Subtle animated background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LCAyMTUsIDAsIDAuMSkiLz48L3N2Zz4=')] opacity-30" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-6 text-white">
              Pronto para Levar Seu Negócio ao <span className="text-gradient">Próximo Nível?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
              Fale com nossos especialistas e descubra como podemos impulsionar sua presença online hoje mesmo. A consultoria inicial é o primeiro passo para o topo.
            </p>
            
            <a 
              href="https://wa.me/5567993174612" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-gold hover:bg-gold-light text-black font-extrabold text-lg transition-all shadow-[0_0_30px_rgba(218,165,32,0.5)] hover:shadow-[0_0_50px_rgba(255,215,0,0.7)] hover:-translate-y-1 w-full sm:w-auto"
            >
              {/* WhatsApp Icon SVG */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-message-circle"
              >
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
              </svg>
              Fale Conosco no WhatsApp!
              <ArrowRight size={20} className="ml-2" />
            </a>
            
            <p className="mt-6 text-sm text-white/50">Respostas rápidas em horário comercial.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
