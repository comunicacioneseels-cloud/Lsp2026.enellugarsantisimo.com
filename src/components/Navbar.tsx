import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowUpRight, Menu, X, Globe } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppPage } from '../types';
import { Logo } from './Logo';
import { setGoogleLanguage } from '../utils/translate';

export const Navbar: React.FC = () => {
  const { currentPage, navigateToPage, setIsAdminOpen, language, setLanguage, donationUrl } = useApp();
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProgramsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (page: AppPage) => {
    navigateToPage(page);
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
  };

  const isProgramsActive = currentPage === 'programas-actuales' || currentPage === 'nuevos-programas';

  return (
    <header className="sticky top-0 z-40 bg-[#1E1B2E]/95 backdrop-blur-md border-b border-white/10 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Brand Logo - Navigates to Inicio */}
        <button
          onClick={() => handleNav('inicio')}
          className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B5E] rounded-lg py-1 transition-opacity hover:opacity-90"
          aria-label="Ir a la página de Inicio"
        >
          <Logo variant="light" />
        </button>

        {/* Main Desktop Navigation Menu (Matching Exact User Specification) */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-sm font-medium" aria-label="Navegación principal">
          
          {/* INICIO */}
          <button
            onClick={() => handleNav('inicio')}
            className={`relative py-2 font-medium transition-colors whitespace-nowrap cursor-pointer ${
              currentPage === 'inicio' ? 'text-white' : 'text-white/75 hover:text-white'
            }`}
          >
            <span>INICIO</span>
            {currentPage === 'inicio' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6B5E] rounded-full" />
            )}
          </button>

          {/* INICIATIVA SOCIAL */}
          <button
            onClick={() => handleNav('iniciativa-social')}
            className={`relative py-2 font-medium transition-colors whitespace-nowrap cursor-pointer ${
              currentPage === 'iniciativa-social' ? 'text-white' : 'text-white/75 hover:text-white'
            }`}
          >
            <span>INICIATIVA SOCIAL</span>
            {currentPage === 'iniciativa-social' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6B5E] rounded-full" />
            )}
          </button>

          {/* PROGRAMAS (Dropdown: Programas Actuales 1 a 7 & Nuevos programas) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
              className={`relative py-2 flex items-center gap-1 font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isProgramsActive ? 'text-white' : 'text-white/75 hover:text-white'
              }`}
              aria-expanded={programsDropdownOpen}
            >
              <span>PROGRAMAS</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${programsDropdownOpen ? 'rotate-180 text-[#FF6B5E]' : ''}`} />
              {isProgramsActive && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6B5E] rounded-full" />
              )}
            </button>

            {/* Dropdown Menu */}
            {programsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#282542] rounded-2xl shadow-2xl border border-white/15 py-2 text-xs font-semibold z-50 animate-in fade-in zoom-in-95 duration-150">
                <button
                  onClick={() => handleNav('programas-actuales')}
                  className={`w-full text-left px-4 py-3 hover:bg-white/10 transition-colors flex items-center justify-between ${
                    currentPage === 'programas-actuales' ? 'text-[#FF6B5E] bg-white/5' : 'text-white/90'
                  }`}
                >
                  <div>
                    <span className="block text-sm">Programas Actuales</span>
                    <span className="text-[11px] font-normal text-white/60">Los 7 programas en operación</span>
                  </div>
                  <span className="text-white/40">↳</span>
                </button>
                <div className="border-t border-white/10 my-1" />
                <button
                  onClick={() => handleNav('nuevos-programas')}
                  className={`w-full text-left px-4 py-3 hover:bg-white/10 transition-colors flex items-center justify-between ${
                    currentPage === 'nuevos-programas' ? 'text-[#00E51B] bg-white/5' : 'text-white/90'
                  }`}
                >
                  <div>
                    <span className="block text-sm">Nuevos Programas</span>
                    <span className="text-[11px] font-normal text-white/60">Lanzamiento e innovación 2026</span>
                  </div>
                  <span className="text-white/40">↳</span>
                </button>
              </div>
            )}
          </div>

          {/* PROYECTOS */}
          <button
            onClick={() => handleNav('proyectos')}
            className={`relative py-2 font-medium transition-colors whitespace-nowrap cursor-pointer ${
              currentPage === 'proyectos' ? 'text-white' : 'text-white/75 hover:text-white'
            }`}
          >
            <span>PROYECTOS</span>
            {currentPage === 'proyectos' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6B5E] rounded-full" />
            )}
          </button>

          {/* PLANES DE SUSCRIPCIÓN */}
          <button
            onClick={() => handleNav('planes-suscripcion')}
            className={`relative py-2 font-medium transition-colors whitespace-nowrap cursor-pointer ${
              currentPage === 'planes-suscripcion' ? 'text-white' : 'text-white/75 hover:text-white'
            }`}
          >
            <span>PLANES DE SUSCRIPCIÓN</span>
            {currentPage === 'planes-suscripcion' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6B5E] rounded-full" />
            )}
          </button>

          {/* PLAN PADRINO */}
          <button
            onClick={() => handleNav('plan-padrino')}
            className={`relative py-2 font-medium transition-colors whitespace-nowrap cursor-pointer ${
              currentPage === 'plan-padrino' ? 'text-white' : 'text-white/75 hover:text-white'
            }`}
          >
            <span>PLAN PADRINO</span>
            {currentPage === 'plan-padrino' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6B5E] rounded-full" />
            )}
          </button>

          {/* APÓYANOS */}
          <button
            onClick={() => handleNav('apoyanos')}
            className={`relative py-2 font-medium transition-colors whitespace-nowrap cursor-pointer ${
              currentPage === 'apoyanos' ? 'text-white' : 'text-white/75 hover:text-white'
            }`}
          >
            <span>APÓYANOS</span>
            {currentPage === 'apoyanos' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6B5E] rounded-full" />
            )}
          </button>

        </nav>

        {/* Right CTA Button & Utilities (Matching Mockup's DONA AHORA ↗) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Translate to English icon button */}
          <button
            onClick={() => {
              const nextLang = language === 'es' ? 'en' : 'es';
              setLanguage(nextLang);
              setGoogleLanguage(nextLang);
            }}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer active:scale-95 shadow-sm ${
              language === 'en'
                ? 'bg-[#35D5C5] text-[#1E1B2E] border-[#35D5C5] ring-2 ring-[#35D5C5]/50'
                : 'bg-white/10 hover:bg-white/20 border-white/15 text-white'
            }`}
            title={language === 'es' ? 'Traducir al inglés (Translate to English)' : 'Cambiar a Español (Switch to Spanish)'}
            aria-label="Traducir al inglés"
          >
            <Globe className={`w-4 h-4 ${language === 'en' ? 'text-[#1E1B2E]' : 'text-[#35D5C5]'}`} />
            <span className="uppercase tracking-wider">{language === 'es' ? 'EN' : 'ES'}</span>
          </button>

          {/* DONA AHORA ↗ (Coral Button linking to official donation portal) */}
          <a
            href={donationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#FF6B5E] hover:bg-[#ff5747] active:scale-[0.98] rounded-xl shadow-md shadow-[#FF6B5E]/30 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>{language === 'es' ? 'DONA AHORA' : 'DONATE NOW'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-white hover:bg-white/10 rounded-lg focus:outline-none cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#1E1B2E] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 text-sm font-medium">
          <button
            onClick={() => handleNav('inicio')}
            className={`w-full text-left px-3 py-2.5 rounded-lg ${
              currentPage === 'inicio' ? 'bg-[#FF6B5E] text-white font-bold' : 'text-white/80 hover:bg-white/5'
            }`}
          >
            INICIO
          </button>

          <button
            onClick={() => handleNav('iniciativa-social')}
            className={`w-full text-left px-3 py-2.5 rounded-lg ${
              currentPage === 'iniciativa-social' ? 'bg-[#FF6B5E] text-white font-bold' : 'text-white/80 hover:bg-white/5'
            }`}
          >
            INICIATIVA SOCIAL
          </button>

          {/* Mobile Programas Nested Links */}
          <div className="border-l-2 border-white/15 pl-3 ml-2 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-white/50 block py-1">PROGRAMAS</span>
            <button
              onClick={() => handleNav('programas-actuales')}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs ${
                currentPage === 'programas-actuales' ? 'bg-white/15 text-[#35D5C5] font-bold' : 'text-white/70'
              }`}
            >
              ↳ Programas Actuales (1 a 7)
            </button>
            <button
              onClick={() => handleNav('nuevos-programas')}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs ${
                currentPage === 'nuevos-programas' ? 'bg-white/15 text-[#00E51B] font-bold' : 'text-white/70'
              }`}
            >
              ↳ Nuevos programas (2026)
            </button>
          </div>

          <button
            onClick={() => handleNav('proyectos')}
            className={`w-full text-left px-3 py-2.5 rounded-lg ${
              currentPage === 'proyectos' ? 'bg-[#FF6B5E] text-white font-bold' : 'text-white/80 hover:bg-white/5'
            }`}
          >
            PROYECTOS
          </button>

          <button
            onClick={() => handleNav('planes-suscripcion')}
            className={`w-full text-left px-3 py-2.5 rounded-lg ${
              currentPage === 'planes-suscripcion' ? 'bg-[#FF6B5E] text-white font-bold' : 'text-white/80 hover:bg-white/5'
            }`}
          >
            PLANES DE SUSCRIPCIÓN
          </button>

          <button
            onClick={() => handleNav('plan-padrino')}
            className={`w-full text-left px-3 py-2.5 rounded-lg ${
              currentPage === 'plan-padrino' ? 'bg-[#FF6B5E] text-white font-bold' : 'text-white/80 hover:bg-white/5'
            }`}
          >
            PLAN PADRINO
          </button>

          <button
            onClick={() => handleNav('apoyanos')}
            className={`w-full text-left px-3 py-2.5 rounded-lg ${
              currentPage === 'apoyanos' ? 'bg-[#FF6B5E] text-white font-bold' : 'text-white/80 hover:bg-white/5'
            }`}
          >
            APÓYANOS
          </button>

          <div className="pt-3 border-t border-white/10 flex items-center gap-2">
            <button
              onClick={() => {
                const nextLang = language === 'es' ? 'en' : 'es';
                setLanguage(nextLang);
                setGoogleLanguage(nextLang);
              }}
              className={`inline-flex items-center justify-center gap-1.5 py-3 px-4 text-xs font-bold uppercase tracking-wider rounded-xl border transition-all cursor-pointer shrink-0 ${
                language === 'en'
                  ? 'bg-[#35D5C5] text-[#1E1B2E] border-[#35D5C5]'
                  : 'text-white bg-white/10 hover:bg-white/20 border-white/15'
              }`}
              title={language === 'es' ? 'Traducir al inglés' : 'Switch to Spanish'}
            >
              <Globe className={`w-4 h-4 ${language === 'en' ? 'text-[#1E1B2E]' : 'text-[#35D5C5]'}`} />
              <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </button>

            <a
              href={donationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6B5E] hover:bg-[#ff5747] active:scale-[0.98] rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>{language === 'es' ? 'DONA AHORA' : 'DONATE NOW'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
