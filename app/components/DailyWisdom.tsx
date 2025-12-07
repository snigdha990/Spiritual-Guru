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
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Rotate quotes every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % quotes.length), 6000);
    return () => clearInterval(interval);
  }, []);

  // Generate floating particles
  useEffect(() => {
    if (!mounted) return;
    const generated: Particle[] = Array.from({ length: 25 }, () => ({
      id: crypto.randomUUID(),
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 3 + Math.random() * 6,
      duration: 12 + Math.random() * 8,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section className="relative py-20 px-6 sm:px-12 bg-gradient-to-r from-purple-800 via-pink-800 to-indigo-800 text-center overflow-hidden">

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300"
      >
        Daily Wisdom
      </motion.h2>

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
            backgroundColor: 'rgba(255,255,255,0.08)',
            filter: 'blur(3px)',
            animation: `floatParticle ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Rotating Quotes */}
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

      {/* Particle Keyframes */}
      <style jsx>{`
        @keyframes floatParticle {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-15px) translateX(5px); opacity: 0.6; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
