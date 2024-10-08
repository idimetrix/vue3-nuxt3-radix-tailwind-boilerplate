import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import { getLanguage } from '~/utils'
import { type AppState } from '~/types/store'
import { languages } from '~/plugins/lang'

const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    device: 'desktop',
    language: '',
  }),
  actions: {
    getLanguageBasedOnBrowser() {
      let language = this.language.toLowerCase() || getLanguage()
      if (!languages.includes(language)) {
        language = 'en-us'
      }
      this.setLanguage(language)
    },
    setLanguage(language: string) {
      this.language = language
      this.changeI18NLang(language)
    },
    changeI18NLang(language: string) {
      const { vueApp } = useNuxtApp()
      vueApp.config.globalProperties.$i18n.locale = language
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})

export default useAppStore
