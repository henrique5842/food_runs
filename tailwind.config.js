/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
          regular: "Inter_400Regular",
          semiBold: "Inter_600SemiBold",
          Black: "Inter_900Black",
        
      }
    },
  },
  plugins: [],
}
