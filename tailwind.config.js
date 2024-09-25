/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx,html}" ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],

  height: theme => ({
    auto: 'auto',
    ...theme('spacing'),
    full: '100%',
    screen: 'calc(var(--vh) * 100)',
  }),
  minHeight: theme => ({
    '0': '0',
    ...theme('spacing'),
    full: '100%',
    screen: 'calc(var(--vh) * 100)',
  }),
}

