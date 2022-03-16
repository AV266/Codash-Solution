module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideFromTop: {
          '0%': {
            transform: 'translateY(80%)'
            , opaciity: '0'
          },
          '100%': {
            transform: 'translateY(0%)'
            , opaciity: '1'
          },
        }
      },
      animation: {
        'slide-top': '.5s ease-out 0s 1 slideFromTop'
      }
    },
  },
  plugins: [],
  important: true,
  screens: {
    'xs':'340px',
    'sm1':'740px',
  }
}
