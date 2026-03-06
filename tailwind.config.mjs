/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'Arial', 'sans-serif'],
        heading: ['Suez One', 'David', 'serif'],
      },
      colors: {
        brand: {
          50: '#FEF7F0',
          100: '#FDEBD8',
          200: '#FAD3AE',
          300: '#F2AD72',
          400: '#E18A42',
          500: '#C76A28',
          600: '#A75521',
          700: '#87431A',
          800: '#693314',
          900: '#4B240E',
        },
        fresh: {
          500: '#3A7C52',
          600: '#2D6342',
        },
        dark: '#2C1810',
        surface: '#FBF5EF',
        border: '#E5D5C5',
        accent: '#C76A28',
        muted: '#7C6B5D',
      },
    },
  },
  plugins: [],
};
