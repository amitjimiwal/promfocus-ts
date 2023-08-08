/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgbutton:'#ffffff33',
        loaderbg:'#0000001a',
        modebackground:'#00000026',
        settingscolor:'#EFEFEF'
      }
    },
  },
  plugins: [],
}