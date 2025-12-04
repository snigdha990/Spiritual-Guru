/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',      // Scan your app folder for classes
    './components/**/*.{js,ts,jsx,tsx}', // Scan components folder as well
  ],
  theme: {
    extend: {
      colors: {
        cardDark: '#3B3F6B',     // Dark bluish card background
        gold: '#FFB74D',         // Gold highlight color
        textLight: '#F1F1F1',    // Light text color for contrast
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #1e3a8a, #5b21b6, #1e40af)', // Indigo/purple gradient base
      },
    },
  },
  plugins: [],
};
