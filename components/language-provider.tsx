'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { Language } from '@/lib/i18n'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'es',
  setLanguage: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es')

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('portfolio-language')
    const browserLanguage: Language = navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es'
    const initialLanguage = savedLanguage === 'en' || savedLanguage === 'es' ? savedLanguage : browserLanguage
    setLanguageState(initialLanguage)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem('portfolio-language', nextLanguage)
    setLanguageState(nextLanguage)
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}