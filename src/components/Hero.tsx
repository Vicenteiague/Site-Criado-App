import { motion } from 'motion/react';
import { ArrowRight, MapPin, Search, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Background Abstract Shapes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            Especialistas em SEO Local
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6">
            Start Mkt Local: Seu Negócio no <span className="text-gradient">Topo do Google</span>, Onde Seus Clientes Procuram!
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
            Especialistas em otimização de perfil Google para visibilidade e crescimento local.
            Transforme pesquisas em clientes reais hoje mesmo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5567993174612"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-black font-bold text-lg transition-all shadow-[0_0_20px_rgba(218,165,32,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] hover:-translate-y-1"
            >
              Otimize Seu Negócio Agora!
              <ArrowRight size={20} />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full glass border-white/20 hover:bg-white/10 text-white font-semibold text-lg transition-all"
            >
              Ver Serviços
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] flex justify-center items-center"
        >
          {/* Glassmorphic abstract representation of Google Maps/Profile */}
          <div className="relative w-full max-w-md aspect-square rounded-full border border-white/10 bg-gradient-to-tr from-white/5 to-transparent flex items-center justify-center shadow-[inset_0_0_100px_rgba(255,255,255,0.02)] border-b-gold/20 border-r-gold/20">
            
            {/* Center Pin */}
            <div className="absolute z-20 flex flex-col items-center">
              <div className="w-40 h-40 md:w-48 md:h-48 glass-card rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(218,165,32,0.3)] border-gold/30 overflow-hidden bg-white/5 p-1 relative z-10 hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://i.ibb.co/wZkSWjH0/i376041.jpg" 
                  alt="Marketing Digital Estratégia" 
                  className="w-full h-full object-cover rounded-full"
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

          </div>
        </motion.div>
      </div>
    </section>
  );
}
