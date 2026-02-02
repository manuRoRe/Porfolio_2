import type { Project } from "@/interfaces/Project";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Folder, Github } from "lucide-react";
import { useRef } from "react";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-card"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="bg-primary/10 rounded-lg p-3">
          <Folder className="text-primary h-6 w-6" />
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-display group-hover:text-primary mb-3 text-xl font-bold transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="text-primary/80 font-mono text-xs">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
