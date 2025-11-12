"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { translations, type Language } from "./translations"

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ar")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem("language") as Language | null
    if (savedLang && (savedLang === "ar" || savedLang === "en")) {
      setLanguageState(savedLang)
    } else {
      setLanguageState("ar")
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const getTranslation = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  const dir = language === "ar" ? "rtl" : "ltr"

  return (
    <I18nContext.Provider
      value={{
        language,
        setLanguage,
        t: getTranslation,
        dir,
      }}
    >
      {mounted ? children : null}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider")
  }
  return context
}
