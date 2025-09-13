import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        'large': 'clamp(1.75rem, 3vw, 4.5rem)',
        'medium': 'clamp(1rem, 1.8vw, 4rem)'
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
