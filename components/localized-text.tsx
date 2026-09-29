'use client'

import { useLanguage } from './language-provider'

export function LocalizedText({ es, en }: { es: string; en: string }) {
  const { language } = useLanguage()
  return <>{language === 'en' ? en : es}</>
}