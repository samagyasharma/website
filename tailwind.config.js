/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baby-pink': {
          light: '#ffd6e0',
          DEFAULT: '#ffb6c1',
          dark: '#d4838f',
        },
        'rusty-rose': {
          light: '#d4838f',
          DEFAULT: '#c97c88',
          dark: '#be757f',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 7s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0) scale(1) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) scale(1.05) rotate(-180deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dusky': 'linear-gradient(135deg, #ffd6e0 0%, #ffb6c1 50%, #d4838f 100%)',
      },
      fontFamily: {
        'tenez': ['Tenez', 'serif'],
      },
    },
  },
  plugins: [],
}