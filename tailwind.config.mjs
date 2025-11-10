/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f6ff',
          100: '#dfe8ff',
          200: '#b5c8ff',
          300: '#8aa6ff',
          400: '#4c74ff',
          500: '#264de4',
          600: '#1d3cb6',
          700: '#162e8a',
          800: '#0f205f',
          900: '#09143a'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        elevated: '0 20px 45px -20px rgba(15, 32, 95, 0.35)'
      }
    }
  },
  plugins: []
};
