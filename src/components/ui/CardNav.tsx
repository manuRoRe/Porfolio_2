import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
// use your own icon import if react-icons is not available
import { GoArrowUpRight } from "react-icons/go";
import { Code2 } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import ThemeButton from "../ThemeButton";

type CardNavLink = {
  label: string;
  link: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  bgDarkColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  items,
  className = "",
  ease = "power3.out",
  menuColor,
  buttonBgColor,
  buttonTextColor,
}) => {
  const { theme } = useTheme();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content") as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease,
    });

    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 },
      "-=0.1",
    );

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container absolute top-[1.2em] left-1/2 z-[99] w-[90%] max-w-[800px] -translate-x-1/2 md:top-[2em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? "open" : ""} from-card to-primary shadow-primary/60 relative block h-[60px] overflow-hidden rounded-xl bg-linear-to-r p-0 shadow-xl will-change-[height]`}
      >
        <div className="card-nav-top from-card/90 to-primary via-card absolute inset-x-0 top-0 z-2 flex h-15 items-center justify-between bg-linear-to-br p-2 pl-[1.1rem]">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? "open" : ""} group order-2 flex h-full cursor-pointer flex-col items-center justify-center gap-[6px] md:order-none`}
            onClick={toggleMenu}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleMenu();
              }
            }}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            aria-expanded={isExpanded}
            tabIndex={0}
            style={{ color: menuColor || "#000" }}
          >
            <div
              className={`hamburger-line bg-secondary-foreground h-[2px] w-[30px] [transform-origin:50%_50%] transition-[transform,opacity,margin] duration-300 ease-linear ${
                isHamburgerOpen ? "translate-y-[4px] rotate-45" : ""
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line bg-secondary-foreground h-[2px] w-[30px] [transform-origin:50%_50%] transition-[transform,opacity,margin] duration-300 ease-linear ${
                isHamburgerOpen ? "-translate-y-[4px] -rotate-45" : ""
              } group-hover:opacity-75`}
            />
          </div>

          <div className="logo-container order-1 flex items-center md:absolute md:top-1/2 md:left-1/2 md:order-none md:-translate-x-1/2 md:-translate-y-1/2">
            <Code2 className="text-primary h-8 w-8" />

            <span className="gradient-text dark:gradient-text-dark font-bold">
              Manuel Romero
            </span>
          </div>

          <button
            type="button"
            className="card-nav-cta-button hidden h-full cursor-pointer items-center rounded-[calc(0.75rem-0.2rem)] border-0 px-4 font-medium transition-colors duration-300 md:inline-flex"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            Get Started
          </button>
        </div>

        <div
          className={`card-nav-content absolute top-[60px] right-0 bottom-0 left-0 z-[1] flex flex-col items-stretch justify-start gap-2 p-2 ${
            isExpanded
              ? "pointer-events-auto visible"
              : "pointer-events-none invisible"
          } md:flex-row md:items-end md:gap-[12px]`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card text-foreground relative flex h-auto min-h-[60px] min-w-0 flex-[1_1_auto] flex-col gap-2 rounded-[calc(0.75rem-0.2rem)] p-[12px_16px] select-none md:h-full md:min-h-0 md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{
                backgroundColor:
                  theme === "light" ? item.bgColor : item.bgDarkColor,
              }}
            >
              <div className="nav-card-label text-[18px] font-normal tracking-[-0.5px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex cursor-pointer items-center gap-[6px] text-[15px] no-underline transition-opacity duration-300 hover:opacity-75 md:text-[16px]"
                    href={lnk.link}
                    aria-label={lnk.ariaLabel}
                  >
                    <GoArrowUpRight
                      className="nav-card-link-icon shrink-0"
                      aria-hidden="true"
                    />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <ThemeButton></ThemeButton>
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
