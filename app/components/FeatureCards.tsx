'use client';
import React, { useState, useEffect } from 'react';
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
  width: number;
  height: number;
  delay: number;
};

export default function FeatureCards() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 30 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      width: 4 + Math.random() * 6,
      height: 4 + Math.random() * 6,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  return (
    <section className="relative w-full py-16 bg-[#0b0b15] text-white px-6 sm:px-12 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 shimmer-gold animate-textGlow">
        Features
      </h2>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.width}px`,
            height: `${p.height}px`,
            background: `rgba(255,255,255,${0.05 + Math.random() * 0.1})`,
            filter: 'blur(3px)',
            animation: `floatParticle ${10 + Math.random() * 10}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10">
        {/* Background radial glow */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-900 via-transparent to-black opacity-20 rounded-3xl pointer-events-none"></div>

        {features.map((feat, idx) => (
          <motion.div
            key={idx}
            className="feature-card relative bg-white/5 backdrop-blur-md rounded-3xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
          >
            <div className="text-4xl mb-4">{feat.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{feat.title}</h3>
            <p className="text-gray-300 text-sm">{feat.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Particle animation */}
      <style jsx>{`
        @keyframes floatParticle {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
      `}</style>
    </section>
  );
}
