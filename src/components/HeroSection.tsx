import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import BorderGlow from "./ui/BorderGlow";
import { HeroBackground } from "./HeroBackground";
import { ScrollArrow } from "./ScrollArrow";
import { BoxLink } from "./BoxLink";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="dark:bg-background relative flex min-h-screen items-center justify-center overflow-hidden bg-[#b3dfdb] pb-2"
    >
      <HeroBackground />

      {/* Content */}
      <div className="section-container relative z-10 pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <BorderGlow>
              <div style={{ padding: "0.5em" }}>
                <h1 className="font-display text-foreground px-4 font-semibold">
                  Trabajando como Profesor de Bootcamp FullStack
                </h1>
              </div>
            </BorderGlow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl"
          >
            Creando experiencias
            <br />
            <span className="gradient-text">digitales únicas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg sm:text-xl"
          >
            Desarrollo aplicaciones web modernas y escalables combinando las
            mejores tecnologías frontend y backend para crear soluciones
            innovadoras.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <a href="#proyectos" className="btn-primary">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn-outline">
              Contáctame
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <BoxLink link="https://github.com/manuRoRe" icon={Github} />
            <BoxLink
              link="https://www.linkedin.com/in/manuelromerodev/"
              icon={Linkedin}
            />
            <BoxLink
              link="mailto:manuelromeroreyes.mrr@gmail.com"
              icon={Mail}
            />
          </motion.div>
        </div>

        <ScrollArrow />
      </div>
    </section>
  );
};

export default HeroSection;
