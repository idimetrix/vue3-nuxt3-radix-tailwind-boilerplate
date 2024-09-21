/* eslint-disable @typescript-eslint/no-require-imports  */

const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,jsx,ts,tsx}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      full: '100% !important',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      '2xs': '375px',
      // => @media (min-width: 375px) { ... }

      xs: '450px',
      // => @media (min-width: 450px) { ... }

      sm: '575px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },

    extend: {
      fontWeight: {
        inherit: 'inherit',
      },
      // Goto https://javisperez.github.io/tailwindcolorshades to generate colors
      colors: {
        current: 'currentColor',
        transparent: 'transparent',

        black: '#000000',
        white: '#ffffff',

        'cynical-black': '#171717',
        'granulated-sugar': '#FFFBF2',
        'ancient-stone': '#DDDAD3',
        sassy: '#C48564',
      },

      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms',
        slideUp: 'slideUp 300ms',
        wiggle: 'wiggle .75s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    require('tailwindcss-animate'),
    require('tailwindcss-3d'),
    require('tailwindcss-radix')(),
    plugin(({ addVariant }) => {
      addVariant('mac', '.mac &')
      addVariant('windows', '.windows &')
      addVariant('ios', '.ios &')
    }),
  ],
}
