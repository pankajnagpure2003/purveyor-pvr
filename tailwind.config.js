/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050A14',
          900: '#0A1220',
          800: '#0F1B2E',
          700: '#162238',
          600: '#1E2E4A',
        },
        gold: {
          200: '#F6E2A8',
          300: '#EFCE7C',
          400: '#E4B65A',
          500: '#D4A13F',
          600: '#B07F26',
          700: '#8A611C',
        },
        bone: '#EDE7D9',
        rwa: '#4C7A6E',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"General Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
        'ledger': "linear-gradient(rgba(212,161,63,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,161,63,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        'ledger-grid': '48px 48px',
      },
      boxShadow: {
        'gold-glow': '0 0 60px -15px rgba(228,182,90,0.35)',
      },
    },
  },
  plugins: [],
}
