// 'use client';

// import React, { useState, useEffect } from 'react';
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
// import { useRouter, usePathname } from 'next/navigation';
// import SaiBabaIntro from "../components/SaiBabaIntro";

// const navItems = [
//   { href: '/chat', icon: '🕉️', label: 'Ask Guru' },
// ];

// // Available languages
// const languages = ['English', 'Hindi'];

// // Daily quotes
// const dailyQuotes = [
//   "Meditation is the journey from sound to silence.",
//   "Happiness is not something ready-made. It comes from your own actions.",
//   "Peace comes from within. Do not seek it without.",
//   "The mind is everything. What you think you become."
// ];

// interface LanguageCardProps {
//   language: string;
//   selected: boolean;
//   onClick: () => void;
// }

// function LanguageCard({ language, selected, onClick }: LanguageCardProps) {
//   return (
//     <div
//       onClick={onClick}
//       className={`cursor-pointer p-4 rounded-xl border text-center font-medium transition transform duration-300 ease-in-out
//         ${selected 
//           ? 'border-gold bg-gold/20 shadow-lg scale-105' 
//           : 'border-gray-600 bg-cardDark hover:bg-cardDark/90 hover:-translate-y-1 hover:shadow-xl hover:border-yellow-400'}`}
//     >
//       {language}
//     </div>
//   );
// }

// export default function LanguageGuruSelection() {
//   const [selectedLanguage, setSelectedLanguage] = useState<string>('');
//   const [selectedGuru, setSelectedGuru] = useState<string>('');

//   const router = useRouter();
//   const pathname = usePathname();

//   // AUTO-SELECT SAI BABA (Guru is fixed)
//   useEffect(() => {
//     setSelectedGuru("Sai Baba");
//   }, []);

//   const quoteIndex = new Date().getDate() % dailyQuotes.length;
//   const dailyQuote = dailyQuotes[quoteIndex];

//   const handleContinue = () => {
//     if (!selectedLanguage) {
//       alert('Please select a language.');
//       return;
//     }

//     router.push(`/home?lang=${selectedLanguage}&guru=${selectedGuru}`);
//   };

//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-start px-4 pt-4 pb-10 overflow-hidden">

//       {/* Background Gradients */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 animate-gradient-x"></div>
//       <div className="absolute top-10 left-1/4 w-72 h-72 bg-pink-500 rounded-full opacity-20 animate-pulse-slow blur-3xl"></div>
//       <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-yellow-400 rounded-full opacity-15 animate-pulse-slow blur-3xl"></div>
//       <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-400 rounded-full opacity-10 animate-pulse-slow blur-3xl"></div>

//       {/* Header */}
//       <header className="w-full flex items-center justify-between px-6 pt-2 pb-4 mb-8
//                          bg-cardDark/70 backdrop-blur-md border-b border-gray-600 rounded-b-xl shadow-md">
//         <div className="flex items-center space-x-3">
//           <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full animate-pulse-slow" />
//           <h1 className="text-2xl md:text-3xl font-bold 
//                          bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 
//                          bg-clip-text text-transparent animate-textGradient">
//             AI Spiritual Guru
//           </h1>
//         </div>

//         <div className="flex items-center space-x-4">
//           <SignedOut>
//             <SignInButton>
//               <button className="px-5 py-2 md:px-6 md:py-3 bg-gold text-black rounded-full font-semibold text-lg
//                                  hover:scale-105 hover:shadow-lg transition-transform duration-200
//                                  relative before:absolute before:inset-0 before:rounded-full 
//                                  before:bg-gradient-to-r before:from-yellow-300 before:via-yellow-400 before:to-yellow-300
//                                  before:opacity-50 before:blur-xl before:animate-pulse before:-z-10">
//                 Sign In
//               </button>
//             </SignInButton>
//           </SignedOut>

//           <SignedIn>
//             <UserButton afterSignOutUrl="/" />
//           </SignedIn>
//         </div>
//       </header>

//       {/* Heading + Daily Quote */}
//       {/* <div className="text-center space-y-4 mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold
//                        bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400
//                        bg-clip-text text-transparent animate-textGradient">
//           Welcome to AI Spiritual Guru
//         </h2>
//         <p className="text-lg md:text-xl font-semibold text-transparent bg-clip-text
//                       bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 animate-textGradientSlow">
//           "{dailyQuote}"
//         </p>
//       </div> */}

//       <div className="text-center space-y-4 mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold
//                       bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400
//                       bg-clip-text text-transparent animate-textGradient">
//           Welcome to AI Spiritual Guru
//         </h2>
        
//         <p className="text-lg md:text-xl font-semibold text-transparent bg-clip-text
//                       bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 animate-textGradientSlow">
//           “Awaken your inner wisdom and embrace compassion.”
//         </p>
        
//         <p className="text-md md:text-lg text-gray-200">
//           Ask questions, explore teachings, and receive guidance inspired by Sai Baba.
//         </p>
//       </div>

//       {/* Language Selection */}
//       <section className="w-full max-w-4xl mb-10">
//         <h2 className="text-xl font-semibold text-textLight mb-4 text-center">Select Language</h2>
//         <div className="grid grid-cols-2 gap-5">
//           {languages.map((lang) => (
//             <LanguageCard
//               key={lang}
//               language={lang}
//               selected={selectedLanguage === lang}
//               onClick={() => setSelectedLanguage(lang)}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Sai Baba Intro Section */}
//         <SaiBabaIntro
//           selectedLanguage={selectedLanguage}
//           selectedGuru={selectedGuru}
//           onAskGuru={handleContinue}
//         />

//       {/* Features — ONLY Ask Guru */}
//       <section className="w-full max-w-5xl mt-10 mb-10">
//         <h2 className="text-xl font-semibold text-textLight mb-4 text-center">Feature</h2>
//         <div className="grid grid-cols-1 gap-6">
//           <div className="p-5 rounded-xl bg-cardDark/80 backdrop-blur-md border border-gray-700
//                           shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
//             <h3 className="text-lg font-semibold text-textLight mb-2">Ask Your Guru</h3>
//             <p className="text-gray-300">Chat with AI-powered spiritual guidance.</p>
//           </div>
//         </div>
//       </section>

//       {/* Bottom Nav */}
//       <nav className="fixed bottom-0 left-0 w-full bg-cardDark/90 backdrop-blur-md border-t border-gray-700 shadow-inner flex justify-around items-center py-2 sm:hidden">
//         {navItems.map((item) => (
//           <a
//             key={item.href}
//             href={item.href}
//             className={`flex flex-col items-center transition ${
//               pathname === item.href ? 'text-gold' : 'text-gray-300 hover:text-white'
//             }`}
//           >
//             <span className="text-2xl">{item.icon}</span>
//             <span className="text-xs mt-1">{item.label}</span>
//           </a>
//         ))}
//       </nav>

//       <footer className="w-full text-center py-6 text-gray-400">
//         © 2025 AI Spiritual Guru • About • Privacy • Help
//       </footer>
//     </div>
//   );
// }

'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SaiBabaIntro from "../components/SaiBabaIntro";
import AppHeader from './Header';  
import HeroIntro from './HeroIntro' ;

const languages = ['English', 'Hindi'];

export default function LanguageGuruSelection() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const selectedGuru = 'Sai Baba';

  const router = useRouter();

  const handleContinue = () => {
    if (!selectedLanguage) {
      alert('Please select a language.');
      return;
    }
    router.push(`/home?lang=${selectedLanguage}&guru=${selectedGuru}`);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start px-4 pt-6 pb-10 overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">

      {/* Background Animated Blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-pink-500 rounded-full opacity-20 animate-pulse-slow blur-3xl"></div>
      <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-yellow-400 rounded-full opacity-15 animate-pulse-slow blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-400 rounded-full opacity-10 animate-pulse-slow blur-3xl"></div>

      {/* Header */}
      <AppHeader />

      {/* Hero Intro Section */}
      <HeroIntro
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        languages={languages}
      />

      {/* Sai Baba Intro Section */}
      <section className="w-full max-w-5xl mt-12">
        <SaiBabaIntro
          selectedLanguage={selectedLanguage}
          selectedGuru={selectedGuru}
          onAskGuru={handleContinue}
        />
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-6 mt-auto text-gray-400">
        © 2025 AI Spiritual Guru • About • Privacy • Help
      </footer>
    </div>
  );
}
