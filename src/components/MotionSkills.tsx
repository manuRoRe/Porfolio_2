import { motion } from "framer-motion";

type MotionSkillsProps = {
  isContentInView: boolean;
  children?: React.ReactNode;
};

const MotionSkills = ({ isContentInView, children }: MotionSkillsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={isContentInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      {children}
    </motion.div>
  );
};

export default MotionSkills;
