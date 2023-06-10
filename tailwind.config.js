/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--roboto-font)",
        title: "var(--baloo-font)",
      },
      colors: {
        yellow: {
          600: "#C47F17",
          500: "#DBAC2C",
          400: "#F1E9C9",
        },
        purple: {
          600: "#4B2995",
          500: "#8047F8",
          400: "#EBE5F9",
        },
        base: {
          title: "#272221",
          subtitle: "#403937",
          text: "#574F4D",
          label: "#8D8686",
          hover: "#D7D5D5",
          button: "#E6E5E5",
          input: "#EDEDED",
          card: "#F3F2F2",
          background: "#FAFAFA",
        },
      },
    },
  },
  plugins: [],
};
