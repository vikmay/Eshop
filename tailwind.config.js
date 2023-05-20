/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        pingOnce: {
          "50%": { transform: "scale(1.5)" },
          100: { transform: "scale(1)" },
        },
      },
      animation: {
        pingOnce: "pingOnce 0.5s cubic-bezier(0, 0, 0.2, 1) ",
      },
    
      gridAutoColumns: {
        '2fr': 'minmax(0, 1fr)',
      }
    },
  },
  plugins: [],
}


