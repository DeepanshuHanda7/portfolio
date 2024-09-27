"use client";
import ProjectCard from "@/components/card";
import { title } from "@/components/primitives";
import { projects } from "@/config/projects";

export default function PricingPage() {
  return (
    <div className="py-8 md:py-10">
      <h1 className={title()}>Projects</h1>
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 my-5">
        {projects.map((project, i) => (
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
    </div>
  );
}
