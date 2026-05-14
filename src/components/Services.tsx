import { motion } from 'motion/react';
import { Target, Lightbulb, PenTool, Share2, Search, MonitorSmartphone, MousePointerClick } from 'lucide-react';

const services = [
  {
    icon: <Target className="text-gold" size={28} />,
    title: "Marketing digital",
    description: "Estratégias completas para posicionar sua marca e gerar resultados reais no ambiente online."
  },
  {
    icon: <Lightbulb className="text-gold" size={28} />,
    title: "Consultoria de estratégia de marketing",
    description: "Análise profunda e planejamento sob medida para o crescimento do seu negócio local."
  },
  {
    icon: <PenTool className="text-gold" size={28} />,
    title: "Gerenciamento de conteúdo",
    description: "Criação e gestão de conteúdo relevante para engajar seu público e fortalecer sua autoridade."
  },
  {
    icon: <Share2 className="text-gold" size={28} />,
    title: "Marketing de mídia social",
    description: "Gestão profissional das suas redes sociais para construir audiência e atrair mais clientes."
  },
  {
    icon: <Search className="text-gold" size={28} />,
    title: "Ranquamento de empresas no perfil de empresas no Google",
    description: "Otimização especializada (SEO Local) para colocar seu negócio no topo das buscas do Google e Maps."
  },
  {
    icon: <MonitorSmartphone className="text-gold" size={28} />,
    title: "Criação de Sites",
    description: "Desenvolvimento de sites modernos, rápidos e otimizados para converter visitantes em clientes."
  },
  {
    icon: <MousePointerClick className="text-gold" size={28} />,
    title: "Tráfego Pago",
    description: "Campanhas de anúncios estratégicas no Google Ads e Meta Ads para retorno rápido e focado."
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6"
          >
            Nossos Serviços <span className="text-gradient">Essenciais</span> para o Seu Sucesso Local
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70"
          >
            Estratégias comprovadas para destacar seu negócio e dominar as buscas na sua região.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-6 border-white/10 group-hover:border-gold/30 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-gold-light transition-colors">
                {service.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
