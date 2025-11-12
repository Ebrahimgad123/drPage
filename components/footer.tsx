"use client"

import { useI18n } from "@/lib/i18n-context"

export function Footer() {
  const { t, dir } = useI18n()

  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary/20" style={{ direction: dir }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <p className="text-2xl font-bold">{t("footer.clinic")}</p>
          <p className="text-primary-foreground/80">{t("footer.rights")} © 2025</p>
          <div className="flex gap-6 mt-6">
            <a
              href="https://wa.me/2001032243303"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.18l-.341.197-3.52-.923.941 3.432.203.323a9.79 9.79 0 00-1.55 5.244c0 5.409 4.4 9.81 9.81 9.81a9.833 9.833 0 007.01-2.898 9.782 9.782 0 002.8-6.912c0-5.409-4.4-9.81-9.81-9.81z" />
              </svg>
            </a>
            <a href="mailto:contact@drahmedfady.com" className="hover:opacity-80 transition-opacity">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
