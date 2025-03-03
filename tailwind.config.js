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
          '10%': {
            transform: 'translateY(120vh)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(120vh)',
            opacity: '0',
          },
        },
      
      },
      animation: {
        start_absolute: 'startAbsolute 500ms forwards',
        end_absolute: 'endAbsolute 1s forwards',
        fall: 'fall 5s linear var(--fall-delay) infinite',
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
