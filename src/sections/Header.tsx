"use client";
import { useState, useEffect, useRef } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/WebForgeplus.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
import Link from "next/link";

import { Home, Folder, Newspaper, Phone, Info } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Folder, label: "Portfolio", href: "#portfolio" },
    { icon: Newspaper, label: "Blogs", href: "#blogs" },
    { icon: Phone, label: "Contact", href: "/contact" },
    { icon: Info, label: "About", href: "/about" },
  ];

  const radius = 140; // controls how far icons are from center

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <Link href="/">
              <Image src={Logo} alt="Saas Logo" height={120} width={120} />
            </Link>

            <div onClick={() => setIsOpen(true)} className="md:hidden cursor-pointer z-50">
              <MenuIcon className="h-5 w-5" />
            </div>

            <nav className="hidden md:flex gap-6 text-black/80 items-center">
              <a href="/">Home</a>
              <a href="#portfolio">Portfolio</a>
              {/* <a href="#blogs">Blogs</a> */}
              <a href="/contact">Contact</a>
              <a href="/about">About</a>
            </nav>

            {/* Quarter Circle Arc Menu */}
            <div
              ref={menuRef}
              className={`fixed top-0 right-0 h-[300px] w-[300px]  bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#A6B9FFFF,#eaeefe_100%)] z-40 rounded-bl-full shadow-lg transition-transform duration-500 ease-in-out origin-top-right 
              ${isOpen ? "scale-100" : "scale-0"} md:hidden`}
            >
              <div className="relative w-full h-full">
                {navItems.map((item, index) => {
                  const totalAngle = 90;
                  const angleStep = totalAngle / (navItems.length - 1);
                  const angleDeg = 0 + index * angleStep;
                  const angleRad = (angleDeg * Math.PI) / 180;

                  const radius = 230; // edge hugging radius

                  const x = radius * Math.cos(angleRad);
                  const y = radius * Math.sin(angleRad);

                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="absolute flex flex-col items-center text-xs from-black to-[#001e80] tracking-tighter transition-all transform hover:scale-110"
                      style={{
                        right: `${x + 5}px`,
                        top: `${y + 6}px`,
                      }}
                    >
                      <Icon className="w-6 h-6 mb-1" />
                      {item.label}
                    </Link>
                  );
                })}

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
