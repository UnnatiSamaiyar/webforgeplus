"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const BlogCarousel = () => {
  return (
    <section className="py-24 bg-white" id="blogs">
      <div className="container relative z-10">
        <div className="section-heading text-center">
          <div className="tag mx-auto">Our Blogs</div>
          <h2 className="section-title mt-5">
            Insightful Articles and Stories
          </h2>
          <p className="section-description mt-5 max-w-2xl mx-auto">
            Explore our latest posts, insights, and updates to stay informed and inspired.
          </p>
        </div>

        {/* Blog Cards Carousel */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {[
            {
              title: "Designing for the Future",
              tagline: "The latest trends in UI/UX design.",
              image: "",
              date: "May 25, 2025",
            },
            {
              title: "Understanding SaaS Architecture",
              tagline: "Building scalable and secure systems.",
              image: "",
              date: "May 28, 2025",
            },
            {
              title: "Boost Your SEO Rankings",
              tagline: "SEO strategies that work in 2025.",
              image: "",
              date: "May 31, 2025",
            },
            
          ].map((blog, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}  // Increased width for more horizontal space
                height={200} // Reduced height for less vertical space
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-[#010d3e] mb-2">{blog.tagline}</p>
              <p className="text-sm text-gray-500">
                By WebForgePlus Team | {blog.date}
              </p>
              <button className="mt-4 text-blue-500 hover:underline">
                Know More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
