'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import FloatingParticles from './FloatingParticles';

export default function Footer() {
  const socialIcons = [
    { icon: <FaTwitter />, link: '#' },
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaYoutube />, link: '#' },
    { icon: <FaFacebook />, link: '#' },
  ];

  return (
    <footer className="relative py-24 bg-gradient-to-t from-[#1a1a2e] via-[#0a0a0f] to-[#0a0a0a] text-center text-gray-300 overflow-hidden">

      {/* Floating mystical blobs */}
      <div className="absolute top-10 left-1/4 w-56 h-56 bg-purple-600/20 rounded-full animate-slowFloat blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-pink-500/15 rounded-full animate-slowFloat blur-3xl pointer-events-none"></div>

      {/* Floating particles */}
      <FloatingParticles count={25} />

      {/* Footer heading */}
      <motion.h3
        className="relative z-10 text-xl sm:text-2xl font-semibold mb-6 text-yellow-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Connect with the Spiritual Flow
      </motion.h3>

      {/* Social icons */}
      <div className="flex justify-center gap-6 mb-6 relative z-10">
        {socialIcons.map((s, i) => (
          <motion.a
            key={i}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-2xl sm:text-3xl hover:text-yellow-300 transition-colors"
            whileHover={{ scale: 1.2, color: '#FFD700' }}
          >
            {s.icon}
          </motion.a>
        ))}
      </div>

      {/* Footer text */}
      <motion.p
        className="relative z-10 text-sm sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        &copy; {new Date().getFullYear()} Spiritual Guru. All Rights Reserved.
      </motion.p>

      {/* Glowing gradient underline */}
      <motion.div
        className="absolute bottom-6 left-1/2 w-32 h-1 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 rounded-full opacity-60"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
        style={{ transformOrigin: 'center' }}
      />

      {/* Extra floating aura glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-pink-400/10 rounded-full filter blur-3xl animate-slowFloat pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-400/10 rounded-full filter blur-2xl animate-slowFloat pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
    </footer>
  );
}
