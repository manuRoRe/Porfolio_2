import type { Project } from "@/interfaces/Project";

const FeaturedProjectCard = ({
  project,
  isActive,
  onClick,
}: {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      // Se añade flex-shrink-0 para que mantenga su tamaño de 16x16 siempre
      className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 ${
        isActive
          ? "border-primary shadow-primary/30 scale-105 shadow-lg"
          : "border-border/50 hover:border-primary/50 opacity-60 hover:opacity-100"
      }`}
    >
      <img
        src={project.desktopImage}
        alt={project.title}
        className="h-full w-full object-cover"
      />
      {isActive && <div className="bg-primary/10 absolute inset-0" />}
    </button>
  );
};

export default FeaturedProjectCard;
