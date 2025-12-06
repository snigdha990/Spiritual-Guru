'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Feature {
  title: string;
  desc: string;
}

interface FeatureCardsProps {
  features: Feature[];
}

export default function FeatureCards({ features }: FeatureCardsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 1; 
    let animationFrameId: number;

    const scroll = () => {
      if (!container) return;
      if (!isHovered) {
        scrollAmount += speed;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
        container.scrollLeft = scrollAmount;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 text-center px-4 overflow-hidden relative">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 shimmer-text">
        What Your AI Guru Can Do
      </h2>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {features.concat(features).map((f, i) => (
          <div
            key={i}
            className="w-64 sm:w-72 md:w-80 bg-gray-800 p-6 rounded-2xl shadow-lg transform opacity-0 translate-y-6 hover:scale-105 hover:shadow-2xl transition-transform duration-500 flex-shrink-0"
            style={{
              animation: `fadeUp 0.8s ease forwards`,
              animationDelay: `${(i % features.length) * 1}s`, // 1s delay per original card
            }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-300 text-sm sm:text-base">{f.desc}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}