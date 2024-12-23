/** @type {import('tailwindcss').Config} */
export default {
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
    },
    backgroundImage: {
      vitaminc: "url('/images/bg-1.png')",
      vitaminB3: "url('/images/bg-2.png')",
      lactobacillus: "url('/images/bg-3.png')",
      bg4: "url('/images/bg-4.png')",
    },
  },
  plugins: [],
};
