import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

import FeaturedProjectCard from "./FeaturedProjectCard";
import DeviceMockup from "./DeviceMockUp";
import type { DeviceView } from "@/lib/utils";
import { projects } from "./ProjectsSection";

const FeaturedProjectsShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<DeviceView>("desktop");
  const activeProject = projects[activeIndex];

  return (
    <div className="glass-card mb-16 p-8 lg:p-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Device View Toggle */}
        <div className="order-2 flex justify-center gap-4 lg:order-1 lg:flex-col lg:justify-start">
          <Button
            variant={viewMode === "desktop" ? "default" : "outline"}
            onClick={() => setViewMode("desktop")}
            className="size-12 gap-2"
          >
            <Monitor className="" />
          </Button>
          <Button
            variant={viewMode === "mobile" ? "default" : "outline"}
            onClick={() => setViewMode("mobile")}
            className="flex h-14 w-14 items-center justify-center p-0"
          >
            <Smartphone className="h-8 w-8" strokeWidth={1.5} />
          </Button>
        </div>

        {/* Main Content */}
        <div className="order-1 flex-1 lg:order-2">
          {/* Thumbnails - Left side */}
          <div className="flex flex-row items-center justify-center gap-x-4">
            {projects.map((project, index) => (
              <FeaturedProjectCard
                key={index}
                project={project}
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Device Mockup */}
          <div className="flex min-h-[300px] items-center justify-center lg:min-h-[400px]">
            <DeviceMockup project={activeProject} viewMode={viewMode} />
          </div>

          {/* Project Info */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 text-center"
          >
            <h3 className="font-display mb-4 text-2xl font-bold lg:text-3xl">
              {activeProject.title}
            </h3>

            {/* Technologies */}
            <div className="mb-4 flex flex-wrap justify-center gap-2">
              {activeProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary/80 text-foreground border-border/50 rounded-full border px-4 py-1.5 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground mx-auto mb-6 max-w-lg">
              {activeProject.description}
            </p>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              {activeProject.live && (
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary gap-2"
                >
                  Sitio Web
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline gap-2"
                >
                  Github
                  <Github className="h-4 w-4" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedProjectsShowcase;
