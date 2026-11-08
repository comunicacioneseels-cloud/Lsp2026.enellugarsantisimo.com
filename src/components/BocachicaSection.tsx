import React from 'react';
import { DollarSign, GraduationCap, HeartPulse, Home, Compass } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const BocachicaSection: React.FC = () => {
  const { language } = useApp();

  const contextAreas = [
    {
      title: 'Economía y oportunidades productivas',
      icon: DollarSign,
      color: '#FF8A00',
      description:
        'La economía local depende principalmente de la pesca artesanal y actividades turísticas de temporada. Existe una urgente necesidad de diversificar las fuentes de ingresos, capacitar a los jóvenes en oficios técnicos y respaldar emprendimientos comunitarios autosostenibles.',
      editableNote: 'Sector prioritario para los nuevos programas de 2026',
    },
    {
      title: 'Educación y formación',
      icon: GraduationCap,
      color: '#35D5C5',
      description:
        'Aunque existen instituciones educativas locales, las brechas en dotación pedagógica, conectividad digital y refuerzo extraescolar dificultan la transición a la educación superior. El acompañamiento escolar diario reduce la deserción y fortalece el rendimiento.',
      editableNote: 'Atención continua a más de 120 alumnos',
    },
    {
      title: 'Nutrición y salud',
      icon: HeartPulse,
      color: '#00E51B',
      description:
        'El acceso continuo a agua potable de calidad y alimentos de alto valor nutricional es uno de los mayores desafíos logísticos insulares. Implementamos filtros de purificación y suministramos refrigerios que aseguran la energía requerida para el aprendizaje.',
      editableNote: 'Filtros comunitarios y suplementación en marcha',
    },
    {
      title: 'Dinámica familiar y comunitaria',
      icon: Home,
      color: '#FF6B5E',
      description:
        'La comunidad de Bocachica posee una admirable riqueza cultural y lazos solidarios entrañables. Sin embargo, las jornadas laborales extensas de los padres exigen espacios seguros donde los niños estén protegidos y formados con amor en sus horas libres.',
      editableNote: 'Escuela de padres quincenal y apoyo domiciliario',
    },
  ];

  return (
    <section id="bocachica" className="py-20 lg:py-28 bg-[#2D2B50] text-white relative overflow-hidden">
      
      {/* Decorative subtle ambient lights */}
      <div 
        className="absolute top-1/2 right-0 w-96 h-96 bg-[#321078] rounded-full blur-[140px] opacity-40 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#35D5C5] mb-2">
            <Compass className="w-4 h-4" />
            <span>Contexto Territorial</span>
            <span aria-hidden="true">·</span>
            <span>Isla de Tierra Bomba</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white [text-wrap:balance]">
            Bocachica: un pueblo en busca de oportunidades
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
            Ubicada en la entrada de la bahía de Cartagena, Bocachica es una comunidad de gran riqueza histórica, 
            talento humano y calidez caribeña. Miramos su realidad con profundo respeto, reconociendo tanto su dignidad 
            como las barreras estructurales que juntos estamos superando.
          </p>
        </div>

        {/* Wide Landscape Photo */}
        <div className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl border border-white/10 group">
          <img
            src="/src/assets/images/bocachica_island_coast_1794103983099.jpg"
            alt="Paisaje costero de la comunidad de Bocachica en la isla de Tierra Bomba, Cartagena"
            className="w-full h-72 sm:h-96 lg:h-[420px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-t from-[#2D2B50]/90 via-transparent to-transparent" 
            aria-hidden="true" 
          />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 text-white">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#35D5C5] font-semibold">Comunidad Insular de Bocachica</p>
              <p className="font-serif text-lg sm:text-xl font-medium">Isla de Tierra Bomba, Cartagena de Indias</p>
            </div>
            <div className="text-xs text-white/70 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
              Presencia y trabajo en campo permanente
            </div>
          </div>
        </div>

        {/* 4 Context Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contextAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/[0.07]"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: area.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-white">
                    {area.title}
                  </h3>
                </div>
                <p className="text-sm text-white/75 leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                  <span>Enfoque operativo:</span>
                  <span className="text-white/80 font-medium">{area.editableNote}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
