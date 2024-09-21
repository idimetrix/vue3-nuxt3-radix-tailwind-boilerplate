import { createI18n } from 'vue-i18n'
import enUsLocale from '../lang/en-us'

const messages = {
  'en-us': {
    ...enUsLocale,
  },
}

export const languages = Object.keys(messages)

export const i18n = createI18n({
  legacy: false,
  locale: 'en-us',
  globalInjection: true,
  fallbackLocale: 'en-us',
  messages,
})

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(i18n)
})
