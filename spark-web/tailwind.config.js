/** @type {import('tailwindcss').Config} */
import { COLORS } from './src/colors';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
