"use client";
import React, { useState, useEffect } from "react";

const introQuotes = [
  "Awaken your inner wisdom.",
  "Embrace compassion, find peace.",
  "Seek guidance, live mindfully.",
  "Connect with your spiritual self."
];

interface LanguageCardProps {
  language: string;
  selected: boolean;
  onClick: () => void;
}

function LanguageCard({ language, selected, onClick }: LanguageCardProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer py-3 px-4 rounded-xl border text-center font-medium
                  transition transform duration-300 ease-in-out text-sm sm:text-base
        ${selected 
          ? "border-gold bg-gold/20 shadow-lg scale-105" 
          : "border-gray-600 bg-cardDark hover:bg-cardDark/90 hover:-translate-y-1 hover:shadow-xl hover:border-yellow-400"}
      `}
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
    <section className="text-center space-y-5 sm:space-y-6 max-w-3xl mx-auto px-4">
      
      {/* Heading */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight
                   bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 
                   bg-clip-text text-transparent animate-textGradient"
      >
        Awaken Your Inner Wisdom
      </h2>

      {/* Changing Quote */}
      <p
        className="text-base sm:text-lg md:text-xl font-semibold
                   text-transparent bg-clip-text
                   bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 
                   transition-opacity duration-1000 ease-in-out animate-textGradientSlow
                   px-2"
      >
        {introQuotes[currentQuoteIndex]}
      </p>

      {/* Language Selector */}
      <div className="mt-4 sm:mt-6">
        <h3 className="text-lg sm:text-xl font-semibold text-textLight mb-3 sm:mb-4">
          Select Language
        </h3>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 max-w-sm mx-auto">
          {languages.map((lang) => (
            <LanguageCard
              key={lang}
              language={lang}
              selected={selectedLanguage === lang}
              onClick={() => setSelectedLanguage(lang)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
