import i18n from 'i18next'
import ro from './translations/ro.json'
import en from './translations/en.json'

i18n.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: en,
    },
    ro: {
      translation: ro,
    },
    fallbackLng: "en",
  },
})


export default i18n