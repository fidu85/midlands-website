/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte,html,js,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('/assets/hero_background.jpg')",
      }
    },
    fontFamily: {
      'sans': ['CooperHewitt Book'],
      'cooper-bold': ['CooperHewitt Bold'],
      'cooper-book': ['CooperHewitt Book'],
      'cooper-heavy': ['CooperHewitt Heavy'],
      'cooper-light': ['CooperHewitt Light'],
      'cooper-medium': ['CooperHewitt Medium'],
      'cooper-semibold': ['CooperHewitt Semibold'],
      'cooper-thin': ['CooperHewitt Thin'],
      'fontain': ['FontainRough'],
    },
    colors: {
      white: '#ffffff',
      orange: '#ffc16f',
      darkgray: '#232323',
      midgray: '#363636',
      darkblue: '#2f4858',
    },
  },
  plugins: [],
}
