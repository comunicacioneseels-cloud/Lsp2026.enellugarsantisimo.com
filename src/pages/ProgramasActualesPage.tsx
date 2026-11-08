import React from 'react';
import {
  BookOpen,
  Palette,
  HeartHandshake,
  Users,
  Smile,
  Apple,
  Home,
  Clock,
  Target,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SocialProgram } from '../types';

export const ProgramasActualesPage: React.FC = () => {
  const { programs, setActiveProgramModal, navigateToPage, selectDonationPlan, currency } = useApp();

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return BookOpen;
      case 'Palette':
        return Palette;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'Users':
        return Users;
      case 'Smile':
        return Smile;
      case 'Apple':
        return Apple;
      case 'Home':
        return Home;
      default:
        return Sparkles;
    }
  };

  return (
    <div className="bg-[#F8F6F0] text-[#1E1B2E] min-h-screen">
      
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
            <span className="text-[#35D5C5] font-medium">PROGRAMAS ACTUALES (1 A 7)</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#35D5C5] block mb-2">
              Intervención Integral y Continua
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
              Programas Actuales
            </h1>
            <p className="mt-3 text-base sm:text-lg text-white/80 leading-relaxed">
              Siete programas en ejecución activa que brindan apoyo escolar, desarrollo artístico, 
              salud mental, nutrición y formación espiritual a más de 200 niños y familias en Bocachica.
            </p>
          </div>

        </div>
      </section>

      {/* Main Programs Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((prog: SocialProgram, index: number) => {
            const Icon = getProgramIcon(prog.iconName);
            return (
              <div
                key={prog.id}
                className="bg-white rounded-3xl border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Category and Numbering Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg"
                      style={{
                        color: prog.color,
                        backgroundColor: `${prog.color}15`,
                      }}
                    >
                      {prog.category}
                    </span>
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-xs group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: prog.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xs font-bold text-stone-300 font-mono">0{index + 1}.</span>
                    <h3 className="font-serif text-2xl font-bold text-[#2D2B50] group-hover:text-[#FF6B5E] transition-colors">
                      {prog.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                    {prog.shortDescription}
                  </p>

                  {/* Program Snapshot (Schedule & Beneficiaries) */}
                  <div className="space-y-2 p-3.5 rounded-xl bg-stone-50 border border-stone-100 text-xs text-stone-600 mb-6">
                    <div className="flex items-start gap-2">
                      <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                      <span>{prog.schedule}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                      <span>{prog.beneficiaries}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveProgramModal(prog)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D2B50] hover:text-[#FF6B5E] transition-colors cursor-pointer"
                  >
                    <span>Conoce el programa</span>
                    <ArrowUpRight className="w-4 h-4 text-[#FF6B5E]" />
                  </button>

                  <button
                    onClick={() => {
                      selectDonationPlan(
                        currency === 'COP' ? 80000 : 20,
                        currency,
                        'monthly',
                        prog.title,
                        `Apoyo a ${prog.title}`
                      );
                    }}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-[#FF6B5E] hover:text-white transition-colors cursor-pointer"
                  >
                    Respaldar
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Next Step Banner */}
        <div className="p-8 bg-white rounded-3xl border border-stone-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00E51B]">
              Innovación y Futuro
            </span>
            <h4 className="font-serif text-2xl font-bold text-[#2D2B50] mt-1">
              ¿Quieres conocer los nuevos programas para 2026?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Descubre nuestras iniciativas de formación técnica virtual, cursos de sistemas y emprendimiento comunitario.
            </p>
          </div>
          <button
            onClick={() => navigateToPage('nuevos-programas')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#2D2B50] hover:bg-[#201e38] rounded-xl transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Ver Nuevos Programas 2026</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

    </div>
  );
};
