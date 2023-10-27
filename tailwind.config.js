/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maincolor: '#F36368',
        crimson: '#FF8162',
        yellow: '#3a3a0f',
        golden: '#FFCD60',
        light: '#B6B7B7'
      },
      fontFamily: {
        prompt: ['prompt', 'sans-serif'],
        archivo: ['Archivo Narrow', 'sans-serif'],
        julius: ['Julius Sans One', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif']
      },
      padding: {
        pad: '.3em .5em'
      },
      borderRadius: {
        br: '10px'
      }
    }
  },
  plugins: []
}
