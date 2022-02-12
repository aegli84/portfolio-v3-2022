module.exports = {
  darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      animation: {
        'fade': 'fadeIn .5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      colors: {
        whitest: 'var(--whitest)',
        white: 'var(--white)',
        white65: 'var(--white-65)',
        white85: 'var(--white-85)',
        bgTransparent: 'var(--transparent-bg)',
        primary: 'var(--primary)',
        bgPrimary: 'var(--dark-bg-primary)',
        darkPrimary: 'var(--dark-primary)',
        secondary: 'var(--secondary)',
        bgSecondary: 'var(--dark-bg-secondary)',
        darkSecondary: 'var(--dark-secondary)',
        dark: 'var(--dark)',
        bgDark: 'var(--dark-bg)',
        highlight: 'var(--highlight)'
      },
      fontFamily: {
        'bree':['Bree', 'Verdana', 'sans-serif'],
        'sans': ['Source Sans Pro', 'Verdana', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['Source Serif Pro', 'ui-serif', 'Georgia', 'serif'],
        'mono': ['Source Code Pro', 'ui-monospace', 'SFMono-Regular', 'monospace'],
    },
  },
    variants: {
      extend: {
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
  