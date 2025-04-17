/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // 'Poppins' is the name Google uses
      },
    },
  },
  plugins: [typography, forms],
};
