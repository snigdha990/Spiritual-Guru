'use client';

import React, { useState, useEffect } from 'react';

interface LanguageCardProps {
  language: string;
  selected: boolean;
  onClick: () => void;
  style?: React.CSSProperties; // allow inline styles for animation
}

function LanguageCard({ language, selected, onClick, style }: LanguageCardProps) {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`cursor-pointer py-3 px-5 rounded-xl border text-center font-medium
        transition transform duration-300 ease-in-out text-sm sm:text-base
        ${selected
          ? 'border-purple-500 bg-purple-500/25 shadow-lg scale-105 animate-pulse'
          : 'border-gray-600 bg-gray-800 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-xl hover:border-purple-500'
        }`}
    >
      {language}
    </div>
  );
}

interface HeroIntroProps {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  languages: string[];
}

const introQuotes = [
  "Awaken your inner wisdom.",
  "Embrace compassion, find peace.",
  "Seek guidance, live mindfully.",
  "Connect with your spiritual self."
];

export default function HeroIntro({
  selectedLanguage,
  setSelectedLanguage,
  languages
}: HeroIntroProps) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % introQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-center space-y-6 max-w-3xl mx-auto px-4 mt-12">
      {/* Floating mystical blobs */}
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob1"></div>
      <div className="absolute bottom-0 right-1/3 w-56 h-56 bg-cyan-400 rounded-full opacity-15 blur-3xl animate-blob2"></div>
      <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-pink-400 rounded-full opacity-10 blur-3xl animate-blob3"></div>

      {/* Hero Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight
               bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500
               bg-clip-text text-transparent relative overflow-hidden shimmer-heading hover:glow-heading transition-all duration-300">
        Awaken Your Inner Wisdom
      </h1>

      {/* Rotating Quote */}
      <p className="text-base sm:text-lg md:text-xl font-semibold
                    text-transparent bg-clip-text
                    bg-gradient-to-r from-purple-400 via-cyan-300 to-pink-300
                    transition-opacity duration-1000 ease-in-out animate-textGradientSlow
                    px-2">
        {introQuotes[currentQuoteIndex]}
      </p>

      {/* Language Selector */}
      <div className="mt-8 z-10 relative flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-4 text-center">
          Select Language
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 max-w-md w-full">
          {languages.map((lang, index) => (
            <LanguageCard
              key={lang}
              language={lang}
              selected={selectedLanguage === lang}
              onClick={() => setSelectedLanguage(lang)}
              style={{
                animation: 'fadeUp 0.5s ease forwards',
                animationDelay: `${index * 0.15}s`,
                opacity: 0
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
