import React from 'react';
import { Heart, MapPin, Mail, Phone, ExternalLink, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { organizationInfo, language } = useApp();

  return (
    <footer className="bg-[#1C1A32] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FF6B5E] to-[#321078] flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white/80" />
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-white">
                LIVES SAVED PROJECT
              </span>
            </div>
            
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Iniciativa social de la Iglesia En el Lugar Santísimo. Más de 10 años promoviendo educación, 
              salud emocional, familia y fe en la comunidad de Bocachica, isla de Tierra Bomba.
            </p>

            <div className="text-xs text-white/50 space-y-1">
              <p>Entidad: {organizationInfo.legalName}</p>
              <p>NIT: {organizationInfo.nit}</p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#35D5C5] block mb-2">
              Navegación
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">Quiénes Somos</a>
              </li>
              <li>
                <a href="#bocachica" className="hover:text-white transition-colors">Comunidad de Bocachica</a>
              </li>
              <li>
                <a href="#programas" className="hover:text-white transition-colors">Programas Sociales</a>
              </li>
              <li>
                <a href="#programas-2026" className="hover:text-white transition-colors">Nuevos Programas 2026</a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-white transition-colors">Auditorio y Proyectos</a>
              </li>
              <li>
                <a href="#planes" className="hover:text-white transition-colors">Planes de Apadrinamiento</a>
              </li>
              <li>
                <a href="#donar" className="hover:text-white transition-colors">Canal Oficial de Donación</a>
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
            © {new Date().getFullYear()} Lives Saved Project · Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/40">Bocachica, Cartagena, Colombia</span>
            <span className="text-white/20" aria-hidden="true">·</span>
            <a href="#hero" className="hover:text-white transition-colors">Volver arriba ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
