"use client"
import { useI18n } from "@/lib/i18n-context"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from "next/image"
export function HomePage() {
  const { t, dir } = useI18n()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-green-200 from-primary/10 to-background pt-20 pb-20"
      style={{ direction: dir }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Dr. Ahmed Fady Dental Clinic",
            description: "Professional dental clinic services",
            image: "https://drahmedfady.com/doctor.jpg",
            telephone: "+201001001001",
            url: "https://drahmedfady.com",
          }),
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`${isVisible ? "animate-fade-in-left" : "opacity-0"} space-y-6`}>
            <p className="text-primary font-bold text-lg">{t("home.welcome")}</p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance">{t("home.title")}</h1>
            <p className="text-xl text-muted-foreground">{t("home.subtitle")}</p>
            <p className="text-lg text-foreground leading-relaxed">{t("home.description")}</p>
            <div className="pt-6">
              <a href="#booking">
                <Button className="bg-primary text-primary-foreground px-8 py-6 text-lg font-bold rounded-lg hover:opacity-90 transition-opacity">
                  {t("home.cta")}
                </Button>
              </a>
            </div>
          </div>

          {/* Doctor Image Placeholder */}
          <div
            className={`${isVisible ? "animate-fade-in-right" : "opacity-0"}  md:flex items-center justify-center`}
          >
            <div className="w-full h-96 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <Image src="/doc.jpg" alt="Dr. Ibrahim gad" className="w-full h-full rounded-2xl object-cover"width={200} height={200} />
                <p className="text-primary font-bold text-lg">{t("about.doctor")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Preview */}
        <div className="mt-20 pt-20 border-t border-border">
          <h2 className="text-3xl font-bold text-center mb-12 text-balance">{t("home.services_preview")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t("services.whitening"), icon: "✨", desc: t("services.whitening_desc") },
              { title: t("services.implants"), icon: "🦷", desc: t("services.implants_desc") },
              { title: t("services.orthodontics"), icon: "📐", desc: t("services.orthodontics_desc") },
              { title: t("services.cleaning"), icon: "🧹", desc: t("services.cleaning_desc") },
            ].map((service, idx) => (
              <a
                key={idx}
                href="#services"
                className="p-6 bg-card border border-border rounded-lg hover:shadow-lg hover:border-primary transition-all animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <p className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </p>
                <p className="text-sm text-muted-foreground mt-2">{service.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
