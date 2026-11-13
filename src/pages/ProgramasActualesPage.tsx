import React from 'react';
import {
  ArrowRight,
  ExternalLink,
  Heart,
  Images,
  Sparkles,
} from 'lucide-react';
import { useApp, OFFICIAL_DONATION_URL } from '../context/AppContext';
import { SocialProgram } from '../types';

export const ProgramasActualesPage: React.FC = () => {
  const { programs, setActiveProgramModal, navigateToPage } = useApp();

  return (
    <div className="bg-[#181528] text-white min-h-screen">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex items-center gap-2 text-xs text-white/60">
          <button
            onClick={() => navigateToPage('inicio')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            INICIO
          </button>
          <span>/</span>
          <span className="text-white/40">PROGRAMAS</span>
          <span>/</span>
          <span className="text-[#00D014] font-semibold">PROGRAMAS ACTUALES (1 A 7)</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-12">
        
        {/* ========================================================================= */}
        {/* HEADER HERO SEGÚN LA MAQUETA 1 (LIVES SAVED PROJECT - UNA ALTERNATIVA)    */}
        {/* ========================================================================= */}
        <section
          className="bg-[#241F3C] rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
          aria-label="Presentación de Programas Actuales"
        >
          {/* Resplandor ambiental de fondo */}
          <div
            className="absolute top-0 right-1/4 w-96 h-96 bg-[#00D014]/10 rounded-full blur-[140px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Texto y Titulares de la Maqueta 1 */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#00D014]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>7 PROGRAMAS ACTIVOS EN BOCACHICA</span>
              </div>

              <div>
                <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#00D014] leading-tight">
                  LIVES SAVED PROJECT
                </h2>
                <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none mt-1">
                  UNA ALTERNATIVA
                </h1>
              </div>

              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
                Priorizamos el desarrollo de programas centrados en un{' '}
                <strong className="font-bold text-white">ecosistema sano para los niños y jóvenes involucrando a su familia</strong>{' '}
                de manera integral, respondiendo a las necesidades más urgentes identificadas en la comunidad.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <span className="text-xs text-white/60 font-medium">
                  Toca cualquier cuadro de color para abrir su pop-up con 4 fotografías:
                </span>
              </div>
            </div>

            {/* Imagen de la Maqueta 1: Niña sonriente con señal de paz */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 aspect-4/3 sm:aspect-16/11 bg-stone-900 group">
                <img
                  src="/assets/aistudio/nina_refuerzo_paz.png"
                  alt="Niña de Bocachica sonriendo con la señal de la paz en jornada formativa (Maqueta 1)"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#00D014] block">
                    Bocachica, Isla de Tierra Bomba
                  </span>
                  <p className="text-xs text-white/90 font-medium drop-shadow-sm">
                    Educación y esperanza viva para la niñez insular
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* GRILLA DE 7 CUADROS DE COLORES COMO BOTONES INTERACTIVOS (POP-UP CON 4 FOTOS) */}
        {/* ========================================================================= */}
        <section aria-label="Programas 1 a 7 de Lives Saved Project">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
              Programas de Atención Integral
            </h2>
            <p className="text-xs sm:text-sm text-white/70 mt-2">
              Haz clic en cualquiera de los 7 botones de colores para abrir su ventana emergente (pop-up) interactiva con sus <strong className="text-white">4 fotografías oficiales</strong>, contenidos y detalles de impacto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {programs.map((prog: SocialProgram) => {
              const isFullWidth = prog.orderNumber === 7;
              
              return (
                <button
                  key={prog.id}
                  type="button"
                  onClick={() => setActiveProgramModal(prog)}
                  className={`text-left p-7 sm:p-9 rounded-3xl transition-all duration-300 cursor-pointer shadow-xl relative overflow-hidden group flex flex-col justify-between border border-white/10 hover:scale-[1.015] active:scale-[0.99] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/40 ${
                    isFullWidth ? 'md:col-span-2' : ''
                  }`}
                  style={{ backgroundColor: prog.color }}
                  aria-haspopup="dialog"
                  aria-label={`Abrir pop-up con ${prog.images?.length || 0} fotos de ${prog.title}`}
                >
                  {/* Patrón de brillo superior en hover */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none" />

                  <div>
                    {/* Número en círculo blanco según la maqueta */}
                    <div className="flex items-center justify-between mb-5 sm:mb-7">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-md">
                        {prog.orderNumber}
                      </div>

                      {/* Badge indicador de pop-up con fotos */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 text-white text-[11px] font-bold backdrop-blur-xs border border-white/20">
                        <Images className="w-3.5 h-3.5" />
                        <span>Ver {prog.images?.length || 0} Fotos</span>
                      </span>
                    </div>

                    {/* Título en blanco según la maqueta */}
                    <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-4">
                      {prog.title}
                    </h3>

                    {/* Puntos / Viñetas según la maqueta */}
                    {prog.bulletPoints && prog.bulletPoints.length > 0 && (
                      <ul className={`space-y-2.5 text-white text-xs sm:text-sm font-medium leading-relaxed ${
                        isFullWidth ? 'sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0' : ''
                      }`}>
                        {prog.bulletPoints.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-white shrink-0 mt-1.5 opacity-90" />
                            <span className="drop-shadow-xs">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Barra inferior del botón */}
                  <div className="pt-6 mt-6 border-t border-white/20 flex items-center justify-between text-white text-xs font-semibold opacity-90">
                    <span>
                      Toca para abrir galería y detalles
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                      <span>Ver Fotos</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>

                </button>
              );
            })}

          </div>
        </section>

        {/* ========================================================================= */}
        {/* MOSAICO FOTOGRÁFICO INFERIOR SEGÚN LA MAQUETA 2 (MAQUETA 2 BOTTOM COLLAGE)*/}
        {/* ========================================================================= */}
        <section
          className="bg-[#241F3C] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          aria-label="Mosaico fotográfico de impacto en Bocachica"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00D014] block mb-1">
                Registro en Territorio
              </span>
              <h3 className="font-sans font-black text-xl sm:text-3xl text-white">
                El Impacto Real de los 7 Programas
              </h3>
            </div>
            <a
              href={OFFICIAL_DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00D014] hover:bg-[#00b512] text-white text-xs sm:text-sm font-bold shadow-lg transition-transform active:scale-95 cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Apoyar los programas</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mosaico de 4 imágenes correspondientes a la maqueta 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Foto Izquierda: Tutora con libreta y niña estudiando */}
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden bg-stone-900 border border-white/10 aspect-4/3 md:aspect-auto md:min-h-[380px] group shadow-lg">
              <img
                src="/assets/aistudio/tutora_refuerzo_escolar.jpg"
                alt="Tutora voluntaria acompañando a una niña en sus libretas y refuerzo escolar (Maqueta 2)"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFA000] block">
                  Refuerzo Académico
                </span>
                <p className="text-xs font-semibold text-white/95">
                  Tutoría escolar personalizada y disciplina de estudio
                </p>
              </div>
            </div>

            {/* Columna Derecha: Cuadrícula con 3 fotos */}
            <div className="md:col-span-7 flex flex-col gap-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Foto Medio-Superior: Distribución de refrigerios nutritivos a los niños */}
                <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-white/10 aspect-4/3 group shadow-lg">
                  <img
                    src="/assets/aistudio/IMG_0240_09d89d1d.JPG"
                    alt="Voluntaria sirviendo refrigerios nutritivos con huevo a niños y niñas de Bocachica"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C800D8] block">
                      Nutrición e Higiene
                    </span>
                    <p className="text-[11px] font-semibold text-white/95">
                      Refrigerios nutritivos y cuidado infantil
                    </p>
                  </div>
                </div>

                {/* Foto Derecha-Superior: Círculo de diálogo en Escuela de Padres */}
                <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-white/10 aspect-4/3 group shadow-lg">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-11-04_at_6.04.38_PM_ef46fb7c.jpeg"
                    alt="Madres y cuidadores de Bocachica en círculo de diálogo de la Escuela de Padres"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00D014] block">
                      Escuela de Padres
                    </span>
                    <p className="text-[11px] font-semibold text-white/95">
                      Crianza respetuosa y hogares afectuosos
                    </p>
                  </div>
                </div>

              </div>

              {/* Foto Inferior Ancha: Expresión corporal, danza y alegría en la terraza */}
              <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-white/10 aspect-16/9 sm:aspect-21/9 group shadow-lg">
                <img
                  src="/assets/aistudio/IMG_0193_8a3f56aa.JPG"
                  alt="Niños y niñas de Bocachica saltando con alegría en actividad artística y recreativa frente al mar"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00CDBE] block">
                    Artes y Creatividad · Recreación
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white/95">
                    Jornadas de expresión corporal, alegría y bienestar integral frente a la bahía de Bocachica
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* BANNER ENLACE A NUEVOS PROGRAMAS 2026                                     */}
        {/* ========================================================================= */}
        <div className="p-8 bg-[#241F3C] rounded-3xl border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00D014]">
              Innovación y Futuro
            </span>
            <h4 className="font-sans font-black text-2xl text-white mt-1">
              ¿Quieres conocer los nuevos programas para 2026?
            </h4>
            <p className="text-xs sm:text-sm text-white/80 mt-1 leading-relaxed">
              Descubre nuestras iniciativas proyectadas de formación técnica virtual, cursos de sistemas, inglés aplicado y emprendimiento comunitario en la isla.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigateToPage('nuevos-programas')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-[#181528] bg-[#00D014] hover:bg-[#00b512] rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-lg active:scale-95"
          >
            <span>Ver Nuevos Programas 2026</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </main>

    </div>
  );
};
