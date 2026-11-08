import React from 'react';
import { ArrowRight, Heart, MapPin, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Hero: React.FC = () => {
  const { language } = useApp();

  return (
    <section id="hero" className="relative bg-[#2D2B50] text-white overflow-hidden">
      {/* Background ambient lighting accents */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 bg-[#321078] rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#35D5C5] rounded-full blur-[140px] opacity-15 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-5rem)] items-stretch">
          
          {/* Left Column: Narrative Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center px-6 py-12 sm:px-12 lg:py-20 z-10">
            
            {/* Discrete Geographic & Institutional Kicker */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#35D5C5] tracking-wide mb-6">
              <MapPin className="w-4 h-4 text-[#FF6B5E] shrink-0" />
              <span>Bocachica, Cartagena, Colombia</span>
              <span className="text-white/30" aria-hidden="true">·</span>
              <span className="text-white/70">Iglesia En el Lugar Santísimo</span>
            </div>

            {/* Main Headline (Editorial Serif, High Contrast) */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-white mb-6 [text-wrap:balance]">
              Donde otros ven necesidad,{' '}
              <span className="italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#35D5C5] to-[#FF6B5E]">
                nosotros vemos futuro.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-white/80 max-w-xl font-normal leading-relaxed mb-8">
              {language === 'es'
                ? 'Impulsamos educación, bienestar y oportunidades reales junto a la comunidad de Bocachica.'
                : 'We drive education, well-being, and real opportunities alongside the resilient community of Bocachica.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a
                href="#donar"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-[#FF6B5E] hover:bg-[#ff5747] active:scale-[0.98] rounded-xl shadow-lg shadow-[#FF6B5E]/25 transition-all whitespace-nowrap"
              >
                <Heart className="w-5 h-5 fill-white/80" />
                <span>{language === 'es' ? 'Dona ahora' : 'Donate Now'}</span>
              </a>

              <a
                href="#nosotros"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-white/90 bg-white/10 hover:bg-white/15 hover:text-white border border-white/15 active:scale-[0.98] rounded-xl transition-all whitespace-nowrap"
              >
                <span>{language === 'es' ? 'Sé parte de la misión' : 'Be part of the mission'}</span>
                <ArrowRight className="w-4 h-4 text-[#35D5C5]" />
              </a>
            </div>

            {/* Micro Credibility Indicators */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-white tabular-nums">10+</p>
                <p className="text-xs text-white/60 mt-0.5">Años de presencia activa</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#35D5C5] tabular-nums">4</p>
                <p className="text-xs text-white/60 mt-0.5">Ejes integrales de acción</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#00E51B] tabular-nums">+200</p>
                <p className="text-xs text-white/60 mt-0.5">Niños y familias impactadas</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Portrait (5 cols on lg) */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden bg-[#242240] flex items-center justify-center">
            
            {/* Fallback container with styled gradient in case image is loading */}
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-[#2D2B50] via-[#321078] to-[#2D2B50] flex items-center justify-center"
              aria-hidden="true"
            >
              <Sparkles className="w-12 h-12 text-white/15 animate-pulse" />
            </div>

            {/* Child of Bocachica authentic documentary photograph */}
            <img
              src="/src/assets/images/hero_bocachica_child_1794103981110.jpg"
              alt="Niña de la comunidad de Bocachica sonriendo con dignidad y esperanza"
              className="w-full h-full object-cover object-center relative z-10 transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
              loading="eager"
            />

            {/* Vignette overlays for seamless dark integration */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-[#2D2B50] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#2D2B50] lg:via-transparent lg:to-transparent z-20 pointer-events-none opacity-80" 
              aria-hidden="true" 
            />

            {/* Subtle photographic caption badge */}
            <div className="absolute bottom-4 right-4 z-30 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-[11px] text-white/80">
              Isla de Bocachica, Cartagena
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
