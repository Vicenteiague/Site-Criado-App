import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    author: "Thiago Couto",
    meta: "Local Guide • 4 avaliações • 2 fotos",
    date: "Há 42 semanas",
    text: "Top sensacional!",
    rating: 5,
  },
  {
    author: "Subido do Vale I GOOGLE PRA NEGÓCIOS LOCAIS",
    meta: "Local Guide • 58 avaliações • 2304 fotos",
    date: "Há 42 semanas",
    text: "Melhor da região",
    rating: 5,
  },
  {
    author: "SISTEMA CASA",
    meta: "4 avaliações • 4 fotos",
    date: "19 de jan. de 2025",
    text: "Agradeço a Start Mkt Local agência de marketing em Ponta Porã por fazer um trabalho excelente no perfil da minha empresa no Google",
    rating: 5,
  },
  {
    author: "Aparecida Greffe",
    meta: "Local Guide • 0 avaliação • 1 foto",
    date: "2 de set. de 2024",
    text: "",
    rating: 5,
  },
  {
    author: "samia haidar",
    meta: "6 avaliações • 0 foto",
    date: "22 de ago. de 2024",
    text: "Ótimo atendimento e resultado! Profissional responsável 👏",
    rating: 5,
  },
  {
    author: "Valter Martins",
    meta: "Local Guide • 40 avaliações • 22 fotos",
    date: "4 de nov. de 2023",
    text: "Super recomendo o cara é brabo intendi o que faz",
    rating: 5,
  },
  {
    author: "Juliéte Jurk",
    meta: "Local Guide • 54 avaliações • 287 fotos",
    date: "29 de set. de 2023",
    text: "A melhor agência de marketing da região! Me ajudou muito na visibilidade da minha empresa no Google trazendo resultados satisfatórios!\nRecomendo.",
    rating: 5,
  }
];

export default function Partners() {
  return (
    <section className="py-24 relative border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
          >
            Empresas Que <span className="text-gradient">Confiam</span> na Start Mkt Local
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70"
          >
            Nossos resultados falam por si só. Veja o que dizem os empresários da nossa região sobre os resultados alcançados com nossa otimização do Google.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-gold/30 hover:bg-white/5 transition-all duration-300 break-inside-avoid relative overflow-hidden group"
            >
              {/* Subtle top glare */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center font-bold text-xl text-black bg-gradient-to-br from-gold to-gold-light shadow-[0_0_15px_rgba(218,165,32,0.5)]">
                  {review.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg leading-tight line-clamp-2">
                    {review.author}
                  </h3>
                  <p className="text-white/50 text-xs mt-1">
                    {review.meta}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
                <span className="text-white/40 text-xs ml-2">{review.date}</span>
              </div>

              {review.text && (
                <p className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap mt-3">
                  "{review.text}"
                </p>
              )}
              
              {/* Google G icon watermark */}
              <svg className="absolute bottom-4 right-4 w-10 h-10 opacity-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.344-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
