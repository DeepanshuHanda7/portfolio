"use client";
import React from "react";
import { Card, CardFooter, Image, Link } from "@nextui-org/react";

import { GithubIcon } from "./icons";

import { ProjectType } from "@/config/projects";

const ProjectCard = (project: ProjectType) => {
  const { title, description, deployLink, image, codeLink } = project;

  return (
    <Card isFooterBlurred className="w-full">
      <Link isExternal href={deployLink}>
        <Image
          isBlurred
          removeWrapper
          alt={title}
          className="z-0 w-full h-full object-fill"
          src={image}
        />
      </Link>
      <CardFooter className="absolute bg-black/40 overflow-hidden bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Link isExternal href={deployLink} title="Deployment Link">
            <Image
              alt="Deployment Link"
              className="rounded-full min-w-8 size-8 md:min-w-10 md:size-10 object-contain"
              src="/images/vercelLogo.png"
            />
          </Link>
          <div className="flex flex-col ">
            <p className="text-sm text-white">{title}</p>
            <p className="text-tiny text-white/80">{description}</p>
          </div>
        </div>
        <Link
          isExternal
          className="text-white bg-gray-900/70 grid place-items-center rounded-full"
          href={codeLink}
          title="Github Link"
        >
          <GithubIcon size={30} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
