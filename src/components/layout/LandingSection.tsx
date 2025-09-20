import React from "react";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import "./layout.css";
import CallToAction from "../buttons/CallToAction";
import LandingSectionWave from "../graphics/LandingSectionWave";
import Image from "next/image";
import VisitBlog from "../buttons/VisitBlog";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const blobs = [
  <svg
    key={1}
    className="blob blob-1"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#D48166"
      d="M37.5,-32.1C48.8,-15.6,58.5,0,55.8,13.1C53.1,26.2,38,36.9,20.7,46.7C3.4,56.5,-16.2,65.3,-28.7,59.4C-41.2,53.4,-46.7,32.7,-50.3,12.7C-53.9,-7.2,-55.5,-26.4,-46.8,-42.3C-38.1,-58.2,-19,-70.7,-3,-68.4C13.1,-66,26.1,-48.6,37.5,-32.1Z"
      transform="translate(100 100)"
    ></path>
  </svg>,
  <svg
    key={2}
    className="blob blob-2"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#D48166"
      d="M47.2,-34.2C58.8,-23.2,64,-3.7,59.2,12.1C54.5,28,39.9,40.2,23.2,48.4C6.5,56.5,-12.3,60.5,-25.8,53.8C-39.3,47.2,-47.5,30,-52.4,11.2C-57.4,-7.6,-59,-28,-49.7,-38.5C-40.4,-49,-20.2,-49.5,-1.2,-48.6C17.9,-47.6,35.7,-45.2,47.2,-34.2Z"
      transform="translate(100 100)"
    ></path>
  </svg>,
  <svg
    key={3}
    className="blob blob-3"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#D48166"
      d="M42.3,-37C50.8,-23.1,50.9,-5.7,49.5,15.6C48.1,37,45.1,62.3,31.2,71.6C17.3,81,-7.6,74.3,-27,62.5C-46.4,50.7,-60.2,33.8,-65.2,14.2C-70.3,-5.4,-66.5,-27.8,-54.2,-42.6C-41.9,-57.4,-20.9,-64.8,-2,-63.1C16.9,-61.5,33.8,-51,42.3,-37Z"
      transform="translate(100 100)"
    ></path>
  </svg>,
  <svg
    key={4}
    className="blob blob-4"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#D48166"
      d="M42.4,-38C52.9,-20.6,57.9,-3.1,56.3,16.4C54.7,36,46.4,57.6,31.3,64.7C16.2,71.9,-5.7,64.5,-28.2,55C-50.8,45.5,-74,33.9,-76.8,18.4C-79.6,3,-62,-16.2,-45.8,-34.8C-29.6,-53.5,-14.8,-71.5,0.6,-72C16,-72.4,31.9,-55.3,42.4,-38Z"
      transform="translate(100 100)"
    ></path>
  </svg>,
  <svg
    key={5}
    className="blob blob-5"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#D48166"
      d="M49.6,-38.9C61.8,-24.3,67.5,-3.8,62.7,13.1C57.9,30,42.6,43.3,24.7,52.4C6.8,61.4,-13.7,66.3,-29,59.3C-44.3,52.3,-54.3,33.5,-55.3,16.3C-56.2,-0.8,-48.1,-16.3,-37.4,-30.6C-26.6,-44.8,-13.3,-57.9,2.7,-60C18.7,-62.2,37.4,-53.5,49.6,-38.9Z"
      transform="translate(100 100)"
    ></path>
  </svg>,
];

export default function LandingSection() {
  return (
    <div className="relative landing-section bg-dark ">
      {blobs.map((BlobEl, i) => (
        <div key={i}>{BlobEl}</div>
      ))}
      {/* HEADER FOR LOGO */}
      <header>
        <div className="p-3 bg-primary">
          <h2
            className={`inline-block p-1.5 ml-3 text-3xl border-2 border-solid rounded-full cursor-pointer font-si text-light border-light ${dancingScript.className}`}
          >
            <Link href="/">
              <Image
                src={"/images/logo.png"}
                width={32}
                height={32}
                alt="logo"
              />
            </Link>
          </h2>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="leading-6 bg-gradient-to-b from-primary to-light">
        <div className="p-12 pl-24 sm:pl-[30px] h-[calc(50vh+50px)] flex z-40 items-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-4xl font-black text-left uppercase leading-1 text-shadow-light sm:text-[calc(2em+25%)]">
              Your go-to guy for web!!
            </h1>
            <p className="mb-8 w-[calc(100vw-100px)] text-left text-lg font-semibold">
              Need a professional website for your business or personal use? Try
              me!
            </p>

            <div className="flex gap-4 items-center">
              <CallToAction />
              <VisitBlog />
            </div>
          </div>
        </div>
      </section>
      <LandingSectionWave />
    </div>
  );
}
