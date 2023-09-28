/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/customers  /*.liquid',
    './templates/*.liquid',
  ],
  purge: {
    enabled: true,
    content: ['./**/*.liquid'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
