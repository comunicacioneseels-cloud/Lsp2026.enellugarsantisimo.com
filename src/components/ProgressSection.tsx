import React from 'react';
import { Target, TrendingUp, Calendar, AlertCircle, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProgressSection: React.FC = () => {
  const { financialProgress, selectDonationPlan, currency, setIsAdminOpen } = useApp();

  const target = financialProgress.targetUSD;
  const raised = financialProgress.raisedUSD;
  const pending = Math.max(0, target - raised);
  const percentage = Math.min(100, Math.round((raised / target) * 100));

  return (
    <section id="avances" className="py-20 bg-[#2D2B50] text-white relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div 
        className="absolute top-0 right-0 w-80 h-80 bg-[#35D5C5] rounded-full blur-[140px] opacity-15 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#35D5C5] mb-2">
            <TrendingUp className="w-4 h-4" />
            <span>Transparencia y Avances</span>
            <span aria-hidden="true">·</span>
            <span>Rendición de Cuentas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white [text-wrap:balance]">
            Avances de obra y necesidades pendientes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/80 leading-relaxed">
            Cada ladrillo puesto en el nuevo auditorio y aulas es fruto de personas e instituciones que creen 
            en el porvenir de Bocachica. Conoce el estado de nuestra meta constructiva.
          </p>
        </div>

        {/* Central Progress Dashboard Box */}
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl">
          
          {/* Top Bar with Date & Status */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#35D5C5]" />
              <span>Última actualización oficial: <strong>{financialProgress.lastUpdated}</strong></span>
            </div>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-[#35D5C5] hover:text-white underline underline-offset-4 text-xs font-medium transition-colors"
            >
              Editar valores (Administración)
            </button>
          </div>

          {/* Key Metric Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 text-center sm:text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/60 block mb-1">
                Meta de Financiación
              </span>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-white tabular-nums">
                USD ${target.toLocaleString()}
              </p>
              <span className="text-xs text-white/40 block mt-1">
                Presupuesto histórico estimado
              </span>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#00E51B] block mb-1">
                Fondos Recaudados
              </span>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-[#00E51B] tabular-nums">
                USD ${raised.toLocaleString()}
              </p>
              <span className="text-xs text-white/40 block mt-1">
                Aportes recibidos y ejecutados
              </span>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FF6B5E] block mb-1">
                Saldo Pendiente
              </span>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-[#FF6B5E] tabular-nums">
                USD ${pending.toLocaleString()}
              </p>
              <span className="text-xs text-white/40 block mt-1">
                Faltante para culminar obras
              </span>
            </div>
          </div>

          {/* Dynamic Progress Bar */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between text-sm font-semibold">
              <span className="text-white/80">Progreso general de recaudación:</span>
              <span className="text-[#35D5C5] font-serif text-lg tabular-nums font-bold">
                {percentage}%
              </span>
            </div>

            <div 
              className="w-full h-4 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/15" 
              role="progressbar" 
              aria-valuenow={percentage} 
              aria-valuemin={0} 
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#35D5C5] via-[#00E51B] to-[#FF6B5E] transition-all duration-1000 ease-out"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Phase status note */}
          <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-white/80">
            <AlertCircle className="w-5 h-5 text-[#35D5C5] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block">Estado de la obra en campo:</span>
              <p className="mt-0.5 text-white/70">{financialProgress.auditoriumPhase}</p>
              <p className="mt-1 text-[11px] text-white/50">{financialProgress.verifiedNotes}</p>
            </div>
          </div>

          {/* CTA to close gap */}
          <div className="mt-8 text-center pt-4 border-t border-white/10">
            <button
              onClick={() =>
                selectDonationPlan(
                  currency === 'COP' ? 200000 : 50,
                  currency,
                  'single',
                  'Construcción Auditorio y Nuevos Salones',
                  'Aporte a Obras de Infraestructura'
                )
              }
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#FF6B5E] hover:bg-[#ff5747] active:scale-[0.98] rounded-xl shadow-lg shadow-[#FF6B5E]/30 transition-all"
            >
              <Heart className="w-5 h-5 fill-white/80" />
              <span>Sumar mi aporte a la meta de infraestructura</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
