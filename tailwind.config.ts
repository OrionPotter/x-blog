import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1DA1F2',
          dark: '#1A8CD8',
        },
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#000000',
        },
        text: {
          primary: '#0F1419',
          secondary: '#536471',
          dark: {
            primary: '#F7F9F9',
            secondary: '#71767B',
          },
        },
        border: {
          DEFAULT: '#EFF3F4',
          dark: '#2F3336',
        },
        card: {
          DEFAULT: '#F7F9F9',
          dark: '#16181C',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        'sidebar': '300px',
        'content': '600px',
        'right-sidebar': '350px',
      },
      maxWidth: {
        'content': '600px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'var(--text-primary)',
            a: {
              color: 'var(--primary)',
              '&:hover': {
                color: 'var(--primary-dark)',
                textDecoration: 'underline',
              },
            },
            h1: {
              color: 'var(--text-primary)',
              fontWeight: '700',
              fontSize: '2em',
              marginBottom: '0.5em',
              paddingBottom: '0.3em',
              borderBottom: '1px solid var(--border)',
            },
            h2: {
              color: 'var(--text-primary)',
              fontWeight: '700',
              fontSize: '1.5em',
              marginBottom: '0.5em',
              paddingBottom: '0.3em',
              borderBottom: '1px solid var(--border)',
            },
            h3: {
              color: 'var(--text-primary)',
              fontWeight: '700',
              fontSize: '1.25em',
              marginBottom: '0.5em',
            },
            code: {
              color: 'var(--text-primary)',
              backgroundColor: 'var(--card)',
              padding: '0.2em 0.4em',
              borderRadius: '6px',
              fontSize: '85%',
              fontFamily: 'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace',
            },
            pre: {
              backgroundColor: 'var(--card)',
              color: 'var(--text-primary)',
              padding: '16px',
              borderRadius: '6px',
              overflow: 'auto',
              fontSize: '85%',
              lineHeight: '1.45',
              fontFamily: 'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace',
            },
            blockquote: {
              color: 'var(--text-secondary)',
              borderLeftColor: 'var(--border)',
              paddingLeft: '1em',
              marginLeft: '0',
              borderLeftWidth: '0.25em',
            },
            strong: {
              color: 'var(--text-primary)',
              fontWeight: '700',
            },
            'ul > li::marker': {
              color: 'var(--text-secondary)',
            },
            'ol > li::marker': {
              color: 'var(--text-secondary)',
            },
            table: {
              borderSpacing: '0',
              borderCollapse: 'collapse',
              display: 'block',
              width: 'max-content',
              maxWidth: '100%',
              overflow: 'auto',
            },
            'th, td': {
              padding: '6px 13px',
              border: '1px solid var(--border)',
            },
            th: {
              fontWeight: '700',
            },
            'tr:nth-child(2n)': {
              backgroundColor: 'var(--card)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config 