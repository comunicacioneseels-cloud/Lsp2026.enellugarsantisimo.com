import React from 'react';
import {
  Heart,
  ArrowUpRight,
  Building,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface PlanItem {
  id: string;
  name: string;
  priceCOP: string;
  priceUSD: string;
  description: string;
  recommended?: boolean;
}

const subscriptionPlansData: PlanItem[] = [
  {
    id: 'semilla',
    name: 'Plan Semilla',
    priceCOP: '$40.000 COP',
    priceUSD: 'USD 10',
    description: 'Apoyo a la operación básica del programa.',
  },
  {
    id: 'esperanza',
    name: 'Plan Esperanza',
    priceCOP: '$80.000 COP',
    priceUSD: 'USD 20',
    description: 'Aporta a refuerzo académico, materiales y refrigerios.',
  },
  {
    id: 'transformacion',
    name: 'Plan Transformación',
    priceCOP: '$120.000 COP',
    priceUSD: 'USD 30',
    description: 'Sostiene procesos psicológicos, trabajo social y formación familiar.',
    recommended: true,
  },
  {
    id: 'futuro',
    name: 'Plan Futuro',
    priceCOP: '$160.000 COP',
    priceUSD: 'USD 40',
    description: 'Impulsa programas técnicos, cursos digitales y oportunidades de empleo.',
  },
  {
    id: 'salvavidas',
    name: 'Plan Salvavidas',
    priceCOP: '$200.000 COP',
    priceUSD: 'USD 50',
    description: 'Para apoyar integralmente el crecimiento de los niños.',
  },
];

export const PlanesSuscripcionPage: React.FC = () => {
  const { donationUrl, navigateToPage } = useApp();

  return (
    <div className="bg-[#18162B] text-[#1E1B2E] min-h-screen">
      
      {/* ========================================================================= */}
      {/* BREADCRUMB & ACCENT HEADER                                                */}
      {/* ========================================================================= */}
      <section className="bg-[#121022] border-b border-white/10 py-4 text-xs text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-white/60">
            <button
              onClick={() => navigateToPage('inicio')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              INICIO
            </button>
            <span>/</span>
            <span className="text-[#FF6B5E] font-semibold">PLANES DE SUSCRIPCIÓN</span>
          </div>

          <a
            href={donationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FF6B5E] hover:bg-[#ff5747] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>Donar Ahora</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MAIN SECTION: EXACT TEMPLATE REPRODUCTION                                */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Visual Container reproducing the warm stucco slide layout */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#EBE7E0] grid grid-cols-1 lg:grid-cols-12 min-h-[720px]">
          
          {/* ===================================================================== */}
          {/* COLUMNA IZQUIERDA: FOTOGRAFÍA (VOLUNTARIA Y NIÑA DE BOCACHICA)         */}
          {/* ===================================================================== */}
          <div className="lg:col-span-5 relative bg-stone-900 overflow-hidden min-h-[400px] lg:min-h-full group">
            <img
              src="/assets/aistudio/IMG_5824_f17a108d.JPG"
              alt="Voluntaria y niña de Bocachica sonrientes en jornada comunitaria"
              className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-5 left-5 right-5 text-white p-4 rounded-2xl bg-black/40 backdrop-blur-xs border border-white/15">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#35D5C5] block mb-1">
                Comunidad de Bocachica, Bolívar
              </span>
              <p className="text-xs sm:text-sm text-white/95 leading-snug">
                Tu suscripción mensual garantiza alimentación, educación y amor para cada uno de nuestros niños.
              </p>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* COLUMNA DERECHA: PLANES DE SUSCRIPCIÓN EN LÍNEA VERTICAL CONECTADA     */}
          {/* ===================================================================== */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#EBE7E0]">
            
            {/* Header del Título */}
            <div className="mb-6 sm:mb-8">
              <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-5xl uppercase tracking-tight text-[#1A153A] leading-none">
                PLANES DE SUSCRIPCIÓN
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 font-medium">
                Haz clic en cualquiera de los planes para iniciar tu donación periódica a través de la plataforma segura:
              </p>
            </div>

            {/* Timeline Vertical con Conectores y Puntos */}
            <div className="relative pl-6 sm:pl-8 space-y-5 sm:space-y-6">
              
              {/* Línea vertical continua que conecta los puntos */}
              <div 
                className="absolute left-[7px] sm:left-[11px] top-3 bottom-3 w-[2px] bg-[#1A153A]" 
                aria-hidden="true" 
              />

              {subscriptionPlansData.map((plan) => (
                <a
                  key={plan.id}
                  href={donationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block p-3 sm:p-3.5 -ml-3 sm:-ml-3 rounded-2xl hover:bg-black/5 transition-all duration-200 cursor-pointer"
                  aria-label={`Seleccionar ${plan.name} por ${plan.priceCOP} o ${plan.priceUSD}`}
                >
                  {/* Punto circular en la línea */}
                  <div className="absolute -left-[14px] sm:-left-[18px] top-4.5 w-3.5 h-3.5 rounded-full bg-[#1A153A] border-2 border-[#EBE7E0] group-hover:scale-125 group-hover:bg-[#FF6B5E] transition-all" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                    {/* Título y Monto del Plan */}
                    <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-2">
                      <span className="font-sans font-bold text-base sm:text-lg text-[#1A153A] group-hover:text-[#FF6B5E] transition-colors">
                        {plan.name} – {plan.priceCOP} / {plan.priceUSD}
                      </span>
                    </div>

                    {/* Botón visual de acción */}
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-[#FF6B5E] opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      <span>Donar</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Descripción del Plan */}
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal mt-0.5">
                    {plan.description}
                  </p>
                </a>
              ))}

            </div>

            {/* =================================================================== */}
            {/* BLOQUE EMPRESARIAL                                                  */}
            {/* =================================================================== */}
            <div className="mt-8 pt-6 border-t border-stone-300">
              <a
                href={donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 sm:p-5 rounded-2xl bg-white/70 hover:bg-white transition-all shadow-xs hover:shadow-md border border-stone-300/80 cursor-pointer"
                aria-label="Seleccionar Plan Empresarial desde $500.000 COP mensuales"
              >
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-[#1A153A] group-hover:text-[#FF6B5E] transition-colors" />
                    <h3 className="font-sans font-bold text-base sm:text-lg text-[#1A153A] group-hover:text-[#FF6B5E] transition-colors">
                      Empresarial – Desde $500.000 COP mensuales
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#FF6B5E] shrink-0">
                    <span className="hidden sm:inline">Vincular empresa</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                  Para empresas que desean articular su responsabilidad social con impacto real y medible.
                </p>

                <p className="text-xs text-stone-600 italic mt-1.5 leading-relaxed">
                  Incluye reportes, participación en actividades, reconocimiento público y posibilidades de voluntariado corporativo.
                </p>
              </a>
            </div>

            {/* Botón General de Confirmación */}
            <div className="mt-6 pt-2 flex items-center justify-between text-xs text-stone-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E51B]" />
                <span>Todos los planes redirigen al portal seguro de donación oficial</span>
              </span>
              <a
                href={donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#FF6B5E] hover:underline"
              >
                Abrir portal de donación ↗
              </a>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};
