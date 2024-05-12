/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'sky': "url('/src/assets/images/bg.jpg')",
        'night': "url('/src/assets/images/darkbg.jpg')"
      },
      backgroundColor: {
        'dblack': "#1f1f1f",
        'dgray': "#959595",
        'dhoverblack': "#2d2d2d",
      },
      fill: {
        'dgray': "#959595",
      },
      textColor:{
        'dlight': "#e2e2e2",
        'dgray': "#959595",
        'dpurple': "#bb86fC",
      },
    },
  },
  plugins: [require('daisyui'), require('@headlessui/tailwindcss')],
};
