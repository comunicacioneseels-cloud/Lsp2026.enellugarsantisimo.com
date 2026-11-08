import React, { useState } from 'react';
import { Menu, X, Settings, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const { language, setLanguage, setIsAdminOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: language === 'es' ? 'Nosotros' : 'About', href: '#nosotros' },
    { label: 'Bocachica', href: '#bocachica' },
    { label: language === 'es' ? 'Programas' : 'Programs', href: '#programas' },
    { label: '2026', href: '#programas-2026' },
    { label: language === 'es' ? 'Proyectos' : 'Projects', href: '#proyectos' },
    { label: language === 'es' ? 'Padrinos' : 'Sponsors', href: '#padrinos' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#2D2B50]/95 backdrop-blur-md border-b border-white/10 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element Brand wordmark */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B5E] rounded-lg py-1"
          aria-label="Lives Saved Project - Inicio"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B5E] to-[#321078] flex items-center justify-center shadow-md shadow-[#FF6B5E]/20">
            <Heart className="w-5 h-5 text-white fill-white/80" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg tracking-tight text-white group-hover:text-[#35D5C5] transition-colors whitespace-nowrap">
              LIVES SAVED PROJECT
            </span>
            <span className="text-[11px] font-sans text-white/60 tracking-wider uppercase -mt-0.5 whitespace-nowrap">
              Bocachica · Iglesia EELS
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (single-line, clean typography) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/85" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white hover:underline underline-offset-8 decoration-[#FF6B5E] decoration-2 transition-colors whitespace-nowrap shrink-0 py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions & Utility */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center text-xs font-semibold bg-white/10 rounded-md p-1 border border-white/10">
            <button
              onClick={() => setLanguage('es')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'es' ? 'bg-[#FF6B5E] text-white shadow-xs' : 'text-white/70 hover:text-white'
              }`}
              title="Español"
            >
              ES
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'en' ? 'bg-[#FF6B5E] text-white shadow-xs' : 'text-white/70 hover:text-white'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Admin panel trigger */}
          <button
            onClick={() => setIsAdminOpen(true)}
            className="p-2 text-white/75 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            title="Panel de administración de la organización"
            aria-label="Administración institucional"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* Primary CTA */}
          <a
            href="#donar"
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#FF6B5E] hover:bg-[#ff5747] active:scale-[0.98] rounded-lg transition-all shadow-md shadow-[#FF6B5E]/30 whitespace-nowrap shrink-0"
          >
            {language === 'es' ? 'Dona ahora' : 'Donate Now'}
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={() => setIsAdminOpen(true)}
            className="p-2 text-white/75 hover:text-white rounded-lg"
            title="Panel de administración"
          >
            <Settings className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-lg focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#242240] border-t border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-white/60">Idioma:</span>
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-1 rounded ${language === 'es' ? 'bg-[#FF6B5E] text-white font-bold' : 'text-white/70'}`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded ${language === 'en' ? 'bg-[#FF6B5E] text-white font-bold' : 'text-white/70'}`}
              >
                EN
              </button>
            </div>
            <a
              href="#donar"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm font-semibold text-white bg-[#FF6B5E] rounded-lg"
            >
              {language === 'es' ? 'Dona ahora' : 'Donate'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
