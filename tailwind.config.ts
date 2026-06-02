import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}', './studio/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: []
} satisfies Config
