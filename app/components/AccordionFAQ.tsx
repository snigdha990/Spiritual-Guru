'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
  q: string;
  a: string;
};

type AccordionFAQProps = {
  faqs: FAQItem[];
};

export default function AccordionFAQ({ faqs }: AccordionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 sm:px-12 bg-[#0b0b15] text-white">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              layout
              className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden cursor-pointer"
              onClick={() => toggleIndex(idx)}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              {/* Question */}
              <motion.div
                className="p-6 flex justify-between items-center"
                initial={false}
                animate={{ backgroundColor: isOpen ? 'rgba(255,255,255,0.08)' : 'transparent' }}
              >
                <h3 className="text-xl font-semibold">{item.q}</h3>
                <motion.span
                  className="text-yellow-300 text-2xl"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  +
                </motion.span>
              </motion.div>

              {/* Answer */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="px-6 pb-6 text-gray-300 text-base sm:text-lg"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
