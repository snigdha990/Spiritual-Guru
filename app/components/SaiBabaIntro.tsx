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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-150px' });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const parallaxY = useSpring(mouseY, { stiffness: 40, damping: 20 });

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
      id="choose-guru"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative py-28 px-6 sm:px-12 bg-[#0b0b15] text-white overflow-hidden flex flex-col items-center"
    >
      {/* Background gradient sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"
        animate={{ x: ['-30%', '130%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Light rays */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,235,150,0.18),transparent_70%)]"
        style={{ x: parallaxX, y: parallaxY }}
      />

      {/* Rotating mandala */}
      <motion.img
        src="/mandalas/indian-mandala.svg"
        alt="Spiritual Mandala"
        className="absolute w-[50rem] opacity-[0.07] pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ x: parallaxX, y: parallaxY }}
      />

      {/* Floating particles */}
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

      {/* Section Heading */}
      <motion.h5
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-center mb-16 
                   bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Choose Your Guru
      </motion.h5>

      {/* Levitating content cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 80 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-20 flex flex-col sm:flex-row items-center gap-10"
      >
        {/* Sai Baba Card */}
        <GuruCard
          name="Sai Baba"
          description="Connect with the divine presence of Sai Baba. Experience serenity, clarity, and spiritual insight with his timeless wisdom."
          imgSrc="/gurus/saibaba.jpg"
          buttonText="Ask Guru"
          buttonAction={() => router.push('/home?guru=saibaba')}
          borderColor="yellow-300"
        />

        {/* Buddha Card */}
        <GuruCard
          name="Buddha"
          description="Connect with Buddha’s timeless wisdom and experience mindfulness, compassion, and inner enlightenment."
          imgSrc="/gurus/buddha.jpg"
          buttonText="Seek Wisdom"
          buttonAction={() => router.push('/home?guru=buddha')}
          borderColor="blue-300"
        />
      </motion.div>
    </section>
  );
}

// Reusable GuruCard component
type GuruCardProps = {
  name: string;
  description: string;
  imgSrc: string;
  buttonText: string;
  buttonAction: () => void;
  borderColor: string;
};

const GuruCard: React.FC<GuruCardProps> = ({
  name,
  description,
  imgSrc,
  buttonText,
  buttonAction,
  borderColor,
}) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
      scale: [1, 1.02, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="w-full flex flex-col sm:flex-row items-center gap-10 bg-white/5 
               backdrop-blur-xl rounded-3xl p-12 shadow-2xl max-w-xl border border-white/10"
  >
    {/* Guru Image */}
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className={`relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-${borderColor} shadow-2xl`}
    >
      <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute inset-0 rounded-full border-2 border-${borderColor}/40`}
      />
    </motion.div>

    {/* Text Content */}
    <div className="flex-1 text-center sm:text-left">
      <h2 className={`text-4xl font-bold text-${borderColor} mb-4 drop-shadow-lg`}>
        {name} — Your Guide
      </h2>
      <p className="text-gray-300 text-lg sm:text-xl mb-6">{description}</p>
      <motion.button
        className={`px-8 py-3 rounded-xl bg-gradient-to-r from-${borderColor} to-pink-400 
                   font-semibold text-black hover:scale-110 transition-transform shadow-lg`}
        onClick={buttonAction}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.button>
    </div>
  </motion.div>
);
