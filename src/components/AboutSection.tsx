import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Palette, Server, Zap } from "lucide-react";
import MotionSkills from "./MotionSkills";
import type { Skill } from "@/interfaces/Skill";
import FolderFloat from "./ui/FolderFloat";

const frontend: Skill[] = [
  { name: "React", icon: "dist/icons/reactIcon.svg" },
  { name: "Angular", icon: "dist/icons/angular.svg" },
  { name: "Laravel", icon: "dist/icons/laravel.svg" },
  { name: "Tailwindcss", icon: "dist/icons/tailwindcss.svg" },
  { name: "TypeScript", icon: "dist/icons/typescript.svg" },
];

const backend: Skill[] = [
  { name: "Node.js", icon: "dist/icons/nodejs.svg" },
  { name: "Java", icon: "dist/icons/java.svg" },
  { name: "Laravel", icon: "dist/icons/laravel.svg" },
  { name: "Php", icon: "dist/icons/php.svg" },
  { name: "SpringBoot", icon: "dist/icons/spring.svg" },
  { name: "PostgreSQL", icon: "dist/icons/postgresql.svg" },
  { name: "MongoDB", icon: "dist/icons/mongodb2.svg" },
];

const tools: Skill[] = [
  { name: "Git", icon: "dist/icons/git.svg" },
  { name: "Docker", icon: "dist/icons/docker.svg" },
  { name: "Figma", icon: "dist/icons/figma.svg" },
  { name: "Slack", icon: "dist/icons/slack.svg" },
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
          className="section-container grid items-center-safe justify-items-center gap-12 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-3"
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
                <strong className="text-primary">
                  {" "}
                  desarrollador Full Stack{" "}
                </strong>
                especializado en la creación de aplicaciones robustas para
                múltiples plataformas.
              </p>

              <p>
                Cuento con una formación técnica integral gracias a mis dos
                Grados Superiores:
                <strong className="text-black dark:text-white">
                  {" "}
                  Desarrollo de Aplicaciones Multiplataforma (DAM) y Desarrollo
                  de Aplicaciones Web (DAW)
                </strong>
                .
              </p>

              <p className="font-bold text-black dark:text-white">
                Lo que aporto a tu equipo:
              </p>

              <ul className="ml-5 list-disc space-y-3">
                <li>
                  <strong className="text-black dark:text-white">
                    Versatilidad Técnica
                  </strong>
                  : Capacidad para moverme entre el desarrollo
                  nativo/multiplataforma y el entorno web.
                </li>
                <li>
                  <strong className="text-black dark:text-white">
                    Inglés Competente
                  </strong>
                  : Certificación B1 por Cambridge, con puntuación equivalente a
                  nivel <span className="text-primary font-bold">B2</span>.
                </li>
                <li>
                  <strong className="text-black dark:text-white">
                    Mentalidad de Aprendizaje
                  </strong>
                  : Firme creyente en la formación continua. Especializado en el
                  stack
                  <strong className="text-primary"> React + Node.js</strong>.
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
                className="glass-card p-4 text-center"
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

          <FolderFloat
            items={frontend}
            label="Frontend"
            labelIcon={Palette}
            trigger="hover"
            closeOnSelect
            drift={0.5}
            onSelect={(value, index) => console.log(value, index)}
            folderColor="#3f3f46"
            frontColor="#52525b"
            paperColor="#3ee0cf"
            itemColor="#ddfdff"
            itemTextColor="#18181b"
            labelColor="#f5f5f5"
            width={200}
            height={148}
            radius={14}
            spread={180}
            lift={26}
            tilt={8}
            flapAngle={34}
            restAngle={16}
            openDuration={520}
            stagger={45}
            bounce={0.6}
          />
          <FolderFloat
            items={backend}
            label="Backend"
            labelIcon={Server}
            trigger="hover"
            closeOnSelect
            drift={0.5}
            onSelect={(value, index) => console.log(value, index)}
            folderColor="#3f3f46"
            frontColor="#52525b"
            paperColor="#3ee0cf"
            itemColor="#ddfdff"
            itemTextColor="#18181b"
            labelColor="#f5f5f5"
            width={200}
            height={148}
            radius={14}
            spread={180}
            lift={26}
            tilt={8}
            flapAngle={34}
            restAngle={16}
            openDuration={520}
            stagger={45}
            bounce={0.6}
          />
          <FolderFloat
            items={tools}
            label="Herramientas"
            labelIcon={Database}
            trigger="hover"
            closeOnSelect
            drift={0.5}
            onSelect={(value, index) => console.log(value, index)}
            folderColor="#3f3f46"
            frontColor="#52525b"
            paperColor="#3ee0cf"
            itemColor="#ddfdff"
            itemTextColor="#18181b"
            labelColor="#f5f5f5"
            width={200}
            height={148}
            radius={14}
            spread={180}
            lift={26}
            tilt={8}
            flapAngle={34}
            restAngle={16}
            openDuration={520}
            stagger={45}
            bounce={0.6}
          />
          {/* <MotionSkills
            isContentInView={isContentInView}
            title="Frontend"
            icon={Palette}
            skills={frontend}
          ></MotionSkills> */}
          {/* <MotionSkills
            isContentInView={isContentInView}
            title="Backend"
            icon={Server}
            skills={backend}
          ></MotionSkills>
          <MotionSkills
            isContentInView={isContentInView}
            title="Herramientas"
            icon={Database}
            skills={tools}
          ></MotionSkills> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
