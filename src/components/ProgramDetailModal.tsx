import React from 'react';
import { X, CheckCircle, Clock, Users, Target, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProgramDetailModal: React.FC = () => {
  const { activeProgramModal, setActiveProgramModal, selectDonationPlan, currency } = useApp();

  if (!activeProgramModal) return null;

  const handleDonateToProgram = () => {
    const prog = activeProgramModal;
    setActiveProgramModal(null);
    selectDonationPlan(
      currency === 'COP' ? 80000 : 20,
      currency,
      'monthly',
      prog.title,
      `Apoyo a ${prog.title}`
    );
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={() => setActiveProgramModal(null)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-program-title"
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 text-[#1E1B2E]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Program Brand Accent */}
        <div 
          className="p-6 sm:p-8 text-white relative rounded-t-3xl"
          style={{ backgroundColor: activeProgramModal.color }}
        >
          <button
            onClick={() => setActiveProgramModal(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/20 hover:bg-black/35 text-white transition-colors focus:outline-none"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-xs uppercase tracking-widest font-semibold opacity-90">
            {activeProgramModal.category}
          </span>
          <h3 id="modal-program-title" className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-white">
            {activeProgramModal.title}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-white/90 leading-relaxed max-w-lg">
            {activeProgramModal.shortDescription}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Extended Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
              Descripción y Enfoque
            </h4>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              {activeProgramModal.fullDescription}
            </p>
          </div>

          {/* Curriculum / Activities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
              Actividades y Contenidos
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {activeProgramModal.curriculum.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <CheckCircle 
                    className="w-4 h-4 shrink-0 mt-0.5" 
                    style={{ color: activeProgramModal.color }} 
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Practical Logistics (Beneficiaries, Schedule, Objective) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-stone-800">Horario:</span>
                <span className="text-stone-600">{activeProgramModal.schedule}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Users className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-stone-800">Beneficiarios:</span>
                <span className="text-stone-600">{activeProgramModal.beneficiaries}</span>
              </div>
            </div>
            <div className="sm:col-span-2 flex items-start gap-2.5 pt-2 border-t border-stone-200/60">
              <Target className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-stone-800">Objetivo de Impacto:</span>
                <span className="text-stone-600">{activeProgramModal.impactObjective}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => setActiveProgramModal(null)}
              className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-stone-600 hover:text-stone-900 border border-stone-300 rounded-xl hover:bg-stone-50 transition-colors"
            >
              Cerrar
            </button>
            <button
              onClick={handleDonateToProgram}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#FF6B5E] hover:bg-[#ff5747] active:scale-[0.98] rounded-xl shadow-md transition-all"
            >
              <span>Respaldar este programa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
