/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        boxShadow: {
          'form': '4px 4px 0px #1c1c1c',
        }
      },
    },
    plugins: [],
  }