/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Use class strategy for dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],            // Body text
        heading: ['Playfair Display', 'serif'],   // Hero & section titles
        bungeespice: ['"Bungee Spice"', 'cursive'],       // <-- Add this line
      },
      keyframes: {
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeSlideUp: 'fadeSlideUp 0.8s ease-out forwards',
        slowSpin: 'slowSpin 8s linear infinite',
      },
      spacing: {
        '24': '6rem',
      },
      colors: {
        indigo: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
        gray: {
          800: '#1f2937',
          900: '#111827',
        },
      },
      backgroundColor: {
        'black-90': 'rgba(0, 0, 0, 0.9)',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  plugins: [],
};
