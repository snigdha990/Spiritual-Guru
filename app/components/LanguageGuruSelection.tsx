'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SaiBabaIntro from '../components/SaiBabaIntro';
import AppHeader from './Header';
import HeroIntro from './HeroIntro';

const languages = ['English', 'Hindi'];

export default function LanguageGuruSelection() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const selectedGuru = 'Sai Baba';
  const router = useRouter();

  const handleContinue = () => {
    if (!selectedLanguage) return;
    router.push(`/home?lang=${selectedLanguage}&guru=${selectedGuru}`);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start px-6 pt-6 pb-10
                    bg-gradient-to-br from-[#0e0f1a] via-[#111322] to-[#0b0b15] text-white overflow-hidden">

      {/* Animated Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                      bg-gradient-rainbow blur-[150px] rounded-full animate-gradient-x opacity-20"></div>

      {/* Header */}
      <AppHeader />

      {/* Main Content */}
      <div className="w-full max-w-5xl mt-10 flex flex-col gap-12">

        {/* Hero Section */}
        <HeroIntro
          selectedLanguage={selectedLanguage ?? ''}
          setSelectedLanguage={setSelectedLanguage}
          languages={languages}
        />

        {/* Guru Intro Card */}
        <div className="w-full rounded-3xl p-8 bg-cardDark backdrop-blur-md border border-white/10
                        shadow-neon-glow hover:shadow-neon transition-all duration-300">
          <SaiBabaIntro
            selectedLanguage={selectedLanguage ?? ''}
            selectedGuru={selectedGuru}
            onAskGuru={handleContinue}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-6 mt-12 text-gray-400 text-sm">
        © 2025 AI Spiritual Guru — About • Privacy • Help
      </footer>
    </div>
  );
}

