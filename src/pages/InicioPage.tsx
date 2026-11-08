import React from 'react';
import { ArrowRight, MapPin, Sparkles, BookOpen, Building, Heart, Users, Layers, Award } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const InicioPage: React.FC = () => {
  const { navigateToPage } = useApp();

  return (
    <div className="bg-[#181528] text-white min-h-[calc(100vh-5rem)]">
      
      {/* HERO SECTION - EXACT RECREATION OF LSP__Maqueta_web_2026_fb69b153.png */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center border-b border-white/10">
        
        {/* Subtle Topographic / Bathymetric Contour Lines SVG Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden" 
          aria-hidden="true"
        >
          <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 650C150 630 300 750 600 680C900 610 1100 780 1500 700" stroke="#FF6B5E" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M-100 550C200 520 400 660 700 600C1000 540 1200 680 1500 620" stroke="#E5C158" strokeWidth="1" opacity="0.6" />
            <path d="M-100 450C180 430 350 540 650 490C950 440 1150 560 1500 520" stroke="#35D5C5" strokeWidth="1" opacity="0.3" />
            <path d="M-100 780C250 760 450 850 750 800C1050 750 1250 860 1500 810" stroke="#E5C158" strokeWidth="0.8" opacity="0.4" />
            <circle cx="280" cy="720" r="160" stroke="#E5C158" strokeWidth="0.6" opacity="0.2" />
            <circle cx="280" cy="720" r="240" stroke="#E5C158" strokeWidth="0.6" opacity="0.15" />
          </svg>
        </div>

        {/* Ambient colored lighting glows */}
        <div 
          className="absolute top-1/4 left-10 w-96 h-96 bg-[#321078] rounded-full blur-[140px] opacity-40 pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#FF6B5E] rounded-full blur-[160px] opacity-15 pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Typography, Text, Buttons & Location (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pr-6">
              
              {/* Main Headline with "futuro." in coral, matching mockup */}
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight text-white">
                Donde otros<br />
                ven necesidad,<br />
                nosotros<br />
                vemos <span className="text-[#FF6B5E] font-medium">futuro.</span>
              </h1>

              {/* Small Coral Accent Bar */}
              <div className="w-12 h-1 bg-[#FF6B5E] rounded-full" aria-hidden="true" />

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-white/80 max-w-lg font-normal leading-relaxed pt-1">
                Impulsamos educación, bienestar y oportunidades reales junto a la comunidad Bocachica.
              </p>

              {/* Two Action Buttons (Exact styling from LSP__Maqueta_web_2026_fb69b153.png) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                {/* Button 1: Conoce nuestro impacto (Coral filled with arrow) */}
                <button
                  onClick={() => navigateToPage('iniciativa-social')}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#FF6B5E] hover:bg-[#ff5747] active:scale-[0.98] rounded-xl shadow-lg shadow-[#FF6B5E]/30 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Conoce nuestro impacto</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Button 2: Sé parte de la misión (Dark outlined with arrow) */}
                <button
                  onClick={() => navigateToPage('plan-padrino')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-[#25213B] hover:bg-[#2e2949] border border-white/20 active:scale-[0.98] rounded-xl transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Sé parte de la misión</span>
                  <ArrowRight className="w-4 h-4 text-white/70" />
                </button>
              </div>

              {/* Location Pin Element at Bottom (Exact design from mockup) */}
              <div className="pt-8 flex items-center gap-3 text-white/90">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6B5E] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-xs leading-snug">
                  <span className="font-bold tracking-wider uppercase text-white/95">BOCACHICA</span>
                  <span className="text-white/60">Cartagena de Indias, Colombia</span>
                </div>
              </div>

            </div>

            {/* Right Column: Authentic Child of Bocachica Portrait + Golden Ring (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              
              {/* Golden Halo Accent Ring Behind Head (Exact element seen in mockup) */}
              <div 
                className="absolute w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full border border-[#E5C158]/35 pointer-events-none -translate-y-4"
                aria-hidden="true"
              />
              <div 
                className="absolute w-[360px] h-[360px] sm:w-[490px] sm:h-[490px] rounded-full border border-[#E5C158]/15 pointer-events-none -translate-y-4"
                aria-hidden="true"
              />

              {/* The Isolated Boy Image - Real file from attachment */}
              <div className="relative z-10 w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/aistudio/MAQUETA_Lsp_website_-_Espa_ol_3933623a.png"
                  alt="Niño de Bocachica sonriendo con alegría y dignidad"
                  className="w-full h-auto object-cover object-center transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle soft edge mask */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#181528] via-transparent to-transparent opacity-60 pointer-events-none" 
                  aria-hidden="true" 
                />
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* PORTAL TO INDEPENDENT PAGES (Navigation Hub) */}
      <section className="py-20 bg-[#1E1B2E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FF6B5E] block mb-2">
              Explora Nuestro Sitio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-white">
              Páginas y áreas de Lives Saved Project
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/70">
              Cada sección contiene información detallada e independiente sobre nuestra misión, programas y formas de participar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Iniciativa Social */}
            <div 
              onClick={() => navigateToPage('iniciativa-social')}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF6B5E]/50 hover:bg-white/[0.08] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#35D5C5]/20 text-[#35D5C5] flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#FF6B5E] transition-colors mb-2">
                  Iniciativa Social
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                  Más de 10 años de presencia con la Iglesia En el Lugar Santísimo. Conoce los 4 ejes: Educación, Familia, Bienestar y Fe.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#35D5C5]">
                <span>Ver página</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 2. Programas Actuales */}
            <div 
              onClick={() => navigateToPage('programas-actuales')}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF6B5E]/50 hover:bg-white/[0.08] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FF8A00]/20 text-[#FF8A00] flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#FF6B5E] transition-colors mb-2">
                  Programas Actuales (1 a 7)
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                  Refuerzo escolar, artes, discipulado cristiano, trabajo social, psicología, nutrición y escuela de padres.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#FF8A00]">
                <span>Ver programas</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 3. Nuevos Programas 2026 */}
            <div 
              onClick={() => navigateToPage('nuevos-programas')}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF6B5E]/50 hover:bg-white/[0.08] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#00E51B]/20 text-[#00E51B] flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#FF6B5E] transition-colors mb-2">
                  Nuevos Programas 2026
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                  Formación técnica, herramientas digitales y emprendimiento comunitario para generar oportunidades reales de empleo.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#00E51B]">
                <span>Ver novedades</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 4. Proyectos Estratégicos */}
            <div 
              onClick={() => navigateToPage('proyectos')}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF6B5E]/50 hover:bg-white/[0.08] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#321078]/40 text-purple-300 flex items-center justify-center mb-4">
                  <Building className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#FF6B5E] transition-colors mb-2">
                  Proyectos & Auditorio
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                  Construcción de auditorio comunitario y nuevos salones, agua potable, planos arquitectónicos y metas de avance.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-300">
                <span>Ver proyectos</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 5. Planes de Suscripción */}
            <div 
              onClick={() => navigateToPage('planes-suscripcion')}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF6B5E]/50 hover:bg-white/[0.08] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FF6B5E]/20 text-[#FF6B5E] flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#FF6B5E] transition-colors mb-2">
                  Planes de Suscripción
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                  Niveles de contribución mensual: Semilla, Esperanza, Transformación, Futuro, Salvavidas y Empresarial (COP y USD).
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#FF6B5E]">
                <span>Ver planes</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 6. Plan Padrino & Apóyanos */}
            <div 
              onClick={() => navigateToPage('plan-padrino')}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF6B5E]/50 hover:bg-white/[0.08] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E5C158]/20 text-[#E5C158] flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#FF6B5E] transition-colors mb-2">
                  Plan Padrino Salva Vidas
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                  Invierte en el futuro de un niño y su comunidad. Acompañamiento a largo plazo con reportes e impacto verificable.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#E5C158]">
                <span>Conocer apadrinamiento</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
