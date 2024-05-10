import { projects } from "@/data";
import { randomNumber } from "@/utils";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="flex  flex-wrap items-stretch justify-center text-dark">
      {projects.map((project) => (
        <Project {...project} key={project.projectName} />
      ))}
    </div>
  );
}

export interface IProjectProps {
  coverImg: any;
  repoLink: string;
  projectLink: string;
  projectName: string;
  projectDesc: string;
  tags: string[];
  projectTheme: "light" | "dark";
}

function Project({
  coverImg,
  repoLink,
  projectLink: siteLink,
  projectDesc,
  projectName,
  tags,
  projectTheme,
}: IProjectProps) {
  const tagColorVariants = [
    "bg-chip-color-1",
    "bg-chip-color-2",
    "bg-chip-color-3",
    "bg-chip-color-4",
    "bg-chip-color-5",
    "bg-chip-color-6",
  ];

  const neonColorVariants = [
    `border-chip-color-1 shadow-[0_0_7px_2px_theme("colors.chip-color-1")]`,
    `border-chip-color-2 shadow-[0_0_7px_2px_theme("colors.chip-color-2")]`,
    `border-chip-color-3 shadow-[0_0_7px_2px_theme("colors.chip-color-3")]`,
    `border-chip-color-4 shadow-[0_0_7px_2px_theme("colors.chip-color-4")]`,
    `border-chip-color-5 shadow-[0_0_7px_2px_theme("colors.chip-color-5")]`,
    `border-chip-color-6 shadow-[0_0_7px_2px_theme("colors.chip-color-6")]`,
  ];

  const getRandomTagColor = () => {
    let n = randomNumber(0, tagColorVariants.length - 1);

    return tagColorVariants[n];
  };

  const getRandomNeonColor = () => {
    let n = randomNumber(0, tagColorVariants.length - 1);

    return neonColorVariants[n];
  };
  return (
    <div
      className={` relative flex flex-col min-w-80 max-w-lg sm:h-fit bg-dark rounded-3xl p-3 m-10 handle-hover border-2 border-solid ${getRandomNeonColor()}`}
    >
      <div className=" relative rounded-xl">
        <img
          className="shadow-lg rounded-xl max-w-[100%] transition-all duration-100 ease-in mb-5"
          src={coverImg}
          alt={projectName}
        />
        <div
          className={`links ${
            projectTheme == "light" ? "text-light" : "text-dark"
          } absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex`}
        >
          <Link
            className="m-5 text-4xl transition-opacity duration-200 ease-in opacity-0"
            href={repoLink}
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            className="m-5 text-4xl transition-opacity duration-200 ease-in opacity-0"
            href={siteLink}
            target="_blank"
          >
            <FaExternalLinkAlt />
          </Link>
        </div>
      </div>
      <div className=" flex flex-col  text-light  h-[100%]">
        <h3 className="pb-1 ml-5 mr-5 mb-2 text-3xl border-b-2 border-solid w-fit border-light">
          {projectName}
        </h3>
        <p
          className="mb-8 leading-5 pl-5 pr-5"
          dangerouslySetInnerHTML={{ __html: projectDesc }}
        ></p>
        <div className="flex flex-wrap bottom-5 mt-auto ml-5 mr-5 mb-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={`text-sm p-1 pl-2 pr-2 rounded-3xl m-1 ml-0 text-dark font-medium ${getRandomTagColor()}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
