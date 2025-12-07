'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  "True wisdom comes from the heart, not the mind.",
  "Let compassion guide your actions, and peace will follow.",
  "Awaken your inner light; it shines even in darkness.",
  "Every moment is an opportunity to embrace stillness and clarity.",
  "The path to peace begins with understanding yourself.",
];

type Particle = {
  id: string;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

export default function DailyWisdom() {
  const [index, setIndex] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Rotate quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Generate particles once on mount
  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 25 }, () => ({
      id: crypto.randomUUID(),
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 4 + Math.random() * 8,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  return (
    <section className="relative py-20 px-6 sm:px-12 bg-gradient-to-r from-purple-800 via-pink-800 to-indigo-800 text-center overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 animate-textGlow">
        Daily Wisdom
      </h2>

      {/* Floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `rgba(255,255,255,${0.05 + Math.random() * 0.1})`,
            filter: 'blur(3px)',
            animationName: 'floatParticle',
            animationDuration: `${p.duration}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Quotes */}
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          className="text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 max-w-2xl mx-auto relative z-10"
        >
          {quotes[index]}
        </motion.p>
      </AnimatePresence>

      {/* Particle animation */}
      <style jsx>{`
        @keyframes floatParticle {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
