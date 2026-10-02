import {
  Award,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

import { journeyData } from "../../data/journey";
import Reveal from "../ui/Reveal";

const Journey = () => {
  const getIcon = (type: string) => {
    if (type === "Experience") {
      return BriefcaseBusiness;
    }

    if (type === "Certification") {
      return Award;
    }

    return GraduationCap;
  };

  return (
    <section
      id="experience"
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
              My Journey
            </p>

            <h2 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Experience, learning and{" "}
              <span className="gradient-text">
                continuous growth.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div
            className="absolute bottom-0 left-[22px] top-0 hidden w-px md:block"
            style={{
              background: "var(--border)",
            }}
          />

          <div className="space-y-6">
            {journeyData.map((item, index) => {
              const Icon = getIcon(item.type);

              return (
                <Reveal
                  key={item.id}
                  delay={index * 0.08}
                >
                  <div className="relative grid gap-5 md:grid-cols-[46px_1fr]">
                    <div
                      className="relative z-10 hidden h-11 w-11 items-center justify-center rounded-full border md:flex"
                      style={{
                        background: "var(--surface)",
                        borderColor: "var(--border)",
                        color: "var(--accent-primary)",
                      }}
                    >
                      <Icon size={18} />
                    </div>

                    <div
                      className="rounded-2xl border p-6 sm:p-7"
                      style={{
                        background: "var(--surface)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p
                            className="text-xs font-semibold uppercase tracking-[0.16em]"
                            style={{
                              color: "var(--accent-primary)",
                            }}
                          >
                            {item.type}
                          </p>

                          <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                            {item.title}
                          </h3>

                          <p
                            className="mt-1 text-sm font-medium"
                            style={{
                              color: "var(--text-secondary)",
                            }}
                          >
                            {item.organization}
                          </p>
                        </div>

                        <span
                          className="w-fit rounded-full border px-3 py-1.5 text-xs font-medium"
                          style={{
                            background: "var(--bg-secondary)",
                            borderColor: "var(--border)",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {item.period}
                        </span>
                      </div>

                      <p
                        className="mt-5 max-w-3xl text-sm leading-7"
                        style={{
                          color: "var(--text-secondary)",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;