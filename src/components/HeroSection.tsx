import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/hero-bg.webp)` }}
      />
      <div className="from-background/80 via-background/60 to-background absolute inset-0 bg-gradient-to-b" />

      {/* Content */}
      <div className="section-container relative z-10 pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <a
              href="https://www.linkedin.com/in/manuelromerodev/"
              target="_blank"
            >
              <span className="bg-primary/10 text-primary border-primary/20 inline-block rounded-full border px-4 py-2 text-sm font-bold transition-all hover:scale-120 hover:bg-cyan-700/50 hover:text-white">
                👋 Disponible para trabajar
              </span>
            </a>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl"
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
            <a href="#contacto" className="btn-outline bg-white">
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
              className="glass-card hover:border-primary/50 p-3 transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/manuelromerodev/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover:border-primary/50 p-3 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:manuelromeroreyes.mrr@gmail.com"
              className="glass-card hover:border-primary/50 p-3 transition-all duration-300"
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
            className="text-muted-foreground hover:text-primary flex flex-col items-center gap-2 transition-colors"
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
