import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0d0d",
        // Overriding default colors with your exact OKLCH values
        orange: {
          500: "oklch(70.5% 0.213 47.604)",
        },
        gray: {
          300: "oklch(87.2% 0.01 258.338)",
          400: "oklch(70.7% 0.022 261.325)",
          800: "oklch(27.8% 0.033 256.848)",
        },
        zinc: {
          400: "oklch(70.5% 0.015 286.067)",
        },
        neutral: {
          300: "oklch(87% 0 0)",
          400: "oklch(70.8% 0 0)",
          500: "oklch(55.6% 0 0)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
