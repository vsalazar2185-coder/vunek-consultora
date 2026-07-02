import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        vesp: {
          navy: "#0E1D2F",
          navyDeep: "#081525",
          copper: "#B87333",
          green: "#3E4E3A",
          mist: "#BFC2C7",
          ink: "#111827"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(14, 29, 47, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
