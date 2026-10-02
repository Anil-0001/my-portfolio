import { ArrowUp } from "lucide-react";
import { navigationItems } from "../../data/navigation";
import SocialLinks from "../ui/SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="border-t"
      style={{
        background: "var(--bg-primary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="container-custom py-10 sm:py-12">
        <div
          className="
            flex flex-col gap-10
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Left */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl text-sm font-bold
                "
                style={{
                  background: "var(--accent-soft)",
                  color: "var(--accent-primary)",
                  border: "1px solid var(--border-hover)",
                }}
              >
                AK
              </div>

              <div>
                <p
                  className="font-semibold"
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                  }}
                >
                  Anil Kumar
                </p>

                <p
                  className="text-xs"
                  style={{
                    color: "var(--text-tertiary)",
                  }}
                >
                  Frontend & MERN Developer
                </p>
              </div>
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="
                  text-sm font-medium
                  transition-colors duration-300
                "
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social + Top */}
          <div className="flex items-center gap-4">
            <SocialLinks />

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-full border
                transition-transform duration-300
                hover:-translate-y-1
              "
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>

        <div
          className="
            mt-10 flex flex-col gap-3
            border-t pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
          style={{
            borderColor: "var(--border)",
          }}
        >
          <p
            className="text-xs sm:text-sm"
            style={{
              color: "var(--text-tertiary)",
            }}
          >
            © {currentYear} Anil Kumar. All rights reserved.
          </p>

          <p
            className="text-xs sm:text-sm"
            style={{
              color: "var(--text-tertiary)",
            }}
          >
            Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;