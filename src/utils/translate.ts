/**
 * Comprehensive bilingual translation engine (Spanish <-> English)
 * 1. Handles React state translations
 * 2. Automatic DOM text-node translation with MutationObserver
 * 3. Fallback to Google Translate if available
 */

export const TRANSLATIONS: Record<string, string> = {
  // Navigation
  'INICIO': 'HOME',
  'INICIATIVA SOCIAL': 'SOCIAL INITIATIVE',
  'PROGRAMAS': 'PROGRAMS',
  'Programas Actuales': 'Current Programs',
  'Los 7 programas en operación': 'The 7 active programs in operation',
  'Nuevos Programas': 'New Programs',
  'Lanzamiento e innovación 2026': '2026 Launch & Innovation',
  'PROYECTOS': 'PROJECTS',
  'PLANES': 'PLANS',
  'PLAN PADRINO': 'SPONSOR A CHILD',
  'APÓYANOS': 'SUPPORT US',
  'DONA AHORA': 'DONATE NOW',
  'Dona ahora': 'Donate now',
  'Sé parte de la misión': 'Be part of the mission',

  // Hero & About
  'Donde otros ven necesidad, nosotros vemos futuro.': 'Where others see need, we see future.',
  'Transformando vidas en Bocachica, Cartagena': 'Transforming lives in Bocachica, Cartagena',
  'Iniciativa social de la Iglesia En el Lugar Santísimo': 'Social initiative of En el Lugar Santísimo Church',
  'Más de 10 años acompañando a niños, jóvenes y familias': 'Over 10 years supporting children, youth, and families',
  'Sobre Nosotros': 'About Us',
  'Nuestra Misión': 'Our Mission',
  'Nuestra Visión': 'Our Vision',
  'Nuestros 4 Ejes Fundamentales': 'Our 4 Core Pillars',

  // 4 Pillars
  'Educación': 'Education',
  'Familia': 'Family',
  'Bienestar': 'Wellness & Recreation',
  'Fe': 'Faith & Values',

  // 7 Current Programs
  'Refuerzo Académico': 'Academic Reinforcement',
  'Artes y Creatividad': 'Arts & Creativity',
  'Educación Cristiana': 'Christian Education',
  'Trabajo Social': 'Social Work',
  'Psicología': 'Psychology & Counseling',
  'Nutrición e Higiene': 'Nutrition & Hygiene',
  'Escuela de Padres': 'Parenting School',

  // Program details & Modal
  'Ver 4 Fotos': 'View 4 Photos',
  'Fotos del programa': 'Program photos',
  'Galería de Evidencias (4 Fotografías)': 'Evidence Gallery (4 Photographs)',
  'Galería de Evidencias': 'Evidence Gallery',
  'Toca para abrir pop-up con detalles': 'Tap to open details pop-up',
  'Abrir': 'Open',
  'Cerrar': 'Close',
  'Click para ampliar': 'Click to enlarge',
  'Foto anterior': 'Previous photo',
  'Siguiente foto': 'Next photo',
  'Donar / Respaldar este programa': 'Donate / Support this program',
  'PROGRAMA 1 DE 7': 'PROGRAM 1 OF 7',
  'PROGRAMA 2 DE 7': 'PROGRAM 2 OF 7',
  'PROGRAMA 3 DE 7': 'PROGRAM 3 OF 7',
  'PROGRAMA 4 DE 7': 'PROGRAM 4 OF 7',
  'PROGRAMA 5 DE 7': 'PROGRAM 5 OF 7',
  'PROGRAMA 6 DE 7': 'PROGRAM 6 OF 7',
  'PROGRAMA 7 DE 7': 'PROGRAM 7 OF 7',
  'Registro en Territorio': 'Field Records',
  'El Impacto Real de los 7 Programas': 'The Real Impact of the 7 Programs',

  // Artes y Creatividad specifics
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
    'Girls from Bocachica learning keyboard notes and finger positioning guided by their music teacher.',
  'Práctica Instrumental y Armonía': 'Instrumental Practice & Harmony',
  'Clases prácticas de teclado electrónico en grupo, cultivando la disciplina, la paciencia y el talento musical.':
    'Hands-on electronic keyboard group lessons cultivating discipline, patience, and musical talent.',
  'Lectura de Partituras y Ensamble': 'Sheet Music Reading & Ensemble',
  'Estudiantes practicando con partituras y guías musicales en un ambiente seguro y enriquecedor.':
    'Students practicing with sheet music and guides in a safe, enriching environment.',

  // Projects
  'Proyectos en Avances': 'Projects in Progress',
  'Proyectos': 'Projects',
  'Meta': 'Goal',
  'Recaudado': 'Raised',
  'Por Recaudar': 'Remaining',
  'Donar al Proyecto': 'Donate to Project',
  'Donar a los Proyectos': 'Donate to Projects',
  'Ir a la sección Apóyanos': 'Go to Support Us section',
  'Construcción de Sede Comunitaria y Educativa': 'Community & Educational Center Construction',
  'Comedor Infantil y Seguridad Alimentaria': 'Children’s Soup Kitchen & Food Security',
  'Aula Digital, Conectividad y Biblioteca': 'Digital Classroom, Connectivity & Library',
  'Fase de cimentación y estructura': 'Foundation and structural phase',
  'Equipamiento de cocina industrial y mesas': 'Industrial kitchen equipment and tables',
  'Computadores, tablets y conexión satelital': 'Computers, tablets, and satellite connection',

  // Subscription Plans & Plan Padrino
  'Planes de Suscripción': 'Subscription Plans',
  'Plan Padrino': 'Child Sponsorship Plan',
  'Apadrina un Niño': 'Sponsor a Child',
  'Apadrinar Ahora': 'Sponsor Now',
  'Elige tu plan de apoyo': 'Choose your support plan',
  'Suscripción Mensual': 'Monthly Subscription',
  'Donación Única': 'One-time Donation',
  'Transforma el destino de un niño de Bocachica con educación, nutrición, salud y acompañamiento integral.':
    'Transform the future of a child in Bocachica with education, nutrition, health, and comprehensive support.',
  'Con tu aporte mensual garantizas útiles escolares, refrigerios saludables, atención psicológica y formación en valores.':
    'With your monthly gift, you guarantee school supplies, healthy snacks, psychological care, and character formation.',

  // Apóyanos
  'Apóyanos': 'Support Us',
  'Formas de Apoyar': 'Ways to Support',
  'Tu donación transforma vidas en Bocachica': 'Your donation transforms lives in Bocachica',
  'Canales de Donación Directa': 'Direct Donation Channels',
  'Cuenta de Ahorros Bancolombia': 'Bancolombia Savings Account',
  'Cuenta Corriente': 'Checking Account',
  'Donación Internacional (Zelle / PayPal / Tarjeta)': 'International Donation (Zelle / PayPal / Card)',
  'Donaciones en Especie': 'In-Kind Donations',
  'Alimentos no perecederos, ropa en buen estado, útiles escolares y computadores': 'Non-perishable food, gently used clothing, school supplies, and computers',

  // Footer & Contact
  'Contacto': 'Contact',
  'Enlaces Rápidos': 'Quick Links',
  'Transparencia': 'Transparency',
  'Todos los derechos reservados': 'All rights reserved',
  'Horario': 'Hours',
  'Ubicación': 'Location',
  'Bocachica, Isla de Tierra Bomba, Cartagena, Colombia': 'Bocachica, Tierra Bomba Island, Cartagena, Colombia',
  'Mensaje directo por WhatsApp': 'Direct message on WhatsApp',
  'Chat en WhatsApp': 'Chat on WhatsApp',
  'Atención al donante': 'Donor Support',
};

// Store original Spanish text on DOM text nodes for lossless restore
const originalTextMap = new WeakMap<Node, string>();
let domObserver: MutationObserver | null = null;
let currentActiveLang: 'es' | 'en' = 'es';

function translateTextNode(node: Node) {
  if (!node.nodeValue) return;
  const trimmed = node.nodeValue.trim();
  if (!trimmed) return;

  if (currentActiveLang === 'en') {
    if (!originalTextMap.has(node)) {
      originalTextMap.set(node, node.nodeValue);
    }
    const original = originalTextMap.get(node) || node.nodeValue;
    const originalTrimmed = original.trim();

    // Direct match
    if (TRANSLATIONS[originalTrimmed]) {
      node.nodeValue = original.replace(originalTrimmed, TRANSLATIONS[originalTrimmed]);
      return;
    }

    // Partial phrase matches for compound headings
    for (const [es, en] of Object.entries(TRANSLATIONS)) {
      if (es.length > 5 && original.includes(es)) {
        node.nodeValue = original.replaceAll(es, en);
      }
    }
  } else {
    // Restore Spanish
    if (originalTextMap.has(node)) {
      node.nodeValue = originalTextMap.get(node)!;
    }
  }
}

function walkAndTranslate(root: Node) {
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
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
    translateTextNode(current);
    current = walker.nextNode();
  }
}

/**
 * Programmatically apply English or Spanish translation across the application
 */
export function setGoogleLanguage(targetLang: 'es' | 'en') {
  currentActiveLang = targetLang;

  // 1. Update HTML lang attribute
  document.documentElement.lang = targetLang;

  // 2. Translate current DOM tree
  if (typeof document !== 'undefined' && document.body) {
    walkAndTranslate(document.body);

    // 3. Keep translating new elements dynamically (SPA route changes, pop-up dialogs)
    if (!domObserver) {
      domObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === 'childList') {
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
      });
    }
  }

  // 4. Also trigger Google Translate cookie & select if available in the page
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
