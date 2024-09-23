/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        yellowgreen: "#92c557",
        dimgray: "#5b5b5b",
        steelblue: "#1f6da7",
        cornflowerblue: "#a79ff9",
        khaki: "#f0dd91",
        midnightblue: "#292175",
        gray: {
          100: "#80858b",
          200: "#2a2b2d",
        },
        palegoldenrod: "#d7fbac",
        lightblue: "#abdceb",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        abeezee: "ABeeZee",
        "dm-sans": "'DM Sans'",
        inherit: "inherit",
      },
      borderRadius: {
        "15xl": "34px",
        "21xl": "40px",
        "11xl": "30px",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      "21xl": "40px",
      xl: "20px",
      "11xl": "30px",
      xs: "12px",
      mini: "15px",
      mid: "17px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
