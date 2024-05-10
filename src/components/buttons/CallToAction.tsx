import Link from "next/link";
import React from "react";

export default function CallToAction() {
  return (
    <Link
      href="#portfolio"
      className="relative inline-block text-lg group z-50"
    >
      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-900 transition-colors duration-300 ease-out border-2 rounded-lg border-dark group-hover:text-primary">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-primary"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-dark group-hover:-rotate-180 ease"></span>
        <span className="relative font-semibold">Portfolio</span>
      </span>
      <span
        className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear rounded-lg bg-dark group-hover:mb-0 group-hover:mr-0"
        data-rounded="rounded-lg"
      ></span>
    </Link>
  );
}
