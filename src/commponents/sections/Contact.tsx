import { Mail, Phone, MapPin, Send } from "lucide-react";
import { contactData } from "../../data/contact";
import SocialLinks from "../ui/SocialLinks";
import Reveal from "../ui/Reveal";

const Contact = () => {
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{
        background: "var(--bg-secondary)",
      }}
    >
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full blur-[130px]"
        style={{
          background: "var(--glow-primary)",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div>
              <p
                className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{
                  color: "var(--accent-primary)",
                }}
              >
                {contactData.label}
              </p>

              <h2 className="max-w-xl text-4xl font-semibold sm:text-5xl lg:text-6xl">
                {contactData.heading}{" "}
                <span
                  style={{
                    color: "var(--accent-primary)",
                  }}
                >
                  Let's talk.
                </span>
              </h2>

              <p
                className="mt-6 max-w-xl text-base leading-8 sm:text-lg"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                {contactData.description}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    background: "var(--accent-secondary)",
                  }}
                />

                <span
                  className="text-sm font-medium"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {contactData.availability}
                </span>
              </div>

              <div className="mt-10 space-y-5">
                <a
                  href={`mailto:${contactData.email}`}
                  className="flex items-center gap-4"
                >
                  <Mail size={18} />
                  <span>{contactData.email}</span>
                </a>

                <a
                  href={`tel:${contactData.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4"
                >
                  <Phone size={18} />
                  <span>{contactData.phone}</span>
                </a>

                <div className="flex items-center gap-4">
                  <MapPin size={18} />
                  <span>{contactData.location}</span>
                </div>
              </div>

              <div className="mt-9">
                <SocialLinks />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              className="rounded-[28px] border p-6 sm:p-8"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <form onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none"
                      style={{
                        background: "var(--bg-primary)",
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none"
                      style={{
                        background: "var(--bg-primary)",
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Project, job opportunity..."
                    required
                    className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none"
                    style={{
                      background: "var(--bg-primary)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell me what you have in mind..."
                    required
                    className="w-full resize-none rounded-xl border px-4 py-3.5 text-sm outline-none"
                    style={{
                      background: "var(--bg-primary)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white"
                  style={{
                    background: "var(--accent-primary)",
                  }}
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;