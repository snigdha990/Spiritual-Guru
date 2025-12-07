'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: 'Instant Wisdom', description: 'Get spiritual guidance instantly from our AI Guru.', icon: '🕉️' },
  { title: 'Personalized Advice', description: 'Receive answers tailored to your journey and questions.', icon: '💫' },
  { title: 'Multi-Language Support', description: 'Ask your questions in English or Hindi.', icon: '🌐' },
  { title: 'Mystical Experience', description: 'Immersive, magical interface with glowing animations.', icon: '✨' },
];

type Particle = {
  top: number;
  left: number;
  size: number;
  delay: number;
};

export default function FeatureCards() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setMounted(true);

    // Generate light floating particles
    const generated: Particle[] = Array.from({ length: 20 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 3 + Math.random() * 3,
      delay: Math.random() * 10,
    }));

    setParticles(generated);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full py-20 bg-[#0b0b15] text-white px-6 sm:px-12 overflow-hidden">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-14 
                   bg-clip-text text-transparent bg-gradient-to-r
                   from-yellow-300 via-pink-300 to-purple-300"
      >
         Features
      </motion.h2>

      {/* Ambient particles */}
      {particles.map((p, i) => (
        <span
          key={`particle-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: 'rgba(255,255,255,0.08)',
            filter: 'blur(3px)',
            animation: `softFloat 14s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto relative z-10">

        {features.map((feat) => (
          <motion.div
            key={feat.title} 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -6, 0],
              boxShadow: [
                '0px 0px 0px rgba(255,255,255,0.03)',
                '0px 8px 20px rgba(255,255,255,0.08)',
                '0px 0px 0px rgba(255,255,255,0.03)'
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-7 text-center border border-white/6 overflow-hidden"
          >

            {/* Soft glowing aura */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/8 via-transparent to-white/0 blur-2xl"
              animate={{ opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Moving shimmer line */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="text-4xl mb-3">{feat.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{feat.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feat.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Particle float keyframes */}
      <style jsx>{`
        @keyframes softFloat {
          0% { transform: translateY(0px); opacity: 0.2; }
          50% { transform: translateY(-20px); opacity: 0.35; }
          100% { transform: translateY(0px); opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}
