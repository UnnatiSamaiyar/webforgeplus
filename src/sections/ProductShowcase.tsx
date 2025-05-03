"use client";

import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";

export const ProductShowcase = () => {
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
          <div className="tag mx-auto">Our Services</div>
          <h2 className="section-title mt-5">
            Building Digital Excellence
          </h2>
          <p className="section-description mt-5 max-w-2xl mx-auto">
            From intuitive web experiences to powerful mobile apps — we build solutions that scale, perform, and impress.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 relative z-10">
          {[
            {
              title: "Website Development",
              description:
                "Custom websites that combine speed, SEO, and stunning UI — designed to drive engagement and conversions.",
              icon: <FaLaptopCode className="text-4xl text-[#001e80]" />,
            },
            {
              title: "App Development",
              description:
                "Robust mobile apps built for performance — whether it's iOS, Android, or cross-platform. UX-focused. Scalable by design.",
              icon: <FaMobileAlt className="text-4xl text-[#001e80]" />,
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-[#010d3e]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative motion elements (now positioned inside viewport) */}
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
