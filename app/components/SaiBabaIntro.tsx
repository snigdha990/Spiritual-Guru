'use client';

import { useRouter } from 'next/navigation';

interface SaiBabaIntroProps {
  selectedLanguage?: string;
  selectedGuru?: string;
}

export default function SaiBabaIntro({
  selectedLanguage,
  selectedGuru,
}: SaiBabaIntroProps) {
  const guruName = selectedGuru || 'Sai Baba';
  const router = useRouter();

  const handleAskGuru = () => {
    // Navigate to /home with query params
    const lang = selectedLanguage || 'English';
    const guru = selectedGuru || 'Sai Baba';
    router.push(`/home?lang=${encodeURIComponent(lang)}&guru=${encodeURIComponent(guru)}`);
  };

  return (
    <section
      style={{ animation: 'popUpDown 3s ease-in-out infinite', perspective: '500px' }}
      className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 mt-10 md:mt-12 px-8 py-12 rounded-3xl shadow-2xl border-2 border-yellow-400 overflow-hidden"
    >
      {/* Fixed Background Blob */}
      <div
        style={{ animation: 'pulseGlow 4s ease-in-out infinite alternate', filter: 'blur(40px)' }}
        className="fixed top-[-120px] left-1/2 w-[420px] h-[420px] bg-yellow-400 opacity-20 rounded-full -translate-x-1/2 -z-10"
      />

      {/* Left Text */}
      <div className="w-full md:w-3/5 space-y-6 md:space-y-8 text-center md:text-left z-10">
        <p
          style={{ animation: 'glowPulse 3s ease-in-out infinite alternate' }}
          className="text-pink-300 text-lg sm:text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300"
        >
          Embrace wisdom, compassion, and peace.
        </p>

        <h2
          style={{ animation: 'glowPulse 3s ease-in-out infinite alternate' }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg leading-tight"
        >
          {guruName} — Your Guide
        </h2>

        <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
          Sai Baba is one of the most beloved spiritual masters, teaching peace, compassion, and unity beyond all religions.
        </p>

        <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
          Ask anything related to life, spirituality, meditation, or emotional challenges. Your AI Guru responds with compassion.
        </p>

        {selectedLanguage && (
          <p className="text-yellow-300 font-semibold text-sm sm:text-md">
            Language selected: {selectedLanguage}
          </p>
        )}

        <button
          onClick={handleAskGuru}
          style={{ animation: 'glowPulse 4s ease-in-out infinite alternate' }}
          className="mt-6 px-14 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-lg sm:text-xl shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-300 relative overflow-hidden"
        >
          Ask Guru
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-2/5 flex justify-center z-10">
        <img
          src="/gurus/saibaba.jpg"
          alt="Sai Baba spiritual portrait"
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-3xl shadow-2xl object-cover border-4 border-yellow-300 transition-transform duration-500 hover:scale-105 filter drop-shadow-lg"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = '/placeholder-image.png';
          }}
        />
      </div>

      {/* Inline CSS Keyframes */}
      <style jsx>{`
        @keyframes popUpDown {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 10px #ffd700, 0 0 20px #ffa500; opacity: 0.7; }
          50% { text-shadow: 0 0 25px #ffd700, 0 0 40px #ffa500; opacity: 1; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.15; filter: blur(35px); }
          50% { opacity: 0.3; filter: blur(45px); }
        }
      `}</style>
    </section>
  );
}