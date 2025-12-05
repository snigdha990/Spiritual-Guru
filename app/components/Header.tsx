'use client';

import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <header
      className="w-full flex items-center justify-between
                 px-4 sm:px-6 py-3 sm:py-4 mb-10
                 bg-cardDark/70 backdrop-blur-md
                 border-b border-gray-600 rounded-b-xl shadow-md"
    >
      {/* LEFT — Logo + Title */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full animate-pulse-slow"
        />

        <h1
          className="text-xl sm:text-2xl md:text-3xl font-bold
                     bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400
                     bg-clip-text text-transparent animate-textGradient"
        >
          AI Spiritual Guru
        </h1>
      </div>

      {/* RIGHT — Auth Buttons */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <SignedOut>
          <SignInButton>
            <button
              className="px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-3
                         bg-gold text-black rounded-full font-semibold text-sm sm:text-base md:text-lg
                         hover:scale-105 hover:shadow-lg transition-transform duration-200
                         relative before:absolute before:inset-0 before:rounded-full
                         before:bg-gradient-to-r before:from-yellow-300 before:via-yellow-400 before:to-yellow-300
                         before:opacity-50 before:blur-xl before:animate-pulse before:-z-10"
            >
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </header>
  );
}
