

import logo from "@/assets/WebForgeplus.png";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#ffffff,#e0e0e0)] before:absolute">
          <Image src={logo} height={40} alt="SaaS logo" className="relative" />
        </div>

        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="">Portfolio</Link>
          <Link href="">Blogs</Link>
          <Link href="">Contact</Link>
          <Link href="">About</Link>
          <Link href="">Terms of Use</Link>
          <Link href="">Privacy Policy</Link>
          <Link href="">Refund Policy</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
        <IoLogoWhatsapp className="text-2xl" />
        <FaLinkedin className="text-2xl" />
        </div>
        <p className="mt-6">&copy; 2025 WebForgePlus, Inc. All rights reserved.
         
        </p>
      </div>
    </footer>
  );
};
