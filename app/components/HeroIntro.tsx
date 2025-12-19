'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
  const [particles, setParticles] = useState<Particle[]>([]);
  const [backgroundDust, setBackgroundDust] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Main particles with trails
    const generated: Particle[] = Array.from({ length: 25 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 3 + Math.random() * 4,
      duration: 5 + Math.random() * 5,
      color: `hsl(${Math.random() * 360}, 70%, 70%)`,
      xPath: Array.from({ length: 6 }, () => (Math.random() - 0.5) * 60),
      yPath: Array.from({ length: 6 }, () => (Math.random() - 0.5) * 60),
      trailLength: 6,
    }));

    setParticles(generated);

    // Background ultra-faint dust
    const dust: Particle[] = Array.from({ length: 50 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 1 + Math.random() * 2,
      duration: 20 + Math.random() * 20,
      color: `hsla(200, 50%, 80%, 0.1)`,
      xPath: Array.from({ length: 4 }, () => (Math.random() - 0.5) * 20),
      yPath: Array.from({ length: 4 }, () => (Math.random() - 0.5) * 20),
      trailLength: 1,
    }));

    setBackgroundDust(dust);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] overflow-hidden px-6">

      {/* Floating mystical blobs */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-purple-600/20 rounded-full animate-slowFloat blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-1/3 w-112 h-112 bg-pink-500/15 rounded-full animate-slowFloat blur-3xl pointer-events-none"></div>

      {/* Background dust */}
      {backgroundDust.map((p, i) => (
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
            delay: 0,
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

      {/* Main glowing particles with trails */}
      {particles.map((p, i) => {
        const trailDots = Array.from({ length: p.trailLength! }, (_, idx) => idx);
        return trailDots.map((t, j) => (
          <motion.span
            key={`${i}-trail-${j}`}
            className="absolute rounded-full pointer-events-none"
            initial={{ scale: 0.4, opacity: 0.2 }}
            animate={{
              scale: [0.4, 1, 0.4],
              opacity: [0.2, 0.6, 0.2],
              x: p.xPath.map(val => val * ((j + 1) / (p.trailLength! + 1))),
              y: p.yPath.map(val => val * ((j + 1) / (p.trailLength! + 1))),
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: 0,
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
        ));
      })}

      {/* Hero Text */}
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 shimmer-gold text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Step Into the Spiritual Flow
      </motion.h1>

      <motion.p
        className="mt-6 text-center text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Discover insights, connect with your inner self, and experience guidance from the AI Spiritual Guru.
      </motion.p>

      <motion.button
        onClick={() => {
          const el = document.getElementById('choose-guru');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-300 to-pink-400 font-semibold text-black hover:scale-105 transition-transform shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Begin Your Journey
      </motion.button>
    </section>
  );
}
