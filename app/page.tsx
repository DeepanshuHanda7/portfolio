"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";
import { FaGithub } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "@nextui-org/button";
import { PiCaretDoubleDownLight } from "react-icons/pi";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import SideProfile from "@/components/sideProfile";
import ProjectCard from "@/components/card";
import { projects } from "@/config/projects";
import { skills } from "@/config/skills";

export default function Home() {
  return (
    <div className="">
      <section className="relative flex flex-col items-center justify-center gap-4 min-h-[calc(100vh-62px)]">
        <div className="md:hidden">
          <SideProfile />
        </div>
        <div className="inline-block max-w-xl text-center justify-center">
          <h1 className={title()}>I make&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
          <br />
          <h1 className={title()}>
            websites and build seamless full-stack apps.
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Specializing in MERN, and scalable web solutions.
          </h2>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.resume}
          >
            Resume
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <FaGithub className="text-gray-500 dark:text-gray-400" size={22} />
            GitHub
          </Link>
        </div>

        <Link isExternal className="mt-8" href={siteConfig.links.linkedin}>
          <Snippet color="default" variant="shadow">
            connect with me on Linkedin
          </Snippet>
        </Link>

        <div className="absolute hidden md:flex bottom-5 animate-bounce">
          <PiCaretDoubleDownLight size={25} />
        </div>
      </section>

      <section className="flex flex-col gap-4 mt-20 md:mt-5">
        <Marquee
          className="max-w-[calc(100vw-25px)] md:max-w-[calc(100vw-345px)]"
          speed={80}
        >
          {skills.map((skill, i) => (
            <div key={i} className="flex items-center mx-4 gap-1">
              {skill.icon && <skill.icon size={40} />}
              <span>{skill.skill}</span>
            </div>
          ))}
        </Marquee>
        <div className="flex mt-10 justify-between items-end">
          <h1 className={title()}>Projects</h1>
          <Button isIconOnly as={Link} className="" href="/projects">
            <MdKeyboardArrowRight size={25} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard
              key={i}
              codeLink={project.codeLink}
              deployLink={project.deployLink}
              description={project.description}
              image={project.image}
              title={project.title}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
