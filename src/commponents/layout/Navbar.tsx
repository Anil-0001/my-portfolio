import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

import { navigationItems } from "../../data/navigation";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full transition-all duration-300"
      style={{
        background: isScrolled
          ? "color-mix(in srgb, var(--bg-primary) 86%, transparent)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(18px)" : "none",
        borderBottom: isScrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
      }}
    >
      <div className="container-custom">
        <div className="flex h-[76px] items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3"
            onClick={closeMenu}
          >
            <div
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl text-sm font-bold
                transition-transform duration-300
                group-hover:rotate-6 group-hover:scale-105
              "
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent-primary)",
                border: "1px solid var(--border-hover)",
              }}
            >
              AK
            </div>

            <div className="hidden sm:block">
              <p
                className="font-semibold leading-none"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                Anil Kumar
              </p>

              <span
                className="mt-1 block text-[11px] uppercase tracking-[0.18em]"
                style={{ color: "var(--text-tertiary)" }}
              >
                Web Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="
                  group relative rounded-lg px-4 py-2
                  text-sm font-medium
                "
                style={{ color: "var(--text-secondary)" }}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--text-primary)]">
                  {item.label}
                </span>

                <span
                  className="
                    absolute bottom-1 left-1/2 h-[2px] w-0
                    -translate-x-1/2 rounded-full
                    transition-all duration-300
                    group-hover:w-5
                  "
                  style={{ background: "var(--accent-primary)" }}
                />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            <a
              href="/resume/anil-kumar-resume.pdf"
              download
              className="
                group flex items-center gap-2
                rounded-full px-5 py-2.5
                text-sm font-semibold text-white
                transition-all duration-300
                hover:-translate-y-0.5
              "
              style={{
                background: "var(--accent-primary)",
                boxShadow: "0 10px 30px var(--glow-primary)",
              }}
            >
              Resume

              <Download
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              aria-label="Open navigation menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full border
              "
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
                color: "var(--text-primary)",
              }}
            >
              {isOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.22,
              ease: "easeOut",
            }}
            className="lg:hidden"
            style={{
              background: "var(--bg-primary)",
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div className="container-custom py-5">
              <nav className="flex flex-col">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    className="
                      border-b py-4 text-base font-medium
                      last:border-b-0
                    "
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <span
                      className="mr-3 text-xs"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      0{index + 1}
                    </span>

                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <a
                href="/resume/anil-kumar-resume.pdf"
                download
                className="
                  mt-5 flex w-full items-center justify-center
                  gap-2 rounded-xl py-3.5
                  text-sm font-semibold text-white
                "
                style={{ background: "var(--accent-primary)" }}
              >
                Download Resume
                <Download size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar ;