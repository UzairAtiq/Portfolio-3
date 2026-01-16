/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a192f',
        'bg-secondary': '#112240',
        'bg-tertiary': '#233554',
        'accent-coral': '#ff6b6b',
        'accent-coral-dark': '#ff5252',
        'text-primary': '#ffffff',
        'text-secondary': '#8892b0',
        'text-muted': '#495670',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fadeIn': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s infinite',
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
      },
      maxWidth: {
        'container': '1400px',
      },
    },
  },
  plugins: [],
}
