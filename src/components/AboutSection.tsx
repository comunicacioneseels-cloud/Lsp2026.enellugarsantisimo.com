import React from 'react';
import { BookOpen, Users, Apple, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AboutSection: React.FC = () => {
  const { language } = useApp();

  const pillars = [
    {
      name: 'Educación',
      color: '#35D5C5',
      icon: BookOpen,
      desc: 'Nivelación académica, estímulo del pensamiento crítico, habilidades de lectoescritura e idiomas para evitar la deserción escolar.',
    },
    {
      name: 'Familia',
      color: '#FF6B5E',
      icon: Users,
      desc: 'Escuela para padres, pautas de crianza positiva, mediación en el hogar y fortalecimiento de los vínculos afectivos.',
    },
    {
      name: 'Bienestar',
      color: '#00E51B',
      icon: Apple,
      desc: 'Nutrición balanceada diaria, hábitos higiénicos, acceso a agua potable y acompañamiento en salud emocional y psicológica.',
    },
    {
      name: 'Fe',
      color: '#321078',
      icon: HeartHandshake,
      desc: 'Formación espiritual en valores cristianos, discipulado y servicio al prójimo que renuevan la esperanza interior.',
    },
  ];

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-[#FDFBF7] text-[#1E1B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with quiet unboxed metadata */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF6B5E] mb-2">
            <span>Iniciativa Social</span>
            <span aria-hidden="true">·</span>
            <span>Iglesia En el Lugar Santísimo</span>
            <span aria-hidden="true">·</span>
            <span>Más de 10 Años de Trayectoria</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2D2B50] [text-wrap:balance]">
            LIVES SAVED PROJECT
          </h2>
          <p className="mt-3 text-lg text-stone-600 max-w-3xl leading-relaxed">
            Una misión permanente para romper ciclos de pobreza, restaurar el núcleo familiar y construir oportunidades sostenibles con amor y dignidad.
          </p>
        </div>

        {/* Split Grid: Narrative & Pillars (Left) vs Community Photo (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Narrative & 4 Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-stone text-base leading-relaxed text-stone-700 space-y-4">
              <p>
                <strong>LIVES SAVED PROJECT</strong> nació hace más de una década en el corazón de la 
                <strong> Iglesia En el Lugar Santísimo</strong> con un propósito claro: no conformarse con 
                asistencialismo temporal, sino sembrar raíces profundas en la vida de los niños, jóvenes 
                y familias de <strong>Bocachica</strong>, en la isla de Tierra Bomba.
              </p>
              <p>
                Entendemos que la verdadera transformación no se logra de manera aislada. Para que un niño 
                alcance su potencial educativo, necesita un entorno familiar estable, una nutrición que sostenga 
                su concentración, salud emocional para sanar heridas y una fe viva que le recuerde que su 
                vida tiene un propósito invaluable.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.name}
                    className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                        style={{ backgroundColor: pillar.color }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-[#2D2B50]">
                        {pillar.name}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Core commitments */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 text-xs sm:text-sm text-stone-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E51B] shrink-0" />
                <span>Intervención integral y continua</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E51B] shrink-0" />
                <span>Transparencia en el uso de cada recurso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E51B] shrink-0" />
                <span>Docentes y líderes de la misma comunidad</span>
              </div>
            </div>

          </div>

          {/* Right: Authentic Community Photo (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100">
              
              <img
                src="/src/assets/images/community_learning_bocachica_1794103982630.jpg"
                alt="Jornada de refuerzo escolar y acompañamiento comunitario en Bocachica"
                className="w-full h-auto object-cover aspect-4/3 transition-transform duration-500 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Editorial Caption at bottom */}
              <div className="p-5 bg-white border-t border-stone-200">
                <p className="text-xs font-serif italic text-stone-600">
                  «Sembrando educación con dedicación diaria: niños y tutores en las aulas de refuerzo de Bocachica.»
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-stone-400 font-sans">
                  <span>Comunidad de Bocachica</span>
                  <span>Iglesia En el Lugar Santísimo</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
