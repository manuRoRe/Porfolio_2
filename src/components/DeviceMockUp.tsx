import type { Project } from "@/interfaces/Project";
import type { DeviceView } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const DeviceMockup = ({
  project,
  viewMode,
}: {
  project: Project;
  viewMode: DeviceView;
}) => {
  return (
    <AnimatePresence mode="wait">
      {viewMode === "desktop" ? (
        <motion.div
          key="desktop"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative mx-auto"
        >
          {/* Laptop Frame */}
          <div className="relative">
            {/* Screen */}
            <div className="bg-secondary border-border/50 relative rounded-t-xl border-x border-t p-2">
              <div className="bg-background aspect-[16/10] overflow-hidden rounded-lg">
                <img
                  src={project.desktopImage}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Camera dot */}
              <div className="bg-muted-foreground/30 absolute top-3 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full" />
            </div>
            {/* Base */}
            <div className="from-secondary to-muted relative mx-8 h-4 rounded-b-sm bg-gradient-to-b">
              <div className="bg-border/30 absolute inset-x-0 top-0 h-1 rounded-t-sm" />
            </div>
            {/* Bottom */}
            <div className="bg-muted mx-4 h-2 rounded-b-xl" />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="mobile"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative mx-auto w-48"
        >
          {/* Phone Frame */}
          <div className="bg-secondary border-border/50 relative rounded-[2rem] border p-2">
            {/* Notch */}
            <div className="bg-secondary absolute top-4 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full" />
            {/* Screen */}
            <div className="bg-background aspect-[9/19] overflow-hidden rounded-[1.5rem]">
              <img
                src={project.mobileImage}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeviceMockup;
