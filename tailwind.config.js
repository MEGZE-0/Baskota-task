/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: { max: '639px' }, // For screens smaller than 640px
      sm: '640px',          // From 640px and up
      md: '768px',          // From 768px and up
      lg: '1024px',         // From 1024px and up
      xl: '1280px',         // From 1280px and up
    },
  },
  plugins: [],
};
