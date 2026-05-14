import { motion } from 'motion/react';
import { ArrowRight, MapPin, Search, Star, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Background Abstract Shapes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/10 rounded-full blur-[120px] -z-10" />
      
      <div className="custom-container relative z-10 split-section">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Label de credibilidade — ACIMA do título */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-label mb-6">
            ⭐ 5.0 · Especialistas em SEO Local
          </div>
          
          {/* Título com fonte display */}
          <h1 className="text-hero font-display font-extrabold leading-tight mb-6">
            Start Mkt Local<br />
            <em className="text-gradient italic font-medium">O seu negócio no topo das buscas no Google.</em>
          </h1>
          
          {/* Subtítulo: proposta de valor em 1 linha */}
          <p className="text-body text-white/70 mb-10 leading-relaxed max-w-xl">
            Aceleramos vendas otimizando o seu Perfil de Empresa no Google. Visibilidade máxima na sua região.
          </p>
          
          {/* CTAs: máximo 2, hierarquia clara */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://wa.me/5567993174612"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-black font-semibold text-lg transition-all shadow-[0_4px_14px_rgba(218,165,32,0.4)] hover:shadow-[0_6px_20px_rgba(255,215,0,0.5)] hover:-translate-y-0.5"
            >
              📲 Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full glass border-white/20 hover:bg-white/10 text-white font-medium text-lg transition-all hover:-translate-y-0.5"
            >
              Ver nossos serviços →
            </a>
          </div>

          {/* Indicadores de confiança */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-3">
            {['Google Meu Negócio Verificado', 'Aceita Pix e Cartão', 'Atendimento para Todo o Brasil', 'WhatsApp Direto'].map(item => (
              <span key={item} className="flex items-center gap-2 text-sm text-white/80 font-medium">
                <CheckCircle2 size={16} className="text-gold shrink-0" /> {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] flex justify-center items-center mt-12 lg:mt-0"
        >
          {/* Glassmorphic abstract representation of Google Maps/Profile */}
          <div className="relative w-full max-w-md aspect-square rounded-full border border-white/10 bg-gradient-to-tr from-white/5 to-transparent flex items-center justify-center shadow-[inset_0_0_100px_rgba(255,255,255,0.02)] border-b-gold/20 border-r-gold/20">
            
            {/* Center Pin */}
            <div className="absolute z-20 flex flex-col items-center">
              <div className="w-40 h-40 md:w-48 md:h-48 glass-card rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(218,165,32,0.3)] border-gold/30 overflow-hidden bg-white/5 p-1 relative z-10 hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://i.ibb.co/wZkSWjH0/i376041.jpg" 
                  alt="Marketing Digital Estratégia" 
                  className="w-full h-full object-cover rounded-full pointer-events-none"
                />
              </div>
              <div className="w-16 h-1.5 bg-black/60 rounded-[50%] mt-3 blur-[4px] relative -z-10"></div>
            </div>

            {/* Orbiting Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full rounded-full border border-dashed border-white/10"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-3 glass rounded-xl flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-gold fill-gold" />)}
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[70%] h-[70%] rounded-full border border-solid border-white/5"
            >
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 p-3 glass rounded-full">
                <Search size={20} className="text-white/80" />
              </div>
            </motion.div>

            {/* Review Card Floating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-4 md:bottom-4 -left-4 md:-left-12 z-30 glass-card p-5 rounded-2xl shadow-2xl max-w-[260px] border border-white/20 backdrop-blur-xl"
            >
              <div className="flex text-gold mb-3">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-gold" />)}
              </div>
              <p className="text-sm text-white/90 italic mb-3 leading-relaxed">
                "A melhor agência de marketing da região! Me ajudou muito na visibilidade..."
              </p>
              <span className="text-xs text-white/50 font-medium font-mono">
                — Juliéte Jurk, via Google
              </span>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
