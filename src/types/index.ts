export type Currency = 'COP' | 'USD';

export type AppPage =
  | 'inicio'
  | 'iniciativa-social'
  | 'programas-actuales'
  | 'nuevos-programas'
  | 'proyectos'
  | 'planes-suscripcion'
  | 'plan-padrino'
  | 'apoyanos';

export type ProjectStatus = 'Planeado' | 'En ejecución' | 'Finalizado';

export interface ProgramImage {
  src: string;
  title: string;
  caption: string;
}

export interface SocialProgram {
  id: string;
  orderNumber: number;
  title: string;
  category: string;
  color: string; // hex
  iconName: string;
  shortDescription: string;
  bulletPoints: string[];
  fullDescription: string;
  curriculum: string[];
  schedule: string;
  beneficiaries: string;
  impactObjective: string;
  images: ProgramImage[];
}

export interface NewProgram2026 {
  id: string;
  number: string;
  orderNumber: number;
  title: string;
  tagline: string;
  color: string;
  bulletPoints: string[];
  description: string;
  opportunities: string[];
  status: 'Lanzamiento 2026' | 'Fase de equipamiento' | 'Convocatoria abierta';
  images: ProgramImage[];
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
  nit?: string;
  whatsapp: string;
  whatsappUrl: string;
  phoneUs?: string;
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
