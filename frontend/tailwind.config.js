/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9381ff',
        'secondary-1': '#b8b8ff',
        'secondary-2': '#f8f7ff',
        'secondary-3': '#fb8500',
        'background-1': '#ffb703',
        'background-2': '#219ebc',
        'background-3': '#023047',
        'background-4': '#8ecae6',
      },
    },
  },
  plugins: [],
};
