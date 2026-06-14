import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0E1411',
        bg2: '#16201B',
        card: '#1B2620',
        fg: '#E9ECE6',
        muted: '#9AA89D',
        line: 'rgba(233,236,230,0.10)',
        accent: '#6FB23E',
        'accent-dark': '#4C7E2C',
        sand: '#D7A24E',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      maxWidth: { shell: '1320px' },
      transitionTimingFunction: {
        quint: 'cubic-bezier(0.22,1,0.36,1)',
        expo: 'cubic-bezier(0.16,1,0.3,1)',
      },
    },
  },
  plugins: [],
}
export default config
