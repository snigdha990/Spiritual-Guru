'use client';
import React from 'react';
import FloatingParticles from './FloatingParticles';

export default function Footer() {
  return (
    <footer className="relative py-12 bg-gradient-to-t from-[#1a1a2e] via-[#0a0a0f] to-[#0a0a0a] text-center text-gray-300 text-sm sm:text-base overflow-hidden">
      {/* Floating particles for mystical vibe */}
      <FloatingParticles count={25} />

      <p className="relative z-10">
        &copy; {new Date().getFullYear()} Spiritual Guru. All Rights Reserved.
      </p>
    </footer>
  );
}
