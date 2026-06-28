import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import { Code2, Palette } from "lucide-react";

import { useTheme } from "@/context/ThemeContext";
import { ModeToggle } from "../ModeToggle";

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

  const navRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;

    if (!navEl) return 300;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      const contentEl = navEl.querySelector(
        ".card-nav-content",
      ) as HTMLElement | null;

      if (contentEl) {
        const previous = {
          visibility: contentEl.style.visibility,
          pointerEvents: contentEl.style.pointerEvents,
          position: contentEl.style.position,
          height: contentEl.style.height,
        };

        contentEl.style.visibility = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";

        const topBarHeight = 60;
        const contentHeight = contentEl.scrollHeight;
        const verticalPadding = 16;

        contentEl.style.visibility = previous.visibility;
        contentEl.style.pointerEvents = previous.pointerEvents;
        contentEl.style.position = previous.position;
        contentEl.style.height = previous.height;

        return topBarHeight + contentHeight + verticalPadding;
      }
    }

    return 300;
  };

  const createTimeline = () => {
    const navEl = navRef.current;

    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 28, opacity: 0 });

    const timeline = gsap.timeline({ paused: true });

    timeline.to(navEl, {
      height: calculateHeight,
      duration: 0.45,
      ease,
    });

    timeline.to(
      cardsRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.35,
        ease,
        stagger: 0.06,
      },
      "-=0.12",
    );

    return timeline;
  };

  useLayoutEffect(() => {
    const timeline = createTimeline();
    tlRef.current = timeline;

    return () => {
      timeline?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      const timeline = tlRef.current;

      if (!timeline) return;

      timeline.kill();

      const newTimeline = createTimeline();

      if (!newTimeline) return;

      if (isExpanded) {
        newTimeline.progress(1);
        gsap.set(navRef.current, { height: calculateHeight() });
      }

      tlRef.current = newTimeline;
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const timeline = tlRef.current;

    if (!timeline) return;

    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      timeline.play(0);
      return;
    }

    setIsHamburgerOpen(false);

    timeline.eventCallback("onReverseComplete", () => {
      setIsExpanded(false);
    });

    timeline.reverse();
  };

  const setCardRef = (index: number) => (element: HTMLDivElement | null) => {
    if (element) cardsRef.current[index] = element;
  };

  return (
    <div
      className={`card-nav-container absolute top-[1.2em] left-1/2 z-[99] w-[92%] max-w-[1080px] -translate-x-1/2 md:top-[2em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${
          isExpanded ? "open" : ""
        } from-card via-card to-primary/85 shadow-primary/30 relative block h-[60px] overflow-hidden rounded-2xl border-white/15 bg-linear-to-br shadow-2xl backdrop-blur-xl will-change-[height]`}
      >
        <div className="card-nav-top bg-card/75 absolute inset-x-0 top-0 z-20 flex h-[60px] items-center justify-between border-b border-white/10 px-3 backdrop-blur-md">
          <div
            className={`hamburger-menu ${
              isHamburgerOpen ? "open" : ""
            } group hover:bg-background/10 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-[6px] rounded-xl transition-colors`}
            onClick={toggleMenu}
            onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleMenu();
              }
            }}
            role="button"
            aria-label={isExpanded ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isExpanded}
            tabIndex={0}
            style={{ color: menuColor || "#000" }}
          >
            <span
              className={`bg-secondary-foreground h-[2px] w-7 rounded-full transition-all duration-300 ${
                isHamburgerOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`bg-secondary-foreground h-[2px] w-7 rounded-full transition-all duration-300 ${
                isHamburgerOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </div>

          <div className="ml-3 flex items-center gap-1.5">
            <Code2 className="text-primary h-6 w-6" />
            <span className="gradient-text dark:gradient-text-dark text-[17px] font-bold">
              Manuel Romero
            </span>
          </div>
        </div>

        <div
          className={`card-nav-content absolute top-[60px] right-0 bottom-0 left-0 z-10 gap-2 p-2 ${
            isExpanded
              ? "pointer-events-auto visible"
              : "pointer-events-none invisible"
          } flex flex-col md:grid md:grid-cols-[minmax(0,1.85fr)_minmax(230px,0.95fr)]`}
          aria-hidden={!isExpanded}
        >
          <div className="grid gap-2 md:h-full md:grid-cols-3">
            {(items || []).slice(0, 3).map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                ref={setCardRef(index)}
                className="nav-card text-foreground flex min-h-[118px] flex-col rounded-xl border border-white/10 p-4 shadow-sm backdrop-blur-sm md:h-full md:min-h-0"
                style={{
                  backgroundColor:
                    theme === "dark" ? item.bgDarkColor : item.bgColor,
                }}
              >
                <div className="text-center text-[19px] font-medium tracking-[-0.45px] md:text-left md:text-[21px]">
                  {item.label}
                </div>

                <div className="mt-auto flex justify-center gap-1.5 pt-6 md:flex-col">
                  {item.links?.map((link, linkIndex) => (
                    <a
                      key={`${link.label}-${linkIndex}`}
                      href={link.link}
                      aria-label={link.ariaLabel}
                      className="inline-flex items-center gap-1.5 text-[15px] no-underline transition-all duration-200 hover:translate-x-0.5 hover:opacity-70 md:text-[16px]"
                    >
                      <GoArrowUpRight className="shrink-0" aria-hidden="true" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            ref={setCardRef(3)}
            className="text-foreground flex min-h-[150px] flex-col justify-between rounded-xl border border-white/20 bg-black/10 p-5 shadow-sm backdrop-blur-md md:h-full md:min-h-0 dark:bg-white/10"
          >
            <div>
              <h2 className="text-center text-xl font-medium tracking-[-0.4px] md:text-left">
                Personalize the experience
              </h2>
              <div className="dark:text-primary text-foreground mt-3 flex items-center justify-center gap-2 text-center md:justify-start">
                <Palette className="h-4 w-4" />
                <span className="text-xs font-semibold tracking-[0.14em] uppercase">
                  Appearance
                </span>
              </div>
            </div>

            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
