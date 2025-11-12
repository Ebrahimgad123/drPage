"use client"

import { useI18n } from "@/lib/i18n-context"

export function ServicesPage() {
  const { t, dir } = useI18n()

  const services = [
    {
      title: t("services.whitening"),
      desc: t("services.whitening_desc"),
      icon: "✨",
    },
    {
      title: t("services.implants"),
      desc: t("services.implants_desc"),
      icon: "🦷",
    },
    {
      title: t("services.orthodontics"),
      desc: t("services.orthodontics_desc"),
      icon: "📐",
    },
    {
      title: t("services.cleaning"),
      desc: t("services.cleaning_desc"),
      icon: "🧹",
    },
  ]

  return (
    <section id="services" className="py-20 bg-green-200 from-background to-primary/5" style={{ direction: dir }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-balance">{t("services.title")}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
              <p className="text-foreground leading-relaxed text-lg">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
