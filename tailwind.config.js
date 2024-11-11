/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        source: ["Poppins", "monospace"],
      },
      backgroundImage: {
        'slide1': "url('/src/assets/slide1.jpg')",
        'slide2': "url('/src/assets/slide2.jpg')",
        'slide3': "url('/src/assets/slide3.jpg')",
        'common': "url('/src/assets/commonhd.jpeg')",
      }
    },
  },
  plugins: [],
}

