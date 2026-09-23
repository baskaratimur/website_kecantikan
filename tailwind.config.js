/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        silk: {
          50: '#FAF9F6',
          100: '#F4F3EF',
          200: '#E6E4DE',
          300: '#D5D3CB',
          400: '#B9B9B7', // Primary custom gray requested by user
          500: '#A3A2A0',
          600: '#7E7D7A',
          700: '#5C5B58',
          800: '#3D3C3A',
          900: '#1C1C1A',
        },
        champagne: {
          50: '#FAF6F0',
          100: '#F4ECE0',
          200: '#E7D7C1',
          300: '#D5BE9E',
          400: '#C5A880',
          500: '#B59466',
          600: '#94754B',
          700: '#715836',
        },
        turmeric: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          600: '#D97706',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px rgba(185, 185, 183, 0.35)',
        'luxury': '0 20px 50px -12px rgba(28, 28, 26, 0.08)',
        'floating': '0 30px 60px -15px rgba(197, 168, 128, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
