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
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-5px) scale(1.03)" }
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(12px) scale(0.94)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" }
        },
        presenter: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-4px) rotate(-7deg)" },
          "50%": { transform: "translateY(-6px) rotate(0deg)" },
          "75%": { transform: "translateY(-4px) rotate(7deg)" }
        }
      },
      animation: {
        breathe: "breathe 4.5s ease-in-out infinite",
        "avatar-hero": "fade-in-up 700ms ease-out both, breathe 4.5s ease-in-out 700ms infinite",
        presenter: "presenter 3.2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
