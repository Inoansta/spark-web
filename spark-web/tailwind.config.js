/** @type {import('tailwindcss').Config} */
import {colors} from "./src/colors"

export default {
  content: [ "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      colors:{
        ...colors
      },
      borderRadius:{
          'small': "5px",
          'medium': "10px",
          'large': "15px",
          'extraLarges': "20px",
      },
      fontSize: {
        // Display Fonts
        'number': ['50pt', { lineHeight: '65px', letterSpacing: '-2%', fontWeight: '' }],
        'number2': ['32pt', { lineHeight: '42px', letterSpacing: '-2%', fontWeight: '' }],
        'title-eb': ['32pt', { lineHeight: '42px', letterSpacing: '0%', fontWeight: '' }],
        'title2-eb': ['28pt', { lineHeight: '38px', letterSpacing: '0%', fontWeight: '' }],
        'title2-b': ['28pt', { lineHeight: '38px', letterSpacing: '0%', fontWeight: '' }],
        'title3-eb': ['24pt', { lineHeight: '32px', letterSpacing: '0%', fontWeight: '' }],
        'title4-eb': ['20pt', { lineHeight: '28px', letterSpacing: '0%', fontWeight: '' }],
        'title5-eb': ['18pt', { lineHeight: '26px', letterSpacing: '0%', fontWeight: '' }],
        'title5-b': ['18pt', { lineHeight: '26px', letterSpacing: '0%', fontWeight: '' }],
        // Body Fonts
        'subtitle-eb': ['16pt', { lineHeight: '24px', letterSpacing: '0%', fontWeight: '' }],
        'subtitle-b': ['16pt', { lineHeight: '24px', letterSpacing: '0%', fontWeight: '' }],
        'body-m': ['15pt', { lineHeight: '24px', letterSpacing: '0%', fontWeight: '' }],
        'body2-eb': ['14pt', { lineHeight: '18px', letterSpacing: '0%', fontWeight: '' }],
        'body2-b': ['14pt', { lineHeight: '18px', letterSpacing: '0%', fontWeight: '' }],
        'body2-m': ['14pt', { lineHeight: '18px', letterSpacing: '0%', fontWeight: '' }],
        // Caption Fonts
        'caption-b': ['13pt', { lineHeight: '16px', letterSpacing: '0%', fontWeight: '' }],
        'caption-m': ['13pt', { lineHeight: '16px', letterSpacing: '0%', fontWeight: '' }],
        'caption2-m': ['12pt', { lineHeight: '16px', letterSpacing: '0%', fontWeight: '' }],
        'caption3-b': ['11pt', { lineHeight: '14px', letterSpacing: '0%', fontWeight: '' }],
        'caption3-m': ['11pt', { lineHeight: '14px', letterSpacing: '0%', fontWeight: '' }],
      }
    },
  },
  plugins: [],
}