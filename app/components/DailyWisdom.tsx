'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const quotes = [
  "True wisdom comes from the heart, not the mind.",
  "Let compassion guide your actions, and peace will follow.",
  "Awaken your inner light; it shines even in darkness.",
  "Every moment is an opportunity to embrace stillness and clarity.",
  "The path to peace begins with understanding yourself.",
];

type Particle = { id: number; top: number; left: number; size: number; duration: number; delay: number; };

export default function DailyWisdom() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % quotes.length), 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const generated = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 3 + Math.random() * 6,
      duration: 12 + Math.random() * 8,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, [prefersReducedMotion]);

  return (
    <section className="relative py-20 px-6 sm:px-12 text-center mx-6 sm:mx-12 rounded-3xl bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900 overflow-hidden shadow-xl">
      {!prefersReducedMotion && particles.map(p => (
        <span
          key={p.id}
          aria-hidden
          className="absolute rounded-full pointer-events-none animate-floatSlow"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: 'rgba(255,255,255,0.12)',
            filter: 'blur(4px)',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Daily Wisdom
      </motion.h2>

      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto relative z-10"
        >
          {quotes[index]}
        </motion.p>
      </AnimatePresence>
    </section>
  );
}
