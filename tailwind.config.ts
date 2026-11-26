import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#17251D",
        gold: "#C5AA75",
        ivory: "#F5F1E8",
        charcoal: "#171817",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: { luxe: "0.22em" },
    },
  },
  plugins: [],
};
export default config;
