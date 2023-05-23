const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.fxc': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        '.posabc': {
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          margin: 'auto'
        }
      })
    })
  ],
};