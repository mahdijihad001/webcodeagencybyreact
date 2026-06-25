import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily : {
        sans: ['Inter', 'system-ui', 'Arial', 'sans-serif'],
        roboto : ["Roboto", "serif"]
      }
      ,
      colors : {
        praimary : "#0F62FE",
        colorBg : "#F2F4F8",
        textColor : "#ffffff"

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};