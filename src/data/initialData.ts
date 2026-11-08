import {
  FinancialProgress,
  NewProgram2026,
  OrganizationInfo,
  SocialProgram,
  StrategicProject,
  SubscriptionPlan,
} from '../types';

export const initialFinancialProgress: FinancialProgress = {
  targetUSD: 50000,
  raisedUSD: 18500,
  lastUpdated: 'Noviembre 2026',
  verifiedNotes: 'Cifra histórica de referencia sujeta a actualización por la administración.',
  auditoriumPhase: 'Fase 1: Cimentación y muros estructurales aprobados.',
};

export const initialOrganizationInfo: OrganizationInfo = {
  legalName: 'Iglesia Cristiana En el Lugar Santísimo',
  churchName: 'Iglesia En el Lugar Santísimo',
  nit: '900.234.567-8', // Placeholder configurable en el panel
  whatsapp: '+57 300 123 4567',
  whatsappUrl: 'https://wa.me/573001234567?text=Hola,%20deseo%20apoyar%20a%20Lives%20Saved%20Project%20en%20Bocachica',
  email: 'comunicaciones.eels@gmail.com',
  address: 'Sector El Fuerte, Bocachica',
  city: 'Cartagena de Indias, Bolívar, Colombia',
  bankName: 'Bancolombia',
  accountType: 'Cuenta de Ahorros',
  accountNumber: '456-789012-34',
  accountHolder: 'Iglesia En el Lugar Santísimo',
  wompiPublicKey: 'pub_test_wompi_lives_saved_bocachica',
  wompiActive: true,
};

export const socialPrograms: SocialProgram[] = [
  {
    id: 'refuerzo-academico',
    title: 'Refuerzo Académico',
    category: 'Educación',
    color: '#35D5C5', // Turquesa
    iconName: 'BookOpen',
    shortDescription:
      'Acompañamiento escolar integral, tutoría en tareas, lectura comprensiva, matemáticas, inglés, español y ciencias sociales.',
    fullDescription:
      'Proporcionamos un entorno seguro y estimulante después de la jornada escolar, donde docentes y tutores voluntarios nivelan los conocimientos de los niños, fortalecen sus hábitos de estudio y previenen la deserción escolar temprana en la isla de Bocachica.',
    curriculum: [
      'Lectoescritura y comprensión de textos en español',
      'Razonamiento lógico-matemático y cálculo',
      'Inglés básico comunicativo para el contexto insular',
      'Ciencias sociales, historia caribeña y geografía',
      'Tutoría diaria y seguimiento a tareas escolares',
    ],
    schedule: 'Lunes a Jueves · 2:00 PM – 5:30 PM',
    beneficiaries: '120 niños y niñas entre 6 y 14 años',
    impactObjective:
      'Elevar el rendimiento escolar, reducir la tasa de repitencia y abrir puertas a educación media y técnica.',
  },
  {
    id: 'artes-creatividad',
    title: 'Artes y Creatividad',
    category: 'Cultura & Expresión',
    color: '#FF8A00', // Naranja
    iconName: 'Palette',
    shortDescription:
      'Música, percusión tradicional, artes plásticas, danza y desarrollo creativo para descubrir vocaciones y canalizar emociones.',
    fullDescription:
      'A través del arte conectamos con las ricas tradiciones culturales de Bocachica y dotamos a los jóvenes de herramientas para expresarse sanamente. Clases de percusión, guitarra, canto, pintura y teatro transforman el tiempo libre en desarrollo de talentos.',
    curriculum: [
      'Percusión tradicional afrocaribeña y ensamble musical',
      'Pintura mural, dibujo y técnicas plásticas',
      'Taller de expresión corporal y danza folclórica',
      'Teatro comunitario y expresión oral',
      'Exposición comunitaria anual de talentos',
    ],
    schedule: 'Viernes y Sábados · 9:00 AM – 12:30 PM',
    beneficiaries: '85 niños, niñas y adolescentes',
    impactObjective:
      'Fomentar la autoestima, la identidad cultural bocachiquera y prevenir la vinculación a dinámicas de riesgo.',
  },
  {
    id: 'educacion-cristiana',
    title: 'Educación Cristiana',
    category: 'Fe & Valores',
    color: '#321078', // Morado profundo
    iconName: 'HeartHandshake',
    shortDescription:
      'Discipulado, consejería pastoral, grupos de vida y estudio bíblico formativo para fundamentar la vida en principios de fe y amor.',
    fullDescription:
      'Como iniciativa de la Iglesia En el Lugar Santísimo, creemos que la verdadera transformación nace del corazón. Guiamos a niños, jóvenes y familias en el conocimiento de Dios, cultivando valores de servicio, perdón, integridad y esperanza viva.',
    curriculum: [
      'Estudio bíblico contextualizado para niños y adolescentes',
      'Grupos de vida semanales para edificación comunitaria',
      'Consejería pastoral familiar y orientación personal',
      'Jornadas de oración e intercesión por la comunidad',
      'Desarrollo de liderazgo ético y cristiano',
    ],
    schedule: 'Miércoles y Domingos · Horarios comunitarios',
    beneficiaries: 'Comunidad abierta, niños, jóvenes y padres',
    impactObjective:
      'Cimentar principios espirituales sólidos que restauren vidas y den un propósito trascendente a cada individuo.',
  },
  {
    id: 'trabajo-social',
    title: 'Trabajo Social',
    category: 'Comunidad',
    color: '#FF6B5E', // Coral
    iconName: 'Users',
    shortDescription:
      'Acompañamiento familiar domiciliario, mediación comunitaria y atención focalizada a necesidades urgentes y vulnerabilidad.',
    fullDescription:
      'Nuestras trabajadoras sociales visitan los hogares de Bocachica para diagnosticar situaciones de riesgo, apoyar en la consecución de documentos de identidad, coordinar ayudas de emergencia y conectar a las familias con redes de apoyo institucional.',
    curriculum: [
      'Caracterización sociodemográfica de familias beneficiarias',
      'Visitas domiciliarias de seguimiento y diagnóstico',
      'Rutas de atención a vulneración de derechos',
      'Apoyo en trámites de registro civil y seguridad social',
      'Gestión de donaciones y ayudas de primera necesidad',
    ],
    schedule: 'Atención continua con citas programadas',
    beneficiaries: 'Más de 140 familias de Bocachica',
    impactObjective:
      'Garantizar la protección de derechos fundamentales y brindar un puente humano de acompañamiento constante.',
  },
  {
    id: 'psicologia',
    title: 'Psicología',
    category: 'Salud Mental',
    color: '#35D5C5', // Turquesa
    iconName: 'Smile',
    shortDescription:
      'Orientación y acompañamiento psicosocial individual y grupal, manejo del duelo, resolución de conflictos y salud emocional.',
    fullDescription:
      'Brindamos un espacio seguro, confidencial y profesional para que niños y jóvenes procesen heridas emocionales, traumas comunitarios y dilemas personales, promoviendo el bienestar mental y la resiliencia.',
    curriculum: [
      'Atención psicosocial individual para niños y adolescentes',
      'Talleres de inteligencia emocional y regulación de la ira',
      'Prevención de consumo de sustancias y conductas de riesgo',
      'Acompañamiento en procesos de duelo y pérdida',
      'Estrategias de resolución pacífica de conflictos en el aula',
    ],
    schedule: 'Martes y Jueves · Previa remisión y valoración',
    beneficiaries: '60 usuarios en seguimiento activo',
    impactObjective:
      'Sanar heridas emocionales, fomentar la paz mental y empoderar a los jóvenes en la toma de decisiones asertivas.',
  },
  {
    id: 'nutricion-higiene',
    title: 'Nutrición e Higiene',
    category: 'Bienestar',
    color: '#00E51B', // Verde brillante
    iconName: 'Apple',
    shortDescription:
      'Educación en hábitos saludables, seguridad alimentaria, refrigerios nutritivos diarios y prevención de enfermedades transmitidas por agua.',
    fullDescription:
      'El aprendizaje requiere un cuerpo sano y bien nutrido. Suministramos refrigerios de alto valor proteico durante las jornadas de refuerzo y educamos a las familias en manipulación higiénica del agua en un contexto insular con desafíos de saneamiento.',
    curriculum: [
      'Refrigerios nutritivos balanceados diarios para participantes',
      'Monitoreo periódico de peso y talla infantil',
      'Talleres de tratamiento y almacenamiento seguro de agua',
      'Jornadas de lavado de manos e higiene bucodental',
      'Capacitación en cocina saludable con ingredientes locales',
    ],
    schedule: 'En cada jornada de programas · Lun a Vie',
    beneficiaries: '200+ raciones alimenticias por semana',
    impactObjective:
      'Erradicar el hambre en las horas de estudio, optimizar el desarrollo físico y prevenir infecciones comunes.',
  },
  {
    id: 'escuela-de-padres',
    title: 'Escuela de Padres',
    category: 'Familia',
    color: '#FFD000', // Amarillo
    iconName: 'Home',
    shortDescription:
      'Formación familiar, pautas de crianza positiva, comunicación asertiva en el hogar y fortalecimiento de los lazos afectivos.',
    fullDescription:
      'Transformar a un niño implica transformar su entorno familiar. En la Escuela de Padres creamos espacios de diálogo, escucha y capacitación donde madres, padres y cuidadores adquieren herramientas para guiar a sus hijos con amor, paciencia y firmeza.',
    curriculum: [
      'Pautas de crianza positiva y sin violencia física',
      'Comunicación afectiva y escucha activa entre padres e hijos',
      'Prevención de violencia intrafamiliar y roles compartidos',
      'Educación financiera para la economía del hogar insular',
      'Encuentros lúdicos y de reconciliación familiar',
    ],
    schedule: 'Sábados cada quince días · 3:00 PM – 5:30 PM',
    beneficiaries: '90 padres y cuidadores activos',
    impactObjective:
      'Construir hogares estables, afectuosos y protectores que respalden el crecimiento integral de cada niño.',
  },
];

export const newPrograms2026: NewProgram2026[] = [
  {
    id: 'emprendimiento',
    number: '01',
    title: 'Emprendimiento Comunitario',
    tagline: 'Creación de negocios locales y autonomía económica',
    color: '#FF8A00',
    description:
      'Capacitación práctica para jóvenes y madres de Bocachica en formulación de proyectos productivos, comercialización de productos artesanales, gastronomía local y modelos de microempresa sostenible.',
    opportunities: [
      'Modelos de negocio sostenibles para el entorno insular',
      'Finanzas básicas, fijación de precios y ahorro comunitario',
      'Marketing digital simple y ventas a visitantes de Cartagena',
      'Capital semilla inicial para los proyectos más destacados',
    ],
    status: 'Lanzamiento 2026',
  },
  {
    id: 'habilidades-tecnicas',
    number: '02',
    title: 'Habilidades Técnicas Virtuales',
    tagline: 'Conectando la isla con el mundo a través de la red',
    color: '#35D5C5',
    description:
      'Ruta formativa remota en alianza con institutos técnicos para certificar a jóvenes en habilidades laborales de alta demanda que puedan desempeñarse a distancia o en el sector turístico y de servicios.',
    opportunities: [
      'Conexión satelital de alta velocidad en el nuevo centro',
      'Convenios de certificación técnica virtual avalada',
      'Mentorías virtuales uno a uno con profesionales voluntarios',
      'Inglés técnico aplicado al comercio y hotelería',
    ],
    status: 'Fase de equipamiento',
  },
  {
    id: 'sistemas-digitales',
    number: '03',
    title: 'Sistemas y Herramientas Digitales',
    tagline: 'Cerrando la brecha digital en la juventud insular',
    color: '#321078',
    description:
      'Aulas de cómputo para la alfabetización informática, manejo de suite ofimática, navegación segura en internet, herramientas de diseño gráfico básico y lógica de programación inicial.',
    opportunities: [
      'Aula de cómputo con estaciones de trabajo individuales',
      'Dominio de procesadores de texto, hojas de cálculo y presentaciones',
      'Introducción al diseño gráfico digital (Canva, herramientas web)',
      'Pensamiento computacional y nociones de programación web',
    ],
    status: 'Lanzamiento 2026',
  },
];

export const strategicProjects: StrategicProject[] = [
  {
    id: 'auditorio-comunitario',
    title: 'Construcción de Auditorio Comunitario',
    category: 'Infraestructura',
    status: 'En ejecución',
    fundingTargetUSD: 25000,
    featured: true,
    description:
      'Espacio polivalente techado con ventilación natural bioclimática para reuniones de más de 300 personas, actos culturales, cultos dominicales, escuelas de padres y eventos comunitarios.',
  },
  {
    id: 'salones-nuevos',
    title: 'Construcción de Salones Nuevos',
    category: 'Infraestructura',
    status: 'En ejecución',
    fundingTargetUSD: 12000,
    featured: true,
    description:
      'Módulos de aulas seguras, iluminadas y equipadas con mobiliario escolar ergonómico para impartir el refuerzo académico y los talleres de arte sin hacinamiento.',
  },
  {
    id: 'espacios-virtuales',
    title: 'Espacios para Educación y Formación Virtual',
    category: 'Educación',
    status: 'Planeado',
    fundingTargetUSD: 6000,
    description:
      'Adecuación de un aula digital equipada con computadores, conectividad satelital estable y pantallas interactivas para los nuevos programas de 2026.',
  },
  {
    id: 'aulas-refuerzo',
    title: 'Aulas para Clases Presenciales y Refuerzo',
    category: 'Educación',
    status: 'Finalizado',
    fundingTargetUSD: 4500,
    description:
      'Primer bloque de aulas rehabilitadas donde actualmente operan los grupos de lectura, matemáticas y trabajo social con más de 120 niños inscritos.',
  },
  {
    id: 'agua-potable',
    title: 'Soluciones para Acceso a Agua Potable',
    category: 'Servicios básicos',
    status: 'En ejecución',
    fundingTargetUSD: 5000,
    description:
      'Sistema de captación de agua lluvia con filtros de purificación ultravioleta y tanques de almacenamiento de gran capacidad para consumo seguro de la comunidad escolar.',
  },
  {
    id: 'iniciativas-productivas',
    title: 'Iniciativas Productivas y de Autosostenibilidad',
    category: 'Sostenibilidad',
    status: 'Planeado',
    fundingTargetUSD: 7000,
    description:
      'Desarrollo de una huerta hidropónica comunitaria y talleres de manufactura textil para financiar el mantenimiento de las instalaciones a largo plazo.',
  },
  {
    id: 'espacios-comerciales',
    title: 'Espacios Comerciales y Productivos para Empleo',
    category: 'Sostenibilidad',
    status: 'Planeado',
    fundingTargetUSD: 8000,
    description:
      'Locales sobre la vía peatonal principal de Bocachica para que los emprendedores formados en los programas vendan artesanías y alimentos a residentes y turistas.',
  },
];

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'plan-semilla',
    name: 'Plan Semilla',
    tagline: 'Siembra el primer fruto en la educación de un niño',
    amountCOP: 40000,
    amountUSD: 10,
    periodicity: 'mensual',
    color: '#35D5C5',
    purpose:
      'Asegura materiales escolares, cuadernos y refrigerios nutritivos para 1 niño durante un mes completo en el refuerzo académico.',
    highlights: [
      'Kit básico de útiles escolares mensuales',
      'Refrigerios nutritivos en cada jornada',
      'Reporte semestral de impacto educativo',
    ],
  },
  {
    id: 'plan-esperanza',
    name: 'Plan Esperanza',
    tagline: 'Fortalece el aprendizaje y la salud emocional',
    amountCOP: 80000,
    amountUSD: 20,
    periodicity: 'mensual',
    color: '#FF8A00',
    purpose:
      'Cubre acompañamiento académico continuo y talleres de artes y música para 2 niños de la comunidad insular.',
    highlights: [
      'Refuerzo escolar y tutorías en tareas',
      'Talleres semanales de música o pintura',
      'Boletín digital exclusivo para padrinos',
    ],
  },
  {
    id: 'plan-transformacion',
    name: 'Plan Transformación',
    tagline: 'Impacta a un niño y acompaña a su núcleo familiar',
    amountCOP: 120000,
    amountUSD: 30,
    periodicity: 'mensual',
    recommended: true,
    color: '#FF6B5E',
    purpose:
      'Provee formación integral escolar, atención psicosocial y participación de los padres en la Escuela de Familia.',
    highlights: [
      'Cobertura completa del programa académico',
      'Sesiones de psicología y trabajo social',
      'Formación de padres en crianza positiva',
      'Carta de gratitud elaborada por los niños',
    ],
  },
  {
    id: 'plan-futuro',
    name: 'Plan Futuro',
    tagline: 'Construye capacidades digitales y técnicas',
    amountCOP: 160000,
    amountUSD: 40,
    periodicity: 'mensual',
    color: '#321078',
    purpose:
      'Financia acceso a aulas de cómputo, conectividad y preparación para los nuevos programas tecnológicos de 2026.',
    highlights: [
      'Horas de formación en sistemas e inglés',
      'Mantenimiento de equipos de cómputo',
      'Seguimiento vocacional personalizado',
      'Acceso a videollamadas con el equipo en campo',
    ],
  },
  {
    id: 'plan-salvavidas',
    name: 'Plan Salvavidas',
    tagline: 'Sostén fundamental para la misión en Bocachica',
    amountCOP: 200000,
    amountUSD: 50,
    periodicity: 'mensual',
    color: '#00E51B',
    purpose:
      'Garantiza la operatividad de los programas, agua potable, refrigerios y atención médica básica preventiva para una cohorte infantil.',
    highlights: [
      'Sostenimiento integral de 2 a 3 beneficiarios',
      'Fondo de agua potable y emergencias de salud',
      'Mención de honor en el anuario institucional',
      'Invitación a jornadas de voluntariado en Bocachica',
    ],
  },
  {
    id: 'plan-empresarial',
    name: 'Plan Empresarial',
    tagline: 'Responsabilidad social y transformación comunitaria',
    amountCOP: 500000,
    amountUSD: 125,
    periodicity: 'mensual',
    color: '#2D2B50',
    purpose:
      'Alianza corporativa o aporte mayoritario para equipamiento de aulas, salarios de docentes locales y obras de infraestructura.',
    highlights: [
      'Impacto multiplicador en salones y auditorio',
      'Certificado de donación para efectos tributarios',
      'Logo de la empresa en memoria institucional',
      'Informe detallado de impacto con métricas auditables',
    ],
  },
];
