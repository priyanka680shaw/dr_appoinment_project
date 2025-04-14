/** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
            primary : {
              default : "#0D7DFF"
            }
        }
      },
    },
    darkMode: 'class', // <-- Important for dark mode via class
    plugins: [],
  };
  