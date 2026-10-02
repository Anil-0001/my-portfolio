import { useEffect } from "react";
import { motion } from "framer-motion";

import heroImage from "../../assets/images/anil-hero.png";

type PortfolioIntroProps = {
  onComplete: () => void;
};

const PortfolioIntro = ({ onComplete }: PortfolioIntroProps) => {
  useEffect(() => {
    // Intro ke time scroll lock
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.45,
          ease: "easeInOut",
        },
      }}
      className="
        fixed
        inset-0
        z-[9999]
        overflow-hidden
      "
      style={{
        background: "var(--bg-primary)",
      }}
    >
      {/* =========================================
          BACKGROUND GRID
      ========================================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.32 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 72%)",
        }}
      />

      {/* =========================================
          PURPLE GLOW
      ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.4,
        }}
        animate={{
          opacity: [0, 0.55, 0.35],
          scale: [0.4, 1.15, 1],
        }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[440px]
          w-[440px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[120px]

          sm:h-[560px]
          sm:w-[560px]
        "
        style={{
          background: "var(--glow-primary)",
        }}
      />

      {/* CYAN GLOW */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: [0, 0.15, 0.08],
          scale: [0.5, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          delay: 0.15,
        }}
        className="
          pointer-events-none
          absolute
          left-[56%]
          top-[48%]
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[110px]
        "
        style={{
          background: "var(--accent-secondary)",
        }}
      />

      {/* =========================================
          TOP STATUS
      ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.25,
          duration: 0.5,
        }}
        className="
          absolute
          left-1/2
          top-7
          flex
          -translate-x-1/2
          items-center
          gap-2

          sm:top-10
        "
      >
        <motion.span
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
          className="h-[5px] w-[5px] rounded-full"
          style={{
            background: "var(--accent-secondary)",
            boxShadow: "0 0 12px var(--accent-secondary)",
          }}
        />

        <span
          className="
            whitespace-nowrap
            font-mono
            text-[9px]
            uppercase
            tracking-[0.24em]

            sm:text-[10px]
          "
          style={{
            color: "var(--text-tertiary)",
          }}
        >
          Initializing Portfolio
        </span>
      </motion.div>

      {/* =========================================
          CENTER SCENE
      ========================================= */}

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            relative
            flex
            h-[520px]
            w-full
            max-w-[900px]
            items-end
            justify-center

            sm:h-[620px]
          "
        >
          {/* OUTER RING */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: -30,
            }}
            animate={{
              opacity: [0, 0.5, 0.3],
              scale: [0.5, 1.08, 1],
              rotate: 360,
            }}
            transition={{
              opacity: {
                duration: 1.2,
              },
              scale: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              },
              rotate: {
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="
              absolute
              left-1/2
              top-[48%]
              h-[330px]
              w-[330px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-dashed

              sm:h-[450px]
              sm:w-[450px]
            "
            style={{
              borderColor: "var(--border)",
            }}
          />

          {/* INNER RING */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              opacity: 0.55,
              scale: 1,
              rotate: -360,
            }}
            transition={{
              opacity: {
                duration: 1,
                delay: 0.15,
              },
              scale: {
                duration: 1,
                delay: 0.15,
              },
              rotate: {
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="
              absolute
              left-1/2
              top-[48%]
              h-[260px]
              w-[260px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border

              sm:h-[355px]
              sm:w-[355px]
            "
            style={{
              borderColor: "var(--border)",
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
                boxShadow: "0 0 20px var(--accent-primary)",
              }}
            />

            <span
              className="
                absolute
                bottom-[15%]
                right-[4%]
                h-1.5
                w-1.5
                rounded-full
              "
              style={{
                background: "var(--accent-secondary)",
                boxShadow: "0 0 16px var(--accent-secondary)",
              }}
            />
          </motion.div>

          {/* =====================================
              TECH ITEMS
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
              y: 15,
              scale: 0.7,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [30, 0, 0, -15],
              y: [15, 0, -7, -12],
              scale: [0.7, 1, 1, 0.9],
            }}
            transition={{
              duration: 2.2,
              delay: 0.65,
              times: [0, 0.25, 0.75, 1],
            }}
            className="
              absolute
              left-[8%]
              top-[35%]
              hidden
              rounded-full
              border
              px-4
              py-2
              backdrop-blur-xl

              sm:block
            "
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            <span
              className="
                font-mono
                text-[10px]
                font-semibold
                tracking-[0.12em]
              "
              style={{
                color: "var(--accent-primary)",
              }}
            >
              REACT
            </span>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
              y: 10,
              scale: 0.7,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [-30, 0, 0, 15],
              y: [10, 0, 8, 14],
              scale: [0.7, 1, 1, 0.9],
            }}
            transition={{
              duration: 2.2,
              delay: 0.8,
              times: [0, 0.25, 0.75, 1],
            }}
            className="
              absolute
              right-[8%]
              top-[43%]
              hidden
              rounded-full
              border
              px-4
              py-2
              backdrop-blur-xl

              sm:block
            "
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            <span
              className="
                font-mono
                text-[10px]
                font-semibold
                tracking-[0.12em]
              "
              style={{
                color: "var(--accent-secondary)",
              }}
            >
              NODE.JS
            </span>
          </motion.div>

          {/* CODE SYMBOL LEFT */}

          <motion.span
            initial={{
              opacity: 0,
              x: 25,
            }}
            animate={{
              opacity: [0, 0.8, 0.8, 0],
              x: [25, 0, -5, -20],
              y: [0, -5, 5, -10],
            }}
            transition={{
              duration: 2,
              delay: 0.8,
            }}
            className="
              absolute
              left-[19%]
              top-[54%]
              hidden
              font-mono
              text-xl
              font-semibold

              md:block
            "
            style={{
              color: "var(--accent-secondary)",
            }}
          >
            {"</>"}
          </motion.span>

          {/* CODE SYMBOL RIGHT */}

          <motion.span
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: [0, 0.8, 0.8, 0],
              x: [-25, 0, 5, 20],
              y: [0, 6, -4, 10],
            }}
            transition={{
              duration: 2,
              delay: 0.95,
            }}
            className="
              absolute
              right-[20%]
              top-[28%]
              hidden
              font-mono
              text-lg
              font-semibold

              md:block
            "
            style={{
              color: "var(--accent-primary)",
            }}
          >
            {"{ }"}
          </motion.span>

          {/* =====================================
              CHARACTER
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 90,
              scale: 0.72,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: [0, 1, 1, 1, 0],
              y: [90, 0, 0, -5, 0],
              x: [0, 0, 0, 0, 300],
              scale: [0.72, 1, 1, 1.02, 0.94],
              filter: [
                "blur(12px)",
                "blur(0px)",
                "blur(0px)",
                "blur(0px)",
                "blur(0px)",
              ],
            }}
            transition={{
              duration: 2.75,
              times: [0, 0.28, 0.58, 0.78, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-20
              flex
              h-full
              items-end
              justify-center
            "
          >
            <motion.img
              src={heroImage}
              alt=""
              draggable={false}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                max-h-[430px]
                w-auto
                max-w-[92vw]
                select-none
                object-contain
                object-bottom
                drop-shadow-[0_28px_45px_rgba(0,0,0,0.24)]

                sm:max-h-[540px]
              "
            />
          </motion.div>

          {/* SCAN LINE */}

          <motion.div
            initial={{
              opacity: 0,
              top: "25%",
            }}
            animate={{
              opacity: [0, 0.8, 0.8, 0],
              top: ["25%", "25%", "76%", "76%"],
            }}
            transition={{
              duration: 1.25,
              delay: 0.5,
              times: [0, 0.1, 0.85, 1],
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              z-30
              h-[1px]
              w-[270px]
              -translate-x-1/2

              sm:w-[390px]
            "
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--accent-secondary), transparent)",
              boxShadow: "0 0 15px var(--accent-secondary)",
            }}
          />
        </div>
      </div>

      {/* =========================================
          BOTTOM TEXT
      ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [10, 0, 0, -5],
        }}
        transition={{
          duration: 2.3,
          delay: 0.45,
          times: [0, 0.2, 0.75, 1],
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-center

          sm:bottom-10
        "
      >
        <p
          className="
            whitespace-nowrap
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.25em]
          "
          style={{
            color: "var(--text-secondary)",
          }}
        >
          Full Stack Developer
        </p>

        <div
          className="
            mx-auto
            mt-3
            h-[1px]
            w-[120px]
            overflow-hidden
          "
          style={{
            background: "var(--border)",
          }}
        >
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "100%",
            }}
            transition={{
              duration: 1.6,
              delay: 0.55,
              ease: "easeInOut",
            }}
            className="h-full w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-secondary), transparent)",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioIntro;