import type React from "react"
import type { Metadata, Viewport } from "next"
import { Tajawal } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { I18nProvider } from "@/lib/i18n-context"
import "./globals.css"

const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["arabic", "latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "د. سامح العدوي - عيادة الأسنان | Dr. Ahmed Fady Dental Clinic",
  description:
    "عيادة د. أحمد فادي لطب الأسنان - خدمات طب الأسنان المتخصصة، تبييض، زراعة، تقويم، وتنظيف الأسنان | Dr. Ahmed Fady Dental Clinic - Specialized dental services",
  keywords:
    "دكتور أسنان المنصورة, طب أسنان, تبييض الأسنان, زراعة الأسنان, تقويم الأسنان, dentist Mansoura, teeth whitening, dental implants, orthodontics",
  openGraph: {
    title: "د. أحمد فادي - عيادة الأسنان",
    description: "خدمات طب الأسنان المتخصصة مع أحدث التقنيات",
    type: "website",
  },
  alternates: {
    canonical: "https://drahmedfady.com",
    languages: {
      "ar-EG": "https://drahmedfady.com/ar",
      "en-US": "https://drahmedfady.com/en",
    },
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1628" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const lang = localStorage.getItem('language');
                if (lang === 'en') {
                  document.documentElement.lang = 'en';
                  document.documentElement.dir = 'ltr';
                } else {
                  document.documentElement.lang = 'ar';
                  document.documentElement.dir = 'rtl';
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${tajawal.className} antialiased`} style={{ direction: "rtl" }}>
        <I18nProvider>{children}</I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
