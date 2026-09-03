import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // White / light surface (was "cream") — subtle lavender-white so white cards stay distinct
        brand: {
          50: "#ffffff",
          100: "#faf9ff",
          200: "#f1eefc",
          300: "#e6e1f8",
        },
        // Purple (was "leaf") — dark feature bands, footer, primary dark buttons
        purple: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
        // Orange (was "lime") — accent CTAs, prices, highlights
        orange: {
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
        // Text (dark purple)
        ink: {
          DEFAULT: "#2e1065",
          soft: "#5b537f",
        },
        // Backwards-compatible aliases so existing class names keep working
        cream: {
          50: "#ffffff",
          100: "#faf9ff",
          200: "#f1eefc",
          300: "#e6e1f8",
        },
        leaf: {
          400: "#a78bfa",
          500: "#8b5cf6",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
        lime: {
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        nexa: ["Nexa", "Nexa Bold", "Nexa Light", "Nexa Book", "Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 24px 60px -24px rgba(46, 16, 101, 0.18)",
        pill: "0 10px 30px -12px rgba(46, 16, 101, 0.25)",
        glow: "0 0 40px -10px rgba(124, 58, 237, 0.5)",
        "glow-orange": "0 0 40px -10px rgba(249, 115, 22, 0.5)",
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
        floatSlow: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(20px,-30px) scale(1.08)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        floatSlow: "floatSlow 18s ease-in-out infinite",
        blink: "blink 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
