import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  Server,
} from "lucide-react";

import SocialLinks from "../ui/SocialLinks";
import heroImage from "../../assets/images/anil-hero.png";

type HeroProps = {
  introDone?: boolean;
};

const techStack = [
  {
    name: "React",
    icon: Code2,
  },
  {
    name: "Next.js",
    icon: Layers3,
  },
  {
    name: "Node.js",
    icon: Server,
  },
  {
    name: "MongoDB",
    icon: Database,
  },
];

const Hero = ({ introDone = true }: HeroProps) => {
  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-[100svh]
        items-center
        overflow-hidden
        pt-[82px]
      "
      style={{
        background: "var(--bg-primary)",
      }}
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* GRID */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.18]
          "
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          }}
        />

        {/* LEFT GLOW */}

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-[180px]
            top-[22%]
            h-[420px]
            w-[420px]
            rounded-full
            blur-[150px]
          "
          style={{
            background: "var(--glow-primary)",
            opacity: 0.34,
          }}
        />

        {/* RIGHT CYAN GLOW */}

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-[150px]
            top-[30%]
            h-[360px]
            w-[360px]
            rounded-full
            blur-[160px]
          "
          style={{
            background: "var(--accent-secondary)",
            opacity: 0.08,
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <motion.div
        initial={false}
        animate={
          introDone
            ? {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }
            : {
                opacity: 0,
                y: 20,
                filter: "blur(7px)",
              }
        }
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          container-custom
          relative
          z-10
          py-8

          sm:py-10

          lg:py-6
        "
      >
        <div
          className="
            grid
            items-center
            gap-10

            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-12

            xl:gap-16
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-20
              mx-auto
              w-full
              max-w-[690px]
              text-center

              lg:mx-0
              lg:text-left
            "
          >
            {/* AVAILABLE BADGE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={
                introDone
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 14,
                    }
              }
              transition={{
                duration: 0.55,
                delay: introDone ? 0.08 : 0,
              }}
              className="
                mb-5
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                px-3.5
                py-2
              "
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    opacity-60
                  "
                  style={{
                    background: "var(--accent-secondary)",
                  }}
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                  "
                  style={{
                    background: "var(--accent-secondary)",
                  }}
                />
              </span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]

                  sm:text-[11px]
                "
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                Available for opportunities
              </span>
            </motion.div>

            {/* SMALL INTRO */}

            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={
                introDone
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 16,
                    }
              }
              transition={{
                duration: 0.6,
                delay: introDone ? 0.14 : 0,
              }}
              className="
                mb-2
                flex
                items-center
                justify-center
                gap-3

                lg:justify-start
              "
            >
              <span
                className="
                  hidden
                  h-[1px]
                  w-8

                  sm:block
                "
                style={{
                  background: "var(--accent-primary)",
                }}
              />

              <p
                className="
                  text-[13px]
                  font-semibold
                  uppercase
                  tracking-[0.19em]

                  sm:text-[14px]
                "
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                Hi, I&apos;m Anil Kumar
              </p>
            </motion.div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 22,
              }}
              animate={
                introDone
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 22,
                    }
              }
              transition={{
                duration: 0.7,
                delay: introDone ? 0.2 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-heading
                text-[clamp(3.1rem,8.5vw,5.4rem)]
                font-[700]
                leading-[0.91]
                tracking-[-0.065em]
              "
              style={{
                color: "var(--text-primary)",
              }}
            >
              <span className="block">FULL STACK</span>

              <span className="relative mt-1 inline-block">
                <span
                  style={{
                    color: "var(--accent-primary)",
                  }}
                >
                  DEVELOPER
                </span>

                <motion.span
                  initial={{
                    scaleX: 0,
                  }}
                  animate={
                    introDone
                      ? {
                          scaleX: 1,
                        }
                      : {
                          scaleX: 0,
                        }
                  }
                  transition={{
                    duration: 0.7,
                    delay: introDone ? 0.75 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[3px]
                    w-[42%]
                    origin-left
                    rounded-full
                  "
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))",
                  }}
                />
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={
                introDone
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              transition={{
                duration: 0.65,
                delay: introDone ? 0.32 : 0,
              }}
              className="
                mx-auto
                mt-7
                max-w-[590px]
                text-[14px]
                leading-7

                sm:text-[15px]

                lg:mx-0
                lg:text-[16px]
              "
              style={{
                color: "var(--text-secondary)",
              }}
            >
              I build responsive, scalable web applications with modern
              frontend experiences and reliable full-stack functionality —
              from polished interfaces to APIs, authentication and databases.
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={
                introDone
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              transition={{
                duration: 0.65,
                delay: introDone ? 0.42 : 0,
              }}
              className="
                mt-7
                flex
                flex-wrap
                items-center
                justify-center
                gap-3

                lg:justify-start
              "
            >
              {/* PROJECT BUTTON */}

              <motion.button
                type="button"
                onClick={() => scrollToSection("#projects")}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  relative
                  flex
                  h-[48px]
                  items-center
                  gap-2.5
                  overflow-hidden
                  rounded-[13px]
                  px-5
                  text-[13px]
                  font-semibold
                  text-white

                  sm:px-6
                "
                style={{
                  background: "var(--accent-primary)",
                  boxShadow: "0 10px 28px var(--glow-primary)",
                }}
              >
                <motion.span
                  className="
                    absolute
                    inset-y-0
                    -left-[60%]
                    w-[45%]
                    skew-x-[-20deg]
                    bg-white/[0.15]
                  "
                  whileHover={{
                    left: "125%",
                  }}
                  transition={{
                    duration: 0.65,
                  }}
                />

                <span className="relative z-10">View Projects</span>

                <ArrowDownRight
                  size={16}
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:translate-y-0.5
                  "
                />
              </motion.button>

              {/* CONTACT BUTTON */}

              <motion.button
                type="button"
                onClick={() => scrollToSection("#contact")}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  flex
                  h-[48px]
                  items-center
                  gap-2.5
                  rounded-[13px]
                  border
                  px-5
                  text-[13px]
                  font-semibold
                  transition-colors

                  sm:px-6
                "
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                  color: "var(--text-primary)",
                }}
              >
                Let&apos;s Connect

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </motion.button>
            </motion.div>

            {/* =================================================
                SOCIAL + TECH STACK
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={
                introDone
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              transition={{
                duration: 0.65,
                delay: introDone ? 0.52 : 0,
              }}
              className="
                mt-8
                flex
                flex-col
                items-center
                gap-6

                sm:flex-row
                sm:justify-center

                lg:justify-start
              "
            >
              <SocialLinks />

              <div
                className="
                  hidden
                  h-7
                  w-[1px]

                  sm:block
                "
                style={{
                  background: "var(--border)",
                }}
              />

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-2

                  lg:justify-start
                "
              >
                {techStack.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={tech.name}
                      whileHover={{
                        y: -3,
                        scale: 1.03,
                      }}
                      className="
                        flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        px-2.5
                        py-1.5
                      "
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--surface)",
                      }}
                    >
                      <Icon
                        size={12}
                        style={{
                          color: "var(--accent-primary)",
                        }}
                      />

                      <span
                        className="
                          text-[9px]
                          font-semibold
                          tracking-[0.03em]
                        "
                        style={{
                          color: "var(--text-secondary)",
                        }}
                      >
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT SIDE IMAGE / INTERACTIVE VISUAL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
              scale: 0.94,
            }}
            animate={
              introDone
                ? {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }
                : {
                    opacity: 0,
                    x: 45,
                    scale: 0.94,
                  }
            }
            transition={{
              duration: 0.85,
              delay: introDone ? 0.3 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mx-auto
              flex
              min-h-[400px]
              w-full
              max-w-[560px]
              items-end
              justify-center

              sm:min-h-[480px]

              lg:mx-0
              lg:min-h-[570px]
              lg:max-w-none
            "
          >
            {/* ===============================================
                LARGE BACK NUMBER
            =============================================== */}

            <motion.span
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                right-[3%]
                top-[6%]
                select-none
                font-heading
                text-[100px]
                font-bold
                leading-none
                tracking-[-0.08em]
                opacity-[0.045]

                sm:text-[145px]

                lg:text-[180px]
              "
              style={{
                color: "var(--text-primary)",
              }}
            >
              01
            </motion.span>

            {/* ===============================================
                ROTATING OUTER RING
            =============================================== */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                left-1/2
                top-[48%]
                h-[310px]
                w-[310px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-dashed

                sm:h-[390px]
                sm:w-[390px]

                lg:h-[470px]
                lg:w-[470px]
              "
              style={{
                borderColor: "var(--border)",
                opacity: 0.5,
              }}
            >
              <span
                className="
                  absolute
                  left-1/2
                  top-[-4px]
                  h-2
                  w-2
                  -translate-x-1/2
                  rounded-full
                "
                style={{
                  background: "var(--accent-primary)",
                  boxShadow: "0 0 16px var(--accent-primary)",
                }}
              />

              <span
                className="
                  absolute
                  bottom-[12%]
                  right-[8%]
                  h-1.5
                  w-1.5
                  rounded-full
                "
                style={{
                  background: "var(--accent-secondary)",
                  boxShadow: "0 0 14px var(--accent-secondary)",
                }}
              />
            </motion.div>

            {/* INNER CIRCLE */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 38,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                left-1/2
                top-[48%]
                h-[250px]
                w-[250px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border

                sm:h-[320px]
                sm:w-[320px]

                lg:h-[390px]
                lg:w-[390px]
              "
              style={{
                borderColor: "var(--border)",
                opacity: 0.38,
              }}
            />

            {/* IMAGE BACK GLOW */}

            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.28, 0.42, 0.28],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[7%]
                left-1/2
                h-[270px]
                w-[270px]
                -translate-x-1/2
                rounded-full
                blur-[80px]

                sm:h-[340px]
                sm:w-[340px]

                lg:h-[390px]
                lg:w-[390px]
              "
              style={{
                background: "var(--glow-primary)",
              }}
            />

            {/* ===============================================
                IMAGE
            =============================================== */}

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-20
                flex
                h-full
                w-full
                items-end
                justify-center
              "
            >
              <img
                src={heroImage}
                alt="Anil Kumar - Full Stack Developer"
                draggable={false}
                className="
                  relative
                  z-20
                  max-h-[390px]
                  w-auto
                  max-w-full
                  select-none
                  object-contain
                  object-bottom
                  drop-shadow-[0_30px_35px_rgba(0,0,0,0.18)]

                  sm:max-h-[470px]

                  lg:max-h-[545px]
                "
              />
            </motion.div>

            {/* ===============================================
                FLOATING LABEL - LEFT
            =============================================== */}

            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-0
                top-[25%]
                z-30
                hidden
                rounded-[14px]
                border
                px-3
                py-2.5
                backdrop-blur-xl

                sm:block
              "
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-[8px]
                  "
                  style={{
                    background: "var(--accent-soft)",
                    color: "var(--accent-primary)",
                  }}
                >
                  <Code2 size={14} />
                </span>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.13em]
                    "
                    style={{
                      color: "var(--text-tertiary)",
                    }}
                  >
                    Focus
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[11px]
                      font-semibold
                    "
                    style={{
                      color: "var(--text-primary)",
                    }}
                  >
                    Clean UI
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ===============================================
                FLOATING LABEL - RIGHT
            =============================================== */}

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-0
                top-[45%]
                z-30
                hidden
                rounded-[14px]
                border
                px-3
                py-2.5
                backdrop-blur-xl

                sm:block
              "
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-[8px]
                  "
                  style={{
                    background: "var(--accent-soft)",
                    color: "var(--accent-secondary)",
                  }}
                >
                  <Server size={14} />
                </span>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.13em]
                    "
                    style={{
                      color: "var(--text-tertiary)",
                    }}
                  >
                    Building
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[11px]
                      font-semibold
                    "
                    style={{
                      color: "var(--text-primary)",
                    }}
                  >
                    Full Stack
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ===============================================
                BOTTOM STATUS
            =============================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={
                introDone
                  ? {
                      opacity: 1,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      scale: 0.9,
                    }
              }
              transition={{
                duration: 0.5,
                delay: introDone ? 0.8 : 0,
              }}
              className="
                absolute
                bottom-[4%]
                left-[3%]
                z-30
                hidden
                items-center
                gap-2
                rounded-full
                border
                px-3
                py-2
                backdrop-blur-xl

                md:flex
              "
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
              }}
            >
              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                }}
                className="
                  h-[6px]
                  w-[6px]
                  rounded-full
                "
                style={{
                  background: "var(--accent-secondary)",
                  boxShadow: "0 0 10px var(--accent-secondary)",
                }}
              />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                "
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                Based in India
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================
          BOTTOM SCROLL INDICATOR
      ===================================================== */}

      <motion.button
        type="button"
        onClick={() => scrollToSection("#about")}
        initial={{
          opacity: 0,
        }}
        animate={
          introDone
            ? {
                opacity: 1,
              }
            : {
                opacity: 0,
              }
        }
        transition={{
          duration: 0.6,
          delay: introDone ? 0.9 : 0,
        }}
        className="
          absolute
          bottom-5
          left-1/2
          z-30
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2

          lg:flex
        "
      >
        <span
          className="
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.2em]
          "
          style={{
            color: "var(--text-tertiary)",
          }}
        >
          Scroll
        </span>

        <span
          className="
            relative
            block
            h-[30px]
            w-[1px]
            overflow-hidden
          "
          style={{
            background: "var(--border)",
          }}
        >
          <motion.span
            animate={{
              y: [-30, 30],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-0
              top-0
              h-[14px]
              w-full
            "
            style={{
              background: "var(--accent-primary)",
            }}
          />
        </span>
      </motion.button>
    </section>
  );
};

export default Hero;