import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Monitor,
  Smartphone,
} from "lucide-react";
import DeviceMockup from "./DeviceMockUp";
import { cn, type DeviceView } from "@/lib/utils";
import { projects } from "./ProjectsSection";

const FeaturedProjectsShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<DeviceView>("desktop");
  const activeProject = projects[activeIndex];

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative mb-20">
      {/* Main showcase container */}
      <div className="glass-card overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Left side - Device Preview */}
          <div className="from-secondary/50 to-secondary/30 relative flex flex-col bg-gradient-to-br p-8 lg:p-12">
            {/* Device Toggle - Floating pill */}
            <div className="mb-8 flex justify-center">
              <div className="bg-background/80 ring-border/50 inline-flex rounded-full p-1 shadow-lg ring-1 backdrop-blur-sm">
                <button
                  onClick={() => setViewMode("desktop")}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                    viewMode === "desktop"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Monitor className="h-4 w-4" />
                  <span>Desktop</span>
                </button>
                <button
                  onClick={() => setViewMode("mobile")}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                    viewMode === "mobile"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Smartphone className="h-4 w-4" />
                  <span>Móvil</span>
                </button>
              </div>
            </div>

            {/* Device Mockup */}
            <div className="flex min-h-[300px] flex-1 items-center justify-center lg:min-h-[400px]">
              <DeviceMockup project={activeProject} viewMode={viewMode} />
            </div>

            {/* Navigation arrows */}
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={goToPrev}
                className="bg-background/80 text-foreground hover:bg-background ring-border/50 rounded-full p-3 shadow-lg ring-1 backdrop-blur-sm transition-all duration-200 hover:scale-105"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dots indicator */}
              <div className="flex items-center gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "rounded-full transition-all duration-300",
                      index === activeIndex
                        ? "bg-primary h-2 w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50 h-2 w-2",
                    )}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="bg-background/80 text-foreground hover:bg-background ring-border/50 rounded-full p-3 shadow-lg ring-1 backdrop-blur-sm transition-all duration-200 hover:scale-105"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right side - Project Info */}
          <div className="flex flex-col justify-center bg-gray-100 p-8 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project number */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-display text-primary/20 text-5xl font-bold lg:text-6xl">
                    0{activeIndex + 1}
                  </span>
                  <div className="from-primary/50 h-px flex-1 bg-gradient-to-r to-transparent" />
                </div>

                {/* Title */}
                <h3 className="font-display mb-4 text-2xl font-bold lg:text-4xl">
                  {activeProject.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 text-base leading-relaxed lg:text-lg">
                  {activeProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary border-primary/20 rounded-lg border px-3 py-1.5 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {activeProject.live && (
                    <a
                      href={activeProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary text-foreground hover:bg-secondary/80 ring-border/50 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium ring-1 transition-all duration-200 hover:scale-105"
                    >
                      <span>Ver Proyecto</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25 hover:shadow-primary/40 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium shadow-lg transition-all duration-200 hover:scale-105"
                    >
                      <Github className="h-4 w-4" />
                      <span>Código</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Project thumbnails - Bottom */}
      <div className="mt-6 flex justify-center gap-4">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative h-14 w-20 overflow-hidden rounded-xl ring-2 transition-all duration-300",
              index === activeIndex
                ? "ring-primary shadow-primary/30 scale-105 shadow-lg"
                : "hover:ring-border opacity-50 ring-transparent hover:opacity-80",
            )}
          >
            <img
              src={project.desktopImage}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            {index === activeIndex && (
              <div className="bg-primary/10 absolute inset-0" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
export default FeaturedProjectsShowcase;
