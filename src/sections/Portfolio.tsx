"use client";

import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import ecommerce from '../assets/ecommerce.png'

export const Portfolio = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-visible relative"
    >
      <div className="container relative z-10">
        <div className="section-heading text-center">
          <div className="tag mx-auto">Our Portfolio</div>
          <h2 className="section-title mt-5">
            Building Digital Excellence
          </h2>
          <p className="section-description mt-5 max-w-2xl mx-auto">
            From stunning websites to high-performance apps, explore our work that drives results and innovation.
          </p>
        </div>

        {/* Portfolio Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 md:px-0 relative z-10">
          {[
            {
              title: "E-commerce Platform",
              tagline: "Drive sales with a seamless shopping experience",
              image: ecommerce,
            },
            {
              title: "Corporate Website",
              tagline: "Professional websites for powerful brands",
              image: "",
            },
            {
              title: "Mobile App",
              tagline: "User-centric app design for engagement",
              image: "",
            },
            {
              title: "SaaS Product",
              tagline: "Optimized for performance and scaling",
              image: "",
            },
            {
              title: "Landing Page",
              tagline: "High-converting pages that capture leads",
              image: "",
            },
            {
              title: "Web Application",
              tagline: "Complex solutions with simple UX",
              image: "",
            },
          ].map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="relative w-full h-64 rounded-xl mb-4 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-[#010d3e]">{project.tagline}</p>
              <button className="mt-4 text-blue-500 hover:underline">Explore</button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative motion elements (pyramid & tube) */}
      <motion.img
        src={pyramidImage.src}
        alt="pyramid Image"
        width={262}
        height={262}
        className="hidden md:block absolute top-0 right-10 z-0"
        style={{ translateY }}
      />
      <motion.img
        src={tubeImage.src}
        alt="tube Image"
        width={248}
        height={248}
        className="hidden md:block absolute bottom-16 left-10 z-0"
        style={{ translateY }}
      />
    </section>
  );
};
