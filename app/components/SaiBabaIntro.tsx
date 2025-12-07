'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';

type Particle = {
  id: string;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
};

export default function SaiBabaIntro() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles on client
  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 35 }, () => ({
      id: crypto.randomUUID(),
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 4 + Math.random() * 8,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 5,
      color: `hsl(${Math.random() * 360}, 70%, 70%)`,
    }));
    setParticles(generated);
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 sm:px-12 bg-[#0b0b15] text-white overflow-hidden flex justify-center items-center"
    >
      {/* Glowing animated particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            filter: 'blur(8px)',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView
              ? {
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.5, 1, 0.5],
                }
              : {}
          }
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Aura glow behind card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0 flex justify-center items-center"
      >
        <div className="w-80 h-80 sm:w-[32rem] sm:h-[32rem] rounded-full bg-gradient-to-r from-yellow-400/20 via-pink-400/10 to-purple-500/20 filter blur-3xl animate-blobSlow"></div>
      </motion.div>

      {/* Card content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 flex flex-col sm:flex-row items-center gap-8 bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-lg max-w-5xl"
      >
        {/* Image */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-yellow-300 shadow-2xl">
          <img
            src="/gurus/saibaba.jpg"
            alt="Sai Baba"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 rounded-full border-2 border-yellow-400/40 animate-pulse-slow"></div>
        </div>

        {/* Text */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-4">
            Sai Baba - Your Guide
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl mb-6">
            Experience the serene guidance of Sai Baba. Embrace wisdom, compassion, and enlightenment through his timeless teachings. Let your spiritual journey begin here, surrounded by divine energy and mystical guidance.
          </p>
          <motion.button
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-300 to-pink-400 font-semibold text-black hover:scale-105 transition-transform"
            onClick={() => router.push('/home')}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Ask Guru
          </motion.button>
        </div>
      </motion.div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blobSlow {
          0%, 100% { transform: translate(0px,0px) scale(1); }
          33% { transform: translate(15px,-10px) scale(1.05); }
          66% { transform: translate(-10px,15px) scale(0.95); }
        }
        .animate-blobSlow { animation: blobSlow 12s ease-in-out infinite; }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
