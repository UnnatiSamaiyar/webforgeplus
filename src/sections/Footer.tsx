

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
          <Image src={logo} height={65} alt="SaaS logo" className="relative" />
        </div>

        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="">Portfolio</Link>
          <Link href="">Blogs</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/refund-policy">Refund Policy</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://wa.me/919220644664" // Replace with your actual WhatsApp number in international format
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp className="text-2xl" />
          </a>

          <a
            href="https://www.linkedin.com/company/106771089" // Replace with your actual LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl " />
          </a>

        </div>
        <p className="mt-6">&copy; 2025 WebForgePlus, Inc. All rights reserved.

        </p>
      </div>
    </footer>
  );
};
