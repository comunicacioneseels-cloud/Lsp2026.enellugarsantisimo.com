import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Maximize2,
  Heart,
  ExternalLink,
} from 'lucide-react';
import { useApp, OFFICIAL_DONATION_URL } from '../context/AppContext';
import { ImageLightbox } from '../components/ImageLightbox';

export const NuevosProgramasPage: React.FC = () => {
  const { newPrograms, navigateToPage } = useApp();

  // Lightbox state for full-screen photo zoom of verified evidence photos
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
    caption: string;
  }>({
    isOpen: false,
    src: '',
    alt: '',
    caption: '',
  });

  // Handle ESC key for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxData.isOpen) {
        setLightboxData((prev) => ({ ...prev, isOpen: false }));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxData.isOpen]);

  const openLightbox = (src: string, alt: string, caption: string) => {
    setLightboxData({
      isOpen: true,
      src,
      alt,
      caption,
    });
  };

  return (
    <div className="bg-[#181528] text-white min-h-screen">
      
      {/* Lightbox a pantalla completa para fotos de evidencia */}
      <ImageLightbox
        isOpen={lightboxData.isOpen}
        onClose={() => setLightboxData((prev) => ({ ...prev, isOpen: false }))}
        imageSrc={lightboxData.src}
        imageAlt={lightboxData.alt}
        caption={lightboxData.caption}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex items-center gap-2 text-xs text-white/60">
          <button
            onClick={() => navigateToPage('inicio')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            INICIO
          </button>
          <span>/</span>
          <span className="text-white/40">PROGRAMAS</span>
          <span>/</span>
          <span className="text-[#00D014] font-semibold">NUEVOS PROGRAMAS PARA 2026</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-12">
        
        {/* ========================================================================= */}
        {/* HEADER HERO SEGÚN LA MAQUETA 4 (NUEVOS PROGRAMAS PARA 2026 + FOTO DERECHA) */}
        {/* ========================================================================= */}
        <section
          className="bg-[#241F3C] rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
          aria-label="Presentación de Nuevos Programas 2026"
        >
          {/* Resplandor ambiental de fondo */}
          <div
            className="absolute top-0 right-1/4 w-96 h-96 bg-[#00D014]/10 rounded-full blur-[140px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Columna Izquierda: Titulares Oficiales de la Maqueta 4 */}
            <div className="lg:col-span-6 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#00D014]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PLAN ESTRATÉGICO 2026</span>
              </div>

              <div>
                <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#00D014] leading-[1.05]">
                  NUEVOS PROGRAMAS<br />
                  PARA 2026
                </h1>
              </div>

              <p className="text-white text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Nuestro plan estratégico 2026 busca <strong className="font-bold text-white">ampliar el impacto y generar oportunidades reales de movilidad social</strong>.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-white/70">
                <span>Toca cualquiera de los 3 cuadros para abrir su pop-up con 4 imágenes:</span>
              </div>
            </div>

            {/* Columna Derecha: Foto de los niños saltando de alegría (IMG_0198.JPG de la Maqueta 4) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 aspect-4/3 sm:aspect-16/11 bg-stone-900 group">
                <img
                  src="/assets/aistudio/IMG_0198.JPG"
                  alt="Niños de Bocachica saltando con los brazos en alto celebrando con alegría (Maqueta 4)"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#00D014] block">
                    Bocachica en Movimiento
                  </span>
                  <p className="text-xs text-white/90 font-medium">
                    Energía, vitalidad y esperanza de futuro para la niñez insular
                  </p>
                </div>

                {/* Botón de Zoom Lightbox */}
                <button
                  type="button"
                  onClick={() =>
                    openLightbox(
                      '/assets/aistudio/IMG_0198.JPG',
                      'Niños de Bocachica saltando (Maqueta 4)',
                      'Jornadas de recreación activa y expresión corporal de niños y jóvenes en la terraza comunitaria.'
                    )
                  }
                  className="absolute bottom-3 right-3 p-2 bg-black/70 hover:bg-black text-white rounded-lg border border-white/20 transition-transform active:scale-90 cursor-pointer shadow-md"
                  aria-label="Ampliar fotografía de los niños saltando"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#00D014]" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* COMPOSICIÓN 2x2 SEGÚN LA MAQUETA 4: 3 CUADROS DE COLORES + 1 FOTO EN DEVOCIÓN */}
        {/* ========================================================================= */}
        <section aria-label="Nuevos programas de formación y capacidades 2026">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
              Programas Proyectados 2026
            </h2>
            <p className="text-xs sm:text-sm text-white/70 mt-2">
              Nuevas áreas formativas de emprendimiento, tecnología y habilidades digitales diseñadas para la comunidad de Bocachica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* =================================================================== */}
            {/* CUADRO 1: EMPRENDIMIENTO (TOP-LEFT) - SIN POP-UP                   */}
            {/* =================================================================== */}
            {newPrograms[0] && (
              <div
                className="text-left p-7 sm:p-9 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between border border-white/10"
                style={{ backgroundColor: newPrograms[0].color }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-7">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-md">
                      1
                    </div>
                    <span className="px-3 py-1 rounded-full bg-black/25 text-white text-[11px] font-bold backdrop-blur-xs border border-white/20">
                      Programa Proyectado
                    </span>
                  </div>

                  <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-4">
                    {newPrograms[0].title}
                  </h3>

                  <ul className="space-y-2.5 text-white text-xs sm:text-sm font-medium leading-relaxed">
                    {newPrograms[0].bulletPoints.map((bp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-white shrink-0 mt-1.5 opacity-90" />
                        <span className="drop-shadow-xs">{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/20 flex items-center justify-between text-white text-xs font-semibold opacity-90">
                  <span>En etapa de formulación y equipamiento</span>
                  <span className="font-bold">2026</span>
                </div>
              </div>
            )}

            {/* =================================================================== */}
            {/* CUADRO 2: HABILIDADES TÉCNICAS A TRAVÉS DE LA VIRTUALIDAD (TOP-RIGHT) - SIN POP-UP */}
            {/* =================================================================== */}
            {newPrograms[1] && (
              <div
                className="text-left p-7 sm:p-9 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between border border-white/10"
                style={{ backgroundColor: newPrograms[1].color }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-7">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-md">
                      2
                    </div>
                    <span className="px-3 py-1 rounded-full bg-black/25 text-white text-[11px] font-bold backdrop-blur-xs border border-white/20">
                      Programa Proyectado
                    </span>
                  </div>

                  <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-4">
                    {newPrograms[1].title}
                  </h3>

                  <ul className="space-y-2.5 text-white text-xs sm:text-sm font-medium leading-relaxed">
                    {newPrograms[1].bulletPoints.map((bp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-white shrink-0 mt-1.5 opacity-90" />
                        <span className="drop-shadow-xs">{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/20 flex items-center justify-between text-white text-xs font-semibold opacity-90">
                  <span>En etapa de formulación y equipamiento</span>
                  <span className="font-bold">2026</span>
                </div>
              </div>
            )}

            {/* =================================================================== */}
            {/* CUADRO 3: CURSO DE SISTEMAS Y HERRAMIENTAS DIGITALES (BOTTOM-LEFT) - SIN POP-UP */}
            {/* =================================================================== */}
            {newPrograms[2] && (
              <div
                className="text-left p-7 sm:p-9 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between border border-white/10"
                style={{ backgroundColor: newPrograms[2].color }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-7">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-md">
                      3
                    </div>
                    <span className="px-3 py-1 rounded-full bg-black/25 text-white text-[11px] font-bold backdrop-blur-xs border border-white/20">
                      Programa Proyectado
                    </span>
                  </div>

                  <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-4">
                    {newPrograms[2].title}
                  </h3>

                  <ul className="space-y-2.5 text-white text-xs sm:text-sm font-medium leading-relaxed">
                    {newPrograms[2].bulletPoints.map((bp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-white shrink-0 mt-1.5 opacity-90" />
                        <span className="drop-shadow-xs">{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/20 flex items-center justify-between text-white text-xs font-semibold opacity-90">
                  <span>En etapa de formulación y equipamiento</span>
                  <span className="font-bold">2026</span>
                </div>
              </div>
            )}

            {/* =================================================================== */}
            {/* CUADRO 4: FOTO NIÑOS EN ORACIÓN Y DEVOCIÓN (BOTTOM-RIGHT DE LA MAQUETA 4)*/}
            {/* =================================================================== */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/15 bg-stone-900 group min-h-[340px] flex flex-col justify-end">
              <img
                src="/assets/aistudio/IMG_0220.JPG"
                alt="Niño de Bocachica con ojos cerrados en momento íntimo de oración y devoción (Maqueta 4)"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 p-6 sm:p-8 text-white space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#00D014] block">
                  Cimientos Espirituales
                </span>
                <h4 className="font-sans font-bold text-lg sm:text-xl text-white drop-shadow-md">
                  Una Fe Viva que Inspira a Transformar la Realidad
                </h4>
                <p className="text-xs text-white/85 leading-relaxed drop-shadow-xs pt-1">
                  Los nuevos programas nacen de un compromiso con la formación ética, espiritual y profesional de las nuevas generaciones.
                </p>
              </div>

              {/* Botón de Zoom a Pantalla Completa */}
              <button
                type="button"
                onClick={() =>
                  openLightbox(
                    '/assets/aistudio/IMG_0220.JPG',
                    'Niño de Bocachica en oración',
                    'Momento sincero de reverencia y oración de niños reunidos en el centro comunitario de Bocachica.'
                  )
                }
                className="absolute top-4 right-4 p-2.5 bg-black/70 hover:bg-black text-white rounded-xl border border-white/20 transition-transform active:scale-90 cursor-pointer shadow-md z-20"
                aria-label="Ampliar fotografía de devoción"
              >
                <Maximize2 className="w-4 h-4 text-[#00D014]" />
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* ENLACES INSTITUCIONALES Y DONACIÓN                                       */}
        {/* ========================================================================= */}
        <div className="p-8 bg-[#241F3C] rounded-3xl border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00D014]">
              Infraestructura y Aulas
            </span>
            <h4 className="font-sans font-black text-2xl text-white mt-1">
              Las nuevas aulas virtuales requieren el auditorio terminado
            </h4>
            <p className="text-xs sm:text-sm text-white/80 mt-1 leading-relaxed">
              Conoce el avance del proyecto de infraestructura donde funcionarán las computadoras, la conectividad satelital y los talleres productivos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => navigateToPage('proyectos')}
              className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all cursor-pointer whitespace-nowrap text-center"
            >
              Ver Proyectos de Infraestructura
            </button>

            <a
              href={OFFICIAL_DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-[#181528] bg-[#00D014] hover:bg-[#00b512] rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-lg active:scale-95 text-center"
            >
              <Heart className="w-4 h-4 fill-[#181528]" />
              <span>Donar para Dotación</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </main>

    </div>
  );
};
