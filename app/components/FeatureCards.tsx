'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Feature = {
  title: string;
  description: string;
  icon: string;
};

const features: Feature[] = [
  { title: 'Instant Wisdom', description: 'Get spiritual guidance instantly from our AI Guru.', icon: '🕉️' },
  { title: 'Personalized Advice', description: 'Receive answers tailored to your journey and questions.', icon: '💫' },
  { title: 'Mystical Experience', description: 'Clean, calming interface designed for focus.', icon: '✨' },
  { title: 'Choose Your Guru', description: 'Connect with Sai Baba or Buddha as your guide.', icon: '☸️' },
];

export default function FeatureCards() {
  return (
    <section className="w-full py-20 bg-[#0b0b15] text-white px-6 sm:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-4xl md:text-5xl font-bold text-center mb-14
                   bg-clip-text text-transparent bg-gradient-to-r
                   from-yellow-300 via-pink-300 to-purple-300"
      >
        Features
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feat, i) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="
              bg-white/5 backdrop-blur-lg rounded-2xl p-7 text-center
              border border-white/10
              transition-all duration-300 ease-out
              hover:-translate-y-2 hover:border-white/20
              hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)]
            "
          >
            <div className="text-5xl mb-4">{feat.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{feat.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {feat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
