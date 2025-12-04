// 'use client';

// import React, { useState } from 'react';
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
// import { useRouter, usePathname } from 'next/navigation';

// const navItems = [
//   { href: '/meditation', icon: '🧘‍♂️', label: 'Meditation' },
//   { href: '/mantras', icon: '🔔', label: 'Daily Mantra' },
//   { href: '/chat', icon: '🕉️', label: 'Ask Guru' },
// ];

// interface Guru {
//   name: string;
//   image: string;
// }

// interface LanguageCardProps {
//   language: string;
//   selected: boolean;
//   onClick: () => void;
// }

// interface GuruCardProps {
//   name: string;
//   image: string;
//   selected: boolean;
//   onClick: () => void;
// }

// // Language Card
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

// // Guru Card
// function GuruCard({ name, image, selected, onClick }: GuruCardProps) {
//   return (
//     <div
//       onClick={onClick}
//       className={`cursor-pointer p-4 rounded-xl border shadow-md flex flex-col items-center justify-center transition transform duration-300 ease-in-out
//         ${selected 
//           ? 'border-gold bg-gold/20 shadow-lg scale-105' 
//           : 'border-gray-600 bg-cardDark hover:bg-cardDark/90 hover:-translate-y-1 hover:shadow-xl hover:border-yellow-400'}`}
//     >
//       <img
//         src={image}
//         alt={name}
//         className="w-24 h-24 rounded-full object-cover mb-3 transition-transform duration-300 ease-in-out hover:scale-105"
//       />
//       <p className="text-textLight font-semibold text-center">{name}</p>
//     </div>
//   );
// }

// // Languages & Gurus
// const languages = ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada'];
// const gurus: Guru[] = [
//   { name: 'S.N. Goenka', image: '/gurus/goenka.jpg' },
//   { name: 'Krishna', image: '/gurus/krishna.jpg' },
//   { name: 'Shiva', image: '/gurus/shiva.jpg' },
//   { name: 'Ganesha', image: '/gurus/ganesha.jpg' },
//   { name: 'Sai Baba', image: '/gurus/saibaba.jpg' },
// ];

// // Daily quotes
// const dailyQuotes = [
//   "Peace comes from within. Do not seek it without.",
//   "Meditation is the journey from sound to silence.",
//   "Happiness is not something ready-made. It comes from your own actions.",
//   "The mind is everything. What you think you become."
// ];

// const features = [
//   { title: 'Meditation Timer', description: 'Focus and relax with guided meditation.' },
//   { title: 'Daily Mantra', description: 'Receive a new mantra every day.' },
//   { title: 'Ask Your Guru', description: 'Chat with AI-powered spiritual guidance.' }
// ];

// export default function LanguageGuruSelection() {
//   const [selectedLanguage, setSelectedLanguage] = useState<string>('');
//   const [selectedGuru, setSelectedGuru] = useState<string>('');
//   const randomQuote = dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)];
//   const router = useRouter();
//   const pathname = usePathname();

//   const handleContinue = () => {
//     if (!selectedLanguage || !selectedGuru) {
//       alert('Please select both a language and a guru to continue.');
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

//       {/* Header: Logo + App Name + Login/Logout */}
//       <header className="w-full flex items-center justify-between px-6 pt-2 pb-4 mb-8
//                          bg-cardDark/70 backdrop-blur-md border-b border-gray-600 rounded-b-xl shadow-md">
//         <div className="flex items-center space-x-3">
//           <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full animate-pulse-slow" />
//           <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-textGradient">
//             AI Spiritual Guru
//           </h1>
//         </div>

//         <div className="flex items-center space-x-4">
//           <SignedOut>
//             <SignInButton>
//               <button className="px-5 py-2 md:px-6 md:py-3 bg-gold text-black rounded-full font-semibold text-lg
//                                  hover:scale-105 hover:shadow-lg transition-transform duration-200
//                                  relative before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r
//                                  before:from-yellow-300 before:via-yellow-400 before:to-yellow-300
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

//       {/* Heading + Caption */}
//       <div className="text-center space-y-2 mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold
//                        bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400
//                        bg-clip-text text-transparent animate-textGradient">
//           Welcome to AI Spiritual Guru
//         </h2>
//         <p className="text-lg md:text-xl text-transparent bg-clip-text
//                       bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300
//                       animate-textGradientSlow opacity-90">
//           Your personal spiritual companion
//         </p>
//       </div>

//       {/* Daily Quote */}
//       <section className="mb-10 text-center px-4">
//         <p className="text-lg md:text-xl font-semibold text-transparent bg-clip-text
//                       bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 animate-textGradientSlow">
//           "{randomQuote}"
//         </p>
//       </section>

//       {/* Language Selection */}
//       <section className="w-full max-w-4xl mb-10">
//         <h2 className="text-xl font-semibold text-textLight mb-4 text-center">Select Language</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
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

//       {/* Guru Selection */}
//       <section className="w-full max-w-5xl mb-10">
//         <h2 className="text-xl font-semibold text-textLight mb-4 text-center">Select Guru / Deity</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
//           {gurus.map((guru) => (
//             <GuruCard
//               key={guru.name}
//               name={guru.name}
//               image={guru.image}
//               selected={selectedGuru === guru.name}
//               onClick={() => setSelectedGuru(guru.name)}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Continue Button */}
//       <button
//         onClick={handleContinue}
//         className="relative px-12 py-4 rounded-full
//                   bg-cardDark/80 backdrop-blur-md border border-gray-600
//                   text-gold font-semibold text-lg md:text-xl
//                   overflow-hidden
//                   hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out
//                   before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-400 before:via-yellow-300 before:to-yellow-400
//                   before:opacity-20 before:blur-xl before:animate-pulse before:-z-10
//                   after:absolute after:top-0 after:left-[-75%] after:w-1/2 after:h-full after:bg-gradient-to-r after:from-white/40 after:via-white/10 after:to-white/40
//                   after:rotate-12 after:transition-all after:duration-1000 hover:after:left-[125%]">
//         Continue
//       </button>

//       {/* Feature Cards */}
//       <section className="w-full max-w-5xl mb-10 pt-10">
//         <h2 className="text-xl font-semibold text-textLight mb-4 text-center">Features</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {features.map((feature, idx) => (
//             <div key={idx} className="p-5 rounded-xl bg-cardDark/80 backdrop-blur-md border border-gray-700
//                                       shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
//               <h3 className="text-lg font-semibold text-textLight mb-2">{feature.title}</h3>
//               <p className="text-gray-300">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Mobile Bottom Nav */}
//       <nav className="fixed bottom-0 left-0 w-full bg-cardDark/90 backdrop-blur-md border-t border-gray-700 shadow-inner flex justify-around items-center py-2 sm:hidden">
//         {navItems.map((item) => (
//           <a
//             key={item.href}
//             href={item.href}
//             aria-label={item.label}
//             className={`flex flex-col items-center transition ${
//               pathname === item.href ? 'text-gold' : 'text-gray-300 hover:text-white'
//             }`}
//           >
//             <span className="text-2xl">{item.icon}</span>
//             <span className="text-xs mt-1">{item.label}</span>
//           </a>
//         ))}
//       </nav>

//       {/* Desktop Bottom Nav */}
//       <nav className="hidden sm:flex fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-cardDark/95 backdrop-blur-md border border-gray-700 shadow-lg rounded-full px-6 py-2 space-x-6">
//         {navItems.map((item) => (
//           <a
//             key={item.href}
//             href={item.href}
//             aria-label={item.label}
//             className={`flex flex-col items-center transition ${
//               pathname === item.href ? 'text-gold' : 'text-gray-300 hover:text-white'
//             }`}
//           >
//             <span className="text-xl">{item.icon}</span>
//             <span className="text-xs mt-0.5">{item.label}</span>
//           </a>
//         ))}
//       </nav>

//       {/* Footer */}
//       <footer className="w-full text-center py-6 text-gray-400">
//         © 2025 AI Spiritual Guru • About • Privacy • Help
//       </footer>
//     </div>
//   );
// }
'use client';

import React, { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { useRouter, usePathname } from 'next/navigation';

const navItems = [
  { href: '/meditation', icon: '🧘‍♂️', label: 'Meditation' },
  { href: '/mantras', icon: '🔔', label: 'Daily Mantra' },
  { href: '/chat', icon: '🕉️', label: 'Ask Guru' },
];

interface Guru {
  name: string;
  image: string;
}

interface LanguageCardProps {
  language: string;
  selected: boolean;
  onClick: () => void;
}

interface GuruCardProps {
  name: string;
  image: string;
  selected: boolean;
  onClick: () => void;
}

// Language Card
function LanguageCard({ language, selected, onClick }: LanguageCardProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-4 rounded-xl border text-center font-medium transition transform duration-300 ease-in-out
        ${selected 
          ? 'border-gold bg-gold/20 shadow-lg scale-105' 
          : 'border-gray-600 bg-cardDark hover:bg-cardDark/90 hover:-translate-y-1 hover:shadow-xl hover:border-yellow-400'}`}
    >
      {language}
    </div>
  );
}

// Guru Card
function GuruCard({ name, image, selected, onClick }: GuruCardProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-4 rounded-xl border shadow-md flex flex-col items-center justify-center transition transform duration-300 ease-in-out
        ${selected 
          ? 'border-gold bg-gold/20 shadow-lg scale-105' 
          : 'border-gray-600 bg-cardDark hover:bg-cardDark/90 hover:-translate-y-1 hover:shadow-xl hover:border-yellow-400'}`}
    >
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-3 transition-transform duration-300 ease-in-out hover:scale-105"
      />
      <p className="text-textLight font-semibold text-center">{name}</p>
    </div>
  );
}

// Languages & Gurus
const languages = ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada'];
const gurus: Guru[] = [
  { name: 'S.N. Goenka', image: '/gurus/goenka.jpg' },
  { name: 'Krishna', image: '/gurus/krishna.jpg' },
  { name: 'Shiva', image: '/gurus/shiva.jpg' },
  { name: 'Ganesha', image: '/gurus/ganesha.jpg' },
  { name: 'Sai Baba', image: '/gurus/saibaba.jpg' },
];

// Daily quotes
const dailyQuotes = [
  "Peace comes from within. Do not seek it without.",
  "Meditation is the journey from sound to silence.",
  "Happiness is not something ready-made. It comes from your own actions.",
  "The mind is everything. What you think you become."
];

// Features
const features = [
  { title: 'Meditation Timer', description: 'Focus and relax with guided meditation.' },
  { title: 'Daily Mantra', description: 'Receive a new mantra every day.' },
  { title: 'Ask Your Guru', description: 'Chat with AI-powered spiritual guidance.' }
];

export default function LanguageGuruSelection() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [selectedGuru, setSelectedGuru] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();

  // Pick daily quote deterministically based on date
  const quoteIndex = new Date().getDate() % dailyQuotes.length;
  const dailyQuote = dailyQuotes[quoteIndex];

  const handleContinue = () => {
    if (!selectedLanguage || !selectedGuru) {
      alert('Please select both a language and a guru to continue.');
      return;
    }
    router.push(`/home?lang=${selectedLanguage}&guru=${selectedGuru}`);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start px-4 pt-4 pb-10 overflow-hidden">

      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 animate-gradient-x"></div>
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-pink-500 rounded-full opacity-20 animate-pulse-slow blur-3xl"></div>
      <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-yellow-400 rounded-full opacity-15 animate-pulse-slow blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-400 rounded-full opacity-10 animate-pulse-slow blur-3xl"></div>

      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 pt-2 pb-4 mb-8
                         bg-cardDark/70 backdrop-blur-md border-b border-gray-600 rounded-b-xl shadow-md">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full animate-pulse-slow" />
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-textGradient">
            AI Spiritual Guru
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton>
              <button className="px-5 py-2 md:px-6 md:py-3 bg-gold text-black rounded-full font-semibold text-lg
                                 hover:scale-105 hover:shadow-lg transition-transform duration-200
                                 relative before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r
                                 before:from-yellow-300 before:via-yellow-400 before:to-yellow-300
                                 before:opacity-50 before:blur-xl before:animate-pulse before:-z-10">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </header>

      {/* Heading + Daily Quote */}
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold
                       bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400
                       bg-clip-text text-transparent animate-textGradient">
          Welcome to AI Spiritual Guru
        </h2>
        <p className="text-lg md:text-xl font-semibold text-transparent bg-clip-text
                      bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 animate-textGradientSlow">
          "{dailyQuote}"
        </p>
      </div>

      {/* Language Selection */}
      <section className="w-full max-w-4xl mb-10">
        <h2 className="text-xl font-semibold text-textLight mb-4 text-center">Select Language</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {languages.map((lang) => (
            <LanguageCard
              key={lang}
              language={lang}
              selected={selectedLanguage === lang}
              onClick={() => setSelectedLanguage(lang)}
            />
          ))}
        </div>
      </section>

      {/* Guru Selection */}
      <section className="w-full max-w-5xl mb-10">
        <h2 className="text-xl font-semibold text-textLight mb-4 text-center">Select Guru / Deity</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {gurus.map((guru) => (
            <GuruCard
              key={guru.name}
              name={guru.name}
              image={guru.image}
              selected={selectedGuru === guru.name}
              onClick={() => setSelectedGuru(guru.name)}
            />
          ))}
        </div>
      </section>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        className="relative px-12 py-4 rounded-full
                  bg-cardDark/80 backdrop-blur-md border border-gray-600
                  text-gold font-semibold text-lg md:text-xl
                  overflow-hidden
                  hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-400 before:via-yellow-300 before:to-yellow-400
                  before:opacity-20 before:blur-xl before:animate-pulse before:-z-10
                  after:absolute after:top-0 after:left-[-75%] after:w-1/2 after:h-full after:bg-gradient-to-r after:from-white/40 after:via-white/10 after:to-white/40
                  after:rotate-12 after:transition-all after:duration-1000 hover:after:left-[125%]">
        Continue
      </button>

      {/* Features */}
      <section className="w-full max-w-5xl mt-10 mb-10">
        <h2 className="text-xl font-semibold text-textLight mb-4 text-center">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-cardDark/80 backdrop-blur-md border border-gray-700
                                      shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-textLight mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full bg-cardDark/90 backdrop-blur-md border-t border-gray-700 shadow-inner flex justify-around items-center py-2 sm:hidden">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-label={item.label}
            className={`flex flex-col items-center transition ${
              pathname === item.href ? 'text-gold' : 'text-gray-300 hover:text-white'
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-xs mt-1">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Desktop Bottom Nav */}
      <nav className="hidden sm:flex fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-cardDark/95 backdrop-blur-md border border-gray-700 shadow-lg rounded-full px-6 py-2 space-x-6">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-label={item.label}
            className={`flex flex-col items-center transition ${
              pathname === item.href ? 'text-gold' : 'text-gray-300 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs mt-0.5">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-gray-400">
        © 2025 AI Spiritual Guru • About • Privacy • Help
      </footer>
    </div>
  );
}
