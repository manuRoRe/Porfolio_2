import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
export const ScrollArrow = () => {
  return (
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
  );
};
