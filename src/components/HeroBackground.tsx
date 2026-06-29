import FloatingLines from "./ui/FloatingLines";

export const HeroBackground = () => {
  return (
    <>
      <div className="absolute inset-0 hidden dark:block">
        <FloatingLines
          linesGradient={["#3ee0cf", "#121c34", "#3ee0cf"]}
          mixBlendMode="normal"
          interactive
          animationSpeed={1}
          bendRadius={2.5}
          bendStrength={0.3}
          mouseDamping={0.05}
          parallax
          parallaxStrength={0.2}
        />
      </div>

      <div className="absolute inset-0 dark:hidden">
        <FloatingLines
          linesGradient={["#0f766e", "#1e3a8a", "#14b8a6"]}
          mixBlendMode="normal"
          interactive
          animationSpeed={1}
          bendRadius={2.5}
          bendStrength={0.3}
          mouseDamping={0.05}
          parallax
          parallaxStrength={0.2}
        />
      </div>

      <div className="dark:from-background/80 dark:via-background/60 dark:to-background pointer-events-none absolute inset-0 bg-gradient-to-b from-[#3ee0cf]/10 via-[#3ee0cf]/5 to-[#ffffff]" />
    </>
  );
};
