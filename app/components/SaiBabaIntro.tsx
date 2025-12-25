'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SaiBabaIntro() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section
      id="choose-guru"
      ref={ref}
      className="relative py-28 px-6 sm:px-12 bg-[#0b0b15] text-white overflow-hidden"
    >
      {/* Soft radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,120,0.12),transparent_70%)] pointer-events-none" />

      {/* Background mandala for depth */}
      <Image
        src="/mandalas/indian-mandala.svg"
        alt=""
        className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] opacity-[0.05] pointer-events-none"
        width={672}
        height={672}
        priority
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-5xl sm:text-6xl md:text-7xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300"
      >
        Choose Your Guru
      </motion.h2>

      {/* Guru Cards */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 flex flex-col sm:flex-row gap-12 justify-center"
      >
        <GuruCard
          name="Sai Baba"
          description="Experience serenity, clarity, and divine guidance through Sai Baba’s timeless wisdom."
          imgSrc="/gurus/saibaba.jpg"
          buttonText="Ask Guru"
          onClick={() => router.push('/home?guru=saibaba')}
          accent="yellow"
        />

        <GuruCard
          name="Buddha"
          description="Walk the path of mindfulness, compassion, and inner peace with Buddha."
          imgSrc="/gurus/buddha.jpg"
          buttonText="Seek Wisdom"
          onClick={() => router.push('/home?guru=buddha')}
          accent="blue"
        />
      </motion.div>
    </section>
  );
}

type GuruCardProps = {
  name: string;
  description: string;
  imgSrc: string;
  buttonText: string;
  onClick: () => void;
  accent: 'yellow' | 'blue';
};

const GuruCard = ({ name, description, imgSrc, buttonText, onClick, accent }: GuruCardProps) => {
  const accentGradient = accent === 'yellow' ? 'from-yellow-300 to-pink-400' : 'from-blue-300 to-purple-400';

  return (
    <div
      className="
        max-w-xl w-full flex flex-col sm:flex-row gap-8
        bg-white/5 backdrop-blur-xl
        rounded-3xl p-8 sm:p-12
        border border-white/10
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]
      "
    >
      {/* Guru Image */}
      <div className="relative w-full sm:w-56 h-64 rounded-2xl overflow-hidden flex-shrink-0">
        <Image
          src={imgSrc}
          alt={name}
          className="w-full h-full object-cover scale-105 transition-transform duration-500 hover:scale-110"
          width={224}
          height={256}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-4xl font-bold mb-4">{name}</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">{description}</p>
        <button
          onClick={onClick}
          className={`px-8 py-3 rounded-xl font-semibold text-black bg-gradient-to-r ${accentGradient} hover:scale-105 transition-transform duration-200`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
