import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        ink: {
          950: "#06070A",
          900: "#0B0C10",
          850: "#0F1015",
          800: "#15161C",
          700: "#22232B",
          600: "#2C2D36",
        },
        accent: {
          50: "#FFF1EA",
          100: "#FFD9C4",
          200: "#FFB58A",
          300: "#FF9259",
          400: "#FF7E3D",
          500: "#FF6B35",
          600: "#E5551E",
        },
      },
      animation: {
        "pulse-slow": "pulseSlow 2.4s ease-in-out infinite",
        "ping-slow": "ping 2.2s cubic-bezier(0,0,.2,1) infinite",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: ".55", transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
