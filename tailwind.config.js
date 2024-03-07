/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F96900",
        beige: "#DCE2C8",
        lightGray: "#DDDDDD",
        mediumGray: "#BBBBBB",
        darkGray: "#A3A3A3",
        blue: "#65DEF1",
        electricBlue: "#2986CC",
        darkBlueGray: "#28425a",
        veryDarkBlue: '#091a31',
        cancelRed: '#e62719',
      },
      spacing: {
        "25P": "25%",
        "30P": "30%",
        "33P": "33%",
        "60P": "60%",
        "75P": "75%",
        150: "150px",
        500: "500px",
        600: "600px",
        650: "650px",
        700: "700px",
        750: "750px",
        800: "800px",
      },
    },
  },
  plugins: [],
};
