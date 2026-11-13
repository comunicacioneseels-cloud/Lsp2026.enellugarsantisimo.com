/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { AdminModal } from './components/AdminModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { InitialVideoModal } from './components/InitialVideoModal';
import { setGoogleLanguage } from './utils/translate';

// Independent Pages
import { InicioPage } from './pages/InicioPage';
import { IniciativaSocialPage } from './pages/IniciativaSocialPage';
import { ProgramasActualesPage } from './pages/ProgramasActualesPage';
import { NuevosProgramasPage } from './pages/NuevosProgramasPage';
import { ProyectosPage } from './pages/ProyectosPage';
import { PlanesSuscripcionPage } from './pages/PlanesSuscripcionPage';
import { PlanPadrinoPage } from './pages/PlanPadrinoPage';
import { ApoyanosPage } from './pages/ApoyanosPage';

const PageRenderer: React.FC = () => {
  const { currentPage, language, activeProgramModal } = useApp();

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setGoogleLanguage(language);
    });
    return () => cancelAnimationFrame(id);
  }, [currentPage, language, activeProgramModal]);

  switch (currentPage) {
    case 'iniciativa-social':
      return <IniciativaSocialPage />;
    case 'programas-actuales':
      return <ProgramasActualesPage />;
    case 'nuevos-programas':
      return <NuevosProgramasPage />;
    case 'proyectos':
      return <ProyectosPage />;
    case 'planes-suscripcion':
      return <PlanesSuscripcionPage />;
    case 'plan-padrino':
      return <PlanPadrinoPage />;
    case 'apoyanos':
      return <ApoyanosPage />;
    case 'inicio':
    default:
      return <InicioPage />;
  }
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-[#1E1B2E] text-[#1E1B2E]">
        {/* Multi-page Top Navigation Bar */}
        <Navbar />

        {/* Independent Active Page View */}
        <main className="flex-1">
          <PageRenderer />
        </main>

        {/* Institutional Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Initial Welcome Video Pop-up */}
        <InitialVideoModal />

        {/* Modals & Dialogs */}
        <ProgramDetailModal />
        <AdminModal />
      </div>
    </AppProvider>
  );
}
