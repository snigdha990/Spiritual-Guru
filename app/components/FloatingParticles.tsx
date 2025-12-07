'use client';
import React, { useEffect, useState } from 'react';

type Particle = {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  xOffset: number;
  id: number;
};

export default function FloatingParticles({ count = 40 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: count }, (_, i) => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 2 + Math.random() * 6,
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 5,
      opacity: 0.05 + Math.random() * 0.2,
      xOffset: Math.random() > 0.5 ? 10 + Math.random() * 10 : -(10 + Math.random() * 10),
      id: i,
    }));
    setParticles(generated);
  }, [count]);

  return (
    <>
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--x-offset': `${p.xOffset}px`,
          } as React.CSSProperties}
          className="absolute rounded-full bg-gradient-to-r from-yellow-300/50 via-pink-300/40 to-purple-400/40 animate-float pointer-events-none blur-sm"
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(var(--x-offset));
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        .animate-float {
          animation-name: float;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </>
  );
}
