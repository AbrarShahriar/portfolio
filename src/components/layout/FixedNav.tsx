import Link from "next/link";
import React from "react";
import { BiUser } from "react-icons/bi";
import { FaPhone, FaHome, FaUserCircle } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { LuUser, LuUser2 } from "react-icons/lu";
import { MdOutlineCall } from "react-icons/md";
import { PiUserBold } from "react-icons/pi";

export default function FixedNav() {
  return (
    <div className="bg-primary max-w-[300px] fixed z-50 bottom-[20px] sm:bottom-[3vh] left-[50%] translate-x-[-50%] rounded-[40px] shadow-xl">
      <div className="flex items-center justify-between ">
        <Link
          className="text-dark text-3xl font-bold p-4 rounded-[50px] cursor-pointer w-[250px] flex justify-center transition-all hover:text-primary hover:bg-dark"
          href="#contact"
        >
          <MdOutlineCall />
        </Link>
        <Link
          className="text-dark text-3xl font-bold p-4 rounded-[50px] cursor-pointer w-[250px] flex justify-center transition-all hover:text-primary hover:bg-dark  sm:text-2xl"
          href="#"
        >
          <FiHome />
        </Link>
        <Link
          className="text-dark text-3xl font-bold p-4 rounded-[50px] cursor-pointer w-[250px] flex justify-center transition-all hover:text-primary hover:bg-dark  sm:text-2xl"
          href="#about"
        >
          <LuUser2 />
        </Link>
      </div>
    </div>
  );
}
