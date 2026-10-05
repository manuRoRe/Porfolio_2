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
      className="fixed top-0 right-0 left-0 z-[99]"
    >
      <CardNav items={items} ease="power3.out" />
    </motion.nav>
  );
};

export default Navbar;
