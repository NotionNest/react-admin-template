import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './lang/en'
import zh from './lang/zh-CN'

i18n
  // 检测用户语言
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // 将i18n实例传递给react-i18next
  .use(initReactI18next)
  // 初始化i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en', // 首选语言
    interpolation: {
      escapeValue: false, // https://www.i18next.com/translation-function/interpolation#unescape
    },
    resources: {
      en: { translation: en },
      zh: { translation: zh },
    },
  })

export default i18n
