import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import type { IconType } from "react-icons";

export type SocialLink = {
  id: number;
  label: string;
  href: string;
  icon: IconType;
};

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    label: "GitHub",
    href: "https://github.com/Anil-0001",
    icon: FaGithub,
  },
  {
    id: 2,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anil-choudhary-b77763251",
    icon: FaLinkedinIn,
  },
{
  id: 3,
  label: "Email",
  href: "mailto:choudharyanil64935@gmail.com?subject=Portfolio%20Inquiry",
  icon: MdOutlineEmail,
}
];