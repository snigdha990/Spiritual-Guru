'use client';

interface SaiBabaIntroProps {
  selectedLanguage?: string;
  selectedGuru?: string;
  onAskGuru: () => void;
}

export default function SaiBabaIntro({
  selectedLanguage,
  selectedGuru,
  onAskGuru,
}: SaiBabaIntroProps) {
  const guruName = selectedGuru || 'Sai Baba';

  return (
    <section
      style={{ animation: 'popUpDown 3s ease-in-out infinite', perspective: '500px' }}
      className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mt-10 md:mt-12 px-6 sm:px-8 py-10 md:py-12 rounded-3xl shadow-2xl border-2 border-goldPrimary overflow-hidden bg-cardDark"
    >
      {/* Gradient Floating Blobs */}
      <div className="absolute -top-16 left-1/4 w-36 sm:w-52 h-36 sm:h-52 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 opacity-20 rounded-full animate-pulse-slow blur-3xl -z-10"></div>
      <div className="absolute bottom-[-40px] right-1/3 w-44 sm:w-60 h-44 sm:h-60 bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 opacity-15 rounded-full animate-pulse-slow blur-3xl -z-10"></div>

      {/* Left Text */}
      <div className="w-full md:w-3/5 space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left z-10">
        <p
          style={{ animation: 'glowPulse 3s ease-in-out infinite alternate' }}
          className="text-goldPrimary text-lg sm:text-xl md:text-2xl font-semibold"
        >
          Embrace wisdom, compassion, and peace.
        </p>

        <h2
          style={{ animation: 'glowPulse 3s ease-in-out infinite alternate' }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-goldPrimary drop-shadow-lg leading-tight"
        >
          {guruName} — Your Guide
        </h2>

        <p className="text-textSecondary text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
          Sai Baba is one of the most beloved spiritual masters, teaching peace,
          compassion, and unity beyond all religions.
        </p>

        <p className="text-textSecondary text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
          Ask anything related to life, spirituality, meditation, or emotional
          challenges. Your AI Guru responds with compassion.
        </p>

        {selectedLanguage && (
          <p className="text-goldPrimary font-semibold text-sm sm:text-md">
            Language selected: {selectedLanguage}
          </p>
        )}

        <button
          onClick={onAskGuru}
          style={{ animation: 'glowPulse 4s ease-in-out infinite alternate' }}
          className="w-full sm:w-auto mt-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-black font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Ask Guru
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-2/5 flex justify-center z-10 mt-8 md:mt-0">
        <img
          src="/gurus/saibaba.jpg"
          alt="Sai Baba spiritual portrait"
          className="w-64 sm:w-72 md:w-96 max-w-full h-auto rounded-3xl shadow-2xl object-cover border-4 border-goldPrimary transition-transform duration-500 hover:scale-105 filter drop-shadow-lg"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = '/placeholder-image.png';
          }}
        />
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes popUpDown {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 10px #F5C542, 0 0 20px #E3A857; opacity: 0.85; }
          50% { text-shadow: 0 0 25px #F5C542, 0 0 40px #E3A857; opacity: 1; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.15; filter: blur(35px); }
          50% { opacity: 0.3; filter: blur(45px); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(0.95); opacity: 0.2; }
          50% { transform: scale(1.05); opacity: 0.35; }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
