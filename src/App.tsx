import { useState } from "react";
import { motion } from "framer-motion";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconSchool,
  IconPhone,
  IconMapPin,
  IconBriefcase,
  IconCode,
  IconCheck,
  IconCopy,
  IconChevronUp,
} from "@tabler/icons-react";

const PORTFOLIO_DATA = {
  name: "Josean Alejandro Mendez Cabrera",
  title: "Desarrollador Front-End Semi-Senior / Specialist",
  location: "Trujillo, CP: 13001, Perú",
  phone: "+51 945910404",
  email: "alejandrowowsage@gmail.com",
  linkedin: "https://www.linkedin.com/in/josean-mendez-1970b7283/",
  github: "https://github.com/AlejandroMCDev",
  about:
    "Desarrollador Front-End con sólida experiencia construyendo aplicaciones web escalables y eficientes utilizando React, Next.js y TypeScript. Especializado en la modernización de arquitecturas, integración de pasarelas de pago y diseño de interfaces optimizadas. Enfocado en la resolución proactiva de problemas y en la entrega de soluciones tecnológicas con alto impacto operativo, aplicando metodologías ágiles (SCRUM) y las mejores prácticas de desarrollo.",
  experience: [
    {
      company: "CCPLL",
      role: "Desarrollador Web",
      period: "Diciembre 2025 – Abril 2026",
      achievements: [
        "Desarrollé una plataforma institucional escalable utilizando Next.js 14 (App Router) y TypeScript, implementando manejo de estado global con Zustand y persistencia de sesión segura vía cookies.",
        "Construí interfaces de usuario modulares y altamente responsivas con Shadcn UI y Tailwind CSS para los paneles administrativos y catálogos de cursos.",
        "Integré la pasarela de pagos Culqi con autenticación 3DS, automatizando el procesamiento seguro de cuotas y sincronizando los estados de pago mediante APIs REST.",
        "Automaticé la generación del lado del servidor de documentos institucionales (ej. Constancia de Miembro Titular Hábil) empleando react-pdf-renderer.",
        "Diseñé e implementé la lógica de negocio para un sistema de reservas de salas, configurando reglas de validación complejas para límites diarios y mensuales.",
      ],
      tags: [
        "Next.js 14",
        "TypeScript",
        "Zustand",
        "Shadcn UI",
        "Tailwind CSS",
        "Culqi 3DS",
        "react-pdf",
      ],
    },
    {
      company: "Uniclinic",
      role: "Desarrollador Web",
      period: "Enero 2025 – Octubre 2025",
      achievements: [
        "Construí el frontend de un sistema integral de gestión de citas y consultas médicas utilizando Next.js y TypeScript, optimizando la eficiencia operativa de la clínica.",
        "Implementé la gestión del estado de la aplicación de manera centralizada utilizando Zustand y diseñé componentes visuales adaptables con Tailwind CSS.",
        "Automaticé la generación y exportación de reportes clínicos y recetas médicas utilizando React PDF y Puppeteer.",
        "Consumí y orquesté servicios backend mediante peticiones HTTP estructuradas con Axios.",
      ],
      tags: [
        "Next.js",
        "TypeScript",
        "Zustand",
        "Tailwind CSS",
        "React PDF",
        "Puppeteer",
        "Axios",
      ],
    },
    {
      company: "Colegio de Químicos de La Libertad (CQL)",
      role: "Desarrollador Web",
      period: "Septiembre 2024 – Enero 2025",
      achievements: [
        "Mantuve y escalé la aplicación web institucional empleando Vue.js (Options API) y TypeScript.",
        "Desarrollé nuevos módulos funcionales para la plataforma, integrando APIs REST y optimizando la comunicación con el servidor mediante Axios.",
        "Gestioné el estado reactivo de la aplicación utilizando Pinia y estilicé la interfaz asegurando compatibilidad móvil con Tailwind CSS.",
      ],
      tags: [
        "Vue.js",
        "TypeScript",
        "Pinia",
        "Tailwind CSS",
        "APIs REST",
        "Axios",
      ],
    },
    {
      company: "Otanor",
      role: "Desarrollador Web",
      period: "Septiembre 2023 – Agosto 2024",
      achievements: [
        "Lideré la migración de un sistema legado de escritorio a una plataforma web moderna utilizando Next.js y TypeScript para la emisión de certificados de conversión a GNV.",
        "Implementé un sistema de gestión documental integrando Azure Blob Service para el almacenamiento seguro y eficiente de imágenes y PDFs de inspección.",
        "Optimicé el flujo de datos y el estado global de la plataforma implementando la arquitectura de Redux Toolkit.",
      ],
      tags: [
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "Azure Blob",
        "Migración Web",
      ],
    },
    {
      company: "Grupo Maxin",
      role: "Desarrollador Web",
      period: "Enero 2023 – Agosto 2023",
      achievements: [
        "Desarrollé una plataforma centralizada de reportes financieros para el grupo empresarial empleando React y TypeScript bajo la metodología ágil SCRUM.",
        "Implementé dashboards interactivos para la visualización de métricas de ventas, análisis financiero y evaluación de medios de pago.",
        "Mejoré el rendimiento de las consultas y la sincronización del estado del servidor utilizando TanStack Query, complementado con Zustand para el estado local.",
      ],
      tags: [
        "React",
        "TypeScript",
        "TanStack Query",
        "Zustand",
        "Dashboards",
        "SCRUM",
      ],
    },
    {
      company: "Cenfrocafe",
      role: "Desarrollador Web",
      period: "Agosto 2022 – Enero 2023",
      achievements: [
        "Migré el sistema logístico de escritorio a una aplicación web moderna con React y TypeScript, mejorando significativamente los procesos operativos de la empresa.",
        "Construí interfaces de usuario fluidas con Tailwind CSS y gestioné el estado de la aplicación utilizando Zustand.",
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Logística Web"],
    },
  ],
  skills: {
    languages: ["TypeScript", "JavaScript", "SQL"],
    frameworks: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Node.js", "NestJS"],
    cloud: ["Docker","CI/CD"],
    databases: ["PostgreSQL", "MongoDB", "Prisma", "TypeORM", "Jest"],
    methodologies: ["Microservicios", "Agile/Scrum"],
    spoken: ["Español (Nativo)", "Inglés (B2)"],
  },
  education: {
    institution: "Universidad Privada del Norte - Trujillo, La Libertad",
    degree: "Bachiller en Ingeniería de Sistemas",
    status: "Estudios finalizados",
  },
};

export default function PortfolioSPA() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-neutral-800 selection:text-emerald-400 bg-grid-pattern relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-150 h-75 bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      <header className="sticky top-4 z-50 max-w-4xl mx-auto px-2 md:px-4">
        <nav className="flex items-center justify-between p-3 rounded-full bg-neutral-900/70 border border-neutral-800 backdrop-blur-md shadow-lg shadow-black/40">
          <span className="text-sm font-semibold tracking-wider text-neutral-300">
            JM<span className="text-emerald-400">.</span>
          </span>
          <div className="flex items-center gap-1 sm:gap-4 text-xs font-medium text-neutral-400">
            <a
              href="#about"
              className="hover:text-neutral-100 transition-colors px-2 py-1"
            >
              Sobre mí
            </a>
            <a
              href="#experience"
              className="hover:text-neutral-100 transition-colors px-2 py-1"
            >
              Experiencia
            </a>
            <a
              href="#skills"
              className="hover:text-neutral-100 transition-colors px-2 py-1"
            >
              Habilidades
            </a>
            <a
              href="#education"
              className="hover:text-neutral-100 transition-colors px-2 py-1"
            >
              Educación
            </a>
          </div>
          <a
            href={`mailto:${PORTFOLIO_DATA.email}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-950 hover:bg-neutral-200 transition-all"
          >
            Contacto
          </a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24 space-y-24">
        <section id="about" className="space-y-6 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-100">
              {PORTFOLIO_DATA.name}
            </h1>

            <p className="text-lg text-emerald-400 font-medium">
              {PORTFOLIO_DATA.title}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400">
              <span className="flex items-center gap-1">
                <IconMapPin className="w-4 h-4 text-neutral-500" />
                {PORTFOLIO_DATA.location}
              </span>
              <span className="flex items-center gap-1">
                <IconPhone className="w-4 h-4 text-neutral-500" />
                {PORTFOLIO_DATA.phone}
              </span>
            </div>

            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base pt-2">
              {PORTFOLIO_DATA.about}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-200 hover:border-neutral-700 transition-all active:scale-95"
              >
                {copied ? (
                  <>
                    <IconCheck className="w-4 h-4 text-emerald-400" /> Copiado
                  </>
                ) : (
                  <>
                    <IconCopy className="w-4 h-4 text-neutral-400" /> Copiar
                    Email
                  </>
                )}
              </button>

              <a
                href={PORTFOLIO_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-100 hover:border-neutral-700 transition-all"
                title="LinkedIn"
              >
                <IconBrandLinkedin className="w-5 h-5" />
              </a>

              <a
                href={PORTFOLIO_DATA.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-100 hover:border-neutral-700 transition-all"
                title="GitHub"
              >
                <IconBrandGithub className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </section>

        <section id="experience" className="space-y-8">
          <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
            <IconBriefcase className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold tracking-tight text-neutral-100">
              Experiencia Profesional
            </h2>
          </div>

          <div className="relative border-l border-neutral-800 ml-3 sm:ml-4 space-y-10 pl-6">
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                <span className="absolute -left-7.75 top-1.5 w-3 h-3 rounded-full bg-neutral-800 border border-neutral-600 group-hover:bg-emerald-400 group-hover:border-emerald-300 transition-all" />

                <div className="bg-neutral-900/50 border border-neutral-800/80 rounded-xl p-6 backdrop-blur-sm hover:border-neutral-700 transition-all space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-lg font-bold text-neutral-100 flex items-center gap-2">
                      {exp.role}{" "}
                      <span className="text-emerald-400">@ {exp.company}</span>
                    </h3>
                    <span className="text-xs text-neutral-400 font-mono bg-neutral-800/60 px-2.5 py-1 rounded-md w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm text-neutral-300">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-8">
          <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
            <IconCode className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold tracking-tight text-neutral-100">
              Habilidades Técnicas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 space-y-3">
              <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
                Lenguajes
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.skills.languages.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-neutral-800/80 text-neutral-200 border border-neutral-700/60 hover:border-emerald-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 space-y-3">
              <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
                Frameworks & Librerías
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.skills.frameworks.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-neutral-800/80 text-neutral-200 border border-neutral-700/60 hover:border-emerald-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 space-y-3">
              <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
                Nube & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.skills.cloud.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-neutral-800/80 text-neutral-200 border border-neutral-700/60 hover:border-emerald-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 space-y-3">
              <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
                BBDD & Herramientas
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.skills.databases.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-neutral-800/80 text-neutral-200 border border-neutral-700/60 hover:border-emerald-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 space-y-3">
              <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
                Metodologías
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.skills.methodologies.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-neutral-800/80 text-neutral-200 border border-neutral-700/60 hover:border-emerald-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 space-y-3">
              <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
                Idiomas
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.skills.spoken.map((lang, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-neutral-800/80 text-neutral-200 border border-neutral-700/60 hover:border-emerald-500/50 transition-colors"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="space-y-8">
          <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
            <IconSchool className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold tracking-tight text-neutral-100">
              Educación
            </h2>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-neutral-100">
                {PORTFOLIO_DATA.education.degree}
              </h3>
              <p className="text-sm text-neutral-400">
                {PORTFOLIO_DATA.education.institution}
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit">
              {PORTFOLIO_DATA.education.status}
            </span>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-900 bg-neutral-950 py-8 text-center text-xs text-neutral-500">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Josean Alejandro Méndez Cabrera.
            Construido con Next.js & Shadcn UI.
          </p>
          <a
            href="#about"
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-100 transition-colors"
            title="Volver arriba"
          >
            <IconChevronUp className="w-4 h-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}
