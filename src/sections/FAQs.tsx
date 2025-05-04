'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';  // Assuming shadcn/ui is installed
import Image from 'next/image';

export const FAQs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container relative z-10">
        <div className="section-heading text-center">
          <div className="tag mx-auto">Our FAQs</div>
          <h2 className="section-title mt-5">Frequently Asked Questions</h2>
          <p className="section-description mt-5 max-w-2xl mx-auto">
            Find answers to the most common questions about our services and offerings.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-16">
          <Accordion type="single" collapsible>
            {[  // FAQ Data
              {
                question: 'What services do you offer?',
                answer:
                  'We offer web development, mobile app development, UX/UI design, digital marketing, and more.',
              },
              {
                question: 'How do I get started?',
                answer:
                  'Simply contact us through our website, and we will guide you through the process.',
              },
              {
                question: 'What is the cost of your services?',
                answer:
                  'The cost varies depending on the scope of your project. Contact us for a free quote.',
              },
              {
                question: 'Do you offer support after project completion?',
                answer:
                  'Yes, we offer post-launch support and maintenance to ensure everything runs smoothly.',
              },
              {
                question: 'What technologies do you use?',
                answer:
                  'We use the latest technologies including React, Next.js, Node.js, Flutter, and more.',
              },
              {
                question: 'How long does it take to complete a project?',
                answer:
                  'The duration depends on the complexity of the project, but we always strive for timely delivery.',
              },
              {
                question: 'Can I update my website after it is live?',
                answer:
                  'Yes, we provide ongoing support to help you make any updates or changes you need.',
              },
              {
                question: 'Do you offer custom designs?',
                answer:
                  'Yes, we create custom, tailor-made designs to fit the unique needs of your business.',
              },
              {
                question: 'Will my website be mobile-friendly?',
                answer:
                  'Absolutely! We ensure all websites are responsive and optimized for mobile devices.',
              },
              {
                question: 'Do you provide SEO services?',
                answer:
                  'Yes, we offer SEO optimization to help improve your website’s visibility on search engines.',
              },
              {
                question: 'Can you help with branding?',
                answer:
                  'Yes, we offer branding services including logo design, color schemes, and brand identity.',
              },
              {
                question: 'How do I track the progress of my project?',
                answer:
                  'We provide regular updates and a project management dashboard to keep you in the loop.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, ease: 'easeInOut', duration: 0.3 }}  // Smooth animation
                className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-xl transition-all cursor-pointer mb-4"
              >
                <AccordionItem value={`faq-${idx}`} className="border-0">
                  <AccordionTrigger className="text-1xl font-semibold text-[#010d3e] mb-2 no-underline hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-500">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
