'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

type Particle = {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  xPath: number[];
  yPath: number[];
};

export default function HeroIntro() {
  const router = useRouter();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const generated: Particle[] = Array.from({ length: 30 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 4 + Math.random() * 6,
      duration: 6 + Math.random() * 6, // random duration
      delay: Math.random() * 4,
      color: `hsl(${Math.random() * 360}, 80%, 70%)`,
      xPath: Array.from({ length: 5 }, () => (Math.random() - 0.5) * 50), // random x path
      yPath: Array.from({ length: 5 }, () => (Math.random() - 0.5) * 50), // random y path
    }));

    setParticles(generated);
  }, []);

  if (!mounted) return null; // SSR safe

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] overflow-hidden px-6">

      {/* Mystical floating blobs */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-purple-600/20 rounded-full animate-slowFloat blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-1/3 w-112 h-112 bg-pink-500/15 rounded-full animate-slowFloat blur-3xl pointer-events-none"></div>

      {/* Glowing floating particles */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full pointer-events-none"
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.6, 1, 0.6],
            x: p.xPath,
            y: p.yPath,
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: p.delay,
          }}
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            filter: 'blur(8px)',
          }}
        />
      ))}

      {/* Hero Text */}
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 shimmer-gold text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Your Spiritual Journey
      </motion.h1>

      <motion.p
        className="mt-6 text-center text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Connect with your inner self, ask questions, and receive instant wisdom from the AI Guru.
      </motion.p>

      <motion.button
        onClick={() => router.push('/home')}
        className="mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-300 to-pink-400 font-semibold text-black hover:scale-105 transition-transform"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Start Your Journey
      </motion.button>
    </section>
  );
}
