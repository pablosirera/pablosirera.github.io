module.exports = {
  theme: {
    extend: {
      colors: {
        'yellow-main': {
          500: '#f1e05a',
        },
        'green-main': {
          400: '#4fc08d',
        },
        'gray-main': {
          200: '#eaecef',
          300: '#e4e4e4',
          600: '#586069',
          700: '#808080',
          950: '#1a1a1a',
        },
        'blue-main': {
          400: '#1f8ed5',
          600: '#0366d6',
          700: '#35495e',
          750: '#1f8ed540',
          800: '#2c3e50',
        },
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
