import React from 'react';
import { Sparkles, CheckCircle2, Laptop, Briefcase, Wifi, ArrowRight, ShieldAlert } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const NuevosProgramasPage: React.FC = () => {
  const { newPrograms, navigateToPage, selectDonationPlan, currency } = useApp();

  return (
    <div className="bg-[#181528] text-white min-h-screen">
      
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
            <span className="text-white/40">PROGRAMAS</span>
            <span>/</span>
            <span className="text-[#00E51B] font-medium">NUEVOS PROGRAMAS 2026</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00E51B] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Innovación y Capacidades Productivas</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
              Nuevos Programas para 2026
            </h1>
            <p className="mt-3 text-base sm:text-lg text-white/80 leading-relaxed">
              Iniciativas de formación y desarrollo de capacidades técnicas y digitales para abrir rutas de 
              generación de ingresos y autonomía económica a la juventud de Bocachica.
            </p>
          </div>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Transparency note */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-white/80 max-w-3xl">
          <ShieldAlert className="w-5 h-5 text-[#35D5C5] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-white block">Estado de Implementación Responsable:</span>
            <span>
              Estos programas se encuentran en fase de planeación, diseño curricular y dotación tecnológica de las nuevas aulas del auditorio. Serán inaugurados progresivamente durante el año 2026 a medida que se completen las metas de equipamiento.
            </span>
          </div>
        </div>

        {/* 3 New Programs Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {newPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-[#242038] rounded-3xl border border-white/15 p-8 flex flex-col justify-between hover:border-white/30 transition-all duration-300 relative group"
            >
              <div>
                {/* Header with Number and Status */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-serif text-5xl font-bold tabular-nums opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ color: prog.color }}
                  >
                    {prog.number}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                    {prog.status}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  {prog.title}
                </h3>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-4"
                  style={{ color: prog.color }}
                >
                  {prog.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
                  {prog.description}
                </p>

                {/* Opportunities List */}
                <div className="space-y-2.5 mb-8">
                  {prog.opportunities.map((opp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-white/80">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: prog.color }}
                      />
                      <span>{opp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() =>
                    selectDonationPlan(
                      currency === 'COP' ? 160000 : 40,
                      currency,
                      'single',
                      `Dotación para ${prog.title}`,
                      'Plan Futuro'
                    )
                  }
                  className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all cursor-pointer"
                >
                  <span>Apoyar dotación de este programa</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Infrastructure Connection */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#282442] to-[#1E1B2E] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#35D5C5]">
              Espacio Físico Necesario
            </span>
            <h4 className="font-serif text-2xl font-bold text-white mt-1">
              Las nuevas aulas virtuales requieren el auditorio terminado
            </h4>
            <p className="text-xs sm:text-sm text-white/70 mt-2">
              Conoce el avance del proyecto de infraestructura donde funcionarán las computadoras y la conexión satelital para estos programas.
            </p>
          </div>
          <button
            onClick={() => navigateToPage('proyectos')}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#FF6B5E] hover:bg-[#ff5747] rounded-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Ver Proyecto de Infraestructura
          </button>
        </div>

      </section>

    </div>
  );
};
