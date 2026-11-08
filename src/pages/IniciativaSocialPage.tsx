import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ArrowRight,
  ArrowUpRight,
  Heart,
  GraduationCap,
  Users,
  Sparkles,
  Church,
  Coins,
  Activity,
  Home,
  CheckCircle2,
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
  const { navigateToPage, openDonationPortal } = useApp();

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

  // 4 Photos for Educación provided by user
  const educacionSlides: SlideImage[] = [
    {
      src: '/assets/aistudio/20210223_144923_13710feb.jpg',
      alt: 'Niños de Bocachica sentados en círculo dibujando y escribiendo en sus cuadernos',
      title: 'Taller de creatividad y lectoescritura',
      caption: 'Niños de Bocachica concentrados en sus libretas durante la jornada de refuerzo escolar y expresión artística.',
    },
    {
      src: '/assets/aistudio/20210223_144925_2ca24bc9.jpg',
      alt: 'Grupo de niños compartiendo lápices de colores y trabajando en equipo',
      title: 'Acompañamiento pedagógico y trabajo en equipo',
      caption: 'Sesiones personalizadas de tutoría académica que fomentan la colaboración, la disciplina y el amor por el estudio.',
    },
    {
      src: '/assets/aistudio/20210223_144830_b9dda026.jpg',
      alt: 'Actividad formativa de desarrollo cognitivo y tareas escolares',
      title: 'Refuerzo escolar y habilidades básicas',
      caption: 'Apoyo extracurricular continuo para cerrar las brechas educativas de lectura, escritura y matemáticas en la isla.',
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-01-14_at_10.25.30_AM__2__70da4a9c.jpeg',
      alt: 'Niña de Bocachica sonriendo alegremente mientras realiza sus ejercicios escolares',
      title: 'Alegría y motivación en cada clase',
      caption: 'Una sonrisa que refleja esperanza y entusiasmo por aprender cada semana en un espacio seguro y afectivo.',
    },
  ];

  // Representative slides for the other 3 pillars (ready for upcoming photos from user)
  const familiaSlides: SlideImage[] = [
    {
      src: '/assets/aistudio/mujeres_cocina_bocachica.png',
      alt: 'Madres y familias de Bocachica colaborando unidas',
      title: 'Fortalecimiento de vínculos familiares',
      caption: 'Acompañamiento integral a madres comunitarias y familias para fortalecer la crianza positiva y los hogares seguros.',
    },
  ];

  const bienestarSlides: SlideImage[] = [
    {
      src: '/assets/aistudio/image_5938a5fc.png',
      alt: 'Recreación, bienestar y dinamismo para niños en Bocachica',
      title: 'Nutrición, salud y esparcimiento saludable',
      caption: 'Refrigerios nutritivos, agua potable purificada y actividades físicas que garantizan el bienestar integral infantil.',
    },
  ];

  const feSlides: SlideImage[] = [
    {
      src: '/assets/aistudio/MAQUETA_Lsp_website_-_Espa_ol_3933623a.png',
      alt: 'Niño con mirada llena de fe, esperanza y futuro',
      title: 'Valores, principios y esperanza espiritual',
      caption: 'Formación en principios de fe, servicio al prójimo y amor cristiano impartidos por la Iglesia En El Lugar Santísimo.',
    },
  ];

  // Get active slides based on selected pillar
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
      
      {/* Lightbox for full-resolution inspection */}
      <ImageLightbox
        isOpen={lightboxData.isOpen}
        onClose={closeLightbox}
        imageSrc={lightboxData.src}
        imageAlt={lightboxData.alt}
        caption={lightboxData.caption}
      />

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
          <span className="text-[#00D014] font-semibold">INICIATIVA SOCIAL</span>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* SECTION 1: EXACT RECREATION OF MAQUETA_Lsp_website_-_Espa_ol_bc6b9292.png */}
        {/* ========================================================================= */}
        <section 
          className="bg-[#241F3C] rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
          aria-label="Presentación de Lives Saved Project"
        >
          {/* Ambient subtle glow */}
          <div 
            className="absolute top-0 right-1/4 w-96 h-96 bg-[#00D014]/10 rounded-full blur-[140px] pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Typography, Narrative & 4 Colored Action Bars (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              
              {/* Green Headline: LIVES SAVED PROJECT */}
              <h1 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#00D014] leading-[1.05]">
                LIVES SAVED<br />
                PROJECT
              </h1>

              {/* Exact Description text with bold highlights */}
              <p className="text-white text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Es una <strong className="font-bold text-white">iniciativa social</strong> de la Iglesia En El Lugar Santísimo. Desde hace más de 10 años trabaja en Bocachica <strong className="font-bold text-white">brindando programas semanales para decenas de familias</strong>. Su misión es <strong className="font-bold text-white">romper ciclos de pobreza</strong> mediante:
              </p>

              {/* The 4 Colored Bars as Interactive Buttons */}
              <div className="flex flex-col gap-3.5 pt-2 max-w-md">
                
                {/* 1. EDUCACIÓN - Green #00D014 */}
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
                  
                  {/* Editable SVG Icon: Graduation Cap & Books */}
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg 
                      className="w-6 h-6 text-white" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
                    </svg>
                  </div>
                </button>

                {/* 2. FAMILIA - Electric Purple #7000FF */}
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
                  
                  {/* Editable SVG Icon: Family inside home */}
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg 
                      className="w-6 h-6 text-white" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 3L2 12H5V20H19V12H22L12 3M12 7.7C13.1 7.7 14 8.6 14 9.7C14 10.8 13.1 11.7 12 11.7C10.9 11.7 10 10.8 10 9.7C10 8.6 10.9 7.7 12 7.7M16 18H8V16.6C8 15.3 10.7 14.6 12 14.6C13.3 14.6 16 15.3 16 16.6V18Z" />
                    </svg>
                  </div>
                </button>

                {/* 3. BIENESTAR - Vibrant Orange #FF5A00 */}
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
                  
                  {/* Editable SVG Icon: Heart, Health & Nutrition */}
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg 
                      className="w-6 h-6 text-white" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
                    </svg>
                  </div>
                </button>

                {/* 4. FE - Clean White #FFFFFF */}
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
                  
                  {/* Editable SVG Icon: Church with Cross */}
                  <div className="w-10 h-10 rounded-full bg-[#241F3C]/10 flex items-center justify-center shrink-0">
                    <svg 
                      className="w-6 h-6 text-[#241F3C]" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M11 2H13V5H15V7H13V9H17V11L12 8L7 11V9H11V7H9V5H11V2M5 13H19V21H5V13M10 16V21H14V16H10Z" />
                    </svg>
                  </div>
                </button>

              </div>

            </div>

            {/* Right Column: Independent Photo of Three Women in Bocachica (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-4/5 max-h-[580px] w-full bg-stone-900">
                <img
                  src="/assets/aistudio/mujeres_cocina_bocachica.png"
                  alt="Madres comunitarias de Bocachica sonrientes preparando alimentos en la cocina comunitaria"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient vignette for readability and depth */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" 
                  aria-hidden="true"
                />

                {/* Exact "Ampliar foto" button in bottom right corner */}
                <button
                  type="button"
                  onClick={() =>
                    openLightbox(
                      '/assets/aistudio/mujeres_cocina_bocachica.png',
                      'Madres comunitarias de Bocachica',
                      'Madres y líderes comunitarias de Bocachica preparando alimentos con alegría y vocación de servicio para los niños.'
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
          {/* INTERACTIVE SLIDER SECTION (Displaying the 4 images below for EDUCACIÓN) */}
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
                  {activePillar === 'educacion' 
                    ? 'Registro Fotográfico: Refuerzo Escolar y Tutorías'
                    : `Registro Fotográfico: Eje ${activePillar.toUpperCase()}`}
                </h3>
              </div>

              {/* Slider Controls (Prev / Next & Counter) */}
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

            {/* Slider Main Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Featured Active Image with Lightbox Zoom Button (8 cols) */}
              <div className="lg:col-span-8">
                <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-white/15 aspect-16/10 sm:aspect-16/9 shadow-xl group">
                  <img
                    src={currentSlide.src}
                    alt={currentSlide.alt}
                    className="w-full h-full object-cover object-center transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlay vignette */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" 
                    aria-hidden="true" 
                  />

                  {/* Caption on image */}
                  <div className="absolute bottom-4 left-4 right-16 text-white z-10">
                    <h4 className="font-bold text-sm sm:text-base text-white drop-shadow-md">
                      {currentSlide.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/80 line-clamp-2 mt-0.5 drop-shadow-xs">
                      {currentSlide.caption}
                    </p>
                  </div>

                  {/* Zoom button on slider */}
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

              {/* Thumbnails Navigation & Description Panel (4 cols) */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
                
                {/* Notice for education or other pillars */}
                {activePillar === 'educacion' ? (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00D014] block">
                      4 Fotografías del Programa Educativo
                    </span>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Haz clic en cualquiera de las miniaturas para visualizar los diferentes momentos de aprendizaje semanal con los niños en Bocachica.
                    </p>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A00] block">
                      Espacio para nuevas fotos
                    </span>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Fotografías del eje <strong className="text-white uppercase">{activePillar}</strong>. En breve se habilitará la galería completa enviada por la comunidad.
                    </p>
                  </div>
                )}

                {/* Thumbnails list */}
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

                {/* Support CTA link */}
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
        {/* SECTION 2: EXACT RECREATION OF image_b408a38b.png                         */}
        {/* ========================================================================= */}
        <section 
          className="bg-[#241F3C] rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
          aria-label="Contexto de Bocachica: Un pueblo en busca de oportunidades"
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Context Grid and Narrative (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              
              {/* Header block: Title in green + white, and population summary */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                
                {/* Main Section Title (7 cols) */}
                <div className="md:col-span-7">
                  <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight leading-[1.1]">
                    <span className="text-[#00D014] block">BOCACHICA:</span>
                    <span className="text-white block">UN PUEBLO EN BUSCA DE OPORTUNIDADES</span>
                  </h2>
                </div>

                {/* Population note (5 cols) */}
                <div className="md:col-span-5 md:pl-2">
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                    Con aproximadamente <strong className="text-white font-bold">8.000 habitantes</strong>, Bocachica enfrenta desafíos estructurales que limitan el desarrollo integral de sus niños y jóvenes.
                  </p>
                </div>

              </div>

              {/* Divider line */}
              <div className="w-full h-px bg-white/15 my-2" aria-hidden="true" />

              {/* 4 Thematic Context Blocks with White Circular Icons (2x2 Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-2">
                
                {/* 1. Economía */}
                <div className="flex items-start gap-4">
                  {/* White circular icon: Coins */}
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
                    <Coins className="w-6 h-6 text-[#241F3C]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-base">Economía</h3>
                    <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed">
                      En esta comunidad, más del <strong className="text-white font-bold">85% de las familias</strong> viven en <strong className="text-white font-bold">condiciones de pobreza</strong>, y más de la mitad de los adultos no tiene empleo. Cerca del <strong className="text-white font-bold">75% trabaja en la informalidad</strong>, con ingresos inestables que dependen del <strong className="text-white font-bold">turismo y de actividades</strong> básicas, lo que limita las oportunidades de desarrollo.
                    </p>
                  </div>
                </div>

                {/* 2. Educación */}
                <div className="flex items-start gap-4">
                  {/* White circular icon: Graduation Cap */}
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
                    <GraduationCap className="w-6 h-6 text-[#241F3C]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-base">Educación</h3>
                    <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed">
                      En la isla hay <strong className="text-white font-bold">altos niveles de rezago escolar</strong> en lectura, matemáticas y habilidades básicas, agravados por la <strong className="text-white font-bold">falta de acompañamiento en casa</strong>. Muchos hogares no cuentan con computador ni buena conectividad, lo que dificulta el aprendizaje. Las brechas dejadas por la pandemia aún siguen presentes y requieren apoyo constante para superarse.
                    </p>
                  </div>
                </div>

                {/* 3. Nutrición y Salud */}
                <div className="flex items-start gap-4">
                  {/* White circular icon: Health / Hands holding Heart */}
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
                    <Activity className="w-6 h-6 text-[#241F3C]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-base">Nutrición y Salud</h3>
                    <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed">
                      Se presentan casos de desnutrición moderada y severa que <strong className="text-white font-bold">afectan</strong> tanto el crecimiento como las <strong className="text-white font-bold">capacidades cognitivas</strong> de niñas y niños. La escasez de agua potable aumenta los malestares gastrointestinales y profundiza el deterioro general de la salud. A esto se suman los <strong className="text-white font-bold">bajos ingresos</strong> familiares, que <strong className="text-white font-bold">limitan la posibilidad</strong> de ofrecer alimentos suficientes y nutritivos.
                    </p>
                  </div>
                </div>

                {/* 4. Dinámica Familiar */}
                <div className="flex items-start gap-4">
                  {/* White circular icon: Family Home */}
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
                    <Home className="w-6 h-6 text-[#241F3C]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-base">Dinámica Familiar</h3>
                    <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed">
                      Bocachica enfrenta retos profundos que afectan la vida diaria de muchas familias. El <strong className="text-white font-bold">alto índice de conflictos</strong> en el hogar, la falta de figuras de apoyo y las presiones económicas crean entornos <strong className="text-white font-bold">frágiles</strong> para niños y jóvenes. Muchos <strong className="text-white font-bold">crecen sin un espacio</strong> seguro ni una guía estable que les permita desarrollarse con tranquilidad.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Independent Photo of Children Dancing on Patio (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-4/5 max-h-[580px] w-full bg-stone-900">
                <img
                  src="/assets/aistudio/image_5938a5fc.png"
                  alt="Niños de Bocachica con los brazos en alto bailando y participando en dinámicas de recreación comunitaria"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient vignette for readability and depth */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Exact "Ampliar foto" button in bottom right corner */}
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
        {/* BOTTOM ACTION & REDIRECTION TO OFFICIAL DONATION PORTAL                   */}
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
            {/* Direct Donation URL redirection as requested */}
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
