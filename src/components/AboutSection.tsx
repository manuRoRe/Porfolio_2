import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Palette, Server, Zap } from "lucide-react";
import MotionSkills from "./MotionSkills";

const skills = {
  frontend: [
    "React",
    "Vue.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],
  backend: [
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "REST APIs",
  ],
  tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"],
};

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
            src="public/fotoPersonal.jpg"
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
                Soy un desarrollador Full Stack con más de 5 años de experiencia
                creando aplicaciones web modernas y escalables. Mi pasión por la
                tecnología me impulsa a mantenerme actualizado con las últimas
                tendencias y mejores prácticas.
              </p>
              <p>
                Me especializo en construir experiencias de usuario
                excepcionales, combinando diseño atractivo con código limpio y
                eficiente. Disfruto resolviendo problemas complejos y
                colaborando con equipos multidisciplinarios.
              </p>
              <p>
                Cuando no estoy programando, me gusta contribuir a proyectos
                open source, escribir artículos técnicos y aprender nuevas
                tecnologías.
              </p>
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
                <item.icon className="text-primary mx-auto mb-2 h-8 w-8" />
                <div className="font-display gradient-text text-2xl font-bold">
                  {item.label}
                </div>
                <div className="text-muted-foreground text-sm">
                  {item.description}
                </div>
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
                {skills.frontend.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
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
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
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
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
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
