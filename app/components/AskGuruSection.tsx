'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function AskGuruSection() {
  const router = useRouter();

  const handleAskGuru = () => {
    router.push('/home');
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-800 text-center px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 shimmer-text">
        Ask Your Guru
      </h2>
      <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8">
        Type your question and receive guidance from your AI Guru.
      </p>
      <button
        onClick={handleAskGuru}
        className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Ask Guru
      </button>
    </section>
  );
}