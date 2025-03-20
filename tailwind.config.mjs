/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
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
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        pacifico: ["var(--font-pacifico)", "cursive"],
        modak: ["var(--font-modak)"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow-white": {
            textShadow: "2px 2px 4px rgba(255, 255, 255, 0.6)", // White shadow
          },
          ".text-shadow-white-lg": {
            textShadow: "4px 4px 6px rgba(255, 255, 255, 0.8)", // Larger white shadow
          },
          ".text-shadow-white-xl": {
            textShadow: "6px 6px 8px rgba(255, 255, 255, 1)", // Extra large white shadow
          },
          ".text-shadow-black": {
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          },
          ".text-shadow-black-lg": {
            textShadow: "4px 4px 6px rgba(0, 0, 0, 0.8)",
          },
          ".text-shadow-black-xl": {
            textShadow: "6px 6px 8px rgba(0, 0, 0, 1)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};

export default tailwindConfig;
