"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

// SVG components (inline, optimal for small assets)
import Appdev from "@/assets/portfolio-cards/app-dev.svg";
import Ecommerce from "@/assets/portfolio-cards/ecommerce.svg";
import Landingpage from "@/assets/portfolio-cards/landing-page.svg";
import Corporate from "@/assets/portfolio-cards/corporate.svg";
import Saas from "@/assets/portfolio-cards/saaspage.svg";
import Webapp from "@/assets/portfolio-cards/webapp.svg";

export const Portfolio = () => {

  const router = useRouter();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const projects = [
    {
      title: "Landing Page",
      slug: "landing-page",
      tagline: "High-converting pages that capture leads",
      image: <Landingpage className="w-full h-full" />,
    },
    {
      title: "Corporate Website",
      slug: "corporate-website",
      tagline: "Professional websites for powerful brands",
      image: <Corporate className="w-full h-full" />,
    },
    {
      title: "E-commerce Platform",
      slug: "ecommerce-platform",
      tagline: "Drive sales with a seamless shopping experience",
      image: <Ecommerce className="w-full h-full" />,
    },
    
  ];

  const future = [
    {
      title: "SaaS Product",
      slug: "saas-product",
      tagline: "Optimized for performance and scaling",
      image: <Saas className="w-full h-full" />,
    },
    {
      title: "Web Application",
      slug: "web-application",
      tagline: "Complex solutions with simple UX",
      image: <Webapp className="w-full h-full" />,
    },
    {
      title: "Mobile App",
      slug: "mobile-app",
      tagline: "User-centric app design for engagement",
      image: <Appdev className="w-full h-full" />,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-visible relative"
    >
      <div className="container relative z-10">
        <div className="section-heading text-center">
          <div className="tag mx-auto">Our Portfolio</div>
          <h2 className="section-title mt-5">Building Digital Excellence</h2>
          <p className="section-description mt-5 max-w-2xl mx-auto">
            From stunning websites to high-performance apps, explore our work
            that drives results and innovation.
          </p>
        </div>

        {/* Portfolio Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 md:px-0 relative z-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => router.push(`/portfolio/${project.slug}`)}
              className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="relative w-full h-64 rounded-xl mb-4 overflow-hidden">
                {typeof project.image === "string" ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading={idx < 3 ? "eager" : "lazy"}
                    priority={idx < 3}
                  />
                ) : (
                  project.image
                )}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-[#010d3e]">{project.tagline}</p>
              <button className="mt-4 text-blue-500 hover:underline" onClick={() => router.push(`/portfolio/${project.slug}`)}>
                Explore
              </button>
            </motion.div>
          ))}
           {future.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="relative w-full h-64 rounded-xl mb-4 overflow-hidden">
                {typeof project.image === "string" ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading={idx < 3 ? "eager" : "lazy"}
                    priority={idx < 3}
                  />
                ) : (
                  project.image
                )}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-[#010d3e]">{project.tagline}</p>
              
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative motion elements */}
      <motion.div
        className="hidden md:block absolute top-0 right-10 z-0"
        style={{ translateY }}
      >
        <Image
          src={pyramidImage}
          alt="Pyramid"
          width={262}
          height={262}
          loading="lazy"
        />
      </motion.div>

      <motion.div
        className="hidden md:block absolute bottom-16 left-10 z-0"
        style={{ translateY }}
      >
        <Image
          src={tubeImage}
          alt="Tube"
          width={248}
          height={248}
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};
