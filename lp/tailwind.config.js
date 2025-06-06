/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        "slide-left-right": "slideLeftRight 10s ease-in-out infinite", // Animation name + timing
        slide: "slide 10s linear infinite",
      },
      keyframes: {
        slideLeftRight: {
          "0%": {
            transform: "translateX(-100%)", // Start from left
          },
          "50%": {
            transform: "translateX(0)", // Middle (original position)
          },
          "100%": {
            transform: "translateX(100%)", // Move to right
          },
        },
      },
    },
  },
};
