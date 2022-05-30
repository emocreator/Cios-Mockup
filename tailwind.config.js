module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      error: "#EE1B1B",
      white: "#FBFEF9",
      black: "#191923",
      grey: "#24242E",
      "cream-grey": "#2F2F38",
      "cream-white": "#FBFEF9",
    },
    fontSize: {
      md: ["16px", { lineHeight: "21px" }],
      lg: ["16px", { lineHeight: "36px" }],
      xl: ["18px", { lineHeight: "23px" }],
      "1xl": ["18px", { lineHeight: "23px" }],
      "2xl": ["28px", { lineHeight: "34px" }],
    },
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
