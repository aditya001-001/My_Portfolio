/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          blue: {
            DEFAULT: '#0071e3',
            hover: '#0077ed',
            light: '#e8f2fc'
          },
          gray: {
            50: '#f5f5f7',
            100: '#e8e8ed',
            200: '#d2d2d7',
            300: '#86868b',
            400: '#1d1d1f',
            DEFAULT: '#86868b'
          },
          black: '#1d1d1f',
          bg: '#ffffff',
          darkBg: '#000000',
        }
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Open Sans',
          'Helvetica Neue',
          'sans-serif'
        ],
      },
      boxShadow: {
        'apple-card': '0 4px 30px rgba(0, 0, 0, 0.03)',
        'apple-hover': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'apple-modal': '0 20px 60px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'apple': '20px',
        'apple-lg': '24px',
      }
    },
  },
  plugins: [],
}
