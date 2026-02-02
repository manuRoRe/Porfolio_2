import { Briefcase, Calendar } from "lucide-react";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import type { Experience } from "@/interfaces/Experience";

export const ExperienceCard = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pb-12 pl-8 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="from-primary absolute top-4 bottom-0 left-[7px] w-px bg-gradient-to-b to-transparent" />

      {/* Timeline Dot */}
      <div className="timeline-dot absolute top-1 left-0" />

      <div className="glass-card hover:border-primary/30 ml-4 p-6 transition-all duration-300">
        <div className="mb-4 flex flex-wrap items-center gap-4">
          <div className="bg-primary/10 rounded-lg p-2">
            <Briefcase className="text-primary h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold">
              {experience.title}
            </h3>
            <p className="text-primary font-medium">{experience.company}</p>
          </div>
          <div className="text-muted-foreground ml-auto flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{experience.period}</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">{experience.description}</p>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span key={tech} className="skill-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
