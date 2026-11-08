export type Currency = 'COP' | 'USD';

export type ProjectStatus = 'Planeado' | 'En ejecución' | 'Finalizado';

export interface SocialProgram {
  id: string;
  title: string;
  category: string;
  color: string; // hex
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  curriculum: string[];
  schedule: string;
  beneficiaries: string;
  impactObjective: string;
}

export interface NewProgram2026 {
  id: string;
  number: string;
  title: string;
  tagline: string;
  color: string;
  description: string;
  opportunities: string[];
  status: 'Lanzamiento 2026' | 'Fase de equipamiento' | 'Convocatoria abierta';
}

export interface StrategicProject {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  category: 'Infraestructura' | 'Educación' | 'Sostenibilidad' | 'Servicios básicos';
  fundingTargetUSD?: number;
  featured?: boolean;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  tagline: string;
  amountCOP: number;
  amountUSD: number;
  periodicity: 'mensual';
  purpose: string;
  highlights: string[];
  recommended?: boolean;
  color: string;
}

export interface FinancialProgress {
  targetUSD: number;
  raisedUSD: number;
  lastUpdated: string;
  verifiedNotes: string;
  auditoriumPhase: string;
}

export interface OrganizationInfo {
  legalName: string;
  churchName: string;
  nit: string;
  whatsapp: string;
  whatsappUrl: string;
  email: string;
  address: string;
  city: string;
  bankName: string;
  accountType: string;
  accountNumber: string;
  accountHolder: string;
  wompiPublicKey: string; // e.g. pub_prod_... or pub_test_...
  wompiActive: boolean;
}

export interface DonationRecord {
  id: string;
  donorName: string;
  email: string;
  phone: string;
  documentId: string;
  amount: number;
  currency: Currency;
  frequency: 'single' | 'monthly';
  program: string;
  paymentMethod: 'wompi' | 'bank_transfer' | 'international';
  status: 'approved' | 'pending' | 'rejected';
  reference: string;
  timestamp: string;
  message?: string;
}
