"use client"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"
import { useState } from "react"

export function Navbar() {
  const { language, setLanguage, t, dir } = useI18n()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { key: "nav.home", href: "#home" },
    { key: "nav.about", href: "#about" },
    { key: "nav.services", href: "#services" },
    { key: "nav.reviews", href: "#reviews" },
    { key: "nav.booking", href: "#booking" },
    { key: "nav.contact", href: "#contact" },
  ]

  return (
    <nav
      className="sticky top-0 z-50 bg-blue-900 border-b border-border shadow-sm h-20 p-2"
      style={{ direction: dir }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#home" className=" font-bold text-2xl text-white animate-fade-in-left">
            {t("home.title")}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-white hover:text-primary transition-colors font-medium"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <div className="flex gap-2 border border-border rounded-lg p-1">
              <button
                onClick={() => setLanguage("ar")}
                className={`px-2 py-1 rounded transition-all ${
                  language === "ar" ? "bg-primary text-white font-bold" : "text-white hover:bg-black"
                }`}
              >
                العربية
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded transition-all ${
                  language === "en" ? "bg-primary text-white font-bold" : "text-white hover:bg-black"
                }`}
              >
                English
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className="md:hidden border-t border-border py-4 space-y-2 animate-slide-down"
            style={{ direction: dir }}
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block px-4 py-2 hover:bg-muted rounded-lg transition-colors font-medium "
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
