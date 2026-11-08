import React from 'react';
import { Check, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SubscriptionPlan } from '../types';

export const SubscriptionPlans: React.FC = () => {
  const { plans, currency, setCurrency, selectDonationPlan, selectedDonation } = useApp();

  return (
    <section id="planes" className="py-20 lg:py-28 bg-[#F8F6F0] text-[#1E1B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF6B5E] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Niveles de Contribución Mensual</span>
            <span aria-hidden="true">·</span>
            <span>Aporte Continuo</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2D2B50] [text-wrap:balance]">
            Planes de suscripción y aportes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            Elige el nivel de acompañamiento que mejor se adapte a tus posibilidades. Tu fidelidad mensual 
            es el sustento de la educación y alimentación de los niños en Bocachica.
          </p>

          {/* Currency Toggle with Notice */}
          <div className="mt-6 inline-flex flex-col items-center">
            <div className="p-1 bg-white border border-stone-300 rounded-xl inline-flex items-center gap-1 shadow-xs">
              <button
                onClick={() => setCurrency('COP')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  currency === 'COP'
                    ? 'bg-[#2D2B50] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Pesos Colombianos (COP)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  currency === 'USD'
                    ? 'bg-[#2D2B50] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Dólares (USD)
              </button>
            </div>
            <span className="text-[11px] text-stone-500 mt-2">
              *Los valores son de referencia y configurables por la administración. Confirma el valor antes de procesar tu donación.
            </span>
          </div>
        </div>

        {/* 6 Subscription Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
          {plans.map((plan: SubscriptionPlan) => {
            const amount = currency === 'COP' ? plan.amountCOP : plan.amountUSD;
            const formatted =
              currency === 'COP'
                ? `$${amount.toLocaleString()} COP`
                : `$${amount.toLocaleString()} USD`;

            const isCurrentSelected = selectedDonation.planName === plan.name;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.recommended
                    ? 'bg-white border-2 border-[#FF6B5E] shadow-xl scale-[1.02] z-10'
                    : 'bg-white border border-stone-200/90 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF6B5E] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-0.5 rounded-full shadow-xs">
                    Más elegido
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="mb-4">
                    <span 
                      className="text-xs font-semibold uppercase tracking-wider block mb-1"
                      style={{ color: plan.color }}
                    >
                      {plan.tagline}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#2D2B50]">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-5 pb-5 border-b border-stone-100">
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2D2B50] tabular-nums">
                        {formatted}
                      </span>
                      <span className="text-xs text-stone-500 font-medium">/ mes</span>
                    </div>
                  </div>

                  {/* Purpose */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                    {plan.purpose}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 mb-8">
                    {plan.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-stone-700">
                        <Check 
                          className="w-4 h-4 shrink-0 mt-0.5" 
                          style={{ color: plan.color }} 
                        />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select Button */}
                <button
                  onClick={() =>
                    selectDonationPlan(amount, currency, 'monthly', plan.name, plan.name)
                  }
                  className={`w-full py-3.5 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 ${
                    plan.recommended || isCurrentSelected
                      ? 'bg-[#FF6B5E] text-white hover:bg-[#ff5747] shadow-md shadow-[#FF6B5E]/20'
                      : 'bg-stone-100 text-[#2D2B50] hover:bg-stone-200'
                  }`}
                >
                  <Heart className="w-4 h-4 fill-current opacity-80" />
                  <span>{isCurrentSelected ? 'Plan preseleccionado' : 'Elegir este plan'}</span>
                </button>

              </div>
            );
          })}
        </div>

        {/* Custom / Free Amount Option (Aporte Libre) */}
        <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl border border-stone-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#2D2B50]">
              ¿Deseas realizar un aporte libre?
            </h4>
            <p className="text-xs text-stone-600 mt-0.5">
              Puedes elegir un importe personalizado en donación única o mensual en el formulario.
            </p>
          </div>
          <button
            onClick={() =>
              selectDonationPlan(
                currency === 'COP' ? 50000 : 15,
                currency,
                'single',
                'Aporte Libre Comunitario',
                'Aporte Libre'
              )
            }
            className="px-5 py-2.5 text-xs font-semibold text-[#2D2B50] hover:text-[#FF6B5E] border border-stone-300 rounded-xl hover:border-[#FF6B5E] transition-colors whitespace-nowrap inline-flex items-center gap-1.5"
          >
            <span>Personalizar monto</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
