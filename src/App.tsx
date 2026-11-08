/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BocachicaSection } from './components/BocachicaSection';
import { ProgramsSection } from './components/ProgramsSection';
import { NewPrograms2026 } from './components/NewPrograms2026';
import { ProjectsSection } from './components/ProjectsSection';
import { ProgressSection } from './components/ProgressSection';
import { PadrinoSection } from './components/PadrinoSection';
import { SubscriptionPlans } from './components/SubscriptionPlans';
import { DonationSection } from './components/DonationSection';
import { Footer } from './components/Footer';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { AdminModal } from './components/AdminModal';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1E1B2E]">
        {/* Navigation Bar (Sticky 3-Zone) */}
        <Navbar />

        {/* Main Content Sections (10 Sections) */}
        <main className="flex-1">
          {/* Sección 1: Portada Principal (Hero) */}
          <Hero />

          {/* Sección 2: Presentación de LIVES SAVED PROJECT & 4 Ejes */}
          <AboutSection />

          {/* Sección 3: Bocachica: Un pueblo en busca de oportunidades */}
          <BocachicaSection />

          {/* Sección 4: Programas Sociales Activos */}
          <ProgramsSection />

          {/* Sección 5: Nuevos Programas para 2026 */}
          <NewPrograms2026 />

          {/* Sección 6: Proyectos en Marcha & Auditorio/Salones */}
          <ProjectsSection />

          {/* Sección 7: Avances de Obra y Necesidades Pendientes */}
          <ProgressSection />

          {/* Sección 8: Conviértete en un Padrino */}
          <PadrinoSection />

          {/* Sección 9: Planes de Suscripción y Aportes */}
          <SubscriptionPlans />

          {/* Sección 10: Apoya a LIVES SAVED PROJECT (Donación Oficial & Wompi) */}
          <DonationSection />
        </main>

        {/* Institutional Footer */}
        <Footer />

        {/* Modals & Dialogs */}
        <ProgramDetailModal />
        <AdminModal />
      </div>
    </AppProvider>
  );
}
