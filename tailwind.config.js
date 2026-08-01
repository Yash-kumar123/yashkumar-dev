/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b1220',
        surface: '#111a2e',
        card: '#16223a',
        line: '#233047',
        muted: '#8896ab',
        text: '#e7ecf5',
        amber: '#f5a524',
        violet: '#8b7cf6',
        teal: '#2dd4bf',
        rose: '#fb7185',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
