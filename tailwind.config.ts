import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color: {
          primary: "var(--primary-color)",
          secondary: "var(--secondary-color)"
        },
        accent: {
          accent1: "var(--accent1)",
          accent2: "var(--accent2)"
        },
        gradient: {
          start: "var(--gradient-start)",
          end: "var(--gradient-end)"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
