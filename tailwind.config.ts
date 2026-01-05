import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark luxury theme
        background: {
          DEFAULT: '#0a0e1a',
          secondary: '#0f1624',
        },
        primary: {
          DEFAULT: '#a78bfa', // Soft Light Purple
          dark: '#8b5cf6',
          light: '#c4b5fd',
        },
        secondary: {
          DEFAULT: '#f9a8d4', // Light Pink
          dark: '#f472b6',
        },
        text: {
          primary: '#f8fafc', // Off-white
          secondary: '#cbd5e1', // Muted gray
          tertiary: '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config

