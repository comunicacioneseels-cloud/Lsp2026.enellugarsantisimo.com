import React from 'react';
import { Heart, ArrowUpRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PadrinoSection: React.FC = () => {
  const { donationUrl, navigateToPage } = useApp();

  return (
    <section id="padrinos" className="py-16 sm:py-24 bg-[#18162B] text-[#1E1B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* MÓDULO 1: CONVIÉRTETE EN UN PADRINO */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#EBE7E0] grid grid-cols-1 lg:grid-cols-12 min-h-[540px] items-center relative">
          
          <div className="lg:col-span-7 p-6 sm:p-12 lg:p-16 space-y-6 z-10">
            <div className="space-y-4">
              <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-[#1A153A] tracking-tight leading-none">
                Conviértete en un Padrino
              </h2>

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

            <p className="text-base sm:text-lg text-[#1A153A] leading-relaxed font-normal">
              Un <strong>Padrino Salvavidas</strong> es alguien que decide <strong>invertir en el futuro de un niño, su familia y su comunidad</strong>. Tu aporte mensual permite que los programas sigan funcionando y que más niños tengan acceso a educación, bienestar y oportunidades.
            </p>

            <div>
              <p className="font-sans font-extrabold text-2xl sm:text-3xl text-[#1A153A] tracking-tight">
                ¡Juntos Podemos hacer una diferencia!
              </p>
            </div>

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
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-end justify-center lg:justify-end px-4 pt-6 lg:pt-0 self-end">
            <div className="relative max-w-[360px] sm:max-w-[420px] lg:max-w-none w-full">
              <img
                src="/assets/aistudio/MAQUETA_Lsp_website_-_Espa_ol__32__b4e69335.png"
                alt="Niño de Bocachica sonriente con regalo de Toy Story y calzado"
                className="w-full h-auto object-contain max-h-[540px] drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

        {/* MÓDULO 2: APÓYANOS, CÓDIGO QR Y VERSÍCULO */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#EBE7E0] p-6 sm:p-10 lg:p-12 relative"
          style={{
            backgroundImage: 'url(/assets/aistudio/stucco_texture.png)',
            backgroundRepeat: 'repeat',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Código QR */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-4">
              <a
                href={donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-3.5 bg-white rounded-3xl shadow-xl border border-stone-200 transition-transform hover:scale-105 active:scale-95 cursor-pointer max-w-[260px]"
                aria-label="Escanear o hacer clic en el código QR para donar"
              >
                <img
                  src="/assets/aistudio/MAQUETA_Lsp_website_-_Espa_ol__12__64463c77.png"
                  alt="Código QR oficial de donación"
                  className="w-full h-auto aspect-square object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </a>

              <a
                href={donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans font-bold text-base sm:text-lg text-[#1A153A] hover:text-[#FF6B5E] underline decoration-2 underline-offset-4 transition-colors cursor-pointer"
              >
                <span>Escanea o toca aquí y Apóyanos</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF6B5E]" />
              </a>
            </div>

            {/* Versículo */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="bg-[#1A153A] text-white p-6 sm:p-9 rounded-3xl sm:rounded-full shadow-2xl border border-white/10 max-w-xl text-center space-y-3">
                <p className="font-serif italic text-sm sm:text-base text-white/95 leading-relaxed">
                  «Y el que da semilla al que siembra, y pan al que come, proveerá y multiplicará vuestra sementera, y aumentará los frutos de vuestra justicia».
                </p>
                <span className="block font-sans font-bold text-xs text-[#35D5C5] tracking-wider uppercase">
                  2 Corintios 9:10
                </span>
              </div>
            </div>

            {/* Niño sonriente */}
            <div className="lg:col-span-3 flex items-end justify-center lg:justify-end">
              <div className="max-w-[240px] sm:max-w-[300px] lg:max-w-none w-full">
                <img
                  src="/assets/aistudio/nino_sonriendo_transparente.png"
                  alt="Niño de Bocachica con gran sonrisa"
                  className="w-full h-auto object-contain max-h-[340px] drop-shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>

          {/* Logos */}
          <div className="mt-8 pt-6 border-t border-stone-300 flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-90">
            <div className="flex items-center gap-3">
              <span className="font-sans font-black text-lg sm:text-xl tracking-tighter text-[#1A153A]">
                LIVES <span className="text-[#FF6B5E]">SAVED</span> PROJECT
              </span>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                Bocachica
              </span>
            </div>

            <div className="h-5 w-[1px] bg-stone-300 hidden sm:block" />

            <div className="flex items-center gap-2 text-stone-700 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#35D5C5]" />
              <span>Iglesia En El Lugar Santísimo</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
