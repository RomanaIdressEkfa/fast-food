/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#570DF8",
          "secondary": "#c92a2a",
          "accent": "#0C111D",
          "neutral": "#0F1729",
          "base-100": "#0F1729",
          "info": "#0CA6E9",
          "success": "#2BD4BD",
          "warning": "#F4C152",
          "error": "#DE7D8C",
        },

      },
      {
        dark: {

          "primary": "#570DF8",

          "secondary": "#c92a2a",

          "accent": "#212529",

          "neutral": "#0F1729",

          "base-100": "#0F1729",

          "info": "#0CA6E9",

          "success": "#2BD4BD",

          "warning": "#F4C152",

          "error": "#DE7D8C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
