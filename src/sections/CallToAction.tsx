"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { useToast } from "@/hooks/use-toast"

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false);

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  // Add this inside CallToAction component, above return
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // 👈 Save the reference early
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you shortly.",
          variant: "default",
        });

        form.reset(); // ✅ This is now safe
      } else {
        toast({
          title: "Something went wrong.",
          description: "We couldn’t send your message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Unexpected Error",
        description: "Something broke. Try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false); // always stop loading
    }
  };




  return (
    <section
      id="contactform"
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-5 overflow-x-clip relative"
    >
      <div className="container relative z-10">
        <div className="section-heading text-center">
          <h2 className="section-title mt-5">Contact Us</h2>
          <p className="section-description mt-5 max-w-2xl mx-auto">
            Reach out to us and we’ll be happy to assist you with your project needs!
          </p>
        </div>

        {/* Contact Form with Glass Effect */}
        <div className="mt-16 flex justify-center">
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-xl w-full max-w-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-[#010d3e]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full mt-2 px-4 py-2 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#001e80]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-[#010d3e]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-2 px-4 py-2 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#001e80]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label
                  htmlFor="contact"
                  className="block text-lg font-medium text-[#010d3e]"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  required
                  className="w-full mt-2 px-4 py-2 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#001e80]"
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-lg font-medium text-[#010d3e]"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  className="w-full mt-2 px-4 py-2 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#001e80]"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-[#010d3e]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"

                required
                className="w-full mt-2 px-4 py-2 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#001e80]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#001e80] text-white rounded-lg hover:bg-[#001b70] transition-all flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                "Send Message"
              )}
            </button>

          </form>
        </div>
      </div>

      {/* Decorative motion elements (pyramid & tube) */}
      <motion.img
        src={starImage.src}
        alt="Pyramid Image"
        width={262}
        height={262}
        className="hidden md:block absolute top-0 right-10 z-0"
        style={{ translateY }}
      />
      <motion.img
        src={springImage.src}
        alt="Tube Image"
        width={248}
        height={248}
        className="hidden md:block absolute bottom-16 left-10 z-0"
        style={{ translateY }}
      />
    </section>
  );
};
