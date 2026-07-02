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

export const siteUrl = "https://vesp.example";

// Reemplaza por tu ID real de https://formspree.io (Dashboard > New Form).
// Ver instrucciones de configuración en README.md > "Conectar el formulario de contacto".
export const formspreeId = "TU_FORM_ID";

export const brand = {
  name: "VESP",
  descriptor: "Estrategia, transformación digital y gestión organizacional.",
  promise: "Convertimos desafíos organizacionales en soluciones claras, aplicables y medibles.",
  motto: "De la estrategia a la implementación.",
  aboutHeading: "Rigor ejecutivo para transformar decisiones en resultados.",
  aboutParagraph:
    "VESP acompaña procesos de transformación con una mirada ejecutiva y aplicada, integrando estrategia, transformación digital y gestión organizacional en un mismo método de trabajo. Colaboramos junto a equipos directivos para que cada decisión se traduzca en resultados medibles.",
  commercial:
    "Acompañamos a instituciones, empresas y organizaciones en procesos de transformación digital, mejora de la gestión organizacional y desarrollo de soluciones aplicables.",
  email: "contacto@vesp.com"
};

export const assets = {
  logo: "/assets/logo-vesp.png",
  logoWhite: "/assets/logo-vesp-white.png",
  icon: "/assets/icon-vesp.png",
  horizon: "/assets/cumbre-horizonte.png",
  ogImage: "/assets/vesp-linea-grafica-referencia.png"
};

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Método", href: "#metodo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Sectores", href: "#sectores" },
  { label: "Contacto", href: "#contacto" }
];

export const problemCards = [
  "Estrategia dispersa",
  "Transformación digital sin adopción",
  "Procesos poco claros",
  "Datos sin uso ejecutivo",
  "Capacidades internas insuficientes",
  "Falta de medición"
];

export const valuePillars = [
  {
    title: "Estrategia clara",
    description: "Ordenamos el desafío, priorizamos decisiones y construimos una hoja de ruta realista.",
    Icon: Compass
  },
  {
    title: "Implementación acompañada",
    description: "Trabajamos junto a equipos directivos y unidades clave para sostener el cambio.",
    Icon: Workflow
  },
  {
    title: "Resultados medibles",
    description: "Definimos indicadores, evidencias y mecanismos de seguimiento desde el inicio.",
    Icon: LineChart
  }
];

export const methodSteps = [
  {
    letter: "V",
    title: "Visión del desafío",
    description: "Diagnóstico estratégico, lectura del contexto, brechas, riesgos, actores y oportunidades."
  },
  {
    letter: "E",
    title: "Estrategia de intervención",
    description: "Priorización, hoja de ruta, objetivos, indicadores, gobernanza y criterios de decisión."
  },
  {
    letter: "S",
    title: "Soluciones y sistemas",
    description:
      "Diseño de soluciones digitales, procesos, datos, IA, plataformas, rutas formativas y automatizaciones."
  },
  {
    letter: "P",
    title: "Puesta en marcha y medición",
    description: "Implementación acompañada, transferencia, seguimiento, evidencias, indicadores y mejora continua."
  }
];

export const services = [
  {
    title: "Diagnóstico estratégico y hoja de ruta de transformación",
    description: "Lectura ejecutiva del contexto, brechas y prioridades de cambio.",
    deliverable: "Entregable: diagnóstico, mapa de brechas y hoja de ruta priorizada.",
    Icon: FileSearch
  },
  {
    title: "Transformación digital, datos e IA aplicada",
    description: "Diseño de iniciativas digitales conectadas con operación, datos y adopción real.",
    deliverable: "Entregable: plan de transformación, casos de uso y criterios de implementación.",
    Icon: BrainCircuit
  },
  {
    title: "Gestión organizacional y mejora de procesos",
    description: "Ordenamiento de procesos críticos, roles, flujos de decisión y mecanismos de coordinación.",
    deliverable: "Entregable: mapa de procesos, rediseño operativo y matriz de responsabilidades.",
    Icon: Settings2
  },
  {
    title: "Desarrollo de capacidades e implementación",
    description: "Transferencia práctica para que los equipos puedan sostener nuevas formas de trabajo.",
    deliverable: "Entregable: ruta de capacidades, sesiones aplicadas y plan de adopción.",
    Icon: UsersRound
  },
  {
    title: "Gestión académica e innovación educativa",
    description: "Acompañamiento a instituciones de educación superior sin limitar la marca a ese sector.",
    deliverable: "Entregable: modelo académico-operativo, rutas formativas y tablero de seguimiento.",
    Icon: GraduationCap
  },
  {
    title: "Gobernanza, indicadores y modelos de seguimiento",
    description: "Diseño de indicadores, rutinas ejecutivas y evidencias para medir avance.",
    deliverable: "Entregable: tablero ejecutivo, matriz de indicadores y modelo de gobernanza.",
    Icon: BarChart3
  }
];

export const solutions = [
  { title: "Rutas formativas por área", Icon: Route },
  { title: "Academias internas de transformación digital", Icon: Building2 },
  { title: "Agentes IA por unidad funcional", Icon: BrainCircuit },
  { title: "Agentes IA para gestión académica", Icon: GraduationCap },
  { title: "Asistentes IA para reportería y análisis documental", Icon: FileSearch },
  { title: "Automatización de procesos críticos", Icon: Workflow },
  { title: "Protocolos de uso responsable de IA", Icon: ShieldCheck },
  { title: "Tableros ejecutivos", Icon: BarChart3 },
  { title: "Modelos de transferencia y evaluación de impacto", Icon: Target }
];

export const sectors = [
  { title: "Educación superior", Icon: GraduationCap },
  { title: "Empresas", Icon: Building2 },
  { title: "Instituciones públicas", Icon: Landmark },
  { title: "Organizaciones sociales", Icon: Network },
  { title: "Áreas corporativas", Icon: BarChart3 },
  { title: "Equipos directivos", Icon: UsersRound }
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

export const footerCountries = "Chile · Paraguay · Colombia · América Latina";

export const decorativeIcon = Sparkles;
