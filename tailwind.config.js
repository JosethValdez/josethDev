/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        cream: '#F5F0E8',
        ink: '#1A1A1A',
        muted: '#6B6B6B',
        accent: '#2D6A4F',
        'accent-light': '#52B788',
        border: '#E0D9CE',
      },
    },
  },
  plugins: [],
}
