/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        'homemade-apple': ['Homemade Apple', 'cursive'],
      },
      colors: {
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        lavender: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        cream: {
          50: '#fef9c3',
          100: '#fef08a',
          200: '#fde047',
          300: '#facc15',
          400: '#eab308',
          500: '#ca8a04',
          600: '#a16207',
          700: '#854d0e',
          800: '#713f12',
          900: '#422006',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 7s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in-out': 'fadeInOut 3s ease-in-out',
        'rise-up': 'riseUp 0.5s ease-out forwards',
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
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInOut: {
          '0%': { opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        riseUp: {
          '0%': { 
            transform: 'translate(-50%, 0)',
            opacity: '0',
          },
          '100%': { 
            transform: 'translate(-50%, -100%)',
            opacity: '1',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dusky': 'linear-gradient(135deg, #ffd6e0 0%, #ffb6c1 50%, #d4838f 100%)',
        'gradient-pink-lavender': 'linear-gradient(135deg, #fdf2f8 0%, #f5f3ff 100%)',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: 'bold',
              fontSize: '2.5rem',
              marginBottom: '1rem',
            },
            h2: {
              fontWeight: 'bold',
              fontSize: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              fontWeight: 'bold',
              fontSize: '1.75rem',
              marginBottom: '1rem',
            },
          },
        },
      },
    },
  },
  plugins: [],
}