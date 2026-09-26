/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#070707',
        primary: '#070707',
        secondary: '#0D0E12',
        surface: {
          DEFAULT: '#14151A',
          subtle: '#0D0E12',
          elevated: '#1B1D23',
          card: '#161820',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.06)',
          light: 'rgba(255, 255, 255, 0.12)',
          accent: 'rgba(0, 240, 255, 0.3)',
          purple: 'rgba(112, 0, 255, 0.3)',
        },
        paper: '#F5F3EE',
        muted: '#9698A3',
        cyan: {
          DEFAULT: '#00F0FF',
          bright: '#38BDF8',
          glow: 'rgba(0, 240, 255, 0.35)',
          dim: 'rgba(0, 240, 255, 0.12)',
        },
        violet: {
          DEFAULT: '#7000FF',
          bright: '#8B5CF6',
          glow: 'rgba(112, 0, 255, 0.35)',
          dim: 'rgba(112, 0, 255, 0.12)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.25em',
        ultra: '0.35em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 24s linear infinite',
      },
    },
  },
  plugins: [],
}
