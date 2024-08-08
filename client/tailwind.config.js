/** @type {import('tailwindcss').Config} */
import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': '640px',
      'md': '860px',
      'lg': '1000px',
      'lg1/2': '1350px',
      'xl': '1680px',
    },
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      maxWidth: {
        '1680': '1680px',
      },
      spacing: {
        '1680': '1680px',
      }
    },
  },
  plugins: [
    aspectRatio,
    forms
  ],
}

