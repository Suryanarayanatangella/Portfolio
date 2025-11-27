/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#113e59',
          dark: '#1a5a7f',
        },
        secondary: {
          light: '#113e59',
          dark: '#0d2f43',
        },
        accent: {
          light: '#f6b519',
          dark: '#ffc940',
        },
        background: {
          light: '#F5F7FA',
          dark: '#0f172a',
        },
        surface: {
          light: '#ffffff',
          dark: '#1e293b',
        },
        text: {
          primary: {
            light: '#2E3A59',
            dark: '#e2e8f0',
          },
          secondary: {
            light: '#64748b',
            dark: '#94a3b8',
          },
        },
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
        'card-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card-hover-dark': '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

