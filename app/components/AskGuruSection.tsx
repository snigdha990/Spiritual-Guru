// 'use client';
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';

// type Particle = {
//   id: string;
//   top: number;
//   left: number;
//   size: number;
//   duration: number;
//   delay: number;
// };

// export default function AskGuruSection() {
//   const router = useRouter();
//   const [particles, setParticles] = useState<Particle[]>([]);

//   useEffect(() => {
//     const generated: Particle[] = Array.from({ length: 35 }, () => ({
//       id: crypto.randomUUID(),
//       top: Math.random() * 100,
//       left: Math.random() * 100,
//       size: 3 + Math.random() * 12,
//       duration: 8 + Math.random() * 12,
//       delay: Math.random() * 5,
//     }));
//     setParticles(generated);
//   }, []);

//   return (
//     <section className="relative py-24 px-6 text-center overflow-hidden animated-bg">

//       {/* Floating particles */}
//       {particles.map((p) => (
//         <span
//           key={p.id}
//           className="absolute rounded-full pointer-events-none"
//           style={{
//             top: `${p.top}%`,
//             left: `${p.left}%`,
//             width: `${p.size}px`,
//             height: `${p.size}px`,
//             background: `rgba(255,255,255,${0.05 + Math.random() * 0.15})`,
//             filter: 'blur(3px)',
//             animationName: 'floatParticle, pulseOpacity',
//             animationDuration: `${p.duration}s, ${p.duration / 2}s`,
//             animationTimingFunction: 'ease-in-out, ease-in-out',
//             animationIterationCount: 'infinite, infinite',
//             animationDelay: `${p.delay}s, ${p.delay}s`,
//           }}
//         />
//       ))}

//       {/* Heading */}
//       <motion.h2
//         className="text-4xl sm:text-5xl font-bold text-yellow-300 mb-6 relative z-10"
//         initial={{ opacity: 0, y: 30, scale: 0.95 }}
//         whileInView={{ opacity: 1, y: 0, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         Have a Question?
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 blur-3xl rounded-lg opacity-20"
//           animate={{ opacity: [0.15, 0.3, 0.15] }}
//           transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
//         />
//       </motion.h2>

//       {/* Description */}
//       <motion.p
//         className="text-gray-300 max-w-2xl mx-auto mb-8 relative z-10"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.2, duration: 0.8 }}
//       >
//         Ask your questions to our AI Guru and receive instant spiritual guidance.
//       </motion.p>

//       {/* CTA Button */}
//       <motion.button
//         className="relative px-10 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-yellow-300 to-pink-400 overflow-hidden hover:scale-105 transition-transform"
//         onClick={() => router.push('/home')}
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.4, duration: 0.8 }}
//       >
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 transform -translate-x-full"
//           animate={{ x: ['-100%', '100%'] }}
//           transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
//         />
//         <span className="relative z-10">Ask Guru</span>
//       </motion.button>

//       {/* Particle & Gradient Animations */}
//       <style jsx>{`
//         .animated-bg {
//           background: linear-gradient(135deg, #111322, #0e0f1a, #111322, #0e0f1a);
//           background-size: 400% 400%;
//           animation: gradientShift 20s ease infinite;
//         }

//         @keyframes gradientShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         @keyframes floatParticle {
//           0% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(-25px) translateX(12px); }
//           100% { transform: translateY(0px) translateX(0px); }
//         }

//         @keyframes pulseOpacity {
//           0% { opacity: 0.2; }
//           50% { opacity: 0.5; }
//           100% { opacity: 0.2; }
//         }
//       `}</style>
//     </section>
//   );
// }

'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Particle = {
  id: string;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

type AskGuruProps = {
  scrollToSaiBaba: () => void;
};

export default function AskGuruSection({ scrollToSaiBaba }: AskGuruProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 35 }, () => ({
      id: crypto.randomUUID(),
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 3 + Math.random() * 12,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  return (
    <section className="relative py-24 px-6 text-center overflow-hidden animated-bg">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `rgba(255,255,255,${0.05 + Math.random() * 0.15})`,
            filter: 'blur(3px)',
            animationName: 'floatParticle, pulseOpacity',
            animationDuration: `${p.duration}s, ${p.duration / 2}s`,
            animationTimingFunction: 'ease-in-out, ease-in-out',
            animationIterationCount: 'infinite, infinite',
            animationDelay: `${p.delay}s, ${p.delay}s`,
          }}
        />
      ))}

      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-yellow-300 mb-6 relative z-10"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Have a Question?
      </motion.h2>

      <motion.p
        className="text-gray-300 max-w-2xl mx-auto mb-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Ask your questions to our AI Guru and receive instant spiritual guidance.
      </motion.p>

      <motion.button
        onClick={scrollToSaiBaba}
        className="relative px-10 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-yellow-300 to-pink-400 hover:scale-105 transition-transform"
      >
        <span className="relative z-10">Ask Guru</span>
      </motion.button>
    </section>
  );
}
