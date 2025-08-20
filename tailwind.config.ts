import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#f5c2d3', // Light pink for accents
          DEFAULT: '#ff6f91', // Main pink color
          dark: '#c72c4d', // Dark pink for deeper accents
        },
        black: {
          DEFAULT: '#000000', // Main black color
          light: '#1a1a1a', // Light black for backgrounds
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'], // Elegant font
      },
      spacing: {
        '128': '32rem', // Custom spacing for layout
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // Add active variant for background color
    },
  },
  plugins: [],
};

export default config;