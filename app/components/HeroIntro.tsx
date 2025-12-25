'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Particle = {
  top: number;
  left: number;
  size: number;
  duration: number;
  color: string;
  xPath: number[];
  yPath: number[];
  trailLength?: number;
};

export default function HeroIntro() {
  const prefersReducedMotion = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [backgroundDust, setBackgroundDust] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (prefersReducedMotion) return;

    const mainParticles: Particle[] = Array.from({ length: 12 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 3 + Math.random() * 3,
      duration: 6 + Math.random() * 4,
      color: `hsl(${Math.random() * 360}, 70%, 70%)`,
      xPath: Array.from({ length: 5 }, () => (Math.random() - 0.5) * 50),
      yPath: Array.from({ length: 5 }, () => (Math.random() - 0.5) * 50),
      trailLength: 4,
    }));

    const dust: Particle[] = Array.from({ length: 30 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 1 + Math.random() * 2,
      duration: 18 + Math.random() * 20,
      color: `hsla(200, 50%, 80%, 0.1)`,
      xPath: Array.from({ length: 4 }, () => (Math.random() - 0.5) * 18),
      yPath: Array.from({ length: 4 }, () => (Math.random() - 0.5) * 18),
      trailLength: 1,
    }));

    setParticles(mainParticles);
    setBackgroundDust(dust);
  }, [prefersReducedMotion]);

  if (!mounted) return null;

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0a0a0a] via-[#0b0b1f] to-[#1a1a2e] overflow-hidden px-6">
      
      {/* Ambient Blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-slowFloat pointer-events-none" />
      <div className="absolute bottom-24 right-1/3 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl animate-slowFloat pointer-events-none" />

      {/* Background dust */}
      {!prefersReducedMotion && backgroundDust.map((p, i) => (
        <motion.span
          key={`dust-${i}`}
          className="absolute rounded-full pointer-events-none"
          initial={{ scale: 0.3, opacity: 0.1 }}
          animate={{
            scale: [0.3, 0.5, 0.3],
            opacity: [0.1, 0.12, 0.1],
            x: p.xPath,
            y: p.yPath,
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            filter: 'blur(4px)',
          }}
        />
      ))}

      {/* Main particles */}
      {!prefersReducedMotion && particles.map((p, i) =>
        Array.from({ length: p.trailLength! }).map((_, j) => (
          <motion.span
            key={`${i}-trail-${j}`}
            className="absolute rounded-full pointer-events-none"
            initial={{ scale: 0.4, opacity: 0.2 }}
            animate={{
              scale: [0.4, 1, 0.4],
              opacity: [0.2, 0.6, 0.2],
              x: p.xPath.map(v => v * ((j + 1) / (p.trailLength! + 1))),
              y: p.yPath.map(v => v * ((j + 1) / (p.trailLength! + 1))),
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              filter: 'blur(6px)',
            }}
          />
        ))
      )}

      {/* Hero Heading */}
      <motion.h1
        className="relative z-10 text-5xl sm:text-6xl md:text-7xl font-extrabold text-center
                   bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300
                   bg-clip-text text-transparent drop-shadow-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Step Into the Spiritual Flow
      </motion.h1>

      {/* Hero Subheading */}
      <motion.p
        className="relative z-10 mt-6 text-center text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Discover insights, connect with your inner self, and experience guidance from the AI Spiritual Guru.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        onClick={() => {
          const el = document.getElementById('choose-guru');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="relative z-10 mt-10 px-8 py-4 rounded-xl
                   bg-gradient-to-r from-yellow-300 to-pink-400
                   font-semibold text-black shadow-lg
                   transition-transform hover:scale-105 active:scale-95"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Begin Your Journey
      </motion.button>
    </section>
  );
}
