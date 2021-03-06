import { i18n } from './i18n'
import axios from 'axios'

//TODO: refactor this logic
export function setLanguage(language) {
  i18n.locale = language

  axios.interceptors.request.use(config => {
    config.headers.common['Accept-Language'] = language
    return config
  })
  const html = document.querySelector('html')
  if (html != null) {
    html.setAttribute('lang', language)
  }
}

export function setLanguageAndLocale(language, locale) {
  setLanguage(language)
  i18n.setLocaleMessage(language, locale)
}

export async function loadLanguageFile(language = 'en') {
  return await loadLanguageDomains(language)
}

async function loadLanguageDomains(language) {
  const locale = await import(`./../langs/locales/${language}.json`)
  return locale
}
