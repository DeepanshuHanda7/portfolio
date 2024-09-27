"use client";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { FaLinkedin, FaTwitter, FaWhatsapp, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiLeetcode ,SiCodeforces} from "react-icons/si";

import { siteConfig } from "@/config/site";

const SideProfile = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        isBlurred
        isZoomed
        alt="Profile picture"
        className="rounded-[10px]"
        height={180}
        src={"/images/profilePicture.jpg"}
        width={180}
      />
      <div className="flex flex-col gap-1 text-center my-3">
        <div className="text-3xl">Deepanshu</div>
        <div className="text-sm">Software Developer</div>
      </div>
      <div className="flex gap-2">
        <Link isExternal aria-label="Linkedin" href={siteConfig.links.linkedin}>
          <FaLinkedin className="text-gray-500 dark:text-gray-400" size={25} />
        </Link>
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <FaGithub className="text-gray-500 dark:text-gray-400" size={25} />
        </Link>
        <Link isExternal aria-label="Leetcode" href={siteConfig.links.leetcode}>
          <SiLeetcode className="text-gray-500 dark:text-gray-400" size={25} />
        </Link>
        <Link isExternal aria-label="Whatsapp" href={siteConfig.links.codeforces}>
          <SiCodeforces className="text-gray-500 dark:text-gray-400" size={25} />
        </Link>
        <Link isExternal aria-label="Email" href={siteConfig.links.email}>
          <BiLogoGmail className="text-gray-500 dark:text-gray-400" size={25} />
        </Link>
        <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
          <FaTwitter className="text-gray-500 dark:text-gray-400" size={25} />
        </Link>
      </div>
      <div className="text-sm my-5 whitespace-pre-line text-center hidden md:flex">
        Hi, I&apos;m Deepanshu, a final-year BTech student at IIT-BHU with a
        passion for software development. I&apos;ve honed my skills in
        full-stack development with ReactJS, ExpressJS, and Tailwind CSS, and
        I&apos;m proficient in data structures, algorithms. I&apos;m driven to
        solve complex problems and build impactful digital solutions
      </div>
    </div>
  );
};

export default SideProfile;
