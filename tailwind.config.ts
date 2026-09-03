import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fcf9f3",
          100: "#f7f1e6",
          200: "#efe5d3",
          300: "#e3d2b8",
        },
        leaf: {
          400: "#3a7a4c",
          700: "#1c4a2b",
          800: "#143820",
          900: "#0e2b18",
          950: "#082013",
        },
        lime: {
          200: "#f0ffad",
          300: "#e8fb8a",
          400: "#d7f64b",
          500: "#c2ec26",
          600: "#a6d514",
        },
        ink: {
          DEFAULT: "#13231a",
          soft: "#3a4a40",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 24px 60px -24px rgba(20, 40, 28, 0.25)",
        pill: "0 10px 30px -12px rgba(20, 56, 33, 0.35)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
