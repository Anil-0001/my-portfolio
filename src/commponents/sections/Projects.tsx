import {
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import { projectsData } from "../../data/projects";
import Reveal from "../ui/Reveal";

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-padding"
      style={{
        background: "var(--bg-secondary)",
      }}
    >
      <div className="container-custom">
        <Reveal>
          <div className="max-w-3xl">
            <p
              className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{
                color: "var(--accent-primary)",
              }}
            >
              Selected Work
            </p>

            <h2 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Projects built with{" "}
              <span className="gradient-text">
                real product thinking.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 space-y-8">
          {projectsData.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.1}
            >
              <article
                className="surface group grid gap-8 overflow-hidden p-5 sm:p-7 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:p-8"
              >
                {/* Visual */}
                <div
                  className="relative min-h-[280px] overflow-hidden rounded-2xl border sm:min-h-[340px]"
                  style={{
                    background: "var(--bg-primary)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                      backgroundSize: "36px 36px",
                    }}
                  />

                  <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-between p-6 sm:min-h-[340px] sm:p-8">
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.2em]"
                      style={{
                        color: "var(--text-tertiary)",
                      }}
                    >
                      Project 0{index + 1}
                    </span>

                    <div>
                      <p
                        className="text-5xl font-semibold sm:text-6xl"
                        style={{
                          fontFamily:
                            '"Space Grotesk", sans-serif',
                          color: "var(--accent-primary)",
                        }}
                      >
                        {project.title}
                      </p>

                      <p
                        className="mt-3 max-w-sm text-sm"
                        style={{
                          color: "var(--text-secondary)",
                        }}
                      >
                        {project.type}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.18em]"
                    style={{
                      color: "var(--accent-primary)",
                    }}
                  >
                    Featured Project
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold">
                    {project.title}
                  </h3>

                  <p
                    className="mt-4 leading-7"
                    style={{
                      color: "var(--text-secondary)",
                    }}
                  >
                    {project.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-1 shrink-0"
                          style={{
                            color: "var(--accent-secondary)",
                          }}
                        />

                        <p
                          className="text-sm leading-6"
                          style={{
                            color: "var(--text-secondary)",
                          }}
                        >
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border px-3 py-1.5 text-xs font-medium"
                        style={{
                          borderColor: "var(--border)",
                          background: "var(--bg-primary)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      className="group/link inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
                      style={{
                        background: "var(--accent-primary)",
                      }}
                    >
                      Live Project

                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                      />
                    </a>

                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold"
                      style={{
                        background: "var(--surface)",
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                      }}
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;