/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./TailWind1/**/*.{html,js}",
            "./TailWind1/*.{html,js}",
            "./dist/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

