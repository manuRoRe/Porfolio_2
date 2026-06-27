import { Monitor, Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

const themes = [
  { value: "light", label: "Claro", icon: Sun },
  { value: "dark", label: "Oscuro", icon: Moon },
  { value: "system", label: "Sistema", icon: Monitor },
] as const;

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <section className="mt-2 flex flex-col justify-center md:mt-0">
      <h1 className="text-background nav-card-label my-2 text-center text-[18px] font-normal tracking-[-0.5px] md:text-[22px] dark:text-white">
        Theme
      </h1>
      <div
        role="group"
        aria-label="Seleccionar tema"
        className="border-border/70 bg-muted/50E flex flex-wrap justify-around gap-3 rounded-full p-1 md:justify-center lg:w-fit"
      >
        {themes.map(({ value, label, icon: Icon }) => {
          const isActive = theme === value;

          return (
            <button
              key={value}
              type="button"
              onClick={() => setTheme(value)}
              aria-label={`Tema ${label}`}
              aria-pressed={isActive}
              className={cn(
                "relative flex h-9 items-center justify-center gap-2 rounded-full px-3 text-sm font-medium transition-all duration-200",
                "focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                isActive
                  ? "bg-background text-foreground ring-border/50 shadow-sm ring-1"
                  : "text-foreground/80 hover:bg-background/60 hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden lg:inline">{label}</span>

              {isActive && (
                <span className="bg-primary absolute bottom-1 h-0.5 w-4 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
