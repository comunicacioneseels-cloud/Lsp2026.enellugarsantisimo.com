import React from 'react';
import { ArrowLeft, BookOpen, Users, Apple, HeartHandshake, CheckCircle2, MapPin, Compass, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const IniciativaSocialPage: React.FC = () => {
  const { navigateToPage } = useApp();

  const pillars = [
    {
      name: 'Educación',
      color: '#35D5C5',
      icon: BookOpen,
      desc: 'Nivelación académica, estímulo del pensamiento crítico, habilidades de lectoescritura, matemáticas e idiomas para evitar la deserción escolar temprana.',
    },
    {
      name: 'Familia',
      color: '#FF6B5E',
      icon: Users,
      desc: 'Escuela para padres, pautas de crianza positiva, mediación en el hogar, prevención de violencia intrafamiliar y fortalecimiento de los vínculos afectivos.',
    },
    {
      name: 'Bienestar',
      color: '#00E51B',
      icon: Apple,
      desc: 'Nutrición balanceada diaria, refrigerios proteicos, hábitos higiénicos, acceso a agua purificada y acompañamiento en salud emocional y psicológica.',
    },
    {
      name: 'Fe',
      color: '#321078',
      icon: HeartHandshake,
      desc: 'Formación espiritual en valores y principios cristianos, discipulado y servicio al prójimo que renuevan la esperanza interior y el sentido de vida.',
    },
  ];

  const contextAreas = [
    {
      title: 'Economía y oportunidades productivas',
      color: '#FF8A00',
      description:
        'La economía local depende en su mayoría de la pesca artesanal y actividades turísticas informales. Trabajamos para diversificar las fuentes de ingresos y abrir rutas de formación vocacional para jóvenes y madres.',
    },
    {
      title: 'Educación y formación continua',
      color: '#35D5C5',
      description:
        'Las limitaciones de recursos y material pedagógico en la isla demandan refuerzo continuo. Con tutorías personalizadas cerramos brechas de aprendizaje y preparamos el ingreso a estudios superiores.',
    },
    {
      title: 'Nutrición, agua y salud integral',
      color: '#00E51B',
      description:
        'El abastecimiento de agua potable de calidad y alimentos nutritivos es una prioridad logística insular. Implementamos purificación comunitaria y refrigerios diarios en cada jornada educativa.',
    },
    {
      title: 'Dinámica familiar y comunitaria',
      color: '#FF6B5E',
      description:
        'Bocachica tiene una profunda resiliencia y calidez humana. Creamos entornos seguros que protegen a los niños durante las extensas jornadas laborales de sus padres, educando con ternura y disciplina.',
    },
  ];

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
            <span className="text-[#FF6B5E] font-medium">INICIATIVA SOCIAL</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FF6B5E] block mb-2">
              Sobre Lives Saved Project
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
              Iniciativa Social
            </h1>
            <p className="mt-3 text-base sm:text-lg text-white/80 leading-relaxed">
              Más de 10 años sembrando esperanza, educación y oportunidades reales junto a los niños y familias de Bocachica, Cartagena.
            </p>
          </div>

        </div>
      </section>

      {/* Main Narrative & 4 Pillars */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D2B50]">
              Rompiendo ciclos de pobreza con dignidad y fe
            </h2>

            <div className="prose prose-stone text-base text-stone-700 leading-relaxed space-y-4">
              <p>
                <strong>LIVES SAVED PROJECT</strong> es una iniciativa social impulsada por la{' '}
                <strong>Iglesia En el Lugar Santísimo</strong> con el compromiso irrenunciable de no ser una obra 
                asistencialista temporal, sino una presencia constante y amorosa en la isla de Bocachica.
              </p>
              <p>
                Durante más de una década hemos caminado de la mano de los líderes y madres comunitarias, 
                convencidos de que transformar la vida de un niño exige una respuesta holística: aulas donde aprender, 
                alimentos que nutran su mente, espacios psicosociales donde sanar y una fe que encienda su futuro.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B5E]">Propósito Fundamental:</span>
              <p className="font-serif italic text-base sm:text-lg text-[#2D2B50]">
                «Sembrar emocionalmente, espiritualmente e intelectualmente para que cada niño de Bocachica descubra su vocación y viva con plenitud.»
              </p>
            </div>
          </div>

          {/* Right Community Photo */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100">
              <img
                src="/src/assets/images/community_learning_bocachica_1794103982630.jpg"
                alt="Jornada de aprendizaje comunitario y tutorías en Bocachica"
                className="w-full h-auto object-cover aspect-4/3"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white border-t border-stone-200 text-xs text-stone-600">
                <span className="font-semibold block text-stone-800">Tutorías en comunidad</span>
                <span>Docentes y voluntarios locales impulsando las clases de refuerzo.</span>
              </div>
            </div>
          </div>

        </div>

        {/* The 4 Pillars */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B5E]">Ejes de Acción</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2B50] mt-1">
              Los 4 Pilares de Intervención
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Nuestra metodología integral articula cada aspecto del desarrollo infantil y familiar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.name}
                  className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4"
                      style={{ backgroundColor: p.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-[#2D2B50] mb-2">{p.name}</h4>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-stone-100 mt-4 text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                    Eje Permanente
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Territorial Context Bocachica */}
        <div className="bg-[#1E1B2E] text-white rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#35D5C5] mb-2">
              <Compass className="w-4 h-4" />
              <span>Realidad y Respeto Territorial</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              Bocachica: un pueblo en busca de oportunidades
            </h3>
            <p className="mt-2 text-sm sm:text-base text-white/75 leading-relaxed">
              En la histórica isla de Tierra Bomba, Bocachica representa una comunidad con enorme herencia cultural caribeña, 
              que enfrenta desafíos estructurales de servicios básicos y conectividad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contextAreas.map((ctx) => (
              <div key={ctx.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h5 className="font-serif text-lg font-bold text-white mb-2" style={{ color: ctx.color }}>
                  {ctx.title}
                </h5>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {ctx.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Page Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#2D2B50]">
              Continúa conociendo nuestro trabajo
            </h4>
            <p className="text-xs text-stone-600">
              Explora en detalle los 7 programas formativos que desarrollamos semanalmente.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateToPage('programas-actuales')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#2D2B50] hover:bg-[#201e38] rounded-xl transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Ver Programas Actuales</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => navigateToPage('apoyanos')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#FF6B5E] hover:bg-[#ff5747] rounded-xl transition-all cursor-pointer"
            >
              Dona Ahora
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
