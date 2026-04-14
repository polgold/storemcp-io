import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#09090B',
          subtle: '#0C0C0F',
          card: '#18181B',
          elevated: '#1F1F23'
        },
        border: {
          DEFAULT: '#27272A',
          strong: '#3F3F46'
        },
        fg: {
          DEFAULT: '#FAFAFA',
          muted: '#A1A1AA',
          subtle: '#71717A'
        },
        accent: {
          DEFAULT: '#84CC16',
          hover: '#A3E635',
          dim: '#4D7C0F',
          glow: 'rgba(132, 204, 22, 0.15)'
        },
        link: {
          DEFAULT: '#60A5FA',
          hover: '#93C5FD'
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace']
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }]
      },
      boxShadow: {
        glow: '0 0 40px rgba(132, 204, 22, 0.15)',
        'glow-strong': '0 0 60px rgba(132, 204, 22, 0.25)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 1px 2px 0 rgba(0,0,0,0.4)'
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(132, 204, 22, 0.08), transparent)',
        'dot-grid':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up': 'fade-up 0.5s ease-out forwards',
        blink: 'blink 1s steps(2, start) infinite'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        }
      }
    }
  },
  plugins: []
};

export default config;
