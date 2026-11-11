import React from 'react';
import {
  Building2,
  Heart,
  ArrowUpRight,
  Sparkles,
  Layers,
  CheckCircle2,
  DollarSign,
  TrendingUp,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProyectosPage: React.FC = () => {
  const { financialProgress, donationUrl, navigateToPage } = useApp();

  const target = financialProgress.targetUSD || 100000;
  const raised = financialProgress.raisedUSD || 10000;
  const pending = Math.max(0, target - raised);
  const percentage = Math.min(100, Math.round((raised / target) * 100));

  return (
    <div className="bg-[#18162B] text-white min-h-screen">
      
      {/* ========================================================================= */}
      {/* BREADCRUMB & HEADER STRIP                                                 */}
      {/* ========================================================================= */}
      <section className="bg-[#121022] border-b border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-white/60">
            <button
              onClick={() => navigateToPage('inicio')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              INICIO
            </button>
            <span>/</span>
            <span className="text-[#35D5C5] font-semibold">PROYECTOS</span>
          </div>

          <button
            onClick={() => navigateToPage('apoyanos')}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FF6B5E] hover:bg-[#ff5747] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>Donar a los Proyectos</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 1: PROYECTOS EN MARCHA (ADAPTACIÓN DE LA PRIMERA MAQUETA)         */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-white/10 bg-[#1A1733] relative overflow-hidden">
        {/* Ambient lighting circles */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#9A00D2]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#00CDBE]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Columna Izquierda: Título y Descripción Oficial (4 cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-wider text-[#35D5C5]">
                <Building2 className="w-4 h-4 text-[#35D5C5]" />
                <span>Plan Estratégico 2025–2026</span>
              </div>

              <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
                PROYECTOS EN MARCHA
              </h1>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
                Nuestro plan estratégico 2025–2026 busca ampliar el impacto y generar oportunidades reales de movilidad social con la ejecución de las siguientes obras:
              </p>

              <div className="pt-2">
                <button
                  onClick={() => navigateToPage('apoyanos')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#FF6B5E] hover:bg-[#ff5747] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#FF6B5E]/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Donar a los Proyectos</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Columna Derecha: Cuadros de Obras en Alternancia + Fachada (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Grid 2x2 Alternado de Cuadros y Fotos (Sin generar pop-up) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                
                {/* ------------------------------------------------------------- */}
                {/* FILA 1: IMAGEN SALÓN ARTES + CUADRO AUDITORIO (MORADO)        */}
                {/* ------------------------------------------------------------- */}
                {/* Imagen Salón Artes / Música */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-900 border border-white/10 shadow-lg group">
                  <img
                    src="/assets/aistudio/MAQUETA_Lsp_website_-_Espa_ol__25__0ac032c3.png"
                    alt="Salón de artes y música con guitarras, caballetes y materiales pedagógicos"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-medium text-white/90 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    Salón de artes y talleres
                  </span>
                </div>

                {/* Cuadro Morado: Construcción de Auditorio Comunitario */}
                <div className="rounded-2xl p-6 sm:p-7 flex flex-col justify-center text-white shadow-lg bg-[#9A00D2] border border-white/10">
                  <h2 className="font-sans font-bold text-xl sm:text-2xl leading-tight mb-3">
                    Construcción de Auditorio Comunitario
                  </h2>
                  <ul className="space-y-2 text-xs sm:text-sm text-white/95 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2" />
                      <span>Un espacio para talleres, formaciones, cultos, actividades culturales y encuentros comunitarios.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2" />
                      <span>Será el corazón de nuestras actividades masivas y de formación.</span>
                    </li>
                  </ul>
                </div>

                {/* ------------------------------------------------------------- */}
                {/* FILA 2: CUADRO SALONES NUEVOS (NARANJA) + IMAGEN AUDITORIO    */}
                {/* ------------------------------------------------------------- */}
                {/* Cuadro Naranja: Construcción de Salones Nuevos */}
                <div className="rounded-2xl p-6 sm:p-7 flex flex-col justify-center text-white shadow-lg bg-[#FF4F00] border border-white/10 order-2 md:order-1">
                  <h2 className="font-sans font-bold text-xl sm:text-2xl leading-tight mb-3">
                    Construcción de Salones Nuevos
                  </h2>
                  <ul className="space-y-2 text-xs sm:text-sm text-white/95 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2" />
                      <span>Edificación de 3 nuevos salones, incluyendo un salón de sistemas con 15–20 computadores.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2" />
                      <span>Espacios seguros, ventilados y diseñados para educación moderna.</span>
                    </li>
                  </ul>
                </div>

                {/* Imagen Tarima y Silletería Auditorio */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-900 border border-white/10 shadow-lg group order-1 md:order-2">
                  <img
                    src="/assets/aistudio/MAQUETA_Lsp_website_-_Espa_ol__26__e2d0c493.png"
                    alt="Diseño interior del auditorio comunitario con tarima de madera y silletería"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-medium text-white/90 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    Auditorio comunitario polivalente
                  </span>
                </div>

                {/* ------------------------------------------------------------- */}
                {/* FILA 3: IMAGEN LOCAL COMERCIAL + CUADRO AUTO SOSTENIBILIDAD   */}
                {/* ------------------------------------------------------------- */}
                {/* Imagen Supermercado / Mini-Market */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-900 border border-white/10 shadow-lg group">
                  <img
                    src="/assets/aistudio/MAQUETA_Lsp_website_-_Espa_ol__27__49b4e622.png"
                    alt="Local comercial de abarrotes y productos frescos para autosostenibilidad"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-medium text-white/90 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    Punto de abastecimiento local
                  </span>
                </div>

                {/* Cuadro Cian: Auto Sostenibilidad */}
                <div className="rounded-2xl p-6 sm:p-7 flex flex-col justify-center text-white shadow-lg bg-[#00CDBE] border border-white/10">
                  <h2 className="font-sans font-bold text-xl sm:text-2xl leading-tight mb-3 text-stone-950">
                    Auto Sostenibilidad
                  </h2>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-900 leading-relaxed font-medium">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0 mt-2" />
                      <span>Desarrollo de un local diseñado para generar ingresos que fortalezcan la sostenibilidad financiera de LSP.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0 mt-2" />
                      <span>Generar oportunidades de empleo a la comunidad.</span>
                    </li>
                  </ul>
                </div>

                {/* ------------------------------------------------------------- */}
                {/* FILA 4: CUADRO POTABILIZACIÓN + IMAGEN BIDONES DE AGUA        */}
                {/* ------------------------------------------------------------- */}
                {/* Cuadro Ámbar/Naranja: Potabilización de Agua */}
                <div className="rounded-2xl p-6 sm:p-7 flex flex-col justify-center text-white shadow-lg bg-[#FFA000] border border-white/10 order-2 md:order-1">
                  <h2 className="font-sans font-bold text-xl sm:text-2xl leading-tight mb-3 text-stone-950">
                    Potabilización de Agua
                  </h2>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-900 leading-relaxed font-medium">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0 mt-2" />
                      <span>Instalación de sistemas de recolección, almacenamiento y filtración para el acceso a agua potable.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0 mt-2" />
                      <span>Beneficiará a los niños, sus familias y la comunidad en general, reduciendo enfermedades y mejorando la calidad de vida.</span>
                    </li>
                  </ul>
                </div>

                {/* Imagen Bidones de Agua en la Comunidad */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-900 border border-white/10 shadow-lg group order-1 md:order-2">
                  <img
                    src="/assets/aistudio/MAQUETA_Lsp_website_-_Espa_ol__28__266fc0a5.png"
                    alt="Niñas y familias de Bocachica recolectando agua en bidones"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-medium text-white/90 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    Acceso vital a agua potable
                  </span>
                </div>

              </div>

              {/* RENDER DE FACHADA EXTERIOR DE LA EDIFICACIÓN (PARTE INFERIOR) */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-stone-950 group">
                <img
                  src="/assets/aistudio/fachada_exterior_lsp.png"
                  alt="Fachada exterior del Centro Comunitario Lives Saved Project en Bocachica"
                  className="w-full h-auto object-cover max-h-[380px] group-hover:scale-[1.01] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#121022]/90 backdrop-blur-xs border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-white/80">
                  <span className="font-semibold text-white">
                    Perspectiva exterior del Centro Comunitario de Lives Saved Project en Bocachica
                  </span>
                  <span className="text-[#35D5C5] font-medium">Diseño arquitectónico integral</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 2: AUDITORIO Y SALONES NUEVOS (ADAPTACIÓN DE LA SEGUNDA MAQUETA)  */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-white/10 bg-[#211E3D] relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Título de la Sección */}
          <div className="mb-10 sm:mb-14 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B5E] block mb-2">
              Infraestructura Educativa y Comunitaria
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
              AUDITORIO Y SALONES NUEVOS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Columna Izquierda: Isométrico Arquitectónico General (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-stone-200/90 rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/20">
                <img
                  src="/assets/aistudio/MAQUETA_Lsp_website_-_Espa_ol__16__a0d32f7d.png"
                  alt="Corte isométrico arquitectónico 3D del Auditorio Comunitario y las aulas formativas"
                  className="w-full h-auto object-contain rounded-2xl max-h-[560px]"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-4 pt-3 border-t border-stone-300 flex items-center justify-between text-xs text-stone-700 font-medium">
                  <span>Plano 3D con distribución de auditorio, aula de informática, salón de artes y local comercial</span>
                  <span className="text-stone-900 font-bold">Distribución modular</span>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Los 3 Espacios con sus Cortes Isométricos (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Espacio 1: Salón de Cómputo (Corte a la izquierda, Texto a la derecha) */}
              <div className="bg-white/5 hover:bg-white/10 transition-colors p-4 sm:p-5 rounded-2xl border border-white/10 shadow-lg flex items-center gap-4 sm:gap-6">
                <div className="w-36 sm:w-44 shrink-0 rounded-xl overflow-hidden bg-stone-900 border border-white/15 aspect-[4/3]">
                  <img
                    src="/assets/aistudio/MAQUETA_Lsp_website_-_Espa_ol__17__98f872b5.png"
                    alt="Corte isométrico del salón de cómputo para educación virtual"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-sans font-bold text-base sm:text-lg text-white leading-snug">
                    Salón de cómputo para educación virtual
                  </h3>
                  <p className="text-xs text-white/70 mt-1.5 leading-relaxed">
                    Equipado con 15–20 terminales de acceso a Internet, ofimática y plataformas formativas.
                  </p>
                </div>
              </div>

              {/* Espacio 2: Salones de Clases Presenciales (Texto a la izquierda, Corte a la derecha) */}
              <div className="bg-white/5 hover:bg-white/10 transition-colors p-4 sm:p-5 rounded-2xl border border-white/10 shadow-lg flex flex-row items-center gap-4 sm:gap-6">
                <div className="flex-1 order-1">
                  <h3 className="font-sans font-bold text-base sm:text-lg text-white leading-snug">
                    Salones para clases presenciales en artes y refuerzo académico
                  </h3>
                  <p className="text-xs text-white/70 mt-1.5 leading-relaxed">
                    Aulas modulares con ventilación bioclimática, biblioteca, mesas de trabajo y acústica adaptada.
                  </p>
                </div>
                <div className="w-36 sm:w-44 shrink-0 rounded-xl overflow-hidden bg-stone-900 border border-white/15 aspect-[4/3] order-2">
                  <img
                    src="/assets/aistudio/MAQUETA_Lsp_website_-_Espa_ol__19__a5ee995b.png"
                    alt="Corte isométrico de salones presenciales y biblioteca"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Espacio 3: Local Comercial (Corte a la izquierda, Texto a la derecha) */}
              <div className="bg-white/5 hover:bg-white/10 transition-colors p-4 sm:p-5 rounded-2xl border border-white/10 shadow-lg flex items-center gap-4 sm:gap-6">
                <div className="w-36 sm:w-44 shrink-0 rounded-xl overflow-hidden bg-stone-900 border border-white/15 aspect-[4/3]">
                  <img
                    src="/assets/aistudio/MAQUETA_Lsp_website_-_Espa_ol__18__2357cb6b.png"
                    alt="Corte isométrico del local comercial para autosostenibilidad"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-sans font-bold text-base sm:text-lg text-white leading-snug">
                    Local comercial para autosostenibilidad
                  </h3>
                  <p className="text-xs text-white/70 mt-1.5 leading-relaxed">
                    Unidad productiva con estantería, refrigeración y productos de primera necesidad.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECCIÓN 3: AVANCES (ADAPTACIÓN DE LA TERCERA MAQUETA)                     */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#191732] relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Columna Izquierda: Las 4 Fotografías Reales de Avance de Obra (6 cols) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                
                {/* Foto 1: Reja perimetral y columnas */}
                <div className="rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-stone-900 aspect-[4/3]">
                  <img
                    src="/assets/aistudio/avance_obra_1.jpg"
                    alt="Cerramiento perimetral con reja metálica en el predio de Bocachica"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Foto 2: Cimentación y zanjas */}
                <div className="rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-stone-900 aspect-[4/3]">
                  <img
                    src="/assets/aistudio/avance_obra_2.jpg"
                    alt="Cimentación y adecuación de zanjas del lote"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Foto 3: Muros de contención y acceso */}
                <div className="rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-stone-900 aspect-[4/3]">
                  <img
                    src="/assets/aistudio/avance_obra_3.jpg"
                    alt="Levantamiento de muros de concreto y portón"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Foto 4: Longitud del cerramiento perimetral */}
                <div className="rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-stone-900 aspect-[4/3]">
                  <img
                    src="/assets/aistudio/avance_obra_4.jpg"
                    alt="Vista panorámica de la reja y límites perimetrales"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

              </div>
              
              <div className="mt-3 text-center sm:text-left text-xs text-white/60">
                <span>Fotografías oficiales de avance en campo: cerramiento, zapatas y linderos en Bocachica.</span>
              </div>
            </div>

            {/* Columna Derecha: Título AVANCES, Texto Oficial y Meta Financiera (6 cols) */}
            <div className="lg:col-span-6 space-y-7">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#35D5C5] block mb-2">
                  Estado Real de Construcción
                </span>
                <h2 className="font-sans font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
                  AVANCES
                </h2>
              </div>

              {/* Párrafo Oficial de la Maqueta */}
              <p className="text-base sm:text-xl text-white/95 leading-relaxed font-normal">
                Para concluir nuestro proyecto tenemos una meta de <strong className="font-bold text-[#FF6B5E]">USD 100.000</strong>, con <strong className="font-bold text-[#00E51B]">USD 10.000</strong> recaudados y <strong className="font-bold text-[#35D5C5]">USD 90.000</strong> por recaudar. Sin embargo hemos logrado avanzar con actividades de cimentación y cerramiento. Aún es una fase preliminar y creemos que seguiremos avanzando con la ayuda de Dios y personas maravillosas como tú que respaldan este proyecto.
              </p>

              {/* Indicadores Financieros de Meta */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-5">
                
                <div className="grid grid-cols-3 gap-3 text-center sm:text-left">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/60 block mb-0.5">
                      Meta Total
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-white tabular-nums">
                      USD ${target.toLocaleString()}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00E51B] block mb-0.5">
                      Recaudado
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-[#00E51B] tabular-nums">
                      USD ${raised.toLocaleString()}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B5E] block mb-0.5">
                      Por Recaudar
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-[#FF6B5E] tabular-nums">
                      USD ${pending.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Barra de Progreso */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-white/80">Porcentaje de Avance Financiero:</span>
                    <span className="text-[#35D5C5] font-bold text-sm tabular-nums">{percentage}%</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#35D5C5] via-[#00E51B] to-[#FF6B5E] transition-all duration-1000"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>

              </div>

              {/* Botón de Donación Principal que lleva a la sección Apóyanos */}
              <div className="pt-2">
                <button
                  onClick={() => navigateToPage('apoyanos')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#FF6B5E] hover:bg-[#ff5747] active:scale-[0.98] text-white font-bold text-base uppercase tracking-wider shadow-xl shadow-[#FF6B5E]/30 transition-all cursor-pointer"
                >
                  <Heart className="w-5 h-5 fill-white" />
                  <span>Donar a los Proyectos</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
