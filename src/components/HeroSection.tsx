import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import BorderGlow from "./ui/BorderGlow";
import FloatingLines from "./FloatingLines";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="dark:bg-background relative flex min-h-screen items-center justify-center overflow-hidden bg-[#b3dfdb] pb-2"
    >
      <div className="absolute inset-0 hidden dark:block">
        <FloatingLines
          linesGradient={["#3ee0cf", "#121c34", "#3ee0cf"]}
          mixBlendMode="normal"
          interactive
          animationSpeed={1}
          bendRadius={2.5}
          bendStrength={0.3}
          mouseDamping={0.05}
          parallax
          parallaxStrength={0.2}
        />
      </div>

      <div className="absolute inset-0 dark:hidden">
        <FloatingLines
          linesGradient={["#0f766e", "#1e3a8a", "#14b8a6"]}
          mixBlendMode="normal"
          interactive
          animationSpeed={1}
          bendRadius={2.5}
          bendStrength={0.3}
          mouseDamping={0.05}
          parallax
          parallaxStrength={0.2}
        />
      </div>

      <div className="dark:from-background/80 dark:via-background/60 dark:to-background pointer-events-none absolute inset-0 bg-gradient-to-b from-[#3ee0cf]/10 via-[#3ee0cf]/5 to-[#ffffff]/90" />

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
            <a
              href="https://github.com/manuRoRe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-network"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/manuelromerodev/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-network"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:manuelromeroreyes.mrr@gmail.com"
              className="btn-network"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute left-1/2 mt-4 -translate-x-1/2"
        >
          <a
            href="#experiencia"
            className="text-muted-foreground hover:text-primary hidden flex-col items-center gap-2 transition-colors lg:flex"
          >
            <span className="text-sm">Scroll</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
