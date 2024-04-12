/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "prod-bg": "url('/src/assets/bg.jpg')",
        
      },
      // prodImages: {
      //   "battery": "url('/src/assets/prodimgs/Battery.png')",
      //   "colors": "url('/src/assets/prodimgs/colors.png')",
      //   "led": "url('/src/assets/prodimgs/LED.png')",
      //   "mag": "url('/src/assets/prodimgs/MagSafe.png')",
      //   "open": "url('/src/assets/prodimgs/Open Source.png')",
      //   "safety": "url('/src/assets/prodimgs/Safety.png')",
      //   "sos": "url('/src/assets/prodimgs/SOS.jpg')",
      //   "usb": "url('/src/assets/prodimgs/USB.png')",
      // },
    },
  },
  plugins: [],
};