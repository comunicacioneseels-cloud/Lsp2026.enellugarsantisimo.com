import React, { useState } from 'react';
import {
  Heart,
  ShieldCheck,
  CreditCard,
  Building,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  QrCode,
  Phone,
  Mail,
  FileText,
  Printer,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Currency, DonationRecord } from '../types';

export const DonationSection: React.FC = () => {
  const {
    organizationInfo,
    selectedDonation,
    selectDonationPlan,
    currency,
    setCurrency,
    addDonationRecord,
    setIsAdminOpen,
  } = useApp();

  // Form State
  const [frequency, setFrequency] = useState<'single' | 'monthly'>(selectedDonation.frequency || 'monthly');
  const [amount, setAmount] = useState<number>(selectedDonation.amount || 80000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [program, setProgram] = useState<string>(selectedDonation.program || 'Fondo General de Operaciones');
  
  // Donor details
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorDoc, setDonorDoc] = useState('');
  const [donorMessage, setDonorMessage] = useState('');

  // Payment Method
  const [paymentMethod, setPaymentMethod] = useState<'wompi' | 'bank_transfer' | 'international'>('wompi');

  // Processing state & Receipt
  const [isProcessing, setIsProcessing] = useState(false);
  const [simulationResult, setSimulationResult] = useState<DonationRecord | null>(null);
  const [copiedBank, setCopiedBank] = useState(false);
  const [formError, setFormError] = useState('');

  // Keep synced if selectedDonation changed from other components
  React.useEffect(() => {
    if (selectedDonation.amount) {
      setAmount(selectedDonation.amount);
      setFrequency(selectedDonation.frequency);
      if (selectedDonation.program) setProgram(selectedDonation.program);
    }
  }, [selectedDonation]);

  const presetAmountsCOP = [40000, 80000, 120000, 160000, 200000, 500000];
  const presetAmountsUSD = [10, 20, 30, 40, 50, 125];

  const currentPresets = currency === 'COP' ? presetAmountsCOP : presetAmountsUSD;

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(organizationInfo.accountNumber);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!donorName.trim()) {
      setFormError('Por favor ingresa tu nombre completo.');
      return;
    }
    if (!donorEmail.trim() || !donorEmail.includes('@')) {
      setFormError('Por favor ingresa un correo electrónico válido.');
      return;
    }

    const finalAmount = isCustom ? parseFloat(customAmount) : amount;
    if (!finalAmount || finalAmount <= 0) {
      setFormError('Por favor ingresa un monto válido para tu donación.');
      return;
    }

    setIsProcessing(true);

    // Simulate secure backend verification and gateway response
    setTimeout(() => {
      setIsProcessing(false);

      const record: DonationRecord = {
        id: `LSP-${Date.now().toString().slice(-6)}`,
        donorName,
        email: donorEmail,
        phone: donorPhone,
        documentId: donorDoc || 'N/A',
        amount: finalAmount,
        currency,
        frequency,
        program,
        paymentMethod,
        status: 'approved',
        reference: `WPI-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
        timestamp: new Date().toLocaleString('es-CO', {
          dateStyle: 'medium',
          timeStyle: 'short',
        }),
        message: donorMessage,
      };

      addDonationRecord(record);
      setSimulationResult(record);
    }, 1200);
  };

  const handleResetForm = () => {
    setSimulationResult(null);
    setDonorName('');
    setDonorEmail('');
    setDonorPhone('');
    setDonorDoc('');
    setDonorMessage('');
    setIsCustom(false);
  };

  return (
    <section id="donar" className="py-20 lg:py-28 bg-[#FDFBF7] text-[#1E1B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF6B5E] mb-2">
            <Heart className="w-4 h-4 fill-[#FF6B5E]" />
            <span>Sembrando Esperanza</span>
            <span aria-hidden="true">·</span>
            <span>Canal Oficial de Aportes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#2D2B50] [text-wrap:balance]">
            Apoya a LIVES SAVED PROJECT
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            Tu contribución permite que los niños de Bocachica continúen recibiendo educación de calidad, 
            nutrición y protección. Cada aporte cuenta con verificación y rendición de cuentas oficial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Official Institutional Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md space-y-6">
              
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <Building className="w-5 h-5 text-[#2D2B50]" />
                  <span className="font-serif text-lg font-bold text-[#2D2B50]">
                    Información Institucional Oficial
                  </span>
                </div>
                <button
                  onClick={() => setIsAdminOpen(true)}
                  className="text-xs text-[#FF6B5E] hover:underline"
                >
                  Configurar
                </button>
              </div>

              {/* Entity info */}
              <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                <div>
                  <span className="text-xs text-stone-400 block font-sans">Entidad Receptora:</span>
                  <p className="font-semibold text-stone-900">{organizationInfo.legalName}</p>
                  <p className="text-xs text-stone-500">{organizationInfo.churchName}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <span className="text-xs text-stone-400 block font-sans">NIT / Identificación:</span>
                    <p className="font-semibold text-stone-900 tabular-nums">{organizationInfo.nit}</p>
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 block font-sans">Sede Principal:</span>
                    <p className="font-semibold text-stone-900">{organizationInfo.city}</p>
                  </div>
                </div>
              </div>

              {/* Official Bank Account Box */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/90 space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
                  <span>Cuenta Bancaria Oficial Colombia:</span>
                  <span className="font-semibold text-stone-800">{organizationInfo.bankName}</span>
                </div>
                
                <div className="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-stone-200">
                  <div className="text-xs">
                    <span className="text-stone-400 block text-[10px] uppercase">{organizationInfo.accountType}</span>
                    <span className="font-mono font-bold text-stone-900 text-sm">{organizationInfo.accountNumber}</span>
                  </div>
                  <button
                    onClick={handleCopyAccount}
                    className="p-1.5 text-stone-500 hover:text-[#2D2B50] rounded-lg hover:bg-stone-100 transition-colors"
                    title="Copiar número de cuenta"
                  >
                    {copiedBank ? <Check className="w-4 h-4 text-[#00E51B]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[11px] text-stone-500">
                  Titular: {organizationInfo.accountHolder}
                </p>
              </div>

              {/* Direct WhatsApp Contact */}
              <div className="p-4 rounded-2xl bg-[#00E51B]/10 border border-[#00E51B]/30 flex items-start gap-3 text-xs sm:text-sm">
                <Phone className="w-5 h-5 text-[#00E51B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Línea de Atención y Soporte:</span>
                  <a
                    href={organizationInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2D2B50] font-semibold hover:underline block mt-0.5"
                  >
                    WhatsApp: {organizationInfo.whatsapp}
                  </a>
                  <span className="text-[11px] text-stone-500 block mt-0.5">
                    Envía tu comprobante de transferencia para confirmación inmediata y certificado.
                  </span>
                </div>
              </div>

              {/* Closing Inspiring Quote (Mockup Requirement) */}
              <div className="p-4 border-l-2 border-[#FF6B5E] pl-4 italic text-stone-700 text-xs sm:text-sm bg-stone-50/70 rounded-r-xl">
                «Sembrar emocionalmente es el primer paso para construir un futuro lleno de esperanza y oportunidades.»
              </div>

            </div>

            {/* Security Guarantee Badge */}
            <div className="p-4 rounded-2xl bg-white border border-stone-200 flex items-center gap-3 text-xs text-stone-600 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#00E51B] shrink-0" />
              <span>
                Transacciones seguras mediante pasarela certificada Wompi. No almacenamos datos de tarjetas en el servidor.
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Donation Form / Receipt (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl">
              
              {simulationResult ? (
                /* SUCCESSFUL DONATION RECEIPT VIEW */
                <div className="space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
                  
                  <div className="w-16 h-16 bg-[#00E51B]/20 text-[#00E51B] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#00E51B]">
                      Transacción Aprobada
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2B50] mt-1">
                      ¡Muchas gracias por tu generosidad, {simulationResult.donorName}!
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-md mx-auto">
                      Tu aporte ha sido registrado con éxito. Hemos enviado un correo de confirmación con los detalles a{' '}
                      <strong>{simulationResult.email}</strong>.
                    </p>
                  </div>

                  {/* Printable Voucher Card */}
                  <div className="text-left bg-stone-50 rounded-2xl p-6 border border-stone-200 text-xs sm:text-sm space-y-3 font-sans">
                    <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                      <span className="text-stone-500">Comprobante No:</span>
                      <span className="font-mono font-bold text-stone-900">{simulationResult.id}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Monto Aportado:</span>
                      <span className="font-bold text-stone-900 text-base tabular-nums">
                        {simulationResult.currency === 'COP' ? `$${simulationResult.amount.toLocaleString()} COP` : `$${simulationResult.amount.toLocaleString()} USD`}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Modalidad:</span>
                      <span className="font-medium text-stone-800 capitalize">
                        {simulationResult.frequency === 'monthly' ? 'Mensual Recurrente' : 'Donación Única'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Destino:</span>
                      <span className="font-medium text-stone-800">{simulationResult.program}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Referencia de Pago:</span>
                      <span className="font-mono text-stone-700">{simulationResult.reference}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-stone-200 pt-2 text-[11px] text-stone-400">
                      <span>Fecha y hora:</span>
                      <span>{simulationResult.timestamp}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => window.print()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Imprimir comprobante</span>
                    </button>
                    <button
                      onClick={handleResetForm}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#2D2B50] hover:bg-[#201e38] rounded-xl transition-colors"
                    >
                      <span>Realizar otra donación</span>
                    </button>
                  </div>

                </div>
              ) : (
                /* DONATION FORM */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Frequency Toggle */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                      Frecuencia del Aporte:
                    </label>
                    <div className="grid grid-cols-2 gap-3 p-1 bg-stone-100 rounded-2xl">
                      <button
                        type="button"
                        onClick={() => setFrequency('monthly')}
                        className={`py-3 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                          frequency === 'monthly'
                            ? 'bg-[#2D2B50] text-white shadow-md'
                            : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        Mensual Recurrente (Padrino)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFrequency('single')}
                        className={`py-3 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                          frequency === 'single'
                            ? 'bg-[#2D2B50] text-white shadow-md'
                            : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        Donación Única
                      </button>
                    </div>
                  </div>

                  {/* Destination Program */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                      Destino de la Donación:
                    </label>
                    <select
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      className="w-full p-3.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#FF6B5E]"
                    >
                      <option value="Fondo General de Operaciones">Fondo General (Donde más se necesite)</option>
                      <option value="Refuerzo Académico y Educación">Refuerzo Académico y Educación</option>
                      <option value="Construcción Auditorio y Nuevos Salones">Construcción Auditorio y Nuevos Salones</option>
                      <option value="Nutrición y Refrigerios Diarios">Nutrición y Refrigerios Diarios</option>
                      <option value="Artes, Música y Cultura">Artes, Música y Cultura</option>
                      <option value="Salud Emocional y Psicología">Salud Emocional y Psicología</option>
                      <option value="Nuevos Programas Tecnológicos 2026">Nuevos Programas Tecnológicos 2026</option>
                    </select>
                  </div>

                  {/* Amount Selector */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-stone-500">
                        Selecciona el Monto:
                      </label>
                      <div className="text-xs flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setCurrency('COP')}
                          className={`font-semibold ${currency === 'COP' ? 'text-[#FF6B5E] underline' : 'text-stone-400'}`}
                        >
                          COP
                        </button>
                        <span className="text-stone-300">|</span>
                        <button
                          type="button"
                          onClick={() => setCurrency('USD')}
                          className={`font-semibold ${currency === 'USD' ? 'text-[#FF6B5E] underline' : 'text-stone-400'}`}
                        >
                          USD
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 mb-3">
                      {currentPresets.map((val) => {
                        const isSelected = !isCustom && amount === val;
                        return (
                          <button
                            key={val}
                            type="button"
                            onClick={() => {
                              setAmount(val);
                              setIsCustom(false);
                            }}
                            className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold border transition-all tabular-nums ${
                              isSelected
                                ? 'bg-[#FF6B5E] text-white border-[#FF6B5E] shadow-sm'
                                : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-300'
                            }`}
                          >
                            {currency === 'COP' ? `$${val.toLocaleString()}` : `$${val}`}
                          </button>
                        );
                      })}
                    </div>

                    {/* Custom Amount option */}
                    <div className="mt-2">
                      <button
                        type="button"
                        onClick={() => setIsCustom(!isCustom)}
                        className="text-xs font-semibold text-[#2D2B50] hover:text-[#FF6B5E] underline"
                      >
                        {isCustom ? 'Volver a montos sugeridos' : 'O ingresar otro monto libre'}
                      </button>

                      {isCustom && (
                        <div className="mt-2 relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 font-semibold text-sm">
                            {currency} $
                          </span>
                          <input
                            type="number"
                            min="5"
                            placeholder="Ingresa el monto personalizado"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="w-full pl-16 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FF6B5E]"
                            required
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Donor Info Inputs */}
                  <div className="space-y-3 pt-2 border-t border-stone-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                      Datos del Donante:
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          placeholder="Nombre y Apellidos *"
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                          className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B5E]"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Correo electrónico *"
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                          className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B5E]"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Teléfono / WhatsApp"
                          value={donorPhone}
                          onChange={(e) => setDonorPhone(e.target.value)}
                          className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B5E]"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Documento / Cédula / NIT"
                          value={donorDoc}
                          onChange={(e) => setDonorDoc(e.target.value)}
                          className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B5E]"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        rows={2}
                        placeholder="Mensaje de apoyo, bendición o dedicatoria (opcional)"
                        value={donorMessage}
                        onChange={(e) => setDonorMessage(e.target.value)}
                        className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B5E]"
                      />
                    </div>
                  </div>

                  {/* Payment Method Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                      Método de Pago Preferido:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('wompi')}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          paymentMethod === 'wompi'
                            ? 'border-[#2D2B50] bg-[#2D2B50]/5 ring-1 ring-[#2D2B50]'
                            : 'border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <CreditCard className="w-4 h-4 text-[#FF6B5E]" />
                          <span className="font-bold text-xs text-stone-900">Pasarela Wompi</span>
                        </div>
                        <p className="text-[10px] text-stone-500">Tarjetas, PSE, Nequi y Bancolombia</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('bank_transfer')}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          paymentMethod === 'bank_transfer'
                            ? 'border-[#2D2B50] bg-[#2D2B50]/5 ring-1 ring-[#2D2B50]'
                            : 'border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Building className="w-4 h-4 text-[#35D5C5]" />
                          <span className="font-bold text-xs text-stone-900">Transferencia Bancaria</span>
                        </div>
                        <p className="text-[10px] text-stone-500">Consignación directa Bancolombia</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('international')}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          paymentMethod === 'international'
                            ? 'border-[#2D2B50] bg-[#2D2B50]/5 ring-1 ring-[#2D2B50]'
                            : 'border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Heart className="w-4 h-4 text-[#00E51B]" />
                          <span className="font-bold text-xs text-stone-900">Internacional</span>
                        </div>
                        <p className="text-[10px] text-stone-500">Donantes en el exterior (USD)</p>
                      </button>
                    </div>
                  </div>

                  {formError && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full py-4 text-sm sm:text-base font-semibold text-white bg-[#FF6B5E] hover:bg-[#ff5747] active:scale-[0.99] rounded-xl shadow-lg shadow-[#FF6B5E]/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Validando transacción segura...</span>
                        </>
                      ) : (
                        <>
                          <Heart className="w-5 h-5 fill-white/80" />
                          <span>
                            Completar Donación de {currency === 'COP' ? `$${(isCustom ? parseFloat(customAmount || '0') : amount).toLocaleString()} COP` : `$${(isCustom ? parseFloat(customAmount || '0') : amount).toLocaleString()} USD`}
                          </span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-stone-400 text-center mt-2">
                      Al donar confirmas el monto y aceptas ser contactado para envío del certificado de donación.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
