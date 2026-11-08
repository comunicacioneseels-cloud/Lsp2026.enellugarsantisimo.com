import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ArrowRight,
  ArrowUpRight,
  Heart,
} from 'lucide-react';
import { useApp, OFFICIAL_DONATION_URL } from '../context/AppContext';
import { ImageLightbox } from '../components/ImageLightbox';

type PillarType = 'educacion' | 'familia' | 'bienestar' | 'fe';

interface SlideImage {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

export const IniciativaSocialPage: React.FC = () => {
  const { navigateToPage } = useApp();

  // Active pillar selection for the 4 button bars
  const [activePillar, setActivePillar] = useState<PillarType>('educacion');

  // Slider state
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Lightbox modal state
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
    caption: string;
  }>({
    isOpen: false,
    src: '',
    alt: '',
    caption: '',
  });

  const openLightbox = (src: string, alt: string, caption: string) => {
    setLightboxData({
      isOpen: true,
      src,
      alt,
      caption,
    });
  };

  const closeLightbox = () => {
    setLightboxData((prev) => ({ ...prev, isOpen: false }));
  };

  // 1. EJE EDUCACIÓN (4 IMÁGENES)
  const educacionSlides: SlideImage[] = [
    {
      src: '/assets/aistudio/regenerated_image_1794131942857.jpg',
      alt: 'Niños de Bocachica sentados en círculo dibujando y escribiendo en sus cuadernos',
      title: 'Taller de Creatividad y Lectoescritura',
      caption: 'Niños de Bocachica concentrados en sus libretas durante la jornada de refuerzo escolar y expresión artística.',
    },
    {
      src: '/assets/aistudio/20210223_144925_2ca24bc9.jpg',
      alt: 'Grupo de niños compartiendo lápices de colores y trabajando en equipo',
      title: 'Acompañamiento Pedagógico y Trabajo en Equipo',
      caption: 'Sesiones personalizadas de tutoría académica que fomentan la colaboración, la disciplina y el amor por el estudio.',
    },
    {
      src: '/assets/aistudio/regenerated_image_1794131952643.jpg',
      alt: 'Actividad formativa de desarrollo cognitivo y tareas escolares',
      title: 'Refuerzo Escolar y Habilidades Básicas',
      caption: 'Apoyo extracurricular continuo para cerrar las brechas educativas de lectura, escritura y matemáticas en la isla.',
    },
    {
      src: '/assets/aistudio/regenerated_image_1794131957589.jpg',
      alt: 'Niña de Bocachica sonriendo alegremente mientras realiza sus ejercicios escolares',
      title: 'Alegría y Motivación en Cada Clase',
      caption: 'Una sonrisa que refleja esperanza y entusiasmo por aprender cada semana en un espacio seguro y afectivo.',
    },
  ];

  // 2. EJE FAMILIA (4 IMÁGENES DE FAMILIAS)
  const familiaSlides: SlideImage[] = [
    {
      src: '/assets/aistudio/IMG_0111.JPG',
      alt: 'Hermanos en el umbral de su hogar en Bocachica compartiendo juego con afecto y protección',
      title: 'Hermanos y Hogar Seguro',
      caption: 'Espacios afectivos y seguros donde los niños de Bocachica crecen protegidos en el seno de su familia.',
    },
    {
      src: '/assets/aistudio/IMG_0121.JPG',
      alt: 'Madre comunitaria con sus hijos recibiendo mercado familiar y apoyo alimentario en su hogar',
      title: 'Madre con Hijos y Seguridad Alimentaria',
      caption: 'Acompañamiento a madres cabeza de hogar con paquetes de nutrición y fortalecimiento de los lazos familiares.',
    },
    {
      src: '/assets/aistudio/IMG_0125.JPG',
      alt: 'Padre de familia reunido con sus hijos en la mesa del hogar en diálogo y convivencia pacífica',
      title: 'Padre con Hijos en Convivencia Familiar',
      caption: 'Presencia de los padres en el hogar, comunicación amorosa y respaldo emocional para cada miembro de la familia.',
    },
    {
      src: '/assets/aistudio/IMG_1303.jpg',
      alt: 'Madres y jóvenes de Bocachica en taller de repostería con bandejas de galletas horneadas',
      title: 'Taller Comunitario de Repostería Familiar',
      caption: 'Capacitación productiva para mujeres y familias, impulsando el sustento digno y el desarrollo económico.',
    },
  ];

  // 3. EJE BIENESTAR (4 IMÁGENES DE LOS NIÑOS SALTANDO)
  const bienestarSlides: SlideImage[] = [
    {
      src: '/assets/aistudio/IMG_0193.JPG',
      alt: 'Niños de Bocachica saltando con brazos en alto en la terraza al aire libre',
      title: 'Saltos de Alegría y Recreación al Aire Libre',
      caption: 'Jornadas recreativas donde los niños saltan, bailan y expresan plenamente su alegría y energía en un espacio seguro.',
    },
    {
      src: '/assets/aistudio/IMG_0198.JPG',
      alt: 'Niño saltando alto en el centro con entusiasmo y dinamismo en taller recreativo',
      title: 'Dinamismo, Movimiento y Salud Física',
      caption: 'Actividades de expresión corporal y ejercicios físicos que promueven la salud cardiovascular y la autoestima.',
    },
    {
      src: '/assets/aistudio/IMG_0192.JPG',
      alt: 'Niños cantando, bailando y saltando en ronda con alegría en la terraza',
      title: 'Danza, Canto y Bienestar Emocional',
      caption: 'Música y dinámicas grupales que refuerzan el compañerismo, la risa y el bienestar emocional de los niños.',
    },
    {
      src: '/assets/aistudio/image_5938a5fc.png',
      alt: 'Niños saltando juntos con los brazos extendidos hacia el cielo',
      title: 'Celebración y Derecho a Jugar',
      caption: 'Recuperando el derecho fundamental a la infancia, el juego espontáneo y la sonrisa de cada niño en la isla.',
    },
  ];

  // 4. EJE FE (4 IMÁGENES DE LOS NIÑOS ORANDO)
  const feSlides: SlideImage[] = [
    {
      src: '/assets/aistudio/IMG_0211.JPG',
      alt: 'Niños reunidos en círculo orando a Dios con manitas juntas y corazones reverentes',
      title: 'Niños Unidos en Oración Comunitaria',
      caption: 'Tiempos devocionales donde los pequeños aprenden a orar juntos, pedir bendición y agradecer a Dios por sus vidas.',
    },
    {
      src: '/assets/aistudio/IMG_0220.JPG',
      alt: 'Niño con los ojos cerrados en reverencia, fe sincera y profunda devoción',
      title: 'Fe Sincera y Oración Personal',
      caption: 'Inculcando principios y valores cristianos que siembran fe viva, esperanza y amor al prójimo desde temprana edad.',
    },
    {
      src: '/assets/aistudio/20210221_182243.jpg',
      alt: 'Alabanza y adoración con niños cantando e instrumentos musicales en la iglesia',
      title: 'Alabanza y Adoración con Niños',
      caption: 'Expresión musical y canto de los niños en la iglesia local, fortaleciendo su identidad y esperanza en Dios.',
    },
    {
      src: '/assets/aistudio/Inicio_Contruccion_ProyectoBocachicaETP160.jpg',
      alt: 'Comunidad e infancia congregadas frente a la Palabra de Dios en oración constante',
      title: 'Principios Bíblicos y Esperanza para la Comunidad',
      caption: 'Más de 10 años de discipulado y enseñanza de la Palabra que transforma vidas y familias enteras en Bocachica.',
    },
  ];

  // Selector de diapositivas según el pilar activo
  const getActiveSlides = (): SlideImage[] => {
    switch (activePillar) {
      case 'educacion':
        return educacionSlides;
      case 'familia':
        return familiaSlides;
      case 'bienestar':
        return bienestarSlides;
      case 'fe':
        return feSlides;
    }
  };

  const slides = getActiveSlides();
  const currentSlide = slides[currentSlideIndex] || slides[0];

  const handlePillarChange = (pillar: PillarType) => {
    setActivePillar(pillar);
    setCurrentSlideIndex(0);
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-[#181528] text-white min-h-screen">
      
      {/* Lightbox para ampliar cualquier foto a pantalla completa */}
      <ImageLightbox
        isOpen={lightboxData.isOpen}
        onClose={closeLightbox}
        imageSrc={lightboxData.src}
        imageAlt={lightboxData.alt}
        caption={lightboxData.caption}
      />

      {/* Navegación tipo Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex items-center gap-2 text-xs text-white/60">
          <button
            onClick={() => navigateToPage('inicio')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            INICIO
          </button>
          <span>/</span>
          <span className="text-[#00D014] font-semibold">INICIATIVA SOCIAL</span>
        </div>
      </div>

      {/* Contenedor Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* SECCIÓN 1: LIVES SAVED PROJECT + 4 BARRAS + FOTO FRENTE A LAS BARRAS      */}
        {/* ========================================================================= */}
        <section 
          className="bg-[#241F3C] rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
          aria-label="Presentación de Lives Saved Project"
        >
          {/* Resplandor ambiental de fondo */}
          <div 
            className="absolute top-0 right-1/4 w-96 h-96 bg-[#00D014]/10 rounded-full blur-[140px] pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Columna Izquierda: Texto tipográfico independiente y 4 Barras de Colores (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              
              {/* Título en verde brillante */}
              <h1 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#00D014] leading-[1.05]">
                LIVES SAVED<br />
                PROJECT
              </h1>

              {/* Párrafo explicativo con palabras clave independientes */}
              <p className="text-white text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Es una <strong className="font-bold text-white">iniciativa social</strong> de la Iglesia En El Lugar Santísimo. Desde hace más de 10 años trabaja en Bocachica <strong className="font-bold text-white">brindando programas semanales para decenas de familias</strong>. Su misión es <strong className="font-bold text-white">romper ciclos de pobreza</strong> mediante:
              </p>

              {/* Las 4 Barras de Colores con Iconos Independientes como Imágenes */}
              <div className="flex flex-col gap-3.5 pt-2 max-w-md">
                
                {/* 1. EDUCACIÓN - Barra verde #00D014 */}
                <button
                  type="button"
                  onClick={() => handlePillarChange('educacion')}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-full text-white font-black tracking-wider uppercase text-base sm:text-lg transition-all duration-200 cursor-pointer shadow-md ${
                    activePillar === 'educacion'
                      ? 'ring-4 ring-white/50 scale-[1.02] shadow-lg shadow-[#00D014]/40'
                      : 'hover:brightness-110 active:scale-[0.99] opacity-95'
                  }`}
                  style={{ backgroundColor: '#00D014' }}
                  aria-pressed={activePillar === 'educacion'}
                >
                  <span className="drop-shadow-xs">EDUCACIÓN</span>
                  
                  {/* Icono independiente como imagen SVG */}
                  <img
                    src="/assets/icons/icono_barra_educacion.svg"
                    alt="Icono Educación"
                    className="w-10 h-10 shrink-0 drop-shadow-sm"
                  />
                </button>

                {/* 2. FAMILIA - Barra morada #7000FF */}
                <button
                  type="button"
                  onClick={() => handlePillarChange('familia')}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-full text-white font-black tracking-wider uppercase text-base sm:text-lg transition-all duration-200 cursor-pointer shadow-md ${
                    activePillar === 'familia'
                      ? 'ring-4 ring-white/50 scale-[1.02] shadow-lg shadow-[#7000FF]/40'
                      : 'hover:brightness-110 active:scale-[0.99] opacity-95'
                  }`}
                  style={{ backgroundColor: '#7000FF' }}
                  aria-pressed={activePillar === 'familia'}
                >
                  <span className="drop-shadow-xs">FAMILIA</span>
                  
                  {/* Icono independiente como imagen SVG */}
                  <img
                    src="/assets/icons/icono_barra_familia.svg"
                    alt="Icono Familia"
                    className="w-10 h-10 shrink-0 drop-shadow-sm"
                  />
                </button>

                {/* 3. BIENESTAR - Barra naranja #FF5A00 */}
                <button
                  type="button"
                  onClick={() => handlePillarChange('bienestar')}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-full text-white font-black tracking-wider uppercase text-base sm:text-lg transition-all duration-200 cursor-pointer shadow-md ${
                    activePillar === 'bienestar'
                      ? 'ring-4 ring-white/50 scale-[1.02] shadow-lg shadow-[#FF5A00]/40'
                      : 'hover:brightness-110 active:scale-[0.99] opacity-95'
                  }`}
                  style={{ backgroundColor: '#FF5A00' }}
                  aria-pressed={activePillar === 'bienestar'}
                >
                  <span className="drop-shadow-xs">BIENESTAR</span>
                  
                  {/* Icono independiente como imagen SVG */}
                  <img
                    src="/assets/icons/icono_barra_bienestar.svg"
                    alt="Icono Bienestar"
                    className="w-10 h-10 shrink-0 drop-shadow-sm"
                  />
                </button>

                {/* 4. FE - Barra blanca #FFFFFF */}
                <button
                  type="button"
                  onClick={() => handlePillarChange('fe')}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-full text-[#241F3C] font-black tracking-wider uppercase text-base sm:text-lg transition-all duration-200 cursor-pointer shadow-md ${
                    activePillar === 'fe'
                      ? 'ring-4 ring-[#00D014] scale-[1.02] shadow-lg shadow-white/30'
                      : 'hover:bg-stone-100 active:scale-[0.99]'
                  }`}
                  style={{ backgroundColor: '#FFFFFF' }}
                  aria-pressed={activePillar === 'fe'}
                >
                  <span>FE</span>
                  
                  {/* Icono independiente como imagen SVG */}
                  <img
                    src="/assets/icons/icono_barra_fe.svg"
                    alt="Icono Fe"
                    className="w-10 h-10 shrink-0 drop-shadow-sm"
                  />
                </button>

              </div>

            </div>

            {/* Columna Derecha: Imagen Maqueta 20 ubicada al frente de las barras (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-4/5 max-h-[580px] w-full bg-stone-900">
                <img
                  src="/assets/aistudio/mujeres_cocina_bocachica.png"
                  alt="Madres comunitarias de Bocachica sonrientes preparando alimentos en la cocina comunitaria (Maqueta 20)"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Degradado para dar profundidad visual */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" 
                  aria-hidden="true"
                />

                {/* Botón de ampliar foto */}
                <button
                  type="button"
                  onClick={() =>
                    openLightbox(
                      '/assets/aistudio/mujeres_cocina_bocachica.png',
                      'Madres comunitarias de Bocachica (Maqueta 20)',
                      'Madres y líderes comunitarias de Bocachica preparando alimentos con alegría y vocación de servicio para los niños en el programa de nutrición y bienestar.'
                    )
                  }
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/80 hover:bg-black text-white text-xs font-semibold rounded-md backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg active:scale-95"
                  aria-label="Ampliar fotografía de las madres comunitarias"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#00D014]" />
                  <span>Ampliar foto</span>
                </button>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* SLIDER INDEPENDIENTE: 4 IMÁGENES PARA CADA UNO DE LOS 4 BOTONES           */}
          {/* ========================================================================= */}
          <div className="mt-12 pt-10 border-t border-white/15">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00D014] mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#00D014] animate-pulse" />
                  <span>Galería Activa del Eje:</span>
                  <span className="text-white uppercase font-black">{activePillar}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                  {activePillar === 'educacion' && 'Registro Fotográfico: Refuerzo Escolar y Tutorías (4 Fotos)'}
                  {activePillar === 'familia' && 'Registro Fotográfico: Familias y Hogares de Bocachica (4 Fotos)'}
                  {activePillar === 'bienestar' && 'Registro Fotográfico: Recreación y Niños Saltando de Alegría (4 Fotos)'}
                  {activePillar === 'fe' && 'Registro Fotográfico: Niños en Oración y Fe Comunitaria (4 Fotos)'}
                </h3>
              </div>

              {/* Controles de Navegación del Slider */}
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <span className="text-xs text-white/70 font-mono">
                  {currentSlideIndex + 1} / {slides.length}
                </span>
                
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer disabled:opacity-30"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer disabled:opacity-30"
                    aria-label="Siguiente foto"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Escenario Principal del Slider */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Fotografía Destacada con Botón de Zoom (8 cols) */}
              <div className="lg:col-span-8">
                <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-white/15 aspect-16/10 sm:aspect-16/9 shadow-xl group">
                  <img
                    src={currentSlide.src}
                    alt={currentSlide.alt}
                    className="w-full h-full object-cover object-center transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Degradado para texto superpuesto */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" 
                    aria-hidden="true" 
                  />

                  {/* Texto de la diapositiva */}
                  <div className="absolute bottom-4 left-4 right-16 text-white z-10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00D014] block mb-0.5">
                      EJE {activePillar.toUpperCase()} · FOTOGRAFÍA {currentSlideIndex + 1} DE 4
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-white drop-shadow-md">
                      {currentSlide.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/85 line-clamp-2 mt-0.5 drop-shadow-xs">
                      {currentSlide.caption}
                    </p>
                  </div>

                  {/* Botón de ampliar en la diapositiva */}
                  <button
                    type="button"
                    onClick={() => openLightbox(currentSlide.src, currentSlide.alt, currentSlide.caption)}
                    className="absolute bottom-4 right-4 p-2 bg-black/80 hover:bg-black text-white rounded-lg border border-white/20 transition-transform active:scale-90 cursor-pointer shadow-lg z-20"
                    aria-label="Ampliar fotografía a pantalla completa"
                  >
                    <Maximize2 className="w-4 h-4 text-[#00D014]" />
                  </button>
                </div>
              </div>

              {/* Panel Lateral: Miniaturas Interactivas y Llamada a Donar (4 cols) */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
                
                {/* Cuadro informativo según el pilar seleccionado */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#00D014] block">
                    {activePillar === 'educacion' && '4 Fotos de Educación'}
                    {activePillar === 'familia' && '4 Fotos de Familias'}
                    {activePillar === 'bienestar' && '4 Fotos de Niños Saltando'}
                    {activePillar === 'fe' && '4 Fotos de Niños Orando'}
                  </span>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {activePillar === 'educacion' && 'Refuerzo escolar semanal, tutorías de lectura, matemáticas y materiales pedagógicos continuos en Bocachica.'}
                    {activePillar === 'familia' && 'Hermanos protegidos en el hogar, madres recibiendo mercado familiar, padres presentes a la mesa y talleres comunitarios.'}
                    {activePillar === 'bienestar' && 'Niños saltando y bailando con brazos en alto, dinámicas recreativas y espacios seguros de alegría y salud física.'}
                    {activePillar === 'fe' && 'Niños en oración comunitaria, devoción sincera con manitas juntas, alabanza con música e instrucción en la Palabra.'}
                  </p>
                </div>

                {/* 4 Miniaturas de selección directa */}
                <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-2 gap-2.5">
                  {slides.map((slide, idx) => (
                    <button
                      key={slide.src + idx}
                      type="button"
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`relative aspect-4/3 rounded-xl overflow-hidden border-2 transition-all cursor-pointer group ${
                        currentSlideIndex === idx
                          ? 'border-[#00D014] ring-2 ring-[#00D014]/40 scale-102'
                          : 'border-white/20 hover:border-white/50 opacity-70 hover:opacity-100'
                      }`}
                      aria-label={`Ver foto ${idx + 1}: ${slide.title}`}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-black/70 text-white">
                        {idx + 1}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Botón directo a la donación oficial */}
                <div className="pt-2">
                  <a
                    href={OFFICIAL_DONATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#00D014] hover:bg-[#00ba12] active:scale-[0.98] rounded-xl transition-all shadow-md shadow-[#00D014]/30 cursor-pointer"
                  >
                    <span>Apoyar este eje de acción</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ========================================================================= */}
        {/* SECCIÓN 2: BOCACHICA: UN PUEBLO EN BUSCA DE OPORTUNIDADES                 */}
        {/* CON ICONOS BLANCOS COMO IMÁGENES INDEPENDIENTES Y FOTO DEBAJO O AL FRENTE */}
        {/* ========================================================================= */}
        <section 
          className="bg-[#241F3C] rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
          aria-label="Contexto de Bocachica: Un pueblo en busca de oportunidades"
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Columna Izquierda: Encabezado contextual y cuadrícula 2x2 (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              
              {/* Título en verde + blanco y resumen poblacional */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                
                <div className="md:col-span-7">
                  <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight leading-[1.1]">
                    <span className="text-[#00D014] block">BOCACHICA:</span>
                    <span className="text-white block">UN PUEBLO EN BUSCA DE OPORTUNIDADES</span>
                  </h2>
                </div>

                <div className="md:col-span-5 md:pl-2">
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                    Con aproximadamente <strong className="text-white font-bold">8.000 habitantes</strong>, Bocachica enfrenta desafíos estructurales que limitan el desarrollo integral de sus niños y jóvenes.
                  </p>
                </div>

              </div>

              {/* Línea divisoria */}
              <div className="w-full h-px bg-white/15 my-2" aria-hidden="true" />

              {/* Cuadrícula 2x2 con los 4 iconos blancos independientes como imágenes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-2">
                
                {/* 1. Economía */}
                <div className="flex items-start gap-4">
                  {/* Icono blanco como imagen independiente */}
                  <img
                    src="/assets/icons/icono_economia.svg"
                    alt="Icono Economía"
                    className="w-12 h-12 shrink-0 drop-shadow-md"
                  />
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-base">Economía</h3>
                    <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed">
                      En esta comunidad, más del <strong className="text-white font-bold">85% de las familias</strong> viven en <strong className="text-white font-bold">condiciones de pobreza</strong>, y más de la mitad de los adultos no tiene empleo. Cerca del <strong className="text-white font-bold">75% trabaja en la informalidad</strong>, con ingresos inestables que dependen del <strong className="text-white font-bold">turismo y de actividades</strong> básicas, lo que limita las oportunidades de desarrollo.
                    </p>
                  </div>
                </div>

                {/* 2. Educación */}
                <div className="flex items-start gap-4">
                  {/* Icono blanco como imagen independiente */}
                  <img
                    src="/assets/icons/icono_educacion.svg"
                    alt="Icono Educación"
                    className="w-12 h-12 shrink-0 drop-shadow-md"
                  />
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-base">Educación</h3>
                    <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed">
                      En la isla hay <strong className="text-white font-bold">altos niveles de rezago escolar</strong> en lectura, matemáticas y habilidades básicas, agravados por la <strong className="text-white font-bold">falta de acompañamiento en casa</strong>. Muchos hogares no cuentan con computador ni buena conectividad, lo que dificulta el aprendizaje. Las brechas dejadas por la pandemia aún siguen presentes y requieren apoyo constante para superarse.
                    </p>
                  </div>
                </div>

                {/* 3. Nutrición y Salud */}
                <div className="flex items-start gap-4">
                  {/* Icono blanco como imagen independiente */}
                  <img
                    src="/assets/icons/icono_salud.svg"
                    alt="Icono Nutrición y Salud"
                    className="w-12 h-12 shrink-0 drop-shadow-md"
                  />
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-base">Nutrición y Salud</h3>
                    <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed">
                      Se presentan casos de desnutrición moderada y severa que <strong className="text-white font-bold">afectan</strong> tanto el crecimiento como las <strong className="text-white font-bold">capacidades cognitivas</strong> de niñas y niños. La escasez de agua potable aumenta los malestares gastrointestinales y profundiza el deterioro general de la salud. A esto se suman los <strong className="text-white font-bold">bajos ingresos</strong> familiares, que <strong className="text-white font-bold">limitan la posibilidad</strong> de ofrecer alimentos suficientes y nutritivos.
                    </p>
                  </div>
                </div>

                {/* 4. Dinámica Familiar */}
                <div className="flex items-start gap-4">
                  {/* Icono blanco como imagen independiente */}
                  <img
                    src="/assets/icons/icono_familia.svg"
                    alt="Icono Dinámica Familiar"
                    className="w-12 h-12 shrink-0 drop-shadow-md"
                  />
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-base">Dinámica Familiar</h3>
                    <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed">
                      Bocachica enfrenta retos profundos que afectan la vida diaria de muchas familias. El <strong className="text-white font-bold">alto índice de conflictos</strong> en el hogar, la falta de figuras de apoyo y las presiones económicas crean entornos <strong className="text-white font-bold">frágiles</strong> para niños y jóvenes. Muchos <strong className="text-white font-bold">crecen sin un espacio</strong> seguro ni una guía estable que les permita desarrollarse con tranquilidad.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Columna Derecha: Imagen al frente o debajo de Bocachica (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-4/5 max-h-[580px] w-full bg-stone-900">
                <img
                  src="/assets/aistudio/image_5938a5fc.png"
                  alt="Niños de Bocachica con los brazos en alto bailando y participando en dinámicas de recreación comunitaria"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Degradado para dar profundidad visual */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Botón de ampliar foto */}
                <button
                  type="button"
                  onClick={() =>
                    openLightbox(
                      '/assets/aistudio/image_5938a5fc.png',
                      'Niños de Bocachica en danza y recreación',
                      'Niños y niñas de Bocachica participando con energía y entusiasmo en las jornadas de expresión corporal y recreación comunitaria.'
                    )
                  }
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/80 hover:bg-black text-white text-xs font-semibold rounded-md backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg active:scale-95"
                  aria-label="Ampliar fotografía de los niños en actividades recreativas"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#00D014]" />
                  <span>Ampliar foto</span>
                </button>
              </div>
            </div>

          </div>

        </section>


        {/* ========================================================================= */}
        {/* BOTÓN Y REDIRECCIÓN DIRECTA A LA PLATAFORMA DE DONACIÓN OFICIAL           */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-br from-[#241F3C] via-[#2A2347] to-[#1E1B2E] rounded-3xl p-8 sm:p-12 border border-white/15 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B5E] block">
              Tu aporte transforma vidas
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Sé parte activa de la transformación en Bocachica
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Cada programa se sostiene gracias al amor y compromiso de donantes y padrinos que creen en el futuro de los niños.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            {/* Redirección directa al portal de donación */}
            <a
              href={OFFICIAL_DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-[#FF6B5E] hover:bg-[#ff5747] active:scale-[0.98] rounded-xl shadow-lg shadow-[#FF6B5E]/30 transition-all cursor-pointer"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span>DONA AHORA</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => navigateToPage('programas-actuales')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all cursor-pointer"
            >
              <span>Ver Programas (1 al 7)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </main>

    </div>
  );
};
