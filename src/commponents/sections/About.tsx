import { ArrowUpRight, Check } from "lucide-react";
import { aboutData } from "../../data/about";
import Reveal from "../ui/Reveal";

const About = () => {
  return (
    <section
      id="about"
      className="section-padding"
      style={{
        background: "var(--bg-secondary)",
      }}
    >
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p
                className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{
                  color: "var(--accent-primary)",
                }}
              >
                {aboutData.label}
              </p>

              <h2 className="max-w-lg text-4xl font-semibold sm:text-5xl lg:text-6xl">
                More than just{" "}
                <span className="gradient-text">
                  writing code.
                </span>
              </h2>

              <a
                href="#projects"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                Explore my work

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <h3 className="max-w-2xl text-2xl font-semibold leading-snug sm:text-3xl">
                {aboutData.heading}
              </h3>
            </Reveal>

            <Reveal delay={0.15}>
              <p
                className="mt-6 max-w-2xl leading-8"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                {aboutData.description}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="mt-4 max-w-2xl leading-8"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                {aboutData.secondaryDescription}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {aboutData.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: "var(--accent-soft)",
                        color: "var(--accent-primary)",
                      }}
                    >
                      <Check size={15} />
                    </div>

                    <span className="text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">
                {aboutData.stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="rounded-2xl border p-4 sm:p-5"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <p
                      className="text-xl font-semibold sm:text-2xl"
                      style={{
                        fontFamily: '"Space Grotesk", sans-serif',
                      }}
                    >
                      {stat.value}
                    </p>

                    <p
                      className="mt-1 text-xs sm:text-sm"
                      style={{
                        color: "var(--text-tertiary)",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;