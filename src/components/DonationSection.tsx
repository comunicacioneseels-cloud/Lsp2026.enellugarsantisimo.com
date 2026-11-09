import React, { useState } from 'react';
import {
  Heart,
  ArrowUpRight,
  Smartphone,
  Landmark,
  CreditCard,
  Copy,
  Check,
  Anchor,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const DonationSection: React.FC = () => {
  const { donationUrl, organizationInfo } = useApp();
  const [copiedZelle, setCopiedZelle] = useState(false);
  const [copiedBancolombia, setCopiedBancolombia] = useState(false);

  const handleCopyZelle = () => {
    navigator.clipboard.writeText('772-475-7342');
    setCopiedZelle(true);
    setTimeout(() => setCopiedZelle(false), 2000);
  };

  const handleCopyBancolombia = () => {
    navigator.clipboard.writeText('171-0000-39-05');
    setCopiedBancolombia(true);
    setTimeout(() => setCopiedBancolombia(false), 2000);
  };

  return (
    <section id="donar" className="py-12 sm:py-20 bg-[#18162B] text-[#1E1B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#FFFFFF] relative min-h-[640px] lg:min-h-[720px] flex flex-col justify-between">
          
          {/* Imagen de fondo oficial con transparencia para resaltar texto */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/assets/aistudio/MAQUETA_Lsp_website_-_Espa_ol__13__70ef4dd8.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-right opacity-30 transition-opacity duration-300"
              referrerPolicy="no-referrer"
            />
            {/* Velo difuminado suave para que el texto resalte con máxima nitidez */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          </div>

          {/* Ola superior oscura con curvatura orgánica */}
          <div className="w-full bg-[#16132A] h-12 sm:h-16 relative overflow-hidden z-10">
            <svg
              className="absolute bottom-0 left-0 w-full h-8 sm:h-10 text-[#FFFFFF] fill-current"
              viewBox="0 0 1440 80"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C320,60 520,80 720,50 C940,20 1200,65 1440,30 L1440,80 L0,80 Z" />
            </svg>
          </div>

          {/* Contenido editable sobre la imagen de fondo */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-2xl flex-1 flex flex-col justify-between">
            
            <div className="space-y-3 bg-white/80 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none rounded-2xl p-4 sm:p-0">
              <h2 className="font-serif font-bold text-3xl sm:text-5xl lg:text-[46px] text-[#181534] tracking-tight leading-tight">
                Apoya a Lives Saved Project
              </h2>

              {/* Línea decorativa ondulada coral */}
              <div className="pt-0.5">
                <svg
                  className="w-16 h-3 text-[#FF6554]"
                  viewBox="0 0 70 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 6 Q 8 1, 14 6 T 26 6 T 38 6 T 50 6 T 62 6" />
                </svg>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-lg font-normal pt-1">
                Tu aporte ayuda a sostener educación, bienestar y oportunidades para las familias de Bocachica.
              </p>
            </div>

            {/* Lista vertical de canales */}
            <div className="relative pl-14 sm:pl-16 space-y-7 sm:space-y-8 pt-6 pb-4 bg-white/80 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none rounded-2xl p-4 sm:p-0">
              
              <div
                className="absolute left-[20px] sm:left-[22px] top-6 bottom-6 w-[2px] border-l-2 border-dashed border-[#FF6554]"
                aria-hidden="true"
              />

              {/* CANAL 1: ZELLE */}
              <div className="relative group">
                <div className="absolute -left-[56px] sm:-left-[64px] top-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FF6554] text-white flex items-center justify-center shadow-md">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div>
                  <h3 className="font-sans font-bold text-base sm:text-lg text-[#181534]">
                    Zelle
                  </h3>
                  
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="font-sans font-semibold text-sm sm:text-base text-stone-800">
                      772-475-7342
                    </span>
                    <button
                      onClick={handleCopyZelle}
                      className="p-1 text-stone-400 hover:text-[#FF6554] rounded-md transition-colors cursor-pointer"
                      title="Copiar número de Zelle"
                      aria-label="Copiar número de Zelle"
                    >
                      {copiedZelle ? (
                        <span className="text-[11px] font-bold text-[#00E51B] flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Copiado
                        </span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5 font-normal">
                    Ministerio Internacional En El Lugar Santísimo
                  </p>
                </div>
              </div>

              {/* CANAL 2: BANCOLOMBIA */}
              <div className="relative group">
                <div className="absolute -left-[56px] sm:-left-[64px] top-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FF6554] text-white flex items-center justify-center shadow-md">
                  <Landmark className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div>
                  <h3 className="font-sans font-bold text-base sm:text-lg text-[#181534]">
                    Cuenta de ahorros Bancolombia
                  </h3>

                    <div className="flex items-center gap-3 mt-0.5">
                    <span className="font-mono font-bold text-sm sm:text-base text-stone-800 tracking-wide">
                      171-0000-39-05
                    </span>
                    <button
                      onClick={handleCopyBancolombia}
                      className="p-1 text-stone-400 hover:text-[#FF6554] rounded-md transition-colors cursor-pointer"
                      title="Copiar número de cuenta Bancolombia"
                      aria-label="Copiar número de cuenta Bancolombia"
                    >
                      {copiedBancolombia ? (
                        <span className="text-[11px] font-bold text-[#00E51B] flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Copiado
                        </span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 mt-0.5 font-normal">
                    Iglesia Comunidad Cristiano Carismática La Esperanza
                  </p>
                  <p className="text-xs text-stone-500 font-medium">
                    NIT 830046692-6
                  </p>
                </div>
              </div>

              {/* CANAL 3: DONA CON TARJETA DE DÉBITO O CRÉDITO */}
              <div className="relative group pt-1">
                <div className="absolute -left-[56px] sm:-left-[64px] top-1.5 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FF6554] text-white flex items-center justify-center shadow-md">
                  <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div>
                  <a
                    href={donationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#FF604F] hover:bg-[#ff4e3c] active:scale-[0.98] text-white font-bold text-sm sm:text-base underline decoration-1 underline-offset-4 shadow-lg shadow-[#FF604F]/30 transition-all cursor-pointer"
                  >
                    <span>Dona con tarjeta de débito o crédito</span>
                    <ArrowUpRight className="w-4 h-4 ml-1.5 no-underline" />
                  </a>
                </div>
              </div>

            </div>

            <div className="pt-2 text-xs text-stone-500 bg-white/70 sm:bg-transparent rounded-lg p-2 sm:p-0">
              <span>¿Tienes dudas con tu transferencia? Confirmación directa al WhatsApp: </span>
              <a
                href={organizationInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#FF6554] hover:underline"
              >
                {organizationInfo.whatsapp}
              </a>
            </div>

          </div>

          {/* Ola inferior oscura con ancla y texto */}
          <div className="relative lg:absolute lg:bottom-0 lg:right-0 lg:max-w-lg w-full z-20">
            <div className="relative bg-[#16132A] lg:bg-transparent">
              <img
                src="/assets/aistudio/wave_bottom_transparent.png"
                alt=""
                aria-hidden="true"
                className="hidden lg:block w-full h-auto object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              
              <div className="p-6 lg:p-4 lg:absolute lg:bottom-4 lg:right-4 max-w-sm flex items-start gap-3.5 text-white">
                <div className="shrink-0 text-[#FF6554] mt-0.5">
                  <Anchor className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2} />
                </div>

                <p className="font-serif text-xs sm:text-sm text-white/95 leading-relaxed font-normal">
                  Sanar emocionalmente es el primer paso para construir un futuro lleno de esperanza y oportunidades.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
