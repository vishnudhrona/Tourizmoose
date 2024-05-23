/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'custom' : '1000px'
      },
      height: {
        '51' : '51px',
        '634' : '634px'
      },
      colors: {
        navbar: "rgba(252, 251, 251, 0.2)",
        banner_text : "#87FFF7",
        avatar_heading : "#00b48d",
        destination_color : "hwb(249 7% 6% / 0.849)",
        popular_packages : "#2b7786"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

