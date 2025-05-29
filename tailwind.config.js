/** @type {import('tailwindcss').Config} */
import { COLORS } from './src/colors';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: [
    {
      pattern: /^(gap|gap-x|gap-y)-\d+$/,
    },
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        moveUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 2s ease-in-out forwards',
        moveUpDown: 'moveUpDown 2s infinite ease-in-out',
      },
      fontFamily: {
        suit: ['SUIT', 'sans-serif'],
      },
      boxShadow: {
        'custom-up': '0 -2px 5px rgba(0, 0, 0, 0.10)',
      },
      colors: {
        ...COLORS,
      },
      borderRadius: {
        small: '5px',
        medium: '10px',
        large: '15px',
        extraLarges: '20px',
      },
      fontSize: {
        // Display Fonts
        number: [
          '50pt',
          { lineHeight: '65px', letterSpacing: '-2%', fontWeight: '800' },
        ],
        number2: [
          '32pt',
          { lineHeight: '42px', letterSpacing: '-2%', fontWeight: '800' },
        ],
        'title-eb': [
          '32pt',
          { lineHeight: '42px', letterSpacing: '0%', fontWeight: '800' },
        ],
        'title2-eb': [
          '28pt',
          { lineHeight: '38px', letterSpacing: '0%', fontWeight: '700' },
        ],
        'title2-b': [
          '28pt',
          { lineHeight: '38px', letterSpacing: '0%', fontWeight: '800' },
        ],
        'title3-eb': [
          '24pt',
          { lineHeight: '32px', letterSpacing: '0%', fontWeight: '700' },
        ],
        'title4-eb': [
          '20pt',
          { lineHeight: '28px', letterSpacing: '0%', fontWeight: '700' },
        ],
        'title5-eb': [
          '18pt',
          { lineHeight: '26px', letterSpacing: '0%', fontWeight: '700' },
        ],
        'title5-b': [
          '18pt',
          { lineHeight: '26px', letterSpacing: '0%', fontWeight: '700' },
        ],
        // Body Fonts
        'subtitle-eb': [
          '15pt',
          { lineHeight: '24px', letterSpacing: '0%', fontWeight: '800' },
        ],
        'subtitle-b': [
          '15pt',
          { lineHeight: '24px', letterSpacing: '0%', fontWeight: '700' },
        ],
        'body-m': [
          '15pt',
          { lineHeight: '24px', letterSpacing: '0%', fontWeight: '500' },
        ],
        'body2-eb': [
          '13pt',
          { lineHeight: '18px', letterSpacing: '0%', fontWeight: '800' },
        ],
        'body2-b': [
          '13pt',
          { lineHeight: '18px', letterSpacing: '0%', fontWeight: '700' },
        ],
        'body2-m': [
          '13pt',
          { lineHeight: '18px', letterSpacing: '0%', fontWeight: '500' },
        ],
        // Caption Fonts
        'caption-b': [
          '12pt',
          { lineHeight: '16px', letterSpacing: '0%', fontWeight: '700' },
        ],
        'caption-m': [
          '12pt',
          { lineHeight: '16px', letterSpacing: '0%', fontWeight: '500' },
        ],
        'caption1-m': [
          '11pt',
          { lineHeight: '14px', letterSpacing: '0%', fontWeight: '500' },
        ],
        'caption1-b': [
          '11pt',
          { lineHeight: '14px', letterSpacing: '0%', fontWeight: '700' },
        ],
      },
      dropShadow: {
        'star-1': [
          '0 0 10.363px #fff',
          '0 0 20.726px #fff',
          '0 0 72.54px #4557ff',
          '0 0 145.08px #4557ff',
          '0 0 248.708px #4557ff',
          '0 0 435.239px #4557ff',
        ],
        'star-2': [
          '0 0 10.363px #fff',
          '0 0 20.726px #fff',
          '0 0 72.54px #fff',
          '0 0 145.08px #787cfe',
          '0 0 248.708px #787cfe',
          '0 0 435.239px #787cfe',
        ],
        'star-3': [
          '0 0 20.726px #fff',
          '0 0 10.363px #fff',
          '0 0 72.54px #fff',
          '0 0 145.08px #fbb5f5',
          '0 0 248.708px #fbb5f5',
          '0 0 435.239px #fbb5f5',
        ],
      },
    },
  },
  plugins: [],
};
