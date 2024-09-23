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
        gray: {
          100: "#80858b",
          200: "#2a2b2d",
          300: "rgba(255, 255, 255, 0.5)",
          400: "rgba(255, 255, 255, 0.8)",
        },
        yellowgreen: "#92c557",
        olivedrab: "#5e9124",
        black: "#000",
        cornflowerblue: "#a79ff9",
        mediumpurple: "#756bc7",
        midnightblue: "#292175",
        khaki: "#f0dd91",
        darkkhaki: "#d6c478",
        steelblue: {
          100: "#4594cf",
          200: "#1f6da7",
        },
        dimgray: "#5b5b5b",
        lightblue: "#abdceb",
        palegoldenrod: "#d7fbac",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        "dm-sans": "'DM Sans'",
        abeezee: "ABeeZee",
        inherit: "inherit",
      },
      borderRadius: {
        "11xl": "30px",
        "15xl": "34px",
        "56xl": "75px",
        "6xl": "25px",
        "21xl": "40px",
        "18xl": "37px",
        lg: "18px",
      },
    },
    fontSize: {
      mini: "15px",
      mid: "17px",
      xs: "12px",
      lg: "18px",
      xl: "20px",
      base: "16px",
      "11xl": "30px",
      "5xl": "24px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      sm: "14px",
      "6xl": "25px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "21xl": "40px",
      "26xl": "45px",
      "8xl": "27px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
