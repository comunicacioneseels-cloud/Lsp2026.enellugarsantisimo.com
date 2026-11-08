import React from 'react';
import { Sparkles, Check, Heart, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SubscriptionPlan } from '../types';

export const PlanesSuscripcionPage: React.FC = () => {
  const { plans, currency, setCurrency, selectDonationPlan, navigateToPage, selectedDonation } = useApp();

  return (
    <div className="bg-[#F8F6F0] text-[#1E1B2E] min-h-screen">
      
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
            <span className="text-[#FF6B5E] font-medium">PLANES DE SUSCRIPCIÓN</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF6B5E] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Compromiso Mensual Sostenible</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
              Planes de Suscripción y Aportes
            </h1>
            <p className="mt-3 text-base sm:text-lg text-white/80 leading-relaxed">
              Elige el nivel de acompañamiento mensual que desees brindar. Cada aporte sostiene la alimentación, 
              los útiles escolares y las tutorías que transforman el porvenir de los niños en Bocachica.
            </p>
          </div>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Currency Switcher Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 p-4 bg-white rounded-2xl border border-stone-200 shadow-xs">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
              Moneda de Visualización:
            </span>
            <p className="text-xs text-stone-600">
              Configura los valores en Pesos Colombianos (COP) o Dólares Americanos (USD).
            </p>
          </div>

          <div className="p-1 bg-stone-100 border border-stone-200 rounded-xl inline-flex items-center gap-1">
            <button
              onClick={() => setCurrency('COP')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                currency === 'COP'
                  ? 'bg-[#2D2B50] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Pesos Colombianos (COP)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                currency === 'USD'
                  ? 'bg-[#2D2B50] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Dólares (USD)
            </button>
          </div>
        </div>

        {/* 6 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
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
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.recommended
                    ? 'bg-white border-2 border-[#FF6B5E] shadow-xl scale-[1.02] z-10'
                    : 'bg-white border border-stone-200 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Recommended Tag */}
                {plan.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF6B5E] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-0.5 rounded-full shadow-xs">
                    Más Elegido
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="mb-4">
                    <span
                      className="text-xs font-bold uppercase tracking-wider block mb-1"
                      style={{ color: plan.color }}
                    >
                      {plan.tagline}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#2D2B50]">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price Box */}
                  <div className="mb-5 pb-5 border-b border-stone-100">
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-4xl font-extrabold text-[#2D2B50] tabular-nums">
                        {formatted}
                      </span>
                      <span className="text-xs text-stone-500 font-medium">/ mensual</span>
                    </div>
                  </div>

                  {/* Purpose text */}
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

                {/* Choose button */}
                <button
                  onClick={() =>
                    selectDonationPlan(amount, currency, 'monthly', plan.name, plan.name)
                  }
                  className={`w-full py-3.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    plan.recommended || isCurrentSelected
                      ? 'bg-[#FF6B5E] text-white hover:bg-[#ff5747] shadow-md shadow-[#FF6B5E]/20'
                      : 'bg-stone-100 text-[#2D2B50] hover:bg-stone-200'
                  }`}
                >
                  <Heart className="w-4 h-4 fill-current opacity-80" />
                  <span>{isCurrentSelected ? 'Plan Preseleccionado' : 'Elegir este plan'}</span>
                </button>

              </div>
            );
          })}
        </div>

        {/* Free Contribution Box */}
        <div className="p-8 bg-white rounded-3xl border border-stone-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#35D5C5]">
              Flexibilidad y Libertad
            </span>
            <h4 className="font-serif text-2xl font-bold text-[#2D2B50] mt-1">
              ¿Deseas aportar un monto libre o en una sola cuota?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              En la página de donación puedes definir el monto exacto y elegir entre donación única o periódica.
            </p>
          </div>
          <button
            onClick={() =>
              selectDonationPlan(
                currency === 'COP' ? 50000 : 15,
                currency,
                'single',
                'Aporte Libre',
                'Aporte Libre'
              )
            }
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#2D2B50] hover:bg-[#201e38] rounded-xl transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Realizar Aporte Libre</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

    </div>
  );
};
