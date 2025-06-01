"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import Spline from "@splinetool/react-spline";

export const SinglePortfolioHero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useMotionValueEvent(translateY, "change", (latestValue) =>
    console.log(latestValue)
  );

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Proof. Not Promises.</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
              Work That Speaks. Loudly.
            </h1>
            <p className="text-xl text-[#010d3e] tracking-tight mt-6">
              Our portfolio isn’t just a gallery — it’s a track record. From conversion-focused landing pages to full-scale platforms, these projects show how we turn bold ideas into results that move the needle.
            </p>

            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-text border border-black gap-1" onClick={() => {
                const element = document.getElementById("our-work");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}>
                <span>See Our Work</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative hidden md:block">
            <div className="w-full h-[600px]">
              <Spline scene="/portfolioheader.splinecode" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
