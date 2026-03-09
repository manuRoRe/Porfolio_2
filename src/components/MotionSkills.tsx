import type { Skill } from "@/interfaces/Skill";
import { motion } from "framer-motion";

type MotionSkillsProps = {
  title: string;
  isContentInView: boolean;
  icon: React.ElementType;
  skills: Skill[];
};

const MotionSkills = ({
  isContentInView,
  icon: Icon,
  skills,
  title,
}: MotionSkillsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isContentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      <div className="glass-card p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="bg-primary/10 rounded-lg p-2">
            {/* Renderizamos el icono que pasemos por props de forma dinámica */}
            <Icon className="text-primary h-5 w-5" />
          </div>
          <h4 className="font-display text-lg font-bold">{title}</h4>
        </div>

        <div className="flex flex-wrap justify-center gap-x-2 gap-y-4">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="skill-badge group relative bg-white/20"
              data-tooltip={skill.name}
            >
              <img src={skill.icon} alt={skill.name} className="size-12" />
              <span className="absolute top-15 left-1/2 -translate-x-1/2 scale-0 rounded p-2 text-xs text-white transition-all group-hover:scale-100">
                {skill.name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MotionSkills;
