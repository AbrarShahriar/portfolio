import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div
      id="about"
      className=" bg-transparent h-[100vh] text-center sm:mb-[20px]"
    >
      <h1 className="text-[25vw] text-white opacity-35 rotate-[7deg] absolute -z-10 font-extrabold">
        ABOUT
      </h1>
      <div className="relative  w-[200px] h-[200px] mt-0 ml-auto mr-auto mb-[50px] rounded-full  shadow-lg  handle-about-hover ">
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10 text-2xl font-bold transition-all duration-200 ease-in ">
          <svg
            className="scale-150"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#D48166"
              d="M40.6,-70.6C54.5,-62.2,69.1,-55.2,76.3,-43.7C83.5,-32.2,83.4,-16.1,79,-2.6C74.6,11,65.8,21.9,58.7,33.7C51.6,45.5,46.2,58.1,36.7,64.2C27.2,70.3,13.6,70,-0.4,70.7C-14.5,71.5,-28.9,73.3,-40.1,68.1C-51.3,63,-59.2,50.9,-67.7,38.4C-76.2,25.8,-85.3,12.9,-88.4,-1.8C-91.6,-16.5,-88.8,-33.1,-78.6,-42.8C-68.5,-52.5,-51.1,-55.4,-36.8,-63.5C-22.4,-71.7,-11.2,-85.1,1.1,-86.9C13.3,-88.7,26.6,-79,40.6,-70.6Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <Image
          width={200}
          height={200}
          className="border-[5px] border-solid border-dark w-[200px] h-[200px] object-cover rounded-full "
          src="https://avatars.githubusercontent.com/u/68944030?v=4"
          alt=""
        />
      </div>
      <div className="max-w-lg mt-0 mb-0 ml-auto mr-auto text-dark font-semibold p-5 leading-6 text-[1.2em]">
        <p>
          I am a passionate <span className="keypoint">web designer</span> and{" "}
          <span className="keypoint">web developer</span> based on Bangladesh.
          Currently learning <span className="keypoint">React</span>. Learning
          and doing new stuff is my one true hobby which has helped me
          throughout the years. I am looking forward to{" "}
          <span className="keypoint">working with a team</span> and also do{" "}
          <span className="keypoint">remote jobs.</span> I live by one rule:
          <br />
          <span>If they can do it, I can too and I will.</span>
        </p>
      </div>
    </div>
  );
}
