import React from 'react';
import { Heart, MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppPage } from '../types';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { organizationInfo, navigateToPage } = useApp();

  const handleNav = (page: AppPage) => {
    navigateToPage(page);
  };

  return (
    <footer className="bg-[#141222] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => handleNav('inicio')}
              className="text-left cursor-pointer focus:outline-none"
            >
              <Logo variant="light" />
            </button>
            
            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              Iniciativa social de la Iglesia En el Lugar Santísimo. Más de 10 años promoviendo educación, 
              salud emocional, familia y fe en la comunidad de Bocachica, isla de Tierra Bomba.
            </p>

            <div className="text-xs text-white/50 space-y-1 pt-1">
              <p>Entidad: {organizationInfo.legalName}</p>
              <p>NIT: {organizationInfo.nit}</p>
            </div>
          </div>

          {/* Quick Links to Independent Pages (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#35D5C5] block mb-2">
              Páginas del Sitio
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75">
              <li>
                <button onClick={() => handleNav('inicio')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('iniciativa-social')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Iniciativa Social
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('programas-actuales')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Programas Actuales (1 a 7)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('nuevos-programas')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Nuevos Programas (2026)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('proyectos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Proyectos & Auditorio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('planes-suscripcion')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Planes de Suscripción
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('plan-padrino')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Plan Padrino Salva Vidas
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('apoyanos')} className="hover:text-white transition-colors cursor-pointer text-left font-bold text-[#FF6B5E]">
                  Apóyanos (Donaciones)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B5E] block mb-2">
              Contacto y Ubicación
            </span>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6B5E] shrink-0 mt-0.5" />
                <span>{organizationInfo.address}, {organizationInfo.city}</span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00E51B] shrink-0" />
                <a href={organizationInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
                  {organizationInfo.whatsapp}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#35D5C5] shrink-0" />
                <a href={`mailto:${organizationInfo.email}`} className="hover:underline text-white">
                  {organizationInfo.email}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00E51B] shrink-0 mt-0.5" />
                <span>
                  Donaciones y certificados coordinados directamente con la administración de la Iglesia En el Lugar Santísimo.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Lives Saved Project · Iglesia En el Lugar Santísimo.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/40">Bocachica, Cartagena, Colombia</span>
            <span className="text-white/20" aria-hidden="true">·</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Volver arriba ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
