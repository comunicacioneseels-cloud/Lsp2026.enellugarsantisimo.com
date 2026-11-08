import React from 'react';
import { Heart, ShieldCheck, CheckCircle2, ArrowRight, HelpCircle, Mail } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PlanPadrinoPage: React.FC = () => {
  const { navigateToPage, selectDonationPlan, currency } = useApp();

  const handleStartPadrino = () => {
    selectDonationPlan(
      currency === 'COP' ? 120000 : 30,
      currency,
      'monthly',
      'Padrinos Salva Vidas',
      'Plan Transformación'
    );
  };

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
            <span className="text-[#FF6B5E] font-medium">PLAN PADRINO</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF6B5E] mb-2">
              <Heart className="w-4 h-4 fill-[#FF6B5E]" />
              <span>Padrinos Salva Vidas</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
              Conviértete en un Padrino
            </h1>
            <p className="mt-3 text-base sm:text-lg text-white/80 leading-relaxed">
              Una alianza de amor y acompañamiento a largo plazo para asegurar educación continua, 
              alimentación y oportunidades reales a los niños de Bocachica.
            </p>
          </div>

        </div>
      </section>

      {/* Main Narrative & Children Photo */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Children Photo (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-stone-200 bg-stone-100">
              <img
                src="/src/assets/images/padrino_children_hope_1794103983642.jpg"
                alt="Niños sonrientes de Bocachica participando en talleres de arte y música"
                className="w-full h-auto object-cover aspect-4/3"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white border-t border-stone-200">
                <p className="font-serif italic text-xs text-stone-700">
                  «El arte, la música y el estudio despiertan la alegría y el potencial de nuestros niños.»
                </p>
                <span className="text-[11px] text-stone-400 block mt-1">
                  Bocachica · Programa Padrinos Salva Vidas
                </span>
              </div>
            </div>
          </div>

          {/* Emotional Pitch (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D2B50]">
              Tu fidelidad mensual transforma una comunidad entera
            </h2>

            <div className="prose prose-stone text-base sm:text-lg text-stone-700 leading-relaxed space-y-4">
              <p>
                Un <strong>Padrino Salva Vidas</strong> es alguien que decide invertir en el futuro de un niño, 
                su familia y su comunidad. Tu aporte mensual permite que los programas sigan funcionando 
                y que más niños tengan acceso a educación, bienestar y oportunidades.
              </p>
            </div>

            {/* Highlighted Quote Box */}
            <div className="p-6 rounded-2xl bg-white border border-[#FF6B5E]/30 shadow-xs">
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#FF6B5E]">
                «¡Juntos podemos hacer una diferencia!»
              </p>
              <p className="text-xs sm:text-sm text-stone-600 mt-2">
                No se trata únicamente de una donación económica, sino de un lazo de esperanza que brinda estabilidad, 
                maestros comprometidos y alimentación sana semana tras semana.
              </p>
            </div>

            {/* Guarantees */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#00E51B] shrink-0 mt-0.5" />
                <span>
                  <strong>Destino comunitario responsable:</strong> Tu contribución apoya a la cohorte infantil completa, asegurando equidad y dignidad.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E51B] shrink-0 mt-0.5" />
                <span>
                  <strong>Boletines periódicos de impacto:</strong> Recibirás testimonios y reportes sobre los avances escolares de los niños.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E51B] shrink-0 mt-0.5" />
                <span>
                  <strong>Flexibilidad total:</strong> Puedes modificar, actualizar o cancelar tu plan de apadrinamiento en cualquier momento sin penalidad.
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleStartPadrino}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#FF6B5E] hover:bg-[#ff5747] active:scale-[0.98] rounded-xl shadow-lg shadow-[#FF6B5E]/30 transition-all cursor-pointer whitespace-nowrap"
              >
                <Heart className="w-5 h-5 fill-white/80" />
                <span>Quiero apadrinar ahora</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigateToPage('planes-suscripcion')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#2D2B50] hover:text-[#FF6B5E] border border-stone-300 rounded-xl hover:bg-stone-50 transition-colors cursor-pointer"
              >
                <span>Ver todos los planes de suscripción</span>
              </button>
            </div>

          </div>

        </div>

        {/* Transparency FAQ */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400">Preguntas Frecuentes</span>
            <h3 className="font-serif text-2xl font-bold text-[#2D2B50] mt-1">
              ¿Cómo funciona el Plan Padrino?
            </h3>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-stone-700">
            <div className="border-b border-stone-100 pb-4">
              <h4 className="font-bold text-stone-900 text-sm mb-1">
                ¿El apadrinamiento es individual o comunitario?
              </h4>
              <p className="text-stone-600 leading-relaxed">
                Por políticas de dignidad, protección de datos y equidad social de la Iglesia En el Lugar Santísimo, 
                los aportes se agrupan en un fondo común que garantiza que ningún niño sea discriminado y que todos los 
                participantes de los programas reciban la misma calidad en educación, nutrición y materiales.
              </p>
            </div>

            <div className="border-b border-stone-100 pb-4">
              <h4 className="font-bold text-stone-900 text-sm mb-1">
                ¿Qué periodicidad tiene el aporte?
              </h4>
              <p className="text-stone-600 leading-relaxed">
                El compromiso es mensual recurrente, lo que permite planificar las raciones alimentarias y los salarios de los 
                docentes y psicólogos locales en la isla.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-stone-900 text-sm mb-1">
                ¿Puedo deducir tributariamente mi donación?
              </h4>
              <p className="text-stone-600 leading-relaxed">
                Sí. La Iglesia En el Lugar Santísimo emite certificados oficiales de donación para efectos tributarios según la normativa vigente en Colombia.
              </p>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};
