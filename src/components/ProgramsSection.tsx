import React from 'react';
import {
  BookOpen,
  Palette,
  HeartHandshake,
  Users,
  Smile,
  Apple,
  Home,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SocialProgram } from '../types';

export const ProgramsSection: React.FC = () => {
  const { programs, setActiveProgramModal } = useApp();

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
    <section id="programas" className="py-20 lg:py-28 bg-[#F8F6F0] text-[#1E1B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF6B5E] mb-2">
              <span>Intervención Integral</span>
              <span aria-hidden="true">·</span>
              <span>7 Programas Activos</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2D2B50] [text-wrap:balance]">
              Programas sociales que transforman realidades
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-600 max-w-md leading-relaxed">
            Cada programa responde a una necesidad identificada en conjunto con las familias de Bocachica, 
            garantizando educación, acompañamiento emocional y bienestar.
          </p>
        </div>

        {/* 7 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program: SocialProgram) => {
            const Icon = getProgramIcon(program.iconName);
            return (
              <div
                key={program.id}
                className="bg-white rounded-2xl border border-stone-200/90 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md"
                      style={{ 
                        color: program.color, 
                        backgroundColor: `${program.color}15` 
                      }}
                    >
                      {program.category}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: program.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-[#2D2B50] mb-2 group-hover:text-[#FF6B5E] transition-colors">
                    {program.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                    {program.shortDescription}
                  </p>
                </div>

                {/* Footer with action */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400 font-sans">
                    {program.beneficiaries.split(' ')[0]} {program.beneficiaries.split(' ')[1] || 'activos'}
                  </span>
                  
                  <button
                    onClick={() => setActiveProgramModal(program)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D2B50] hover:text-[#FF6B5E] transition-colors focus:outline-none"
                    aria-label={`Conoce más sobre ${program.title}`}
                  >
                    <span>Conoce el programa</span>
                    <ArrowUpRight className="w-4 h-4 text-[#FF6B5E]" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
