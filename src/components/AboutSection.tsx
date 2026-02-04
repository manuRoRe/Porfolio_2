import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Palette, Server, Zap } from "lucide-react";
import MotionSkills from "./MotionSkills";
import type { Skill } from "@/interfaces/Skill";

const frontend: Skill[] = [
  { name: "React", icon: "/icons/reactIcon.svg" },
  { name: "Angular", icon: "/icons/angular.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "Tailwindcss", icon: "/icons/tailwindcss.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
];

const backend: Skill[] = [
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "Php", icon: "/icons/php.svg" },
  { name: "SpringBoot", icon: "/icons/spring.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
];

const tools: Skill[] = [
  { name: "GitHub", icon: "/icons/github.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Slack", icon: "/icons/slack.svg" },
];

const highlights = [
  /*   { icon: Code2, label: "+5 años", description: "Experiencia" },
  { icon: Globe, label: "+50", description: "Proyectos" }, */
  { icon: Zap, label: "100%", description: "Compromiso" },
];

const AboutSection = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true });

  return (
    <section id="sobre-mi" className="py-24">
      <div>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center justify-center gap-x-5"
        >
          <img
            className="size-16 rounded-full object-cover"
            src="/fotoPersonal.jpg"
            alt="Manuel Romero"
          />
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
        </motion.div>

        <div
          ref={contentRef}
          className="section-container grid items-center-safe gap-12 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-3"
        >
          {/* About Text */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:row-span-2"
          >
            <h3 className="font-display mb-6 text-2xl font-bold">
              Desarrollador apasionado por crear soluciones innovadoras
            </h3>
            <div className="text-muted-foreground space-y-5">
              <p>
                ¡Hola! Soy Manuel Romero,
                <strong className="text-cyan-600">
                  {" "}
                  desarrollador Full Stack{" "}
                </strong>
                especializado en la creación de aplicaciones robustas para
                múltiples plataformas.
              </p>

              <p>
                Cuento con una formación técnica integral gracias a mis dos
                Grados Superiores:
                <strong className="text-black/70">
                  {" "}
                  Desarrollo de Aplicaciones Multiplataforma (DAM) y Desarrollo
                  de Aplicaciones Web (DAW)
                </strong>
                .
              </p>

              <p className="font-semibold text-black/80">
                Lo que aporto a tu equipo:
              </p>

              <ul className="ml-5 list-disc space-y-3">
                <li>
                  <strong className="text-black/70">
                    Versatilidad Técnica
                  </strong>
                  : Capacidad para moverme entre el desarrollo
                  nativo/multiplataforma y el entorno web.
                </li>
                <li>
                  <strong className="text-black/70">Inglés Competente</strong>:
                  Certificación B1 por Cambridge, con puntuación equivalente a
                  nivel <span className="font-bold text-cyan-600">B2</span>.
                </li>
                <li>
                  <strong className="text-black/70">
                    Mentalidad de Aprendizaje
                  </strong>
                  : Firme creyente en la formación continua. Especializado en el
                  stack
                  <strong className="text-cyan-600"> React + Node.js</strong>.
                </li>
              </ul>
            </div>
          </motion.div>
          {/* Highlights */}
          <div className="grid grid-cols-1 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card bg-gray-100 p-4 text-center"
              >
                <item.icon className="text-primary mx-auto mb-2 size-10" />
                <div className="font-display gradient-text text-4xl font-bold">
                  {item.label}
                </div>
                <div className="text-xl text-black/60">{item.description}</div>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <MotionSkills isContentInView={isContentInView}>
            <div className="glass-card bg-gray-100 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="bg-primary/10 rounded-lg p-2">
                  <Palette className="text-primary h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-bold">Frontend</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {frontend.map((skill) => (
                  <span
                    key={skill.name}
                    className="skill-badge group relative"
                    data-tooltip={skill.name}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="size-12"
                    />
                    <span className="absolute top-15 left-1/2 -translate-x-1/2 scale-0 rounded p-2 text-xs text-black transition-all group-hover:scale-100">
                      {skill.name}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </MotionSkills>
          <MotionSkills isContentInView={isContentInView}>
            <div className="glass-card bg-gray-100 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="bg-primary/10 rounded-lg p-2">
                  <Server className="text-primary h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-bold">Backend</h4>
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-4">
                {backend.map((skill) => (
                  <span
                    key={skill.name}
                    className="skill-badge group relative"
                    data-tooltip={skill.name}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="size-12"
                    />
                    <span className="absolute top-15 left-1/2 -translate-x-1/2 scale-0 rounded p-2 text-xs text-black transition-all group-hover:scale-100">
                      {skill.name}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </MotionSkills>
          <MotionSkills isContentInView={isContentInView}>
            <div className="glass-card bg-gray-100 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="bg-primary/10 rounded-lg p-2">
                  <Database className="text-primary h-5 w-5" />
                </div>
                <h4 className="font-display text-lg font-bold">Herramientas</h4>
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-4">
                {tools.map((skill) => (
                  <span
                    key={skill.name}
                    className="skill-badge group relative"
                    data-tooltip={skill.name}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="size-12"
                    />
                    <span className="absolute top-15 left-1/2 -translate-x-1/2 scale-0 rounded p-2 text-xs text-black transition-all group-hover:scale-100">
                      {skill.name}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </MotionSkills>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
