import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const NewPrograms2026: React.FC = () => {
  const { newPrograms, selectDonationPlan, currency } = useApp();

  return (
    <section id="programas-2026" className="py-20 lg:py-28 bg-[#2D2B50] text-white relative overflow-hidden">
      
      {/* Decorative ambient gradients */}
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#321078] rounded-full blur-[140px] opacity-40 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00E51B] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Visión de Futuro</span>
            <span aria-hidden="true">·</span>
            <span>Autonomía y Competencias Laborales</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white [text-wrap:balance]">
            Nuevos programas para 2026
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
            Ampliamos el horizonte formativo de los jóvenes y familias de Bocachica con iniciativas diseñadas 
            para desarrollar capacidades técnicas, pensamiento digital e independencia económica.
          </p>
          <p className="mt-2 text-xs text-white/50 italic">
            *Nota de transparencia: Programas en fase de alistamiento y equipamiento de infraestructura para su apertura gradual en 2026.
          </p>
        </div>

        {/* 3 Programs Grid with Editorial Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newPrograms.map((prog) => (
            <div
              key={prog.id}
              className="rounded-3xl bg-white/5 border border-white/10 p-7 flex flex-col justify-between hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 relative group"
            >
              <div>
                {/* Number & Status */}
                <div className="flex items-center justify-between mb-6">
                  <span 
                    className="font-serif text-4xl sm:text-5xl font-bold tabular-nums opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ color: prog.color }}
                  >
                    {prog.number}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/10 text-white/90 border border-white/10">
                    {prog.status}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  {prog.title}
                </h3>
                <p 
                  className="text-xs font-medium uppercase tracking-wider mb-4"
                  style={{ color: prog.color }}
                >
                  {prog.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
                  {prog.description}
                </p>

                {/* Core Modules / Opportunities */}
                <div className="space-y-2 mb-6">
                  {prog.opportunities.map((opp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-white/70">
                      <CheckCircle2 
                        className="w-3.5 h-3.5 shrink-0 mt-0.5" 
                        style={{ color: prog.color }} 
                      />
                      <span>{opp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() =>
                    selectDonationPlan(
                      currency === 'COP' ? 160000 : 40,
                      currency,
                      'single',
                      `Equipamiento para ${prog.title}`,
                      'Plan Futuro 2026'
                    )
                  }
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl transition-all"
                >
                  <span>Apoyar este equipamiento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
