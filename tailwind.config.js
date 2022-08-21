/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "376px",
      sm: "600px",
      md: "769px",
      lg: "1025px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sf: "var(--font-s)",
        inter: "var(--font-i)",
      },
      fontSize: {
        sm: ["16px", "20px"],
        base: ["20px", "33px"],
        lg: ["25px", "32px"],
        xl: ["55px", "56px"],
        xxl: ["75px", "94px"],
      },
      fontWeight: {
        light: "var(--font-light)",
        regular: "var(--font-regular)",
        medium: "var(--font-medium)",
        semibold: "var(--font-semibold)",
        bold: "var(--font-bold)",
        extrabold: "var(--font-extrabold)",
        black: "var(--font-black)",
      },
      colors: {
        white: "var(--white)",
        body: "var(--body)",
        primary: "var(--primary)",
        black: "var(--black)",
        red: "var(--red)",
        gray: "var(--gray)",
      },
    },
  },
  plugins: [],
};
