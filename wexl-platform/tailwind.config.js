/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#113e59',
        secondary: '#113e59',
        accent: '#f6b519',
        background: '#F5F7FA',
        textPrimary: '#1a202c',
        textSecondary: '#2d3748',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'source-sans': ['Source Sans 3', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}

