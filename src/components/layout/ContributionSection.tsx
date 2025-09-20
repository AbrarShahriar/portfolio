import Link from "next/link";
import { ContributionType } from "../../../types";
import Image from "next/image";

const data: ContributionType[] = [
  {
    image: "https://fakerjs.dev/logo.svg",
    projectTitle: "FakerJS",
    pullReqLink: "https://github.com/faker-js/faker/pull/3439",
    description: (
      <p>
        Added Bangla language to{" "}
        <Link href={"https://github.com/faker-js/faker"}>FakerJS</Link> and have
        been a continuous contributor to the Bangla language module in FakerJS.
        Now developers can generate vast amounts of dummy data completely in
        Bangla!
      </p>
    ),
  },
];

export default function ContributionSection() {
  const contributions = data;

  return (
    <div className="mb-48 mt-12 mx-auto py-8 bg-primary w-[80%] rounded-[30px] shadow-lg">
      <h1 className="pb-1.5 mt-0 mb-6 ml-auto mr-auto text-5xl font-extrabold text-center border-b-2 border-solid border-dark w-fit text-dark">
        Contributions
      </h1>
      <div className="w-[90%] m-auto  flex items-start justify-center gap-16">
        {data.map((contribution, i) => (
          <div
            key={i}
            className="flex p-4 gap-4 items-start md:flex-col md:items-center bg-white/25 rounded-[30px]"
          >
            <Image
              src={contribution.image}
              width={128}
              height={128}
              className="rounded-full"
              alt={contribution.projectTitle}
            />

            <div className="text-black md:text-center">
              <h1 className="text-xl font-bold mb-2">
                {contribution.projectTitle}
              </h1>
              <p className="mb-4">{contribution.description}</p>
              <Link
                className="bg-dark text-primary font-bold p-2 rounded-md text-sm"
                href={contribution.pullReqLink}
                target="_blank"
              >
                Take A Look
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
