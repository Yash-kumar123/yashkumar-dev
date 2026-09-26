/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAFAF7',
        soft: '#F4F5F2',
        card: '#FFFFFF',
        dark: {
          DEFAULT: '#111318',
          subtle: '#232731',
          muted: '#5D626D',
        },
        aqua: {
          DEFAULT: '#35D6D0',
          light: '#E6FAF9',
          glow: 'rgba(53, 214, 208, 0.35)',
        },
        sky: {
          DEFAULT: '#5BA8FF',
          light: '#EEF6FF',
          glow: 'rgba(91, 168, 255, 0.35)',
        },
        mint: {
          DEFAULT: '#78E5B1',
          light: '#EDFCF5',
        },
        lime: {
          DEFAULT: '#C6F36B',
          light: '#F8FEEF',
        },
        coral: {
          DEFAULT: '#FF7F70',
          light: '#FFF0EE',
        },
        peach: {
          DEFAULT: '#FFB68A',
          light: '#FFF5EF',
        },
        lavender: {
          DEFAULT: '#A994FF',
          light: '#F4F1FF',
          glow: 'rgba(169, 148, 255, 0.35)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        widest: '0.25em',
      },
      boxShadow: {
        'soft-sm': '0 2px 10px rgba(17, 19, 24, 0.04)',
        'soft-md': '0 8px 30px rgba(17, 19, 24, 0.06)',
        'soft-lg': '0 20px 50px rgba(17, 19, 24, 0.08)',
        'soft-xl': '0 30px 70px rgba(17, 19, 24, 0.12)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.06)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
    },
  },
  plugins: [],
}
