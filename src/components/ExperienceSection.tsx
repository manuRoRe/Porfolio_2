import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExperienceCard } from "./ExperienceCard";
import type { Experience } from "@/interfaces/Experience";

const experiences: Experience[] = [
  {
    title: "Desarrollador Web con Angular & JS",
    company: "Detailorg Consulting",
    period: "Marzo 2025 - Junio 2025",
    description:
      "Desarrollé una aplicación web completa utilizando Angular y JavaScript, implementando funcionalidades interactivas. Mejora en la base de datos y optimización del rendimiento de otros sitios web que estaban en desarrollo.",
    technologies: ["Angular", "JavaScript", "PostgreSQL", "Docker"],
  },
  {
    title: "Desarrollador de Aplicaciones Móviles con Android Studio & Kotlin",
    company: "Zona de Ficción",
    period: "Marzo 2024 - Junio 2024",
    description:
      "Creé una aplicación móvil para Android para la gestión de la empresa utilizando Android Studio y Kotlin, integrando características como notificaciones push y sincronización en la nube. Colaboré con programadores para la optimización de backend.",
    technologies: ["Android Studio", "Kotlin", "Simphony", "Docker"],
  },
];

const ExperienceSection = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section id="experiencia" className="relative py-24">
      <div className="section-container">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Experiencia <span className="gradient-text">Profesional</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
