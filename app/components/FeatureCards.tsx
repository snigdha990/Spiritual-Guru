'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Feature = {
  title: string;
  description: string;
  icon: string;
};

const features: Feature[] = [
  { title: 'Instant Wisdom', description: 'Get spiritual guidance instantly from our AI Guru.', icon: '🕉️' },
  { title: 'Personalized Advice', description: 'Receive answers tailored to your journey and questions.', icon: '💫' },
  { title: 'Mystical Experience', description: 'Immersive, magical interface with glowing animations.', icon: '✨' },
  { title: 'Choose Your Guru', description: 'Connect with Sai Baba or Buddha as your spiritual guide.', icon: '☸️' },
];

type Particle = {
  id: string;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  xDirection: number;
  yDirection: number;
};

export default function FeatureCards() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setMounted(true);
    const colors = ['#FFEB3B', '#FF5722', '#E91E63', '#9C27B0', '#00BCD4'];

    const generated: Particle[] = Array.from({ length: 40 }, () => ({
      id: crypto.randomUUID(),
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 3 + Math.random() * 5,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      xDirection: Math.random() < 0.5 ? -1 : 1,
      yDirection: Math.random() < 0.5 ? -1 : 1,
    }));

    setParticles(generated);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full py-20 bg-[#0b0b15] text-white px-6 sm:px-12 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-14 
                   bg-clip-text text-transparent bg-gradient-to-r
                   from-yellow-300 via-pink-300 to-purple-300"
      >
        Features
      </motion.h2>

      {/* Diagonal floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            filter: 'blur(2px)',
            opacity: 0.7,
            animation: `diagonalFloat ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            '--xDir': p.xDirection,
            '--yDir': p.yDirection,
          } as any}
        />
      ))}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto relative z-10">
        {features.map((feat) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.03, 1],
              rotate: [0, 1, 0],
              boxShadow: [
                '0px 0px 0px rgba(255,255,255,0.03)',
                '0px 12px 24px rgba(255,255,255,0.08)',
                '0px 0px 0px rgba(255,255,255,0.03)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-7 text-center border border-white/6 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/8 via-transparent to-white/0 blur-2xl"
              animate={{ opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <div className="relative z-10">
              <div className="text-5xl mb-3">{feat.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{feat.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feat.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
