import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark futuristic surfaces (was light "brand" lavender), used as section/page backgrounds
        brand: {
          50: "#06030d",
          100: "#0b0716",
          200: "#130c23",
          300: "#1c1332",
          400: "#271b45",
        },
        // Purple, primary brand accent + dark feature bands
        purple: {
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
        // Orange, accent CTAs, prices, highlights
        orange: {
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
        // Text (light on dark), was dark purple ink
        ink: {
          DEFAULT: "#f4f1ff",
          soft: "#b3a7d6",
        },
        // Aliases for sections that reference old names
        cream: {
          50: "#f4f1ff",
          100: "#ece6ff",
          200: "#d8cef5",
          300: "#b8abd9",
        },
        leaf: {
          400: "#a78bfa",
          500: "#8b5cf6",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#160a33",
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
        card: "0 24px 60px -24px rgba(0, 0, 0, 0.7)",
        pill: "0 10px 30px -12px rgba(0, 0, 0, 0.6)",
        glow: "0 0 50px -10px rgba(139, 92, 246, 0.55)",
        "glow-orange": "0 0 50px -10px rgba(249, 115, 22, 0.5)",
        "glow-soft": "0 0 30px -8px rgba(139, 92, 246, 0.35)",
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
