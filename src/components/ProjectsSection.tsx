import React from 'react';
import { Hammer, CheckCircle2, Clock, Sparkles, Building, Layers } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ProjectStatus, StrategicProject } from '../types';

export const ProjectsSection: React.FC = () => {
  const { projects } = useApp();

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
    <section id="proyectos" className="py-20 lg:py-28 bg-[#FDFBF7] text-[#1E1B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF6B5E] mb-2">
            <Building className="w-4 h-4" />
            <span>Infraestructura y Sostenibilidad</span>
            <span aria-hidden="true">·</span>
            <span>Espacios de Dignidad</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2D2B50] [text-wrap:balance]">
            Proyectos estratégicos en marcha
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Construimos espacios dignos, seguros y polivalentes que albergan nuestras actividades formativas, 
            aseguran agua potable y promueven la autosuficiencia comunitaria.
          </p>
        </div>

        {/* FEATURED SPOTLIGHT: Auditorio y Salones Nuevos with Architectural Blueprint */}
        <div className="mb-16 bg-white rounded-3xl border border-stone-200/90 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Column (7 cols) */}
            <div className="lg:col-span-7 relative bg-stone-100 overflow-hidden border-b lg:border-b-0 lg:border-r border-stone-200">
              <img
                src="/src/assets/images/auditorium_architecture_plan_1794103983290.jpg"
                alt="Plano arquitectónico y render del Auditorio Comunitario y nuevos salones de Lives Saved Project"
                className="w-full h-auto object-cover max-h-[480px]"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="p-4 bg-white/90 backdrop-blur-md border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
                <span className="font-medium">Diseño arquitectónico bioclimático adaptado al Caribe</span>
                <span className="text-stone-400">Capacidad: 300+ personas</span>
              </div>
            </div>

            {/* Info Column (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FF6B5E]">
                  Proyecto Central
                </span>
                <span className="text-stone-300" aria-hidden="true">·</span>
                {getStatusBadge('En ejecución')}
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2B50]">
                Auditorio y salones nuevos
              </h3>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                El corazón de la infraestructura comunitaria en Bocachica: un auditorio abierto para asambleas, 
                cultos y talleres artísticos, complementado con salones modulares para clases presenciales y virtuales 
                con adecuada ventilación e iluminación natural.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-[#35D5C5] shrink-0 mt-0.5" />
                  <span><strong>Fase 1:</strong> Cimientos, zapatas y levantamiento de muros maestros.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                  <span><strong>Fase 2:</strong> Estructura de cubierta, ventilación cruzada y techos térmicos.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-[#00E51B] shrink-0 mt-0.5" />
                  <span><strong>Fase 3:</strong> Acabados, mobiliario escolar, aula digital y sonido.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <a
                  href="#avances"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B5E] hover:text-[#e05448] transition-colors"
                >
                  <span>Ver estado de financiación y necesidades</span>
                  <span>→</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Strategic Projects Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj: StrategicProject) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-stone-200/90 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
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
                  <span className="text-stone-500">Meta proyectada:</span>
                  <span className="font-semibold text-stone-900 tabular-nums">
                    USD ${proj.fundingTargetUSD.toLocaleString()}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
