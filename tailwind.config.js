/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3F4E4F",
        secondary: "#A27B5C",
        accent: "#DCD7C9",
        base: "#2C3639",
      },
      transitionDuration: {
        2500: "2500ms",
      },
      animation: {
        "bounce-custom": "bounce 3s infinite",
        "slide-from-right": "slideFromRight 300ms ",
        "slide-to-left": "slideToLeft 300ms",
        "fade-in": "fade-in 4s ease-out",
      },
      keyframes: {
        slideFromRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideToLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
