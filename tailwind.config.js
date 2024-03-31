/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Poppins",
    },
    colors: {
      primary: "#002964",
      secondary: "#E4E9F2",
      background: "#E8F2FF",
      grey1: "#191919",
      grey2: "#313131",
      grey3: "#B3B3B3",
      grey4: "#E3E5E5",
    },
    extend: {},
  },
  plugins: [],
};
