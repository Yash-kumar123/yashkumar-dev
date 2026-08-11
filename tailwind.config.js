/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        void: '#050505',
        obsidian: '#0a0a0a',
        surface: '#111111',
        card: '#161616',
        line: 'rgba(255, 255, 255, 0.1)',
        ash: '#a1a1aa',
        silver: '#e4e4e7',
        muted: '#71717a',
        text: '#ffffff',
        ember: {
          DEFAULT: '#00f0ff',
          bright: '#38bdf8',
          glow: 'rgba(0, 240, 255, 0.35)',
          dim: 'rgba(0, 240, 255, 0.12)',
        },
        cyan: {
          DEFAULT: '#00f0ff',
          bright: '#06b6d4',
          glow: 'rgba(0, 240, 255, 0.35)',
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
