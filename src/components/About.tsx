import { motion } from 'motion/react';
import { Target, Lightbulb, HeartHandshake } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/4" />
      
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
              Nosso Propósito: <span className="text-gradient">Conectar Seu Negócio</span> ao Seu Cliente Ideal
            </h2>
            <p className="text-lg text-white/70 mb-12 leading-relaxed">
              Na Start Mkt Local, acreditamos que todo negócio excelente merece ser encontrado. Nossa paixão é traduzir a qualidade do seu serviço físico em relevância digital absoluta.
              Não entregamos apenas cliques; construímos pontes entre você e as pessoas que estão na sua rua, no seu bairro, buscando exatamente o que você oferece.
            </p>

            <div className="grid sm:grid-cols-3 gap-8 text-left">
              {[
                { icon: <Target className="text-gold mx-auto" />, title: "Foco a Laser", desc: "Estratégias direcionadas exclusivamente para o seu raio de atuação." },
                { icon: <Lightbulb className="text-gold mx-auto" />, title: "Inovação Prática", desc: "Técnicas de SEO atualizadas aplicadas para resultados reais e mensuráveis." },
                { icon: <HeartHandshake className="text-gold mx-auto" />, title: "Parceria Verdadeira", desc: "Seu crescimento é a nossa principal métrica de sucesso." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="p-4 glass rounded-2xl mb-4 border-white/10 shadow-[0_0_15px_rgba(218,165,32,0.1)]">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
