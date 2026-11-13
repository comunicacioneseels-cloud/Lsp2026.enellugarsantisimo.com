/**
 * Comprehensive bilingual translation engine (Spanish <-> English)
 * 1. Normalizes multi-line JSX whitespace while preserving leading/trailing spacing
 * 2. Translates all pages, cards, modals, buttons, nav, footer, data & dynamic counters
 * 3. Observes childList + characterData mutations so dynamic slides & modals translate live
 */

export const TRANSLATIONS: Record<string, string> = {
  // =========================================================================
  // 1. NAVIGATION & COMMON CONTROLS
  // =========================================================================
  'INICIO': 'HOME',
  'Inicio': 'Home',
  'INICIATIVA SOCIAL': 'SOCIAL INITIATIVE',
  'Iniciativa Social': 'Social Initiative',
  'PROGRAMAS': 'PROGRAMS',
  'Programas': 'Programs',
  'Programas Actuales': 'Current Programs',
  'PROGRAMAS ACTUALES (1 A 7)': 'CURRENT PROGRAMS (1 TO 7)',
  'Programas Actuales (1 a 7)': 'Current Programs (1 to 7)',
  '↳ Programas Actuales (1 a 7)': '↳ Current Programs (1 to 7)',
  'Los 7 programas en operación': 'The 7 active programs in operation',
  'Nuevos Programas': 'New Programs',
  'Nuevos Programas (2026)': 'New Programs (2026)',
  '↳ Nuevos programas (2026)': '↳ New programs (2026)',
  'NUEVOS PROGRAMAS PARA 2026': 'NEW PROGRAMS FOR 2026',
  'Lanzamiento e innovación 2026': '2026 Launch & Innovation',
  'PROYECTOS': 'PROJECTS',
  'Proyectos': 'Projects',
  'Proyectos & Auditorio': 'Projects & Auditorium',
  'PLANES': 'PLANS',
  'PLANES DE SUSCRIPCIÓN': 'SUBSCRIPTION PLANS',
  'Planes de Suscripción': 'Subscription Plans',
  'PLAN PADRINO': 'SPONSOR A CHILD',
  'Plan Padrino': 'Sponsor a Child',
  'Plan Padrino Salva Vidas': 'Lifesaver Sponsor Plan',
  'APÓYANOS': 'SUPPORT US',
  'Apóyanos': 'Support Us',
  'Apóyanos (Donaciones)': 'Support Us (Donations)',
  'DONA AHORA': 'DONATE NOW',
  'Donar Ahora': 'Donate Now',
  'Dona ahora': 'Donate now',
  'Donar': 'Donate',
  'Abrir': 'Open',
  'Cerrar': 'Close',
  'Ampliar foto': 'Enlarge photo',
  'Copiado': 'Copied',
  'Volver arriba ↑': 'Back to top ↑',

  // =========================================================================
  // 2. INICIO PAGE (HERO)
  // =========================================================================
  'Donde otros': 'Where others',
  'ven necesidad,': 'see need,',
  'nosotros': 'we',
  'vemos': 'see',
  'futuro.': 'future.',
  'Donde otros ven necesidad, nosotros vemos futuro.': 'Where others see need, we see future.',
  'Impulsamos educación, bienestar y oportunidades reales junto a la comunidad Bocachica.':
    'We promote education, well-being, and real opportunities together with the Bocachica community.',
  'Conoce nuestro impacto': 'Discover our impact',
  'Sé parte de la misión': 'Be part of the mission',

  // =========================================================================
  // 3. INICIATIVA SOCIAL PAGE
  // =========================================================================
  'Es una': 'It is a',
  'iniciativa social': 'social initiative',
  'de la Iglesia En El Lugar Santísimo. Desde hace más de 10 años trabaja en Bocachica':
    'of En El Lugar Santísimo Church. For over 10 years it has been working in Bocachica',
  'brindando programas semanales para decenas de familias':
    'providing weekly programs for dozens of families',
  '. Su misión es': '. Its mission is to',
  'romper ciclos de pobreza': 'break cycles of poverty',
  'mediante:': 'through:',

  // 4 Bars & Pillar Keys
  'EDUCACIÓN': 'EDUCATION',
  'Educación': 'Education',
  'educacion': 'education',
  'FAMILIA': 'FAMILY',
  'Familia': 'Family',
  'familia': 'family',
  'BIENESTAR': 'WELLNESS',
  'Bienestar': 'Wellness',
  'bienestar': 'wellness',
  'FE': 'FAITH',
  'Fe': 'Faith',
  'fe': 'faith',

  // Pillar Slider Section
  'Galería Activa del Eje:': 'Active Pillar Gallery:',
  'Registro Fotográfico: Refuerzo Escolar y Tutorías (4 Fotos)':
    'Photo Gallery: Academic Reinforcement & Tutoring (4 Photos)',
  'Registro Fotográfico: Familias y Hogares de Bocachica (4 Fotos)':
    'Photo Gallery: Families & Homes of Bocachica (4 Photos)',
  'Registro Fotográfico: Recreación y Niños Saltando de Alegría (4 Fotos)':
    'Photo Gallery: Recreation & Children Jumping with Joy (4 Photos)',
  'Registro Fotográfico: Niños en Oración y Fe Comunitaria (4 Fotos)':
    'Photo Gallery: Children in Prayer & Community Faith (4 Photos)',
  '4 Fotos de Educación': '4 Education Photos',
  '4 Fotos de Familias': '4 Family Photos',
  '4 Fotos de Niños Saltando': '4 Recreation Photos',
  '4 Fotos de Niños Orando': '4 Faith & Prayer Photos',
  'Refuerzo escolar semanal, tutorías de lectura, matemáticas y materiales pedagógicos continuos en Bocachica.':
    'Weekly academic support, reading and math tutoring, and ongoing educational materials in Bocachica.',
  'Hermanos protegidos en el hogar, madres recibiendo mercado familiar, padres presentes a la mesa y talleres comunitarios.':
    'Siblings cared for at home, mothers receiving family groceries, supportive parents, and community workshops.',
  'Niños saltando y bailando con brazos en alto, dinámicas recreativas y espacios seguros de alegría y salud física.':
    'Children jumping and dancing with raised arms, recreational activities, and safe spaces for joy and physical health.',
  'Niños en oración comunitaria, devoción sincera con manitas juntas, alabanza con música e instrucción en la Palabra.':
    "Children in community prayer, sincere devotion, musical worship, and instruction in God's Word.",
  'Apoyar este eje de acción': 'Support this pillar',

  // Iniciativa Social Slides (Educación, Familia, Bienestar, Fe)
  'Motivación y Alegría Escolar': 'Motivation & School Joy',
  'Estudiantes sonrientes compartiendo una jornada alegre de aprendizaje y superación escolar en Bocachica.':
    'Smiling students sharing a joyful day of learning and academic growth in Bocachica.',
  'Acompañamiento Pedagógico en Grupo': 'Group Pedagogical Support',
  'Clase grupal de refuerzo académico guiada por tutores con guías pedagógicas y pizarra de nivelación al aire libre.':
    'Group academic reinforcement class guided by tutors with study materials and an outdoor whiteboard.',
  'Círculo de Tareas y Cuadernos': 'Homework & Notebooks Circle',
  'Niños y niñas de Bocachica realizando planas, caligrafía y dibujos en sus cuadernos durante la jornada de refuerzo escolar.':
    'Children in Bocachica practicing handwriting, calligraphy, and drawing in their notebooks during tutoring.',
  'Jornada de Aprendizaje y Estudio': 'Learning & Study Session',
  'Tutorías y asesoría académica en pupitres escolares para cerrar brechas de aprendizaje y fortalecer hábitos de estudio.':
    'Tutoring and academic guidance at school desks to close learning gaps and strengthen study habits.',

  'Hermanos y Hogar Seguro': 'Siblings & Safe Home',
  'Espacios afectivos y seguros donde los niños y niñas de Bocachica crecen protegidos en el seno y calor de su familia.':
    'Loving and safe environments where children in Bocachica grow up protected in the warmth of their family.',
  'Madre con Hijos y Seguridad Alimentaria': 'Mother with Children & Food Security',
  'Acompañamiento a madres cabeza de hogar con paquetes de nutrición, provisión básica y fortalecimiento de los lazos familiares en Bocachica.':
    'Supporting single mothers with nutrition packages, essential supplies, and strengthening family bonds in Bocachica.',
  'Taller Comunitario de Repostería y Emprendimiento': 'Community Baking & Entrepreneurship Workshop',
  'Capacitación productiva y gastronómica para mujeres y familias, impulsando el sustento digno y el desarrollo económico local.':
    'Productive culinary training for women and families, promoting dignified livelihoods and local economic growth.',
  'Familia Unida en Bocachica': 'United Family in Bocachica',
  'Restauración de vínculos familiares, apoyo psicosocial y acompañamiento integral para que cada hogar prospere con dignidad y amor.':
    'Restoring family bonds, psychosocial support, and holistic care so every home thrives with dignity and love.',

  'Saltos de Alegría y Recreación al Aire Libre': 'Leaps of Joy & Outdoor Recreation',
  'Jornadas recreativas donde los niños saltan, bailan y expresan plenamente su alegría y energía en un espacio seguro con vista a la bahía.':
    'Recreational sessions where children jump, dance, and express their joy and energy in a safe space overlooking the bay.',
  'Danza, Ritmo y Expresión Corporal': 'Dance, Rhythm & Physical Expression',
  'Actividades de danza, coordinación motriz y dinámicas musicales que fomentan la disciplina, la autoestima y la diversión saludable.':
    'Dance, motor coordination, and musical activities fostering discipline, self-esteem, and healthy fun.',
  'Canto, Risa y Compañerismo': 'Singing, Laughter & Fellowship',
  'Encuentros grupales que fortalecen la amistad, el canto, la expresión de emociones positivas y la integración comunitaria.':
    'Group gatherings that strengthen friendship, singing, positive emotional expression, and community integration.',
  'Celebración, Vida Activa y Salud Física': 'Celebration, Active Living & Physical Health',
  'Ejercicios de estiramiento, movimiento y celebración colectiva que promueven hábitos saludables y el bienestar integral de la niñez.':
    'Stretching exercises, movement, and group celebration promoting healthy habits and children’s overall well-being.',

  'Fe Sincera y Oración Personal': 'Sincere Faith & Personal Prayer',
  'Inculcando principios y valores cristianos donde cada niño aprende a orar con intimidad, fe sincera y devoción a Dios.':
    'Instilling Christian principles and values where each child learns to pray with sincerity, faith, and devotion to God.',
  'Manos al Corazón y Devoción Infantil': 'Hands on Heart & Childhood Devotion',
  'Corazones infantiles rindiendo gratitud y plegarias a Dios, aprendiendo a orar con amor, reverencia y confianza.':
    'Young hearts offering gratitude and prayers to God, learning to pray with love, reverence, and trust.',
  'Enseñanza de la Palabra y Comunidad de Fe': 'Teaching of the Word & Community of Faith',
  'Familias, jóvenes y niños congregados para escuchar la Palabra de Dios, fortaleciendo la esperanza y los valores espirituales.':
    "Families, youth, and children gathered to hear God's Word, strengthening hope and spiritual values.",
  'Círculo de Oración y Comunión Infantil': 'Children’s Prayer Circle & Fellowship',
  'Encuentros de reflexión y comunión donde los niños se reúnen en el suelo a orar juntos, cultivando la fraternidad y la paz.':
    'Gatherings of reflection and fellowship where children sit together to pray, cultivating brotherhood and peace.',

  // Bocachica Context Section
  'UN PUEBLO EN BUSCA DE OPORTUNIDADES': 'A COMMUNITY IN SEARCH OF OPPORTUNITIES',
  'Con aproximadamente': 'With approximately',
  '8.000 habitantes': '8,000 residents',
  ', Bocachica enfrenta desafíos estructurales que limitan el desarrollo integral de sus niños y jóvenes.':
    ', Bocachica faces structural challenges that limit the holistic development of its children and youth.',

  'Economía': 'Economy',
  'En esta comunidad, más del': 'In this community, over',
  '85% de las familias': '85% of families',
  'viven en': 'live in',
  'condiciones de pobreza': 'poverty conditions',
  ', y más de la mitad de los adultos no tiene empleo. Cerca del':
    ', and more than half of adults are unemployed. Nearly',
  '75% trabaja en la informalidad': '75% work in the informal economy',
  ', con ingresos inestables que dependen del': ', with unstable incomes that depend on',
  'turismo y de actividades': 'tourism and',
  'básicas, lo que limita las oportunidades de desarrollo.':
    'basic activities, limiting opportunities for development.',

  'En la isla hay': 'On the island there are',
  'altos niveles de rezago escolar': 'high levels of academic delay',
  'en lectura, matemáticas y habilidades básicas, agravados por la':
    'in reading, math, and basic skills, worsened by the',
  'falta de acompañamiento en casa': 'lack of support at home',
  '. Muchos hogares no cuentan con computador ni buena conectividad, lo que dificulta el aprendizaje. Las brechas dejadas por la pandemia aún siguen presentes y requieren apoyo constante para superarse.':
    '. Many homes lack computers or reliable internet connectivity, hindering learning. Gaps left by the pandemic remain present and require ongoing support to overcome.',

  'Nutrición y Salud': 'Nutrition & Health',
  'Se presentan casos de desnutrición moderada y severa que':
    'Cases of moderate and severe malnutrition occur that',
  'afectan': 'affect',
  'tanto el crecimiento como las': 'both growth and the',
  'capacidades cognitivas': 'cognitive abilities',
  'de niñas y niños. La escasez de agua potable aumenta los malestares gastrointestinales y profundiza el deterioro general de la salud. A esto se suman los':
    'of children. The scarcity of clean drinking water increases gastrointestinal illnesses and worsens overall health. Added to this are',
  'bajos ingresos': 'low',
  'familiares, que': 'household incomes, which',
  'limitan la posibilidad': 'limit the ability',
  'de ofrecer alimentos suficientes y nutritivos.':
    'to provide sufficient and nutritious food.',

  'Dinámica Familiar': 'Family Dynamics',
  'Bocachica enfrenta retos profundos que afectan la vida diaria de muchas familias. El':
    'Bocachica faces deep challenges that affect the daily lives of many families. The',
  'alto índice de conflictos': 'high rate of conflict',
  'en el hogar, la falta de figuras de apoyo y las presiones económicas crean entornos':
    'at home, the lack of supportive figures, and economic pressures create',
  'frágiles': 'fragile environments',
  'para niños y jóvenes. Muchos': 'for children and youth. Many',
  'crecen sin un espacio': 'grow up without a safe space',
  'seguro ni una guía estable que les permita desarrollarse con tranquilidad.':
    'or stable guidance allowing them to grow in peace.',

  'Tu aporte transforma vidas': 'Your contribution transforms lives',
  'Sé parte activa de la transformación en Bocachica': 'Be an active part of the transformation in Bocachica',
  'Cada programa se sostiene gracias al amor y compromiso de donantes y padrinos que creen en el futuro de los niños.':
    "Every program is sustained through the love and commitment of donors and sponsors who believe in children's future.",
  'Ver Programas (1 al 7)': 'View Programs (1 to 7)',

  // =========================================================================
  // 4. PROGRAMAS ACTUALES PAGE & DATA (PROGRAMS 1 TO 7 + MODAL)
  // =========================================================================
  '7 PROGRAMAS ACTIVOS EN BOCACHICA': '7 ACTIVE PROGRAMS IN BOCACHICA',
  'UNA ALTERNATIVA': 'AN ALTERNATIVE',
  'Priorizamos el desarrollo de programas centrados en un':
    'We prioritize the development of programs focused on a',
  'ecosistema sano para los niños y jóvenes involucrando a su familia':
    'healthy ecosystem for children and youth while involving their family',
  'de manera integral, respondiendo a las necesidades más urgentes identificadas en la comunidad.':
    'holistically, responding to the most urgent needs identified in the community.',
  'Toca cualquier cuadro de color para abrir su pop-up con 4 fotografías:':
    'Tap any colored card to open its pop-up with 4 photographs:',
  'Bocachica, Isla de Tierra Bomba': 'Bocachica, Tierra Bomba Island',
  'Educación y esperanza viva para la niñez insular': 'Education and living hope for island children',
  'Programas de Atención Integral': 'Comprehensive Care Programs',
  'Haz clic en cualquiera de los 7 botones de colores para abrir su ventana emergente (pop-up) interactiva con sus':
    'Click any of the 7 colored cards to open its interactive pop-up with its',
  '4 fotografías oficiales': '4 official photographs',
  ', contenidos y detalles de impacto.': ', content, and impact details.',
  'Ver 4 Fotos': 'View 4 Photos',
  'Toca para abrir galería y detalles': 'Tap to open gallery and details',
  'Ver Fotos': 'View Photos',

  // Bottom Collage & Banner in Programas Actuales
  'Registro en Territorio': 'Field Records',
  'El Impacto Real de los 7 Programas': 'The Real Impact of the 7 Programs',
  'Apoyar los programas': 'Support the programs',
  'Tutoría escolar personalizada y disciplina de estudio': 'Personalized school tutoring and study discipline',
  'Seguridad alimentaria para los hogares': 'Food security for households',
  'Crianza respetuosa y hogares afectuosos': 'Respectful parenting and loving homes',
  'Artes y Creatividad · Música': 'Arts & Creativity · Music',
  'Descubriendo talentos y transformando vidas a través de la música y el arte en Bocachica':
    'Discovering talents and transforming lives through music and art in Bocachica',
  'Innovación y Futuro': 'Innovation & Future',
  '¿Quieres conocer los nuevos programas para 2026?': 'Want to discover the new programs for 2026?',
  'Descubre nuestras iniciativas proyectadas de formación técnica virtual, cursos de sistemas, inglés aplicado y emprendimiento comunitario en la isla.':
    'Discover our projected initiatives in virtual technical training, computer courses, applied English, and community entrepreneurship on the island.',
  'Ver Nuevos Programas 2026': 'View New Programs 2026',

  // Program Titles & Categories
  'Refuerzo Académico': 'Academic Reinforcement',
  'Artes y Creatividad': 'Arts & Creativity',
  'Cultura & Expresión': 'Culture & Expression',
  'Educación Cristiana': 'Christian Education',
  'Fe & Valores': 'Faith & Values',
  'Trabajo Social': 'Social Work',
  'Comunidad': 'Community',
  'Psicología': 'Psychology',
  'Salud Mental': 'Mental Health',
  'Nutrición e Higiene': 'Nutrition & Hygiene',
  'Escuela de Padres': 'Parenting School',

  // Program Modal UI
  'Galería de Evidencias (4 Fotografías)': 'Evidence Gallery (4 Photographs)',
  'Donar / Respaldar este programa': 'Donate / Support this program',

  // Program 1 Data
  'Acompañamiento personalizado en lectura, matemáticas, ciencias y tareas escolares para cerrar brechas educativas.':
    'Personalized support in reading, mathematics, science, and homework to close educational gaps.',
  'Brindamos acompañamiento personalizado en lectura, matemáticas, ciencias y tareas escolares.':
    'We provide personalized support in reading, mathematics, science, and homework.',
  'Realizamos evaluaciones continuas, seguimiento individual y orientación a padres para fortalecer hábitos de estudio en casa.':
    'We conduct continuous assessments, individual follow-up, and parent guidance to strengthen study habits at home.',
  'Este programa busca cerrar las brechas educativas y despertar el potencial académico de cada niño.':
    'This program seeks to close educational gaps and awaken every child’s academic potential.',
  'Estudiantes sonrientes compartiendo una jornada alegre de aprendizaje.':
    'Smiling students sharing a joyful day of learning.',
  'Clase al aire libre guiada por tutores con guías pedagógicas y pizarra de nivelación.':
    'Outdoor class guided by tutors with study materials and a catch-up whiteboard.',
  'Niños y niñas de Bocachica realizando planas, caligrafía y dibujos en sus cuadernos.':
    'Boys and girls in Bocachica practicing handwriting, calligraphy, and drawing in their notebooks.',
  'Tutorías y asesoría académica en pupitres escolares para cerrar brechas de aprendizaje.':
    'Tutoring and academic guidance at school desks to close learning gaps.',

  // Program 2 Data
  'Talleres de música, danza, dibujo y expresión artística para fomentar disciplina, autoestima y sanación emocional.':
    'Music, dance, drawing, and artistic expression workshops to foster discipline, self-esteem, and emotional healing.',
  'Impulsamos talleres de música, danza, dibujo y expresión artística para fomentar creatividad, disciplina, autoestima y sanación emocional.':
    'We promote music, dance, drawing, and artistic expression workshops to foster creativity, discipline, self-esteem, and emotional healing.',
  'El arte se convierte en un espacio seguro para soñar y transformar la realidad.':
    'Art becomes a safe space to dream and transform reality.',
  'Taller de Guitarra y Expresión Musical': 'Guitar Workshop & Musical Expression',
  'Joven de Bocachica aprendiendo guitarra y desarrollando talentos artísticos en las clases de música.':
    'Young person from Bocachica learning guitar and developing artistic talents in music lessons.',
  'Iniciación al Piano y Teclado': 'Introduction to Piano & Keyboard',
  'Niñas de Bocachica aprendiendo notas y digitación en teclado guiadas por su instructora musical.':
    'Girls in Bocachica learning keyboard notes and fingerings guided by their music instructor.',
  'Práctica Instrumental y Armonía': 'Instrumental Practice & Harmony',
  'Clases prácticas de teclado electrónico en grupo, cultivando la disciplina, la paciencia y el talento musical.':
    'Group electronic keyboard practice classes, cultivating discipline, patience, and musical talent.',
  'Lectura de Partituras y Ensamble': 'Sheet Music Reading & Ensemble',
  'Estudiantes practicando con partituras y guías musicales en un ambiente seguro y enriquecedor.':
    'Students practicing with sheet music and guides in a safe and enriching environment.',

  // Program 3 Data
  'Acompañamiento del desarrollo espiritual mediante la enseñanza de valores, propósito, identidad y esperanza.':
    'Supporting spiritual development by teaching values, purpose, identity, and hope.',
  'Acompañamos el desarrollo espiritual mediante la enseñanza de valores, propósito, identidad y esperanza.':
    'We support spiritual development by teaching values, purpose, identity, and hope.',
  'Fortalecemos el carácter y guiamos a los niños hacia una vida con fe y propósito.':
    'We strengthen character and guide children toward a life of faith and purpose.',
  'Niños Unidos en Oración Comunitaria': 'Children United in Community Prayer',
  'Tiempos devocionales con manitas juntas y corazones reverentes ante Dios.':
    'Devotional times with joined hands and reverent hearts before God.',
  'Niño en reverencia y comunión espiritual sembrando principios eternos.':
    'Child in reverence and spiritual communion sowing eternal principles.',
  'Alabanza y Adoración Musical Infantil': 'Children’s Musical Praise & Worship',
  'Expresión musical de alabanza en la iglesia con niños e instrumentos.':
    'Musical expression of praise in church with children and instruments.',
  'Enseñanza Bíblica y Comunidad': 'Biblical Teaching & Community',
  'Comunidad e infancia congregadas frente a la Palabra de Dios y valores.':
    "Community and children gathered around God's Word and values.",

  // Program 4 Data
  'Intervención en situaciones familiares complejas mediante visitas domiciliarias, orientación en crisis y apoyo.':
    'Intervention in complex family situations through home visits, crisis counseling, and support.',
  'Intervenimos en situaciones familiares complejas mediante visitas domiciliarias, orientación en crisis y articulación con redes institucionales.':
    'We intervene in complex family situations through home visits, crisis counseling, and coordination with institutional networks.',
  'Buscamos fortalecer los hogares y proteger el bienestar de los niños.':
    'We seek to strengthen homes and protect the well-being of children.',
  'Visita Domiciliaria a Familias': 'Home Visits to Families',
  'Acompañamiento directo a padres e hijos reunidos en su hogar.':
    'Direct support for parents and children gathered in their home.',
  'Atención a Madres e Hijos': 'Care for Mothers & Children',
  'Entrega de paquetes de apoyo familiar y seguimiento a necesidades.':
    'Delivery of family support packages and needs follow-up.',
  'Entornos Protectores para la Niñez': 'Protective Environments for Children',
  'Garantizando hogares seguros y afectuosos para los menores.':
    'Ensuring safe and loving homes for children.',
  'Redes de Solidaridad Comunitaria': 'Community Solidarity Networks',
  'Trabajo colaborativo con mujeres líderes de la comunidad.':
    'Collaborative work with women leaders in the community.',

  // Program 5 Data
  'Apoyo psicológico profesional para ayudar a manejar y superar los traumas generados por diversas circunstancias.':
    'Professional psychological support to help manage and overcome trauma caused by various life circumstances.',
  'Damos apoyo psicológico profesional a las personas de la comunidad a fin de ayudar a manejar y superar los traumas generados por diversas circunstancias de sus vidas.':
    'We provide professional psychological support to community members to help manage and overcome trauma caused by various circumstances in their lives.',
  'Bienestar y Autoestima Infantil': 'Child Well-being & Self-esteem',
  'Sonrisas sanas y superación de heridas emocionales en la niñez.':
    'Healthy smiles and healing emotional wounds in childhood.',
  'Orientación Psicosocial Profesional': 'Professional Psychosocial Guidance',
  'Escucha activa y acompañamiento para procesar circunstancias difíciles.':
    'Active listening and guidance to process difficult circumstances.',
  'Resiliencia y Sanación Emocional': 'Resilience & Emotional Healing',
  'Desarrollando herramientas de paz mental y seguridad personal.':
    'Developing tools for peace of mind and personal confidence.',
  'Acompañamiento Continuo': 'Ongoing Support',
  'Espacios de confianza y afecto para cada niño y adolescente.':
    'Spaces of trust and care for every child and teenager.',

  // Program 6 Data
  'Refrigerios, suplementación alimentaria, mercados, implementos de aseo y monitoreo del crecimiento infantil.':
    'Snacks, nutritional supplements, groceries, hygiene supplies, and child growth monitoring.',
  'Proporcionamos refrigerios, suplementación alimentaria, mercados, implementos de aseo, y monitoreo del crecimiento infantil.':
    'We provide snacks, nutritional supplements, groceries, hygiene supplies, and child growth monitoring.',
  'También capacitamos a las familias en hábitos de alimentación saludable e higiene.':
    'We also train families in healthy eating and hygiene habits.',
  'Entrega de Mercados y Proteína': 'Grocery & Protein Delivery',
  'Mercados completos y cubetas de huevos entregados a familias de Bocachica.':
    'Full grocery packages and egg cartons delivered to Bocachica families.',
  'Taller de Nutrición y Cocina Saludable': 'Nutrition & Healthy Cooking Workshop',
  'Capacitación comunitaria en manipulación higiénica y preparación de alimentos.':
    'Community training in hygienic food handling and meal preparation.',
  'Cocina Comunitaria y Refrigerios Diarios': 'Community Kitchen & Daily Snacks',
  'Preparación de raciones y refrigerios nutritivos diarios para los niños.':
    'Preparation of daily nutritious meals and snacks for the children.',
  'Monitoreo de Crecimiento y Salud Integral': 'Growth & Holistic Health Monitoring',
  'Seguimiento de peso, talla y hábitos de higiene preventiva en la isla.':
    'Monitoring weight, height, and preventive hygiene habits on the island.',

  // Program 7 Data
  'Formación en herramientas de crianza respetuosa, comunicación asertiva, manejo de límites y restauración familiar.':
    'Training in respectful parenting, assertive communication, setting boundaries, and family restoration.',
  'Formamos a padres y cuidadores en herramientas de crianza respetuosa, comunicación asertiva, manejo de límites y fortalecimiento familiar.':
    'We train parents and caregivers in respectful parenting tools, assertive communication, setting boundaries, and family strengthening.',
  'Una comunidad se transforma cuando sus familias son restauradas.':
    'A community is transformed when its families are restored.',
  'Padres e Hijos en Convivencia Pacífica': 'Parents & Children in Peaceful Coexistence',
  'Paternidad amorosa, diálogo asertivo y presencia formativa en el hogar.':
    'Loving parenting, assertive dialogue, and formative presence at home.',
  'Madres y Cuidadores Fortalecidos': 'Strengthened Mothers & Caregivers',
  'Familias unidas aprendiendo a respaldar el crecimiento integral de sus hijos.':
    'United families learning to support the holistic growth of their children.',
  'Pautas de Crianza Afectuosa': 'Affectionate Parenting Guidelines',
  'Construyendo hogares sin violencia donde los niños crecen seguros y amados.':
    'Building violence-free homes where children grow up safe and loved.',
  'Comunidad y Familias Restauradas': 'Community & Restored Families',
  'Celebrando el impacto visible de hogares sanos en la transformación comunitaria.':
    'Celebrating the visible impact of healthy homes in community transformation.',

  // =========================================================================
  // 5. NUEVOS PROGRAMAS 2026 PAGE & DATA
  // =========================================================================
  'PLAN ESTRATÉGICO 2026': '2026 STRATEGIC PLAN',
  'NUEVOS PROGRAMAS': 'NEW PROGRAMS',
  'PARA 2026': 'FOR 2026',
  'Nuestro plan estratégico 2026 busca': 'Our 2026 strategic plan seeks to',
  'ampliar el impacto y generar oportunidades reales de movilidad social':
    'expand impact and generate real opportunities for social mobility',
  'Toca cualquiera de los 3 cuadros para abrir su pop-up con 4 imágenes:':
    'Explore our 3 projected programs designed for community growth:',
  'Bocachica en Movimiento': 'Bocachica in Motion',
  'Energía, vitalidad y esperanza de futuro para la niñez insular':
    'Energy, vitality, and hope for the future of island children',
  'Programas Proyectados 2026': 'Projected Programs 2026',
  'Nuevas áreas formativas de emprendimiento, tecnología y habilidades digitales diseñadas para la comunidad de Bocachica.':
    'New training areas in entrepreneurship, technology, and digital skills designed for the Bocachica community.',
  'Programa Proyectado': 'Projected Program',
  'En etapa de formulación y equipamiento': 'In formulation and equipping stage',
  'Emprendimiento': 'Entrepreneurship',
  'Formación para pequeños negocios, habilidades comerciales, administración básica y creación de modelos de negocio sostenibles.':
    'Training for small businesses, commercial skills, basic management, and creating sustainable business models.',
  'Habilidades Técnicas a Través de la Virtualidad': 'Technical Skills Through Virtual Learning',
  'Capacitación certificable en áreas técnicas como electricidad básica, hotelería, marketing digital, primeros auxilios, oficios turísticos y más.':
    'Certifiable training in technical areas such as basic electricity, hospitality, digital marketing, first aid, tourism trades, and more.',
  'Curso de Sistemas y Herramientas Digitales': 'Computer Systems & Digital Tools Course',
  'Formación en informática básica, competencias digitales, ofimática e Internet seguro.':
    'Training in basic computing, digital skills, office software, and safe internet use.',
  'Será clave para jóvenes y adultos que buscan oportunidades laborales y crecimiento profesional.':
    'It will be key for youth and adults seeking job opportunities and professional growth.',
  'Cimientos Espirituales': 'Spiritual Foundations',
  'Una Fe Viva que Inspira a Transformar la Realidad': 'A Living Faith That Inspires Transforming Reality',
  'Los nuevos programas nacen de un compromiso con la formación ética, espiritual y profesional de las nuevas generaciones.':
    'The new programs are born from a commitment to the ethical, spiritual, and professional formation of new generations.',
  'Infraestructura y Aulas': 'Infrastructure & Classrooms',
  'Las nuevas aulas virtuales requieren el auditorio terminado':
    'The new virtual classrooms require the completed auditorium',
  'Conoce el avance del proyecto de infraestructura donde funcionarán las computadoras, la conectividad satelital y los talleres productivos.':
    'Learn about the progress of the infrastructure project that will house the computers, satellite connectivity, and productive workshops.',
  'Ver Proyectos de Infraestructura': 'View Infrastructure Projects',
  'Donar para Dotación': 'Donate for Equipment',

  // =========================================================================
  // 6. PROYECTOS PAGE
  // =========================================================================
  'Donar a los Proyectos': 'Donate to Projects',
  'Plan Estratégico 2025–2026': '2025–2026 Strategic Plan',
  'PROYECTOS EN MARCHA': 'ONGOING PROJECTS',
  'Nuestro plan estratégico 2025–2026 busca ampliar el impacto y generar oportunidades reales de movilidad social con la ejecución de las siguientes obras:':
    'Our 2025–2026 strategic plan seeks to expand impact and generate real opportunities for social mobility through the execution of the following works:',
  'Salón de artes y talleres': 'Arts & workshops room',
  'Construcción de Auditorio Comunitario': 'Community Auditorium Construction',
  'Un espacio para talleres, formaciones, cultos, actividades culturales y encuentros comunitarios.':
    'A space for workshops, training, worship services, cultural activities, and community gatherings.',
  'Será el corazón de nuestras actividades masivas y de formación.':
    'It will be the heart of our large-scale and training activities.',
  'Construcción de Salones Nuevos': 'Construction of New Classrooms',
  'Edificación de 3 nuevos salones, incluyendo un salón de sistemas con 15–20 computadores.':
    'Construction of 3 new classrooms, including a computer lab with 15–20 computers.',
  'Espacios seguros, ventilados y diseñados para educación moderna.':
    'Safe, well-ventilated spaces designed for modern education.',
  'Auditorio comunitario polivalente': 'Multi-purpose community auditorium',
  'Punto de abastecimiento local': 'Local supply point',
  'Auto Sostenibilidad': 'Self-Sustainability',
  'Desarrollo de un local diseñado para generar ingresos que fortalezcan la sostenibilidad financiera de LSP.':
    "Development of a commercial space designed to generate revenue that strengthens LSP's financial sustainability.",
  'Generar oportunidades de empleo a la comunidad.':
    'Generating employment opportunities for the community.',
  'Potabilización de Agua': 'Water Purification',
  'Instalación de sistemas de recolección, almacenamiento y filtración para el acceso a agua potable.':
    'Installation of rainwater harvesting, storage, and filtration systems for access to safe drinking water.',
  'Beneficiará a los niños, sus familias y la comunidad en general, reduciendo enfermedades y mejorando la calidad de vida.':
    'It will benefit children, their families, and the wider community, reducing illness and improving quality of life.',
  'Acceso vital a agua potable': 'Vital access to clean drinking water',
  'Perspectiva exterior del Centro Comunitario de Lives Saved Project en Bocachica':
    'Exterior perspective of the Lives Saved Project Community Center in Bocachica',
  'Diseño arquitectónico integral': 'Comprehensive architectural design',
  'Infraestructura Educativa y Comunitaria': 'Educational & Community Infrastructure',
  'AUDITORIO Y SALONES NUEVOS': 'AUDITORIUM & NEW CLASSROOMS',
  'Plano 3D con distribución de auditorio, aula de informática, salón de artes y local comercial':
    '3D floor plan featuring auditorium, computer lab, arts room, and commercial unit',
  'Distribución modular': 'Modular layout',
  'Salón de cómputo para educación virtual': 'Computer lab for virtual education',
  'Equipado con 15–20 terminales de acceso a Internet, ofimática y plataformas formativas.':
    'Equipped with 15–20 workstations with internet access, office software, and learning platforms.',
  'Salones para clases presenciales en artes y refuerzo académico':
    'Classrooms for in-person arts and academic reinforcement',
  'Aulas modulares con ventilación bioclimática, biblioteca, mesas de trabajo y acústica adaptada.':
    'Modular classrooms with bioclimatic ventilation, library, worktables, and adapted acoustics.',
  'Local comercial para autosostenibilidad': 'Commercial unit for self-sustainability',
  'Unidad productiva con estantería, refrigeración y productos de primera necesidad.':
    'Productive retail unit with shelving, refrigeration, and essential everyday goods.',
  'Fotografías oficiales de avance en campo: cerramiento, zapatas y linderos en Bocachica.':
    'Official field progress photos: perimeter fencing, footings, and boundaries in Bocachica.',
  'Estado Real de Construcción': 'Actual Construction Status',
  'AVANCES': 'PROGRESS',
  'Para concluir nuestro proyecto tenemos una meta de':
    'To complete our project, we have a goal of',
  ', con': ', with',
  'recaudados y': 'raised and',
  'por recaudar. Sin embargo hemos logrado avanzar con actividades de cimentación y cerramiento. Aún es una fase preliminar y creemos que seguiremos avanzando con la ayuda de Dios y personas maravillosas como tú que respaldan este proyecto.':
    "remaining to be raised. However, we have made progress with foundation and perimeter fencing work. It is still a preliminary phase, and we believe we will keep moving forward with God's help and wonderful people like you who support this project.",
  'Meta Total': 'Total Goal',
  'Recaudado': 'Raised',
  'Por Recaudar': 'Remaining',
  'Porcentaje de Avance Financiero:': 'Financial Progress Percentage:',

  // =========================================================================
  // 7. PLANES DE SUSCRIPCIÓN PAGE
  // =========================================================================
  'Comunidad de Bocachica, Bolívar': 'Bocachica Community, Bolívar',
  'Tu suscripción mensual garantiza alimentación, educación y amor para cada uno de nuestros niños.':
    'Your monthly subscription guarantees food, education, and love for each of our children.',
  'Haz clic en cualquiera de los planes para iniciar tu donación periódica a través de la plataforma segura:':
    'Click any of the plans to start your recurring donation through our secure platform:',
  'Plan Semilla – $40.000 COP / USD 10': 'Seed Plan – $40,000 COP / USD 10',
  'Apoyo a la operación básica del programa.': 'Supports basic program operations.',
  'Plan Esperanza – $80.000 COP / USD 20': 'Hope Plan – $80,000 COP / USD 20',
  'Aporta a refuerzo académico, materiales y refrigerios.':
    'Contributes to academic reinforcement, school supplies, and snacks.',
  'Plan Transformación – $120.000 COP / USD 30': 'Transformation Plan – $120,000 COP / USD 30',
  'Sostiene procesos psicológicos, trabajo social y formación familiar.':
    'Sustains psychological care, social work, and family training.',
  'Plan Futuro – $160.000 COP / USD 40': 'Future Plan – $160,000 COP / USD 40',
  'Impulsa programas técnicos, cursos digitales y oportunidades de empleo.':
    'Drives technical programs, digital courses, and employment opportunities.',
  'Plan Salvavidas – $200.000 COP / USD 50': 'Lifesaver Plan – $200,000 COP / USD 50',
  'Para apoyar integralmente el crecimiento de los niños.':
    "To holistically support children's growth and development.",
  'Empresarial – Desde $500.000 COP mensuales': 'Corporate – Starting at $500,000 COP monthly',
  'Vincular empresa': 'Partner company',
  'Para empresas que desean articular su responsabilidad social con impacto real y medible.':
    'For companies looking to connect their social responsibility with real, measurable impact.',
  'Incluye reportes, participación en actividades, reconocimiento público y posibilidades de voluntariado corporativo.':
    'Includes reports, participation in activities, public recognition, and corporate volunteering opportunities.',
  'Todos los planes redirigen al portal seguro de donación oficial':
    'All plans redirect to the official secure donation portal',
  'Abrir portal de donación ↗': 'Open donation portal ↗',

  // =========================================================================
  // 8. PLAN PADRINO PAGE
  // =========================================================================
  'Conviértete en un Padrino': 'Become a Sponsor',
  'Un': 'A',
  'Padrino Salvavidas': 'Lifesaver Sponsor',
  'es alguien que decide': 'is someone who chooses to',
  'invertir en el futuro de un niño, su familia y su comunidad':
    'invest in the future of a child, their family, and their community',
  '. Tu aporte mensual permite que los programas sigan funcionando y que más niños tengan acceso a educación, bienestar y oportunidades.':
    '. Your monthly contribution keeps our programs running and gives more children access to education, well-being, and opportunities.',
  '¡Juntos Podemos hacer una diferencia!': 'Together We Can Make a Difference!',
  'Quiero apadrinar ahora': 'I want to sponsor now',
  'Ver planes de suscripción': 'View subscription plans',
  'Escanea o toca aquí y Apóyanos': 'Scan or tap here & Support Us',
  '«Y el que da semilla al que siembra, y pan al que come, proveerá y multiplicará vuestra sementera, y aumentará los frutos de vuestra justicia».':
    '“Now He who supplies seed to the sower and bread for food will supply and multiply your seed for sowing and increase the harvest of your righteousness.”',
  '2 Corintios 9:10': '2 Corinthians 9:10',
  'Iglesia En El Lugar Santísimo': 'En El Lugar Santísimo Church',
  'Transparencia y Dignidad': 'Transparency & Dignity',
  '¿Por qué apadrinar con Lives Saved Project?': 'Why sponsor with Lives Saved Project?',
  'Impacto Colectivo y Digno': 'Collective & Dignified Impact',
  'Los aportes se administran colectivamente para que todos los niños reciban la misma calidad en educación, útiles escolares y refrigerios sin diferencias.':
    'Contributions are managed collectively so every child receives the same quality of education, school supplies, and snacks equally.',
  'Reportes y Testimonios': 'Reports & Testimonies',
  'Recibirás actualizaciones periódicas sobre los talleres de arte, música, refuerzo académico y avances comunitarios en Bocachica.':
    'You will receive periodic updates on art and music workshops, academic reinforcement, and community progress in Bocachica.',
  'Flexibilidad Total': 'Full Flexibility',
  'Puedes ajustar, pausar o renovar tu plan en cualquier momento a través de la plataforma segura de aportes.':
    'You can adjust, pause, or renew your plan at any time through our secure giving platform.',

  // =========================================================================
  // 9. APÓYANOS PAGE
  // =========================================================================
  'Apoya a Lives Saved Project': 'Support Lives Saved Project',
  'Tu aporte ayuda a sostener educación, bienestar y oportunidades para las familias de Bocachica.':
    'Your contribution helps sustain education, well-being, and opportunities for families in Bocachica.',
  'Ministerio Internacional En El Lugar Santísimo': 'En El Lugar Santísimo International Ministry',
  'Cuenta de ahorros Bancolombia': 'Bancolombia Savings Account',
  'Iglesia Comunidad Cristiano Carismática La Esperanza':
    'La Esperanza Christian Charismatic Community Church',
  'Dona con tarjeta de débito o crédito': 'Donate with debit or credit card',
  '¿Tienes dudas con tu transferencia? Confirmación directa al WhatsApp:':
    'Questions about your transfer? Direct confirmation via WhatsApp:',
  'Sanar emocionalmente es el primer paso para construir un futuro lleno de esperanza y oportunidades.':
    'Emotional healing is the first step toward building a future full of hope and opportunities.',
  'Certificado Tributario': 'Tax Certificate',
  'La Iglesia Comunidad Cristiano Carismática La Esperanza emite certificados oficiales de donación para deducciones legales.':
    'La Esperanza Christian Charismatic Community Church issues official donation certificates for tax deductions.',
  'Confirmación Inmediata': 'Instant Confirmation',
  'Envía tu comprobante de Zelle o Bancolombia a nuestra línea de atención para registrar tu donación y vincular tu reporte de impacto.':
    'Send your Zelle or Bancolombia receipt to our support line to register your donation and link your impact report.',
  'Impacto 100% en Bocachica': '100% Impact in Bocachica',
  'Cada aporte sostiene directamente las raciones alimentarias, útiles escolares, psicólogos y docentes en el territorio insular.':
    'Every contribution directly sustains food rations, school supplies, psychologists, and teachers on the island.',

  // =========================================================================
  // 10. FOOTER, WHATSAPP WIDGET & VIDEO MODAL
  // =========================================================================
  'Iniciativa social de la Iglesia En el Lugar Santísimo. Más de 10 años promoviendo educación, salud emocional, familia y fe en la comunidad de Bocachica, isla de Tierra Bomba.':
    'Social initiative of En el Lugar Santísimo Church. Over 10 years promoting education, emotional health, family, and faith in the community of Bocachica, Tierra Bomba Island.',
  'Entidad: Iglesia Cristiana En el Lugar Santísimo': 'Entity: En el Lugar Santísimo Christian Church',
  'Páginas del Sitio': 'Site Pages',
  'Contacto y Ubicación': 'Contact & Location',
  'Donaciones y certificados coordinados directamente con la administración de la Iglesia En el Lugar Santísimo.':
    'Donations and certificates coordinated directly with the administration of En el Lugar Santísimo Church.',
  '¿Necesitas ayuda?': 'Need help?',
  'Chatea con nosotros al': 'Chat with us at',
  'Conoce el corazón de nuestra labor e impacto en la isla':
    'Discover the heart of our work and impact on the island',
  'Cada aporte hace posible transformar el futuro de los niños y familias de Bocachica.':
    'Every contribution makes it possible to transform the future of children and families in Bocachica.',
  'Continuar al sitio': 'Continue to site',
  'Apoyar la Misión': 'Support the Mission',

  // Tooltips / Titles / Placeholders
  'Copiar número de Zelle': 'Copy Zelle number',
  'Copiar número de cuenta Bancolombia': 'Copy Bancolombia account number',
  'Escríbenos a WhatsApp: +57 318 330 8302': 'Message us on WhatsApp: +57 318 330 8302',
};

// Pre-sort keys longest-first for safe partial phrase replacement
const SORTED_PARTIAL_ENTRIES = Object.entries(TRANSLATIONS)
  .filter(([es]) => es.length > 4)
  .sort((a, b) => b[0].length - a[0].length);

// Dynamic template patterns (counters, dynamic badges, copyright)
const PILLAR_EN_MAP: Record<string, string> = {
  EDUCACIÓN: 'EDUCATION',
  EDUCACION: 'EDUCATION',
  FAMILIA: 'FAMILY',
  BIENESTAR: 'WELLNESS',
  FE: 'FAITH',
};

function translateDynamicPattern(normalized: string): string | null {
  // "PROGRAMA 1 DE 7 · Educación"
  const progMatch = normalized.match(/^PROGRAMA\s+(\d+)\s+DE\s+(\d+)\s*·\s*(.+)$/i);
  if (progMatch) {
    const [, num, total, cat] = progMatch;
    const translatedCat = TRANSLATIONS[cat.trim()] || cat.trim();
    return `PROGRAM ${num} OF ${total} · ${translatedCat}`;
  }

  // "EJE EDUCACIÓN · FOTOGRAFÍA 1 DE 4"
  const ejeMatch = normalized.match(/^EJE\s+(EDUCACIÓN|EDUCACION|FAMILIA|BIENESTAR|FE)\s*·\s*FOTOGRAFÍA\s+(\d+)\s+DE\s+(\d+)$/i);
  if (ejeMatch) {
    const [, pillar, num, total] = ejeMatch;
    const translatedPillar = PILLAR_EN_MAP[pillar.toUpperCase()] || pillar.toUpperCase();
    return `PILLAR ${translatedPillar} · PHOTO ${num} OF ${total}`;
  }

  // "Foto 1 de 4"
  const photoOfMatch = normalized.match(/^Foto\s+(\d+)\s+de\s+(\d+)$/i);
  if (photoOfMatch) {
    return `Photo ${photoOfMatch[1]} of ${photoOfMatch[2]}`;
  }

  // "1 de 4"
  const countOfMatch = normalized.match(/^(\d+)\s+de\s+(\d+)$/i);
  if (countOfMatch) {
    return `${countOfMatch[1]} of ${countOfMatch[2]}`;
  }

  // "© 2026 Lives Saved Project · Iglesia En el Lugar Santísimo."
  const copyMatch = normalized.match(/^©\s*(\d+)\s*Lives Saved Project\s*·\s*Iglesia En el Lugar Santísimo\.$/i);
  if (copyMatch) {
    return `© ${copyMatch[1]} Lives Saved Project · En el Lugar Santísimo Church.`;
  }

  // "Entidad: ..."
  if (normalized.startsWith('Entidad:')) {
    const rest = normalized.slice('Entidad:'.length).trim();
    const translatedRest = TRANSLATIONS[rest] || rest.replace('Iglesia Cristiana En el Lugar Santísimo', 'En el Lugar Santísimo Christian Church');
    return `Entity: ${translatedRest}`;
  }

  return null;
}

function translateStringToEnglish(rawText: string): string {
  const leadingWs = rawText.match(/^\s*/)?.[0] ?? '';
  const trailingWs = rawText.match(/\s*$/)?.[0] ?? '';
  const normalized = rawText.replace(/\s+/g, ' ').trim();
  if (!normalized) return rawText;

  // 1. Exact normalized match
  const exact = TRANSLATIONS[normalized];
  if (exact) {
    return leadingWs + exact + trailingWs;
  }

  // 2. Dynamic pattern match
  const dynamic = translateDynamicPattern(normalized);
  if (dynamic) {
    return leadingWs + dynamic + trailingWs;
  }

  // 3. Partial fallback (longest keys first)
  let updated = normalized;
  let changed = false;
  for (const [es, en] of SORTED_PARTIAL_ENTRIES) {
    if (updated.includes(es)) {
      updated = updated.replaceAll(es, en);
      changed = true;
    }
  }

  if (changed) {
    return leadingWs + updated + trailingWs;
  }

  return rawText;
}

// Store original Spanish text ONLY for nodes we actually mutated
const originalTextMap = new WeakMap<Node, string>();
// Store the last value written by our translator so characterData observer knows if React changed a node in-place
const lastWrittenValueMap = new WeakMap<Node, string>();
// Store original attributes ('title', 'placeholder')
const originalAttrMap = new WeakMap<Element, Record<string, string>>();

let domObserver: MutationObserver | null = null;
let currentActiveLang: 'es' | 'en' = 'es';

function translateTextNode(node: Node) {
  if (!node.nodeValue) return;
  const trimmed = node.nodeValue.trim();
  if (!trimmed) return;

  if (currentActiveLang === 'en') {
    // Check if React changed this node's text externally since our last translation write
    const lastWritten = lastWrittenValueMap.get(node);
    if (lastWritten !== undefined && node.nodeValue !== lastWritten) {
      originalTextMap.delete(node);
      lastWrittenValueMap.delete(node);
    }

    const sourceSpanish = originalTextMap.get(node) ?? node.nodeValue;
    const translated = translateStringToEnglish(sourceSpanish);

    if (translated !== sourceSpanish) {
      originalTextMap.set(node, sourceSpanish);
      if (node.nodeValue !== translated) {
        lastWrittenValueMap.set(node, translated);
        node.nodeValue = translated;
      }
    }
  } else {
    // Restore original Spanish if we previously translated this node
    if (originalTextMap.has(node)) {
      const original = originalTextMap.get(node)!;
      const lastWritten = lastWrittenValueMap.get(node);
      // Only restore if React hasn't already overwritten the node with new text
      if (lastWritten === undefined || node.nodeValue === lastWritten) {
        if (node.nodeValue !== original) {
          node.nodeValue = original;
        }
      }
      originalTextMap.delete(node);
      lastWrittenValueMap.delete(node);
    }
  }
}

const TRANSLATABLE_ATTRS = ['title', 'placeholder'] as const;

function translateElementAttributes(el: Element) {
  if (currentActiveLang === 'en') {
    for (const attr of TRANSLATABLE_ATTRS) {
      const val = el.getAttribute(attr);
      if (!val || !val.trim()) continue;

      const saved = originalAttrMap.get(el) || {};
      const source = saved[attr] ?? val;
      const translated = translateStringToEnglish(source);
      if (translated !== source) {
        saved[attr] = source;
        originalAttrMap.set(el, saved);
        if (val !== translated) {
          el.setAttribute(attr, translated);
        }
      }
    }
  } else {
    const saved = originalAttrMap.get(el);
    if (saved) {
      for (const attr of TRANSLATABLE_ATTRS) {
        if (saved[attr] !== undefined) {
          el.setAttribute(attr, saved[attr]);
        }
      }
      originalAttrMap.delete(el);
    }
  }
}

function walkAndTranslate(root: Node) {
  if (root.nodeType === Node.ELEMENT_NODE) {
    translateElementAttributes(root as Element);
  }

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
    {
      acceptNode(node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const tag = (node as Element).tagName.toLowerCase();
          if (tag === 'script' || tag === 'style' || tag === 'noscript') {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
        if (!node.nodeValue || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName.toLowerCase();
        if (tag === 'script' || tag === 'style' || tag === 'noscript') {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    }
  );

  let current = walker.nextNode();
  while (current) {
    if (current.nodeType === Node.TEXT_NODE) {
      translateTextNode(current);
    } else if (current.nodeType === Node.ELEMENT_NODE) {
      translateElementAttributes(current as Element);
    }
    current = walker.nextNode();
  }
}

/**
 * Programmatically apply English or Spanish translation across the application
 */
export function setGoogleLanguage(targetLang: 'es' | 'en') {
  currentActiveLang = targetLang;
  document.documentElement.lang = targetLang;

  if (typeof document !== 'undefined' && document.body) {
    walkAndTranslate(document.body);

    if (!domObserver) {
      domObserver = new MutationObserver((mutations) => {
        if (currentActiveLang !== 'en') return;

        for (const mutation of mutations) {
          if (mutation.type === 'characterData') {
            const targetNode = mutation.target;
            const lastWritten = lastWrittenValueMap.get(targetNode);
            // Ignore mutations caused by our own translator writes
            if (lastWritten !== undefined && targetNode.nodeValue === lastWritten) {
              continue;
            }
            translateTextNode(targetNode);
          } else if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.TEXT_NODE) {
                translateTextNode(node);
              } else if (node.nodeType === Node.ELEMENT_NODE) {
                walkAndTranslate(node);
              }
            });
          }
        }
      });

      domObserver.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    }
  }

  try {
    const cookieValue = targetLang === 'en' ? '/es/en' : '/es/es';
    document.cookie = `googtrans=${cookieValue}; path=/;`;
    if (window.location.hostname) {
      document.cookie = `googtrans=${cookieValue}; domain=${window.location.hostname}; path=/;`;
    }

    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (select) {
      select.value = targetLang;
      select.dispatchEvent(new Event('change'));
    }
  } catch (err) {
    console.debug('Optional Google Translate widget fallback:', err);
  }
}
