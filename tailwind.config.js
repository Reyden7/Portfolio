/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '200px',
      md: '768',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Montserrat', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
        mono: ['Inconsolata', 'monospace'],
        cursive: ['Dancing Script', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
        sourceSans: ['Source Sans Pro', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        alegreya: ['Alegreya', 'serif'],
        noto: ['Noto Sans', 'sans-serif'],
        muli: ['Muli', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
        lora: ['Lora', 'serif'],
        merienda: ['Merienda', 'cursive'],
        amatic: ['Amatic SC', 'cursive'],
        abel: ['Abel', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        greatVibes: ['Great Vibes', 'cursive'],
      }
    },
  },
  plugins: [],
};
