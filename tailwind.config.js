/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Change these two lines to change the site's accent color
        accent: { DEFAULT: '#0f766e', dark: '#115e59', soft: '#f0fdfa' },
        ink: '#0f172a',
      },
    },
  },
  plugins: [],
}
