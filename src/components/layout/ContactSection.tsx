"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  BsFacebook,
  BsFillSendFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

export default function ContactSection() {
  const [asClient, setAsClient] = useState(false);
  return (
    <div
      className="flex flex-col items-center justify-center w-[80%] ml-auto mr-auto sm:w-[100%] rounded-t-[30px]   bg-dark"
      id="contact"
    >
      <form className="overflow-y-hidden w-[100%] rounded-t-[30px]  z-30 text-light flex sm:flex-col">
        <div className="w-1/2 pt-10 pb-20 pl-5 pr-5 sm:w-[100%] sm:pb-0">
          <h2 className="pb-1 mb-2 ml-5 text-3xl font-extrabold border-b-2 border-solid w-fit border-light">
            Get in touch!
          </h2>
          <div className="flex flex-col pt-1 pb-1">
            <div className="about__input">
              <span>Name</span>
              <input type="text" name="name" />
            </div>
            <div className="about__input">
              <span>Email</span>
              <input type="email" name="email" />
            </div>
            <div className="about__input">
              <span>Message</span>
              <textarea
                className="resize-none"
                name="message"
                id=""
                cols={30}
                rows={5}
              ></textarea>
            </div>
            <div className="flex p-2 m-2">
              <span className="mr-3 font-semibold text-md">As a client?</span>
              <div
                onClick={() => setAsClient(!asClient)}
                className={` p-1 w-10 h-6 cursor-pointer rounded-xl bg-light `}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-primary transition-transform duration-150 ease-in-out ${
                    asClient && "translate-x-[100%]"
                  }`}
                ></div>
              </div>
            </div>
          </div>

          <div className="inline-block p-3 mt-5 ml-5 text-lg font-semibold transition-transform rounded-xl shadow-md cursor-pointer bg-primary text-dark handle-hover-fly">
            <span className="flex items-center justify-between gap-3">
              Fly to me!{" "}
              <BsFillSendFill className="transition-all duration-100 ease-in" />
            </span>
          </div>
        </div>
        <div className="bg-[rgba(82,82,82,0.25)] w-1/2 items-center justify-center sm:w-[100%] sm:pt-10 sm:pb-[120px] sm:mt-10">
          <div className="flex flex-col items-center justify-center h-[100%] ">
            <div className="flex flex-col items-start justify-center gap-6  w-[60%] sm:w-[80%]">
              {socials.map((social) => (
                <SocialButton {...social} key={social.link} />
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

interface ISocialButton {
  link: string;
  handle: string;
  platformIcon: React.JSX.Element;
  themeColor?: string;
}

function SocialButton({
  link,
  platformIcon,
  handle,
  themeColor,
}: ISocialButton) {
  return (
    <div
      className={` flex items-center p-[2px] text-md font-semibold  rounded-[20px] cursor-pointer w-[100%]  ${themeColor}`}
    >
      <div className="bg-dark flex items-center rounded-[18px] p-3 pl-5 gap-5 w-[100%] transition-all duration-150 ease-in-out hover:bg-transparent hover:scale-105">
        {platformIcon}
        <span>
          <Link target="_blank" href={link}>
            {handle}
          </Link>
        </span>
      </div>
    </div>
  );
}

const socials: ISocialButton[] = [
  {
    platformIcon: <BsLinkedin size={20} />,
    link: "https://www.linkedin.com/in/abrar-shahriar-kabir/",
    handle: "/abrar-shahriar-kabir",
    themeColor: "bg-[linear-gradient(90deg,#0077B5,#0077B5)]",
  },
  {
    platformIcon: <BsGithub size={20} />,
    link: "https://github.com/AbrarShahriar",
    handle: "/AbrarShahriar",
    themeColor: "bg-[linear-gradient(90deg,#24292e,#24292e)]",
  },
  {
    platformIcon: <BsYoutube size={20} />,
    link: "https://www.youtube.com/@_abrar_shahriar_",
    handle: "/_abrar_shahriar_",
    themeColor: "bg-[linear-gradient(90deg,#990000,#CC0000)]",
  },
  {
    platformIcon: <BsFacebook size={20} />,
    link: "https://www.facebook.com/abrar.shahriar.kabir/",
    handle: "/abrar.shahriar.kabir",
    themeColor: "bg-[linear-gradient(90deg,#3b5998,#6280ae)]",
  },
  {
    platformIcon: <BsInstagram size={20} />,
    link: "https://www.instagram.com/_abrar.shahriar_/",
    handle: "/_abrar.shahriar_",
    themeColor: "bg-[linear-gradient(90deg,#833AB4,#F56040)]",
  },
];
