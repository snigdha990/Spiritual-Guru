'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRouter } from 'next/navigation';

type Particle = {
  id: string;
  top: number;
  left: number;
  size: number;
  color: string;
  duration: number;
};

export default function SaiBabaIntro() {
  const router = useRouter();

  // Scroll + visibility detection
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-150px' });

  // Mouse reactive parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const parallaxY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  // Tiny particles
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 35 }, () => ({
      id: crypto.randomUUID(),
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 3 + Math.random() * 6,
      color: `hsl(${Math.random() * 360}, 70%, 70%)`,
      duration: 8 + Math.random() * 8,
    }));
    setParticles(generated);
  }, []);

  const handleMouseMove = (e: any) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative py-28 px-6 sm:px-12 bg-[#0b0b15] text-white overflow-hidden flex justify-center items-center"
    >
      {/* Background gradient sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"
        animate={{ x: ['-30%', '130%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Light rays behind everything */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,235,150,0.18),transparent_70%)]"
        style={{ x: parallaxX, y: parallaxY }}
      />

      {/* Rotating spiritual Indian mandala halo */}
      <motion.img
        src="/mandalas/indian-mandala.svg"
        alt="Spiritual Mandala"
        className="absolute w-[50rem] opacity-[0.07] pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ x: parallaxX, y: parallaxY }}
      />

      {/* Interactive particles */}
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
          animate={{
            x: [0, (Math.random() - 0.5) * 50, 0],
            y: [0, (Math.random() - 0.5) * 50, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Levitation content card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 80 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, y: 0 }
            : {}
        }
        transition={{ duration: 1, ease: 'easeOut' }}
        whileHover={{ y: -10 }}
        className="relative z-20 flex flex-col sm:flex-row items-center gap-10 bg-white/5 
                   backdrop-blur-xl rounded-3xl p-12 shadow-2xl max-w-5xl 
                   border border-white/10"
      >
        {/* Sai Baba image with breathing glow */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-yellow-300 shadow-2xl"
        >
          <img
            src="/gurus/saibaba.jpg"
            alt="Sai Baba"
            className="w-full h-full object-cover"
          />

          {/* Outer glow ring */}
          <motion.div
            animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full border-2 border-yellow-300/40"
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-4xl font-bold text-yellow-300 mb-4 drop-shadow-lg">
            Sai Baba — Your Guide
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl mb-6">
            Connect with the divine presence of Sai Baba.  
            Experience serenity, clarity, and spiritual insight with his timeless wisdom.
          </p>

          <motion.button
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-300 to-pink-400 
                       font-semibold text-black hover:scale-110 transition-transform shadow-lg"
            onClick={() => router.push('/home')}
            whileTap={{ scale: 0.95 }}
          >
            Ask Guru
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
