import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FeaturedProjectsShowcase from "./FeaturedProjectsShowCase";

export const projects = [
  {
    title: "Teslo Shop",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras y panel de administración.",
    technologies: ["React", "typeScript", "Lovable", "Github", "TailwindCSS"],
    github: "https://github.com/manuRoRe/teslo-shop.git",
    live: undefined,
    featured: true,
    desktopImage: "/projects/tesloPC.png",
    mobileImage: "/projects/tesloSmPhone.png",
  },
  {
    title: "Luna - Tu compañera de bienestar femenino",
    description:
      "Aplicación de ayuda y bienestar femenino con seguimiento del ciclo consejos de bienestar y login con verificacion de email.",
    technologies: ["Laravel", "PHP", "Github", "MySQL"],
    github: "https://github.com/manuRoRe/Luna.git",
    live: undefined,
    featured: true,
    desktopImage: "/projects/lunaPC.png",
    mobileImage: "/projects/lunaSmphone.png",
  },
  {
    title: "Heroes App",
    description:
      "Dashboard para busqueda de super heroes con Context provider custom hooks y testing en las partes mas destacadas",
    technologies: ["React", "TypeScript", "React Testing", "TailwindCSS"],
    github: "https://github.com/manuRoRe/heroes-app.git",
    live: undefined,
    featured: true,
    desktopImage: "/projects/heroesPC.png",
    mobileImage: "/projects/heroesSmPhone.png",
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
        {/* <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display mb-8 text-center text-2xl font-bold"
        >
          Otros Proyectos
        </motion.h3> */}

        {/* Other Projects Grid */}
        {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
