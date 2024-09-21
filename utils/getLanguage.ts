export const getLanguage = (): string => {
  let language = ''
  if (typeof window !== 'undefined') {
    language = window.navigator.language.toLowerCase()
  }
  return language
}
