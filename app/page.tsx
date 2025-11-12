"use client"
import { Navbar } from "@/components/navbar"
import { useI18n } from "@/lib/i18n-context"
import { HomePage } from "@/components/pages/home"
import { AboutPage } from "@/components/pages/about"
import { ServicesPage } from "@/components/pages/services"
import { ReviewsPage } from "@/components/pages/reviews"
import { BookingPage } from "@/components/pages/booking"
import { ContactPage } from "@/components/pages/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  const { dir } = useI18n()

  return (
    <div style={{ direction: dir }} className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HomePage />
        <AboutPage />
        <ServicesPage />
        <ReviewsPage />
        <BookingPage />
        <ContactPage />
      </main>
      <Footer />
    </div>
  )
}
