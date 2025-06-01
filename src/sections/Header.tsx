import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/WebForgeplus.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div> */}

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href='/'>
              <Image src={Logo} alt="Saas Logo" height={120} width={120} />
            </Link>
            <MenuIcon className="h-5 w-5 md:hidden" />

            <nav className="hidden md:flex gap-6 text-black/80 items-center">
              <a href="/">Home</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#blogs">Blogs</a>
              <a href="/contact">Contact</a>
              <a href="/about">About</a>
            </nav>

          </div>
        </div>
      </div>
    </header>
  );
};
