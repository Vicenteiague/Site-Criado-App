import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(218,165,32,0.3)] border border-white/10 group-hover:scale-105 transition-transform bg-white/5">
                <img 
                  src="https://i.ibb.co/mrTVXpCB/IMG-20260315-111831-078.webp" 
                  alt="Start Mkt Local" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-heading font-bold text-white group-hover:text-gold transition-colors">
                Start Mkt Local
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Especialistas absolutos em projetar sua marca localmente. Dominando o Google Meu Negócio para conectar você a mais clientes na sua região.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/50 transition-all" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/50 transition-all" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://wa.me/5567993174612" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/50 transition-all" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-bold mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/60 hover:text-gold text-sm transition-colors">Home</a></li>
              <li><a href="#servicos" className="text-white/60 hover:text-gold text-sm transition-colors">Serviços</a></li>
              <li><a href="#resultados" className="text-white/60 hover:text-gold text-sm transition-colors">Resultados</a></li>
              <li><a href="#roadmap" className="text-white/60 hover:text-gold text-sm transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#sobre" className="text-white/60 hover:text-gold text-sm transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="text-white/60 hover:text-gold text-sm transition-colors">Contato</a></li>
              <li><a href="#" className="text-white/60 hover:text-gold text-sm transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-white/60 hover:text-gold text-sm transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-gold mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">contato@startmktlocal.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold mt-0.5 shrink-0"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                <span className="text-white/60 text-sm">(67) 99317-4612</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {currentYear !== 2026 ? '2026' : currentYear} Start Mkt Local. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <span className="text-white/20 text-xs">Feito com paixão corporativa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
