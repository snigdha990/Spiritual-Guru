'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

type Particle = {
  id: string;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

export default function AskGuruSection() {
  const router = useRouter();
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles once on client
  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 30 }, () => ({
      id: crypto.randomUUID(),
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 4 + Math.random() * 10,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-[#111322] via-[#0e0f1a] to-[#111322] text-center overflow-hidden">
      
      {/* Floating mystical particles */}
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
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <motion.h2
        className="text-4xl font-bold text-yellow-300 mb-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Have a Question?
      </motion.h2>

      <motion.p
        className="text-gray-300 max-w-2xl mx-auto mb-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Ask your questions to our AI Guru and receive instant spiritual guidance.
      </motion.p>

      <motion.button
        className="px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-300 to-pink-400 font-semibold text-black hover:scale-105 transition-transform relative z-10"
        onClick={() => router.push('/home')}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        Ask Guru
      </motion.button>

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
