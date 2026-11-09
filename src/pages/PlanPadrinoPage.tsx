import React from 'react';
import {
  Heart,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PlanPadrinoPage: React.FC = () => {
  const { donationUrl, navigateToPage } = useApp();

  return (
    <div className="bg-[#18162B] text-[#1E1B2E] min-h-screen">
      
      {/* ========================================================================= */}
      {/* BREADCRUMB & ACCENT HEADER                                                */}
      {/* ========================================================================= */}
      <section className="bg-[#121022] border-b border-white/10 py-4 text-xs text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-white/60">
            <button
              onClick={() => navigateToPage('inicio')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              INICIO
            </button>
            <span>/</span>
            <span className="text-[#FF6B5E] font-semibold">PLAN PADRINO</span>
          </div>

          <a
            href={donationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FF6B5E] hover:bg-[#ff5747] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>Donar Ahora</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MÓDULO 1: CONVIÉRTETE EN UN PADRINO (ADAPTACIÓN EXACTA DE LA MAQUETA)     */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#EBE7E0] grid grid-cols-1 lg:grid-cols-12 min-h-[580px] items-center relative">
          
          {/* Columna Izquierda: Textos Oficiales y Corazón Verde (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-12 lg:p-16 space-y-6 sm:space-y-8 z-10">
            
            <div className="space-y-4">
              <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-[#1A153A] tracking-tight leading-none">
                Conviértete en un Padrino
              </h1>

              {/* Corazón Verde Estilizado Oficial */}
              <div className="flex items-center gap-2 pt-1">
                <svg
                  className="w-10 h-10 text-[#00E51B] drop-shadow-sm transition-transform hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="#00E51B"
                  stroke="#1A153A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
            </div>

            {/* Párrafo Oficial */}
            <p className="text-base sm:text-xl text-[#1A153A] leading-relaxed font-normal">
              Un <strong>Padrino Salvavidas</strong> es alguien que decide <strong>invertir en el futuro de un niño, su familia y su comunidad</strong>. Tu aporte mensual permite que los programas sigan funcionando y que más niños tengan acceso a educación, bienestar y oportunidades.
            </p>

            {/* Lema Inspiracional de la Maqueta */}
            <div className="pt-2">
              <p className="font-sans font-extrabold text-2xl sm:text-3xl text-[#1A153A] tracking-tight">
                ¡Juntos Podemos hacer una diferencia!
              </p>
            </div>

            {/* Botón de Acción Principal */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#FF6B5E] hover:bg-[#ff5747] active:scale-[0.98] text-white font-bold text-base uppercase tracking-wider shadow-xl shadow-[#FF6B5E]/30 transition-all cursor-pointer"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>Quiero apadrinar ahora</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <button
                onClick={() => navigateToPage('planes-suscripcion')}
                className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-2xl bg-white/80 hover:bg-white text-[#1A153A] font-bold text-xs uppercase tracking-wider border border-stone-300 transition-colors cursor-pointer"
              >
                <span>Ver planes de suscripción</span>
                <ArrowRight className="w-4 h-4 text-[#FF6B5E]" />
              </button>
            </div>

          </div>

          {/* Columna Derecha: Fotografía Recortada del Niño con Regalo y Crocs (5 cols) */}
          <div className="lg:col-span-5 flex items-end justify-center lg:justify-end px-4 pt-6 lg:pt-0 self-end">
            <div className="relative max-w-[380px] sm:max-w-[440px] lg:max-w-none w-full">
              <img
                src="/assets/aistudio/MAQUETA_Lsp_website_-_Espa_ol__32__b4e69335.png"
                alt="Niño de Bocachica sonriente sosteniendo su regalo de Toy Story y calzado nuevo"
                className="w-full h-auto object-contain max-h-[580px] drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* MÓDULO 2: APÓYANOS, CÓDIGO QR Y VERSÍCULO (ADAPTACIÓN DE LA SEGUNDA MAQUETA) */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#EBE7E0] p-6 sm:p-12 lg:p-14 relative"
          style={{
            backgroundImage: 'url(/assets/aistudio/stucco_texture.png)',
            backgroundRepeat: 'repeat',
          }}
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Columna Izquierda: Código QR y Enlace Directo (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-4">
              
              <a
                href={donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 bg-white rounded-3xl shadow-xl border border-stone-200 transition-transform hover:scale-105 active:scale-95 cursor-pointer max-w-[280px]"
                aria-label="Escanear o hacer clic en el código QR para donar"
              >
                <img
                  src="/assets/aistudio/MAQUETA_Lsp_website_-_Espa_ol__12__64463c77.png"
                  alt="Código QR oficial para realizar donaciones a Lives Saved Project"
                  className="w-full h-auto aspect-square object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </a>

              {/* Texto Oficial con Link debajo del QR */}
              <a
                href={donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans font-bold text-lg sm:text-xl text-[#1A153A] hover:text-[#FF6B5E] underline decoration-2 underline-offset-4 transition-colors cursor-pointer"
              >
                <span>Escanea o toca aquí y Apóyanos</span>
                <ArrowUpRight className="w-5 h-5 text-[#FF6B5E]" />
              </a>

            </div>

            {/* Columna Centro: Tarjeta Ovalada/Píldora con el Versículo Bíblico (5 cols) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              
              <div className="bg-[#1A153A] text-white p-7 sm:p-10 rounded-3xl sm:rounded-full shadow-2xl border border-white/10 max-w-xl text-center space-y-3">
                <p className="font-serif italic text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed">
                  «Y el que da semilla al que siembra, y pan al que come, proveerá y multiplicará vuestra sementera, y aumentará los frutos de vuestra justicia».
                </p>
                <span className="block font-sans font-bold text-xs sm:text-sm text-[#35D5C5] tracking-wider uppercase">
                  2 Corintios 9:10
                </span>
              </div>

            </div>

            {/* Columna Derecha: Fotografía Recortada del Niño Sonriente en Camisilla (3 cols) */}
            <div className="lg:col-span-3 flex items-end justify-center lg:justify-end">
              <div className="max-w-[260px] sm:max-w-[320px] lg:max-w-none w-full">
                <img
                  src="/assets/aistudio/nino_sonriendo_transparente.png"
                  alt="Niño de Bocachica con sonrisa amplia y radiante"
                  className="w-full h-auto object-contain max-h-[380px] drop-shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>

          {/* Logotipos Oficiales en la Parte Inferior Central */}
          <div className="mt-10 pt-8 border-t border-stone-300 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-90">
            <div className="flex items-center gap-3">
              <span className="font-sans font-black text-xl sm:text-2xl tracking-tighter text-[#1A153A]">
                LIVES <span className="text-[#FF6B5E]">SAVED</span> PROJECT
              </span>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                Bocachica
              </span>
            </div>

            <div className="h-6 w-[1px] bg-stone-300 hidden sm:block" />

            <div className="flex items-center gap-2 text-stone-700 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#35D5C5]" />
              <span>Iglesia En El Lugar Santísimo</span>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* INFORMACIÓN DE APOYO & GARANTÍAS DEL PLAN PADRINO                         */}
      {/* ========================================================================= */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 text-white">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#35D5C5] block mb-1">
              Transparencia y Dignidad
            </span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-white">
              ¿Por qué apadrinar con Lives Saved Project?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-white/80">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#00E51B]" />
              <h3 className="font-bold text-white text-base">Impacto Colectivo y Digno</h3>
              <p className="leading-relaxed text-white/70">
                Los aportes se administran colectivamente para que todos los niños reciban la misma calidad en educación, útiles escolares y refrigerios sin diferencias.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <CheckCircle2 className="w-6 h-6 text-[#35D5C5]" />
              <h3 className="font-bold text-white text-base">Reportes y Testimonios</h3>
              <p className="leading-relaxed text-white/70">
                Recibirás actualizaciones periódicas sobre los talleres de arte, música, refuerzo académico y avances comunitarios en Bocachica.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <Sparkles className="w-6 h-6 text-[#FF6B5E]" />
              <h3 className="font-bold text-white text-base">Flexibilidad Total</h3>
              <p className="leading-relaxed text-white/70">
                Puedes ajustar, pausar o renovar tu plan en cualquier momento a través de la plataforma segura de aportes.
              </p>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};
