import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/interfaces/Project";
import FeaturedProjectsShowcase from "./FeaturedProjectsShowCase";

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.",
    technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    desktopImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    mobileImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=600&fit=crop",
  },
  {
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y analíticas.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    desktopImage:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop",
    mobileImage:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=300&h=600&fit=crop",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Dashboard para analítica de redes sociales con gráficos interactivos y reportes automatizados.",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    desktopImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    mobileImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=600&fit=crop",
  },
];

const ProjectsSection = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section id="proyectos" className="bg-secondary/20 py-24">
      <div className="section-container">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
        </motion.div>

        {/* Featured Projects Showcase */}
        <FeaturedProjectsShowcase />

        {/* Other Projects Title */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display mb-8 text-center text-2xl font-bold"
        >
          Otros Proyectos
        </motion.h3>
      </div>
    </section>
  );
};

export default ProjectsSection;
