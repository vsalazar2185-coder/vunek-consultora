import {
  BarChart3,
  BrainCircuit,
  Building2,
  Compass,
  FileSearch,
  GraduationCap,
  Landmark,
  LineChart,
  Network,
  Route,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Workflow
} from "lucide-react";

export const siteUrl = "https://vunek.example";

// Reemplaza por tu ID real de https://formspree.io (Dashboard > New Form).
// Ver instrucciones de configuración en README.md > "Conectar el formulario de contacto".
export const formspreeId = "TU_FORM_ID";

export const brand = {
  name: "VUNEK",
  descriptor: "Estrategia, transformación digital y gestión organizacional.",
  promise: "Convertimos desafíos organizacionales en soluciones claras, aplicables y medibles.",
  motto: "De la estrategia a la implementación.",
  aboutHeading: "Rigor ejecutivo para transformar decisiones en resultados.",
  aboutParagraphs: [
    "VUNEK acompaña procesos de transformación desde una perspectiva ejecutiva y aplicada, integrando estrategia, transformación digital y gestión organizacional mediante un mismo método de trabajo.",
    "Contamos con un equipo multidisciplinario que trabaja directamente con equipos directivos y unidades clave para convertir cada decisión estratégica en soluciones aplicables, capacidades sostenibles y resultados medibles.",
    "Nuestro trabajo combina análisis riguroso, diseño contextualizado, acompañamiento a la implementación y transferencia de capacidades, procurando que las soluciones puedan ser apropiadas y sostenidas por la propia organización."
  ],
  valuePropHeading: "Una visión integrada para transformar con método.",
  valuePropParagraph:
    "Integramos estrategia, transformación digital y gestión organizacional para que las decisiones no terminen en recomendaciones aisladas, sino que se conviertan en soluciones implementables y capacidades sostenibles.",
  mission:
    "Ayudar a instituciones, empresas y organizaciones a ordenar su estrategia, activar su transformación digital y fortalecer su gestión mediante un método que conecta diagnóstico, decisión, diseño e implementación.",
  vision:
    "Ser un socio estratégico de confianza para organizaciones que buscan transformar su forma de operar, reconocido por convertir la estrategia en soluciones aplicables, capacidades sostenibles y resultados medibles.",
  email: "contacto@vunek.com"
};

// Nota: logo/logoWhite todavía muestran el wordmark "VESP" dibujado en la imagen
// (heredado del rebrand). Header y Footer usan icon/iconWhite + texto {brand.name}
// en su lugar. Reemplazar logo/logoWhite cuando exista un wordmark "VUNEK" real.
export const assets = {
  logo: "/assets/logo-vesp.png",
  logoWhite: "/assets/logo-vesp-white.png",
  icon: "/assets/icon-vesp.png",
  iconWhite: "/assets/icon-vesp-white.png",
  horizon: "/assets/cumbre-horizonte.png",
  ogImage: "/assets/vesp-linea-grafica-referencia.png"
};

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Metodología", href: "#metodo" },
  { label: "Nosotros", href: "#sobre-vesp" },
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Sectores", href: "#sectores" },
  { label: "Contacto", href: "#contacto" }
];

export const problemCards = [
  {
    title: "Estrategia fragmentada",
    description: "Prioridades dispersas, iniciativas desconectadas y decisiones que no se traducen en una hoja de ruta común."
  },
  {
    title: "Transformación digital sin adopción",
    description: "Tecnologías incorporadas sin integración operativa, apropiación de los equipos ni resultados verificables."
  },
  {
    title: "Procesos poco claros",
    description: "Roles, responsabilidades, flujos de trabajo y mecanismos de decisión que dificultan la ejecución."
  },
  {
    title: "Datos sin uso ejecutivo",
    description: "Información disponible, pero insuficientemente organizada para orientar decisiones y seguimiento."
  },
  {
    title: "Capacidades internas insuficientes",
    description: "Equipos que requieren nuevas herramientas, conocimientos y mecanismos de acompañamiento."
  },
  {
    title: "Falta de medición",
    description: "Iniciativas sin indicadores, evidencias ni rutinas que permitan evaluar avances y resultados."
  }
];

export const valuePillars = [
  {
    title: "Claridad estratégica",
    description:
      "Comprendemos el desafío, ordenamos prioridades y construimos una hoja de ruta realista, alineada con los objetivos y capacidades de la organización.",
    Icon: Compass
  },
  {
    title: "Soluciones aplicables",
    description: "Diseñamos procesos, sistemas, herramientas y modelos de trabajo preparados para integrarse a la operación.",
    Icon: Workflow
  },
  {
    title: "Implementación y medición",
    description:
      "Acompañamos la puesta en marcha, adopción, seguimiento y evaluación de las soluciones mediante indicadores y evidencias.",
    Icon: LineChart
  }
];

export const methodSteps = [
  {
    letter: "V",
    title: "Visión del desafío",
    description:
      "Comprendemos el contexto, delimitamos el desafío e identificamos brechas, riesgos, actores, capacidades y oportunidades. Esta etapa permite construir una lectura compartida de la situación actual y establecer el punto de partida de la intervención."
  },
  {
    letter: "E",
    title: "Estrategia de intervención",
    description:
      "Definimos prioridades, objetivos, indicadores, gobernanza, responsabilidades y criterios de decisión. La estrategia se traduce en una hoja de ruta realista, con etapas, recursos y mecanismos de seguimiento."
  },
  {
    letter: "S",
    title: "Soluciones y sistemas",
    description:
      "Diseñamos las respuestas necesarias para abordar el desafío: procesos, estructuras, plataformas, automatizaciones, modelos de datos, agentes de inteligencia artificial, rutas formativas y mecanismos de coordinación. Cada solución se diseña considerando su aplicabilidad, adopción y sostenibilidad."
  },
  {
    letter: "P",
    title: "Puesta en marcha y medición",
    description:
      "Acompañamos la implementación, transferencia y adopción de las soluciones. Definimos evidencias, indicadores y rutinas de seguimiento para medir resultados, fortalecer capacidades internas y sostener la mejora continua."
  }
];

export const services = [
  {
    title: "Diagnóstico estratégico y hoja de ruta de transformación",
    description:
      "Analizamos el contexto, las brechas, capacidades, riesgos y prioridades de la organización para construir una visión compartida del desafío.",
    deliverable: "Entregables principales: diagnóstico ejecutivo, mapa de brechas, prioridades de intervención y hoja de ruta.",
    Icon: FileSearch
  },
  {
    title: "Transformación digital, datos e inteligencia artificial aplicada",
    description:
      "Diseñamos iniciativas digitales conectadas con la operación, la estrategia institucional, el uso de datos y la adopción de los equipos.",
    deliverable:
      "Entregables principales: estrategia digital, portafolio de iniciativas, casos de uso, modelos de datos y criterios de implementación.",
    Icon: BrainCircuit
  },
  {
    title: "Gestión organizacional y mejora de procesos",
    description: "Revisamos procesos críticos, responsabilidades, flujos de decisión, estructuras y mecanismos de coordinación.",
    deliverable: "Entregables principales: mapa de procesos, rediseño operativo, protocolos, flujos y matrices de responsabilidades.",
    Icon: Settings2
  },
  {
    title: "Desarrollo de capacidades, adopción e implementación",
    description: "Fortalecemos los conocimientos, herramientas y prácticas que los equipos necesitan para sostener nuevas formas de trabajo.",
    deliverable:
      "Entregables principales: diagnóstico de capacidades, rutas formativas, sesiones aplicadas, plan de adopción y mecanismos de transferencia.",
    Icon: UsersRound
  },
  {
    title: "Gestión académica e innovación educativa",
    description:
      "Acompañamos a instituciones educativas en el diseño y fortalecimiento de modelos académicos, procesos, sistemas de acompañamiento, educación digital y mecanismos de aseguramiento de la calidad.",
    deliverable:
      "Entregables principales: modelos académico-operativos, rutas formativas, sistemas de acompañamiento, procesos y tableros de seguimiento.",
    Icon: GraduationCap
  },
  {
    title: "Gobernanza, indicadores y modelos de seguimiento",
    description: "Diseñamos estructuras de decisión, responsabilidades, indicadores y rutinas ejecutivas para orientar y medir la implementación.",
    deliverable: "Entregables principales: modelo de gobernanza, tablero ejecutivo, matriz de indicadores y sistema de seguimiento.",
    Icon: BarChart3
  }
];

export const solutionCategories = [
  {
    category: "Estrategia y gestión",
    Icon: Compass,
    items: [
      "Hojas de ruta estratégicas",
      "Modelos de gobernanza",
      "Rediseño de procesos",
      "Matrices de roles y responsabilidades",
      "Tableros ejecutivos",
      "Sistemas de seguimiento"
    ]
  },
  {
    category: "Transformación digital e inteligencia artificial",
    Icon: BrainCircuit,
    items: [
      "Diseño de agentes de IA por unidad funcional",
      "Asistentes para análisis documental y reportería",
      "Automatización de procesos críticos",
      "Modelos institucionales de datos",
      "Protocolos de uso responsable de IA",
      "Diseño de casos de uso y planes de adopción"
    ]
  },
  {
    category: "Capacidades y adopción",
    Icon: UsersRound,
    items: [
      "Rutas formativas por área",
      "Academias internas de transformación digital",
      "Programas de transferencia",
      "Planes de adopción",
      "Evaluación de capacidades",
      "Modelos de acompañamiento al cambio"
    ]
  },
  {
    category: "Gestión académica e innovación educativa",
    Icon: GraduationCap,
    items: [
      "Modelos académico-operativos",
      "Sistemas de acompañamiento académico",
      "Rutas de formación docente",
      "Automatización de procesos académicos",
      "Tableros de gestión",
      "Modelos de educación digital"
    ]
  }
];

export const sectors = [
  {
    title: "Educación superior",
    description: "Transformación académica, educación digital, gobernanza, procesos, datos, calidad y acompañamiento.",
    Icon: GraduationCap
  },
  {
    title: "Empresas",
    description: "Estrategia, transformación digital, procesos, inteligencia artificial, adopción y medición.",
    Icon: Building2
  },
  {
    title: "Instituciones públicas",
    description: "Modernización, eficiencia operativa, servicios digitales, fortalecimiento de capacidades y gobernanza.",
    Icon: Landmark
  },
  {
    title: "Organizaciones sociales",
    description: "Modelos de gestión, sostenibilidad, procesos, medición de impacto y transformación digital.",
    Icon: Network
  },
  {
    title: "Áreas corporativas",
    description: "Soluciones específicas para recursos humanos, operaciones, finanzas, tecnología, formación y gestión del conocimiento.",
    Icon: BarChart3
  },
  {
    title: "Equipos directivos",
    description: "Acompañamiento ejecutivo para ordenar decisiones, prioridades, responsabilidades y mecanismos de seguimiento.",
    Icon: UsersRound
  }
];

export const values = [
  {
    title: "Rigor",
    description: "Sustentamos las decisiones en diagnóstico, evidencia y método, evitando respuestas basadas únicamente en intuiciones o supuestos.",
    Icon: Target
  },
  {
    title: "Aplicabilidad",
    description:
      "Diseñamos soluciones pensadas para implementarse, integrarse a la operación y producir resultados, no solamente para ser presentadas.",
    Icon: Workflow
  },
  {
    title: "Cercanía",
    description: "Trabajamos directamente con equipos directivos y responsables de la implementación, formando parte activa del proceso de transformación.",
    Icon: UsersRound
  },
  {
    title: "Transparencia",
    description:
      "Comunicamos con claridad los alcances, responsabilidades, tiempos, riesgos y resultados esperados, sin promesas infladas ni expectativas difíciles de sostener.",
    Icon: ShieldCheck
  }
];

export const contactNeeds = [
  "Diagnóstico estratégico",
  "Transformación digital",
  "Datos e IA aplicada",
  "Mejora de procesos",
  "Gestión académica",
  "Gobernanza e indicadores",
  "Otra necesidad"
];

export const footerCountries = "Chile";

export const decorativeIcon = Sparkles;
