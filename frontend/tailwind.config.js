/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        card: "4px 8px 20px rgba(65, 73, 80, 0.04)",
        cardHover: "4px 8px 20px rgba(65, 73, 80, 0.12)",
      },
      colors: {
        "prim-100": "#FFF8EB",
        "prim-200": "#FEE9C4",
        "prim-300": "#FEDA9D",
        "prim-400": "#FDCB75",
        "prim-500": "#FCB43A",
        "prim-600": "#E3A234",
        "prim-700": "#B07E29",
        "prim-800": "#7E5A1D",
        "prim-900": "#4C3611",
        "neutrals-100": "#FFFFFF",
        "neutrals-200": "#F8FBFF",
        "neutrals-300": "#F4F4F6",
        "neutrals-400": "#E9ECEF",
        "neutrals-500": "#DEE2E6",
        "neutrals-600": "#CED4DA",
        "neutrals-700": "#ADB5BD",
        "neutrals-800": "#6C757D",
        "neutrals-900": "#495057",
        "neutrals-1000": "#414950",
        "neutrals-1100": "#343A40",
        "neutrals-1200": "#232323",
        "error-100": "#FCE6E6",
        "error-300": "#F08380",
        "error-500": "#E10600",
        "success-100": "#DBF0D9",
        "success-300": "#A5DAA1",
        "success-500": "#4BB543",
        "warning-100": "#FFF1E7",
        "warning-300": "#FDBA87",
        "warning-500": "#FB750E",
        "info-100": "#E7F1FB",
        "info-300": "#88BBED",
        "info-500": "#1077DA",
      },
      fontFamily: {
        headings: ["var(--font-inter)"],
        paragraphs: ["var(--font-poppins)"],
      }
    },
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1280px",
      xl: "1440px",
      hd: "1920px",
    },
  },
  plugins: [],
}
