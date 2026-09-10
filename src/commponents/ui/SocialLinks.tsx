import { motion } from "framer-motion";
import { socialLinks } from "../../data/socialLinks";

const SocialLinks = () => {
  const handleEmailClick = () => {
    const mailto =
      "mailto:choudharyanil64935@gmail.com?subject=Portfolio%20Inquiry";

    const gmail =
      "https://mail.google.com/mail/?view=cm&fs=1&to=choudharyanil64935@gmail.com&su=Portfolio%20Inquiry";

    window.location.href = mailto;

    setTimeout(() => {
      window.open(gmail, "_blank");
    }, 1200);
  };

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        const isEmail = social.label === "Email";

        if (isEmail) {
          return (
            <motion.button
              key={social.id}
              type="button"
              onClick={handleEmailClick}
              aria-label="Email"
              title="Email"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.94 }}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full border
              "
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              <Icon size={18} />
            </motion.button>
          );
        }

        return (
          <motion.a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            title={social.label}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.94 }}
            className="
              flex h-11 w-11 items-center justify-center
              rounded-full border
            "
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            <Icon size={18} />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;