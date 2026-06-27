import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CardNav from "./ui/CardNav";

/* const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "Contacto", href: "#contacto" },
]; */

const items = [
  {
    label: "About",
    bgColor: "#e5f1f0",
    bgDarkColor: "#16203a",
    links: [
      { label: "Experience", ariaLabel: "Mi experience", link: "#experiencia" },
      { label: "About Me", ariaLabel: "About Careers", link: "#sobre-mi" },
    ],
  },
  {
    label: "Projects",
    bgColor: "#dde8e7",
    bgDarkColor: "#2F293A",
    links: [
      {
        label: "Most Relevant",
        ariaLabel: "Featured Projects",
        link: "#proyectos",
      },
    ],
  },
  {
    label: "Contact",
    bgColor: "#cfd9d8",
    bgDarkColor: "#2F293A",
    links: [
      {
        label: "Contact Form",
        ariaLabel: "Integrated contact form",
        link: "#contacto",
      },
      { label: "Email", ariaLabel: "Email us", link: "" },
      { label: "LinkedIn", ariaLabel: "LinkedIn", link: "" },
    ],
  },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const lastScrollTop = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const getScrollTop = (target: EventTarget | null) => {
      // Si el scroll ocurre dentro de un div con overflow
      if (target instanceof HTMLElement) {
        return target.scrollTop;
      }

      // Si el scroll es el normal de la página
      return window.scrollY || document.documentElement.scrollTop;
    };

    const handleScroll = (event: Event) => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollTop = getScrollTop(event.target);
        const difference = currentScrollTop - lastScrollTop.current;

        // Siempre visible arriba de todo
        if (currentScrollTop <= 10) {
          setShowNav(true);
        }
        // Bajando: ocultar hacia arriba
        else if (difference > 4) {
          setShowNav(false);
        }
        // Subiendo: mostrar bajando
        else if (difference < -4) {
          setShowNav(true);
        }

        lastScrollTop.current = currentScrollTop;
        ticking.current = false;
      });
    };

    // El "true" permite detectar scrolls de divs internos también
    document.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={showNav ? { y: 0, opacity: 1 } : { y: -120, opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        pointerEvents: showNav ? "auto" : "none",
        willChange: "transform",
      }}
      className="fixed top-0 right-0 left-0 z-50"
    >
      <CardNav
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
    </motion.nav>
  );
};
{
  /*  
        <div className="section-container bg-secondary dark:bg-background">
          <div className="flex h-20 items-center justify-between">
            <a
              href="#inicio"
              className="font-display flex items-center gap-2 text-xl font-bold"
            >
              <Code2 className="text-primary h-8 w-8" />
               <img
              className="size-12 rounded-full object-cover"
              src="public/fotoPersonal.jpg"
              alt="Manuel Romero"
            /> 
              <span className="gradient-text">Manuel Romero</span>
            </a>

             Desktop Navigation 
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

             Mobile Menu Button 
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 md:hidden"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <ThemeButton></ThemeButton>
          </div>

           Mobile Navigation 
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="glass-card mb-4 rounded-xl md:hidden"
            >
              <div className="flex flex-col gap-4 p-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="nav-link py-2 text-sm font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>*/
}
{
  /* </motion.nav>
    </> */
}

export default Navbar;
