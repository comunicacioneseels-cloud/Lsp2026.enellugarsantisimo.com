import React from 'react';
import { useApp } from '../context/AppContext';
import { DonationSection } from '../components/DonationSection';

export const ApoyanosPage: React.FC = () => {
  const { navigateToPage } = useApp();

  return (
    <div className="bg-[#FDFBF7] text-[#1E1B2E] min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-[#1E1B2E] text-white py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
            <button
              onClick={() => navigateToPage('inicio')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              INICIO
            </button>
            <span>/</span>
            <span className="text-[#FF6B5E] font-medium">APÓYANOS</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FF6B5E] block mb-2">
              Canal Oficial de Donación y Aportes
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
              Apóyanos
            </h1>
            <p className="mt-3 text-base sm:text-lg text-white/80 leading-relaxed">
              Cada aporte se traduce en educación, alimento y esperanza para los niños de Bocachica. 
              Realiza tu donación en línea o mediante transferencia bancaria directa.
            </p>
          </div>

        </div>
      </section>

      {/* Main Donation Section Component */}
      <DonationSection />

    </div>
  );
};
