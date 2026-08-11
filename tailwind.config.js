/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        void: '#000000',
        obsidian: '#080808',
        surface: '#0d0d0d',
        card: '#121212',
        line: 'rgba(255, 255, 255, 0.12)',
        ash: '#a1a1aa',
        silver: '#e4e4e7',
        muted: '#a1a1aa',
        text: '#ffffff',
        ember: {
          DEFAULT: '#00f0ff',
          bright: '#38bdf8',
          glow: 'rgba(0, 240, 255, 0.4)',
          dim: 'rgba(0, 240, 255, 0.12)',
        },
        cyan: {
          DEFAULT: '#00f0ff',
          glow: '#38bdf8',
          dim: 'rgba(0, 240, 255, 0.12)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
