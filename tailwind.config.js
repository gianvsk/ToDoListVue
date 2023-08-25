/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue-custom': '#4EA8DE',
        'purple-custom': '#8284FA',
        'purple-dark-custom': '#5E60CE',
        'dark-blue-custom': '#1E6F9F',
        'grey-custom': '#D9D9D9',
        'light-grey-custom': '#F2F2F2',
        'dark-grey-custom': '#333',
        'grey-line-through': '#808080',
        'black-custom': '#262626',
        'dark-black-custom': '#0D0D0D'
      },
      fontSize: {
        'title': '2.5rem'
      },
      height: {
        'h-50': '12.5rem'
      },
      margin: {
        '91px': '91px'
      },
      spacing: {
        'padding-container': '352px'
      }
    },
  },
  plugins: [],
}

