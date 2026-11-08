import React, { useState } from 'react';
import {
  X,
  Save,
  RotateCcw,
  Download,
  Upload,
  Check,
  Building,
  DollarSign,
  Layers,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ProjectStatus } from '../types';

export const AdminModal: React.FC = () => {
  const {
    isAdminOpen,
    setIsAdminOpen,
    financialProgress,
    updateFinancialProgress,
    organizationInfo,
    updateOrganizationInfo,
    projects,
    updateProject,
    plans,
    updatePlan,
    resetToDefaults,
    exportConfigJSON,
    importConfigJSON,
  } = useApp();

  const [activeTab, setActiveTab] = useState<'financial' | 'organization' | 'projects' | 'plans' | 'backup'>('financial');
  const [saveToast, setSaveToast] = useState(false);
  const [importJsonText, setImportJsonText] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);

  // Financial form state
  const [targetUSD, setTargetUSD] = useState(financialProgress.targetUSD);
  const [raisedUSD, setRaisedUSD] = useState(financialProgress.raisedUSD);
  const [lastUpdated, setLastUpdated] = useState(financialProgress.lastUpdated);
  const [auditoriumPhase, setAuditoriumPhase] = useState(financialProgress.auditoriumPhase);
  const [verifiedNotes, setVerifiedNotes] = useState(financialProgress.verifiedNotes);

  // Org form state
  const [legalName, setLegalName] = useState(organizationInfo.legalName);
  const [nit, setNit] = useState(organizationInfo.nit);
  const [whatsapp, setWhatsapp] = useState(organizationInfo.whatsapp);
  const [email, setEmail] = useState(organizationInfo.email);
  const [bankName, setBankName] = useState(organizationInfo.bankName);
  const [accountType, setAccountType] = useState(organizationInfo.accountType);
  const [accountNumber, setAccountNumber] = useState(organizationInfo.accountNumber);
  const [accountHolder, setAccountHolder] = useState(organizationInfo.accountHolder);
  const [wompiKey, setWompiKey] = useState(organizationInfo.wompiPublicKey);

  if (!isAdminOpen) return null;

  const handleSaveAll = () => {
    updateFinancialProgress({
      targetUSD,
      raisedUSD,
      lastUpdated,
      auditoriumPhase,
      verifiedNotes,
    });

    updateOrganizationInfo({
      legalName,
      nit,
      whatsapp,
      whatsappUrl: `https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`,
      email,
      bankName,
      accountType,
      accountNumber,
      accountHolder,
      wompiPublicKey: wompiKey,
    });

    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  const handleDownloadBackup = () => {
    const json = exportConfigJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lives_saved_config_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportSubmit = () => {
    if (!importJsonText.trim()) return;
    const ok = importConfigJSON(importJsonText);
    if (ok) {
      setImportStatus('Configuración restaurada con éxito.');
      setTimeout(() => setImportStatus(null), 3000);
    } else {
      setImportStatus('Error: formato JSON no válido.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={() => setIsAdminOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-panel-title"
    >
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-stone-200 text-[#1E1B2E] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#2D2B50] p-6 text-white flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#35D5C5] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Panel de Administración Institucional</span>
            </div>
            <h3 id="admin-panel-title" className="font-serif text-xl sm:text-2xl font-bold mt-0.5">
              Configuración y Datos Oficiales de Lives Saved Project
            </h3>
          </div>
          <button
            onClick={() => setIsAdminOpen(false)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Cerrar panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-stone-200 bg-stone-50 px-6 gap-2 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('financial')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'financial'
                ? 'border-[#FF6B5E] text-[#2D2B50]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Metas y Financiación
          </button>
          <button
            onClick={() => setActiveTab('organization')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'organization'
                ? 'border-[#FF6B5E] text-[#2D2B50]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Datos Institucionales & Bancos
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'projects'
                ? 'border-[#FF6B5E] text-[#2D2B50]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Estados de Proyectos
          </button>
          <button
            onClick={() => setActiveTab('plans')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'plans'
                ? 'border-[#FF6B5E] text-[#2D2B50]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Valores de Planes
          </button>
          <button
            onClick={() => setActiveTab('backup')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'backup'
                ? 'border-[#FF6B5E] text-[#2D2B50]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Copia de Seguridad (JSON)
          </button>
        </div>

        {/* Tab Contents (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          
          {/* TAB 1: Financial Progress */}
          {activeTab === 'financial' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Los cambios realizados aquí recalculan instantáneamente la barra de porcentaje, 
                  los valores recaudados y el saldo pendiente en la Sección 7 de la página.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                    Meta de Financiación (USD)
                  </label>
                  <input
                    type="number"
                    value={targetUSD}
                    onChange={(e) => setTargetUSD(Number(e.target.value))}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-bold tabular-nums"
                  />
                  <span className="text-[11px] text-stone-400">Meta histórica de la maqueta: $50,000 USD</span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                    Fondos Recaudados Reales (USD)
                  </label>
                  <input
                    type="number"
                    value={raisedUSD}
                    onChange={(e) => setRaisedUSD(Number(e.target.value))}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-bold tabular-nums"
                  />
                  <span className="text-[11px] text-stone-400">
                    Avance: {Math.min(100, Math.round((raisedUSD / (targetUSD || 1)) * 100))}%
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                    Fecha de Actualización Visible
                  </label>
                  <input
                    type="text"
                    value={lastUpdated}
                    onChange={(e) => setLastUpdated(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm"
                    placeholder="Ej. Noviembre 2026"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                    Fase de la Obra en Terreno
                  </label>
                  <input
                    type="text"
                    value={auditoriumPhase}
                    onChange={(e) => setAuditoriumPhase(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                  Notas de Verificación Oficial
                </label>
                <textarea
                  rows={2}
                  value={verifiedNotes}
                  onChange={(e) => setVerifiedNotes(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm"
                />
              </div>
            </div>
          )}

          {/* TAB 2: Organization & Bank Info */}
          {activeTab === 'organization' && (
            <div className="space-y-4">
              <p className="text-xs text-stone-600">
                Información oficial suministrada por la Iglesia En el Lugar Santísimo para donaciones directas y contacto.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                    Nombre Legal Institucional
                  </label>
                  <input
                    type="text"
                    value={legalName}
                    onChange={(e) => setLegalName(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                    NIT / Identificación Tributaria
                  </label>
                  <input
                    type="text"
                    value={nit}
                    onChange={(e) => setNit(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                    Teléfono / WhatsApp Oficial
                  </label>
                  <input
                    type="text"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                    Correo Electrónico Oficial
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                    Banco Receptor
                  </label>
                  <input
                    type="text"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                    Tipo de Cuenta
                  </label>
                  <input
                    type="text"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                    Número de Cuenta Bancaria
                  </label>
                  <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm font-mono font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                    Titular de la Cuenta
                  </label>
                  <input
                    type="text"
                    value={accountHolder}
                    onChange={(e) => setAccountHolder(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                    Llave Pública Wompi (Checkout Widget)
                  </label>
                  <input
                    type="text"
                    value={wompiKey}
                    onChange={(e) => setWompiKey(e.target.value)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-mono"
                    placeholder="pub_prod_... o pub_test_..."
                  />
                  <span className="text-[11px] text-stone-400">
                    Solo llave pública de frontend. Nunca introduzcas llaves privadas o secretos.
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Projects Status */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <p className="text-xs text-stone-600">
                Actualiza el estado de ejecución y descripción de los proyectos de infraestructura:
              </p>

              <div className="space-y-3">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-xl border border-stone-200 bg-stone-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                  >
                    <div className="max-w-md">
                      <p className="font-semibold text-stone-900 text-sm">{proj.title}</p>
                      <span className="text-xs text-stone-500">{proj.category}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <label className="text-xs font-medium text-stone-600">Estado:</label>
                      <select
                        value={proj.status}
                        onChange={(e) =>
                          updateProject(proj.id, {
                            status: e.target.value as ProjectStatus,
                          })
                        }
                        className="p-2 text-xs font-semibold rounded-lg bg-white border border-stone-300 focus:outline-none"
                      >
                        <option value="Planeado">Planeado</option>
                        <option value="En ejecución">En ejecución</option>
                        <option value="Finalizado">Finalizado</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Subscription Plan Prices */}
          {activeTab === 'plans' && (
            <div className="space-y-4">
              <p className="text-xs text-stone-600">
                Ajusta las tarifas en COP y USD de cada nivel de apadrinamiento según las necesidades reales del proyecto:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {plans.map((plan) => (
                  <div key={plan.id} className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                    <p className="font-bold text-sm text-[#2D2B50]">{plan.name}</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] font-bold text-stone-500 uppercase">Monto COP</label>
                        <input
                          type="number"
                          value={plan.amountCOP}
                          onChange={(e) =>
                            updatePlan(plan.id, { amountCOP: Number(e.target.value) })
                          }
                          className="w-full p-2 bg-white border border-stone-300 rounded-lg text-xs font-bold tabular-nums"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-stone-500 uppercase">Monto USD</label>
                        <input
                          type="number"
                          value={plan.amountUSD}
                          onChange={(e) =>
                            updatePlan(plan.id, { amountUSD: Number(e.target.value) })
                          }
                          className="w-full p-2 bg-white border border-stone-300 rounded-lg text-xs font-bold tabular-nums"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: Backup & Restore */}
          {activeTab === 'backup' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm">Exportar Configuración Actual</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Descarga un archivo JSON con todos los datos institucionales, presupuestos, estados y planes configurados. 
                  Guarda este archivo como respaldo seguro.
                </p>
                <button
                  onClick={handleDownloadBackup}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#2D2B50] hover:bg-[#201e38] rounded-xl transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Descargar Respaldo JSON</span>
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm">Restaurar o Importar Configuración</h4>
                <p className="text-xs text-stone-600">
                  Pega el contenido JSON de una copia de seguridad para restaurar los valores:
                </p>
                <textarea
                  rows={4}
                  value={importJsonText}
                  onChange={(e) => setImportJsonText(e.target.value)}
                  placeholder="Pega aquí el contenido del archivo .json"
                  className="w-full p-3 font-mono text-xs bg-white border border-stone-300 rounded-xl"
                />
                <button
                  onClick={handleImportSubmit}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-800 bg-stone-200 hover:bg-stone-300 rounded-xl transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  <span>Restaurar desde JSON</span>
                </button>
                {importStatus && (
                  <p className="text-xs font-semibold text-[#00E51B] mt-1">{importStatus}</p>
                )}
              </div>

              <div className="pt-2 border-t border-stone-200 flex justify-between items-center">
                <span className="text-xs text-stone-500">¿Deseas reiniciar a los valores de la maqueta original?</span>
                <button
                  onClick={resetToDefaults}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restablecer Valores Iniciales</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Actions Bar */}
        <div className="bg-stone-100 p-4 sm:p-6 border-t border-stone-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            {saveToast && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00E51B] bg-[#00E51B]/10 px-3 py-1 rounded-lg">
                <Check className="w-3.5 h-3.5" />
                ¡Cambios guardados con éxito!
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAdminOpen(false)}
              className="px-4 py-2.5 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Cerrar
            </button>
            <button
              onClick={handleSaveAll}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#FF6B5E] hover:bg-[#ff5747] active:scale-[0.98] rounded-xl shadow-md transition-all"
            >
              <Save className="w-4 h-4" />
              <span>Guardar Todos los Cambios</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
