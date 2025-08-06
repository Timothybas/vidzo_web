/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media'
  theme: {
    extend: {
      colors: {
        background: "#f7f9fc",
        text: "#1e293b",
        primary: "#1e2a78",
        secondary: "#eaf1ff",
        muted: "#cbd5e1",
        warning: "#fbbf24",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.05)",
        feature: "0 10px 30px rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        slideDown: {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-in-out",
        float: "float 6s ease-in-out infinite",
        gradient: "gradientFlow 15s ease infinite",
        fadeIn: "fadeIn 0.6s ease-in-out",
      },
    },
  },
  plugins: [],
};
