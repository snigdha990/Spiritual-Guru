'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FloatingParticles from './FloatingParticles'; // Your particle component
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const socialIcons = [
    { icon: <FaTwitter />, link: '#' },
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaYoutube />, link: '#' },
    { icon: <FaFacebook />, link: '#' },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className="relative py-12 sm:py-16 bg-gradient-to-t from-[#1a1a2e] via-[#0a0a0f] to-[#0a0a0a] text-center text-gray-300 overflow-hidden">

      {/* Floating mystical blobs */}
      <div
        className={`absolute top-6 left-1/4 rounded-full animate-slowFloat blur-2xl pointer-events-none
        ${isMobile ? 'w-28 h-28' : 'w-40 h-40'} bg-purple-600/20`}
      />
      <div
        className={`absolute bottom-6 right-1/3 rounded-full animate-slowFloat blur-2xl pointer-events-none
        ${isMobile ? 'w-36 h-36' : 'w-52 h-52'} bg-pink-500/15`}
      />

      {/* Floating particles */}
      <FloatingParticles count={isMobile ? 8 : 20} />

      {/* Footer heading */}
      <motion.h3
        className="relative z-10 text-lg sm:text-xl font-semibold mb-3 text-yellow-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Connect with the Spiritual Flow
      </motion.h3>

      {/* Social icons */}
      <div className="flex justify-center gap-5 mb-3 relative z-10">
        {socialIcons.map((s, i) => (
          <motion.a
            key={i}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-2xl sm:text-3xl hover:text-yellow-300 transition-colors"
            whileHover={{ scale: 1.1, color: '#FFD700' }}
          >
            {s.icon}
          </motion.a>
        ))}
      </div>

      {/* Footer text */}
      <motion.p
        className="relative z-10 text-sm sm:text-base mb-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        &copy; {new Date().getFullYear()} Spiritual Guru. All Rights Reserved.
      </motion.p>

      {/* Glowing underline right below content */}
      <div className="relative z-10 flex justify-center mt-4">
        <motion.div
          className={`h-1 rounded-full opacity-60 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400
            ${isMobile ? 'w-20' : 'w-28'}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{ transformOrigin: 'center' }}
        />
      </div>
    </footer>
  );
}
