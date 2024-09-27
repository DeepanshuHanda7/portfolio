import React from "react";
import { Image } from "@nextui-org/image";

import { title } from "@/components/primitives";
import { experiences } from "@/config/experience";

const Experience = () => {
  return (
    <div className="py-8 md:py-10">
      <h1 className={title()}>Work Experience</h1>

      <div className="flex flex-col my-5 mx-4">
        {experiences.map((experience, i) => (
          <div key={i} className="flex flex-row gap-5 md:gap-10">
            <div className="relative w-[1px] rounded-lg bg-slate-600/50">
              <div className="absolute top-[20px] left-[-10px] size-[20px] rounded-full bg-slate-400" />
            </div>
            <div
              className={`mx-0 md:mx-4 ${i === experiences.length - 1 ? "mb-0" : "mb-4"} pl-4 pr-0 md:px-5 py-3 gap-2 md:gap-5 flex flex-row items-center flex-grow shadow border border-black/10 dark:border-gray-400/60 rounded-xl bg-gray-500/20`}
            >
              <Image
                isBlurred
                alt={experience.title}
                className="w-[55px] min-w-[55px] h-[55px] min-h-[55px] object-contain"
                src={experience.image}
              />
              <div className="flex flex-col">
                <div className="text-lg md:text-2xl font-semibold">
                  {experience.title}
                </div>
                <div className="text-xs md:text-lg whitespace-pre-line">
                  {experience.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
