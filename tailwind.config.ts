import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        mcblue: "#6CABDD",
        mcgray: "#E8F0FE",
        mcgraybg: "#EDF2F7",
        mctext: "#1C2C5B"
      }
    }
  },
  plugins: []
};

export default config;
