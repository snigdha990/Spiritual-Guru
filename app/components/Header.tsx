'use client';

import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <header
      className="
        sticky top-0 z-50 w-full
        flex items-center justify-between
        px-4 sm:px-8 py-4
        backdrop-blur-xl
        bg-gradient-to-b from-black/70 via-[#0a0a1f]/60 to-[#1a1a2e]/80
        border-b border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      "
    >
      {/* LEFT — BRAND */}
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
          <Image
            src="/mindsetu.svg"
            alt="MindsetU Logo"
            fill
            priority
            className="
              rounded-full
              border border-yellow-400/40
              shadow-glow
              animate-float
            "
          />
        </div>

        <div className="flex flex-col leading-tight">
          <h1
            className="
              text-2xl sm:text-3xl md:text-4xl font-extrabold
              bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300
              bg-clip-text text-transparent
              drop-shadow-sm
              animate-textGradient
            "
          >
            MindsetU
          </h1>
          <span className="text-sm sm:text-base text-yellow-200/80 font-medium">
            AI Spiritual Guru
          </span>
        </div>
      </div>

      {/* RIGHT — AUTH */}
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton>
            <button
              aria-label="Sign in"
              className="
                px-5 py-2 sm:px-6 sm:py-2.5
                rounded-full font-semibold text-black
                bg-gradient-to-r from-yellow-300 to-pink-400
                shadow-lg shadow-yellow-400/30
                transition-transform duration-200
                hover:scale-105 active:scale-95
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
                avatarBox:
                  'shadow-glow transition-transform hover:scale-105',
              },
            }}
          />
        </SignedIn>
      </div>
    </header>
  );
}
