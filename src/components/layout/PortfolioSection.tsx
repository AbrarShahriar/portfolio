import React from "react";
import Projects from "./Projects";

export default function PortfolioSection() {
  return (
    <div id="portfolio">
      <div className="pb-[100px] text-light bg-dark">
        <h1 className="pb-1.5 mt-0 mb-12 ml-auto mr-auto text-5xl font-extrabold text-center border-b-2 border-solid w-fit border-light">
          Portfolio
        </h1>

        <Projects />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#373a36"
          fillOpacity="1"
          d="M0,0L1440,160L1440,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
