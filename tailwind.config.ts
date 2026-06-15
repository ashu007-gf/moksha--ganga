import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: "#fff7ed",
          100: "#ffedd5",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c"
        },
        river: {
          50: "#ecfeff",
          100: "#cffafe",
          500: "#0891b2",
          700: "#0e7490",
          900: "#164e63"
        },
        gold: "#d6a532",
        cream: "#fffaf0"
      },
      boxShadow: {
        glow: "0 20px 60px rgba(249, 115, 22, 0.18)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans Devanagari",
          "Nirmala UI",
          "Mangal",
          "system-ui",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
