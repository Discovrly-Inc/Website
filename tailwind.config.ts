import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4f46e5',
          hover: '#4338ca',
        },
        surface: {
          alt: '#f8f9fb',
        },
        text: {
          dark: '#0f172a',
          muted: '#64748b',
        },
        border: '#e2e8f0',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['56px', { fontWeight: '700', letterSpacing: '-0.02em', lineHeight: '1.1' }],
        'h2': ['40px', { fontWeight: '600', lineHeight: '1.2' }],
        'h3': ['24px', { fontWeight: '600', lineHeight: '1.3' }],
        'body': ['18px', { lineHeight: '1.7' }],
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};

export default config;
