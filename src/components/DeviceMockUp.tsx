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
          initial={{ opacity: 0, y: 20, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -20, rotateX: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="perspective-1000 relative mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <img
            src={project.desktopImage}
            alt={project.title}
            className="h-full w-full rounded-2xl object-contain"
          />
        </motion.div>
      ) : (
        <motion.div
          key="mobile"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative mx-auto"
          style={{ width: "180px" }}
        >
          {/* Phone Frame */}
          <div className="relative rounded-[2.5rem] bg-gradient-to-b from-zinc-700 to-zinc-800 p-2 shadow-2xl ring-1 ring-white/10">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 z-10 flex h-6 w-24 -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-black">
              <div className="h-2 w-2 rounded-full bg-zinc-800" />
              <div className="h-3 w-3 rounded-full bg-zinc-800 ring-1 ring-zinc-700" />
            </div>

            {/* Screen */}
            <div className="aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-black ring-1 ring-white/5">
              <img
                src={project.mobileImage}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              {/* Screen reflection */}
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/5 via-transparent to-transparent" />
            </div>

            {/* Side buttons */}
            <div className="absolute top-24 right-[-3px] h-12 w-1 rounded-r-sm bg-zinc-600" />
            <div className="absolute top-20 left-[-3px] h-6 w-1 rounded-l-sm bg-zinc-600" />
            <div className="absolute top-28 left-[-3px] h-10 w-1 rounded-l-sm bg-zinc-600" />
          </div>

          {/* Phone shadow */}
          <div className="absolute -bottom-6 left-1/2 h-6 w-2/3 -translate-x-1/2 rounded-full bg-black/30 blur-xl" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeviceMockup;
