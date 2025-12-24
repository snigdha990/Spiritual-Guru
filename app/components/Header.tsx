'use client';

import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <header
      className="
        w-full sticky top-0 z-50
        flex items-center justify-between
        px-4 sm:px-8 py-4
        bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/50 to-[#1a1a2e]/80
        backdrop-blur-xl
        border-b border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      "
    >
      {/* LEFT — LOGO + TITLE */}
      <div className="flex items-center gap-4">
        {/* Animated Logo */}
        <img
          src="/mindsetu.svg"
          alt="MindsetU Logo"
          className="
            w-16 h-16 sm:w-20 sm:h-20 
            rounded-full border border-brand-gold/50 
            shadow-glow
            animate-float
          "
        />

        {/* Title + Tagline */}
        <div className="flex flex-col leading-tight">
          <h1
            className="
              text-2xl sm:text-3xl md:text-4xl font-extrabold
              bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400
              bg-clip-text text-transparent
              drop-shadow-md animate-textGradient
            "
          >
            MindsetU
          </h1>
          <span className="text-sm sm:text-base text-yellow-200/80 font-semibold">
            AI Spiritual Guru
          </span>
        </div>
      </div>

      {/* RIGHT — AUTH BUTTONS */}
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton>
            <button
              className="
                px-5 py-2 sm:px-6 sm:py-2.5
                rounded-full font-semibold text-black
                bg-gradient-to-r from-yellow-300 to-yellow-500
                shadow-lg shadow-yellow-400/30
                hover:scale-105 active:scale-95
                transition-all duration-300 
              "
            >
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "shadow-glow hover:scale-105 transition-transform"
              }
            }}
          />
        </SignedIn>
      </div>
    </header>
  );
}
