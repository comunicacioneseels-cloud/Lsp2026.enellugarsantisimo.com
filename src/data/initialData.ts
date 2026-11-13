import {
  FinancialProgress,
  NewProgram2026,
  OrganizationInfo,
  SocialProgram,
  StrategicProject,
  SubscriptionPlan,
} from '../types';

export const initialFinancialProgress: FinancialProgress = {
  targetUSD: 100000,
  raisedUSD: 10000,
  lastUpdated: 'Noviembre 2026',
  verifiedNotes: 'Meta actualizada: USD $100.000 con USD $10.000 recaudados y USD $90.000 por recaudar.',
  auditoriumPhase: 'Fase 1: Cimentación y cerramiento perimetral en curso.',
};

export const initialOrganizationInfo: OrganizationInfo = {
  legalName: 'Iglesia Cristiana En el Lugar Santísimo',
  churchName: 'Iglesia En el Lugar Santísimo',
  whatsapp: '+57 318 330 8302',
  whatsappUrl: 'https://wa.me/573183308302?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Lives%20Saved%20Project',
  phoneUs: '+1 772 475 7342',
  email: 'comunicaciones.eels@gmail.com',
  address: 'Sector El Fuerte, Bocachica',
  city: 'Cartagena de Indias, Bolívar, Colombia',
  bankName: 'Bancolombia',
  accountType: 'Cuenta de Ahorros',
  accountNumber: '171-0000-39-05',
  accountHolder: 'Iglesia Comunidad Cristiano Carismática La Esperanza',
  wompiPublicKey: 'pub_test_wompi_lives_saved_bocachica',
  wompiActive: true,
};

export const socialPrograms: SocialProgram[] = [
  {
    id: 'refuerzo-academico',
    orderNumber: 1,
    title: 'Refuerzo Académico',
    category: 'Educación',
    color: '#FFA000', // Naranja/Ámbar de la maqueta
    iconName: 'BookOpen',
    shortDescription:
      'Acompañamiento personalizado en lectura, matemáticas, ciencias y tareas escolares para cerrar brechas educativas.',
    bulletPoints: [
      'Brindamos acompañamiento personalizado en lectura, matemáticas, ciencias y tareas escolares.',
      'Realizamos evaluaciones continuas, seguimiento individual y orientación a padres para fortalecer hábitos de estudio en casa.',
      'Este programa busca cerrar las brechas educativas y despertar el potencial académico de cada niño.',
    ],
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
    images: [
      {
        src: '/assets/aistudio/IMG_6076.JPG',
        title: 'Motivación y Alegría Escolar',
        caption: 'Estudiantes sonrientes compartiendo una jornada alegre de aprendizaje.',
      },
      {
        src: '/assets/aistudio/20210223_144925.jpg',
        title: 'Acompañamiento Pedagógico en Grupo',
        caption: 'Clase al aire libre guiada por tutores con guías pedagógicas y pizarra de nivelación.',
      },
      {
        src: '/assets/aistudio/WhatsApp_Image_2026-01-14_at_10.25.30_AM_3.jpeg',
        title: 'Círculo de Tareas y Cuadernos',
        caption: 'Niños y niñas de Bocachica realizando planas, caligrafía y dibujos en sus cuadernos.',
      },
      {
        src: '/assets/aistudio/20210223_145004.jpg',
        title: 'Jornada de Aprendizaje y Estudio',
        caption: 'Tutorías y asesoría académica en pupitres escolares para cerrar brechas de aprendizaje.',
      },
    ],
  },
  {
    id: 'artes-creatividad',
    orderNumber: 2,
    title: 'Artes y Creatividad',
    category: 'Cultura & Expresión',
    color: '#00CDBE', // Turquesa/Cian de la maqueta
    iconName: 'Palette',
    shortDescription:
      'Talleres de música, danza, dibujo y expresión artística para fomentar disciplina, autoestima y sanación emocional.',
    bulletPoints: [
      'Impulsamos talleres de música, danza, dibujo y expresión artística para fomentar creatividad, disciplina, autoestima y sanación emocional.',
      'El arte se convierte en un espacio seguro para soñar y transformar la realidad.',
    ],
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
    images: [
      {
        src: '/assets/aistudio/20210225_112423__1__920064b8.jpg',
        title: 'Taller de Guitarra y Expresión Musical',
        caption: 'Joven de Bocachica aprendiendo guitarra y desarrollando talentos artísticos en las clases de música.',
      },
      {
        src: '/assets/aistudio/IMG_20260111_110654_58824016.jpg',
        title: 'Iniciación al Piano y Teclado',
        caption: 'Niñas de Bocachica aprendiendo notas y digitación en teclado guiadas por su instructora musical.',
      },
      {
        src: '/assets/aistudio/IMG_20260111_110645_11e4ccef.jpg',
        title: 'Práctica Instrumental y Armonía',
        caption: 'Clases prácticas de teclado electrónico en grupo, cultivando la disciplina, la paciencia y el talento musical.',
      },
      {
        src: '/assets/aistudio/IMG_20260111_110629_9d59acfa.jpg',
        title: 'Lectura de Partituras y Ensamble',
        caption: 'Estudiantes practicando con partituras y guías musicales en un ambiente seguro y enriquecedor.',
      },
    ],
  },
  {
    id: 'educacion-cristiana',
    orderNumber: 3,
    title: 'Educación Cristiana',
    category: 'Fe & Valores',
    color: '#FF4D00', // Naranja rojizo / Coral de la maqueta
    iconName: 'HeartHandshake',
    shortDescription:
      'Acompañamiento del desarrollo espiritual mediante la enseñanza de valores, propósito, identidad y esperanza.',
    bulletPoints: [
      'Acompañamos el desarrollo espiritual mediante la enseñanza de valores, propósito, identidad y esperanza.',
      'Fortalecemos el carácter y guiamos a los niños hacia una vida con fe y propósito.',
    ],
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
    images: [
      {
        src: '/assets/aistudio/IMG_0211.JPG',
        title: 'Niños Unidos en Oración Comunitaria',
        caption: 'Tiempos devocionales con manitas juntas y corazones reverentes ante Dios.',
      },
      {
        src: '/assets/aistudio/IMG_0220.JPG',
        title: 'Fe Sincera y Oración Personal',
        caption: 'Niño en reverencia y comunión espiritual sembrando principios eternos.',
      },
      {
        src: '/assets/aistudio/20210221_182243.jpg',
        title: 'Alabanza y Adoración Musical Infantil',
        caption: 'Expresión musical de alabanza en la iglesia con niños e instrumentos.',
      },
      {
        src: '/assets/aistudio/Inicio_Contruccion_ProyectoBocachicaETP160.jpg',
        title: 'Enseñanza Bíblica y Comunidad',
        caption: 'Comunidad e infancia congregadas frente a la Palabra de Dios y valores.',
      },
    ],
  },
  {
    id: 'trabajo-social',
    orderNumber: 4,
    title: 'Trabajo Social',
    category: 'Comunidad',
    color: '#5800A8', // Morado profundo / Púrpura de la maqueta
    iconName: 'Users',
    shortDescription:
      'Intervención en situaciones familiares complejas mediante visitas domiciliarias, orientación en crisis y apoyo.',
    bulletPoints: [
      'Intervenimos en situaciones familiares complejas mediante visitas domiciliarias, orientación en crisis y articulación con redes institucionales.',
      'Buscamos fortalecer los hogares y proteger el bienestar de los niños.',
    ],
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
    images: [
      {
        src: '/assets/aistudio/IMG_0125.JPG',
        title: 'Visita Domiciliaria a Familias',
        caption: 'Acompañamiento directo a padres e hijos reunidos en su hogar.',
      },
      {
        src: '/assets/aistudio/IMG_0121.JPG',
        title: 'Atención a Madres e Hijos',
        caption: 'Entrega de paquetes de apoyo familiar y seguimiento a necesidades.',
      },
      {
        src: '/assets/aistudio/IMG_0111.JPG',
        title: 'Entornos Protectores para la Niñez',
        caption: 'Garantizando hogares seguros y afectuosos para los menores.',
      },
      {
        src: '/assets/aistudio/mujeres_cocina_bocachica.png',
        title: 'Redes de Solidaridad Comunitaria',
        caption: 'Trabajo colaborativo con mujeres líderes de la comunidad.',
      },
    ],
  },
  {
    id: 'psicologia',
    orderNumber: 5,
    title: 'Psicología',
    category: 'Salud Mental',
    color: '#004CE8', // Azul royal de la maqueta
    iconName: 'Smile',
    shortDescription:
      'Apoyo psicológico profesional para ayudar a manejar y superar los traumas generados por diversas circunstancias.',
    bulletPoints: [
      'Damos apoyo psicológico profesional a las personas de la comunidad a fin de ayudar a manejar y superar los traumas generados por diversas circunstancias de sus vidas.',
    ],
    fullDescription:
      'Brindamos un espacio seguro, confidencial y profesional para que niños y jóvenes procesen heridas emocionales, traumas comunitarios y dilemas personales, promoviendo el bienestar mental y la resiliencia.',
    curriculum: [
      'Atención psicosocial individual para niños y adolescentes',
      'Talleres de inteligencia emocional y regulación de la ira',
      'Prevención de conductas de riesgo y fortalecimiento de identidad',
      'Acompañamiento en procesos de duelo y pérdida',
      'Estrategias de resolución pacífica de conflictos en el aula',
    ],
    schedule: 'Martes y Jueves · Previa valoración',
    beneficiaries: '60 usuarios en seguimiento activo',
    impactObjective:
      'Sanar heridas emocionales, fomentar la paz mental y empoderar a los jóvenes en la toma de decisiones asertivas.',
    images: [
      {
        src: '/assets/aistudio/hero_bocachica_child.jpg',
        title: 'Bienestar y Autoestima Infantil',
        caption: 'Sonrisas sanas y superación de heridas emocionales en la niñez.',
      },
      {
        src: '/assets/aistudio/MAQUETA_Lsp_website_-_Espa_ol_3933623a.png',
        title: 'Orientación Psicosocial Profesional',
        caption: 'Escucha activa y acompañamiento para procesar circunstancias difíciles.',
      },
      {
        src: '/assets/aistudio/nina_refuerzo_paz.png',
        title: 'Resiliencia y Sanación Emocional',
        caption: 'Desarrollando herramientas de paz mental y seguridad personal.',
      },
      {
        src: '/assets/aistudio/padrino_children_hope.jpg',
        title: 'Acompañamiento Continuo',
        caption: 'Espacios de confianza y afecto para cada niño y adolescente.',
      },
    ],
  },
  {
    id: 'nutricion-higiene',
    orderNumber: 6,
    title: 'Nutrición e Higiene',
    category: 'Bienestar',
    color: '#C800D8', // Magenta / Orquídea de la maqueta
    iconName: 'Apple',
    shortDescription:
      'Refrigerios, suplementación alimentaria, mercados, implementos de aseo y monitoreo del crecimiento infantil.',
    bulletPoints: [
      'Proporcionamos refrigerios, suplementación alimentaria, mercados, implementos de aseo, y monitoreo del crecimiento infantil.',
      'También capacitamos a las familias en hábitos de alimentación saludable e higiene.',
    ],
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
    images: [
      {
        src: '/assets/aistudio/familia_huevos_mercado.jpg',
        title: 'Entrega de Mercados y Proteína',
        caption: 'Mercados completos y cubetas de huevos entregados a familias de Bocachica.',
      },
      {
        src: '/assets/aistudio/IMG_1303.jpg',
        title: 'Taller de Nutrición y Cocina Saludable',
        caption: 'Capacitación comunitaria en manipulación higiénica y preparación de alimentos.',
      },
      {
        src: '/assets/aistudio/mujeres_cocina_bocachica.png',
        title: 'Cocina Comunitaria y Refrigerios Diarios',
        caption: 'Preparación de raciones y refrigerios nutritivos diarios para los niños.',
      },
      {
        src: '/assets/aistudio/regenerated_image_1794116230391.jpg',
        title: 'Monitoreo de Crecimiento y Salud Integral',
        caption: 'Seguimiento de peso, talla y hábitos de higiene preventiva en la isla.',
      },
    ],
  },
  {
    id: 'escuela-de-padres',
    orderNumber: 7,
    title: 'Escuela de Padres',
    category: 'Familia',
    color: '#00D014', // Verde brillante de la maqueta
    iconName: 'Home',
    shortDescription:
      'Formación en herramientas de crianza respetuosa, comunicación asertiva, manejo de límites y restauración familiar.',
    bulletPoints: [
      'Formamos a padres y cuidadores en herramientas de crianza respetuosa, comunicación asertiva, manejo de límites y fortalecimiento familiar.',
      'Una comunidad se transforma cuando sus familias son restauradas.',
    ],
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
    images: [
      {
        src: '/assets/aistudio/IMG_0125.JPG',
        title: 'Padres e Hijos en Convivencia Pacífica',
        caption: 'Paternidad amorosa, diálogo asertivo y presencia formativa en el hogar.',
      },
      {
        src: '/assets/aistudio/familia_huevos_mercado.jpg',
        title: 'Madres y Cuidadores Fortalecidos',
        caption: 'Familias unidas aprendiendo a respaldar el crecimiento integral de sus hijos.',
      },
      {
        src: '/assets/aistudio/IMG_0111.JPG',
        title: 'Pautas de Crianza Afectuosa',
        caption: 'Construyendo hogares sin violencia donde los niños crecen seguros y amados.',
      },
      {
        src: '/assets/aistudio/ninos_evento_comunitario.png',
        title: 'Comunidad y Familias Restauradas',
        caption: 'Celebrando el impacto visible de hogares sanos en la transformación comunitaria.',
      },
    ],
  },
];

export const newPrograms2026: NewProgram2026[] = [
  {
    id: 'emprendimiento',
    number: '01',
    orderNumber: 1,
    title: 'Emprendimiento',
    tagline: 'Negocios locales y autonomía económica',
    color: '#FFA000', // Ámbar / Naranja de la maqueta
    bulletPoints: [
      'Formación para pequeños negocios, habilidades comerciales, administración básica y creación de modelos de negocio sostenibles.',
    ],
    description:
      'Formación para pequeños negocios, habilidades comerciales, administración básica y creación de modelos de negocio sostenibles para jóvenes y familias de Bocachica.',
    opportunities: [
      'Modelos de negocio sostenibles para el entorno insular',
      'Finanzas básicas, fijación de precios y ahorro comunitario',
      'Marketing comercial y ventas a visitantes de Cartagena',
      'Acompañamiento y capital semilla para proyectos destacados',
    ],
    status: 'Lanzamiento 2026',
    images: [
      {
        src: '/assets/aistudio/IMG_1303.jpg',
        title: 'Taller de Emprendimiento y Repostería',
        caption: 'Capacitación comunitaria en producción de alimentos y comercialización.',
      },
      {
        src: '/assets/aistudio/mujeres_cocina_bocachica.png',
        title: 'Líderes y Madres Emprendedoras',
        caption: 'Redes colaborativas de apoyo productivo entre mujeres de la isla.',
      },
      {
        src: '/assets/aistudio/familia_huevos_mercado.jpg',
        title: 'Comercio Local y Provisión de Insumos',
        caption: 'Generación de autonomía económica y abastecimiento familiar.',
      },
      {
        src: '/assets/aistudio/community_learning_bocachica.jpg',
        title: 'Formación en Gestión de Negocios',
        caption: 'Capacitación práctica en administración y modelos sostenibles.',
      },
    ],
  },
  {
    id: 'habilidades-tecnicas',
    number: '02',
    orderNumber: 2,
    title: 'Habilidades Técnicas a Través de la Virtualidad',
    tagline: 'Formación técnica remota certificable',
    color: '#00CDBE', // Turquesa / Cian de la maqueta
    bulletPoints: [
      'Capacitación certificable en áreas técnicas como electricidad básica, hotelería, marketing digital, primeros auxilios, oficios turísticos y más.',
    ],
    description:
      'Capacitación certificable en áreas técnicas como electricidad básica, hotelería, marketing digital, primeros auxilios, oficios turísticos y más, conectando a la isla con nuevas oportunidades de empleo.',
    opportunities: [
      'Conexión satelital de alta velocidad en el nuevo centro comunitario',
      'Convenios de certificación técnica virtual avalada',
      'Electricidad básica, primeros auxilios y oficios técnicos',
      'Hotelería, marketing digital y servicios turísticos aplicados',
    ],
    status: 'Fase de equipamiento',
    images: [
      {
        src: '/assets/aistudio/auditorium_architecture_plan_1794103983290.jpg',
        title: 'Nuevas Aulas Técnicas Virtuales',
        caption: 'Plano del auditorio y salones tecnológicos para formación remota.',
      },
      {
        src: '/assets/aistudio/tutora_refuerzo_escolar.jpg',
        title: 'Tutorías y Mentorías Guiadas',
        caption: 'Acompañamiento personalizado en el aprendizaje de competencias laborales.',
      },
      {
        src: '/assets/aistudio/ninos_evento_comunitario.png',
        title: 'Juventud Preparada para el Trabajo',
        caption: 'Jóvenes de Bocachica con certificación laboral y vocacional.',
      },
      {
        src: '/assets/aistudio/bocachica_island_coast.jpg',
        title: 'Oficios Náuticos y Turísticos',
        caption: 'Formación técnica adaptada al contexto marítimo e insular.',
      },
    ],
  },
  {
    id: 'sistemas-digitales',
    number: '03',
    orderNumber: 3,
    title: 'Curso de Sistemas y Herramientas Digitales',
    tagline: 'Informática básica y competencias digitales',
    color: '#FF4500', // Coral / Rojo-Naranja de la maqueta
    bulletPoints: [
      'Formación en informática básica, competencias digitales, ofimática e Internet seguro.',
      'Será clave para jóvenes y adultos que buscan oportunidades laborales y crecimiento profesional.',
    ],
    description:
      'Formación en informática básica, competencias digitales, ofimática e Internet seguro. Será clave para jóvenes y adultos que buscan oportunidades laborales y crecimiento profesional.',
    opportunities: [
      'Aula de cómputo con estaciones de trabajo individuales',
      'Dominio de procesadores de texto, hojas de cálculo y ofimática',
      'Navegación segura, internet productivo y herramientas digitales',
      'Apertura a trabajos remotos y crecimiento profesional',
    ],
    status: 'Lanzamiento 2026',
    images: [
      {
        src: '/assets/aistudio/tutora_refuerzo_escolar.jpg',
        title: 'Alfabetización Informática Guiada',
        caption: 'Aprender computación paso a paso con acompañamiento docente.',
      },
      {
        src: '/assets/aistudio/nina_refuerzo_paz.png',
        title: 'Acceso a la Era Digital',
        caption: 'Niños y jóvenes con acceso a tecnología y conocimiento global.',
      },
      {
        src: '/assets/aistudio/20210223_144925_2ca24bc9.jpg',
        title: 'Trabajo Digital en Equipo',
        caption: 'Talleres colaborativos y proyectos informáticos prácticos.',
      },
      {
        src: '/assets/aistudio/IMG_0198.JPG',
        title: 'Juventud Transformando su Futuro',
        caption: 'Nuevas generaciones de Bocachica con herramientas de superación.',
      },
    ],
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
