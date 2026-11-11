import React, { useState, useEffect } from 'react';
import { X, Play, Heart, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const InitialVideoModal: React.FC = () => {
  const { navigateToPage } = useApp();
  // Open on initial load
  const [isOpen, setIsOpen] = useState<boolean>(() => {
    // Check if previously dismissed in this browser session
    try {
      return sessionStorage.getItem('lsp_initial_video_dismissed') !== 'true';
    } catch {
      return true;
    }
  });

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem('lsp_initial_video_dismissed', 'true');
    } catch {
      // ignore
    }
  };

  const handleDonateAndClose = () => {
    handleClose();
    navigateToPage('apoyanos');
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video de bienvenida e historia de Lives Saved Project"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-3xl bg-[#1A1733] border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-white animate-in zoom-in-95 duration-200">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#141226] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#FF6B5E]/20 text-[#FF6B5E] flex items-center justify-center">
              <Play className="w-4 h-4 fill-[#FF6B5E]" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Lives Saved Project · Bocachica
              </h2>
              <p className="text-[11px] text-white/60">
                Conoce el corazón de nuestra labor e impacto en la isla
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 16:9 Responsive YouTube Player */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Ug_BA9fihEI?autoplay=1&rel=0&modestbranding=1"
            title="Lives Saved Project Video Oficial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-4 sm:p-5 bg-[#141226] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/70 text-center sm:text-left leading-relaxed">
            Cada aporte hace posible transformar el futuro de los niños y familias de Bocachica.
          </p>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handleClose}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors cursor-pointer"
            >
              Continuar al sitio
            </button>

            <button
              onClick={handleDonateAndClose}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF6B5E] hover:bg-[#ff5747] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#FF6B5E]/30 transition-all cursor-pointer active:scale-95 whitespace-nowrap"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Apoyar la Misión</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
