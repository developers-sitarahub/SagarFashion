import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Saffron & Gold inspired palette for Indian ethnic wear
        primary: {
          50: '#fffaf0',
          100: '#fef3e2',
          200: '#fde8c9',
          300: '#f9d8a4',
          400: '#f4c182',
          500: '#d4a574', // Rich gold
          600: '#b8915b',
          700: '#9a7448',
          800: '#7a5c3a',
          900: '#5f472f',
        },
        accent: {
          50: '#fff7ed',
          100: '#fed7aa',
          200: '#fdba74', // Warm saffron
          300: '#fb923c',
          400: '#f97316',
          500: '#ea580c',
          600: '#c2410c',
          700: '#9a3412',
          800: '#7c2d12',
          900: '#431407',
        },
        dark: '#1a1612',
        cream: '#faf8f5',
        sage: '#8b9a8f',
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
