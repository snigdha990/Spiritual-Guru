'use client';
import React, { useState, useEffect } from "react";

const dailyWisdomQuotes = [
  "True wisdom comes from the heart, not the mind.",
  "Let compassion guide your actions, and peace will follow.",
  "Awaken your inner light; it shines even in darkness.",
  "Every moment is an opportunity to embrace stillness and clarity.",
  "The path to peace begins with understanding yourself.",
];

export default function DailyWisdom() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % dailyWisdomQuotes.length);
    }, 5000); // Change quote every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-800 via-pink-800 to-indigo-800 text-center relative overflow-hidden px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 shimmer-text">
        Daily Wisdom
      </h2>
      <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2 sm:px-0 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 animate-shimmerText transition-opacity duration-1000 ease-in-out">
        {dailyWisdomQuotes[currentQuoteIndex]}
      </p>

      {/* Floating Blobs */}
      <div className="absolute top-0 left-1/4 w-24 sm:w-36 h-24 sm:h-36 bg-pink-500 rounded-full opacity-20 animate-pulse-slow blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-32 sm:w-48 h-32 sm:h-48 bg-purple-400 rounded-full opacity-15 animate-pulse-slow blur-3xl"></div>

      {/* Inline CSS for shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmerText {
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
}