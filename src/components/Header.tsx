import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsLightMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('light-mode');
      } else {
        document.documentElement.classList.remove('light-mode');
      }
      return newMode;
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Sobre Nós', href: '#sobre' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass border-b-0' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(218,165,32,0.3)] border border-white/10 group-hover:scale-105 transition-transform bg-white/5">
            <img 
              src="https://i.ibb.co/mrTVXpCB/IMG-20260315-111831-078.webp" 
              alt="Start Mkt Local" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-heading font-bold tracking-tight text-white group-hover:text-gold-light transition-colors hidden sm:block">
            Start Mkt Local
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/80 hover:text-gold transition-colors"
            aria-label="Alternar tema"
          >
            {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <a
            href="https://wa.me/5567993174612"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-gold hover:bg-gold-light text-black font-semibold text-sm transition-all shadow-[0_0_20px_rgba(218,165,32,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:-translate-y-0.5"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/80 hover:text-gold transition-colors"
            aria-label="Alternar tema"
          >
            {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 md:hidden flex flex-col items-center py-6 gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white/80 hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5567993174612"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-gold text-black font-semibold mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fale Conosco
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
