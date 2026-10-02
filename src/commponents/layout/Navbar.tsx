import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownToLine,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

import { navigationItems } from "../../data/navigation";
import { useTheme } from "../../hooks/useTheme";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Bottom menu hover
  const [hoveredSection, setHoveredSection] =
    useState<string | null>(null);

  // Resume hover
  const [resumeHover, setResumeHover] = useState(false);

  /* =====================================================
     SCROLL + ACTIVE SECTION
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 110);

      const sections = navigationItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean) as HTMLElement[];

      let current = "home";

      sections.forEach((section) => {
        if (scrollY >= section.offsetTop - 220) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     MOBILE BODY LOCK
  ===================================================== */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =====================================================
     NAVIGATION
  ===================================================== */

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    const sectionId = href.replace("#", "");

    const targetSection = document.querySelector(
      href,
    ) as HTMLElement | null;

    if (!targetSection) return;

    setActiveSection(sectionId);

    const wasMobileOpen = mobileOpen;

    setMobileOpen(false);

    const startScroll = () => {
      const targetPosition =
        targetSection.getBoundingClientRect().top +
        window.scrollY;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      window.history.replaceState(null, "", href);
    };

    if (wasMobileOpen) {
      setTimeout(startScroll, 100);
    } else {
      startScroll();
    }
  };

  return (
    <>
      {/* ==================================================
          TOP NAVBAR
      ================================================== */}

      <AnimatePresence>
        {!isScrolled && (
          <motion.header
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -70,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed left-0 top-0 z-50 w-full"
          >
            <div
              className="border-b backdrop-blur-xl"
              style={{
                background:
                  "color-mix(in srgb, var(--bg-primary) 88%, transparent)",
                borderColor: "var(--border)",
              }}
            >
              <div className="container-custom flex h-[82px] items-center justify-between">
                {/* =====================================
                    LOGO
                ===================================== */}

                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "#home")}
                  aria-label="Go to home"
                  className="
                    group
                    relative
                    flex
                    h-[74px]
                    w-[200px]
                    shrink-0
                    items-center
                    overflow-visible
                  "
                >
                  <img
                    src={logo}
                    alt="Anil Kumar Logo"
                    draggable={false}
                    className="
                      block
                      h-auto
                      w-[185px]
                      max-w-none
                      origin-left
                      object-contain
                      object-left
                      transition-transform
                      duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:scale-[1.04]
                    "
                  />
                </a>

                {/* =====================================
                    DESKTOP TOP MENU
                ===================================== */}

                <nav className="hidden items-center gap-[2px] lg:flex">
                  {navigationItems.map((item) => {
                    const sectionId =
                      item.href.replace("#", "");

                    const active =
                      activeSection === sectionId;

                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={(e) =>
                          handleNavClick(e, item.href)
                        }
                        className={`
                          relative
                          flex
                          h-[44px]
                          items-center
                          justify-center
                          px-[15px]
                          ${active ? "" : "group"}
                        `}
                      >
                        {/* TEXT AREA */}

                        <span
                          className="
                            relative
                            z-10
                            overflow-hidden
                            text-[13px]
                            font-semibold
                            leading-[18px]
                          "
                        >
                          {/* NORMAL TEXT */}

                          <span
                            className={`
                              block
                              transition-all
                              duration-500
                              ease-[cubic-bezier(0.22,1,0.36,1)]

                              ${
                                active
                                  ? ""
                                  : "group-hover:-translate-y-full group-hover:opacity-0"
                              }
                            `}
                            style={{
                              color: active
                                ? "var(--accent-primary)"
                                : "var(--text-secondary)",
                            }}
                          >
                            {item.label}
                          </span>

                          {/* ROLLING HOVER TEXT */}

                          {!active && (
                            <span
                              className="
                                absolute
                                left-0
                                top-0
                                translate-y-full

                                transition-all
                                duration-500
                                ease-[cubic-bezier(0.22,1,0.36,1)]

                                group-hover:translate-y-0
                              "
                              style={{
                                color:
                                  "var(--accent-primary)",
                              }}
                            >
                              {item.label}
                            </span>
                          )}
                        </span>

                        {/* ACTIVE DOT */}

                        {active && (
                          <span
                            className="
                              absolute
                              bottom-[5px]
                              left-1/2

                              h-[4px]
                              w-[4px]

                              -translate-x-1/2

                              rounded-full
                            "
                            style={{
                              background:
                                "var(--accent-primary)",

                              boxShadow:
                                "0 0 9px var(--accent-primary)",
                            }}
                          />
                        )}

                        {/* HOVER DOT */}

                        {!active && (
                          <span
                            className="
                              absolute
                              bottom-[5px]
                              left-1/2

                              h-[4px]
                              w-[4px]

                              -translate-x-1/2
                              translate-y-[5px]

                              scale-0
                              rounded-full
                              opacity-0

                              transition-all
                              duration-500
                              ease-[cubic-bezier(0.22,1,0.36,1)]

                              group-hover:translate-y-0
                              group-hover:scale-100
                              group-hover:opacity-100
                            "
                            style={{
                              background:
                                "var(--accent-primary)",

                              boxShadow:
                                "0 0 9px var(--accent-primary)",
                            }}
                          />
                        )}
                      </a>
                    );
                  })}
                </nav>

                {/* =====================================
                    RIGHT SIDE
                ===================================== */}

                <div className="flex shrink-0 items-center gap-3">
                  {/* =================================
                      THEME TOGGLE
                  ================================= */}

                  <motion.button
                    type="button"
                    onClick={toggleTheme}
                    whileHover={{
                      scale: 1.06,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 20,
                    }}
                    className="
                      group
                      relative

                      flex
                      h-[42px]
                      w-[42px]
                      items-center
                      justify-center

                      overflow-hidden
                      rounded-full
                      border
                    "
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                    aria-label="Toggle theme"
                  >
                    {/* GLOW */}

                    <span
                      className="
                        absolute
                        inset-[4px]

                        scale-50
                        rounded-full
                        opacity-0
                        blur-[7px]

                        transition-all
                        duration-500

                        group-hover:scale-100
                        group-hover:opacity-100
                      "
                      style={{
                        background: "var(--accent-soft)",
                      }}
                    />

                    <AnimatePresence mode="wait" initial={false}>
                      {theme === "dark" ? (
                        <motion.span
                          key="sun"
                          initial={{
                            opacity: 0,
                            rotate: -90,
                            scale: 0.5,
                          }}
                          animate={{
                            opacity: 1,
                            rotate: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            rotate: 90,
                            scale: 0.5,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="
                            relative
                            z-10
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <Sun
                            size={17}
                            className="
                              transition-transform
                              duration-500
                              group-hover:rotate-[40deg]
                            "
                          />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="moon"
                          initial={{
                            opacity: 0,
                            rotate: 90,
                            scale: 0.5,
                          }}
                          animate={{
                            opacity: 1,
                            rotate: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            rotate: -90,
                            scale: 0.5,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="
                            relative
                            z-10
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <Moon
                            size={17}
                            className="
                              transition-transform
                              duration-500
                              group-hover:-rotate-[20deg]
                            "
                          />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  {/* =========================================
                      RESUME BUTTON
                      
                      FULL PURPLE BACKGROUND
                      WAVES ALWAYS MOVING
                      HOVER = FASTER WAVES
                      NO GLOBAL CSS
                  ========================================= */}

                  <motion.a
                    href="/resume/anil-kumar-resume.pdf"
                    download
                    onHoverStart={() => setResumeHover(true)}
                    onHoverEnd={() => setResumeHover(false)}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      relative

                      hidden
                      h-[42px]
                      items-center
                      justify-center
                      gap-2

                      overflow-hidden

                      rounded-[12px]
                      border

                      px-[20px]

                      text-[12px]
                      font-semibold
                      text-white

                      sm:flex
                    "
                    style={{
                      background:
                        "var(--accent-primary)",

                      borderColor:
                        "var(--accent-primary)",

                      boxShadow:
                        "0 7px 20px var(--glow-primary)",
                    }}
                  >
                    {/* =================================
                        TOP WAVE
                    ================================= */}

                    <motion.span
                      className="
                        pointer-events-none
                        absolute

                        left-[-20%]
                        top-[-25px]

                        h-[54px]
                        w-[140%]

                        rounded-[45%]

                        bg-white/[0.16]
                      "
                      animate={{
                        x: [
                          "-4%",
                          "2%",
                          "7%",
                          "2%",
                          "-4%",
                        ],

                        y: [
                          0,
                          7,
                          -4,
                          5,
                          0,
                        ],

                        rotate: [
                          0,
                          2,
                          -2,
                          1,
                          0,
                        ],
                      }}
                      transition={{
                        duration: resumeHover
                          ? 1.1
                          : 4.2,

                        repeat: Infinity,

                        ease: "easeInOut",
                      }}
                    />

                    {/* =================================
                        BOTTOM WAVE
                    ================================= */}

                    <motion.span
                      className="
                        pointer-events-none
                        absolute

                        bottom-[-27px]
                        left-[-20%]

                        h-[55px]
                        w-[140%]

                        rounded-[48%]

                        bg-white/[0.10]
                      "
                      animate={{
                        x: [
                          "5%",
                          "0%",
                          "-6%",
                          "-1%",
                          "5%",
                        ],

                        y: [
                          0,
                          -7,
                          4,
                          -5,
                          0,
                        ],

                        rotate: [
                          0,
                          -2,
                          2,
                          -1,
                          0,
                        ],
                      }}
                      transition={{
                        duration: resumeHover
                          ? 1.3
                          : 5,

                        repeat: Infinity,

                        ease: "easeInOut",
                      }}
                    />

                    {/* =================================
                        MIDDLE WATER WAVE
                    ================================= */}

                    <motion.span
                      className="
                        pointer-events-none
                        absolute

                        left-[-25%]
                        top-[4px]

                        h-[38px]
                        w-[150%]

                        rounded-[50%]

                        bg-white/[0.055]
                      "
                      animate={{
                        x: [
                          "-3%",
                          "3%",
                          "7%",
                          "1%",
                          "-3%",
                        ],

                        y: [
                          3,
                          -3,
                          5,
                          -4,
                          3,
                        ],

                        rotate: [
                          -1,
                          1,
                          -1,
                          1,
                          -1,
                        ],
                      }}
                      transition={{
                        duration: resumeHover
                          ? 1.5
                          : 5.8,

                        repeat: Infinity,

                        ease: "easeInOut",
                      }}
                    />

                    {/* =================================
                        SMALL WATER BUBBLE 1
                    ================================= */}

                    <motion.span
                      className="
                        pointer-events-none
                        absolute

                        bottom-[5px]
                        left-[14px]

                        h-[4px]
                        w-[4px]

                        rounded-full

                        bg-white/25
                      "
                      animate={{
                        y: [0, -8, 0],
                        x: [0, 3, 0],
                        opacity: [
                          0.2,
                          0.65,
                          0.2,
                        ],
                      }}
                      transition={{
                        duration: resumeHover
                          ? 1
                          : 3.4,

                        repeat: Infinity,

                        ease: "easeInOut",
                      }}
                    />

                    {/* =================================
                        SMALL WATER BUBBLE 2
                    ================================= */}

                    <motion.span
                      className="
                        pointer-events-none
                        absolute

                        bottom-[4px]
                        right-[16px]

                        h-[3px]
                        w-[3px]

                        rounded-full

                        bg-white/20
                      "
                      animate={{
                        y: [0, -10, 0],
                        x: [0, -2, 0],
                        opacity: [
                          0.15,
                          0.55,
                          0.15,
                        ],
                      }}
                      transition={{
                        duration: resumeHover
                          ? 1.15
                          : 4,

                        repeat: Infinity,

                        ease: "easeInOut",

                        delay: 0.3,
                      }}
                    />

                    {/* =================================
                        TOP SHINE
                    ================================= */}

                    <motion.span
                      className="
                        pointer-events-none
                        absolute

                        left-[18%]
                        top-[5px]

                        h-[2px]
                        w-[30%]

                        rounded-full

                        bg-white/30
                        blur-[1px]
                      "
                      animate={{
                        x: [0, 18, 0],

                        opacity: [
                          0.25,
                          0.5,
                          0.25,
                        ],
                      }}
                      transition={{
                        duration: resumeHover
                          ? 1.1
                          : 3.8,

                        repeat: Infinity,

                        ease: "easeInOut",
                      }}
                    />

                    {/* =================================
                        RESUME TEXT
                    ================================= */}

                    <span
                      className="
                        relative
                        z-20
                        text-white
                      "
                    >
                      Resume
                    </span>

                    {/* =================================
                        DOWNLOAD ICON
                    ================================= */}

                    <ArrowDownToLine
                      size={14}
                      className="
                        relative
                        z-20
                        text-white
                      "
                    />
                  </motion.a>

                  {/* =================================
                      MOBILE MENU BUTTON
                  ================================= */}

                  <motion.button
                    type="button"
                    onClick={() => setMobileOpen(true)}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="
                      flex
                      h-[42px]
                      w-[42px]
                      items-center
                      justify-center
                      rounded-[12px]
                      border
                      lg:hidden
                    "
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                    aria-label="Open menu"
                  >
                    <Menu size={18} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ==================================================
          BOTTOM DESKTOP NAVBAR
      ================================================== */}

      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{
              opacity: 0,
              y: 55,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 45,
              scale: 0.96,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              bottom-5
              left-1/2
              z-50
              hidden
              -translate-x-1/2
              lg:block
            "
          >
            {/* UNDER GLOW */}

            <div
              className="
                pointer-events-none

                absolute
                bottom-[-10px]
                left-1/2

                h-[26px]
                w-[78%]

                -translate-x-1/2

                rounded-full
                opacity-30
                blur-[22px]
              "
              style={{
                background: "var(--glow-primary)",
              }}
            />

            <nav
              onMouseLeave={() => {
                setHoveredSection(null);
              }}
              className="
                relative

                flex
                min-w-[800px]
                items-center
                justify-between
                gap-[5px]

                rounded-full
                border

                p-[4px]
              "
              style={{
                background:
                  "color-mix(in srgb, var(--surface) 92%, transparent)",

                borderColor: "var(--border)",

                backdropFilter: "blur(25px)",
                WebkitBackdropFilter: "blur(25px)",

                boxShadow:
                  "0 14px 45px rgba(0,0,0,0.14)",
              }}
            >
              {navigationItems.map((item) => {
                const sectionId =
                  item.href.replace("#", "");

                const active =
                  activeSection === sectionId;

                const ownsCapsule =
                  hoveredSection !== null
                    ? hoveredSection === sectionId
                    : active;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) =>
                      handleNavClick(e, item.href)
                    }
                    onMouseEnter={() => {
                      if (!active) {
                        setHoveredSection(sectionId);
                      }
                    }}
                    className="
                      relative
                      isolate

                      flex
                      h-[38px]
                      min-w-[108px]
                      flex-1
                      items-center
                      justify-center

                      overflow-hidden
                      rounded-full

                      px-[20px]
                    "
                  >
                    {/* =================================
                        SINGLE MOVING CAPSULE
                    ================================= */}

                    {ownsCapsule && (
                      <motion.span
                        layoutId="bottom-menu-capsule"
                        className="
                          absolute
                          inset-0
                          -z-10

                          overflow-hidden
                          rounded-full
                        "
                        style={{
                          background:
                            "var(--accent-primary)",

                          boxShadow:
                            "0 5px 18px var(--glow-primary)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 80,
                          damping: 19,
                          mass: 1.2,
                        }}
                      >
                        {/* REFLECTION */}

                        <span
                          className="
                            absolute
                            left-[18%]
                            top-[4px]

                            h-[2px]
                            w-[34%]

                            rounded-full

                            bg-white/25
                            blur-[1px]
                          "
                        />
                      </motion.span>
                    )}

                    {/* =================================
                        MENU TEXT
                    ================================= */}

                    <motion.span
                      animate={{
                        color: ownsCapsule
                          ? "#ffffff"
                          : "var(--text-secondary)",
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        relative
                        z-20

                        text-[12px]
                        font-semibold
                      "
                    >
                      {item.label}
                    </motion.span>
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==================================================
          MOBILE SCROLLED MENU BUTTON
      ================================================== */}

      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.9,
            }}
            whileTap={{
              scale: 0.94,
            }}
            transition={{
              duration: 0.4,
            }}
            type="button"
            onClick={() => setMobileOpen(true)}
            className="
              fixed
              bottom-5
              left-1/2
              z-50

              flex
              -translate-x-1/2
              items-center
              gap-2

              rounded-full
              border

              px-5
              py-[11px]

              lg:hidden
            "
            style={{
              background:
                "color-mix(in srgb, var(--surface) 92%, transparent)",

              borderColor: "var(--border)",
              color: "var(--text-primary)",

              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",

              boxShadow:
                "0 15px 40px rgba(0,0,0,0.14)",
            }}
          >
            <Menu size={15} />

            <span className="text-xs font-semibold">
              Menu
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ==================================================
          MOBILE FULLSCREEN MENU
      ================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed
              inset-0
              z-[100]
              lg:hidden
            "
            style={{
              background: "var(--bg-primary)",
            }}
          >
            <div className="container-custom flex h-full flex-col">
              {/* =====================================
                  MOBILE HEADER
              ===================================== */}

              <div className="flex h-[82px] items-center justify-between">
                <a
                  href="#home"
                  onClick={(e) =>
                    handleNavClick(e, "#home")
                  }
                  className="
                    flex
                    h-[72px]
                    w-[185px]
                    items-center
                    justify-start
                  "
                >
                  <img
                    src={logo}
                    alt="Anil Kumar Logo"
                    draggable={false}
                    className="
                      block
                      h-auto
                      w-[170px]
                      max-w-none
                      object-contain
                      object-left
                    "
                  />
                </a>

                <motion.button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    items-center
                    justify-center

                    rounded-full
                    border
                  "
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface)",
                    color: "var(--text-primary)",
                  }}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </motion.button>
              </div>

              {/* =====================================
                  MOBILE NAVIGATION
              ===================================== */}

              <nav className="flex flex-1 flex-col justify-center gap-1">
                {navigationItems.map((item, index) => {
                  const sectionId =
                    item.href.replace("#", "");

                  const active =
                    activeSection === sectionId;

                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={(e) =>
                        handleNavClick(e, item.href)
                      }
                      initial={{
                        opacity: 0,
                        x: -25,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.05 + index * 0.05,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        group
                        relative

                        flex
                        items-center

                        overflow-hidden

                        py-[11px]
                      "
                    >
                      {/* LINE */}

                      <span
                        className={`
                          h-[2px]
                          rounded-full

                          transition-all
                          duration-500

                          ${
                            active
                              ? "mr-4 w-[28px]"
                              : "mr-0 w-0 group-hover:mr-4 group-hover:w-[28px]"
                          }
                        `}
                        style={{
                          background:
                            "var(--accent-primary)",
                        }}
                      />

                      {/* TEXT */}

                      <span
                        className="
                          text-[clamp(1.9rem,9vw,3.2rem)]
                          font-semibold
                          tracking-[-0.05em]

                          transition-all
                          duration-300

                          group-hover:translate-x-1
                        "
                        style={{
                          fontFamily:
                            '"Space Grotesk", sans-serif',

                          color: active
                            ? "var(--accent-primary)"
                            : "var(--text-primary)",
                        }}
                      >
                        {item.label}
                      </span>
                    </motion.a>
                  );
                })}
              </nav>

              {/* =====================================
                  MOBILE ACTIONS
              ===================================== */}

              <div
                className="border-t py-6"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                <div className="flex items-center gap-3">
                  {/* THEME */}

                  <motion.button
                    type="button"
                    onClick={toggleTheme}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="
                      flex
                      h-[48px]
                      w-[48px]
                      shrink-0
                      items-center
                      justify-center

                      rounded-[14px]
                      border
                    "
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? (
                      <Sun size={18} />
                    ) : (
                      <Moon size={18} />
                    )}
                  </motion.button>

                  {/* =================================
                      MOBILE RESUME
                  ================================= */}

                  <motion.a
                    href="/resume/anil-kumar-resume.pdf"
                    download
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      flex
                      h-[48px]
                      flex-1
                      items-center
                      justify-center
                      gap-2

                      rounded-[14px]

                      text-sm
                      font-semibold
                      text-white
                    "
                    style={{
                      background:
                        "var(--accent-primary)",
                    }}
                  >
                    Resume

                    <ArrowDownToLine size={15} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;