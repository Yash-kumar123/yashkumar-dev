/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Light theme tokens
        light: {
          bg: '#F7F8F4',
          secondary: '#EEF5F2',
          surface: '#FFFFFF',
          elevated: '#FFFFFF',
          text: '#101318',
          subtext: '#4F5863',
          muted: '#7A838C',
          aqua: '#22C7C2',
          sky: '#4F9CFF',
          mint: '#71D7A4',
          lavender: '#9B8AFB',
          peach: '#FFAA83',
          sunlight: '#FFD978',
        },
        // Dark theme tokens
        darktheme: {
          bg: '#0B0E12',
          secondary: '#10151A',
          surface: '#151B21',
          elevated: '#1B2229',
          text: '#F2F6F4',
          subtext: '#B5C0C5',
          muted: '#7E8A92',
          aqua: '#4DE1D3',
          mint: '#8CE6B4',
          sky: '#76B7FF',
          lavender: '#A99BFF',
          peach: '#FFAD8F',
        },
        // Shared & semantic tokens
        cream: '#F7F8F4',
        soft: '#EEF5F2',
        card: '#FFFFFF',
        dark: {
          DEFAULT: '#101318',
          subtle: '#232731',
          muted: '#4F5863',
        },
        aqua: {
          DEFAULT: '#22C7C2',
          dark: '#4DE1D3',
          light: '#E6FAF9',
          glow: 'rgba(34, 199, 194, 0.35)',
        },
        sky: {
          DEFAULT: '#4F9CFF',
          dark: '#76B7FF',
          light: '#EEF6FF',
          glow: 'rgba(79, 156, 255, 0.35)',
        },
        mint: {
          DEFAULT: '#71D7A4',
          dark: '#8CE6B4',
          light: '#EDFCF5',
        },
        peach: {
          DEFAULT: '#FFAA83',
          dark: '#FFAD8F',
          light: '#FFF5EF',
        },
        lavender: {
          DEFAULT: '#9B8AFB',
          dark: '#A99BFF',
          light: '#F4F1FF',
          glow: 'rgba(155, 138, 251, 0.35)',
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
        'dark-card': '0 10px 40px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
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
