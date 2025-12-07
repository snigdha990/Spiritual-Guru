// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         bgDark: '#151823',
//         cardDark: '#1A1C29',
//         goldPrimary: '#F5C542',
//         goldAccent: '#E3A857',
//         textPrimary: '#FFFFFF',
//         textSecondary: '#C7C9D1',
//         inputBorder: '#2C2F40',
//       },
//       keyframes: {
//         popUpDown: {
//           '0%,100%': { transform: 'translateY(0px) scale(1)' },
//           '50%': { transform: 'translateY(-10px) scale(1.02)' },
//         },
//         float: {
//           '0%,100%': { transform: 'translateY(0px)' },
//           '50%': { transform: 'translateY(-15px)' },
//         },
//         glowPulse: {
//           '0%, 100%': { textShadow: '0 0 5px #FFD700, 0 0 10px #FFA500', opacity: '0.7' },
//           '50%': { textShadow: '0 0 20px #FFD700, 0 0 30px #FFA500', opacity: '1' },
//         },
//       },
//       animation: {
//         popUpDown: 'popUpDown 3s ease-in-out infinite',
//         'float-slow': 'float 6s ease-in-out infinite',
//         glowPulse: 'glowPulse 2s ease-in-out infinite alternate',
//         'pulse-slow': 'pulse 6s ease-in-out infinite',
//       },
//     },
//   },
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  darkMode: 'media', // respects system dark mode
  theme: {
    extend: {
      colors: {
        mystical: {
          dark: '#0b0b15',
          mid: '#111322',
          light: '#1b1b2f',
        },
        gradientStart: '#ffcc00',
        gradientMiddle: '#ff77ff',
        gradientEnd: '#7700ff',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      keyframes: {
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        pulseSlow: {
          '0%,100%': { transform: 'scale(1)', opacity: '0.2' },
          '50%': { transform: 'scale(1.05)', opacity: '0.3' },
        },
        floatSlow: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        textGlowSlow: {
          '0%,100%': { textShadow: '0 0 10px #fff, 0 0 20px #ff9' },
          '50%': { textShadow: '0 0 20px #fff, 0 0 40px #ff9' },
        },
        fadeInSlow: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        orbFloat: {
          '0%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
          '100%': { transform: 'translateY(0px) scale(1)' },
        },
        orbFloat2: {
          '0%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(20px) scale(1.1)' },
          '100%': { transform: 'translateY(0px) scale(1)' },
        },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 10px rgba(255,200,150,0.3), 0 0 20px rgba(255,150,200,0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(255,200,150,0.6), 0 0 40px rgba(255,150,200,0.6)' },
        },
      },
      animation: {
        gradientX: 'gradientX 15s ease infinite',
        pulseSlow: 'pulseSlow 6s ease-in-out infinite',
        floatSlow: 'floatSlow 4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        textGlowSlow: 'textGlowSlow 3s ease-in-out infinite',
        fadeInSlow: 'fadeInSlow 0.8s ease-out forwards',
        orbFloat: 'orbFloat 8s ease-in-out infinite',
        orbFloat2: 'orbFloat2 10s ease-in-out infinite',
        glowPulse: 'glowPulse 4s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
