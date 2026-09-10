import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { heroData } from "../../data/hero";
import SocialLinks from "../ui/SocialLinks";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative flex min-h-screen
        items-center overflow-hidden
        pt-[76px]
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 top-24
          h-[420px] w-[420px]
          rounded-full blur-[120px]
          md:h-[600px] md:w-[600px]
        "
        style={{
          background: "var(--glow-primary)",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-32 bottom-0
          h-[300px] w-[300px]
          rounded-full blur-[120px]
        "
        style={{
          background: "var(--glow-secondary)",
        }}
      />

      <div className="container-custom relative z-10">
        <div
          className="
            grid items-center gap-14
            py-16
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-16
            lg:py-20
          "
        >
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="
                mb-7 inline-flex items-center
                gap-2.5 rounded-full border
                px-4 py-2
              "
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute inline-flex h-full w-full
                    animate-ping rounded-full opacity-60
                  "
                  style={{
                    background: "var(--accent-secondary)",
                  }}
                />

                <span
                  className="relative h-2 w-2 rounded-full"
                  style={{
                    background: "var(--accent-secondary)",
                  }}
                />
              </span>

              <span
                className="text-xs font-semibold sm:text-sm"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                {heroData.eyebrow}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="
                mb-2 text-lg font-medium
                sm:text-xl md:text-2xl
              "
              style={{
                color: "var(--text-secondary)",
              }}
            >
              {heroData.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-[clamp(3.4rem,9vw,7.5rem)]
                font-semibold leading-[0.88]
                tracking-[-0.065em]
              "
            >
              {heroData.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-6"
            >
              <h2
                className="
                  text-2xl font-medium
                  leading-tight
                  sm:text-3xl
                  md:text-4xl
                  lg:text-[2.65rem]
                "
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                {heroData.title}
                <span className="gradient-text">
                  {" "}
                  {heroData.highlight}
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="
                mt-7 max-w-xl
                text-base leading-7
                sm:text-lg sm:leading-8
              "
              style={{
                color: "var(--text-secondary)",
              }}
            >
              {heroData.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.45,
              }}
              className="
                mt-9 flex flex-col gap-3
                sm:flex-row
              "
            >
              <a
                href={heroData.primaryButton.href}
                className="
                  group flex items-center
                  justify-center gap-2
                  rounded-full px-6 py-3.5
                  text-sm font-semibold text-white
                  transition-all duration-300
                  hover:-translate-y-1
                "
                style={{
                  background: "var(--accent-primary)",
                  boxShadow:
                    "0 14px 40px var(--glow-primary)",
                }}
              >
                {heroData.primaryButton.label}

                <ArrowDownRight
                  size={17}
                  className="
                    transition-transform duration-300
                    group-hover:rotate-[-45deg]
                  "
                />
              </a>

              <a
                href={heroData.secondaryButton.href}
                className="
                  group flex items-center
                  justify-center gap-2
                  rounded-full border
                  px-6 py-3.5
                  text-sm font-semibold
                  transition-all duration-300
                  hover:-translate-y-1
                "
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                {heroData.secondaryButton.label}

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
              className="mt-8"
            >
              <SocialLinks />
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              x: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative mx-auto
              hidden w-full max-w-[470px]
              lg:block
            "
          >
            <div
              className="
                relative aspect-square
                overflow-hidden rounded-[32px]
                border p-3
              "
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              {/* Grid */}
              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage: `
                    linear-gradient(var(--text-tertiary) 1px, transparent 1px),
                    linear-gradient(90deg, var(--text-tertiary) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="relative flex h-full flex-col justify-between p-7">
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-xs font-semibold
                      uppercase tracking-[0.2em]
                    "
                    style={{
                      color: "var(--text-tertiary)",
                    }}
                  >
                    Developer
                  </span>

                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      background: "var(--accent-secondary)",
                      boxShadow:
                        "0 0 18px var(--accent-secondary)",
                    }}
                  />
                </div>

                <div>
                  <p
                    className="
                      mb-4 text-sm uppercase
                      tracking-[0.18em]
                    "
                    style={{
                      color: "var(--text-tertiary)",
                    }}
                  >
                    Core Stack
                  </p>

                  <div
                    className="
                      text-[clamp(3rem,5vw,5rem)]
                      font-semibold leading-[0.9]
                      tracking-[-0.06em]
                    "
                    style={{
                      fontFamily:
                        '"Space Grotesk", sans-serif',
                    }}
                  >
                    REACT
                    <br />
                    NEXT
                    <br />

                    <span className="gradient-text">
                      MERN.
                    </span>
                  </div>
                </div>

                <div
                  className="
                    flex items-end
                    justify-between border-t pt-5
                  "
                  style={{
                    borderColor: "var(--border)",
                  }}
                >
                  <span
                    className="text-sm"
                    style={{
                      color: "var(--text-secondary)",
                    }}
                  >
                    Based in India
                  </span>

                  <span
                    className="
                      text-xs uppercase
                      tracking-[0.15em]
                    "
                    style={{
                      color: "var(--text-tertiary)",
                    }}
                  >
                    2026
                  </span>
                </div>
              </div>
            </div>

            {/* Floating code */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute -bottom-7 -left-10
                rounded-2xl border
                px-5 py-4
              "
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <code
                className="text-sm font-medium"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                <span
                  style={{
                    color: "var(--accent-primary)",
                  }}
                >
                  const
                </span>{" "}
                developer = "Anil";
              </code>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;