'use client';
import React, { useRef, useState } from 'react';
import Header from './components/Header';
import HeroIntro from './components/HeroIntro';
import SaiBabaIntro from './components/SaiBabaIntro';
import FeatureCards from './components/FeatureCards';
import DailyWisdom from './components/DailyWisdom';
import AskGuruSection from './components/AskGuruSection';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';

export default function Page() {
  const [selectedGuru, setSelectedGuru] = useState('Sai Baba');
  const saiBabaRef = useRef<HTMLDivElement>(null);

  // Function to scroll to Sai Baba section
  const scrollToSaiBaba = () => {
    saiBabaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white min-h-screen">
      {/* Global floating mystical particles */}
      <FloatingParticles count={50} />

      {/* Header and Hero Section */}
      <Header />
      <HeroIntro />

      {/* Sai Baba Introduction */}
      <div ref={saiBabaRef}>
        <SaiBabaIntro />
      </div>

      {/* Features */}
      <FeatureCards />

      {/* Daily Wisdom */}
      <DailyWisdom />

      {/* Ask Guru Interactive Section */}
      <AskGuruSection scrollToSaiBaba={scrollToSaiBaba} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
