import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowRight,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Heart,
  Images,
} from 'lucide-react';
import { useApp, OFFICIAL_DONATION_URL } from '../context/AppContext';
import { ImageLightbox } from './ImageLightbox';

export const ProgramDetailModal: React.FC = () => {
  const { activeProgramModal, setActiveProgramModal } = useApp();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
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

  // Reset image index whenever a new program modal opens
  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeProgramModal?.id]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxData.isOpen) {
          setLightboxData((prev) => ({ ...prev, isOpen: false }));
        } else {
          setActiveProgramModal(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxData.isOpen, setActiveProgramModal]);

  if (!activeProgramModal) return null;

  const images = activeProgramModal.images && activeProgramModal.images.length > 0
    ? activeProgramModal.images
    : [];
  const currentImage = images[activeImageIndex] || images[0];

  const handleNextImage = () => {
    if (images.length > 0) {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const handlePrevImage = () => {
    if (images.length > 0) {
      setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const openLightbox = (src: string, alt: string, caption: string) => {
    setLightboxData({
      isOpen: true,
      src,
      alt,
      caption,
    });
  };

  return (
    <>
      {/* Lightbox for zooming any program photo */}
      <ImageLightbox
        isOpen={lightboxData.isOpen}
        onClose={() => setLightboxData((prev) => ({ ...prev, isOpen: false }))}
        imageSrc={lightboxData.src}
        imageAlt={lightboxData.alt}
        caption={lightboxData.caption}
      />

      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={() => setActiveProgramModal(null)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-program-title"
      >
        <div
          className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 text-[#1E1B2E] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Program Brand Accent & Maqueta Number */}
          <div
            className="p-6 sm:p-8 text-white relative rounded-t-3xl transition-colors"
            style={{ backgroundColor: activeProgramModal.color }}
          >
            <button
              onClick={() => setActiveProgramModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/25 hover:bg-black/45 text-white transition-colors cursor-pointer focus:outline-none"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className="w-9 h-9 rounded-full bg-white text-stone-900 font-black text-sm flex items-center justify-center shadow-md">
                {activeProgramModal.orderNumber}
              </span>
              <span className="text-xs uppercase tracking-widest font-bold opacity-90">
                PROGRAMA {activeProgramModal.orderNumber} DE 7 · {activeProgramModal.category}
              </span>
            </div>

            <h3
              id="modal-program-title"
              className="font-sans text-2xl sm:text-4xl font-black mt-1 text-white tracking-tight"
            >
              {activeProgramModal.title}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-white/95 leading-relaxed max-w-xl font-medium">
              {activeProgramModal.shortDescription}
            </p>
          </div>

          {/* Modal Body: Únicamente las 4 fotografías verificadas del programa */}
          <div className="p-6 sm:p-8 space-y-6 flex-1">

            {/* ================================================================= */}
            {/* SECCIÓN DE 4 IMÁGENES DEL PROGRAMA (POP-UP CON 4 FOTOS)           */}
            {/* ================================================================= */}
            {images.length > 0 && (
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Images className="w-4 h-4" style={{ color: activeProgramModal.color }} />
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800">
                      Galería de Evidencias ({images.length} {images.length === 1 ? 'Fotografía' : 'Fotografías'})
                    </h4>
                  </div>
                  <span className="text-xs font-mono font-semibold text-stone-500">
                    {activeImageIndex + 1} de {images.length}
                  </span>
                </div>

                {/* Fotografía Principal Activa */}
                <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 shadow-md aspect-16/10 group">
                  <img
                    src={currentImage.src}
                    alt={currentImage.title}
                    className="w-full h-full object-cover object-center transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />

                  {/* Degradado superpuesto */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Texto de la fotografía */}
                  <div className="absolute bottom-3.5 left-4 right-14 text-white z-10">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm inline-block mb-1 text-white"
                      style={{ backgroundColor: activeProgramModal.color }}
                    >
                      Foto {activeImageIndex + 1} de {images.length}
                    </span>
                    <h5 className="font-bold text-sm sm:text-base text-white drop-shadow-sm">
                      {currentImage.title}
                    </h5>
                    <p className="text-xs text-white/90 line-clamp-2 mt-0.5">
                      {currentImage.caption}
                    </p>
                  </div>

                  {/* Botón de ampliar foto */}
                  <button
                    type="button"
                    onClick={() => openLightbox(currentImage.src, currentImage.title, currentImage.caption)}
                    className="absolute bottom-3.5 right-3.5 p-2 bg-black/75 hover:bg-black text-white rounded-lg border border-white/25 transition-transform active:scale-90 cursor-pointer shadow-md z-20"
                    aria-label="Ampliar foto a pantalla completa"
                  >
                    <Maximize2 className="w-4 h-4 text-white" />
                  </button>

                  {/* Flechas de navegación sobre la imagen */}
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
                  {images.map((img, idx) => (
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
                        borderColor: activeImageIndex === idx ? activeProgramModal.color : undefined,
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

            {/* Acciones del Footer del Modal */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3.5 border-t border-stone-100">
              <button
                type="button"
                onClick={() => setActiveProgramModal(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 border border-stone-300 rounded-xl hover:bg-stone-50 transition-colors cursor-pointer"
              >
                Cerrar
              </button>

              <a
                href={OFFICIAL_DONATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-white rounded-xl shadow-lg transition-transform active:scale-[0.98] cursor-pointer"
                style={{ backgroundColor: activeProgramModal.color }}
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donar / Respaldar este programa</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
