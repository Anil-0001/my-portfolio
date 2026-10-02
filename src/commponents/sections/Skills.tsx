import {
  Code2,
  Database,
  Wrench,
} from "lucide-react";

import { skillsData } from "../../data/skills";
import Reveal from "../ui/Reveal";

const Skills = () => {
  const icons = [Code2, Database, Wrench];

  return (
    <section
      id="skills"
      className="section-padding"
      style={{
        background: "var(--bg-primary)",
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
              Tech Stack
            </p>

            <h2 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Technologies I use to{" "}
              <span className="gradient-text">
                build modern products.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {skillsData.map((group, index) => {
            const Icon = icons[index];

            return (
              <Reveal
                key={group.id}
                delay={index * 0.1}
              >
                <div
                  className="surface h-full p-6 sm:p-7"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      background: "var(--accent-soft)",
                      color: "var(--accent-primary)",
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {group.category}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border px-3 py-1.5 text-sm"
                        style={{
                          background: "var(--bg-secondary)",
                          borderColor: "var(--border)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;