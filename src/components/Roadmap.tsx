import { motion } from 'motion/react';

const milestones = [
  {
    year: "2020",
    title: "Fundação",
    description: "Nascimento da Start Mkt Local com foco inicial em estratégias de SEO básico e criação de conteúdo."
  },
  {
    year: "2022",
    title: "Plataforma Especializada",
    description: "Lançamento da nossa metodologia exclusiva de gestão e otimização intensiva de perfis Google Meu Negócio."
  },
  {
    year: "2024",
    title: "Expansão Nacional",
    description: "Início do atendimento a empresas em todo o território nacional, focado em redes de franquias e grandes lojistas."
  },
  {
    year: "2026",
    title: "Liderança de Mercado",
    description: "Avanço tecnológico rumo à liderança do mercado de SEO local no Brasil, com foco em dados e inovação contínua."
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      <div className="custom-container max-w-5xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 font-display mb-8"
          >
            Nossa Jornada: Inovação e <span className="text-gradient">Crescimento Contínuo</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent -translate-x-1/2" />

          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={item.year} className="relative flex flex-col md:flex-row items-center mb-16 last:mb-0">
                
                {/* Desktop Left */}
                <div className={`hidden md:flex w-1/2 ${isEven ? 'justify-end pr-12' : 'justify-start pl-12 order-2'}`}>
                  {isEven && (
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="text-right"
                    >
                      <h3 className="text-h3 font-display text-white mb-2">{item.title}</h3>
                      <p className="text-body text-white/60 leading-relaxed">{item.description}</p>
                    </motion.div>
                  )}
                </div>

                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-black bg-gold text-black shadow-[0_0_15px_rgba(218,165,32,0.6)] flex items-center justify-center font-bold text-xs -translate-x-1/2 z-10" />

                {/* Desktop Right & Mobile Content */}
                <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:pl-12 order-2' : 'md:pr-12 md:text-right'}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="md:-mt-2"
                  >
                    <span className="inline-block px-3 py-1 bg-white/10 text-gold-light rounded-full text-small font-mono mb-3 md:mb-4">
                      {item.year}
                    </span>
                    {!isEven && (
                      <div className="hidden md:block">
                        <h3 className="text-h3 font-display text-white mb-2">{item.title}</h3>
                        <p className="text-body text-white/60 leading-relaxed">{item.description}</p>
                      </div>
                    )}
                    {/* Mobile Only Title/Desc */}
                    <div className="md:hidden">
                      <h3 className="text-h3 font-display text-white mb-2">{item.title}</h3>
                      <p className="text-body text-white/60 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
