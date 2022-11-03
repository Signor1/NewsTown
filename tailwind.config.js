/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        secondary: "#362c2d",
        primary: "#485b63",
        primary2: "#659291",
        litewhite: "#bbe0d9",
        naija: "#7cbd31",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
