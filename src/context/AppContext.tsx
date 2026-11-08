import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  initialFinancialProgress,
  initialOrganizationInfo,
  newPrograms2026,
  socialPrograms,
  strategicProjects,
  subscriptionPlans,
} from '../data/initialData';
import {
  AppPage,
  Currency,
  DonationRecord,
  FinancialProgress,
  NewProgram2026,
  OrganizationInfo,
  SocialProgram,
  StrategicProject,
  SubscriptionPlan,
} from '../types';

interface AppContextType {
  language: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;

  // Multi-page navigation state
  currentPage: AppPage;
  setCurrentPage: (page: AppPage) => void;
  navigateToPage: (page: AppPage, scrollId?: string) => void;

  financialProgress: FinancialProgress;
  updateFinancialProgress: (data: Partial<FinancialProgress>) => void;

  organizationInfo: OrganizationInfo;
  updateOrganizationInfo: (data: Partial<OrganizationInfo>) => void;

  projects: StrategicProject[];
  updateProject: (id: string, updates: Partial<StrategicProject>) => void;

  plans: SubscriptionPlan[];
  updatePlan: (id: string, updates: Partial<SubscriptionPlan>) => void;

  programs: SocialProgram[];
  newPrograms: NewProgram2026[];

  // Donation Checkout Preselection state
  selectedDonation: {
    amount: number;
    currency: Currency;
    frequency: 'single' | 'monthly';
    program: string;
    planName?: string;
  };
  selectDonationPlan: (
    amount: number,
    currency: Currency,
    frequency: 'single' | 'monthly',
    program?: string,
    planName?: string
  ) => void;

  // Modals & Panels
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;

  activeProgramModal: SocialProgram | null;
  setActiveProgramModal: (prog: SocialProgram | null) => void;

  // Donation records created in this session
  donationsHistory: DonationRecord[];
  addDonationRecord: (record: DonationRecord) => void;

  // Administration utilities
  resetToDefaults: () => void;
  exportConfigJSON: () => string;
  importConfigJSON: (jsonString: string) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  FINANCIAL: 'lsp_financial_v1',
  ORGANIZATION: 'lsp_org_v1',
  PROJECTS: 'lsp_projects_v1',
  PLANS: 'lsp_plans_v1',
  HISTORY: 'lsp_donations_v1',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [currency, setCurrency] = useState<Currency>('COP');

  // Multi-page navigation state
  const parseHashToPage = (): AppPage => {
    const raw = window.location.hash.replace('#', '').trim();
    const validPages: AppPage[] = [
      'inicio',
      'iniciativa-social',
      'programas-actuales',
      'nuevos-programas',
      'proyectos',
      'planes-suscripcion',
      'plan-padrino',
      'apoyanos',
    ];
    if (validPages.includes(raw as AppPage)) {
      return raw as AppPage;
    }
    return 'inicio';
  };

  const [currentPage, setCurrentPage] = useState<AppPage>(parseHashToPage);

  // Sync browser back/forward buttons & URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(parseHashToPage());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (page: AppPage, scrollId?: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    if (scrollId) {
      setTimeout(() => {
        const el = document.getElementById(scrollId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const [financialProgress, setFinancialProgress] = useState<FinancialProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FINANCIAL);
      return saved ? JSON.parse(saved) : initialFinancialProgress;
    } catch {
      return initialFinancialProgress;
    }
  });

  const [organizationInfo, setOrganizationInfo] = useState<OrganizationInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ORGANIZATION);
      return saved ? JSON.parse(saved) : initialOrganizationInfo;
    } catch {
      return initialOrganizationInfo;
    }
  });

  const [projects, setProjects] = useState<StrategicProject[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      return saved ? JSON.parse(saved) : strategicProjects;
    } catch {
      return strategicProjects;
    }
  });

  const [plans, setPlans] = useState<SubscriptionPlan[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PLANS);
      return saved ? JSON.parse(saved) : subscriptionPlans;
    } catch {
      return subscriptionPlans;
    }
  });

  const [donationsHistory, setDonationsHistory] = useState<DonationRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.HISTORY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Preselected donation flow
  const [selectedDonation, setSelectedDonation] = useState<{
    amount: number;
    currency: Currency;
    frequency: 'single' | 'monthly';
    program: string;
    planName?: string;
  }>({
    amount: 80000,
    currency: 'COP',
    frequency: 'monthly',
    program: 'General - Donde más se necesite',
    planName: 'Plan Esperanza',
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activeProgramModal, setActiveProgramModal] = useState<SocialProgram | null>(null);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FINANCIAL, JSON.stringify(financialProgress));
  }, [financialProgress]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ORGANIZATION, JSON.stringify(organizationInfo));
  }, [organizationInfo]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PLANS, JSON.stringify(plans));
  }, [plans]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(donationsHistory));
  }, [donationsHistory]);

  const updateFinancialProgress = (data: Partial<FinancialProgress>) => {
    setFinancialProgress((prev) => ({ ...prev, ...data }));
  };

  const updateOrganizationInfo = (data: Partial<OrganizationInfo>) => {
    setOrganizationInfo((prev) => ({ ...prev, ...data }));
  };

  const updateProject = (id: string, updates: Partial<StrategicProject>) => {
    setProjects((prev) =>
      prev.map((proj) => (proj.id === id ? { ...proj, ...updates } : proj))
    );
  };

  const updatePlan = (id: string, updates: Partial<SubscriptionPlan>) => {
    setPlans((prev) =>
      prev.map((plan) => (plan.id === id ? { ...plan, ...updates } : plan))
    );
  };

  const selectDonationPlan = (
    amount: number,
    curr: Currency,
    frequency: 'single' | 'monthly',
    program = 'General - Donde más se necesite',
    planName?: string
  ) => {
    setSelectedDonation({
      amount,
      currency: curr,
      frequency,
      program,
      planName,
    });
    setCurrency(curr);

    // Navigate to Apóyanos page and focus on donation form
    navigateToPage('apoyanos', 'donar');
  };

  const addDonationRecord = (record: DonationRecord) => {
    setDonationsHistory((prev) => [record, ...prev]);
    // If approved and in USD or COP, adjust the raised amount dynamically!
    if (record.status === 'approved') {
      const addedUSD =
        record.currency === 'USD'
          ? record.amount
          : Math.round(record.amount / 4000); // approximate conversion
      setFinancialProgress((prev) => ({
        ...prev,
        raisedUSD: prev.raisedUSD + addedUSD,
      }));
    }
  };

  const resetToDefaults = () => {
    setFinancialProgress(initialFinancialProgress);
    setOrganizationInfo(initialOrganizationInfo);
    setProjects(strategicProjects);
    setPlans(subscriptionPlans);
    localStorage.clear();
  };

  const exportConfigJSON = () => {
    const config = {
      financialProgress,
      organizationInfo,
      projects,
      plans,
      exportedAt: new Date().toISOString(),
    };
    return JSON.stringify(config, null, 2);
  };

  const importConfigJSON = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.financialProgress) setFinancialProgress(parsed.financialProgress);
      if (parsed.organizationInfo) setOrganizationInfo(parsed.organizationInfo);
      if (parsed.projects) setProjects(parsed.projects);
      if (parsed.plans) setPlans(parsed.plans);
      return true;
    } catch (e) {
      console.error('Failed to parse config JSON', e);
      return false;
    }
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        currentPage,
        setCurrentPage,
        navigateToPage,
        financialProgress,
        updateFinancialProgress,
        organizationInfo,
        updateOrganizationInfo,
        projects,
        updateProject,
        plans,
        updatePlan,
        programs: socialPrograms,
        newPrograms: newPrograms2026,
        selectedDonation,
        selectDonationPlan,
        isAdminOpen,
        setIsAdminOpen,
        activeProgramModal,
        setActiveProgramModal,
        donationsHistory,
        addDonationRecord,
        resetToDefaults,
        exportConfigJSON,
        importConfigJSON,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
