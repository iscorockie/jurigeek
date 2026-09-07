import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Near-black surfaces for the dark glassmorphism canvas
        brand: {
          50: "#0a0a0a",
          100: "#0d0d0d",
          200: "#111111",
          300: "#161616",
          400: "#1c1c1c",
        },
        // Legacy "purple" tokens remapped to the orange identity ramp
        // (deep ember at the dark end, hot orange at the bright end)
        purple: {
          300: "#ffb266",
          400: "#ff8c1a",
          500: "#ff7a1a",
          600: "#ff6a00",
          700: "#f95d00",
          800: "#d14a00",
          900: "#2a0e00",
          950: "#1a0800",
        },
        // Orange, the dominant accent
        orange: {
          100: "#ffedd5",
          200: "#ffd9b3",
          300: "#ffb266",
          400: "#ff8c1a",
          500: "#ff6a00",
          600: "#ff3d00",
        },
        // Ink — off-white headlines, muted grey body
        ink: {
          DEFAULT: "#f5f5f5",
          soft: "#a3a3a3",
        },
        // Aliases for sections that reference old names — all warm now
        cream: {
          50: "#f5f5f5",
          100: "#ececec",
          200: "#d4d4d4",
          300: "#a3a3a3",
        },
        leaf: {
          400: "#ff8c1a",
          500: "#ff6a00",
          700: "#f95d00",
          800: "#d14a00",
          900: "#2a0e00",
          950: "#1a0800",
        },
        lime: {
          100: "#ffedd5",
          200: "#ffd9b3",
          300: "#ffb266",
          400: "#ff8c1a",
          500: "#ff6a00",
          600: "#ff3d00",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        nexa: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 24px 60px -24px rgba(0, 0, 0, 0.7)",
        pill: "0 10px 30px -12px rgba(0, 0, 0, 0.6)",
        glow: "0 0 50px -10px rgba(255, 106, 0, 0.45)",
        "glow-orange": "0 0 50px -10px rgba(255, 106, 0, 0.55)",
        "glow-soft": "0 0 30px -8px rgba(255, 106, 0, 0.3)",
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
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        floatSlow: "floatSlow 18s ease-in-out infinite",
        blink: "blink 2.4s ease-in-out infinite",
        rise: "rise 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
