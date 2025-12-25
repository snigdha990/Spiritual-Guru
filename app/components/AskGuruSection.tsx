'use client';
import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Particle = {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

type AskGuruProps = {
  scrollToSaiBaba: () => void;
};

export default function AskGuruSection({ scrollToSaiBaba }: AskGuruProps) {
  const prefersReducedMotion = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles safely
  useEffect(() => {
    if (prefersReducedMotion) return;

    const generated: Particle[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 3 + Math.random() * 10,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 5,
    }));

    setParticles(generated);
  }, [prefersReducedMotion]);

  return (
    <section
      className="relative py-24 px-6 sm:px-12 rounded-3xl overflow-hidden text-center mx-6 sm:mx-12 mb-16"
      style={{ backgroundColor: 'rgba(20,20,35,0.9)' }}
    >
      {/* Particles */}
      {!prefersReducedMotion &&
        particles.map(p => (
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

      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-yellow-300 mb-6 relative z-10"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Have a Question?
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-300 max-w-2xl mx-auto mb-8 relative z-10 text-lg sm:text-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Ask your questions to our AI Guru and receive instant, personalized spiritual guidance.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        onClick={scrollToSaiBaba}
        className="relative px-10 py-4 rounded-2xl font-semibold text-black bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-300 shadow-lg hover:scale-105 active:scale-95 transition-transform"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Ask the Guru
      </motion.button>
    </section>
  );
}
