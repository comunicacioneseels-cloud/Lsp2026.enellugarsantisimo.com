import React from 'react';
import { Heart, Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PadrinoSection: React.FC = () => {
  const { selectDonationPlan, currency } = useApp();

  const handleStartSponsorship = () => {
    // Scrolls to the subscription plans or selects default recommended plan
    const el = document.getElementById('planes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      selectDonationPlan(
        currency === 'COP' ? 120000 : 30,
        currency,
        'monthly',
        'Padrinos Salva Vidas',
        'Plan Transformación'
      );
    }
  };

  return (
    <section id="padrinos" className="py-20 lg:py-28 bg-[#FDFBF7] text-[#1E1B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Photography of Children (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200 bg-stone-100 group">
              <img
                src="/src/assets/images/padrino_children_hope_1794103983642.jpg"
                alt="Niños sonrientes de Bocachica participando en un taller creativo y musical"
                className="w-full h-auto object-cover aspect-4/3 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="p-4 bg-white/95 backdrop-blur-xs border-t border-stone-200">
                <p className="font-serif italic text-xs text-stone-700">
                  «El arte, la música y el estudio despiertan la alegría y el potencial de nuestros niños.»
                </p>
                <span className="text-[11px] text-stone-400 block mt-1">
                  Bocachica · Programa Padrinos Salva Vidas
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Emotive & Transparent Narrative (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF6B5E]">
              <Heart className="w-4 h-4 fill-[#FF6B5E]" />
              <span>Acompañamiento a Largo Plazo</span>
              <span className="text-stone-300" aria-hidden="true">·</span>
              <span>Comunidad Bocachiquera</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2D2B50] [text-wrap:balance]">
              Conviértete en un padrino
            </h2>

            <div className="prose prose-stone text-base sm:text-lg text-stone-700 leading-relaxed space-y-4">
              <p>
                Un <strong>Padrino Salva Vidas</strong> es alguien que decide invertir en el futuro de un niño, 
                su familia y su comunidad. Tu aporte mensual permite que los programas sigan funcionando 
                y que más niños tengan acceso a educación, bienestar y oportunidades.
              </p>
            </div>

            {/* Highlighted Quote Box */}
            <div className="p-5 rounded-2xl bg-white border border-[#FF6B5E]/30 shadow-xs">
              <p className="font-serif text-xl sm:text-2xl font-semibold text-[#FF6B5E]">
                «¡Juntos podemos hacer una diferencia!»
              </p>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                No se trata de una cifra aislada, sino de una alianza de amor que sostiene la alimentación, 
                la formación docente y los espacios protectores de la niñez en Bocachica.
              </p>
            </div>

            {/* Transparency Pillars */}
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#00E51B] shrink-0 mt-0.5" />
                <span>
                  <strong>Destino comunitario transparente:</strong> Los fondos se agrupan para garantizar que ningún niño se quede sin material pedagógico ni refrigerio.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E51B] shrink-0 mt-0.5" />
                <span>
                  <strong>Reportes periódicos:</strong> Recibe boletines informativos sobre los avances académicos y testimonios del proyecto.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E51B] shrink-0 mt-0.5" />
                <span>
                  <strong>Flexibilidad y dignidad:</strong> Puedes pausar, actualizar o modificar tu plan en cualquier momento.
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={handleStartSponsorship}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-[#FF6B5E] hover:bg-[#ff5747] active:scale-[0.98] rounded-xl shadow-lg shadow-[#FF6B5E]/30 transition-all"
              >
                <Heart className="w-5 h-5 fill-white/80" />
                <span>Quiero apadrinar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
