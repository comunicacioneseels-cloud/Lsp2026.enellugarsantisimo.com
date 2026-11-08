import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Heart,
  Images,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { useApp, OFFICIAL_DONATION_URL } from '../context/AppContext';
import { NewProgram2026 } from '../types';
import { ImageLightbox } from '../components/ImageLightbox';

export const NuevosProgramasPage: React.FC = () => {
  const { newPrograms, navigateToPage } = useApp();

  // Active program modal for pop-up
  const [activeModalProgram, setActiveModalProgram] = useState<NewProgram2026 | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Lightbox state for full-screen photo zoom
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

  // Reset active image index when a new program is opened
  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeModalProgram?.id]);

  // Handle ESC key for pop-up modal and lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxData.isOpen) {
          setLightboxData((prev) => ({ ...prev, isOpen: false }));
        } else if (activeModalProgram) {
          setActiveModalProgram(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxData.isOpen, activeModalProgram]);

  const openLightbox = (src: string, alt: string, caption: string) => {
    setLightboxData({
      isOpen: true,
      src,
      alt,
      caption,
    });
  };

  const currentModalImages = activeModalProgram?.images || [];
  const currentModalImage = currentModalImages[activeImageIndex] || currentModalImages[0];

  const handleNextImage = () => {
    if (currentModalImages.length > 0) {
      setActiveImageIndex((prev) => (prev + 1) % currentModalImages.length);
    }
  };

  const handlePrevImage = () => {
    if (currentModalImages.length > 0) {
      setActiveImageIndex((prev) => (prev - 1 + currentModalImages.length) % currentModalImages.length);
    }
  };

  return (
    <div className="bg-[#181528] text-white min-h-screen">
      
      {/* Lightbox a pantalla completa */}
      <ImageLightbox
        isOpen={lightboxData.isOpen}
        onClose={() => setLightboxData((prev) => ({ ...prev, isOpen: false }))}
        imageSrc={lightboxData.src}
        imageAlt={lightboxData.alt}
        caption={lightboxData.caption}
      />

      {/* Pop-up Modal con 4 Fotos para cada Nuevo Programa */}
      {activeModalProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalProgram(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-nuevo-programa-title"
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 text-[#1E1B2E] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal con Color Oficial del Programa */}
            <div
              className="p-6 sm:p-8 text-white relative rounded-t-3xl transition-colors"
              style={{ backgroundColor: activeModalProgram.color }}
            >
              <button
                type="button"
                onClick={() => setActiveModalProgram(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-black/25 hover:bg-black/45 text-white transition-colors cursor-pointer focus:outline-none"
                aria-label="Cerrar ventana"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="w-9 h-9 rounded-full bg-white text-stone-900 font-black text-sm flex items-center justify-center shadow-md">
                  {activeModalProgram.orderNumber}
                </span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-90">
                  PROGRAMA PROYECTADO 2026 · {activeModalProgram.status}
                </span>
              </div>

              <h3
                id="modal-nuevo-programa-title"
                className="font-sans text-2xl sm:text-4xl font-black mt-1 text-white tracking-tight leading-tight"
              >
                {activeModalProgram.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-white/95 leading-relaxed max-w-xl font-medium">
                {activeModalProgram.tagline}
              </p>
            </div>

            {/* Cuerpo del Pop-up */}
            <div className="p-6 sm:p-8 space-y-6 flex-1">
              
              {/* Enfoque del Programa */}
              {activeModalProgram.bulletPoints && activeModalProgram.bulletPoints.length > 0 && (
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                    Propósito Formativo
                  </span>
                  <ul className="space-y-2">
                    {activeModalProgram.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                        <span
                          className="w-2 h-2 rounded-full shrink-0 mt-1.5"
                          style={{ backgroundColor: activeModalProgram.color }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ================================================================= */}
              {/* GALERÍA DE 4 FOTOGRAFÍAS EN EL POP-UP                              */}
              {/* ================================================================= */}
              {currentModalImages.length > 0 && (
                <div className="space-y-3.5 pt-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Images className="w-4 h-4" style={{ color: activeModalProgram.color }} />
                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800">
                        Galería del Programa (4 Fotografías)
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-semibold text-stone-500">
                      {activeImageIndex + 1} de {currentModalImages.length}
                    </span>
                  </div>

                  {/* Imagen Principal Activa */}
                  <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 shadow-md aspect-16/10 group">
                    <img
                      src={currentModalImage.src}
                      alt={currentModalImage.title}
                      className="w-full h-full object-cover object-center transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />

                    <div className="absolute bottom-3.5 left-4 right-14 text-white z-10">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm inline-block mb-1 text-white"
                        style={{ backgroundColor: activeModalProgram.color }}
                      >
                        Foto {activeImageIndex + 1} de 4
                      </span>
                      <h5 className="font-bold text-sm sm:text-base text-white drop-shadow-sm">
                        {currentModalImage.title}
                      </h5>
                      <p className="text-xs text-white/90 line-clamp-2 mt-0.5">
                        {currentModalImage.caption}
                      </p>
                    </div>

                    {/* Botón de Zoom a Pantalla Completa */}
                    <button
                      type="button"
                      onClick={() => openLightbox(currentModalImage.src, currentModalImage.title, currentModalImage.caption)}
                      className="absolute bottom-3.5 right-3.5 p-2 bg-black/75 hover:bg-black text-white rounded-lg border border-white/25 transition-transform active:scale-90 cursor-pointer shadow-md z-20"
                      aria-label="Ampliar fotografía"
                    >
                      <Maximize2 className="w-4 h-4 text-white" />
                    </button>

                    {/* Controles de Navegación sobre la Imagen */}
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all cursor-pointer z-20"
                      aria-label="Foto anterior"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextImage}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all cursor-pointer z-20"
                      aria-label="Siguiente foto"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* 4 Miniaturas Seleccionables */}
                  <div className="grid grid-cols-4 gap-2.5">
                    {currentModalImages.map((img, idx) => (
                      <button
                        key={img.src + idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative aspect-4/3 rounded-xl overflow-hidden border-2 transition-all cursor-pointer group ${
                          activeImageIndex === idx
                            ? 'ring-2 scale-[1.03] shadow-md'
                            : 'border-stone-200 opacity-70 hover:opacity-100 hover:border-stone-400'
                        }`}
                        style={{
                          borderColor: activeImageIndex === idx ? activeModalProgram.color : undefined,
                        }}
                        aria-label={`Ver foto ${idx + 1}: ${img.title}`}
                      >
                        <img
                          src={img.src}
                          alt={img.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-black/70 text-white">
                          {idx + 1}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Contenidos y Competencias Prácticas */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                  Ruta de Formación y Competencias
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalProgram.opportunities.map((opp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: activeModalProgram.color }}
                      />
                      <span>{opp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Acciones del Footer del Modal */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3.5 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setActiveModalProgram(null)}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 border border-stone-300 rounded-xl hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  Cerrar
                </button>

                <a
                  href={OFFICIAL_DONATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-white rounded-xl shadow-lg transition-transform active:scale-[0.98] cursor-pointer"
                  style={{ backgroundColor: activeModalProgram.color }}
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Apoyar dotación de este programa</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

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
              Haz clic en cualquiera de los 3 cuadros de colores para abrir su <strong className="text-white">pop-up emergente interactivo con 4 fotografías</strong>, contenidos formativos y detalles de equipamiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* =================================================================== */}
            {/* CUADRO 1: EMPRENDIMIENTO (TOP-LEFT)                                 */}
            {/* =================================================================== */}
            {newPrograms[0] && (
              <button
                type="button"
                onClick={() => setActiveModalProgram(newPrograms[0])}
                className="text-left p-7 sm:p-9 rounded-3xl transition-all duration-300 cursor-pointer shadow-xl relative overflow-hidden group flex flex-col justify-between hover:scale-[1.015] active:scale-[0.99] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/40"
                style={{ backgroundColor: newPrograms[0].color }}
                aria-haspopup="dialog"
                aria-label="Abrir pop-up con 4 fotos de Emprendimiento"
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-7">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-md">
                      1
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 text-white text-[11px] font-bold backdrop-blur-xs border border-white/20">
                      <Images className="w-3.5 h-3.5" />
                      <span>Ver 4 Fotos</span>
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

                <div className="pt-6 mt-4 border-t border-white/20 flex items-center justify-between text-white text-xs font-bold">
                  <span className="opacity-90">Toca para abrir pop-up con 4 fotos</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Abrir</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </button>
            )}

            {/* =================================================================== */}
            {/* CUADRO 2: HABILIDADES TÉCNICAS A TRAVÉS DE LA VIRTUALIDAD (TOP-RIGHT) */}
            {/* =================================================================== */}
            {newPrograms[1] && (
              <button
                type="button"
                onClick={() => setActiveModalProgram(newPrograms[1])}
                className="text-left p-7 sm:p-9 rounded-3xl transition-all duration-300 cursor-pointer shadow-xl relative overflow-hidden group flex flex-col justify-between hover:scale-[1.015] active:scale-[0.99] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/40"
                style={{ backgroundColor: newPrograms[1].color }}
                aria-haspopup="dialog"
                aria-label="Abrir pop-up con 4 fotos de Habilidades Técnicas a Través de la Virtualidad"
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-7">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-md">
                      2
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 text-white text-[11px] font-bold backdrop-blur-xs border border-white/20">
                      <Images className="w-3.5 h-3.5" />
                      <span>Ver 4 Fotos</span>
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

                <div className="pt-6 mt-4 border-t border-white/20 flex items-center justify-between text-white text-xs font-bold">
                  <span className="opacity-90">Toca para abrir pop-up con 4 fotos</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Abrir</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </button>
            )}

            {/* =================================================================== */}
            {/* CUADRO 3: CURSO DE SISTEMAS Y HERRAMIENTAS DIGITALES (BOTTOM-LEFT)   */}
            {/* =================================================================== */}
            {newPrograms[2] && (
              <button
                type="button"
                onClick={() => setActiveModalProgram(newPrograms[2])}
                className="text-left p-7 sm:p-9 rounded-3xl transition-all duration-300 cursor-pointer shadow-xl relative overflow-hidden group flex flex-col justify-between hover:scale-[1.015] active:scale-[0.99] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/40"
                style={{ backgroundColor: newPrograms[2].color }}
                aria-haspopup="dialog"
                aria-label="Abrir pop-up con 4 fotos de Curso de Sistemas y Herramientas Digitales"
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-7">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-md">
                      3
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 text-white text-[11px] font-bold backdrop-blur-xs border border-white/20">
                      <Images className="w-3.5 h-3.5" />
                      <span>Ver 4 Fotos</span>
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

                <div className="pt-6 mt-4 border-t border-white/20 flex items-center justify-between text-white text-xs font-bold">
                  <span className="opacity-90">Toca para abrir pop-up con 4 fotos</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Abrir</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </button>
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
