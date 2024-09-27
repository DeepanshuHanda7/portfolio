export type SiteConfig = typeof siteConfig;
import { AiFillHome } from "react-icons/ai";
import { FaFolderOpen } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

export const siteConfig = {
  name: "Deepanshu Handa",
  description: "Web developer || Freelancer",
  navItems: [
    {
      label: "Home",
      href: "/",
      icon: AiFillHome,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: FaFolderOpen,
    },
    {
      label: "Experience",
      href: "/experience",
      icon: IoPerson,
    },
    {
      label: "Contact Me",
      href: "/contact",
      icon: IoMdMail,
    },
  ],
  links: {
    github: "https://github.com/DeepanshuHanda7/",
    twitter: "https://twitter.com/Dee7panshu",
    linkedin: "https://www.linkedin.com/in/deepanshu-handa-0b340622a/",
    codeforces: "https://codeforces.com/profile/Deepanshu.7",
    leetcode: "https://leetcode.com/u/dee7panshu/",
    email: "mailto:deepanshu.student.cer21@itbhu.ac.in",
    resume:
      "https://drive.google.com/file/d/1u8NFQutYSkEqn1VlOr1SE3slCBByiHE6/view?usp=sharing",
  },
};
