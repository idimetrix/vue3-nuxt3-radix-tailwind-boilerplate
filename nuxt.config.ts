const title = 'Vue3 Parallax Card'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-20',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ['~/styles/base.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title,
      htmlAttrs: {
        lang: 'en-US',
      },
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'ie=edge',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:locale',
          content: 'en_US',
        },
      ],
    },
  },
  typescript: {
    typeCheck: true,
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],
  googleFonts: {
    families: {
      Lexend: [400, 500, 700], // Add the required font weights
    },
    display: 'swap', // Optional: This ensures the text remains visible during font load
  },
})
