module.exports = {
  theme: {
    extend: {
      colors: {
        bgDark: '#151823',
        cardDark: '#1A1C29',
        goldPrimary: '#F5C542',
        goldAccent: '#E3A857',
        textPrimary: '#FFFFFF',
        textSecondary: '#C7C9D1',
        inputBorder: '#2C2F40',
      },
      keyframes: {
        popUpDown: {
          '0%,100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.02)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 5px #FFD700, 0 0 10px #FFA500', opacity: '0.7' },
          '50%': { textShadow: '0 0 20px #FFD700, 0 0 30px #FFA500', opacity: '1' },
        },
      },
      animation: {
        popUpDown: 'popUpDown 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        glowPulse: 'glowPulse 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
      },
    },
  },
};
