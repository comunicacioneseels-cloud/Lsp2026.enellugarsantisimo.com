import React from 'react';
import {
  Building,
  Hammer,
  CheckCircle2,
  Clock,
  Layers,
  TrendingUp,
  Calendar,
  AlertCircle,
  Heart,
  ArrowRight,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ProjectStatus, StrategicProject } from '../types';

export const ProyectosPage: React.FC = () => {
  const { projects, financialProgress, navigateToPage, selectDonationPlan, currency, setIsAdminOpen } = useApp();

  const target = financialProgress.targetUSD;
  const raised = financialProgress.raisedUSD;
  const pending = Math.max(0, target - raised);
  const percentage = Math.min(100, Math.round((raised / target) * 100));

  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case 'Finalizado':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#00E51B]/15 text-[#00E51B] border border-[#00E51B]/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Finalizado
          </span>
        );
      case 'En ejecución':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FF8A00]/15 text-[#FF8A00] border border-[#FF8A00]/30">
            <Hammer className="w-3.5 h-3.5" />
            En ejecución
          </span>
        );
      case 'Planeado':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#35D5C5]/15 text-[#35D5C5] border border-[#35D5C5]/30">
            <Clock className="w-3.5 h-3.5" />
            Planeado
          </span>
        );
    }
  };

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
            <span className="text-[#35D5C5] font-medium">PROYECTOS ESTRATÉGICOS</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF6B5E] mb-2">
              <Building className="w-4 h-4" />
              <span>Infraestructura y Sostenibilidad Comunitaria</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
              Proyectos en Marcha
            </h1>
            <p className="mt-3 text-base sm:text-lg text-white/80 leading-relaxed">
              Obras estratégicas para consolidar espacios dignos, seguros y polivalentes de aprendizaje, 
              acceso a agua potable y sostenibilidad económica para las familias de Bocachica.
            </p>
          </div>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FEATURED SPOTLIGHT: Auditorio Comunitario y Salones Nuevos */}
        <div className="mb-16 bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Floorplan Column (7 cols) */}
            <div className="lg:col-span-7 relative bg-stone-100 overflow-hidden border-b lg:border-b-0 lg:border-r border-stone-200">
              <img
                src="/src/assets/images/auditorium_architecture_plan_1794103983290.jpg"
                alt="Plano arquitectónico bioclimático del Auditorio Comunitario de Lives Saved Project"
                className="w-full h-auto object-cover max-h-[500px]"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white/95 backdrop-blur-xs border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
                <span className="font-medium">Diseño arquitectónico bioclimático con ventilación cruzada</span>
                <span className="text-stone-400">Capacidad: 300+ personas</span>
              </div>
            </div>

            {/* Info Column (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B5E]">
                  Proyecto Central
                </span>
                <span className="text-stone-300">·</span>
                {getStatusBadge('En ejecución')}
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2B50]">
                Auditorio y salones nuevos
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Este centro comunitario congregará los actos culturales, escuelas de padres y cultos dominicales, 
                además de albergar las nuevas aulas modulares de refuerzo escolar y las estaciones de computadores virtuales.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-[#35D5C5] shrink-0 mt-0.5" />
                  <span><strong>Fase 1:</strong> Cimientos, muros de carga y vigas de amarre.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                  <span><strong>Fase 2:</strong> Estructura de cubierta, techos térmicos y ventilación.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-[#00E51B] shrink-0 mt-0.5" />
                  <span><strong>Fase 3:</strong> Acabados, mobiliario escolar y aula de cómputo.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <button
                  onClick={() =>
                    selectDonationPlan(
                      currency === 'COP' ? 200000 : 50,
                      currency,
                      'single',
                      'Construcción Auditorio y Nuevos Salones',
                      'Aporte a Infraestructura'
                    )
                  }
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#FF6B5E] hover:bg-[#ff5747] rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white/80" />
                  <span>Aportar a esta obra</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* FINANCIAL PROGRESS & PENDING NEEDS (Avances y necesidades) */}
        <div className="mb-20 bg-[#2D2B50] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#35D5C5]" />
              <span>Última actualización oficial: <strong>{financialProgress.lastUpdated}</strong></span>
            </div>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-[#35D5C5] hover:text-white underline text-xs font-semibold cursor-pointer"
            >
              Editar meta / recaudos (Administración)
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-white/60 block mb-1">
                Meta de Financiación
              </span>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-white tabular-nums">
                USD ${target.toLocaleString()}
              </p>
              <span className="text-xs text-white/40 block mt-1">Cifra base histórica</span>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00E51B] block mb-1">
                Fondos Recaudados
              </span>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-[#00E51B] tabular-nums">
                USD ${raised.toLocaleString()}
              </p>
              <span className="text-xs text-white/40 block mt-1">Aportes ejecutados</span>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B5E] block mb-1">
                Saldo Pendiente
              </span>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-[#FF6B5E] tabular-nums">
                USD ${pending.toLocaleString()}
              </p>
              <span className="text-xs text-white/40 block mt-1">Por recaudar</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
              <span className="text-white/80">Porcentaje de Avance Financiero:</span>
              <span className="text-[#35D5C5] font-serif text-lg font-bold tabular-nums">
                {percentage}%
              </span>
            </div>
            <div className="w-full h-3.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/15">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#35D5C5] via-[#00E51B] to-[#FF6B5E] transition-all duration-1000"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs text-white/80">
            <AlertCircle className="w-4 h-4 text-[#35D5C5] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block">Estado reportado en campo:</span>
              <p className="mt-0.5 text-white/70">{financialProgress.auditoriumPhase}</p>
            </div>
          </div>

        </div>

        {/* ALL 7 STRATEGIC PROJECTS GRID */}
        <div className="mb-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B5E]">
              Catálogo de Obras
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2B50] mt-1">
              Todos los proyectos estratégicos
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Transparencia en el estado y metas de cada iniciativa de desarrollo físico e hídrico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj: StrategicProject) => (
              <div
                key={proj.id}
                className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                      {proj.category}
                    </span>
                    {getStatusBadge(proj.status)}
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[#2D2B50] mb-2">
                    {proj.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {proj.description}
                  </p>
                </div>

                {proj.fundingTargetUSD && (
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-stone-500">Meta estimada:</span>
                    <span className="font-bold text-stone-900 tabular-nums">
                      USD ${proj.fundingTargetUSD.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
};
