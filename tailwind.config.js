/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "code-pattern":
          "https://img.freepik.com/free-vector/matrix-style-binary-code-digital-background-with-falling-numbers_1017-25336.jpg?w=1380&t=st=1664657744~exp=1664658344~hmac=03f27bad45cc2ae4c39af30f4bd3a7a1667cab199ff423aea4ad1b778eaa4e6b",
      },
      fontFamily: {
        oswald: ["Oswald", " sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        Noto: ["Noto Sans Mono", " monospace"],
      },
    },
  },
  plugins: [],
};
