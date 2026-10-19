import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080808", // main background
        panel: "#101010", // sidebar background
        card: "#191919", // card background
        carddeep: "#141414", // secondary card background
        line: "#262626", // subtle dark-gray borders
        gold: "#E9A13B", // primary amber/gold accent
        ember: "#E4692C", // secondary orange accent
        mist: "#A6A6A6", // muted gray secondary text
        moss: "#6FA98A", // muted green success
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        card: "0 8px 24px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
