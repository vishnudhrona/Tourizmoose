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
        '634' : '434px'
      },
      colors: {
        navbar: "rgba(252, 251, 251, 0.2)",
        banner_text : "#87FFF7",
        banner_button : "#11A59B",
        avatar_heading : "#00b48d",
        destination_color : "hwb(249 7% 6% / 0.849)",
        popular_packages : "#2b7786",
        card_text : "#006464",
        card_text2 : "#0BD1C4",
        card_button : "#11A59B",
        mobile_nav_button : "rgba(153, 205, 248, 0.2)",
        mobile_nav_button_text : "#0463d9"
      },
      backgroundImage: {
        'moreBg': 'radial-gradient(40.71% 56.81% at 57.06% 62.14%, #0BD1C4 0%, #0BD0C3 0.01%, #00A398 100%)',
        'moreBg1' : 'radial-gradient(43.53% 64.18% at 56.47% 64.64%, #37A5D0 0%, #006AB3 100%)',
        'advBg' : 'linear-gradient(94.95deg, rgba(2, 175, 163, 1) 16.61%, rgba(31, 117, 185, 1) 126.63%)',
        'advTransparent' : 'rgba(255, 255, 255, 0) 10%',
        'footerMd' : 'linear-gradient(107.34deg, #1F478E 28.68%, #0493D1 91.74%);'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

