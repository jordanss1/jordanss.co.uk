module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      keyframes: {
        startAbsolute: {
          '0%': { position: 'absolute' },
          '100%': { position: 'relative' },
        },
        endAbsolute: {
          '0%': { position: 'relative' },
          '100%': { position: 'absolute' },
        },
        fall: {
          '0%': { transform: 'translateY(-100%)', opacity: '1' },
          '7%': { opacity: 'var(--middle-opacity,.4)' },
          '10%': {
            transform: 'translateY(90vh)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(90vh)',
            opacity: '0',
          },
        },
        blink: {
          '25%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0',
          },
          '75%': {
            opacity: '1',
          },
        },
        explosion: {
          '0%': {
            'box-shadow': '0 0 15px 25px var(--explosion-color)',
          },
          '2%': {
            'box-shadow': '0 0 0px 0px var(--explosion-color)',
          },
          '100%': {
            'box-shadow': '0 0 0px 0px var(--explosion-color)',
          },
        },
        typing: {
          '0%': {
            width: '0%',
          },
          '66%': {
            width: '100%',
          },
          '100%': {
            width: '100%',
          },
        },
        blink_caret: {
          from: { 'border-color': 'transparent' },
          to: { 'border-color': 'transparent' },
          '50%': { 'border-color': 'white' },
        },
      },
      animation: {
        start_absolute: 'startAbsolute 500ms forwards',
        end_absolute: 'endAbsolute 1s forwards',
        fall: 'fall 5s linear var(--fall-delay) infinite',
        blink: 'blink 500ms linear infinite',
        typing:
          'typing 4s steps(25, end) infinite, blink_caret .5s step-end infinite',
        explosion: 'explosion 5s linear var(--fall-delay) infinite',
      },
      fontFamily: {
        quantico: ['Quantico', 'Arial', 'sans-serif'],
        oxanium: ['Oxanium', 'Arial', 'sans-serif'],
        abel: ['Abel', 'Arial', 'sans-serif'],
      },
      screens: {
        xs: '424px',
        sm: '640px',
        md: '1024px',
        lg: '1280px',
        xl: '1920px',
      },

      colors: {
        yellow: {
          50: '#fdffcc',
          100: '#faff99',
          200: '#f4ff66',
          300: '#efff33',
          400: '#ecff00',
          500: '#d4e600',
          600: '#bccc00',
          700: '#a3b300',
          800: '#8b9900',
          900: '#727f00',
        },
      },
    },
  },
  plugins: [],
};
