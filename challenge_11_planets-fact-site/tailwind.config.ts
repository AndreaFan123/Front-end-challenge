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
        white: "#ffffff",
        darkBlue: "#070724",
        darkGrey: "#38384f",
        lightGrey: "#838391",
        mercury: "#419ebb",
        venus: "#eda249",
        earth: "#6d2ed5",
        mars: "#d14c32",
        jupiter: "#d83a34",
        saturn: "#cd5120",
        uranus: "#1ec2a4",
        neptune: "#2d68f0",
      },
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
        spartan: ["Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
