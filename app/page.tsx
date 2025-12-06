'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import HeroIntro from './components/HeroIntro';
import SaiBabaIntro from './components/SaiBabaIntro';
import DailyWisdom from './components/DailyWisdom';
import Header from './components/Header';
import AskGuruSection from './components/AskGuruSection';
import FeatureCards from './components/FeatureCards';

export default function AppPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const languages = ['English', 'Hindi'];
  const router = useRouter();
  const selectedGuru = 'Sai Baba';

  const features = [
    { title: 'Spiritual Guidance', desc: 'Personalized advice for inner peace.' },
    { title: 'Meditation Tips', desc: 'Learn to meditate and relax daily.' },
    { title: 'Life Advice', desc: 'Overcome challenges with wisdom.' },
    { title: 'Emotional Support', desc: 'Find calm in moments of stress.' },
  ];

  const handleAskGuru = () => {
    router.push(`/home?lang=${selectedLanguage}&guru=${selectedGuru}`);
  };

  return (
    <div className="bg-gradient-to-br from-[#0e0f1a] via-[#111322] to-[#0b0b15] text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <HeroIntro
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        languages={languages}
      />

      {/* Sai Baba Intro Section */}
      <div className="w-full flex justify-center mt-12">
        <SaiBabaIntro
          selectedLanguage={selectedLanguage}
          selectedGuru={selectedGuru}
        />
      </div>

      {/* Features Section */}
      <FeatureCards features={features} />

      {/* Daily Wisdom Section */}
      <DailyWisdom />

      {/* Ask Guru Section */}
      <AskGuruSection />
      <hr />
      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-gradient-to-t from-gray-900 to-gray-800 text-center text-gray-400 text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Spiritual Guru. All Rights Reserved.
      </footer>

      {/* Global Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
