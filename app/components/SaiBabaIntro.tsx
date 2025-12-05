'use client';

interface SaiBabaIntroProps {
  selectedLanguage: string;
  selectedGuru: string;
  onAskGuru: () => void;
}

export default function SaiBabaIntro({
  selectedLanguage,
  selectedGuru,
  onAskGuru
}: SaiBabaIntroProps) {

  const guruName = selectedGuru || "Sai Baba";

  return (
    <section
      className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center
                 justify-between gap-10 md:gap-0
                 mt-10 md:mt-12 px-4 sm:px-6 py-10 md:py-12 rounded-3xl
                 bg-gradient-to-b md:bg-gradient-to-r
                 from-purple-900 via-indigo-900 to-blue-900
                 shadow-2xl border border-yellow-400"
    >

      {/* LEFT — TEXT SECTION */}
      <div className="w-full md:w-3/5 space-y-6 md:space-y-8 text-center md:text-left">

        <p className="text-pink-300 text-lg sm:text-xl md:text-2xl font-semibold
                      bg-clip-text text-transparent
                      bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300">
          Embrace wisdom, compassion, and peace.
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold
                       bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300
                       bg-clip-text text-transparent drop-shadow-lg leading-tight">
          {guruName} — Your Guide
        </h2>

        <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mx-auto md:mx-0 max-w-xl">
          Sai Baba is one of the most beloved spiritual masters, teaching peace,
          compassion, and unity beyond all religions.
        </p>

        <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mx-auto md:mx-0 max-w-xl">
          Ask anything related to life, spirituality, meditation, or emotional
          challenges. Your AI Guru responds with compassion.
        </p>

        {selectedLanguage && (
          <p className="text-yellow-300 font-semibold text-sm sm:text-md">
            Language selected: {selectedLanguage}
          </p>
        )}

        <div className="flex justify-center md:justify-start">
          <button
            onClick={onAskGuru}
            className="mt-4 px-10 sm:px-14 py-3 sm:py-4 rounded-full 
                       bg-yellow-400 text-black font-semibold text-lg sm:text-xl
                       shadow-lg hover:scale-110 hover:shadow-2xl
                       transition-transform duration-300"
          >
            Ask Guru
          </button>
        </div>
      </div>

      {/* RIGHT — IMAGE */}
      <div className="w-full md:w-2/5 flex justify-center">
        <img
          src="/gurus/saibaba.jpg"
          alt="Sai Baba spiritual portrait"
          className="w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96
                     rounded-2xl sm:rounded-3xl
                     shadow-2xl object-cover border-4 border-yellow-300
                     transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src = '/placeholder-image.png';
          }}
        />
      </div>

    </section>
  );
}
