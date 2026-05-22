import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sketch: {
          50: '#FAFAF8',
          100: '#F5F5F2',
          200: '#E8E8E3',
          300: '#D9D9D1',
          400: '#C4C4B8',
          500: '#A9A99D',
          600: '#8B8B7E',
          700: '#6B6B5F',
          800: '#4A4A40',
          900: '#2B2B23',
          950: '#1A1A14',
        },
      },
      borderRadius: {
        hand: '3px',
      },
      borderWidth: {
        hand: '2.5px',
      },
      boxShadow: {
        sketch: '2px 2px 0 rgba(0, 0, 0, 0.15)',
        'sketch-md': '3px 3px 0 rgba(0, 0, 0, 0.15)',
        'sketch-lg': '4px 4px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
