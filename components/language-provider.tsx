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
    try {
      const savedLanguage = window.localStorage.getItem('portfolio-language')
      if (savedLanguage === 'en' || savedLanguage === 'es') setLanguageState(savedLanguage)
    } catch {
      // Keep the Spanish default when browser storage is unavailable.
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    try {
      window.localStorage.setItem('portfolio-language', nextLanguage)
    } catch {
      // Language switching still works for the current visit.
    }
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
